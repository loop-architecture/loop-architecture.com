# Loop Storming

**Loop Storming** is a collaborative workshop for discovering the agentic loops in and between your
systems. It is the *first* step of Loop Architecture: before anyone writes a line of YAML, the team
gathers at a wall, maps out the systems, and connects them into loops.

It is inspired by Event Storming, but where Event Storming maps *events* through a domain, Loop
Storming maps *loops* between systems: which systems a loop **uses**, what it **does**, and which
systems it **writes back** to.

## Why run it

- **Surface the invisible work.** The manual chasing, reconciling, and escalating that happens
  *between* systems is rarely written down. Loop Storming makes it visible so it can be designed.
- **Shared language.** Engineers, ops, product, and domain experts leave with one map and one
  vocabulary, systems, loops, triggers, prompts.
- **A prioritized backlog.** You leave with a ranked list of loops worth building, not a vague sense
  that "we should automate some things."

> The [example architecture](../examples/your-org.looparch.yaml) on this site came straight out of
> a Loop Storming session, the systems and loop edges from the wall, refined into one file.

## Who should be there

- People who **feel the pain** (on-call, support, ops), they know the manual work.
- People who **own the systems** (the services, repos, tools, dashboards).
- People who **do the work today** (leads, domain experts), their judgement becomes the loop's prompt.
- A **facilitator** to keep the wall moving.

Keep it to 5 to 9 people per wall. Split into multiple walls if larger.

## What you need

- A long wall or a large virtual canvas (Miro, FigJam, …).
- Sticky notes in three colors, one per element:
  - 🟦 **System**, a place a loop can read from or write to (a repo, a tool, a dashboard, an inbox).
  - 🟨 **Loop**, an agent that connects systems: it *uses* some and *writes back* to others.
  - 🟧 **Trigger**, what starts a loop turning (a schedule, an event, or manual).
- A marker for the arrows: **uses** (system → loop) and **writes back** (loop → system).

## The steps

### 1. Define the systems (15 to 20 min)
Start with the systems, and focus on **data, source code, and storage**: the code repos, the docs,
the databases and data products, the object stores and drives, plus the observability, ticketing and
chat around them. Put up a 🟦 sticky for each, and note its URL or repo (you'll want it later for the
favicon and for wiring connectors). These are the nodes every loop runs between.

### 2. Brainstorm the loops (15 to 20 min)
Now ask: **which agentic loops make sense between these systems?** Look for the recurring,
between-systems work someone does by hand today, "keep the docs in sync with the code", "triage this
alert", "reconcile infra with the running app". Each one is a candidate loop.

### 3. Draw the loops as edges, and name them (20 to 30 min)
Draw each loop as edges between the systems it connects:
- **uses →** from every system the loop reads from, into the loop.
- **writes back →** from the loop, into every system it acts on.

Give each loop a short, **verb-first name** ("Sync Docs", "Triage Incidents", "Reconcile Infra") and a
sentence or two of **prompt**, what the agent actually does each turn. A loop always uses at least one
system and writes back to at least one; a system used *and* written back to is fine.

### 4. Add the trigger icons (10 min)
Mark **when each loop turns** with a trigger icon on its sticky:
- 🕐 a **schedule** (how often?),
- ⚡ an **event** (`pull_request.merged`, `push`),
- 📅 a **one-off** time, or 👆 **manual**.

A loop can carry **more than one** trigger.

### 5. Prioritize (10 min)
Plot every loop on two axes: **impact** (how much manual work it removes) and **confidence** (how
safely it can run today). Start building from the top-right: high impact, high confidence.

## From wall to architecture

The wall is your **initial** loop map, deliberately messy. Afterwards you *refine* it into one
[Loop Architecture document](../spec/loop-architecture.md): give each system its URL/repo/connector,
sharpen each loop's trigger and prompt, name the exact systems it uses and writes back to, and pick a
model and tools where it matters. `looparch` then validates it, draws the whole architecture as one
diagram, and publishes each loop as a Claude Code routine.

```bash
looparch init your-org                    # scaffold the architecture
looparch validate your-org.looparch.yaml
looparch view your-org.looparch.yaml      # all your loops in one interactive diagram
looparch publish your-org.looparch.yaml   # turn each loop into a Claude Code routine
```

## Facilitation tips

- **Systems first, loops second.** A clear set of systems on the wall makes the loops fall out
  naturally, each loop is just a few arrows between them.
- **One loop, one purpose.** If a loop uses five unrelated systems for five unrelated reasons, it is
  really several loops. Split it.
- **The prompt is the design.** A loop with a vague prompt ("keep things nice") won't survive contact
  with reality. Write the prompt as if briefing a capable teammate.
- **Timebox ruthlessly.** A first Loop Storming should fit in a half-day. Depth comes in refinement.
