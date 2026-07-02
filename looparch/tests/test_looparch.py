"""Tests for looparch."""

from __future__ import annotations

from pathlib import Path

import pytest

from looparch.model import Architecture, load_architecture, trigger_type
from looparch.publish import publish
from looparch.templates import routine_prompt, scaffold
from looparch.validate import check, lint, validate_schema

EXAMPLES = Path(__file__).resolve().parents[2] / "examples"
EXAMPLE = EXAMPLES / "your-org.looparch.yaml"
EXAMPLE_DOCS = EXAMPLES / "docs.looparch.yaml"


def _write(tmp_path: Path, text: str) -> Path:
    p = tmp_path / "a.looparch.yaml"
    p.write_text(text, encoding="utf-8")
    return p


def test_scaffold_is_valid(tmp_path: Path) -> None:
    arch = load_architecture(_write(tmp_path, scaffold("my-arch")))
    assert arch.id == "my-arch"
    assert not [i for i in check(arch) if i.level == "error"]


def test_example_architecture_is_valid() -> None:
    arch = load_architecture(EXAMPLE)
    errors = [i for i in check(arch) if i.level == "error"]
    assert not errors, errors
    assert len(arch.loops) == 5
    assert len(arch.systems) == 6


def test_docs_example_is_valid() -> None:
    arch = load_architecture(EXAMPLE_DOCS)
    errors = [i for i in check(arch) if i.level == "error"]
    assert not errors, errors
    assert len(arch.loops) == 4
    assert len(arch.systems) == 5


def test_trigger_type_inference() -> None:
    assert trigger_type("0 6 * * *") == "schedule"
    assert trigger_type("2026-07-05T09:00:00Z") == "once"
    assert trigger_type("pull_request.opened") == "event"
    assert trigger_type("push") == "event"
    assert trigger_type("manual") == "manual"
    assert trigger_type(None) == "manual"


def test_system_role_inference() -> None:
    arch = load_architecture(EXAMPLE)
    assert arch.system_role("jira") == "both"         # observed and acted on
    assert arch.system_role("dash0") == "sensor"      # only observed
    assert arch.system_role("slack") == "actuator"    # only acted on


def test_system_domain_from_url() -> None:
    arch = load_architecture(EXAMPLE)
    assert arch.system("dash0").domain == "dash0.com"
    assert arch.system("code-repo").domain == "github.com"


def test_schema_requires_top_level_id(tmp_path: Path) -> None:
    arch = load_architecture(_write(tmp_path, scaffold("x").replace("id: x", "ident: x")))
    assert any(i.level == "error" for i in validate_schema(arch))


def test_lint_flags_unknown_system() -> None:
    arch = Architecture(raw={
        "id": "x", "systems": [{"id": "a", "description": "A"}],
        "loops": [{"id": "l", "observe": ["ghost"], "act": ["a"], "instructions": "p"}],
    })
    assert any("ghost" in str(i) for i in lint(arch))


def test_publish_all_loops(tmp_path: Path) -> None:
    arch = load_architecture(EXAMPLE_DOCS)
    results = publish(arch, root=tmp_path)
    assert len(results) == 4
    docs = next(r for r in results if r.loop_id == "update-docs")
    assert docs.schedule == "0 6 * * *"
    body = docs.command_path.read_text()
    assert "Systems you use" in body and "What to do" in body
    import json
    desc = json.loads(docs.routine_path.read_text())
    # update-docs has two triggers: a cron and a merged-PR event.
    assert any(t.get("schedule") == "0 6 * * *" for t in desc["triggers"])
    assert any(t.get("githubTrigger", {}).get("event") == "pull_request.merged" for t in desc["triggers"])
    assert "https://github.com/your-org/app" in desc["repositories"]


def test_publish_event_trigger(tmp_path: Path) -> None:
    import json
    arch = load_architecture(EXAMPLE_DOCS)
    [r] = publish(arch, root=tmp_path, only="update-docs")  # has a cron + a merged-PR event
    desc = json.loads(r.routine_path.read_text())
    assert any(t.get("githubTrigger", {}).get("event") == "pull_request.merged" for t in desc["triggers"])


