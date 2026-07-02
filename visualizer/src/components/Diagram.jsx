import { useEffect, useState } from 'react'
import {
  ReactFlow, ReactFlowProvider, Background, Controls, MarkerType, useReactFlow,
} from '@xyflow/react'
import { nodeTypes } from './nodes.jsx'
import { Panel } from './Panel.jsx'

function buildEdges(graph) {
  const edgeColor = graph.edge || '#9ca3af'
  return graph.edges.map((e) => ({
    id: e.id, source: e.source, target: e.target,
    sourceHandle: e.sourceHandle, targetHandle: e.targetHandle,
    style: { stroke: edgeColor, strokeWidth: 1.5 },
    markerEnd: e.end === false
      ? undefined
      : { type: MarkerType.ArrowClosed, color: edgeColor, width: 15, height: 15 },
  }))
}

function Inner({ graph, fitKey }) {
  const [sel, setSel] = useState(null)
  const rf = useReactFlow()
  const edges = buildEdges(graph)

  // Re-fit whenever the diagram is (re)built, e.g. after an edit.
  useEffect(() => {
    const t = setTimeout(() => rf.fitView({ duration: 200 }), 30)
    return () => clearTimeout(t)
  }, [fitKey, rf])

  return (
    <div className="flow-wrap">
      <ReactFlow
        nodes={graph.nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        nodesConnectable={false}
        onNodeClick={(_, n) => setSel(n)}
        onPaneClick={() => setSel(null)}
      >
        <Background color="#e5e7eb" gap={22} />
        <Controls showInteractive={false} />
      </ReactFlow>
      {sel ? <Panel node={sel} onClose={() => setSel(null)} /> : null}
    </div>
  )
}

export function Diagram({ graph, fitKey }) {
  return (
    <ReactFlowProvider>
      <Inner graph={graph} fitKey={fitKey} />
    </ReactFlowProvider>
  )
}
