"""loopmanager, Loop Architecture tooling.

Validate, lint, visualize and sync `loopmanager/v1` loops.
"""

__version__ = "0.1.0"
API_VERSION = "loopmanager/v1"

from .model import Architecture, Loop, System, load_architecture  # noqa: E402,F401
