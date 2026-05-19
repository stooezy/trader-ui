import { useQuery } from "@tanstack/react-query"
import { fetchPositions, fetchAccount, fetchCandles, fetchIndicators, fetchScanner, fetchTrades } from "#/lib/api"

export function usePositions() {
  return useQuery({
    queryKey: ["positions"],
    queryFn: fetchPositions,
    refetchInterval: 30_000,
  })
}

export function useAccount() {
  return useQuery({
    queryKey: ["account"],
    queryFn: fetchAccount,
    refetchInterval: 30_000,
  })
}

export function useCandles(symbol: string, tf: string, limit = 200) {
  return useQuery({
    queryKey: ["candles", symbol, tf, limit],
    queryFn: () => fetchCandles(symbol, tf, limit),
    refetchInterval: 60_000,
    enabled: !!symbol,
  })
}

export function useIndicators(symbol: string, tf: string, limit = 200) {
  return useQuery({
    queryKey: ["indicators", symbol, tf, limit],
    queryFn: () => fetchIndicators(symbol, tf, limit),
    refetchInterval: 60_000,
    enabled: !!symbol,
  })
}

export function useScanner() {
  return useQuery({
    queryKey: ["scanner"],
    queryFn: fetchScanner,
    refetchInterval: 30_000,
  })
}

export function useTrades(mode = "dry_run", limit = 50) {
  return useQuery({
    queryKey: ["trades", mode, limit],
    queryFn: () => fetchTrades(mode, limit),
    refetchInterval: 30_000,
  })
}
