# Loop Architecture, Specification

Loop Architecture is an architecture style that makes the **agentic loop** between systems the
first-class unit of design. A whole architecture is one YAML document with three top-level keys:
`id`, `systems`, and `loops`.

## Concepts

A **loop** is a continuous cycle where an agent:

1. **uses** (observe) one or more systems,
2. follows its **instructions**, and
3. **writes back** (act) to one or more systems.

A **Loop Architecture** is the full set of systems and loops, from which a single architecture
diagram is generated.

**Loop Storming** is the discovery method, see [loop-storming.md](../docs/loop-storming.md).

## Top level

```yaml
id: your-org          # required, kebab-case
name: Your Org         # optional (defaults to id)
description: ...       # optional, a sentence about this Loop Architecture
systems: [ ... ]           # required, >= 1
loops:   [ ... ]           # required, >= 1
```

## `systems`

An array of systems. Each has an `id`; the rest is optional.

```yaml
systems:
  - id: code-repo
    description: Application source code
    repository: https://github.com/your-org/app   # → routine repositories
  - id: dash0
    url: https://dash0.com                     # favicon becomes the icon in diagrams
    connector: dash0                           # → routine connectors
```

| Field         | Description                                                        |
|---------------|-------------------------------------------------------------------|
| `id`          | Referenced by a loop's `observe` / `act`.                         |
| `description` | Free text.                                                        |
| `url`         | Homepage/console URL; its favicon is fetched as the system icon.  |
| `repository`  | Git repo URL; mapped to the published routine's `repositories`.   |
| `connector`   | MCP connector name; mapped to the routine's `connectors`.         |

A system's **role** is inferred: observed only → `sensor`, acted on only → `actuator`, both → `both`.

## `loops`

An array of loops. Each `observe`s (uses) systems and `act`s (writes back to) systems.

```yaml
loops:
  - id: sync-docs
    name: Sync Docs            # optional (defaults to id)
    trigger:                   # one trigger, or a list, see below (default: manual)
      - "0 6 * * *"
      - pull_request.merged
    model: claude-opus-4-8     # optional, the model this loop runs on
    observe: [code-repo]       # required, system ids it reads
    act: [docs-repo]           # required, system ids it writes back to
    instructions: >            # required, what the loop does each turn
      Diff the docs against changes merged in the last 24 hours and open a PR.
    tools: [Read, Grep, Bash(git *), Bash(gh pr *)]   # optional → allowed-tools
```

| Field    | Required | Description                                                        |
|----------|----------|--------------------------------------------------------------------|
| `id`     | yes      | Kebab-case identifier.                                             |
| `name`   | no       | Human-readable name (defaults to id).                             |
| `trigger`| no       | One trigger or a list. Defaults to `manual`.                      |
| `observe`| yes      | System ids the loop reads from.                                  |
| `act`    | yes      | System ids the loop writes back to.                              |
| `instructions` | yes | What the loop does each turn.                                  |
| `model`  | no       | The model the loop runs on.                                      |
| `tools`  | no       | Tools the loop may use → the routine's `allowed-tools`.         |

### `trigger`

A single string **or a list of strings**, a loop can have more than one trigger. Each value's type
mirrors [Claude Code routines](https://code.claude.com/docs/en/routines):

| Value                       | Type       | Meaning                          |
|-----------------------------|------------|----------------------------------|
| `"0 6 * * *"`               | `schedule` | 5-field cron.                    |
| `"2026-07-05T09:00:00Z"`    | `once`     | One-off ISO-8601 timestamp.      |
| `"pull_request.opened"`     | `event`    | GitHub event.                    |
| `"manual"` / omitted        | `manual`   | Run on demand / via API.         |

## Validation

The canonical schema is [`loop-architecture.schema.json`](./loop-architecture.schema.json).

```bash
looparch validate your-org.looparch.yaml
```

`looparch lint` additionally checks: every `observe`/`act` references a declared system; schedules are
5-field cron; and no system is left unused.
