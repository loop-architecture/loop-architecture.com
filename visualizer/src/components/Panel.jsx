function field(label, value) {
  if (!value) return null
  return (
    <div className="flow-field">
      <div className="flow-field-label">{label}</div>
      <div className="flow-field-value">{value}</div>
    </div>
  )
}

function chips(label, arr) {
  if (!arr || !arr.length) return null
  return (
    <div className="flow-field">
      <div className="flow-field-label">{label}</div>
      <div>{arr.map((x, i) => <span className="flow-chip" key={i}>{x}</span>)}</div>
    </div>
  )
}

const link = (url) => (
  <a href={url} target="_blank" rel="noopener">{url}</a>
)

export function Panel({ node, onClose }) {
  const d = node.data
  const isLoop = node.type === 'loop'
  return (
    <aside className="flow-panel">
      <button className="flow-panel-close" onClick={onClose} aria-label="Close">×</button>
      <div className="flow-panel-kind">{isLoop ? 'Loop' : 'System'}</div>
      <h3>{d.label}</h3>
      <div className="flow-panel-id">{d.id}</div>
      {d.description ? <p className="flow-panel-desc">{d.description}</p> : null}
      {isLoop ? (
        <>
          {field('Prompt', d.prompt)}
          {chips('Triggers', d.triggers)}
          {field('Model', d.model)}
          {chips('Uses', d.uses)}
          {chips('Writes back', d.writesBack)}
          {chips('Tools', d.tools)}
        </>
      ) : (
        <>
          {d.url ? field('URL', link(d.url)) : null}
          {d.repository ? field('Repository', link(d.repository)) : null}
          {field('Connector', d.connector)}
          {chips('Read by', d.readBy)}
          {chips('Written by', d.writtenBy)}
        </>
      )}
    </aside>
  )
}
