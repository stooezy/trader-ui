import { Activity } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4">
        <Activity className="h-3 w-3" />
        Day Trader — data refreshes every 30s
      </div>
    </footer>
  )
}
