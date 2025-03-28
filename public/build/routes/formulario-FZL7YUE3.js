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

// app/routes/formulario.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\formulario.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\formulario.jsx"
  );
  import.meta.hot.lastModified = "1741906251889.4438";
}
function ConfirmationScreen() {
  _s();
  const navigate = useNavigate();
  const [particles, setParticles] = (0, import_react.useState)([]);
  const particlesRef = (0, import_react.useRef)([]);
  (0, import_react.useEffect)(() => {
    particlesRef.current = Array.from({
      length: 50
    }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      dx: Math.random() * 0.2 - 0.1,
      dy: Math.random() * 0.2 - 0.1
    }));
    setParticles([...particlesRef.current]);
    const animateParticles = () => {
      particlesRef.current.forEach((p) => {
        p.x = (p.x + p.dx + 100) % 100;
        p.y = (p.y + p.dy + 100) % 100;
      });
      setParticles([...particlesRef.current]);
      requestAnimationFrame(animateParticles);
    };
    const animationId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationId);
  }, []);
  const handleContinue = () => {
    navigate("/landingPage");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#F8F9FC",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden"
  }, children: [
    particles.map((p, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      position: "absolute",
      top: `${p.y}%`,
      left: `${p.x}%`,
      width: `${p.size}px`,
      height: `${p.size}px`,
      backgroundColor: `rgba(37, 99, 235, ${p.opacity})`,
      borderRadius: "50%",
      transform: `translate(-50%, -50%)`
    } }, index, false, {
      fileName: "app/routes/formulario.jsx",
      lineNumber: 67,
      columnNumber: 36
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#FFFFFF",
      padding: "50px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      zIndex: 1,
      position: "relative",
      width: "100%",
      maxWidth: "400px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        backgroundColor: "#1947BA",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 30px"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "#ffffff", style: {
        width: "40px",
        height: "40px"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#111827",
        marginBottom: "20px"
      }, children: "N\xFAmero de tel\xE9fono verificado" }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "16px",
        color: "#6B7280",
        marginBottom: "30px",
        lineHeight: "1.5"
      }, children: "Felicitaciones, su n\xFAmero de tel\xE9fono ha sido verificado. Puedes empezar a usar la aplicaci\xF3n." }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleContinue, style: {
        width: "100%",
        maxWidth: "300px",
        backgroundColor: "#1947BA",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "14px",
        borderRadius: "24px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }, children: "Continuar" }, void 0, false, {
        fileName: "app/routes/formulario.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/formulario.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/formulario.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(ConfirmationScreen, "lNP0ztUczSFhxqQNwe2ZnILZh4U=", false, function() {
  return [useNavigate];
});
_c = ConfirmationScreen;
var _c;
$RefreshReg$(_c, "ConfirmationScreen");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ConfirmationScreen as default
};
//# sourceMappingURL=/build/routes/formulario-FZL7YUE3.js.map
