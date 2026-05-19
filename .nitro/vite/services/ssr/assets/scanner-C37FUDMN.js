import { t as Link } from "./link-otdsrsga.js";
import { u as require_jsx_runtime } from "../server.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-D8G3bgI_.js";
import { o as useScanner, t as Badge } from "./badge-oCV_PIaB.js";
import { t as createLucideIcon } from "./createLucideIcon-dldC5WHh.js";
import { t as LoaderCircle } from "./loader-circle-1OEJLZNt.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-w1kMDxub.js";
/**
* @license lucide-react v0.545.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpDown = createLucideIcon("arrow-up-down", [
	["path", {
		d: "m21 16-4 4-4-4",
		key: "f6ql7i"
	}],
	["path", {
		d: "M17 20V4",
		key: "1ejh1v"
	}],
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}]
]);
//#endregion
//#region src/routes/scanner.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function Scanner() {
	const { data: symbols, isLoading } = useScanner();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight",
				children: "Scanner"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [symbols?.length ?? 0, " symbols"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Watchlist" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Symbol" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableHead, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "mr-1 inline h-3 w-3" }), "Price"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "24h Vol" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Trend" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Score" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Signal" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: symbols?.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/chart/$symbol",
				params: { symbol: s.symbol.replace("USDT", "") },
				className: "font-medium text-primary no-underline hover:underline",
				children: s.symbol.replace("USDT", "")
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "font-mono",
				children: ["$", s.price.toFixed(s.price < 1 ? 6 : 2)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "font-mono",
				children: [
					"$",
					(s.volume24h / 1e6).toFixed(1),
					"M"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.trend === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "green",
				children: "Bull"
			}) : s.trend === -1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "red",
				children: "Bear"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "secondary",
				children: "—"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-mono",
				children: s.score !== null ? s.score.toFixed(2) : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.score !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: s.score >= 0 ? "green" : "red",
				children: s.score >= 0 ? "BUY" : "SELL"
			}) : s.rejectReason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: s.rejectReason
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: "—"
			}) })
		] }, s.symbol)) })] }) })] })]
	});
}
//#endregion
export { Scanner as component };
