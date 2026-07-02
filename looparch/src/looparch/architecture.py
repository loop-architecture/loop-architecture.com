"""Render a whole Loop Architecture, all systems and loops, as one SVG diagram.

Systems are boxes (with their favicon as an icon); each loop is a colored hub.
An `observe` edge runs from a system into the loop (the loop *uses* the system);
an `act` edge runs from the loop back into a system (the loop *writes back*).
"""

from __future__ import annotations

from pathlib import Path
from xml.sax.saxutils import escape

from . import favicon, layout
from .model import Architecture

# Light theme, one accent colour.
BG = "#ffffff"
PANEL2 = "#f6f7f9"
BORDER = "#e5e7eb"
TEXT = "#111827"
MUTED = "#6b7280"
ACCENT = "#7c3aed"
EDGE = "#9ca3af"

# Emoji per trigger type, shown on each loop.
TRIGGER_EMOJI = {"schedule": "🕐", "event": "⚡", "once": "📅", "manual": "👆"}

MARGIN_TOP = 120
ROW = 118
SYS_W, SYS_H = 240, 74
LOOP_W, LOOP_H = 240, 74


def _truncate(text: str, width: int) -> str:
    t = str(text or "")
    return t if len(t) <= width else t[: width - 1].rstrip() + "…"


def _icon(cx: float, cy: float, sid: str, uri: str | None) -> str:
    size = 26
    x, y = cx - size / 2, cy - size / 2
    if uri:
        return (
            f'<image x="{x:.0f}" y="{y:.0f}" width="{size}" height="{size}" '
            f'href="{uri}" preserveAspectRatio="xMidYMid meet"/>'
        )
    # Lettered fallback.
    letter = escape(sid[:1].upper())
    return (
        f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{size/2:.0f}" fill="{BORDER}"/>'
        f'<text x="{cx:.0f}" y="{cy+5:.0f}" text-anchor="middle" fill="{TEXT}" font-size="14" '
        f'font-weight="700" font-family="Inter,system-ui,sans-serif">{letter}</text>'
    )


def _sys_box(cx: float, cy: float, label: str, desc: str, uri: str | None) -> str:
    x, y = cx - SYS_W / 2, cy - SYS_H / 2
    icon = _icon(x + 26, cy, label, uri)
    tx = x + 48
    name_y = cy - 4 if desc else cy + 5
    parts = [
        "<g>",
        f'<rect x="{x:.0f}" y="{y:.0f}" rx="10" width="{SYS_W}" height="{SYS_H}" '
        f'fill="{PANEL2}" stroke="{BORDER}" stroke-width="1.5"/>',
        icon,
        f'<text x="{tx:.0f}" y="{name_y:.0f}" fill="{TEXT}" font-size="14" '
        f'font-weight="600" font-family="Inter,system-ui,sans-serif">{escape(label)}</text>',
    ]
    if desc:
        parts.append(
            f'<text x="{tx:.0f}" y="{cy+13:.0f}" fill="{MUTED}" font-size="11" '
            f'font-family="Inter,system-ui,sans-serif">{escape(_truncate(desc, 26))}</text>'
        )
    parts.append("</g>")
    return "".join(parts)


def _loop_box(cx: float, cy: float, name: str, desc: str, triggers: str = "") -> str:
    x, y = cx - LOOP_W / 2, cy - LOOP_H / 2
    parts = [
        "<g>",
        f'<rect x="{x:.0f}" y="{y:.0f}" rx="10" width="{LOOP_W}" height="{LOOP_H}" '
        f'fill="{PANEL2}" stroke="{ACCENT}" stroke-width="1.5"/>',
        f'<rect x="{x:.0f}" y="{y:.0f}" rx="10" width="5" height="{LOOP_H}" fill="{ACCENT}"/>',
        f'<text x="{x+16:.0f}" y="{y+19:.0f}" fill="{ACCENT}" font-size="9.5" font-weight="700" '
        f'letter-spacing="1" font-family="Inter,system-ui,sans-serif">AGENTIC LOOP</text>',
    ]
    if triggers:
        parts.append(
            f'<text x="{x + LOOP_W - 12:.0f}" y="{y+21:.0f}" text-anchor="end" font-size="14" '
            f'font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">{triggers}</text>'
        )
    parts.append(
        f'<text x="{x+16:.0f}" y="{y+40:.0f}" fill="{TEXT}" font-size="13.5" font-weight="700" '
        f'font-family="Inter,system-ui,sans-serif">{escape(_truncate(name, 24))}</text>'
    )
    if desc:
        parts.append(
            f'<text x="{x+16:.0f}" y="{y+57:.0f}" fill="{MUTED}" font-size="11" '
            f'font-family="Inter,system-ui,sans-serif">{escape(_truncate(desc, 30))}</text>'
        )
    parts.append("</g>")
    return "".join(parts)


