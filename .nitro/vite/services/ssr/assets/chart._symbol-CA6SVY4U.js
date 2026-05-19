import { t as Route } from "./chart._symbol-CI1zZHzy.js";
import { u as require_jsx_runtime } from "../server.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-D8G3bgI_.js";
import { i as useIndicators, r as useCandles, t as Badge } from "./badge-oCV_PIaB.js";
import { t as LoaderCircle } from "./loader-circle-1OEJLZNt.js";
//#region src/routes/chart.$symbol.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function ChartPage() {
	const { symbol } = Route.useParams();
	const fullSymbol = `${symbol}USDT`;
	const { data: candles, isLoading } = useCandles(fullSymbol, "1h", 200);
	const { data: indicators } = useIndicators(fullSymbol, "1h", 200);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	const last = candles?.[candles.length - 1];
	const change = last && candles && candles.length > 1 ? (last.close - candles[candles.length - 2].close) / candles[candles.length - 2].close * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold tracking-tight",
						children: symbol
					}), last && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `text-lg font-semibold ${change >= 0 ? "text-green" : "text-red"}`,
						children: [
							"$",
							last.close.toFixed(last.close < 1 ? 6 : 2),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 text-sm",
								children: [
									"(",
									change >= 0 ? "+" : "",
									change.toFixed(2),
									"%)"
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "secondary",
					children: [candles?.length ?? 0, " candles"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: indicators && indicators.length > 0 && (() => {
					const i = indicators[indicators.length - 1];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xs text-muted-foreground",
								children: "RSI (14)"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-lg font-bold ${i.rsi14 && i.rsi14 >= 70 ? "text-red" : i.rsi14 && i.rsi14 <= 30 ? "text-green" : ""}`,
							children: i.rsi14?.toFixed(1) ?? "—"
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xs text-muted-foreground",
								children: "EMA (9/21)"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: ["9: $", i.ema9?.toFixed(last && last.close < 1 ? 6 : 2) ?? "—"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: ["21: $", i.ema21?.toFixed(last && last.close < 1 ? 6 : 2) ?? "—"]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xs text-muted-foreground",
								children: "ATR (14)"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							children: i.atr14 ? "$" + i.atr14.toFixed(last && last.close < 1 ? 6 : 2) : "—"
						}) })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							className: "pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-xs text-muted-foreground",
								children: "VWAP"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-lg font-bold",
							children: ["$", i.vwap?.toFixed(last && last.close < 1 ? 6 : 2) ?? "—"]
						}) })] })
					] });
				})()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Price Data (1h)" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-96 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-xs font-mono",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left p-2",
								children: "Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right p-2",
								children: "Open"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right p-2",
								children: "High"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right p-2",
								children: "Low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right p-2",
								children: "Close"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right p-2",
								children: "Vol"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: candles?.slice(-50).reverse().map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-muted-foreground",
								children: new Date(c.ts).toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: c.open.toFixed(last && last.close < 1 ? 6 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: c.high.toFixed(last && last.close < 1 ? 6 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right",
								children: c.low.toFixed(last && last.close < 1 ? 6 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `p-2 text-right font-semibold ${c.close >= c.open ? "text-green" : "text-red"}`,
								children: c.close.toFixed(last && last.close < 1 ? 6 : 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-2 text-right text-muted-foreground",
								children: c.volume.toFixed(0)
							})
						]
					}, c.ts)) })]
				})
			}) })] })
		]
	});
}
//#endregion
export { ChartPage as component };
