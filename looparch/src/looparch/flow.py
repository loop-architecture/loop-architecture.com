"""Export a Loop Architecture as React Flow JSON for the interactive diagram.

Positions come from the same layered left-to-right layout as the SVG diagram, so
the cascade reads across the page; the browser can then pan/zoom/drag and show the
details of a selected system or loop.
"""

from __future__ import annotations

import json
from pathlib import Path

from . import favicon, layout
from .architecture import ACCENT, EDGE, TRIGGER_EMOJI
from .model import Architecture

COL_W = 320
ROW = 120
MARGIN = 40


def build(arch: Architecture, favicons: bool = True) -> dict:
    systems = arch.systems
    loops = arch.loops
    by_id = {s.id: s for s in systems}
    sys_ids = set(by_id)
    order = [s.id for s in systems]

    def sys_name(sid: str) -> str:
        s = by_id.get(sid)
        return s.name if s else sid

    observes = {lp.id: lp.observe for lp in loops}
    acts = {lp.id: lp.act for lp in loops}
    plan = layout.solve(order, [lp.id for lp in loops], observes, acts)

    def pos(nid: str) -> dict:
        return {"x": MARGIN + plan.col_of[nid] * COL_W, "y": plan.y_of[nid] * ROW}

    # For each system, which loops read from / write to it.
    reads: dict[str, list[str]] = {sid: [] for sid in sys_ids}
    writes: dict[str, list[str]] = {sid: [] for sid in sys_ids}
    for lp in loops:
        for sid in lp.observe:
            if sid in reads:
                reads[sid].append(lp.name)
        for sid in lp.act:
            if sid in writes:
                writes[sid].append(lp.name)

    nodes: list[dict] = []
    for s in systems:
        nodes.append({
            "id": s.id, "type": "system", "position": pos(s.id),
            "data": {
                "label": s.name, "id": s.id, "description": s.description,
                "url": s.url, "repository": s.repository, "connector": s.connector,
                "favicon": favicon.service_url(s.domain) if favicons else None,
                "readBy": reads[s.id], "writtenBy": writes[s.id],
            },
        })
    for lp in loops:
        types: list[str] = []
        for t, _ in lp.typed_triggers():
            if t not in types:
                types.append(t)
        nodes.append({
            "id": lp.id, "type": "loop", "position": pos(lp.id),
            "data": {
                "label": lp.name, "id": lp.id, "description": lp.description,
                "emoji": "".join(TRIGGER_EMOJI.get(t, "") for t in types),
                "triggers": lp.triggers, "prompt": lp.prompt, "model": lp.model,
                "tools": lp.tools,
                "uses": [sys_name(s) for s in lp.observe],
                "writesBack": [sys_name(s) for s in lp.act],
            },
        })

    def handles(src: str, dst: str) -> tuple[str, str]:
        # Forward (left→right): out of source's right, into target's left.
        # Back edge: out of source's left, into target's right.
        if plan.col_of[src] <= plan.col_of[dst]:
            return "rs", "lt"
        return "ls", "rt"

    edges: list[dict] = []
    for lp in loops:
        for sid in lp.observe:
            if sid in sys_ids:
                sh, th = handles(sid, lp.id)
                edges.append({"id": f"use:{sid}->{lp.id}", "source": sid, "target": lp.id,
                              "sourceHandle": sh, "targetHandle": th})
        for sid in lp.act:
            if sid in sys_ids:
                sh, th = handles(lp.id, sid)
                edges.append({"id": f"act:{lp.id}->{sid}", "source": lp.id, "target": sid,
                              "sourceHandle": sh, "targetHandle": th})

    return {
        "name": arch.name, "id": arch.id, "accent": ACCENT, "edge": EDGE,
        "nodes": nodes, "edges": edges,
    }


def render(arch: Architecture, out_path: str | Path, favicons: bool = True) -> Path:
    out = Path(out_path)
    out.write_text(json.dumps(build(arch, favicons=favicons), indent=2) + "\n", encoding="utf-8")
    return out
