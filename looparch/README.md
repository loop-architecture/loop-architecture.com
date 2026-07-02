# looparch

> **Preview.** `looparch` is an early preview: the YAML format and the commands may still change, and
> it targets Claude Code routines, itself a research preview.

`looparch` is the CLI for [Loop Architecture](https://loop-architecture.com), an architecture style
that makes the **agentic loop** between systems the first-class unit of design.

It validates, visualizes, and syncs a **Loop Architecture**, one YAML document that defines many
systems and many loops, and turns each loop into a runnable **Claude Code routine**.

## Install

```bash
uv tool install looparch
# with PNG visualization support (needs native Cairo, e.g. `brew install cairo`):
uv tool install "looparch[png]"
```

Or run without installing: `uvx looparch --help`.

## Quick start

```bash
looparch init your-org                       # scaffold <id>.looparch.yaml
looparch validate your-org.looparch.yaml     # schema + lint
looparch view your-org.looparch.yaml         # open the interactive diagram in a browser
looparch sync your-org.looparch.yaml      # every loop → a Claude Code routine
```

## Commands

| Command                                   | What it does                                                       |
|-------------------------------------------|-------------------------------------------------------------------|
| `looparch init <id>`                      | Scaffold a new `<id>.looparch.yaml`.                              |
| `looparch validate <file>`                | Validate against the schema and lint. Exit non-zero on errors.    |
| `looparch lint <file>`                    | Best-practice / safety checks.                                    |
| `looparch view <file>`                    | Open the **interactive** diagram in a browser (via the visualizer). |
| `looparch sync <file> [loop-id]`          | Sync all loops (or one) to Claude Code routines.                 |
| `looparch sync <path> --from-claude`      | Reverse: reconstruct a Loop Architecture YAML from existing routines. |

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
in [`examples/your-org.looparch.yaml`](../examples/your-org.looparch.yaml).

## Development

```bash
uv sync --extra dev
uv run pytest
```
