"""Layered left-to-right layout for the architecture diagram.

The graph is directed: a system feeds a loop it is *observed* by (system → loop),
and a loop feeds a system it *acts* on (loop → system). Following these edges
produces cascades, e.g. `code-repo → sync-docs → docs → translate-docs → docs-de`, which we want to read left-to-right.

We (1) break cycles with a DFS (the removed edges become the few right-to-left
arrows), (2) assign each node a column by longest path (so every kept edge points
forward, left→right), and (3) order nodes within each column with the barycenter
heuristic to cut crossings. Deterministic: stable sorts, no randomness.
"""

from __future__ import annotations

from dataclasses import dataclass

PASSES = 16


@dataclass
class Layout:
    columns: list[list[str]]      # left→right; each column is ordered top→bottom
    col_of: dict[str, int]        # node id → column index
    row_of: dict[str, int]        # node id → row within its column
    y_of: dict[str, float]        # node id → vertical coordinate (in row units)
    crossings: int
    edge_paths: dict[tuple[str, str], list[str]]  # (source, target) → node ids to route through
    dummies: set[str]             # ids of routing waypoint (dummy) nodes


def _isotonic(vals: list[float]) -> list[float]:
    """Best non-decreasing fit (pool-adjacent-violators, least squares)."""
    stack: list[list[float]] = []  # [mean, weight]
    for x in vals:
        cur = [x, 1.0]
        while stack and stack[-1][0] > cur[0]:
            m, w = stack.pop()
            tot = w + cur[1]
            cur = [(m * w + cur[0] * cur[1]) / tot, tot]
        stack.append(cur)
    out: list[float] = []
    for m, w in stack:
        out.extend([m] * int(w))
    return out


def _straighten(
    columns: list[list[str]], neighbors: dict[str, list[str]], passes: int = 40
) -> dict[str, float]:
    """Assign each node a vertical coordinate that pulls it toward the average of
    its neighbours (so single edges become straight), while keeping each column's
    order and a minimum gap of 1. Solved per column with isotonic regression."""
    n_rows = max((len(c) for c in columns), default=1) or 1
    y: dict[str, float] = {}
    for col in columns:
        offset = (n_rows - len(col)) / 2
        for i, n in enumerate(col):
            y[n] = offset + i

    for _ in range(passes):
        for col in columns:
            if not col:
                continue
            # desired position from neighbours; targets shifted so the gap-1 order
            # constraint becomes "non-decreasing", then fit with isotonic regression.
            targets = []
            for i, n in enumerate(col):
                ns = neighbors[n]
                desired = sum(y[m] for m in ns) / len(ns) if ns else y[n]
                targets.append(desired - i)
            fitted = _isotonic(targets)
            for i, n in enumerate(col):
                y[n] = fitted[i] + i
    return y


def _break_cycles(nodes: list[str], adj: dict[str, list[str]]) -> set[tuple[str, str]]:
    """DFS; return the forward (kept) edges, dropping back edges to break cycles."""
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {n: WHITE for n in nodes}
    forward: set[tuple[str, str]] = set()
    stack: list[tuple[str, iter]] = []

    for start in nodes:
        if color[start] != WHITE:
            continue
        color[start] = GRAY
        stack.append((start, iter(adj[start])))
        while stack:
            u, it = stack[-1]
            advanced = False
            for v in it:
                if color[v] == GRAY:
                    continue  # back edge → drop
                forward.add((u, v))
                if color[v] == WHITE:
                    color[v] = GRAY
                    stack.append((v, iter(adj[v])))
                    advanced = True
                    break
            if not advanced:
                color[u] = BLACK
                stack.pop()
    return forward


def _layers(nodes: list[str], forward: set[tuple[str, str]]) -> dict[str, int]:
    """Longest-path layering over the (acyclic) forward edges."""
    fadj: dict[str, list[str]] = {n: [] for n in nodes}
    indeg = {n: 0 for n in nodes}
    for u, v in forward:
        fadj[u].append(v)
        indeg[v] += 1
    layer = {n: 0 for n in nodes}
    queue = sorted([n for n in nodes if indeg[n] == 0])
    while queue:
        u = queue.pop(0)
        for v in sorted(fadj[u]):
            if layer[u] + 1 > layer[v]:
                layer[v] = layer[u] + 1
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return layer


