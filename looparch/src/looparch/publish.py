"""Publish loops as Claude Code routines (slash command + routine descriptor)."""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

from .model import Architecture, Loop
from .templates import routine_prompt


@dataclass
class PublishResult:
    loop_id: str
    command_path: Path
    routine_path: Path
    schedule: str | None


def publish_loop(arch: Architecture, loop: Loop, root: str | Path = ".") -> PublishResult:
    """Write a Claude Code slash command and a routine descriptor for one loop."""
    root = Path(root)
    commands_dir = root / ".claude" / "commands"
    routines_dir = root / ".claude" / "routines"
    commands_dir.mkdir(parents=True, exist_ok=True)
    routines_dir.mkdir(parents=True, exist_ok=True)

    command_name = f"loop-{loop.id}"
    command_path = commands_dir / f"{command_name}.md"
    routine_path = routines_dir / f"{loop.id}.json"
    prompt = routine_prompt(arch, loop)

    # Slash command: YAML frontmatter (Claude Code fields) + the rendered prompt.
    fm = [f"description: Run the {loop.name}"]
    if loop.model:
        fm.append(f"model: {loop.model}")
    if loop.tools:
        fm.append("allowed-tools: " + " ".join(loop.tools))
    command_path.write_text("---\n" + "\n".join(fm) + "\n---\n\n" + prompt, encoding="utf-8")

    # Routine descriptor: mirrors how Claude Code routines are defined.
    descriptor: dict = {"name": loop.name, "command": f"/{command_name}", "prompt": prompt}
    if loop.model:
        descriptor["model"] = loop.model
    repos = arch.repositories_for(loop)
    conns = arch.connectors_for(loop)
    if repos:
        descriptor["repositories"] = repos
    if conns:
        descriptor["connectors"] = conns

    # A loop can have several triggers; emit each in routine terms.
    triggers: list[dict] = []
    for ttype, val in loop.typed_triggers():
        if ttype == "schedule":
            triggers.append({"type": "schedule", "schedule": val})
        elif ttype == "once":
            triggers.append({"type": "once", "runAt": val})
        elif ttype == "event":
            triggers.append({"type": "event", "githubTrigger": {"event": val}})
        else:
            triggers.append({"type": "manual"})
    descriptor["triggers"] = triggers

    routine_path.write_text(json.dumps(descriptor, indent=2) + "\n", encoding="utf-8")
    return PublishResult(loop.id, command_path, routine_path, loop.schedule())


def publish(arch: Architecture, root: str | Path = ".", only: str | None = None) -> list[PublishResult]:
    """Publish all loops (or just the loop with id == only)."""
    results: list[PublishResult] = []
    for lp in arch.loops:
        if only and lp.id != only:
            continue
        results.append(publish_loop(arch, lp, root=root))
    return results
