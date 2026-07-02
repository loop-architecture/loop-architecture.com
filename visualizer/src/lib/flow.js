// Build React Flow JSON from an architecture, ported from loopmanager's flow.py so
// the browser can lay a Loop Architecture out directly from its YAML.
import { serviceUrl } from './favicon.js'
import { solve } from './layout.js'

export const ACCENT = '#7c3aed'
export const EDGE = '#9ca3af'
export const TRIGGER_EMOJI = { schedule: '🕐', event: '⚡', once: '📅', manual: '👆' }

const COL_W = 320
const ROW = 120
const MARGIN = 40
const NODE_W = 220
const NODE_H = 76

export function build(arch, { favicons = true } = {}) {
  const { systems, loops } = arch
  const byId = new Map(systems.map((s) => [s.id, s]))
  const order = systems.map((s) => s.id)
  const loopIds = loops.map((lp) => lp.id)
  const sysName = (sid) => (byId.get(sid) ? byId.get(sid).name : sid)

  const observes = {}
  const acts = {}
  for (const lp of loops) { observes[lp.id] = lp.observe; acts[lp.id] = lp.act }
  const plan = solve(order, loopIds, observes, acts)

  const pos = (nid) => ({ x: MARGIN + plan.colOf.get(nid) * COL_W, y: plan.yOf.get(nid) * ROW })

  const reads = new Map(order.map((sid) => [sid, []]))
  const writes = new Map(order.map((sid) => [sid, []]))
  for (const lp of loops) {
    for (const sid of lp.observe) if (reads.has(sid)) reads.get(sid).push(lp.name)
    for (const sid of lp.act) if (writes.has(sid)) writes.get(sid).push(lp.name)
  }

  const nodes = []
  for (const s of systems) {
    nodes.push({
      id: s.id, type: 'system', position: pos(s.id),
      data: {
        label: s.name, id: s.id, description: s.description,
        url: s.url, repository: s.repository, connector: s.connector,
        favicon: favicons ? serviceUrl(s.domain) : null,
        readBy: reads.get(s.id) || [], writtenBy: writes.get(s.id) || [],
      },
    })
  }
  for (const lp of loops) {
    const types = []
    for (const { type } of lp.typedTriggers) if (!types.includes(type)) types.push(type)
    nodes.push({
      id: lp.id, type: 'loop', position: pos(lp.id),
      data: {
        label: lp.name, id: lp.id, description: lp.description,
        emoji: types.map((t) => TRIGGER_EMOJI[t] || '').join(''),
        triggers: lp.triggers, instructions: lp.instructions, model: lp.model, tools: lp.tools,
        uses: lp.observe.map(sysName), writesBack: lp.act.map(sysName),
      },
    })
  }

  for (const d of plan.dummies) {
    nodes.push({
      id: d, type: 'dummy',
      position: { x: MARGIN + plan.colOf.get(d) * COL_W + NODE_W / 2, y: plan.yOf.get(d) * ROW + NODE_H / 2 },
      data: {},
    })
  }

  const handles = (a, b) =>
    plan.colOf.get(a) <= plan.colOf.get(b) ? ['rs', 'lt'] : ['ls', 'rt']

  const edges = []
  for (const [key, path] of plan.edgePaths) {
    const sep = key.indexOf(' ')
    const src = key.slice(0, sep), dst = key.slice(sep + 1)
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i], b = path[i + 1]
      const [sh, th] = handles(a, b)
      edges.push({
        id: `${src}->${dst}:${i}`, source: a, target: b,
        sourceHandle: sh, targetHandle: th,
        end: b === path[path.length - 1],
      })
    }
  }

  return { name: arch.name, id: arch.id, accent: ACCENT, edge: EDGE, nodes, edges }
}
