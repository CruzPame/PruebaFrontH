import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { loginRequest } from "~/utils/authApi";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await loginRequest(email, password);
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.message || "Error en la autenticación");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105">
        <div className="flex justify-center mb-6">
          <img src="/images/logos/Horizontal_blue.png" alt="Logo" className="w-40 animate-fadeIn" />
        </div>

        <h1 className="text-2xl font-bold text-[#0047BA] text-center mb-6 animate-fadeIn">
          Iniciar Sesión
        </h1>

        {error && <p className="text-red-500 text-xs text-center mb-4 animate-shake">{error}</p>}

        {/* Input de Correo */}
        <div className="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-white border-b-2 text-sm text-gray-800 placeholder-gray-500 p-3 focus:outline-none transition-all border-gray-400 focus:border-[#0047BA]"
          />

          <label
            className={`absolute left-3 transition-all text-gray-800 ${email || focused ? "-top-2 text-xs text-[#0047BA]" : "top-3"
              }`}
          >
            Correo Electrónico
          </label>
        </div>

        {/* Input de Contraseña */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full bg-white border-b-2 text-sm text-gray-800 placeholder-gray-500 p-3 focus:outline-none border-gray-400 focus:border-[#0047BA] transition-all"
          />

          <label
            className={`absolute left-3 transition-all text-gray-800 ${password ? "-top-2 text-xs text-[#0047BA]" : "top-3"
              }`}
          >
            Contraseña
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-[#0047BA] transition-all"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Botón de Acceder */}
        <button
          className="w-full text-white py-3 bg-[#0047BA] rounded-lg hover:scale-105 transition-all"
          onClick={handleSubmit}
        >
          Acceder
        </button>

        {/* Olvidaste tu contraseña */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/recover")}
            className="text-sm text-blue-600 hover:underline transition-all"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
}
