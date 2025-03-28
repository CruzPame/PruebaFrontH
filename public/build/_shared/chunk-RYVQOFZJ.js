import {
  createHotContext
} from "/build/_shared/chunk-WZGERFX5.js";

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// app/utils/authApi.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\authApi.ts"
  );
  import.meta.hot.lastModified = "1743103587400.0454";
}
var API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);
async function loginRequest(correo, contrasena) {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error al iniciar sesi\xF3n");
    }
    localStorage.setItem("token", data.token);
    const decoded = jwtDecode(data.token);
    localStorage.setItem("rol", decoded.Rol);
    return { token: data.token, rol: decoded.Rol };
  } catch (error) {
    throw new Error(error.message);
  }
}
async function forgotPasswordRequest(email) {
  try {
    const response = await fetch(`${API_URL}/api/password/forgot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: email }),
      // 
      mode: "cors"
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error al enviar la solicitud de recuperaci\xF3n");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function resetPasswordRequest(TokenRecuperacion, NuevaContrasena, ConfirmarContrasena) {
  try {
    const response = await fetch(`${API_URL}/api/password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TokenRecuperacion, NuevaContrasena, ConfirmarContrasena }),
      // Enviar el token y las contraseñas
      mode: "cors"
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error al restablecer la contrase\xF1a");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export {
  loginRequest,
  forgotPasswordRequest,
  resetPasswordRequest
};
//# sourceMappingURL=/build/_shared/chunk-RYVQOFZJ.js.map
