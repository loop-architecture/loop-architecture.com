# loopmanager

> **Preview.** `loopmanager` is an early preview: the YAML format and the commands may still change, and
> it targets Claude Code routines, itself a research preview.

`loopmanager` is the CLI for [Loop Architecture](https://loop-architecture.com), an architecture style
that makes the **agentic loop** between systems the first-class unit of design.

It validates, visualizes, and syncs a **Loop Architecture**, one YAML document that defines many
systems and many loops, and turns each loop into a runnable **Claude Code routine**.

## Install

```bash
uv tool install loopmanager
# with PNG visualization support (needs native Cairo, e.g. `brew install cairo`):
uv tool install "loopmanager[png]"
```

Or run without installing: `uvx loopmanager --help`.

## Quick start

```bash
loopmanager init your-org                       # scaffold <id>.loopmanager.yaml
loopmanager validate your-org.loopmanager.yaml     # schema + lint
loopmanager view your-org.loopmanager.yaml         # open the interactive diagram in a browser
loopmanager serve your-org.loopmanager.yaml        # run the whole architecture locally + monitor
loopmanager sync your-org.loopmanager.yaml      # every loop → a Claude Code routine
```

## Commands

| Command                                   | What it does                                                       |
|-------------------------------------------|-------------------------------------------------------------------|
| `loopmanager init <id>`                      | Scaffold a new `<id>.loopmanager.yaml`.                              |
| `loopmanager validate <file>`                | Validate against the schema and lint. Exit non-zero on errors.    |
| `loopmanager lint <file>`                    | Best-practice / safety checks.                                    |
| `loopmanager view <file>`                    | Open the **interactive** diagram in a browser (via the visualizer). |
| `loopmanager serve <file>`                   | Run the whole architecture locally: schedule, trigger agents, live monitoring. |
| `loopmanager sync <file> [loop-id]`          | Sync all loops (or one) to Claude Code routines.                 |
| `loopmanager sync <path> --from-claude`      | Reverse: reconstruct a Loop Architecture YAML from existing routines. |

## `serve`

`loopmanager serve <file>` starts a local server that schedules every loop from the YAML (5-field cron
and one-off ISO triggers), triggers the agent for each run, tracks run history, and serves the diagram
plus **live monitoring** (per-loop badges: running / last run / outcome) at `http://127.0.0.1:8700`.

Runs are **dry-run by default** (safe, they only simulate a turn). Pass `--exec` to actually run each
agent with `claude -p`. Trigger a loop by hand from the diagram's detail panel ("Run now").

`view` writes a small HTML page that embeds the YAML and loads the shared visualizer
(`visualizer/dist/visualizer.js`), which parses the YAML and builds the diagram itself, systems, loops,
layout and favicons all live in the visualizer.

## What `sync` produces

Routines are **cloud-managed** (they live in your claude.ai account, created with `/schedule`), so
cloud is the default. For each loop, `sync` writes the slash command and prints the `/schedule` step:

```
.claude/
  commands/loop-<id>.md    # the prompt Claude Code runs (what to do + the systems it uses)
```

Run a loop once in Claude Code with `/loop-<id>`, or register it as a routine on its cadence with
`/schedule` at [claude.ai/code](https://claude.ai/code), using the printed cron/event.

`--local` additionally writes a `.claude/routines/<id>.json` descriptor (schedule/event, model,
repositories, connectors), an offline record that `sync --from-claude` can read back.

## The format

See the [specification](https://loop-architecture.com/spec/loop-architecture.md) and the
[JSON schema](https://loop-architecture.com/spec/loop-architecture.schema.json). A full example lives
in [`examples/your-org.loopmanager.yaml`](../examples/your-org.loopmanager.yaml).

## Development

```bash
uv sync --extra dev
uv run pytest
```
