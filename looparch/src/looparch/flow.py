"""Export a Loop Architecture as React Flow JSON for the interactive diagram.

Positions come from the same layered left-to-right layout as the SVG diagram, so
the cascade reads across the page; the browser can then pan/zoom/drag and show the
details of a selected system or loop.
"""

from __future__ import annotations

import json
from pathlib import Path

from . import favicon, layout
from .model import Architecture

# Diagram palette + trigger glyphs, consumed by the visualizer.
ACCENT = "#7c3aed"
EDGE = "#9ca3af"
TRIGGER_EMOJI = {"schedule": "🕐", "event": "⚡", "once": "📅", "manual": "👆"}

COL_W = 320
ROW = 120
MARGIN = 40
NODE_W = 220
NODE_H = 76


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

    # Invisible zero-size waypoints (centered on the column, at a real node's handle
    # height) so long edges route around boxes through empty rows without gaps.
    for d in plan.dummies:
        nodes.append({
            "id": d, "type": "dummy",
            "position": {"x": MARGIN + plan.col_of[d] * COL_W + NODE_W / 2,
                         "y": plan.y_of[d] * ROW + NODE_H / 2},
            "data": {},
        })

    def handles(a: str, b: str) -> tuple[str, str]:
        # Forward (left→right): out of a's right, into b's left. Back edge mirrors.
        if plan.col_of[a] <= plan.col_of[b]:
            return "rs", "lt"
        return "ls", "rt"

    edges: list[dict] = []
    for (src, dst), path in plan.edge_paths.items():
        for i, (a, b) in enumerate(zip(path, path[1:])):
            sh, th = handles(a, b)
            edges.append({
                "id": f"{src}->{dst}:{i}", "source": a, "target": b,
                "sourceHandle": sh, "targetHandle": th,
                "end": b == path[-1],   # arrowhead only on the final segment
            })

    return {
        "name": arch.name, "id": arch.id, "accent": ACCENT, "edge": EDGE,
        "nodes": nodes, "edges": edges,
    }


def render(arch: Architecture, out_path: str | Path, favicons: bool = True) -> Path:
    out = Path(out_path)
    out.write_text(json.dumps(build(arch, favicons=favicons), indent=2) + "\n", encoding="utf-8")
    return out


# Where `looparch view` loads the shared visualizer bundle (React + React Flow are
# bundled in, so the page needs no import map).
VISUALIZER_BASE = "https://www.loop-architecture.com/visualizer/dist"

_PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title} - Loop Architecture</title>
<link rel="stylesheet" href="{base}/visualizer.css" />
<style>
  html, body {{ margin: 0; min-height: 100%; background: #fff; font-family: Inter, system-ui, sans-serif; }}
  /* fill the viewport; .flow (from visualizer.css) provides border, palette and layout */
  #flow {{ height: 94vh; }}
</style>
</head>
<body>
  <div id="flow"><p class="flow-loading">Loading interactive diagram...</p></div>
  <script type="module">
    import {{ createController }} from '{base}/visualizer.js';
    const graph = {graph};
    createController(document.getElementById('flow')).show(graph);
  </script>
</body>
</html>
"""


def page(arch: Architecture, favicons: bool = True, base: str = VISUALIZER_BASE) -> str:
    """A standalone HTML page that renders this architecture with the visualizer."""
    graph = json.dumps(build(arch, favicons=favicons))
    return _PAGE.format(title=arch.name or arch.id or "Loop Architecture", base=base, graph=graph)
