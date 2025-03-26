import { jwtDecode } from "jwt-decode";

const API_URL = process.env.API_URL || "http://localhost:5019/api";// Define solo una vez en el archivo

interface DecodedToken {
  IdUsuario: string;
  Email: string;
  Rol: string;
  exp: number;
}

export async function loginRequest(correo: string, contrasena: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena }),
 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al iniciar sesión");
    }

    localStorage.setItem("token", data.token);

    // Decodificar el token para obtener el rol
    const decoded: DecodedToken = jwtDecode(data.token);
    localStorage.setItem("rol", decoded.Rol);

    return { token: data.token, rol: decoded.Rol };
  } catch (error: any) {
    throw new Error(error.message);
  }
}




export async function forgotPasswordRequest(email: string) {
  try {
    const response = await fetch(`${API_URL}/password/forgot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: email }), // 
      mode: "cors",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al enviar la solicitud de recuperación");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}


export async function resetPasswordRequest(TokenRecuperacion: string, NuevaContrasena: string, ConfirmarContrasena: string) {
  try {
    const response = await fetch(`${API_URL}/password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ TokenRecuperacion, NuevaContrasena, ConfirmarContrasena }), // Enviar el token y las contraseñas
      mode: "cors",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al restablecer la contraseña");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}