import {
  forgotPasswordRequest
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

// app/routes/recover.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\recover.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\recover.tsx"
  );
  import.meta.hot.lastModified = "1741906252038.1912";
}
function Recover() {
  _s();
  const [email, setEmail] = (0, import_react.useState)("");
  const [error, setError] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  const [focused, setFocused] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const validateEmail = () => {
    if (!email) {
      setError("El correo electr\xF3nico es obligatorio");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingrese un correo v\xE1lido");
      return false;
    }
    setError("");
    return true;
  };
  const handleSubmit = async () => {
    if (!validateEmail())
      return;
    try {
      await forgotPasswordRequest(email);
      setMessage("Se ha enviado un correo de recuperaci\xF3n de contrase\xF1a.");
    } catch (error2) {
      setError(error2.message || "Error al enviar el correo");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen flex flex-col items-center justify-center bg-sky-50 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/logos/Horizontal_blue.png", alt: "Logo", className: "w-40" }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-[#0047BA] text-center mb-6", children: "Recuperar Contrase\xF1a" }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs text-center mb-4", children: error }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 62,
      columnNumber: 19
    }, this),
    message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-500 text-xs text-center mb-4", children: message }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 63,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), onFocus: () => setFocused(true), onBlur: () => setFocused(false), className: "peer w-full bg-white border-b-2 text-sm text-black placeholder-gray-500 p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]" }, void 0, false, {
        fileName: "app/routes/recover.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `absolute left-3 transition-all text-black ${email || focused ? "-top-2 text-xs text-[#0047BA]" : "top-3"}`, children: "Correo Electr\xF3nico" }, void 0, false, {
        fileName: "app/routes/recover.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full text-white py-3 bg-[#0047BA] rounded-lg hover:scale-105 transition-all", onClick: handleSubmit, children: "Enviar" }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate("/login"), className: "text-sm text-blue-600 hover:underline transition-all", children: "Volver al inicio de sesi\xF3n" }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/recover.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/recover.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/recover.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Recover, "64UgQTA86HiQdF6bRgFkmtQNdVk=", false, function() {
  return [useNavigate];
});
_c = Recover;
var _c;
$RefreshReg$(_c, "Recover");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Recover as default
};
//# sourceMappingURL=/build/routes/recover-DH37V7V4.js.map
