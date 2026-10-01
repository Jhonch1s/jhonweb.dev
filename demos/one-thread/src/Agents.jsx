import { useState } from 'react'
import { BarChart3, ClipboardList, MessageSquare, TrendingUp, CalendarDays, ShieldCheck, Clock, RefreshCw, CheckCircle2, Trash2, X, UserPlus } from 'lucide-react'
import { agents, comments } from './data.js'

const states = ['Pendiente', 'En proceso', 'Resuelto', 'Eliminado']
const stateColors = ['bg-primary', 'bg-warning', 'bg-success', 'bg-danger']
const priorities = ['Alta', 'Media', 'Baja']
const priorityColors = ['bg-danger', 'bg-warning', 'bg-gray-300']

function Distribution({ label, count, total, color }) {
  const pct = total ? Math.round(count / total * 100) : 0
  return <div className="space-y-1"><div className="flex items-center justify-between text-sm"><span className="font-medium text-gray-700">{label}</span><span className="text-gray-500">{count} ({pct}%)</span></div><div className="h-2 overflow-hidden rounded-full bg-gray-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} /></div></div>
}

function MiniCard({ icon: Icon, value, label, color = 'text-primary', bg = 'bg-primary-light' }) {
  return <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-white p-3 shadow-sm"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${bg}`}><Icon size={18} className={color} /></div><div><p className="text-xl font-bold text-gray-900">{value}</p><p className="text-xs text-gray-500">{label}</p></div></div>
}

function AgentMessages({ assigned }) {
  if (!assigned.length) return <p className="py-12 text-center text-sm text-gray-400">Este agente no tiene mensajes asignados</p>
  return <div className="overflow-x-auto rounded-md border border-gray-200"><table className="w-full min-w-[650px] text-left"><thead className="bg-gray-50 text-xs font-semibold text-gray-600"><tr>{['Canal', 'Remitente', 'Resumen', 'Prioridad', 'Estado', 'Fecha'].map((heading) => <th key={heading} className="px-4 py-3">{heading}</th>)}</tr></thead><tbody className="divide-y divide-gray-100 text-sm text-gray-700">{assigned.map((m) => <tr key={m.id} className="hover:bg-gray-50"><td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-xs ${m.canal === 'Telegram' ? 'badge-channel-telegram' : 'badge-channel-email'}`}>{m.canal}</span></td><td className="px-4 py-3">{m.nombre}</td><td className="max-w-xs truncate px-4 py-3">{m.resumen}</td><td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-xs badge-priority-${m.prioridad.toLowerCase()}`}>{m.prioridad}</span></td><td className="px-4 py-3">{states[m.estado]}</td><td className="px-4 py-3 text-xs text-gray-500">{new Date(m.fecha).toLocaleDateString('es-UY')}</td></tr>)}</tbody></table></div>
}

function AgentMetrics({ assigned }) {
  const avg = assigned.length ? Math.round(assigned.reduce((sum, m) => sum + m.confianza, 0) / assigned.length * 100) : 0
  return <div className="space-y-6"><div className="grid grid-cols-1 gap-3 sm:grid-cols-3"><MiniCard icon={TrendingUp} value={assigned.length} label="Total asignados" /><MiniCard icon={CalendarDays} value={(assigned.length / 7).toFixed(1)} label="Promedio por día" color="text-warning" bg="bg-amber-100" /><MiniCard icon={ShieldCheck} value={`${avg}%`} label="Confianza promedio" color="text-success" bg="bg-emerald-100" /></div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2"><div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm"><h4 className="mb-3 text-sm font-semibold text-gray-900">Por prioridad</h4><div className="space-y-3">{priorities.map((p, i) => <Distribution key={p} label={p} count={assigned.filter((m) => m.prioridad === p).length} total={assigned.length} color={priorityColors[i]} />)}</div></div><div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm"><h4 className="mb-3 text-sm font-semibold text-gray-900">Por estado</h4><div className="space-y-3">{states.map((s, i) => <Distribution key={s} label={s} count={assigned.filter((m) => m.estado === i).length} total={assigned.length} color={stateColors[i]} />)}</div></div></div>
    <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm"><h4 className="mb-3 text-sm font-semibold text-gray-900">Actividad últimos 7 días</h4><div className="space-y-2">{Array.from({ length: 7 }, (_, index) => { const d = new Date(); d.setDate(d.getDate() - index); const count = assigned.filter((m) => new Date(m.fecha).toDateString() === d.toDateString()).length; return <div key={index} className="flex justify-between text-sm"><span className="text-gray-600">{d.toLocaleDateString('es-UY', { weekday: 'short', day: 'numeric', month: 'short' })}</span><span className="font-medium text-gray-900">{count} mensajes</span></div> })}</div></div>
  </div>
}

