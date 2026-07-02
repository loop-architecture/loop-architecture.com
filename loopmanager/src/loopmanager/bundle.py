"""Access the visualizer bundle (visualizer.js + visualizer.css) shipped inside the
package, so `view` and `serve` render the diagram fully offline, no dependency on the
deployed site. The bundle is copied from visualizer/dist on `npm run build`.
"""

from __future__ import annotations

from importlib.resources import files
from pathlib import Path

NAMES = ("visualizer.js", "visualizer.css")
CONTENT_TYPE = {"visualizer.js": "text/javascript; charset=utf-8",
                "visualizer.css": "text/css; charset=utf-8"}


def read(name: str) -> bytes:
    """Return the bytes of a bundled visualizer file."""
    return files("loopmanager").joinpath("vendor", "visualizer", name).read_bytes()


def write_to(directory: str | Path) -> None:
    """Copy the visualizer bundle into a directory (next to a generated HTML page)."""
    directory = Path(directory)
    directory.mkdir(parents=True, exist_ok=True)
    for name in NAMES:
        (directory / name).write_bytes(read(name))
