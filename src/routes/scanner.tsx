import { createFileRoute, Link } from '@tanstack/react-router'
import { useScanner } from '#/hooks/use-trader'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table'
import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { ArrowUpDown, Loader2 } from 'lucide-react'

export const Route = createFileRoute('/scanner')({ component: Scanner })

function Scanner() {
  const { data: symbols, isLoading } = useScanner()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Scanner</h1>
        <p className="text-sm text-muted-foreground">{symbols?.length ?? 0} symbols</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Watchlist</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead><ArrowUpDown className="mr-1 inline h-3 w-3" />Price</TableHead>
                <TableHead>24h Vol</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Signal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {symbols?.map((s) => (
                <TableRow key={s.symbol}>
                  <TableCell>
                    <Link
                      to="/chart/$symbol"
                      params={{ symbol: s.symbol.replace('USDT', '') }}
                      className="font-medium text-primary no-underline hover:underline"
                    >
                      {s.symbol.replace('USDT', '')}
                    </Link>
                  </TableCell>
                  <TableCell className="font-mono">${s.price.toFixed(s.price < 1 ? 6 : 2)}</TableCell>
                  <TableCell className="font-mono">${(s.volume24h / 1_000_000).toFixed(1)}M</TableCell>
                  <TableCell>
                    {s.trend === 1 ? (
                      <Badge variant="green">Bull</Badge>
                    ) : s.trend === -1 ? (
                      <Badge variant="red">Bear</Badge>
                    ) : (
                      <Badge variant="secondary">—</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-mono">
                    {s.score != null ? s.score.toFixed(2) : '—'}
                  </TableCell>
                  <TableCell>
                    {s.score != null ? (
                      <Badge variant={s.score >= 0 ? 'green' : 'red'}>
                        {s.score >= 0 ? 'BUY' : 'SELL'}
                      </Badge>
                    ) : s.rejectReason ? (
                      <span className="text-xs text-muted-foreground">{s.rejectReason}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
