export interface Position {
  symbol: string
  side: "Buy" | "Sell"
  size: number
  avgPrice: number
  markPrice: number
  unrealisedPnl: string
  sl: number
}

export interface Signal {
  symbol: string
  direction: "LONG" | "SHORT"
  entryPrice: number
  sl: number
  tp: number
  score: number
  riskPct: number
}

export interface AccountSummary {
  equity: number
  freeBalance: number
  dayPnl: number
  totalTrades: number
  wins: number
  losses: number
}

export interface Candle {
  ts: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface Indicator {
  ts: number
  ema9: number | null
  ema21: number | null
  ema50: number | null
  ema200: number | null
  rsi14: number | null
  atr14: number | null
  vwap: number | null
  volume_sma20: number | null
  trend: number | null
}

export interface ScannerSymbol {
  symbol: string
  price: number
  volume24h: number
  trend: number | null
  score: number | null
  rejectReason: string | null
}

export interface Trade {
  id: number
  symbol: string
  direction: string
  entry_ts: number
  exit_ts: number | null
  entry_price: number
  exit_price: number | null
  size: number
  pnl: number | null
  pnl_pct: number | null
  max_favorable_pct: number | null
  max_adverse_pct: number | null
  entry_reason: string
  exit_reason: string | null
  mode: string
  created_at: number
}
