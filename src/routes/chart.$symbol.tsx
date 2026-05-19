import { createFileRoute } from '@tanstack/react-router'
import { useCandles, useIndicators } from '#/hooks/use-trader'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { Loader2 } from 'lucide-react'

export const Route = createFileRoute('/chart/$symbol')({
  component: ChartPage,
})

function ChartPage() {
  const { symbol } = Route.useParams()
  const fullSymbol = `${symbol}USDT`
  const { data: candles, isLoading } = useCandles(fullSymbol, '1h', 200)
  const { data: indicators } = useIndicators(fullSymbol, '1h', 200)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const last = candles?.[candles.length - 1]
  const change = last && candles && candles.length > 1
    ? ((last.close - candles[candles.length - 2].close) / candles[candles.length - 2].close * 100)
    : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight">{symbol}</h1>
          {last && (
            <div className={`text-lg font-semibold ${change >= 0 ? 'text-green' : 'text-red'}`}>
              ${last.close.toFixed(last.close < 1 ? 6 : 2)}
              <span className="ml-2 text-sm">({change >= 0 ? '+' : ''}{change.toFixed(2)}%)</span>
            </div>
          )}
        </div>
        <Badge variant="secondary">{candles?.length ?? 0} candles</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {indicators && indicators.length > 0 && (() => {
          const i = indicators[indicators.length - 1]
          return (
            <>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground">RSI (14)</CardTitle></CardHeader>
                <CardContent>
                  <span className={`text-lg font-bold ${i.rsi14 && i.rsi14 >= 70 ? 'text-red' : i.rsi14 && i.rsi14 <= 30 ? 'text-green' : ''}`}>
                    {i.rsi14?.toFixed(1) ?? '—'}
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground">EMA (9/21)</CardTitle></CardHeader>
                <CardContent className="space-y-1">
                  <div className="text-sm">9: ${i.ema9?.toFixed(last && last.close < 1 ? 6 : 2) ?? '—'}</div>
                  <div className="text-sm">21: ${i.ema21?.toFixed(last && last.close < 1 ? 6 : 2) ?? '—'}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground">ATR (14)</CardTitle></CardHeader>
                <CardContent>
                  <span className="text-lg font-bold">{i.atr14 ? '$' + i.atr14.toFixed(last && last.close < 1 ? 6 : 2) : '—'}</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-xs text-muted-foreground">VWAP</CardTitle></CardHeader>
                <CardContent>
                  <span className="text-lg font-bold">${i.vwap?.toFixed(last && last.close < 1 ? 6 : 2) ?? '—'}</span>
                </CardContent>
              </Card>
            </>
          )
        })()}
      </div>

      {/* Simple candle table — chart library comes later */}
      <Card>
        <CardHeader>
          <CardTitle>Price Data (1h)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="text-left p-2">Time</th>
                  <th className="text-right p-2">Open</th>
                  <th className="text-right p-2">High</th>
                  <th className="text-right p-2">Low</th>
                  <th className="text-right p-2">Close</th>
                  <th className="text-right p-2">Vol</th>
                </tr>
              </thead>
              <tbody>
                {candles?.slice(-50).reverse().map((c) => (
                  <tr key={c.ts} className="border-t border-border/50">
                    <td className="p-2 text-muted-foreground">{new Date(c.ts).toLocaleString()}</td>
                    <td className="p-2 text-right">{c.open.toFixed(last && last.close < 1 ? 6 : 2)}</td>
                    <td className="p-2 text-right">{c.high.toFixed(last && last.close < 1 ? 6 : 2)}</td>
                    <td className="p-2 text-right">{c.low.toFixed(last && last.close < 1 ? 6 : 2)}</td>
                    <td className={`p-2 text-right font-semibold ${c.close >= c.open ? 'text-green' : 'text-red'}`}>
                      {c.close.toFixed(last && last.close < 1 ? 6 : 2)}
                    </td>
                    <td className="p-2 text-right text-muted-foreground">{c.volume.toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
