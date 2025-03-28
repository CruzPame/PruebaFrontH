import {
  Eye,
  EyeOff
} from "/build/_shared/chunk-CM7JF4QN.js";
import {
  loginRequest
} from "/build/_shared/chunk-RYVQOFZJ.js";
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

// app/routes/login.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1741906251943.496";
}
function Login() {
  _s();
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [error, setError] = (0, import_react.useState)("");
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [focused, setFocused] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await loginRequest(email, password);
      navigate("/dashboard");
    } catch (error2) {
      setError(error2.message || "Error en la autenticaci\xF3n");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen flex flex-col items-center justify-center bg-sky-50 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/logos/Horizontal_blue.png", alt: "Logo", className: "w-40 animate-fadeIn" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-[#0047BA] text-center mb-6 animate-fadeIn", children: "Iniciar Sesi\xF3n" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs text-center mb-4 animate-shake", children: error }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 52,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), onFocus: () => setFocused(true), onBlur: () => setFocused(false), className: "peer w-full bg-white border-b-2 text-sm text-gray-800 placeholder-gray-500 p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `absolute left-3 transition-all text-gray-800 ${email || focused ? "-top-2 text-xs text-[#0047BA]" : "top-3"}`, children: "Correo Electr\xF3nico" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), className: "peer w-full bg-white border-b-2 text-sm text-gray-800 placeholder-gray-500 p-3 focus:outline-none border-gray-400 focus:border-[#0047BA] transition-all" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `absolute left-3 transition-all text-gray-800 ${password ? "-top-2 text-xs text-[#0047BA]" : "top-3"}`, children: "Contrase\xF1a" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-3 text-gray-500 hover:text-[#0047BA] transition-all", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { size: 20 }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 71,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { size: 20 }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 71,
        columnNumber: 52
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full text-white py-3 bg-[#0047BA] rounded-lg hover:scale-105 transition-all", onClick: handleSubmit, children: "Acceder" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate("/recover"), className: "text-sm text-blue-600 hover:underline transition-all", children: "\xBFOlvidaste tu contrase\xF1a?" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Login, "h+heKdmPGvCo/EKHQoNmU9sQOZ0=", false, function() {
  return [useNavigate];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-JLNVYXSH.js.map
