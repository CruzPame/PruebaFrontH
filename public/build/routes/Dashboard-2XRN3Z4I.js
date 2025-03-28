import {
  Navbar,
  Sidebar,
  removeToken
} from "/build/_shared/chunk-A5HM536X.js";
import {
  ChevronDown,
  ChevronUp,
  Search
} from "/build/_shared/chunk-CM7JF4QN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useNavigate
} from "/build/_shared/chunk-55TP7YLU.js";
import {
  createHotContext
} from "/build/_shared/chunk-WZGERFX5.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/Dashboard.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\Dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\Dashboard.tsx"
  );
  import.meta.hot.lastModified = "1741906251834.7573";
}
function DashboardLayout() {
  _s();
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = (0, import_react.useState)(true);
  const [search, setSearch] = (0, import_react.useState)("");
  const [sortAsc, setSortAsc] = (0, import_react.useState)(true);
  const pageTitle = "Dashboard";
  const [tickets, setTickets] = (0, import_react.useState)([{
    id: 1,
    problema: "No prende",
    cliente: "Densua",
    asset: "Refrigerador",
    tecnico: "Alexis Perez",
    status: "Abierto",
    tipo: "Correctivo",
    fecha: "2021-12-08"
  }, {
    id: 2,
    problema: "Pantalla rota",
    cliente: "Margarita",
    asset: "Laptop",
    tecnico: "Juan L\xF3pez",
    status: "En Proceso",
    tipo: "Preventivo",
    fecha: "2022-01-12"
  }, {
    id: 3,
    problema: "No carga",
    cliente: "Carlos",
    asset: "Tel\xE9fono",
    tecnico: "Ana S\xE1nchez",
    status: "Cerrado",
    tipo: "Correctivo",
    fecha: "2021-02-15"
  }]);
  (0, import_react.useEffect)(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      removeToken();
      navigate("/login");
    }
  }, []);
  const filteredTickets = tickets.filter((ticket) => ticket.problema.toLowerCase().includes(search.toLowerCase()) || ticket.cliente.toLowerCase().includes(search.toLowerCase()) || ticket.asset.toLowerCase().includes(search.toLowerCase()) || ticket.tecnico.toLowerCase().includes(search.toLowerCase()));
  const sortedTickets = [...filteredTickets].sort((a, b) => {
    const dateA = new Date(a.fecha).getTime();
    const dateB = new Date(b.fecha).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });
  const toggleSortOrder = () => {
    setSortAsc(!sortAsc);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen h-screen flex bg-sky-50 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { sidebarVisible, toggleSidebar }, void 0, false, {
      fileName: "app/routes/Dashboard.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, { toggleSidebar, title: pageTitle }, void 0, false, {
        fileName: "app/routes/Dashboard.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 p-4 md:p-6 overflow-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Tickets", value: 12 }, void 0, false, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Clientes", value: 128 }, void 0, false, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "T\xE9cnicos Disponibles", value: 10 }, void 0, false, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Dashboard.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md rounded-3xl p-6 mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-black mb-4", children: "Tickets Recientes" }, void 0, false, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4 space-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center border border-gray-300 rounded-md p-2 bg-white", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "w-5 h-5 text-black" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 99,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Buscar...", className: "ml-2 outline-none text-black bg-white", value: search, onChange: (e) => setSearch(e.target.value) }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 98,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex items-center bg-gray-300 text-black p-2 rounded-md space-x-2", onClick: toggleSortOrder, children: [
              sortAsc ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-5 h-5" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 103,
                columnNumber: 28
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "w-5 h-5" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 103,
                columnNumber: 66
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: sortAsc ? "Ascendente" : "Descendente" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 104,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 102,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100 text-black uppercase text-sm leading-normal", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "ID" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Problema" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Cliente" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 112,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Nombre Assets" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 113,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Nombre T\xE9cnico" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Status" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 115,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Tipo" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Fecha de Alta" }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: sortedTickets.map((ticket) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-gray-200 hover:bg-gray-100", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-blue-500", children: ticket.id }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.problema }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.cliente }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.asset }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.tecnico }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 126,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-2 py-1 rounded-md bg-green-500 text-white", children: ticket.status }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 128,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.tipo }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: ticket.fecha }, void 0, false, {
                fileName: "app/routes/Dashboard.tsx",
                lineNumber: 133,
                columnNumber: 21
              }, this)
            ] }, ticket.id, true, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 121,
              columnNumber: 46
            }, this)) }, void 0, false, {
              fileName: "app/routes/Dashboard.tsx",
              lineNumber: 120,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/Dashboard.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/Dashboard.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Dashboard.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Dashboard.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Dashboard.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(DashboardLayout, "AinmhlN2sW7/8K27oeYNtnF1hwE=", false, function() {
  return [useNavigate];
});
_c = DashboardLayout;
function StatCard({
  title,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md rounded-3xl p-6 flex items-center justify-between space-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-800", children: title }, void 0, false, {
      fileName: "app/routes/Dashboard.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-blue-500", children: value }, void 0, false, {
      fileName: "app/routes/Dashboard.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Dashboard.tsx",
    lineNumber: 151,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/Dashboard.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
}
_c2 = StatCard;
var _c;
var _c2;
$RefreshReg$(_c, "DashboardLayout");
$RefreshReg$(_c2, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardLayout as default
};
//# sourceMappingURL=/build/routes/Dashboard-2XRN3Z4I.js.map
