import { useState } from 'react'
import { LayoutDashboard, MessageSquare, Sparkles, Users, UserPlus, UserCog, Settings, Menu, X, ArrowUpRight } from 'lucide-react'
import StatsCards from './components/StatsCards.jsx'
import ChannelDistribution from './components/ChannelDistribution.jsx'
import MessagesByDay from './components/MessagesByDay.jsx'
import QuickSummary from './components/QuickSummary.jsx'
import ClassifiedPage, { ClassifiedTable } from './Classified.jsx'
import AgentsPage from './Agents.jsx'
import ChatPage from './Chat.jsx'
import SettingsPage from './Settings.jsx'
import { initialMessages } from './data.js'

const navigation = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'messages', label: 'Mensajes', icon: MessageSquare, disabled: true },
  { key: 'classified', label: 'Clasificados', icon: Sparkles },
  { key: 'users', label: 'Usuarios', icon: Users, disabled: true },
  { key: 'register', label: 'Registro de Usuarios', icon: UserPlus, disabled: true },
  { key: 'agents', label: 'Agentes', icon: UserCog },
  { key: 'config', label: 'Configuración', icon: Settings },
]

const titles = {
  dashboard: ['Dashboard', 'Resumen de actividad y mensajes'],
  classified: ['Mensajes Clasificados', 'Historial de mensajes e incidentes analizados'],
  agents: ['Agentes', 'Gestión de agentes'],
  chat: ['Conversación', 'Intercambio ficticio con un cliente'],
  config: ['Configuración', 'Configuración del sistema'],
}

