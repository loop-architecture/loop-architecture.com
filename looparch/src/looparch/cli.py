"""Command-line interface for looparch."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from . import __version__, architecture, flow
from .model import Architecture, LoopError, load_architecture
from .publish import publish
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
        print(err(f"✗ invalid — {len(errors)} error(s), {len(warnings)} warning(s)"))
        return 1
    tail = f" ({len(warnings)} warning(s))" if warnings else ""
    print(ok(f'✓ valid — "{arch.name}": {len(arch.loops)} loops, {len(arch.systems)} systems{tail}'))
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


def cmd_show(args: argparse.Namespace) -> int:
    arch = _load(args.file)
    p = print
    p(_c(arch.name, "1;35") + dim(f"  [{arch.id}]"))
    p(dim(f"{len(arch.loops)} loops · {len(arch.systems)} systems"))
    p("")
    p(_c("systems", "1"))
    for s in arch.systems:
        meta = s.url or s.repository or ""
        p(f"  · {s.id} " + dim(f"({arch.system_role(s.id)})") + (f" {dim(meta)}" if meta else ""))
    p("")
    p(_c("loops", "1"))
    for lp in arch.loops:
        p(f"  {_c(lp.name, '1;36')} " + dim(f"{lp.trigger}"))
        p(f"    {dim('use:')} {', '.join(lp.observe)}  {dim('→')}  {dim('write:')} {', '.join(lp.act)}")
        p(f"    {dim('prompt:')} {lp.prompt}")
    return 0


def cmd_diagram(args: argparse.Namespace) -> int:
    arch = _load(args.file)
    out = Path(args.output or f"{arch.id or 'loop-architecture'}.svg")
    try:
        architecture.render(arch, out, favicons=not args.no_favicons)
    except RuntimeError as e:
        print(err(f"✗ {e}"), file=sys.stderr)
        return 1
    print(ok(f"✓ wrote {out}  ({len(arch.loops)} loops, {len(arch.systems)} systems)"))
    return 0


def cmd_export(args: argparse.Namespace) -> int:
    arch = _load(args.file)
    out = Path(args.output or f"{arch.id or 'loop-architecture'}.flow.json")
    flow.render(arch, out, favicons=not args.no_favicons)
    print(ok(f"✓ wrote {out}  ({len(arch.loops)} loops, {len(arch.systems)} systems)"))
    return 0


def cmd_publish(args: argparse.Namespace) -> int:
    arch = _load(args.file)
    errors = [i for i in check(arch) if i.level == "error"]
    if errors and not args.force:
        for i in errors:
            print(err(str(i)))
        print(err("✗ refusing to publish an invalid architecture (use --force)"))
        return 1
    if args.loop and not arch.loop(args.loop):
        print(err(f"✗ no loop '{args.loop}'"), file=sys.stderr)
        return 1
    results = publish(arch, root=args.root, only=args.loop)
    if not results:
        print(warn("no loops published"))
        return 0
    for r in results:
        sched = f"  ↻ {r.schedule}" if r.schedule else ""
        print(ok(f"✓ /{'loop-' + r.loop_id}") + dim(f"  → {r.command_path}") + dim(sched))
    print(ok(f"✓ published {len(results)} loop(s)"))
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="looparch",
        description="Loop Architecture — validate, visualize and publish agentic loops.",
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

    s = sub.add_parser("show", help="pretty-print the architecture")
    s.add_argument("file")
    s.set_defaults(func=cmd_show)

    s = sub.add_parser("diagram", help="render ALL loops + systems as one architecture diagram")
    s.add_argument("file")
    s.add_argument("-o", "--output", help="output image (.svg or .png; default: <id>.svg)")
    s.add_argument("--no-favicons", action="store_true", help="skip fetching system favicons")
    s.set_defaults(func=cmd_diagram)

    s = sub.add_parser("export", help="export React Flow JSON for the interactive diagram")
    s.add_argument("file")
    s.add_argument("-o", "--output", help="output JSON (default: <id>.flow.json)")
    s.add_argument("--no-favicons", action="store_true", help="omit favicon URLs")
    s.set_defaults(func=cmd_export)

    s = sub.add_parser("publish", help="publish loops as Claude Code routines")
    s.add_argument("file")
    s.add_argument("loop", nargs="?", help="publish only this loop id (default: all)")
    s.add_argument("--root", default=".", help="project root to write .claude/ into")
    s.add_argument("--force", action="store_true", help="publish even if invalid")
    s.set_defaults(func=cmd_publish)

    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
