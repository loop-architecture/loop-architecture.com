// Public API of the loopmanager visualizer bundle.
//
// The visualizer works on the Loop Architecture YAML directly: it parses the YAML
// and maps it to the React Flow format itself (layout + graph), so pages only need
// to point it at a .loopmanager.yaml file (or pass raw YAML / a prebuilt graph).
import '@xyflow/react/dist/style.css'
import './styles.css'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { Diagram } from './components/Diagram.jsx'
import { Editor } from './components/Editor.jsx'
import { Monitor } from './components/Monitor.jsx'
import { parseArchitecture, architectureFromRaw } from './lib/model.js'
import { build } from './lib/flow.js'

async function toGraph(source, cache) {
  if (source && typeof source === 'object' && Array.isArray(source.nodes)) return source
  if (source && typeof source === 'object' && typeof source.yaml === 'string') {
    return build(parseArchitecture(source.yaml), { favicons: true })
  }
  if (typeof source === 'string') {
    // Bare YAML text (has a newline and no path-like shape) vs a URL to fetch.
    if (/\n/.test(source) && !/^\s*https?:\/\//.test(source)) {
      return build(parseArchitecture(source), { favicons: true })
    }
    if (/\.ya?ml($|[?#])/i.test(source)) {
      const t = cache[source] || (cache[source] = await fetch(source).then((r) => r.text()))
      return build(parseArchitecture(t), { favicons: true })
    }
    return cache[source] || (cache[source] = await fetch(source).then((r) => r.json()))
  }
  throw new Error('unsupported diagram source')
}

// Read-only diagram controller. show() accepts a .loopmanager.yaml URL, a .flow.json
// URL, raw YAML text, or a prebuilt graph object. Can be called repeatedly.
export function createController(container) {
  container.classList.add('flow')
  const cache = {}
  let root = null
  async function show(source) {
    try {
      const graph = await toGraph(source, cache)
      if (!root) { container.innerHTML = ''; root = createRoot(container) }
      root.render(
        createElement(Diagram, {
          graph,
          fitKey: (graph.id || '') + ':' + graph.nodes.length,
          key: graph.id || 'graph',
        }),
      )
    } catch (e) {
      container.innerHTML = '<p class="flow-loading">Could not load the diagram (needs network).</p>'
    }
  }
  return { show }
}

// Editable diagram: Monaco YAML pane + live diagram. opts: { initialYaml, examples: [{label, url}] }.
export function mountEditor(container, opts = {}) {
  const root = createRoot(container)
  root.render(createElement(Editor, opts))
  return root
}

// Live monitor: the diagram + per-loop run status polled from a server (loopmanager serve).
// opts: { source (yaml text/url or graph), statusUrl, pollMs, onRun(loopId) }.
export function mountMonitor(container, opts = {}) {
  container.classList.add('flow')
  const cache = {}
  const root = createRoot(container)
  toGraph(opts.source, cache)
    .then((graph) =>
      root.render(createElement(Monitor, {
        graph, statusUrl: opts.statusUrl, pollMs: opts.pollMs, onRun: opts.onRun,
      })))
    .catch(() => { container.innerHTML = '<p class="flow-loading">Could not load the diagram.</p>' })
  return root
}

export { Diagram, Editor, Monitor, build, parseArchitecture, architectureFromRaw }
