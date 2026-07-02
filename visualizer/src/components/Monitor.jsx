import { useEffect, useState } from 'react'
import { Diagram } from './Diagram.jsx'

// Live monitor: renders the diagram and polls a status endpoint, feeding per-loop
// run status (running / last run / outcome) into the loop badges.
export function Monitor({ graph, statusUrl, pollMs = 2500, onRun }) {
  const [status, setStatus] = useState({})

  useEffect(() => {
    let alive = true
    const tick = async () => {
      try {
        const s = await fetch(statusUrl).then((r) => r.json())
        if (alive) setStatus(s.loops || s || {})
      } catch { /* keep last status */ }
    }
    tick()
    const id = setInterval(tick, pollMs)
    return () => { alive = false; clearInterval(id) }
  }, [statusUrl, pollMs])

  return (
    <Diagram
      graph={graph}
      fitKey={(graph.id || '') + ':' + graph.nodes.length}
      status={status}
      onRun={onRun}
    />
  )
}
