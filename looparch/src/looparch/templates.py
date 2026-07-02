"""Templates: scaffolding a new architecture and rendering a loop's routine prompt."""

from __future__ import annotations

from .model import Architecture, Loop


def scaffold(arch_id: str) -> str:
    """Return a starter Loop Architecture document."""
    return f"""# {arch_id.replace('-', ' ').title()}: Loop Architecture
id: {arch_id}
name: {arch_id.replace('-', ' ').title()}

# Systems the loops read from and write back to.
# Each has an id, plus an optional description / url / repository / connector.
systems:
  - id: code-repo
    description: Application source code
    repository: https://github.com/your-org/app
  - id: docs-repo
    description: Documentation site
    url: https://docs.your-org.com

# Loops. Each loop uses (observe) systems and writes back to (act) systems.
loops:
  - id: docs-sync
    name: Docs Sync
    trigger: "0 6 * * *"          # 5-field cron | ISO timestamp | github event | manual
    observe: [code-repo]          # systems it reads
    act: [docs-repo]              # systems it writes back to
    prompt: >                     # what the loop should do each turn
      Diff the docs against changes merged in the last 24 hours. Update only the
      pages that drifted, preserving tone and structure, then open a pull request.
    tools: [Read, Grep, Bash(git *), Bash(gh pr *)]
"""


def routine_prompt(arch: Architecture, loop: Loop) -> str:
    """Render a loop as a Claude Code slash-command prompt (markdown)."""
    lines: list[str] = [f"# Loop: {loop.name}", ""]
    if loop.description:
        lines += [loop.description, ""]
    lines += [f"You are running the **{loop.name}** agentic loop.", ""]

    lines += ["## What to do", loop.prompt or "(no prompt)", ""]

    def describe(sid: str) -> str:
        s = arch.system(sid)
        if not s:
            return f"**{sid}** (undeclared)"
        bits = [b for b in [s.description, s.url or s.repository] if b]
        return f"**{sid}**" + (f": {' · '.join(bits)}" if bits else "")

    lines += ["## Systems you use (read from)"]
    lines += [f"- {describe(sid)}" for sid in loop.observe] or ["- (nothing)"]
    lines += [""]

    lines += ["## Systems you write back to"]
    lines += [f"- {describe(sid)}" for sid in loop.act] or ["- (nothing)"]
    lines += [""]

    return "\n".join(lines).rstrip() + "\n"
