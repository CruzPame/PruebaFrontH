import { Settings, Menu } from "lucide-react";

// Definimos las props que aceptará el componente Navbar
interface NavbarProps {
  toggleSidebar: () => void;
  title: string; // Nueva prop para el título
}

export function Navbar({ toggleSidebar, title }: NavbarProps) {
  return (
    <header className="w-full flex justify-between items-center p-4 px-6 bg-sky-50 text-slate-800 border-b border-sky-700/40 relative md:px-12">
      <button onClick={toggleSidebar} className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-200">
        <Menu className="w-6 h-6" />
      </button>
      {/* Usamos la prop "title" para mostrar el título dinámico */}
      <h1 className="text-#0047ba md:text-3xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-4">
        <Settings className="w-6 h-6 cursor-pointer" />
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img src="/descarga.jpg" alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}