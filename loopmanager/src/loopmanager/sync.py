"""Sync a Loop Architecture to Claude Code routines.

Routines are cloud-managed (they live in your claude.ai account and are created
with `/schedule`), so by default `sync` writes each loop's slash command
(`.claude/commands/loop-<id>.md`, a real Claude Code custom command) and tells you
the `/schedule` step to register it in the cloud. `--local` additionally writes a
`.claude/routines/<id>.json` descriptor, an offline record that the reverse
`sync --from-claude` can read back.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

from .model import Architecture, Loop
from .templates import routine_prompt


@dataclass
class SyncResult:
    loop_id: str
    command_name: str          # "loop-<id>"
    command_path: Path
    routine_path: Path | None  # only written with local=True
    schedule: str | None
    trigger: str               # human-readable trigger(s)


def _descriptor(arch: Architecture, loop: Loop, command_name: str, prompt: str) -> dict:
    """The routine descriptor, mirroring how Claude Code routines are defined."""
    descriptor: dict = {"name": loop.name, "command": f"/{command_name}", "prompt": prompt}
    if loop.model:
        descriptor["model"] = loop.model
    repos = arch.repositories_for(loop)
    conns = arch.connectors_for(loop)
    if repos:
        descriptor["repositories"] = repos
    if conns:
        descriptor["connectors"] = conns
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
    return descriptor


def sync_loop(arch: Architecture, loop: Loop, root: str | Path = ".", local: bool = False) -> SyncResult:
    """Write a loop's slash command; with local=True also write its routine descriptor."""
    root = Path(root)
    commands_dir = root / ".claude" / "commands"
    commands_dir.mkdir(parents=True, exist_ok=True)

    command_name = f"loop-{loop.id}"
    command_path = commands_dir / f"{command_name}.md"
    prompt = routine_prompt(arch, loop)

    # Slash command: YAML frontmatter (Claude Code fields) + the rendered prompt.
    fm = [f"description: Run the {loop.name}"]
    if loop.model:
        fm.append(f"model: {loop.model}")
    if loop.tools:
        fm.append("allowed-tools: " + " ".join(loop.tools))
    command_path.write_text("---\n" + "\n".join(fm) + "\n---\n\n" + prompt, encoding="utf-8")

    routine_path: Path | None = None
    if local:
        routines_dir = root / ".claude" / "routines"
        routines_dir.mkdir(parents=True, exist_ok=True)
        routine_path = routines_dir / f"{loop.id}.json"
        routine_path.write_text(
            json.dumps(_descriptor(arch, loop, command_name, prompt), indent=2) + "\n", encoding="utf-8"
        )

    return SyncResult(loop.id, command_name, command_path, routine_path, loop.schedule(), loop.trigger)


def sync(arch: Architecture, root: str | Path = ".", only: str | None = None, local: bool = False) -> list[SyncResult]:
    """Sync all loops (or just the loop with id == only) to Claude Code routines."""
    results: list[SyncResult] = []
    for lp in arch.loops:
        if only and lp.id != only:
            continue
        results.append(sync_loop(arch, lp, root=root, local=local))
    return results
