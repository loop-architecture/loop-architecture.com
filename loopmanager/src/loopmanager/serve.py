"""Run a whole Loop Architecture locally.

`loopmanager serve <file>` starts a small server process that:
  - schedules every loop from the YAML (5-field cron + one-off ISO triggers),
  - triggers the agent for each run (dry-run by default; `--exec` shells out to `claude -p`),
  - tracks run history, and
  - serves the interactive diagram plus live monitoring as a website.

Stdlib only (http.server, threading, subprocess) so the CLI stays dependency-light.
"""

from __future__ import annotations

import json
import subprocess
import threading
import time
import webbrowser
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from . import cron
from .model import Architecture, load_architecture
from .templates import routine_prompt

VISUALIZER_BASE = "https://www.loop-architecture.com/visualizer/dist"


def _now() -> datetime:
    return datetime.now(timezone.utc)


@dataclass
class Run:
    id: str
    loop_id: str
    trigger: str            # schedule | once | manual
    started_at: str
    ended_at: str | None = None
    status: str = "running"  # running | ok | failed
    exit_code: int | None = None
    log_tail: str = ""


class RunStore:
    def __init__(self, root: Path) -> None:
        self.root = Path(root)
        self._lock = threading.Lock()
        self.runs: dict[str, list[Run]] = {}
        self._seq = 0

    def start(self, loop_id: str, trigger: str) -> Run:
        with self._lock:
            self._seq += 1
            run = Run(id=f"r{self._seq}", loop_id=loop_id, trigger=trigger, started_at=_now().isoformat())
            self.runs.setdefault(loop_id, []).append(run)
            return run

    def finish(self, run: Run, status: str, exit_code: int | None = None, log_tail: str = "") -> None:
        with self._lock:
            run.ended_at = _now().isoformat()
            run.status = status
            run.exit_code = exit_code
            run.log_tail = (log_tail or "")[-2000:]
            self._persist()

    def is_running(self, loop_id: str) -> bool:
        with self._lock:
            return any(r.status == "running" for r in self.runs.get(loop_id, []))

    def snapshot(self) -> dict:
        with self._lock:
            loops: dict[str, dict] = {}
            for lid, runs in self.runs.items():
                last = runs[-1]
                loops[lid] = {
                    "running": last.status == "running",
                    "lastRun": last.started_at,
                    "lastStatus": last.status,
                    "count": len(runs),
                    "runs": [asdict(r) for r in runs[-8:]][::-1],
                }
            return {"loops": loops, "now": _now().isoformat()}

    def _persist(self) -> None:
        try:
            self.root.mkdir(parents=True, exist_ok=True)
            data = {lid: [asdict(r) for r in rs] for lid, rs in self.runs.items()}
            (self.root / "runs.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
        except OSError:
            pass


class Runner:
    def __init__(self, arch: Architecture, store: RunStore, root: str | Path, exec_real: bool = False,
                 max_concurrent: int = 3) -> None:
        self.arch = arch
        self.store = store
        self.root = Path(root)
        self.exec_real = exec_real
        self._sem = threading.Semaphore(max_concurrent)

    def trigger(self, loop, trigger: str = "manual") -> bool:
        if self.store.is_running(loop.id):   # don't overlap a loop with itself
            return False
        threading.Thread(target=self._run, args=(loop, trigger), daemon=True).start()
        return True

    def _run(self, loop, trigger: str) -> None:
        run = self.store.start(loop.id, trigger)
        with self._sem:
            try:
                if not self.exec_real:
                    time.sleep(1.2)  # simulate an agent turn
                    self.store.finish(run, "ok", 0, f"(dry run) would run {loop.name} in {self.root}")
                    return
                prompt = routine_prompt(self.arch, loop)
                cmd = ["claude", "-p", prompt]
                if loop.model:
                    cmd += ["--model", loop.model]
                if loop.tools:
                    cmd += ["--allowedTools", " ".join(loop.tools)]
                proc = subprocess.run(cmd, cwd=str(self.root), capture_output=True, text=True, timeout=1800)
                ok = proc.returncode == 0
                self.store.finish(run, "ok" if ok else "failed", proc.returncode,
                                  (proc.stdout or "") + (proc.stderr or ""))
            except FileNotFoundError:
                self.store.finish(run, "failed", -1, "`claude` CLI not found on PATH (needed for --exec)")
            except Exception as e:  # noqa: BLE001
                self.store.finish(run, "failed", -1, f"{type(e).__name__}: {e}")


class Scheduler(threading.Thread):
    def __init__(self, arch: Architecture, runner: Runner, tick_seconds: int = 20) -> None:
        super().__init__(daemon=True)
        self.arch = arch
        self.runner = runner
        self.tick_seconds = tick_seconds
        self._stop = threading.Event()
        self._fired: set[str] = set()

    def stop(self) -> None:
        self._stop.set()

    def run(self) -> None:
        while not self._stop.is_set():
            now = _now().replace(second=0, microsecond=0)
            minute = now.strftime("%Y%m%d%H%M")
            for loop in self.arch.loops:
                for typ, val in loop.typed_triggers():
                    if typ == "schedule" and cron.matches(val, now):
                        key = f"sched:{loop.id}:{minute}:{val}"
                        if key not in self._fired:
                            self._fired.add(key)
                            self.runner.trigger(loop, "schedule")
                    elif typ == "once":
                        key = f"once:{loop.id}:{val}"
                        if key not in self._fired and _passed(val, now):
                            self._fired.add(key)
                            self.runner.trigger(loop, "once")
            self._stop.wait(self.tick_seconds)


def _passed(iso: str, now: datetime) -> bool:
    try:
        dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return now >= dt
    except ValueError:
        return False


_PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title} - loopmanager</title>
<link rel="stylesheet" href="{base}/visualizer.css" />
<style>
  html, body {{ margin: 0; min-height: 100%; background: #fff; font-family: Inter, system-ui, sans-serif; color: #111827; }}
  .bar {{ display: flex; align-items: center; gap: 10px; padding: 12px 18px; border-bottom: 1px solid #e5e7eb; }}
  .bar b {{ font-size: 15px; }} .bar .dim {{ color: #6b7280; font-size: 13px; }}
  .live {{ margin-left: auto; font-size: 12px; color: #16a34a; font-weight: 600; }}
  #flow {{ height: calc(100vh - 90px); }}
</style>
</head>
<body>
  <div class="bar">
    <b>{title}</b>
    <span class="dim">{loops} loops · running locally with loopmanager</span>
    <span class="live">● live</span>
  </div>
  <div id="flow"><p class="flow-loading">Loading diagram...</p></div>
  <script type="module">
    import {{ mountMonitor }} from '{base}/visualizer.js';
    const yaml = {yaml};
    mountMonitor(document.getElementById('flow'), {{
      source: yaml,
      statusUrl: '/api/status',
      pollMs: 2500,
      onRun: (id) => fetch('/api/loops/' + id + '/run', {{ method: 'POST' }}),
    }});
  </script>
</body>
</html>
"""


def _make_handler(store: RunStore, runner: Runner, arch: Architecture, yaml_text: str):
    page = _PAGE.format(
        title=arch.name or arch.id or "Loop Architecture",
        base=VISUALIZER_BASE,
        loops=len(arch.loops),
        yaml=json.dumps(yaml_text),
    )
    by_id = {lp.id: lp for lp in arch.loops}

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *_a):  # quiet
            pass

        def _send(self, code, body, ctype="application/json"):
            data = body.encode("utf-8") if isinstance(body, str) else body
            self.send_response(code)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def do_GET(self):
            if self.path == "/" or self.path.startswith("/?"):
                self._send(200, page, "text/html; charset=utf-8")
            elif self.path == "/api/status":
                self._send(200, json.dumps(store.snapshot()))
            else:
                self._send(404, json.dumps({"error": "not found"}))

        def do_POST(self):
            parts = self.path.strip("/").split("/")
            if len(parts) == 4 and parts[0] == "api" and parts[1] == "loops" and parts[3] == "run":
                loop = by_id.get(parts[2])
                if not loop:
                    self._send(404, json.dumps({"error": "no such loop"}))
                    return
                started = runner.trigger(loop, "manual")
                self._send(200, json.dumps({"started": started, "loop": loop.id}))
            else:
                self._send(404, json.dumps({"error": "not found"}))

    return Handler


def serve(file: str, port: int = 8700, root: str | Path = ".", exec_real: bool = False,
          open_browser: bool = True) -> None:
    """Load the architecture, start the scheduler, and serve the monitoring site."""
    arch = load_architecture(file)
    yaml_text = Path(file).read_text(encoding="utf-8")
    store = RunStore(Path(root) / ".loopmanager")
    runner = Runner(arch, store, root=root, exec_real=exec_real)
    scheduler = Scheduler(arch, runner)
    scheduler.start()

    handler = _make_handler(store, runner, arch, yaml_text)
    httpd = ThreadingHTTPServer(("127.0.0.1", port), handler)
    url = f"http://127.0.0.1:{port}"
    mode = "EXEC (claude -p)" if exec_real else "dry-run"
    print(f"loopmanager serving {arch.name!r}: {len(arch.loops)} loops, {len(arch.systems)} systems")
    print(f"  scheduler: on   runner: {mode}")
    print(f"  open {url}   (Ctrl+C to stop)")
    if open_browser:
        try:
            webbrowser.open(url)
        except Exception:  # noqa: BLE001
            pass
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nstopping…")
    finally:
        scheduler.stop()
        httpd.server_close()
