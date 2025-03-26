import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { forgotPasswordRequest } from "~/utils/authApi";

export default function Recover() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setError("El correo electrónico es obligatorio");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingrese un correo válido");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateEmail()) return;

    try {
      await forgotPasswordRequest(email);
      setMessage("Se ha enviado un correo de recuperación de contraseña.");
    } catch (error: any) {
      setError(error.message || "Error al enviar el correo");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105">
        <div className="flex justify-center mb-6">
          <img src="/images/logos/Horizontal_blue.png" alt="Logo" className="w-40" />
        </div>

        <h1 className="text-2xl font-bold text-[#0047BA] text-center mb-6">
          Recuperar Contraseña
        </h1>

        {error && <p className="text-red-500 text-xs text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-xs text-center mb-4">{message}</p>}

        {/* Input de Correo */}
        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-white border-b-2 text-sm text-black placeholder-gray-500 p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]"
          />

          <label
            className={`absolute left-3 transition-all text-black ${
              email || focused ? "-top-2 text-xs text-[#0047BA]" : "top-3"
            }`}
          >
            Correo Electrónico
          </label>
        </div>

        {/* Botón de Enviar */}
        <button
          className="w-full text-white py-3 bg-[#0047BA] rounded-lg hover:scale-105 transition-all"
          onClick={handleSubmit}
        >
          Enviar
        </button>

        {/* Volver al Login */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-blue-600 hover:underline transition-all"
          >
            Volver al inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
}
