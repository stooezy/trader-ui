import { u as require_jsx_runtime } from "../server.js";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-D8G3bgI_.js";
import { t as History } from "./history-CHEGXYWv.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-w1kMDxub.js";
//#region src/routes/trades.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function Trades() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight",
				children: "Trade Log"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Historical Trades" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Symbol" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Direction" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Entry" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Exit" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Size" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "PnL" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 7,
			className: "py-12 text-center text-muted-foreground",
			children: "No trades yet — trade history API endpoint is coming soon"
		}) }) })] }) })] })]
	});
}
//#endregion
export { Trades as component };
