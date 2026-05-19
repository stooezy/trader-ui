import { createFileRoute } from '@tanstack/react-router'
import { useTrades } from '#/hooks/use-trader'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { History, Loader2, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export const Route = createFileRoute('/trades')({ component: Trades })

function formatTS(ts: number) {
  return new Date(ts * 1000).toLocaleString()
}

function Trades() {
  const { data: trades, isLoading, error } = useTrades('dry_run', 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <History className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Trade Log</h1>
        {trades && (
          <span className="text-sm text-muted-foreground">({trades.length} trades)</span>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historical Trades</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="rounded-lg border border-red/20 bg-red/5 p-4 text-sm text-red">
              Failed to load trades: {(error as Error).message}
            </div>
          ) : !trades || trades.length === 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Direction</TableHead>
                  <TableHead>Entry</TableHead>
                  <TableHead>Exit</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>PnL</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={7} className="py-12 text-center text-muted-foreground">
                    No closed trades yet
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <div className="max-h-[600px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Direction</TableHead>
                    <TableHead>Entry</TableHead>
                    <TableHead>Exit</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>PnL</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trades.map((t) => {
                    const isWin = t.pnl != null && t.pnl >= 0
                    return (
                      <TableRow key={t.id}>
                        <TableCell className="font-medium">{t.symbol.replace('USDT', '')}</TableCell>
                        <TableCell>
                          <Badge variant={t.direction === 'LONG' ? 'green' : 'red'}>
                            {t.direction}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-xs">${t.entry_price.toFixed(6)}</TableCell>
                        <TableCell className="font-mono text-xs">
                          {t.exit_price != null ? `$${t.exit_price.toFixed(6)}` : '—'}
                        </TableCell>
                        <TableCell className="font-mono text-xs">{t.size.toFixed(2)}</TableCell>
                        <TableCell>
                          {t.pnl != null ? (
                            <div className={`flex items-center gap-1 text-sm font-semibold ${isWin ? 'text-green' : 'text-red'}`}>
                              {isWin ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                              ${t.pnl.toFixed(2)}
                              {t.pnl_pct != null && (
                                <span className="text-xs text-muted-foreground">
                                  ({t.pnl_pct >= 0 ? '+' : ''}{t.pnl_pct.toFixed(2)}%)
                                </span>
                              )}
                            </div>
                          ) : '—'}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {formatTS(t.entry_ts)}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