def _crossings(columns: list[list[str]], undirected: list[tuple[str, str]],
               col_of: dict[str, int]) -> int:
    """Count crossings between every pair of adjacent columns."""
    total = 0
    for c in range(len(columns) - 1):
        rank_a = {n: i for i, n in enumerate(columns[c])}
        rank_b = {n: i for i, n in enumerate(columns[c + 1])}
        pairs = []
        for u, v in undirected:
            a, b = (u, v) if col_of[u] == c else (v, u)
            if a in rank_a and b in rank_b:
                pairs.append((rank_a[a], rank_b[b]))
        for i in range(len(pairs)):
            for j in range(i + 1, len(pairs)):
                (a1, b1), (a2, b2) = pairs[i], pairs[j]
                if (a1 < a2 and b1 > b2) or (a1 > a2 and b1 < b2):
                    total += 1
    return total


def _transpose(columns: list[list[str]], undirected: list[tuple[str, str]]) -> list[list[str]]:
    """Greedily swap adjacent nodes within a column whenever it lowers total
    crossings. Repeats until no swap helps, directly minimising crossings."""
    def col_of(cols: list[list[str]]) -> dict[str, int]:
        return {n: c for c, col in enumerate(cols) for n in col}

    cols = [list(c) for c in columns]
    cur = _crossings(cols, undirected, col_of(cols))
    improved = True
    while improved and cur > 0:
        improved = False
        for c in range(len(cols)):
            for i in range(len(cols[c]) - 1):
                cols[c][i], cols[c][i + 1] = cols[c][i + 1], cols[c][i]
                new = _crossings(cols, undirected, col_of(cols))
                if new < cur:
                    cur = new
                    improved = True
                else:
                    cols[c][i], cols[c][i + 1] = cols[c][i + 1], cols[c][i]
    return cols


def _reposition(columns: list[list[str]], undirected: list[tuple[str, str]]) -> list[list[str]]:
    """Move each node to the best position in its column (a larger neighbourhood than
    adjacent swaps), repeating until stable."""
    def col_of(cols: list[list[str]]) -> dict[str, int]:
        return {n: c for c, col in enumerate(cols) for n in col}

    cols = [list(c) for c in columns]
    improved = True
    while improved:
        improved = False
        cur = _crossings(cols, undirected, col_of(cols))
        if cur == 0:
            break
        for c in range(len(cols)):
            for n in list(cols[c]):
                cols[c].remove(n)
                best_pos, best_cr = 0, None
                for pos in range(len(cols[c]) + 1):
                    cols[c].insert(pos, n)
                    cr = _crossings(cols, undirected, col_of(cols))
                    if best_cr is None or cr < best_cr:
                        best_cr, best_pos = cr, pos
                    cols[c].pop(pos)
                cols[c].insert(best_pos, n)
                if best_cr is not None and best_cr < cur:
                    cur, improved = best_cr, True
    return cols


def _optimize(
    init: list[list[str]], undirected: list[tuple[str, str]],
    neighbors: dict[str, list[str]],
) -> tuple[list[list[str]], int]:
    """Barycenter + transpose + reposition from a given starting order."""
    def col_of(cols: list[list[str]]) -> dict[str, int]:
        return {n: c for c, col in enumerate(cols) for n in col}

    columns = [list(c) for c in init]
    n_cols = len(columns)
    best = [list(c) for c in columns]
    best_cross = _crossings(best, undirected, col_of(best))

    for p in range(PASSES):
        rng = range(1, n_cols) if p % 2 == 0 else range(n_cols - 2, -1, -1)
        rows = {n: i for col in columns for i, n in enumerate(col)}
        for c in rng:
            def bary(n: str) -> float:
                ns = neighbors[n]
                return sum(rows[x] for x in ns) / len(ns) if ns else rows[n]
            columns[c] = sorted(columns[c], key=bary)
            for i, n in enumerate(columns[c]):
                rows[n] = i
        columns = _transpose(columns, undirected)
        columns = _reposition(columns, undirected)
        cross = _crossings(columns, undirected, col_of(columns))
        if cross < best_cross:
            best_cross, best = cross, [list(c) for c in columns]
        if best_cross == 0:
            break
    return best, best_cross


