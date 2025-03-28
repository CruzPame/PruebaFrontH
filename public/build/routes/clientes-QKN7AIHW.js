import {
  Navbar,
  Sidebar
} from "/build/_shared/chunk-A5HM536X.js";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Files,
  Pencil,
  Plus,
  Search,
  Trash2,
  X
} from "/build/_shared/chunk-CM7JF4QN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-55TP7YLU.js";
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

// app/routes/clientes.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\clientes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\clientes.tsx"
  );
  import.meta.hot.lastModified = "1741906251777.612";
}
function ClientesLayout() {
  _s();
  const [sidebarVisible, setSidebarVisible] = (0, import_react.useState)(true);
  const [search, setSearch] = (0, import_react.useState)("");
  const [sortAsc, setSortAsc] = (0, import_react.useState)(true);
  const [selectedCliente, setSelectedCliente] = (0, import_react.useState)(null);
  const [isAddingClient, setIsAddingClient] = (0, import_react.useState)(false);
  const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
  const itemsPerPage = 5;
  const [clientes, setClientes] = (0, import_react.useState)([
    {
      id: 1,
      nombre: "Juan P\xE9rez",
      telefono: "123456789",
      correo: "juan@example.com",
      empresa: "Empresa A",
      direccion: "Apaxco, Estado de M\xE9xico",
      ticketsActivos: "12",
      totalTickets: "62"
    },
    {
      id: 2,
      nombre: "Mar\xEDa L\xF3pez",
      telefono: "987654321",
      correo: "maria@example.com",
      empresa: "Empresa B",
      direccion: "Santiago de Quer\xE9taro",
      ticketsActivos: "53",
      totalTickets: "351"
    },
    {
      id: 3,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "41",
      totalTickets: "214"
    },
    {
      id: 4,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "51",
      totalTickets: "214"
    },
    {
      id: 5,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 6,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 7,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 8,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 9,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 10,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 11,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 12,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    },
    {
      id: 13,
      nombre: "Carlos Ram\xEDrez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoac\xE1n de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214"
    }
    // Agrega más clientes si es necesario para probar la paginación
  ]);
  const copyToClipboard = (correo) => {
    navigator.clipboard.writeText(correo).then(() => {
      alert(`Correo copiado: ${correo}`);
    }).catch((err) => {
      console.error("Error al copiar el correo:", err);
    });
  };
  const handleDeleteClient = (id) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };
  const filteredClientes = clientes.filter((cliente) => cliente.id.toString().includes(search) || cliente.nombre.toLowerCase().includes(search.toLowerCase()) || cliente.empresa.toLowerCase().includes(search.toLowerCase()));
  const sortedClientes = [...filteredClientes].sort((a, b) => sortAsc ? a.id - b.id : b.id - a.id);
  const totalPages = Math.max(Math.ceil(sortedClientes.length / itemsPerPage), 1);
  const currentClientes = sortedClientes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const toggleSortOrder = () => {
    setSortAsc(!sortAsc);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleAddClient = (newClientData) => {
    const newClient = {
      id: clientes.length + 1,
      ...newClientData
    };
    setClientes([...clientes, newClient]);
    setIsAddingClient(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen h-screen flex bg-sky-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { sidebarVisible, toggleSidebar }, void 0, false, {
      fileName: "app/routes/clientes.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col h-screen w-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, { toggleSidebar, title: "Clientes" }, void 0, false, {
        fileName: "app/routes/clientes.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full p-4 md:p-6 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between bg-white h-full w-full shadow-md rounded-3xl p-6 overflow-x-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4 select-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black", children: "Clientes" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 238,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-500", children: "Gesti\xF3n de clientes" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 239,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 237,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center border border-gray-300 rounded-md p-2 bg-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "w-5 h-5 text-black" }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 245,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Buscar...", className: "ml-2 outline-none text-black bg-white", value: search, onChange: (e) => setSearch(e.target.value) }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 246,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 244,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "h-10 w-10 flex items-center bg-slate-200 text-black p-2 rounded-full space-x-2", onClick: toggleSortOrder, children: sortAsc ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-6 h-5" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 249,
                columnNumber: 32
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "w-6 h-5" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 249,
                columnNumber: 70
              }, this) }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 248,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "h-10 w-10 flex items-center bg-primary text-black p-2 rounded-full space-x-2", onClick: () => setIsAddingClient(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "w-6 h-5 text-white" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 253,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 252,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100 text-black uppercase text-sm leading-normal", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "ID" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 262,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Cliente" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 263,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Tel\xE9fono" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 264,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Correo" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 265,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Direcci\xF3n" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 266,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Tickets Activos" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 267,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Total de Tickets" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 268,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Acciones" }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 269,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 261,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 260,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: currentClientes.map((cliente) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-gray-200 hover:bg-sky-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-blue-500", children: cliente.id }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 274,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: cliente.nombre }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 275,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: cliente.telefono }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 276,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow truncate max-w-[8rem] text-black", children: cliente.correo }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 278,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-gray-500 hover:text-gray-700", onClick: () => copyToClipboard(cliente.correo), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Files, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 280,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 279,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 277,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: cliente.direccion }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 283,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: cliente.ticketsActivos }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 284,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: cliente.totalTickets }, void 0, false, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 285,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedCliente(cliente), className: "text-blue-500 hover:text-blue-700 mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "w-5 h-5 mr-3" }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 288,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 287,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDeleteClient(cliente.id), className: "text-red-500 hover:text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 291,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/clientes.tsx",
                  lineNumber: 290,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/clientes.tsx",
                lineNumber: 286,
                columnNumber: 23
              }, this)
            ] }, cliente.id, true, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 273,
              columnNumber: 51
            }, this)) }, void 0, false, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 272,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/clientes.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center md:justify-end mt-4 space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: previousPage, disabled: currentPage === 1, className: "px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, this),
          Array.from({
            length: Math.min(totalPages, 5)
          }, (_, index) => {
            const page = index + 1;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage(page), className: `px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`, children: page }, page, false, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 311,
              columnNumber: 22
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: nextPage, disabled: currentPage === totalPages, className: "px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 318,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 317,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/clientes.tsx",
          lineNumber: 300,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/clientes.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/clientes.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      (selectedCliente || isAddingClient) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center border-b pb-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-black", children: isAddingClient ? "Agregar Cliente" : "Editar Cliente" }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 328,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setSelectedCliente(null);
            setIsAddingClient(false);
          }, className: "text-gray-600 hover:text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 335,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 331,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/clientes.tsx",
          lineNumber: 327,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const rawFormData = Object.fromEntries(formData.entries());
          const newClientData = {
            nombre: String(rawFormData.nombre),
            telefono: String(rawFormData.telefono),
            correo: String(rawFormData.correo),
            empresa: String(rawFormData.empresa),
            direccion: String(rawFormData.direccion),
            ticketsActivos: String(rawFormData.ticketsActivos),
            totalTickets: String(rawFormData.totalTickets)
          };
          if (isAddingClient) {
            handleAddClient(newClientData);
          } else {
            setSelectedCliente(null);
          }
        }, children: [
          [{
            label: "Nombre",
            name: "nombre"
          }, {
            label: "Tel\xE9fono",
            name: "telefono"
          }, {
            label: "Correo",
            name: "correo"
          }, {
            label: "Empresa",
            name: "empresa"
          }, {
            label: "Direcci\xF3n",
            name: "direccion"
          }, {
            label: "Tickets Activos",
            name: "ticketsActivos"
          }, {
            label: "Total Tickets",
            name: "totalTickets"
          }].map(({
            label,
            name
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm text-black capitalize", children: label }, void 0, false, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 383,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name, defaultValue: selectedCliente ? selectedCliente[name] || "" : "", className: "w-full p-2 border rounded-md" }, void 0, false, {
              fileName: "app/routes/clientes.tsx",
              lineNumber: 384,
              columnNumber: 21
            }, this)
          ] }, name, true, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 382,
            columnNumber: 19
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-500 text-white p-2 rounded-md mt-3", children: isAddingClient ? "Agregar" : "Guardar" }, void 0, false, {
            fileName: "app/routes/clientes.tsx",
            lineNumber: 386,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/clientes.tsx",
          lineNumber: 338,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/clientes.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/clientes.tsx",
        lineNumber: 325,
        columnNumber: 49
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/clientes.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/clientes.tsx",
    lineNumber: 221,
    columnNumber: 10
  }, this);
}
_s(ClientesLayout, "UBSBvKdGruYUA7IP0NpOTxe83oQ=");
_c = ClientesLayout;
var _c;
$RefreshReg$(_c, "ClientesLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ClientesLayout as default
};
//# sourceMappingURL=/build/routes/clientes-QKN7AIHW.js.map
