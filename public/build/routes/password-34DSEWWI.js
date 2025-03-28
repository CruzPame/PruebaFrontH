import {
  Eye,
  EyeOff
} from "/build/_shared/chunk-CM7JF4QN.js";
import {
  resetPasswordRequest
} from "/build/_shared/chunk-RYVQOFZJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useNavigate,
  useSearchParams
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

// app/routes/password.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\password.tsx"
  );
  import.meta.hot.lastModified = "1741906251993.28";
}
function Password() {
  _s();
  const [formData, setFormData] = (0, import_react.useState)({
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [focused, setFocused] = (0, import_react.useState)(null);
  const [errors, setErrors] = (0, import_react.useState)({
    newPassword: "",
    confirmPassword: ""
  });
  const [message, setMessage] = (0, import_react.useState)("");
  const [apiError, setApiError] = (0, import_react.useState)("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  (0, import_react.useEffect)(() => {
    if (!token) {
      setApiError("Token inv\xE1lido o expirado.");
    }
  }, [token]);
  const validatePasswords = () => {
    let newErrors = {
      newPassword: "",
      confirmPassword: ""
    };
    let valid = true;
    if (!formData.newPassword) {
      newErrors.newPassword = "Ingrese una nueva contrase\xF1a";
      valid = false;
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirme su contrase\xF1a";
      valid = false;
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Las contrase\xF1as no coinciden";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = async () => {
    setMessage("");
    setApiError("");
    if (!validatePasswords() || !token)
      return;
    try {
      const response = await resetPasswordRequest(token, formData.newPassword, formData.confirmPassword);
      setMessage(response.message || "Contrase\xF1a restablecida correctamente");
      setTimeout(() => {
        navigate("/login");
      }, 3e3);
    } catch (error) {
      setApiError(error.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen flex flex-col items-center justify-center bg-sky-50 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/logos/Horizontal_blue.png", alt: "Logo", className: "w-40" }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-[#0047BA] text-center mb-6", children: "Nueva Contrase\xF1a" }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    apiError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs text-center mb-4", children: apiError }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 91,
      columnNumber: 22
    }, this),
    message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-500 text-xs text-center mb-4", children: message }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 92,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: showPassword ? "text" : "password", name: "newPassword", value: formData.newPassword, onChange: (e) => setFormData({
        ...formData,
        newPassword: e.target.value
      }), onFocus: () => setFocused("newPassword"), onBlur: () => setFocused(null), className: "peer w-full bg-white border-b-2 text-sm text-black p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]" }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `absolute left-3 transition-all text-black ${formData.newPassword || focused === "newPassword" ? "-top-2 text-xs text-[#0047BA]" : "top-3"}`, children: "Nueva contrase\xF1a" }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-3 text-gray-500 hover:text-[#0047BA] transition-all", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { size: 20 }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 104,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { size: 20 }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 104,
        columnNumber: 52
      }, this) }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      errors.newPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors.newPassword }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 106,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/password.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "confirmPassword", value: formData.confirmPassword, onChange: (e) => setFormData({
        ...formData,
        confirmPassword: e.target.value
      }), onFocus: () => setFocused("confirmPassword"), onBlur: () => setFocused(null), className: "peer w-full bg-white border-b-2 text-sm text-black p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]" }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: `absolute left-3 transition-all text-black ${formData.confirmPassword || focused === "confirmPassword" ? "-top-2 text-xs text-[#0047BA]" : "top-3"}`, children: "Confirmar contrase\xF1a" }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this),
      errors.confirmPassword && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs mt-1", children: errors.confirmPassword }, void 0, false, {
        fileName: "app/routes/password.tsx",
        lineNumber: 118,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/password.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full text-white py-3 bg-[#0047BA] rounded-lg hover:scale-105 transition-all", onClick: handleSubmit, children: "Aceptar" }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate("/login"), className: "text-sm text-blue-600 hover:underline transition-all", children: "Volver al inicio de sesi\xF3n" }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/password.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/password.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/password.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(Password, "/mZW9Zq+H7w1HVekeI40F2/UkQY=", false, function() {
  return [useNavigate, useSearchParams];
});
_c = Password;
var _c;
$RefreshReg$(_c, "Password");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Password as default
};
//# sourceMappingURL=/build/routes/password-34DSEWWI.js.map