def test_publish_single_loop(tmp_path: Path) -> None:
    arch = load_architecture(EXAMPLE)
    results = publish(arch, root=tmp_path, only="triage-incidents")
    assert len(results) == 1 and results[0].loop_id == "triage-incidents"


def test_routine_prompt_has_core_sections() -> None:
    arch = load_architecture(EXAMPLE_DOCS)
    prompt = routine_prompt(arch, arch.loop("update-docs"))
    assert "## What to do" in prompt
    assert "Systems you use" in prompt
    assert "code-repo" in prompt


def test_loop_prompt_included_in_routine() -> None:
    arch = load_architecture(EXAMPLE_DOCS)
    loop = arch.loop("update-docs")
    assert loop.instructions  # the example defines custom instructions
    prompt = routine_prompt(arch, loop)
    assert "## What to do" in prompt
    assert "drifted" in prompt


def test_layout_is_left_to_right() -> None:
    from looparch import layout
    arch = load_architecture(EXAMPLE)
    order = [s.id for s in arch.systems]
    loop_ids = [lp.id for lp in arch.loops]
    observes = {lp.id: lp.observe for lp in arch.loops}
    acts = {lp.id: lp.act for lp in arch.loops}
    plan = layout.solve(order, loop_ids, observes, acts)

    # Every real node is placed exactly once (dummies are routing waypoints).
    placed = [n for col in plan.columns for n in col if n not in plan.dummies]
    assert sorted(placed) == sorted(order + loop_ids)

    # The graph reads left-to-right: forward edges dominate right-to-left ones.
    fwd = back = 0
    for lp in arch.loops:
        edges = [(s, lp.id) for s in lp.observe] + [(lp.id, s) for s in lp.act]
        for src, dst in edges:
            if plan.col_of[src] <= plan.col_of[dst]:
                fwd += 1
            else:
                back += 1
    assert fwd > back
    assert plan.crossings >= 0


def test_import_round_trip(tmp_path: Path) -> None:
    from looparch import importer
    arch = load_architecture(EXAMPLE_DOCS)
    publish(arch, root=tmp_path)  # writes .claude/commands + .claude/routines
    descriptors = importer.load_descriptors(tmp_path)
    assert len(descriptors) == len(arch.loops)
    data = importer.build(descriptors, arch_id="round-trip")
    rebuilt = Architecture(raw=data)
    # No schema errors, and the loops + their observe/act come back.
    assert not [i for i in check(rebuilt) if i.level == "error"]
    assert {lp.id for lp in rebuilt.loops} == {lp.id for lp in arch.loops}
    docs = rebuilt.loop("update-docs")
    assert docs.observe == ["code-repo"] and docs.act == ["docs"]
    assert "pull_request.merged" in docs.triggers


def test_flow_export_shape() -> None:
    from looparch import flow
    arch = load_architecture(EXAMPLE_DOCS)
    graph = flow.build(arch, favicons=True)
    real = [n for n in graph["nodes"] if n["type"] != "dummy"]
    assert len(real) == len(arch.systems) + len(arch.loops)
    # Every edge references existing nodes and carries handle ids.
    ids = {n["id"] for n in graph["nodes"]}
    for e in graph["edges"]:
        assert e["source"] in ids and e["target"] in ids
        assert e["sourceHandle"] and e["targetHandle"]
    # A loop with a schedule + event carries both trigger emojis.
    docs = next(n for n in graph["nodes"] if n["id"] == "update-docs")
    assert "🕐" in docs["data"]["emoji"] and "⚡" in docs["data"]["emoji"]


def test_view_page_offline() -> None:
    from looparch import flow
    arch = load_architecture(EXAMPLE)
    html = flow.page(arch, favicons=False)  # no network
    assert html.lstrip().startswith("<!DOCTYPE html>")
    assert "visualizer.js" in html and "createController" in html
    for lp in arch.loops:
        assert lp.name in html
    for s in arch.systems:
        assert s.name in html