def solve(
    system_ids: list[str],
    loop_ids: list[str],
    loop_observes: dict[str, list[str]],
    loop_acts: dict[str, list[str]],
) -> Layout:
    nodes = list(system_ids) + list(loop_ids)
    sys_set = set(system_ids)

    adj: dict[str, list[str]] = {n: [] for n in nodes}
    dir_edges: list[tuple[str, str]] = []       # actual direction (source → target)
    for lid in loop_ids:
        for sid in loop_observes.get(lid, []):
            if sid in sys_set:
                adj[sid].append(lid)        # system → loop
                dir_edges.append((sid, lid))
        for sid in loop_acts.get(lid, []):
            if sid in sys_set:
                adj[lid].append(sid)        # loop → system
                dir_edges.append((lid, sid))

    forward = _break_cycles(nodes, adj)
    layer = _layers(nodes, forward)
    n_cols = max(layer.values(), default=0) + 1

    # Insert dummy waypoints so every edge segment spans one column; long edges then
    # route through empty rows of the intermediate columns instead of over boxes.
    col_members: list[list[str]] = [[] for _ in range(n_cols)]
    for n in sorted(nodes):
        col_members[layer[n]].append(n)

    edge_paths: dict[tuple[str, str], list[str]] = {}
    dummies: set[str] = set()
    undirected: list[tuple[str, str]] = []
    dcount = 0
    for u, v in dir_edges:
        cu, cv = layer[u], layer[v]
        path = [u]
        if cu != cv:
            step = 1 if cv > cu else -1
            for c in range(cu + step, cv, step):
                d = f"__d{dcount}"; dcount += 1
                dummies.add(d)
                col_members[c].append(d)
                path.append(d)
        path.append(v)
        edge_paths[(u, v)] = path
        for a, b in zip(path, path[1:]):
            undirected.append((a, b))

    columns: list[list[str]] = col_members
    all_nodes = [n for col in columns for n in col]

    neighbors: dict[str, list[str]] = {n: [] for n in all_nodes}
    for u, v in undirected:
        neighbors[u].append(v)
        neighbors[v].append(u)

    def col_of(cols: list[list[str]]) -> dict[str, int]:
        return {n: c for c, col in enumerate(cols) for n in col}

    deg = {n: len(neighbors[n]) for n in all_nodes}

    # Several deterministic starting orders, to escape local minima.
    def variant(key) -> list[list[str]]:
        return [sorted(col, key=key) for col in columns]

    starts = [
        [list(c) for c in columns],                       # by id
        variant(lambda n: -deg[n]),                       # high-degree first
        variant(lambda n: deg[n]),                        # low-degree first
        [list(reversed(c)) for c in columns],             # reversed
    ]

    best, best_cross = None, None
    for start in starts:
        cols, cross = _optimize(start, undirected, neighbors)
        if best_cross is None or cross < best_cross:
            best, best_cross = cols, cross
        if best_cross == 0:
            break

    columns = best
    y_of = _straighten(columns, neighbors)
    # Normalise so the smallest coordinate is 0.
    if y_of:
        base = min(y_of.values())
        y_of = {n: v - base for n, v in y_of.items()}
    return Layout(
        columns=columns,
        col_of=col_of(columns),
        row_of={n: i for col in columns for i, n in enumerate(col)},
        y_of=y_of,
        crossings=best_cross,
        edge_paths=edge_paths,
        dummies=dummies,
    )
