import { categories } from './data.js'

export default function SettingsPage() {
  const cards = [
    { title: 'Categorías', description: 'Administrar categorías de mensajes', count: categories.length },
    { title: 'Tipos', description: 'Administrar tipos de mensajes', count: categories.reduce((total, category) => total + category.types.length, 0) },
  ]
  return <div className="settings-view grid grid-cols-1 gap-6 md:grid-cols-2">{cards.map((card) => <div key={card.title} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm"><div><h2 className="text-lg font-semibold text-gray-900">{card.title}</h2><p className="mt-1 text-gray-600">{card.description}</p><span className="mt-4 inline-block text-sm font-medium text-gray-400">Solo lectura en esta demo</span></div><div className="text-right"><span className="text-3xl font-bold text-primary">{card.count}</span><p className="text-xs text-gray-500">registros</p></div></div>)}</div>
}
