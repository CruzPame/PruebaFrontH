import {
  House,
  Menu,
  Power,
  Settings,
  SquareStack,
  TicketCheck,
  UserSearch,
  Wrench
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
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/utils/auth.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\auth.ts"
  );
  import.meta.hot.lastModified = "1741906252161.693";
}
function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
  }
}
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    removeToken();
  });
}
function logout(navigate) {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  navigate("/login");
}

// app/components/sidebar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\sidebar.tsx"
  );
  import.meta.hot.lastModified = "1741906251613.2136";
}
function Sidebar({
  sidebarVisible,
  toggleSidebar
}) {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { onClick: toggleSidebar, className: `transition-all duration-300 fixed md:relative z-50 cursor-pointer ${sidebarVisible ? "w-1/5" : "w-16"} bg-primary flex flex-col items-center justify-between py-4 text-white h-full md:static`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center w-full mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex justify-center w-full transition-all duration-300 ${sidebarVisible ? "h-32" : "h-16"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: sidebarVisible ? "images/logos/Horizontal_white.png" : "images/logos/Simbolo_white.png", alt: "Logo", className: `transition-all duration-300 ${sidebarVisible ? "h-32" : "h-12"}` }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-col space-y-8 mt-8 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarButton, { icon: House, label: "Dashboard", sidebarVisible }, void 0, false, {
          fileName: "app/components/sidebar.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarButton, { icon: SquareStack, label: "Assets", sidebarVisible }, void 0, false, {
          fileName: "app/components/sidebar.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarButton, { icon: TicketCheck, label: "Tickets", sidebarVisible }, void 0, false, {
          fileName: "app/components/sidebar.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarButton, { icon: UserSearch, label: "Clientes", sidebarVisible }, void 0, false, {
          fileName: "app/components/sidebar.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarButton, { icon: Wrench, label: "T\xE9cnicos", sidebarVisible }, void 0, false, {
          fileName: "app/components/sidebar.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex justify-end transition-opacity duration-300 ${sidebarVisible ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => logout(navigate), className: "flex items-center space-x-2 text-white p-2 rounded-md hover:bg-white/10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Power, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      sidebarVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Cerrar sesi\xF3n" }, void 0, false, {
        fileName: "app/components/sidebar.tsx",
        lineNumber: 49,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(Sidebar, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = Sidebar;
function SidebarButton({
  icon: Icon,
  label,
  sidebarVisible
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full flex items-center space-x-2 text-lg md:text-xl text-white py-2 px-5 rounded-xl hover:bg-black/10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    sidebarVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 65,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/sidebar.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_c2 = SidebarButton;
var _c;
var _c2;
$RefreshReg$(_c, "Sidebar");
$RefreshReg$(_c2, "SidebarButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/navbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\navbar.tsx"
  );
  import.meta.hot.lastModified = "1741906251509.468";
}
function Navbar({
  toggleSidebar,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "w-full flex justify-between items-center p-4 px-6 bg-sky-50 text-slate-800 border-b border-sky-700/40 relative md:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleSidebar, className: "md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-#0047ba md:text-3xl font-semibold", children: title }, void 0, false, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Settings, { className: "w-6 h-6 cursor-pointer" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-10 h-10 bg-gray-300 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/descarga.jpg", alt: "Perfil", className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = Navbar;
var _c3;
$RefreshReg$(_c3, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  removeToken,
  Sidebar,
  Navbar
};
//# sourceMappingURL=/build/_shared/chunk-A5HM536X.js.map
