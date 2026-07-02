// looparch visualizer - the interactive Loop Architecture diagram as a reusable
// ES module. Renders the React Flow JSON produced by `looparch export` (or the
// browser-side flow.build): systems, agentic loops, and the edges between them.
//
// The host page must provide an import map for "react", "react-dom/client",
// "htm" and "@xyflow/react", plus the React Flow stylesheet and this folder's
// visualizer.css. Then:
//
//   import { createController } from './visualizer/visualizer.js';
//   const viz = createController(document.getElementById('flow'));
//   viz.show(graphOrUrl);   // graph object, or a URL to a .flow.json
//
import React from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';
import { ReactFlow, Background, Controls, Handle, Position, MarkerType } from '@xyflow/react';

const html = htm.bind(React.createElement);
const { useState } = React;

const Handles = () => html`
  <${Handle} type="target" position=${Position.Left} id="lt" className="rf-h" />
  <${Handle} type="source" position=${Position.Left} id="ls" className="rf-h" />
  <${Handle} type="target" position=${Position.Right} id="rt" className="rf-h" />
  <${Handle} type="source" position=${Position.Right} id="rs" className="rf-h" />`;

const SystemNode = ({ data }) => html`
  <div class="rf-system">
    ${data.favicon
      ? html`<img class="rf-ico" src=${data.favicon} width="20" height="20"
           onError=${(e) => { e.target.style.visibility = 'hidden'; }} />`
      : html`<span class="rf-fallback">${(data.label || '?')[0].toUpperCase()}</span>`}
    <div class="rf-sys-body">
      <div class="rf-sys-name">${data.label}</div>
      ${data.description ? html`<div class="rf-sys-desc">${data.description}</div>` : null}
    </div>
    <${Handles} />
  </div>`;

const LoopNode = ({ data }) => html`
  <div class="rf-loop">
    <div class="rf-loop-head">
      <span>Agentic Loop</span>
      ${data.emoji ? html`<span class="rf-emoji">${data.emoji}</span>` : null}
    </div>
    <div class="rf-loop-body">
      <div class="rf-loop-name">${data.label}</div>
      ${data.description ? html`<div class="rf-loop-desc">${data.description}</div>` : null}
    </div>
    <${Handles} />
  </div>`;

const DummyNode = () => html`<div class="rf-dummy"><${Handles} /></div>`;

const nodeTypes = { system: SystemNode, loop: LoopNode, dummy: DummyNode };

const field = (label, value) => value
  ? html`<div class="flow-field"><div class="flow-field-label">${label}</div>
           <div class="flow-field-value">${value}</div></div>` : null;
const chips = (label, arr) => (arr && arr.length)
  ? html`<div class="flow-field"><div class="flow-field-label">${label}</div>
           <div>${arr.map((x) => html`<span class="flow-chip">${x}</span>`)}</div></div>` : null;
const link = (url) => html`<a href=${url} target="_blank" rel="noopener">${url}</a>`;

const Panel = ({ node, onClose }) => {
  const d = node.data;
  const isLoop = node.type === 'loop';
  return html`<aside class="flow-panel">
    <button class="flow-panel-close" onClick=${onClose} aria-label="Close">×</button>
    <div class="flow-panel-kind">${isLoop ? 'Loop' : 'System'}</div>
    <h3>${d.label}</h3>
    <div class="flow-panel-id">${d.id}</div>
    ${d.description ? html`<p class="flow-panel-desc">${d.description}</p>` : null}
    ${isLoop ? html`
      ${field('Prompt', d.prompt)}
      ${chips('Triggers', d.triggers)}
      ${field('Model', d.model)}
      ${chips('Uses', d.uses)}
      ${chips('Writes back', d.writesBack)}
      ${chips('Tools', d.tools)}
    ` : html`
      ${d.url ? field('URL', link(d.url)) : null}
      ${d.repository ? field('Repository', link(d.repository)) : null}
      ${field('Connector', d.connector)}
      ${chips('Read by', d.readBy)}
      ${chips('Written by', d.writtenBy)}
    `}
  </aside>`;
};

function buildEdges(graph) {
  const edgeColor = graph.edge || '#9ca3af';
  return graph.edges.map((e) => ({
    id: e.id, source: e.source, target: e.target,
    sourceHandle: e.sourceHandle, targetHandle: e.targetHandle,
    style: { stroke: edgeColor, strokeWidth: 1.5 },
    markerEnd: e.end === false ? undefined
      : { type: MarkerType.ArrowClosed, color: edgeColor, width: 15, height: 15 },
  }));
}

const Diagram = ({ graph }) => {
  const [sel, setSel] = useState(null);
  const edges = buildEdges(graph);
  return html`<div class="flow-wrap">
    <${ReactFlow} nodes=${graph.nodes} edges=${edges} nodeTypes=${nodeTypes}
        fitView minZoom=${0.2} nodesConnectable=${false}
        onNodeClick=${(_, n) => setSel(n)} onPaneClick=${() => setSel(null)}>
      <${Background} color="#e5e7eb" gap=${22} />
      <${Controls} showInteractive=${false} />
    <//>
    ${sel ? html`<${Panel} node=${sel} onClose=${() => setSel(null)} />` : null}
  </div>`;
};

// Mount a controller into `container`. Returns { show(graphOrUrl) } which can be
// called repeatedly (e.g. by tabs) to swap the rendered architecture.
export function createController(container) {
  container.classList.add('flow');
  const cache = {};
  let root = null;

  async function show(source) {
    try {
      const graph = typeof source === 'string'
        ? (cache[source] || (cache[source] = await fetch(source).then((r) => r.json())))
        : source;
      if (!root) { container.innerHTML = ''; root = createRoot(container); }
      const key = typeof source === 'string' ? source : (graph.id || graph.name || 'graph');
      root.render(html`<${Diagram} key=${key} graph=${graph} />`);
    } catch (err) {
      container.innerHTML = '<p class="flow-loading">Could not load the diagram (needs network).</p>';
    }
  }

  return { show };
}

// Convenience for the common "render one architecture" case.
export function mount(container, source) {
  const viz = createController(container);
  viz.show(source);
  return viz;
}

export { nodeTypes, buildEdges, Diagram };
