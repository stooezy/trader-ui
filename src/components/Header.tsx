import { Link } from '@tanstack/react-router'
import { Activity, BarChart3, Table2, History } from 'lucide-react'

const nav = [
  { to: '/', label: 'Dashboard', icon: Activity },
  { to: '/scanner', label: 'Scanner', icon: BarChart3 },
  { to: '/trades', label: 'Trades', icon: History },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary no-underline">
          <Activity className="h-5 w-5" />
          <span className="hidden sm:inline">Day Trader</span>
        </Link>
        <div className="flex items-center gap-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeProps={{ className: 'bg-accent text-accent-foreground' }}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
