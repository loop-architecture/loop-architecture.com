"""Data model for a Loop Architecture: many systems and many loops in one document."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml

_ISO = re.compile(r"^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}")


class LoopError(Exception):
    """Raised when an architecture file cannot be read or parsed."""


def trigger_type(trigger: str | None) -> str:
    """Infer the routine trigger type from the simple trigger string."""
    t = (trigger or "").strip()
    if not t or t.lower() == "manual":
        return "manual"
    if len(t.split()) == 5:
        return "schedule"
    if _ISO.match(t):
        return "once"
    if " " not in t:
        return "event"   # e.g. push, pull_request.opened
    return "manual"


@dataclass
class System:
    id: str
    name: str = ""
    description: str = ""
    url: str | None = None
    repository: str | None = None
    connector: str | None = None

    @classmethod
    def parse(cls, value: Any) -> "System":
        value = value or {}
        sid = value.get("id", "")
        return cls(
            id=sid,
            name=value.get("name") or sid,
            description=value.get("description", ""),
            url=value.get("url"),
            repository=value.get("repository"),
            connector=value.get("connector"),
        )

    @property
    def icon_url(self) -> str | None:
        """The URL whose favicon represents this system (url, else repository)."""
        return self.url or self.repository

    @property
    def domain(self) -> str | None:
        raw = self.icon_url
        if not raw:
            return None
        m = re.search(r"^(?:[a-z]+://)?([^/]+)", raw.strip())
        return m.group(1).lower() if m else None


@dataclass
class Loop:
    """A single loop within an architecture."""

    raw: dict[str, Any]

    @property
    def id(self) -> str:
        return self.raw.get("id", "")

    @property
    def name(self) -> str:
        return self.raw.get("name") or self.id.replace("-", " ").title()

    @property
    def description(self) -> str:
        return (self.raw.get("description") or "").strip()

    @property
    def owner(self) -> str:
        return self.raw.get("owner", "")

    @property
    def triggers(self) -> list[str]:
        """A loop can have one or more triggers."""
        t = self.raw.get("trigger", "manual")
        if isinstance(t, list):
            return [str(x) for x in t] or ["manual"]
        return [str(t)]

    @property
    def trigger(self) -> str:
        """Human-readable join of the triggers (for display)."""
        return ", ".join(self.triggers)

    def typed_triggers(self) -> list[tuple[str, str]]:
        """(type, value) for each trigger."""
        return [(trigger_type(t), t) for t in self.triggers]

    def schedule(self) -> str | None:
        """The first cron schedule, if any."""
        for typ, val in self.typed_triggers():
            if typ == "schedule":
                return val
        return None

    @property
    def observe(self) -> list[str]:
        return list(self.raw.get("observe", []) or [])

    @property
    def act(self) -> list[str]:
        return list(self.raw.get("act", []) or [])

    @property
    def prompt(self) -> str:
        return (self.raw.get("prompt") or "").strip()

    @property
    def model(self) -> str | None:
        return self.raw.get("model")

    @property
    def tools(self) -> list[str]:
        return list(self.raw.get("tools", []) or [])


@dataclass
class Architecture:
    raw: dict[str, Any]
    path: Path | None = None

    @property
    def id(self) -> str:
        return self.raw.get("id", "")

    @property
    def name(self) -> str:
        return self.raw.get("name") or (self.id.replace("-", " ").title() if self.id else "Loop Architecture")

    @property
    def systems(self) -> list[System]:
        return [System.parse(v) for v in (self.raw.get("systems", []) or [])]

    @property
    def system_ids(self) -> set[str]:
        return {s.id for s in self.systems}

    def system(self, sid: str) -> System | None:
        for s in self.systems:
            if s.id == sid:
                return s
        return None

    @property
    def loops(self) -> list[Loop]:
        return [Loop(raw=v or {}) for v in (self.raw.get("loops", []) or [])]

    def loop(self, loop_id: str) -> Loop | None:
        for lp in self.loops:
            if lp.id == loop_id:
                return lp
        return None

    def system_role(self, sid: str) -> str:
        """Infer a system's role from how loops use it."""
        reads = any(sid in lp.observe for lp in self.loops)
        writes = any(sid in lp.act for lp in self.loops)
        if reads and writes:
            return "both"
        if writes:
            return "actuator"
        if reads:
            return "sensor"
        return "unused"

    def repositories_for(self, loop: Loop) -> list[str]:
        out: list[str] = []
        for sid in dict.fromkeys(loop.observe + loop.act):
            s = self.system(sid)
            if s and s.repository and s.repository not in out:
                out.append(s.repository)
        return out

    def connectors_for(self, loop: Loop) -> list[str]:
        out: list[str] = []
        for sid in dict.fromkeys(loop.observe + loop.act):
            s = self.system(sid)
            if s and s.connector and s.connector not in out:
                out.append(s.connector)
        return out


def load_architecture(path: str | Path) -> Architecture:
    """Load and YAML-parse a Loop Architecture file. Does not validate against the schema."""
    p = Path(path)
    try:
        text = p.read_text(encoding="utf-8")
    except OSError as e:
        raise LoopError(f"cannot read {p}: {e}") from e
    try:
        data = yaml.safe_load(text)
    except yaml.YAMLError as e:
        raise LoopError(f"invalid YAML in {p}: {e}") from e
    if not isinstance(data, dict):
        raise LoopError(f"{p}: top-level document must be a mapping")
    return Architecture(raw=data, path=p)
