export function getUserRole(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("rol");
  }
  
  export function removeToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("rol");
    }
  }
  
  // Solo eliminar el token cuando el usuario cierra la pestaña o presiona "Atrás"
  if (typeof window !== "undefined") {
    window.addEventListener("popstate", () => {
      removeToken();
    });
  }
  
  export function logout(navigate: Function) {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/login"); // Redirigir al login
  }
  