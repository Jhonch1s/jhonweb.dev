import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const statConfig = [
    {
        key: 'total',
        label: 'Mensajes totales',
        tone: 'total',
    },
    {
        key: 'urgentes',
        label: 'Urgentes',
        tone: 'urgent',
    },
    {
        key: 'pendientes',
        label: 'Pendientes',
        tone: 'pending',
    },

];

function DeltaBadge({ prev, prev2 }) {
    if (prev === 0 && prev2 === 0) {
        return (
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <Minus size={12} />
                Sin actividad reciente
            </span>
        );
    }

    if (prev2 === 0 && prev > 0) {
        return (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <TrendingUp size={12} />
                +{prev} ayer
            </span>
        );
    }

    const pct = Math.round(((prev - prev2) / prev2) * 100);
    const isUp = pct >= 0;

    return (
        <span className={`inline-flex items-center gap-1 text-xs font-medium ${isUp ? 'text-emerald-600' : 'text-danger'}`}>
            {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            +{prev} ayer ({isUp ? '+' : ''}{pct}%)
        </span>
    );
}

export default function StatsCards({ stats }) {
    return <div className="stat-strip">{statConfig.map(({ key, label, tone }) => {
        const { value, prev, prev2 } = stats[key] ?? { value: 0, prev: 0, prev2: 0 };
        return (
            <div key={key} className={`stat-item stat-${tone}`}>
                <div className="min-w-0">
                    <p className="stat-label">{label}</p>
                    <p className="stat-value">{value}</p>
                    <DeltaBadge prev={prev} prev2={prev2} />
                </div>
            </div>
        );
    })}</div>;
}
