"""Fetch favicons for systems so diagrams get nice icons.

Uses Google's public favicon service, which returns a normalized PNG for any
domain. Results are cached in-memory and on disk; failures degrade gracefully to
a lettered fallback drawn by the diagram code.
"""

from __future__ import annotations

import base64
import hashlib
import urllib.error
import urllib.request
from pathlib import Path

_SERVICE = "https://www.google.com/s2/favicons?sz=64&domain={domain}"
_CACHE_DIR = Path.home() / ".cache" / "looparch" / "favicons"
_MEM: dict[str, str | None] = {}


def _cache_file(domain: str) -> Path:
    h = hashlib.sha1(domain.encode("utf-8")).hexdigest()[:16]
    return _CACHE_DIR / f"{h}.png"


def service_url(domain: str | None) -> str | None:
    """The favicon service URL for a domain (loaded lazily by the browser)."""
    return _SERVICE.format(domain=domain) if domain else None


def data_uri(domain: str | None, timeout: float = 4.0) -> str | None:
    """Return a base64 PNG data URI for the domain's favicon, or None on failure."""
    if not domain:
        return None
    if domain in _MEM:
        return _MEM[domain]

    png: bytes | None = None
    cached = _cache_file(domain)
    if cached.exists():
        png = cached.read_bytes()
    else:
        try:
            req = urllib.request.Request(
                _SERVICE.format(domain=domain),
                headers={"User-Agent": "looparch/0.1 (+https://loop-architecture.com)"},
            )
            with urllib.request.urlopen(req, timeout=timeout) as resp:  # noqa: S310 (trusted host)
                data = resp.read()
            # Google returns a small generic globe for unknown domains; keep it anyway.
            if data:
                png = data
                try:
                    cached.parent.mkdir(parents=True, exist_ok=True)
                    cached.write_bytes(data)
                except OSError:
                    pass
        except (urllib.error.URLError, TimeoutError, OSError, ValueError):
            png = None

    uri = f"data:image/png;base64,{base64.b64encode(png).decode('ascii')}" if png else None
    _MEM[domain] = uri
    return uri
