import type { Position, Candle, Indicator, ScannerSymbol } from "#/lib/types"

const API_BASE = "https://api.trader.dymple.net"

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`)
  return res.json()
}

export function fetchPositions(): Promise<Position[]> {
  return fetchJson("/api/positions")
}

export function fetchAccount(): Promise<{ equity: number; dayPnl: number }> {
  return fetchJson("/api/account")
}

export function fetchCandles(symbol: string, tf: string, limit = 200): Promise<Candle[]> {
  return fetchJson(`/api/candles/${symbol}?tf=${tf}&limit=${limit}`)
}

export function fetchIndicators(symbol: string, tf: string, limit = 200): Promise<Indicator[]> {
  return fetchJson(`/api/indicators/${symbol}?tf=${tf}&limit=${limit}`)
}

export function fetchScanner(): Promise<ScannerSymbol[]> {
  return fetchJson("/api/scanner")
}
