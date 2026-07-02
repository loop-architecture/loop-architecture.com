# loop-architecture.com

**Loop Architecture**, an architecture style that makes the *agentic loop* between systems the
first-class unit of design. Discover loops with **Loop Storming**, encode them as a versionable
YAML format, and sync them to runnable **Claude Code routines** with the `looparch` CLI.

> Coined by [Arif Wider](https://www.linkedin.com/in/arifwider/) and
> [Simon Harrer](https://www.linkedin.com/in/simonharrer/) on Crete, 1 July 2026, > the day they visited the cave where, in myth, Zeus was born.

## What's here

| Path                | What it is                                                            |
|---------------------|----------------------------------------------------------------------|
| `index.html` / `styles.css` | The website (static; deploy anywhere).                        |
| `spec/`             | The specification + JSON schema.                                     |
| `docs/`             | The Loop Storming workshop guide.                                    |
| `examples/`         | A full example architecture (`your-org.looparch.yaml`).        |
| `assets/`           | Generated diagrams shown on the site.                               |
| `looparch/`         | The `looparch` Python CLI (built with uv).                          |

## The website

Static HTML/CSS, open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## The format

One YAML document with `id`, `systems`, and `loops`. See
[`spec/loop-architecture.md`](spec/loop-architecture.md) and
[`spec/loop-architecture.schema.json`](spec/loop-architecture.schema.json), plus the full example in
[`examples/your-org.looparch.yaml`](examples/your-org.looparch.yaml).

## The CLI

```bash
cd looparch
uv sync --extra dev
uv run pytest
uv run looparch --help
```

See [`looparch/README.md`](looparch/README.md) for the full command reference.

## Three moves

1. **Storm**, run a [Loop Storming](docs/loop-storming.md) workshop to discover your loops.
2. **Encode**, refine them into one reviewable `*.looparch.yaml`.
3. **Sync**, `looparch sync` turns each loop into a Claude Code routine that runs on its cadence.