def _edge(x1: float, y1: float, x2: float, y2: float, color: str) -> str:
    mx = (x1 + x2) / 2
    return (
        f'<path d="M {x1:.0f} {y1:.0f} C {mx:.0f} {y1:.0f} {mx:.0f} {y2:.0f} {x2:.0f} {y2:.0f}" '
        f'fill="none" stroke="{color}" stroke-width="2" opacity="0.9" marker-end="url(#arrowin)"/>'
    )


def to_svg(arch: Architecture, favicons: bool = True) -> str:
    systems = arch.systems
    loops = arch.loops
    order = [s.id for s in systems]

    # Favicons (best-effort; None → lettered fallback).
    icons: dict[str, str | None] = {}
    if favicons:
        for s in systems:
            icons[s.id] = favicon.data_uri(s.domain)

    # Layered left-to-right layout: systems and loops interleave by dependency depth.
    observes = {lp.id: lp.observe for lp in loops}
    acts = {lp.id: lp.act for lp in loops}
    plan = layout.solve(order, [lp.id for lp in loops], observes, acts)
    loop_ids = {lp.id for lp in loops}

    COL_W = 300
    n_rows = (max(plan.y_of.values()) + 1) if plan.y_of else 1
    n_cols = len(plan.columns)
    H = MARGIN_TOP + n_rows * ROW + 70
    W = 120 + n_cols * COL_W

    pos: dict[str, tuple[float, float]] = {}
    for nid, (c) in plan.col_of.items():
        cx = 60 + c * COL_W + COL_W / 2
        cy = MARGIN_TOP + plan.y_of[nid] * ROW + ROW / 2
        pos[nid] = (cx, cy)

    def edge_between(src: str, dst: str) -> str:
        sx, sy = pos[src]
        dx, dy = pos[dst]
        sw = LOOP_W if src in loop_ids else SYS_W
        dw = LOOP_W if dst in loop_ids else SYS_W
        if plan.col_of[src] <= plan.col_of[dst]:      # forward: source right → target left
            return _edge(sx + sw / 2, sy, dx - dw / 2, dy, EDGE)
        return _edge(sx - sw / 2, sy, dx + dw / 2, dy, EDGE)  # back: source left → target right

    edges: list[str] = []
    for lp in loops:
        for sid in lp.observe:
            if sid in pos:
                edges.append(edge_between(sid, lp.id))
        for sid in lp.act:
            if sid in pos:
                edges.append(edge_between(lp.id, sid))

    def loop_trig(lp) -> str:
        seen: list[str] = []
        for t, _ in lp.typed_triggers():
            if t not in seen:
                seen.append(t)
        return "".join(TRIGGER_EMOJI.get(t, "") for t in seen)

    sys_nodes = [_sys_box(*pos[s.id], s.name, s.description, icons.get(s.id)) for s in systems]
    loop_nodes = [_loop_box(*pos[lp.id], lp.name, lp.description, loop_trig(lp)) for lp in loops]

    legend = (
        f'<line x1="40" y1="{H-32}" x2="70" y2="{H-32}" stroke="{EDGE}" stroke-width="2" '
        f'marker-end="url(#arrowin)"/>'
        f'<text x="78" y="{H-28}" fill="{MUTED}" font-size="12" '
        f'font-family="Inter,system-ui,sans-serif">data flows left → right (arrows: uses / writes back)</text>'
    )

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H:.0f}" viewBox="0 0 {W} {H:.0f}">
  <defs>
    <marker id="arrowin" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="{EDGE}"/>
    </marker>
  </defs>
  <rect width="{W}" height="{H:.0f}" fill="{BG}"/>
  <text x="40" y="54" fill="{TEXT}" font-size="26" font-weight="800"
        font-family="Inter,system-ui,sans-serif">{escape(arch.name)}</text>
  <text x="40" y="80" fill="{MUTED}" font-size="14"
        font-family="Inter,system-ui,sans-serif">{len(loops)} loops · {len(order)} systems</text>
  {''.join(edges)}
  {''.join(sys_nodes)}
  {''.join(loop_nodes)}
  {legend}
  <text x="{W-40}" y="{H-28:.0f}" text-anchor="end" fill="{BORDER}" font-size="12"
        font-family="Inter,system-ui,sans-serif">loop-architecture.com · looparch/v1</text>
</svg>
"""


def render(arch: Architecture, out_path: str | Path, favicons: bool = True) -> Path:
    out = Path(out_path)
    svg = to_svg(arch, favicons=favicons)
    if out.suffix.lower() == ".png":
        try:
            import cairosvg  # type: ignore
        except ImportError as e:
            raise RuntimeError(
                "PNG output needs the 'png' extra: install with `uv tool install \"looparch[png]\"`"
            ) from e
        try:
            cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(out))
        except OSError as e:
            raise RuntimeError(
                "PNG output needs the native Cairo library (e.g. `brew install cairo`). "
                f"Write an .svg instead. ({e})"
            ) from e
    else:
        out.write_text(svg, encoding="utf-8")
    return out
