import { useEffect, useRef, useState } from 'react'
import { Edit2, Eye, Filter, MessageSquare, Sparkles, Trash2, X } from 'lucide-react'
import { categories } from './data.js'

const statusLabel = ['Pendiente', 'En proceso', 'Resuelto']
const statusClass = ['badge-status-pendiente', 'badge-status-proceso', 'badge-status-resuelto']

function Modal({ title, onClose, children }) {
  const closeRef = useRef(null)
  useEffect(() => { closeRef.current?.focus() }, [])
  return <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div role="dialog" aria-modal="true" aria-label={title} onKeyDown={(event) => { if (event.key === 'Escape') onClose() }} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold text-gray-900">{title}</h2><button ref={closeRef} type="button" onClick={onClose} className="rounded-sm p-1 text-gray-500 hover:bg-gray-100" aria-label="Cerrar"><X size={20} /></button></div>{children}
    </div>
  </div>
}

function OriginalModal({ message, onClose }) {
  return <Modal title="Mensaje Original" onClose={onClose}><div className="space-y-4"><div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 text-sm"><div><span className="text-xs text-gray-400">Cliente</span><p className="font-medium text-gray-800">{message.nombre}</p></div><div><span className="text-xs text-gray-400">Canal</span><p className="font-medium text-gray-800">{message.canal}</p></div><div><span className="text-xs text-gray-400">Fecha</span><p className="font-medium text-gray-800">{new Date(message.fecha).toLocaleString('es-UY')}</p></div></div><div><h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">Contenido</h3><p className="rounded-lg border border-gray-200 bg-gray-50 p-4 leading-relaxed text-gray-800">{message.contenido}</p></div></div></Modal>
}

function EditModal({ message, onClose, onUpdate }) {
  const [resumen, setResumen] = useState(message.resumen)
  const [prioridad, setPrioridad] = useState(message.prioridad)
  const [estado, setEstado] = useState(message.estado)
  const [categoria, setCategoria] = useState(message.categoria)
  function save(event) { event.preventDefault(); onUpdate(message.id, { resumen, prioridad, estado: Number(estado), categoria }); onClose() }
  return <Modal title="Editar Mensaje Clasificado" onClose={onClose}><form onSubmit={save} className="space-y-4">
    <label className="block text-sm font-medium text-gray-700">Resumen<textarea value={resumen} onChange={(e) => setResumen(e.target.value)} rows={3} required className="mt-1 w-full rounded-sm border border-gray-200 px-3 py-2 text-sm" /></label>
    <label className="block text-sm font-medium text-gray-700">Prioridad<select value={prioridad} onChange={(e) => setPrioridad(e.target.value)} className="mt-1 w-full rounded-sm border border-gray-200 px-3 py-2 text-sm"><option>Baja</option><option>Media</option><option>Alta</option></select></label>
    <label className="block text-sm font-medium text-gray-700">Estado<select value={estado} onChange={(e) => setEstado(e.target.value)} className="mt-1 w-full rounded-sm border border-gray-200 px-3 py-2 text-sm">{statusLabel.map((label, index) => <option value={index} key={label}>{label}</option>)}</select></label>
    <label className="block text-sm font-medium text-gray-700">Categoría / Área<select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="mt-1 w-full rounded-sm border border-gray-200 px-3 py-2 text-sm">{categories.map((cat) => <option key={cat.name}>{cat.name}</option>)}</select></label>
    <div className="flex justify-end gap-3 pt-3"><button type="button" onClick={onClose} className="rounded-md border border-gray-200 px-4 py-2 text-sm">Cancelar</button><button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover">Guardar cambios</button></div>
  </form></Modal>
}

