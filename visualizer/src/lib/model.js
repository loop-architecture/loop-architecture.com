// Data model for a Loop Architecture, ported from loopmanager's Python model.py so
// the diagram can be computed in the browser directly from YAML.
import { parse as parseYaml } from 'yaml'

const ISO = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/

// Infer the routine trigger type from the simple trigger string.
export function triggerType(trigger) {
  const t = (trigger == null ? '' : String(trigger)).trim()
  if (!t || t.toLowerCase() === 'manual') return 'manual'
  if (t.split(/\s+/).length === 5) return 'schedule'
  if (ISO.test(t)) return 'once'
  if (!t.includes(' ')) return 'event' // e.g. push, pull_request.opened
  return 'manual'
}

function title(s) {
  return String(s || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function domainOf(raw) {
  const src = (raw || '').trim()
  if (!src) return null
  const m = src.match(/^(?:[a-z]+:\/\/)?([^/]+)/i)
  return m ? m[1].toLowerCase() : null
}

export function parseSystem(value) {
  const v = value || {}
  const id = v.id || ''
  const iconUrl = v.url || v.repository || null
  return {
    id,
    name: v.name || id,
    description: v.description || '',
    url: v.url || null,
    repository: v.repository || null,
    connector: v.connector || null,
    domain: domainOf(iconUrl),
  }
}

export function parseLoop(value) {
  const v = value || {}
  const id = v.id || ''
  let triggers
  if (Array.isArray(v.trigger)) triggers = v.trigger.map(String)
  else if (v.trigger != null) triggers = [String(v.trigger)]
  else triggers = ['manual']
  if (triggers.length === 0) triggers = ['manual']
  return {
    id,
    name: v.name || title(id),
    description: (v.description || '').trim(),
    triggers,
    typedTriggers: triggers.map((t) => ({ type: triggerType(t), value: t })),
    observe: Array.isArray(v.observe) ? v.observe.slice() : [],
    act: Array.isArray(v.act) ? v.act.slice() : [],
    instructions: (v.instructions || '').trim(),
    model: v.model || null,
    tools: Array.isArray(v.tools) ? v.tools.slice() : [],
  }
}

// Build an architecture object from an already-parsed YAML mapping.
export function architectureFromRaw(raw) {
  const data = raw || {}
  const id = data.id || ''
  return {
    id,
    name: data.name || (id ? title(id) : 'Loop Architecture'),
    description: (data.description || '').trim(),
    systems: (data.systems || []).map(parseSystem),
    loops: (data.loops || []).map(parseLoop),
  }
}

// Parse YAML text into an architecture. Throws on invalid YAML or a non-mapping
// top-level document (message is safe to show to the user).
export function parseArchitecture(text) {
  const data = parseYaml(text)
  if (data == null || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('The top-level document must be a mapping with id, systems and loops.')
  }
  return architectureFromRaw(data)
}

export function systemRole(arch, sid) {
  const reads = arch.loops.some((lp) => lp.observe.includes(sid))
  const writes = arch.loops.some((lp) => lp.act.includes(sid))
  if (reads && writes) return 'both'
  if (writes) return 'actuator'
  if (reads) return 'sensor'
  return 'unused'
}