function dateKey(value) {
  const d = new Date(value)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function Dashboard({ messages, onOpenChat, onUpdate, onViewAll }) {
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1)
  const before = new Date(); before.setDate(before.getDate() - 2)
  const countFor = (items, date) => items.filter((item) => dateKey(item.fecha) === dateKey(date)).length
  const stats = {
    total: { value: messages.length, prev: countFor(messages, yesterday), prev2: countFor(messages, before) },
    urgentes: { value: messages.filter((m) => m.prioridad === 'Alta').length, prev: countFor(messages.filter((m) => m.prioridad === 'Alta'), yesterday), prev2: countFor(messages.filter((m) => m.prioridad === 'Alta'), before) },
    pendientes: { value: messages.filter((m) => m.estado === 0).length, prev: countFor(messages.filter((m) => m.estado === 0), yesterday), prev2: countFor(messages.filter((m) => m.estado === 0), before) },
  }
  const mensajesPorCanal = { Telegram: messages.filter((m) => m.canal === 'Telegram').length, Gmail: messages.filter((m) => m.canal === 'Gmail').length }
  const porDia = Object.entries(messages.reduce((days, m) => { const key = dateKey(m.fecha); days[key] = (days[key] || 0) + 1; return days }, {})).map(([fecha, total]) => ({ fecha, total }))
  const resolved = messages.filter((m) => m.estado === 2 && m.resolutionMinutes)
  const resumenRapido = { tiempoRespuesta: resolved.length ? Math.round(resolved.reduce((sum, m) => sum + m.resolutionMinutes, 0) / resolved.length) : null, sinAsignar: messages.filter((m) => !m.agenteId).length, actividadHoy: countFor(messages, new Date()) }

  return <div className="dashboard-view">
    <div className="dashboard-intro"><div><h2>Todo el movimiento, en una vista.</h2><p>Correo y Telegram reunidos, clasificados y listos para revisar.</p></div><span className="dashboard-intro-mark" aria-hidden="true"><span /><span /><span /></span></div>
    <StatsCards stats={stats} />
    <div className="feed-panel">
      <div className="feed-heading"><div><h2>Mensajes clasificados</h2><p>Una muestra de consultas de ambos canales</p></div><button type="button" onClick={onViewAll}>Ver todos <ArrowUpRight size={17} /></button></div>
      <ClassifiedTable messages={messages} onOpenChat={onOpenChat} onUpdate={onUpdate} compact />
    </div>
    <div className="insights-grid"><ChannelDistribution mensajesPorCanal={mensajesPorCanal} /><MessagesByDay mensajesPorDia={porDia} /><QuickSummary resumenRapido={resumenRapido} /></div>
  </div>
}

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [previousPage, setPreviousPage] = useState('classified')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [selectedId, setSelectedId] = useState(1)
  const [toast, setToast] = useState('')
  const selected = messages.find((m) => m.id === selectedId) || messages[0]

  function navigate(next) { setPage(next); setSidebarOpen(false) }
  function openChat(message) { setSelectedId(message.id); setPreviousPage(page); navigate('chat') }
  function updateMessage(id, patch) {
    setMessages((current) => current.map((m) => m.id === id ? { ...m, ...patch } : m))
    setToast('Cambios guardados solo en esta demo')
    window.setTimeout(() => setToast(''), 2500)
  }

  return <div className="app-shell flex h-screen overflow-hidden bg-gray-50">
    {sidebarOpen && <button className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Cerrar menú" />}
    <aside className={`sidebar fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-gray-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
        <button className="flex items-center gap-2 text-primary font-bold text-lg tracking-tight" onClick={() => navigate('dashboard')} aria-label="Ir al dashboard"><img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-8 w-8 object-contain" /> One Thread</button>
        <button className="rounded-sm p-1 text-gray-500 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Cerrar menú"><X size={20} /></button>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="Navegación principal">
        {navigation.map(({ key, label, icon: Icon, disabled }) => <button key={key} type="button" disabled={disabled} onClick={() => navigate(key)} aria-current={page === key ? 'page' : undefined} title={disabled ? 'Fuera del alcance de esta demo' : undefined} className={`flex w-full items-center gap-3 rounded-sm border-l-2 px-4 py-2 text-left text-sm font-medium transition-colors ${page === key ? 'border-primary bg-primary-light text-primary' : disabled ? 'cursor-not-allowed border-transparent text-gray-400 opacity-60' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}><Icon size={20} /><span className="flex-1">{label}</span>{disabled && <span className="text-[9px] font-normal">No disponible</span>}</button>)}
      </nav>
      <div className="border-t border-gray-200 px-4 py-4 space-y-3"><a href="/#proyectos" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"><ArrowUpRight size={16} /> Volver al portfolio</a><p className="text-xs leading-5 text-gray-400">Proyecto académico en equipo</p></div>
    </aside>
    <div className="flex min-w-0 flex-1 flex-col lg:ml-0">
      <header className="topbar flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6"><div className="flex items-center gap-4"><button className="rounded-sm p-1 text-gray-500 hover:bg-gray-50 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Abrir menú"><Menu size={24} /></button><div><h1 className="text-lg font-bold leading-tight text-gray-900">{titles[page][0]}</h1><p className="text-sm text-gray-500">{titles[page][1]}</p></div></div><div className="flex items-center gap-3 rounded-md px-2 py-1"><span className="hidden text-sm font-medium text-gray-700 sm:block">Cuenta demo</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary">CD</span></div></header>
      <main className="app-main flex-1 overflow-y-auto p-4 lg:p-6"><div className="demo-note mb-4 flex items-start gap-2 rounded-md border border-primary/20 bg-primary-light px-3 py-2 text-xs text-primary" role="note"><span aria-hidden="true">ⓘ</span><span>Demo con datos ficticios. No hay conexiones ni clasificación por IA en tiempo real</span></div>
        {page === 'dashboard' && <Dashboard messages={messages} onOpenChat={openChat} onUpdate={updateMessage} onViewAll={() => navigate('classified')} />}
        {page === 'classified' && <ClassifiedPage messages={messages} onOpenChat={openChat} onUpdate={updateMessage} />}
        {page === 'agents' && <AgentsPage messages={messages} />}
        {page === 'chat' && <ChatPage message={selected} onBack={() => navigate(previousPage)} />}
        {page === 'config' && <SettingsPage />}
      </main>
    </div>
    {toast && <div className="fixed bottom-5 right-5 z-[80] rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 shadow-md" role="status">{toast}</div>}
  </div>
}

