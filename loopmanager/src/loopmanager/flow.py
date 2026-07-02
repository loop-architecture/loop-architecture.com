"""Render a standalone HTML page that visualizes a Loop Architecture.

The graph-building logic (YAML -> systems/loops -> layout -> React Flow) lives only
in the visualizer (visualizer/src). Here we just embed the YAML and let the shared
visualizer bundle build and render it in the browser.
"""

from __future__ import annotations

import json

# Where `loopmanager view` loads the shared visualizer bundle (React + React Flow are
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
    // The visualizer parses the YAML and maps it to the diagram itself.
    const yaml = {yaml};
    createController(document.getElementById('flow')).show(yaml);
  </script>
</body>
</html>
"""


def page(yaml_text: str, title: str = "Loop Architecture", base: str = VISUALIZER_BASE) -> str:
    """A standalone HTML page that renders a Loop Architecture YAML with the visualizer."""
    return _PAGE.format(title=title, base=base, yaml=json.dumps(yaml_text))
