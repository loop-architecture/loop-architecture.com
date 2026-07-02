"""Import existing Claude Code routines back into a Loop Architecture YAML.

Reads a project's `.claude/routines/*.json` descriptors (and the matching
`.claude/commands/loop-*.md` prompts, when present) — the artifacts `looparch
publish` produces — and reconstructs the `id` / `systems` / `loops` document.

The routine descriptor carries the trigger, model, repositories and connectors;
the command prompt carries the systems the loop uses / writes back to and their
descriptions. Anything missing degrades gracefully.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

_SECTION = re.compile(r"^##\s+(.*)$")
_BULLET_ID = re.compile(r"^-\s+\*\*([a-z0-9][a-z0-9-]*)\*\*(?::\s+(.*))?$")


def _slug(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return s or "loop"


def _trigger_from_descriptor(d: dict) -> object:
    """Return a trigger string, a list of them, or None (manual)."""
    out: list[str] = []
    entries = d.get("triggers")
    if isinstance(entries, list):
        for e in entries:
            if e.get("type") == "schedule" and e.get("schedule"):
                out.append(e["schedule"])
            elif e.get("type") == "once" and e.get("runAt"):
                out.append(e["runAt"])
            elif e.get("type") == "event":
                ev = (e.get("githubTrigger") or {}).get("event")
                if ev:
                    out.append(ev)
    else:  # legacy single-field descriptor
        if d.get("schedule"):
            out.append(d["schedule"])
        elif d.get("runAt"):
            out.append(d["runAt"])
        elif d.get("githubTrigger", {}).get("event"):
            out.append(d["githubTrigger"]["event"])
    if not out:
        return None
    return out[0] if len(out) == 1 else out


def _parse_command(md: str) -> dict:
    """Pull prompt, observe/act ids and system descriptions out of a command prompt."""
    result = {"prompt": "", "observe": [], "act": [], "systems": {}}
    section = None
    prompt_lines: list[str] = []
    for raw in md.splitlines():
        line = raw.rstrip()
        m = _SECTION.match(line)
        if m:
            section = m.group(1).lower()
            continue
        if section == "what to do":
            if line.strip():
                prompt_lines.append(line.strip())
        elif section and section.startswith("systems you use"):
            b = _BULLET_ID.match(line.strip())
            if b:
                result["observe"].append(b.group(1))
                _record_system(result["systems"], b.group(1), b.group(2))
        elif section and section.startswith("systems you write back"):
            b = _BULLET_ID.match(line.strip())
            if b:
                result["act"].append(b.group(1))
                _record_system(result["systems"], b.group(1), b.group(2))
    result["prompt"] = " ".join(prompt_lines).strip()
    return result


def _record_system(systems: dict, sid: str, detail: str | None) -> None:
    entry = systems.setdefault(sid, {"id": sid})
    if not detail:
        return
    parts = [p.strip() for p in detail.split("·")]
    desc = parts[0] if parts else ""
    if desc:
        entry["description"] = desc
    for extra in parts[1:]:
        if extra.startswith("http"):
            key = "repository" if "github.com" in extra else "url"
            entry[key] = extra


def build(descriptors: list[tuple[dict, str | None]], arch_id: str = "imported") -> dict:
    """Build an architecture dict from (routine descriptor, command markdown) pairs."""
    systems: dict[str, dict] = {}
    loops: list[dict] = []

    for desc, md in descriptors:
        command = (desc.get("command") or "").lstrip("/")
        lid = desc.get("id") or (command[5:] if command.startswith("loop-") else _slug(desc.get("name", "")))
        parsed = _parse_command(md) if md else {"prompt": "", "observe": [], "act": [], "systems": {}}

        for sid, entry in parsed["systems"].items():
            merged = systems.setdefault(sid, {"id": sid})
            merged.update({k: v for k, v in entry.items() if v})

        # Only when there is no prompt to recover systems from, fall back to the
        # descriptor's repositories / connectors (avoids spurious duplicate systems).
        if md is None:
            for repo in desc.get("repositories", []) or []:
                sid = _slug(repo.rstrip("/").split("/")[-1])
                systems.setdefault(sid, {"id": sid}).setdefault("repository", repo)
            for conn in desc.get("connectors", []) or []:
                systems.setdefault(conn, {"id": conn}).setdefault("connector", conn)

        observe = parsed["observe"] or [s.get("id") for s in [] ]
        act = parsed["act"]
        if not observe and not act:
            # No prompt to recover direction from — put every known system on both sides.
            fallback = list(parsed["systems"].keys())
            observe, act = fallback, fallback

        loop: dict = {"id": lid, "name": desc.get("name", lid)}
        trig = _trigger_from_descriptor(desc)
        if trig is not None:
            loop["trigger"] = trig
        if desc.get("model"):
            loop["model"] = desc["model"]
        loop["observe"] = observe or ["unknown"]
        loop["act"] = act or ["unknown"]
        loop["prompt"] = parsed["prompt"] or desc.get("prompt", "").strip()
        loops.append(loop)

    return {
        "id": arch_id,
        "name": arch_id.replace("-", " ").title(),
        "systems": list(systems.values()) or [{"id": "unknown"}],
        "loops": loops,
    }


def load_descriptors(path: str | Path) -> list[tuple[dict, str | None]]:
    """Find routine JSONs under a project/`.claude` dir and pair each with its command."""
    root = Path(path)
    candidates: list[Path] = []
    if root.is_file() and root.suffix == ".json":
        candidates = [root]
    else:
        for base in (root, root / ".claude"):
            rdir = base / "routines" if base.name != "routines" else base
            if rdir.is_dir():
                candidates = sorted(rdir.glob("*.json"))
                break
        if not candidates and (root / "routines").is_dir():
            candidates = sorted((root / "routines").glob("*.json"))

    out: list[tuple[dict, str | None]] = []
    for f in candidates:
        desc = json.loads(f.read_text(encoding="utf-8"))
        cmd = (desc.get("command") or "").lstrip("/")
        md_path = f.parent.parent / "commands" / f"{cmd}.md"
        md = md_path.read_text(encoding="utf-8") if md_path.is_file() else None
        out.append((desc, md))
    return out