function AgentWorkload({ assigned }) {
  const icons = [Clock, RefreshCw, CheckCircle2, Trash2]
  const borders = ['border-l-primary', 'border-l-warning', 'border-l-success', 'border-l-danger']
  const backgrounds = ['bg-primary-light', 'bg-amber-100', 'bg-emerald-100', 'bg-red-100']
  return <div className="space-y-6"><div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">{states.map((label, index) => { const Icon = icons[index]; return <div key={label} className={`flex items-center gap-3 rounded-md border border-l-4 border-gray-200 ${borders[index]} bg-white p-4 shadow-sm`}><div className={`flex h-10 w-10 items-center justify-center rounded-md ${backgrounds[index]}`}><Icon size={20} className="text-primary" /></div><div><p className="text-2xl font-bold text-gray-900">{assigned.filter((m) => m.estado === index).length}</p><p className="text-xs text-gray-500">{label}</p></div></div> })}</div><div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm"><h4 className="mb-3 text-sm font-semibold text-gray-900">Pendientes por prioridad</h4><div className="grid grid-cols-3 gap-4">{priorities.map((p) => <div key={p} className="text-center"><p className="text-2xl font-bold text-gray-900">{assigned.filter((m) => m.estado === 0 && m.prioridad === p).length}</p><p className="text-xs text-gray-500">{p}</p></div>)}</div></div></div>
}

function AgentComments({ agent }) {
  const list = comments.filter((c) => c.agentId === agent.id)
  return <div className="overflow-x-auto rounded-md border border-gray-200"><table className="w-full min-w-[580px] text-left"><thead className="bg-gray-50 text-xs font-semibold text-gray-600"><tr>{['Canal', 'Remitente', 'Resumen', 'Puntaje', 'Fecha'].map((heading) => <th key={heading} className="px-4 py-3">{heading}</th>)}</tr></thead><tbody className="divide-y divide-gray-100 text-sm text-gray-700">{list.map((comment) => <tr key={comment.name}><td className="px-4 py-3">{comment.channel}</td><td className="px-4 py-3">{comment.name}</td><td className="px-4 py-3">{comment.text}</td><td className="px-4 py-3 text-amber-600">{'★'.repeat(comment.score)}<span className="sr-only">{comment.score} de 5</span></td><td className="px-4 py-3 text-xs text-gray-500">{new Date(comment.date).toLocaleDateString('es-UY')}</td></tr>)}</tbody></table></div>
}

export default function AgentsPage({ messages }) {
  const [selectedId, setSelectedId] = useState(agents[0].id)
  const [panel, setPanel] = useState('metricas')
  const selected = agents.find((agent) => agent.id === selectedId)
  const assigned = messages.filter((m) => m.agenteId === selectedId)
  const panels = [{ key: 'mensajes', label: 'Mensajes', icon: MessageSquare }, { key: 'metricas', label: 'Métricas', icon: BarChart3 }, { key: 'carga', label: 'Carga', icon: ClipboardList }]
  return <div className="agents-page"><div className="mb-6 flex items-center justify-between"><h2 className="text-sm font-semibold text-gray-900">Agentes ({agents.length})</h2><button disabled title="Creación no disponible en la demo" className="inline-flex h-8 cursor-not-allowed items-center rounded-md bg-primary px-3 text-sm text-white opacity-50"><UserPlus size={16} className="mr-2" /> Nuevo agente</button></div>
    <div className="mb-6 flex max-w-full gap-4 overflow-x-auto pb-2">{agents.map((agent) => <div key={agent.id} className={`flex min-w-[280px] shrink-0 flex-col items-center gap-3 rounded-md border border-t-4 bg-white p-5 shadow-sm ${selectedId === agent.id ? 'border-primary border-t-primary bg-primary-light' : 'border-gray-200 border-t-primary'}`}><div className="flex w-full justify-start"><span className="px-1 text-gray-400">•••</span></div><div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">{agent.nombre.split(' ').map((part) => part[0]).join('')}</div><div className="text-center"><p className="text-sm font-semibold text-gray-900">{agent.nombre}</p><button onClick={() => { setSelectedId(agent.id); setPanel('comentarios') }} className={`rounded-sm px-2 py-1 text-xs ${selectedId === agent.id && panel === 'comentarios' ? 'bg-primary text-white' : 'text-amber-600 hover:bg-gray-100'}`} aria-label={`Ver comentarios de ${agent.nombre}`}>★ {agent.puntaje.toFixed(1)} / 5</button><p className="text-xs text-primary">{agent.email}</p></div><div className="flex gap-1">{panels.map(({ key, label, icon: Icon }) => <button key={key} onClick={() => { setSelectedId(agent.id); setPanel(key) }} className={`flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium ${selectedId === agent.id && panel === key ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}><Icon size={14} />{label}</button>)}</div></div>)}</div>
    <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm"><div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3"><div><h3 className="text-sm font-semibold text-gray-900">{selected.nombre}</h3><p className="text-xs text-gray-500">{{ mensajes: 'Mensajes asignados', metricas: 'Métricas de rendimiento', carga: 'Carga de trabajo actual', comentarios: 'Comentarios recibidos por clientes' }[panel]}</p></div><button onClick={() => setPanel('metricas')} className="rounded-sm p-1 text-gray-400 hover:text-gray-600" aria-label="Volver a métricas"><X size={16} /></button></div>{panel === 'mensajes' && <AgentMessages assigned={assigned} />}{panel === 'metricas' && <AgentMetrics assigned={assigned} />}{panel === 'carga' && <AgentWorkload assigned={assigned} />}{panel === 'comentarios' && <AgentComments agent={selected} />}</section>
  </div>
}

