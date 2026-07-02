import { Handle, Position } from '@xyflow/react'

const Handles = () => (
  <>
    <Handle type="target" position={Position.Left} id="lt" className="rf-h" />
    <Handle type="source" position={Position.Left} id="ls" className="rf-h" />
    <Handle type="target" position={Position.Right} id="rt" className="rf-h" />
    <Handle type="source" position={Position.Right} id="rs" className="rf-h" />
  </>
)

export function SystemNode({ data }) {
  return (
    <div className="rf-system">
      {data.favicon ? (
        <img
          className="rf-ico"
          src={data.favicon}
          width="20"
          height="20"
          onError={(e) => { e.target.style.visibility = 'hidden' }}
        />
      ) : (
        <span className="rf-fallback">{(data.label || '?')[0].toUpperCase()}</span>
      )}
      <div className="rf-sys-body">
        <div className="rf-sys-name">{data.label}</div>
        {data.description ? <div className="rf-sys-desc">{data.description}</div> : null}
      </div>
      <Handles />
    </div>
  )
}

export function LoopNode({ data }) {
  return (
    <div className="rf-loop">
      <div className="rf-loop-head">
        <span>Agentic Loop</span>
        {data.emoji ? <span className="rf-emoji">{data.emoji}</span> : null}
      </div>
      <div className="rf-loop-body">
        <div className="rf-loop-name">{data.label}</div>
        {data.description ? <div className="rf-loop-desc">{data.description}</div> : null}
      </div>
      <Handles />
    </div>
  )
}

export function DummyNode() {
  return (
    <div className="rf-dummy">
      <Handles />
    </div>
  )
}

export const nodeTypes = { system: SystemNode, loop: LoopNode, dummy: DummyNode }
