"""Schema validation and best-practice linting for a Loop Architecture."""

from __future__ import annotations

import json
from dataclasses import dataclass
from importlib import resources
from typing import Any

import jsonschema

from .model import Architecture


@dataclass
class Issue:
    level: str  # "error" | "warning"
    message: str

    def __str__(self) -> str:
        icon = "✗" if self.level == "error" else "⚠"
        return f"{icon} {self.message}"


def load_schema() -> dict[str, Any]:
    text = resources.files("loopmanager").joinpath("loop-architecture.schema.json").read_text("utf-8")
    return json.loads(text)


def validate_schema(arch: Architecture) -> list[Issue]:
    schema = load_schema()
    validator = jsonschema.Draft202012Validator(schema)
    issues: list[Issue] = []
    for err in sorted(validator.iter_errors(arch.raw), key=lambda e: list(e.path)):
        loc = "/".join(str(p) for p in err.path) or "(root)"
        issues.append(Issue("error", f"{loc}: {err.message}"))
    return issues


def lint(arch: Architecture) -> list[Issue]:
    """Consistency and safety checks beyond the schema."""
    issues: list[Issue] = []
    system_ids = arch.system_ids

    for lp in arch.loops:
        # Referential integrity: every observed/acted system must be declared.
        for sid in lp.observe:
            if sid not in system_ids:
                issues.append(Issue("error", f"loop '{lp.id}' observes unknown system '{sid}'"))
        for sid in lp.act:
            if sid not in system_ids:
                issues.append(Issue("error", f"loop '{lp.id}' acts on unknown system '{sid}'"))

        # Trigger coherence (mirrors Claude Code routine triggers).
        for typ, val in lp.typed_triggers():
            if typ == "schedule" and len(str(val).split()) != 5:
                issues.append(Issue("warning", f"loop '{lp.id}' schedule '{val}' should be a 5-field cron"))

    # Unused systems.
    used = set()
    for lp in arch.loops:
        used |= set(lp.observe) | set(lp.act)
    for sid in system_ids:
        if sid not in used:
            issues.append(Issue("warning", f"system '{sid}' is declared but never used by any loop"))

    return issues


def check(arch: Architecture, do_lint: bool = True) -> list[Issue]:
    issues = validate_schema(arch)
    if not any(i.level == "error" for i in issues) and do_lint:
        issues += lint(arch)
    return issues
