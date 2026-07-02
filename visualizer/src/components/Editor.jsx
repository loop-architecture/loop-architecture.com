import { useEffect, useRef, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { Diagram } from './Diagram.jsx'
import { parseArchitecture } from '../lib/model.js'
import { build } from '../lib/flow.js'

const monacoOptions = {
  minimap: { enabled: false },
  fontSize: 13,
  lineNumbers: 'on',
  scrollBeyondLastLine: false,
  tabSize: 2,
  automaticLayout: true,
  padding: { top: 12, bottom: 12 },
  wordWrap: 'on',
  renderLineHighlight: 'none',
  overviewRulerLanes: 0,
}

// Editor: a Monaco YAML pane on the left, a live Loop Architecture diagram on the
// right. The diagram recomputes (parse -> layout -> render) as you type.
export function Editor({ initialYaml = '', examples = [] }) {
  const [text, setText] = useState(initialYaml)
  const [graph, setGraph] = useState(null)
  const [error, setError] = useState(null)
  const [version, setVersion] = useState(0)
  const [active, setActive] = useState(examples[0]?.label || null)
  const loadedFirst = useRef(false)

  // Load the first example on mount if we started empty.
  useEffect(() => {
    if (loadedFirst.current) return
    loadedFirst.current = true
    if (!initialYaml && examples[0]) {
      fetch(examples[0].url)
        .then((r) => r.text())
        .then((t) => setText(t))
        .catch(() => setError('Could not load the example (needs network).'))
    }
  }, [initialYaml, examples])

  // Recompute the diagram from the YAML, debounced. Keep the last good diagram on error.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!text.trim()) { setGraph(null); setError(null); return }
      try {
        const arch = parseArchitecture(text)
        setGraph(build(arch, { favicons: true }))
        setError(null)
        setVersion((v) => v + 1)
      } catch (e) {
        setError(e && e.message ? e.message : String(e))
      }
    }, 250)
    return () => clearTimeout(t)
  }, [text])

  const loadExample = (eg) => {
    setActive(eg.label)
    fetch(eg.url)
      .then((r) => r.text())
      .then((t) => setText(t))
      .catch(() => setError('Could not load the example (needs network).'))
  }

  return (
    <div className="loopmanager-editor">
      {examples.length > 0 ? (
        <div className="flow-tabs" role="tablist">
          {examples.map((eg) => (
            <button
              key={eg.label}
              className={'flow-tab' + (active === eg.label ? ' active' : '')}
              onClick={() => loadExample(eg)}
            >
              <span className="flow-tab-eg">Example:</span> {eg.label}
            </button>
          ))}
        </div>
      ) : null}
      <div className="editor-split">
        <div className="editor-pane">
          <MonacoEditor
            language="yaml"
            value={text}
            onChange={(v) => setText(v ?? '')}
            theme="vs"
            options={monacoOptions}
            loading={<p className="flow-loading">Loading editor…</p>}
          />
          {error ? <div className="editor-error" role="alert">{error}</div> : null}
        </div>
        <div className="diagram-pane">
          {graph ? (
            <Diagram graph={graph} fitKey={version} />
          ) : (
            <p className="flow-loading">{error ? 'Fix the YAML to see the diagram.' : 'Loading diagram…'}</p>
          )}
        </div>
      </div>
    </div>
  )
}
