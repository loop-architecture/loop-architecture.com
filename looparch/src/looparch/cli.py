"""Command-line interface for looparch."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import yaml

from . import __version__, flow, importer
from .model import Architecture, LoopError, load_architecture
from .sync import sync
from .templates import scaffold
from .validate import check, validate_schema

_USE_COLOR = sys.stdout.isatty()


def _c(text: str, code: str) -> str:
    return f"\033[{code}m{text}\033[0m" if _USE_COLOR else text


def ok(t: str) -> str: return _c(t, "32")
def err(t: str) -> str: return _c(t, "31")
def warn(t: str) -> str: return _c(t, "33")
def dim(t: str) -> str: return _c(t, "2")


def _load(path: str) -> Architecture:
    try:
        return load_architecture(path)
    except LoopError as e:
        print(err(f"✗ {e}"), file=sys.stderr)
        sys.exit(2)


# --- commands ---------------------------------------------------------------
def cmd_init(args: argparse.Namespace) -> int:
    out = Path(args.output or f"{args.id}.looparch.yaml")
    if out.exists() and not args.force:
        print(err(f"✗ {out} already exists (use --force to overwrite)"), file=sys.stderr)
        return 1
    out.write_text(scaffold(args.id), encoding="utf-8")
    print(ok(f"✓ wrote {out}"))
    print(dim(f"  next: looparch validate {out}"))
    return 0


def _report(arch: Architecture, do_lint: bool) -> int:
    issues = check(arch, do_lint=do_lint)
    errors = [i for i in issues if i.level == "error"]
    warnings = [i for i in issues if i.level == "warning"]
    for i in errors:
        print(err(str(i)))
    for i in warnings:
        print(warn(str(i)))
    if errors:
        print(err(f"✗ invalid, {len(errors)} error(s), {len(warnings)} warning(s)"))
        return 1
    tail = f" ({len(warnings)} warning(s))" if warnings else ""
    print(ok(f'✓ valid, "{arch.name}": {len(arch.loops)} loops, {len(arch.systems)} systems{tail}'))
    return 0


def cmd_validate(args: argparse.Namespace) -> int:
    return _report(_load(args.file), do_lint=not args.no_lint)


def cmd_lint(args: argparse.Namespace) -> int:
    arch = _load(args.file)
    schema_errors = validate_schema(arch)
    if schema_errors:
        for i in schema_errors:
            print(err(str(i)))
        print(err("✗ fix schema errors before linting"))
        return 1
    return _report(arch, do_lint=True)


def cmd_view(args: argparse.Namespace) -> int:
    import tempfile
    import webbrowser

    arch = _load(args.file)
    # The visualizer builds the diagram from the YAML itself; we just hand it the file.
    yaml_text = Path(args.file).read_text(encoding="utf-8")
    html = flow.page(yaml_text, title=arch.name)
    if args.output:
        out = Path(args.output)
        out.write_text(html, encoding="utf-8")
    else:
        fd = tempfile.NamedTemporaryFile(
            prefix=f"{arch.id or 'loop-architecture'}-", suffix=".html", delete=False, mode="w", encoding="utf-8"
        )
        fd.write(html)
        fd.close()
        out = Path(fd.name)
    print(ok(f"✓ opening {out}  ({len(arch.loops)} loops, {len(arch.systems)} systems)"))
    webbrowser.open(out.resolve().as_uri())
    return 0


def _sync_from_claude(args: argparse.Namespace) -> int:
    """Reverse sync: read Claude Code routines and reconstruct a Loop Architecture YAML."""
    descriptors = importer.load_descriptors(args.file)
    if not descriptors:
        print(err(f"✗ no routine descriptors found under {args.file}"), file=sys.stderr)
        return 1
    arch_id = args.id or (Path(args.file).resolve().name if Path(args.file).is_dir() else "imported")
    arch_id = "".join(c if c.isalnum() else "-" for c in arch_id.lower()).strip("-") or "imported"
    data = importer.build(descriptors, arch_id=arch_id)
    text = yaml.safe_dump(data, sort_keys=False, allow_unicode=True, default_flow_style=False, width=100)
    if args.output:
        Path(args.output).write_text(text, encoding="utf-8")
        print(ok(f"✓ wrote {args.output}  ({len(data['loops'])} loops, {len(data['systems'])} systems)"))
        print(dim("  review observe/act and triggers, then: looparch validate"))
    else:
        print(text, end="")
    return 0


def cmd_sync(args: argparse.Namespace) -> int:
    # Reverse: pull the architecture out of existing Claude Code routines.
    if args.from_claude:
        return _sync_from_claude(args)

    # Forward: sync the YAML to Claude Code routines.
    arch = _load(args.file)
    errors = [i for i in check(arch) if i.level == "error"]
    if errors and not args.force:
        for i in errors:
            print(err(str(i)))
        print(err("✗ refusing to sync an invalid architecture (use --force)"))
        return 1
    if args.loop and not arch.loop(args.loop):
        print(err(f"✗ no loop '{args.loop}'"), file=sys.stderr)
        return 1
    results = sync(arch, root=args.root, only=args.loop, local=args.local)
    if not results:
        print(warn("no loops synced"))
        return 0
    for r in results:
        print(ok(f"✓ /{r.command_name}") + dim(f"  → {r.command_path}"))
        if not args.local:
            # Routines are cloud-managed: register each command with /schedule.
            print(dim(f"    cloud: run  /schedule  in Claude Code, running /{r.command_name}  (trigger: {r.trigger})"))
    print(ok(f"✓ synced {len(results)} loop(s)"))
    if args.local:
        print(dim("  wrote local .claude/routines descriptors (offline record; read back with --from-claude)"))
    else:
        print(dim("  routines live in your claude.ai account, create them at claude.ai/code with /schedule"))
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="looparch",
        description="Loop Architecture, validate, visualize and sync agentic loops.",
    )
    p.add_argument("--version", action="version", version=f"looparch {__version__}")
    sub = p.add_subparsers(dest="command", required=True)

    s = sub.add_parser("init", help="scaffold a new Loop Architecture file")
    s.add_argument("id", help="architecture id (kebab-case)")
    s.add_argument("-o", "--output", help="output path (default: <id>.looparch.yaml)")
    s.add_argument("--force", action="store_true")
    s.set_defaults(func=cmd_init)

    s = sub.add_parser("validate", help="validate against the schema and lint")
    s.add_argument("file")
    s.add_argument("--no-lint", action="store_true", help="schema check only")
    s.set_defaults(func=cmd_validate)

    s = sub.add_parser("lint", help="best-practice checks")
    s.add_argument("file")
    s.set_defaults(func=cmd_lint)

    s = sub.add_parser("view", help="open the interactive diagram in a browser")
    s.add_argument("file")
    s.add_argument("-o", "--output", help="write the HTML page here instead of opening a temp file")
    s.set_defaults(func=cmd_view)

    s = sub.add_parser("sync", help="sync the YAML to Claude Code routines (or --from-claude to reverse)")
    s.add_argument("file", help="the .looparch.yaml (forward), or a project/.claude path (--from-claude)")
    s.add_argument("loop", nargs="?", help="sync only this loop id (default: all)")
    s.add_argument("--root", default=".", help="project root to write .claude/ into")
    s.add_argument("--force", action="store_true", help="sync even if invalid")
    s.add_argument("--local", action="store_true",
                   help="also write local .claude/routines/*.json descriptors (default: cloud, print /schedule)")
    s.add_argument("--from-claude", action="store_true",
                   help="reverse: read Claude Code routines and reconstruct the Loop Architecture YAML")
    s.add_argument("-o", "--output", help="reverse only: output YAML (default: stdout)")
    s.add_argument("--id", help="reverse only: architecture id (default: from the directory name)")
    s.set_defaults(func=cmd_sync)

    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
