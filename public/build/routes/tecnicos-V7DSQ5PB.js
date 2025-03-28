import {
  Navbar,
  Sidebar
} from "/build/_shared/chunk-A5HM536X.js";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
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

// app/routes/tecnicos.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\tecnicos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\tecnicos.tsx"
  );
  import.meta.hot.lastModified = "1741906252082.15";
}
function DashboardLayout() {
  _s();
  const [sidebarVisible, setSidebarVisible] = (0, import_react.useState)(true);
  const [search, setSearch] = (0, import_react.useState)("");
  const [sortAsc, setSortAsc] = (0, import_react.useState)(true);
  const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
  const [isAddingTecnico, setIsAddingTecnico] = (0, import_react.useState)(false);
  const [selectedTecnico, setSelectedTecnico] = (0, import_react.useState)(null);
  const itemsPerPage = 5;
  const pageTitle = "T\xE9cnicos";
  const [tecnicos, setTecnicos] = (0, import_react.useState)([{
    id: 1,
    nombreCuadrilla: "Cuadrilla A",
    correo: "cuadrillaA@example.com",
    telefono: "123456789",
    ticketAsignado: "001",
    disponibilidad: "Disponible"
  }, {
    id: 2,
    nombreCuadrilla: "Cuadrilla B",
    correo: "cuadrillaB@example.com",
    telefono: "987654321",
    ticketAsignado: "002",
    disponibilidad: "Ocupado"
  }, {
    id: 3,
    nombreCuadrilla: "Cuadrilla C",
    correo: "cuadrillaC@example.com",
    telefono: "555555555",
    ticketAsignado: "003",
    disponibilidad: "De baja"
  }, {
    id: 4,
    nombreCuadrilla: "Cuadrilla D",
    correo: "cuadrillaD@example.com",
    telefono: "5457457323",
    ticketAsignado: "035",
    disponibilidad: "En descanso"
  }, {
    id: 5,
    nombreCuadrilla: "Cuadrilla A",
    correo: "cuadrillaA@example.com",
    telefono: "123456789",
    ticketAsignado: "001",
    disponibilidad: "Disponible"
  }, {
    id: 6,
    nombreCuadrilla: "Cuadrilla B",
    correo: "cuadrillaB@example.com",
    telefono: "987654321",
    ticketAsignado: "002",
    disponibilidad: "Ocupado"
  }, {
    id: 7,
    nombreCuadrilla: "Cuadrilla C",
    correo: "cuadrillaC@example.com",
    telefono: "555555555",
    ticketAsignado: "003",
    disponibilidad: "De baja"
  }, {
    id: 8,
    nombreCuadrilla: "Cuadrilla D",
    correo: "cuadrillaD@example.com",
    telefono: "5457457323",
    ticketAsignado: "035",
    disponibilidad: "En descanso"
  }, {
    id: 9,
    nombreCuadrilla: "Cuadrilla A",
    correo: "cuadrillaA@example.com",
    telefono: "123456789",
    ticketAsignado: "001",
    disponibilidad: "Disponible"
  }, {
    id: 10,
    nombreCuadrilla: "Cuadrilla B",
    correo: "cuadrillaB@example.com",
    telefono: "987654321",
    ticketAsignado: "002",
    disponibilidad: "Ocupado"
  }, {
    id: 11,
    nombreCuadrilla: "Cuadrilla C",
    correo: "cuadrillaC@example.com",
    telefono: "555555555",
    ticketAsignado: "003",
    disponibilidad: "De baja"
  }, {
    id: 12,
    nombreCuadrilla: "Cuadrilla D",
    correo: "cuadrillaD@example.com",
    telefono: "5457457323",
    ticketAsignado: "035",
    disponibilidad: "En descanso"
  }]);
  const filteredTecnicos = tecnicos.filter((tecnico) => tecnico.id.toString().includes(search) || tecnico.nombreCuadrilla.toLowerCase().includes(search.toLowerCase()) || tecnico.ticketAsignado.toLowerCase().includes(search.toLowerCase()));
  const sortedTecnicos = [...filteredTecnicos].sort((a, b) => sortAsc ? a.id - b.id : b.id - a.id);
  const totalPages = Math.max(Math.ceil(sortedTecnicos.length / itemsPerPage), 1);
  const currentTecnicos = sortedTecnicos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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
  const getAvailabilityColor = (disponibilidad) => {
    switch (disponibilidad) {
      case "Disponible":
        return "bg-cyan-600";
      case "Ocupado":
        return "bg-blue-700";
      case "De baja":
        return "bg-slate-700";
      case "En descanso":
        return "bg-blue-400";
      default:
        return "bg-gray-500";
    }
  };
  const handleAddOrEditTecnico = (newTecnicoData) => {
    if (isAddingTecnico) {
      const newTecnico = {
        id: tecnicos.length + 1,
        // Generar un nuevo ID
        ...newTecnicoData,
        ticketAsignado: "N/A",
        // Valor por defecto
        disponibilidad: "Disponible"
        // Valor por defecto
      };
      setTecnicos([...tecnicos, newTecnico]);
    } else {
      setTecnicos((prevTecnicos) => prevTecnicos.map((tecnico) => tecnico.id === selectedTecnico.id ? {
        ...tecnico,
        ...newTecnicoData
      } : tecnico));
    }
    setIsAddingTecnico(false);
    setSelectedTecnico(null);
  };
  const handleDeleteTecnico = (id) => {
    setTecnicos(tecnicos.filter((tecnico) => tecnico.id !== id));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen h-screen flex bg-sky-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { sidebarVisible, toggleSidebar }, void 0, false, {
      fileName: "app/routes/tecnicos.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col h-screen w-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, { toggleSidebar, title: pageTitle }, void 0, false, {
        fileName: "app/routes/tecnicos.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full p-4 md:p-6 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between bg-white h-full w-full shadow-md rounded-3xl p-6 overflow-x-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-black", children: "T\xE9cnicos" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 222,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-500", children: "Asignar t\xE9cnicos" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center border border-gray-300 rounded-md p-2 bg-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "w-5 h-5 text-black" }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 229,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Buscar...", className: "ml-2 outline-none text-black bg-white", value: search, onChange: (e) => setSearch(e.target.value) }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 230,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 228,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "h-10 w-10 flex items-center bg-slate-200 text-black p-2 rounded-full space-x-2", onClick: toggleSortOrder, children: sortAsc ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-6 h-5" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 233,
                columnNumber: 32
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "w-6 h-5" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 233,
                columnNumber: 70
              }, this) }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 232,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "h-10 w-10 flex items-center bg-primary text-black p-2 rounded-full space-x-2", onClick: () => setIsAddingTecnico(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "w-6 h-5 text-white" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 237,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 236,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 227,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100 text-black uppercase text-sm leading-normal", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "ID" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 246,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Nombre Cuadrilla" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Tel\xE9fono" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 248,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Correo" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 249,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Ticket Asignado" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 250,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Disponibilidad" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 251,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "py-3 px-6", children: "Acciones" }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this),
              " "
            ] }, void 0, true, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 245,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: currentTecnicos.map((tecnico) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-gray-200 hover:bg-blue-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-blue-500", children: tecnico.id }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 257,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: tecnico.nombreCuadrilla }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 258,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: tecnico.telefono }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 259,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: tecnico.correo }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 260,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-black", children: "Ticket " + tecnico.ticketAsignado }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 261,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-full w-fit px-2 py-1 rounded-md text-white cursor-default ${getAvailabilityColor(tecnico.disponibilidad)}`, children: tecnico.disponibilidad }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 262,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-6 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedTecnico(tecnico), className: "text-blue-500 hover:text-blue-700 mr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 270,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 269,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDeleteTecnico(tecnico.id), className: "text-red-500 hover:text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 274,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/tecnicos.tsx",
                  lineNumber: 273,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/tecnicos.tsx",
                lineNumber: 267,
                columnNumber: 23
              }, this)
            ] }, tecnico.id, true, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 256,
              columnNumber: 51
            }, this)) }, void 0, false, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tecnicos.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center md:justify-end mt-4 space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: previousPage, disabled: currentPage === 1, className: "px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 285,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this),
          Array.from({
            length: Math.min(totalPages, 5)
          }, (_, index) => {
            const page = index + 1;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setCurrentPage(page), className: `px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`, children: page }, page, false, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 291,
              columnNumber: 22
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: nextPage, disabled: currentPage === totalPages, className: "px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tecnicos.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tecnicos.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tecnicos.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      (selectedTecnico || isAddingTecnico) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center border-b pb-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-black", children: isAddingTecnico ? "Agregar T\xE9cnico" : "Editar T\xE9cnico" }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 306,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setSelectedTecnico(null);
            setIsAddingTecnico(false);
          }, className: "text-gray-600 hover:text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-5 h-5" }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 313,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 309,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tecnicos.tsx",
          lineNumber: 305,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const rawFormData = Object.fromEntries(formData.entries());
          const newTecnicoData = {
            nombreCuadrilla: String(rawFormData.nombreCuadrilla),
            correo: String(rawFormData.correo),
            telefono: String(rawFormData.telefono)
          };
          handleAddOrEditTecnico(newTecnicoData);
        }, children: [
          [{
            label: "Nombre Cuadrilla",
            name: "nombreCuadrilla"
          }, {
            label: "Correo",
            name: "correo"
          }, {
            label: "Tel\xE9fono",
            name: "telefono"
          }].map(({
            label,
            name
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm text-black capitalize", children: label }, void 0, false, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 340,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name, defaultValue: selectedTecnico ? selectedTecnico[name] || "" : "", className: "w-full p-2 border rounded-md" }, void 0, false, {
              fileName: "app/routes/tecnicos.tsx",
              lineNumber: 341,
              columnNumber: 21
            }, this)
          ] }, name, true, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 339,
            columnNumber: 19
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-500 text-white p-2 rounded-md mt-3", children: isAddingTecnico ? "Agregar" : "Guardar" }, void 0, false, {
            fileName: "app/routes/tecnicos.tsx",
            lineNumber: 343,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tecnicos.tsx",
          lineNumber: 316,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tecnicos.tsx",
        lineNumber: 304,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/tecnicos.tsx",
        lineNumber: 303,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tecnicos.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tecnicos.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(DashboardLayout, "7MCR/9E6epKvP4DFgvf6oZ4vRA8=");
_c = DashboardLayout;
var _c;
$RefreshReg$(_c, "DashboardLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardLayout as default
};
//# sourceMappingURL=/build/routes/tecnicos-V7DSQ5PB.js.map
