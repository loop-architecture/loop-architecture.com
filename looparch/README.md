# looparch

`looparch` is the CLI for [Loop Architecture](https://loop-architecture.com) — an architecture style
that makes the **agentic loop** between systems the first-class unit of design.

It validates, visualizes, and publishes a **Loop Architecture** — one YAML document that defines many
systems and many loops — and turns each loop into a runnable **Claude Code routine**.

## Install

```bash
uv tool install looparch
# with PNG visualization support (needs native Cairo, e.g. `brew install cairo`):
uv tool install "looparch[png]"
```

Or run without installing: `uvx looparch --help`.

## Quick start

```bash
looparch init entropy-data                       # scaffold <id>.looparch.yaml
looparch validate entropy-data.looparch.yaml     # schema + lint
looparch show entropy-data.looparch.yaml         # readable summary
looparch diagram entropy-data.looparch.yaml      # ALL loops + systems → one SVG
looparch publish entropy-data.looparch.yaml      # every loop → a Claude Code routine
```

## Commands

| Command                                   | What it does                                                       |
|-------------------------------------------|-------------------------------------------------------------------|
| `looparch init <id>`                      | Scaffold a new `<id>.looparch.yaml`.                              |
| `looparch validate <file>`                | Validate against the schema and lint. Exit non-zero on errors.    |
| `looparch lint <file>`                    | Best-practice / safety checks.                                    |
| `looparch show <file>`                    | Pretty-print the architecture.                                    |
| `looparch diagram <file>`                 | Render **all** loops + systems as one architecture diagram (SVG/PNG). |
| `looparch export <file>`                  | Export React Flow JSON for the **interactive** web diagram.       |
| `looparch publish <file> [loop-id]`       | Publish all loops (or one) as Claude Code routines.              |

`diagram` writes `.svg` by default; pass `-o out.png` for PNG (needs the `png` extra). It fetches each
system's favicon (from its `url`/`repository`) as its icon — pass `--no-favicons` to skip the network.

## What `publish` produces

For each loop:

```
.claude/
  commands/loop-<id>.md    # the prompt Claude Code runs (what to do + the systems it uses)
  routines/<id>.json       # routine descriptor: schedule/event, model, repositories, connectors
```

Run a loop once in Claude Code with `/loop-<id>`, or schedule it on its cadence with the `/schedule`
skill using the emitted cron/event.

## The format

See the [specification](https://loop-architecture.com/spec/loop-architecture.md) and the
[JSON schema](https://loop-architecture.com/spec/loop-architecture.schema.json). A full example lives
in [`examples/entropy-data.looparch.yaml`](../examples/entropy-data.looparch.yaml).

## Development

```bash
uv sync --extra dev
uv run pytest
```