export function ClassifiedTable({ messages, onOpenChat, onUpdate, compact = false }) {
  const [original, setOriginal] = useState(null)
  const [editing, setEditing] = useState(null)
  const visibleMessages = compact ? messages.slice(0, 4) : messages
  return <>
    <div className="classified-table overflow-hidden rounded-md border-x border-b border-gray-200 border-t-4 border-t-green-600 bg-white shadow-sm">
      <div className="overflow-x-auto"><table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="border-b border-gray-200 bg-primary text-sm font-semibold tracking-wider text-white"><th className="px-6 py-3">Cliente / Canal</th><th className="px-6 py-3">Resumen ilustrativo</th><th className="px-6 py-3">Mensaje Original</th><th className="px-6 py-3">Categorías / Áreas</th><th className="px-6 py-3 text-center">Prioridad</th><th className="px-6 py-3 text-center">Estado</th><th className="px-6 py-3 text-right">Acciones</th></tr></thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">{visibleMessages.length ? visibleMessages.map((m) => <tr key={m.id} className="cursor-pointer transition-colors hover:bg-gray-50" onClick={() => onOpenChat(m)}><td className="px-6 py-4"><strong className="font-semibold text-gray-900">{m.nombre}</strong><br /><span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-xs font-semibold uppercase ${m.canal === 'Telegram' ? 'badge-channel-telegram' : 'badge-channel-email'}`}>{m.canal}</span></td><td className="max-w-xs px-6 py-4"><div className="line-clamp-2 font-medium text-gray-800">{m.resumen}</div><div className="mt-1 flex gap-1.5 text-xs text-gray-400">Confianza simulada: <span className="font-mono font-semibold text-gray-500">{Math.round(m.confianza * 100)}%</span></div></td><td className="px-6 py-4"><button type="button" onClick={(e) => { e.stopPropagation(); setOriginal(m) }} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover"><Eye size={14} /> Ver original</button></td><td className="px-6 py-4"><span className="inline-flex rounded-full px-2 py-0.5 text-xs font-semibold badge-category-pill">{m.categoria}</span></td><td className="px-6 py-4 text-center"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold badge-priority-${m.prioridad.toLowerCase()}`}>{m.prioridad}</span></td><td className="px-6 py-4 text-center"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusClass[m.estado]}`}>{statusLabel[m.estado]}</span></td><td className="px-6 py-4 text-right"><div className="flex items-center justify-end gap-1"><button type="button" onClick={(e) => { e.stopPropagation(); onOpenChat(m) }} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-primary" aria-label={`Abrir chat con ${m.nombre}`}><MessageSquare size={18} /></button><button type="button" onClick={(e) => { e.stopPropagation(); setEditing(m) }} className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-warning" aria-label={`Editar mensaje de ${m.nombre}`}><Edit2 size={18} /></button><button type="button" disabled title="Eliminación no disponible en la demo" className="cursor-not-allowed rounded p-1 text-gray-300" aria-label="Eliminar no disponible"><Trash2 size={18} /></button></div></td></tr>) : <tr className="empty-row"><td colSpan="7" className="px-6 py-12 text-center text-sm text-gray-500">No se encontraron mensajes clasificados</td></tr>}</tbody></table></div>
      {!compact && messages.length > 0 && <div className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600">Página <strong className="text-gray-900">1</strong> de <strong className="text-gray-900">1</strong></div>}
    </div>
    {original && <OriginalModal message={original} onClose={() => setOriginal(null)} />}
    {editing && <EditModal key={editing.id} message={editing} onClose={() => setEditing(null)} onUpdate={onUpdate} />}
  </>
}

export default function ClassifiedPage({ messages, onOpenChat, onUpdate }) {
  const empty = { name: '', category: '', priority: '', status: '' }
  const [draft, setDraft] = useState(empty)
  const [filters, setFilters] = useState(empty)
  const filtered = messages.filter((m) => m.nombre.toLowerCase().includes(filters.name.toLowerCase()) && (!filters.category || m.categoria === filters.category) && (!filters.priority || m.prioridad === filters.priority) && (filters.status === '' || m.estado === Number(filters.status)))
  const change = (key, value) => setDraft((current) => ({ ...current, [key]: value }))
  return <div className="space-y-6"><div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white p-4 text-primary shadow-sm"><Sparkles size={20} /><span className="font-semibold text-gray-800">Total clasificados: {messages.length}</span></div>
    <form onSubmit={(e) => { e.preventDefault(); setFilters(draft) }} className="rounded-md border-x border-b border-gray-200 border-t-4 border-t-primary bg-white p-4 shadow-sm"><div className="mb-3 flex items-center gap-2 font-semibold text-gray-800"><Filter size={16} className="text-primary" /> Filtros de búsqueda</div><div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <label className="space-y-1 text-xs font-medium text-gray-600">Cliente que envió<input value={draft.name} onChange={(e) => change('name', e.target.value)} placeholder="Buscar por nombre..." className="w-full rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm" /></label>
      <label className="space-y-1 text-xs font-medium text-gray-600">Categoría / Área<select value={draft.category} onChange={(e) => change('category', e.target.value)} className="w-full rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm"><option value="">Todas las categorías</option>{categories.map((cat) => <option key={cat.name}>{cat.name}</option>)}</select></label>
      <label className="space-y-1 text-xs font-medium text-gray-600">Prioridad<select value={draft.priority} onChange={(e) => change('priority', e.target.value)} className="w-full rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm"><option value="">Todas las prioridades</option><option>Alta</option><option>Media</option><option>Baja</option></select></label>
      <label className="space-y-1 text-xs font-medium text-gray-600">Estado<select value={draft.status} onChange={(e) => change('status', e.target.value)} className="w-full rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm"><option value="">Todos los estados</option>{statusLabel.map((label, index) => <option value={index} key={label}>{label}</option>)}</select></label>
      <div className="flex gap-2"><button type="submit" className="h-9 flex-1 rounded-md bg-primary px-4 text-sm font-medium text-white hover:bg-primary-hover">Filtrar</button><button type="button" onClick={() => { setDraft(empty); setFilters(empty) }} className="inline-flex h-9 items-center gap-1 rounded-md border border-gray-200 px-3 text-sm text-gray-800 hover:bg-gray-50"><X size={14} /> Limpiar</button></div>
    </div></form><ClassifiedTable messages={filtered} onOpenChat={onOpenChat} onUpdate={onUpdate} /></div>
}
