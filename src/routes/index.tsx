import { createFileRoute } from '@tanstack/react-router'
import { usePositions, useAccount, useScanner } from '#/hooks/use-trader'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Activity } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Dashboard })

function Dashboard() {
  const { data: positions } = usePositions()
  const { data: account } = useAccount()
  const { data: scanner } = useScanner()

  const signals = scanner?.filter((s) => s.score != null) ?? []
  const filtered = scanner?.length ?? 0

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

      {/* Account + Position row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Equity</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${account?.equity.toFixed(2) ?? '—'}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily PnL</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${(account?.dayPnl ?? 0) >= 0 ? 'text-green' : 'text-red'}`}>
              {(account?.dayPnl ?? 0) >= 0 ? '+' : ''}${(account?.dayPnl ?? 0).toFixed(2)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Signals</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{signals.length}</div>
            <p className="text-xs text-muted-foreground">{filtered} symbols scanned</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Positions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          {!positions || positions.length === 0 ? (
            <p className="text-sm text-muted-foreground">No active positions</p>
          ) : (
            <div className="space-y-3">
              {positions.map((p) => {
                const pnl = parseFloat(p.unrealisedPnl)
                const pnlPct = ((p.markPrice - p.avgPrice) / p.avgPrice) * 100
                return (
                  <div key={p.symbol} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{p.symbol}</span>
                        <Badge variant={p.side === "Buy" ? "green" : "red"}>
                          {p.side === "Buy" ? "LONG" : "SHORT"}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Size: {p.size} · Entry: ${p.avgPrice.toFixed(6)}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 text-sm font-semibold ${pnl >= 0 ? 'text-green' : 'text-red'}`}>
                        {pnl >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                        {pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%
                      </div>
                      <p className="text-xs text-muted-foreground">SL: ${p.sl.toFixed(6)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Signals */}
      {signals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {signals.slice(0, 5).map((s) => (
                <div key={s.symbol} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{s.symbol}</span>
                    <Badge variant={s.direction === "LONG" ? "green" : "red"}>
                      {s.direction}
                    </Badge>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    Score: {s.score?.toFixed(2) ?? '—'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
