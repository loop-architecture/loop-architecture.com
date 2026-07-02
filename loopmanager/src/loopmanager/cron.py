"""Minimal 5-field cron matcher (minute hour day-of-month month day-of-week).

Supports `*`, `*/n`, `a-b`, `a,b`, `a-b/n` and plain numbers, enough for the crons a
Loop Architecture uses. Day-of-week is 0-6 (Sunday=0), with 7 also meaning Sunday.
"""

from __future__ import annotations

from datetime import datetime


def _field(spec: str, lo: int, hi: int) -> set[int]:
    values: set[int] = set()
    for part in spec.split(","):
        step = 1
        if "/" in part:
            part, step_s = part.split("/", 1)
            step = int(step_s)
        if part in ("*", ""):
            start, end = lo, hi
        elif "-" in part:
            a, b = part.split("-", 1)
            start, end = int(a), int(b)
        else:
            start = end = int(part)
        for v in range(start, end + 1, step):
            if lo <= v <= hi:
                values.add(v)
    return values


def matches(expr: str, when: datetime) -> bool:
    """True if the 5-field cron `expr` fires at minute `when`."""
    fields = expr.split()
    if len(fields) != 5:
        return False
    minute, hour, dom, month, dow = fields
    if when.minute not in _field(minute, 0, 59):
        return False
    if when.hour not in _field(hour, 0, 23):
        return False
    if when.month not in _field(month, 1, 12):
        return False

    py_dow = (when.weekday() + 1) % 7          # Python Mon=0..Sun=6 -> cron Sun=0..Sat=6
    dow_set = _field(dow, 0, 7)
    dow_ok = py_dow in dow_set or (7 in dow_set and py_dow == 0)
    dom_ok = when.day in _field(dom, 1, 31)

    # Standard cron rule: if both day-of-month and day-of-week are restricted, match
    # either; if one is `*`, both must hold.
    if dom.strip() != "*" and dow.strip() != "*":
        return dom_ok or dow_ok
    return dom_ok and dow_ok
