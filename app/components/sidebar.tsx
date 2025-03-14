import { LucideIcon, Home, SquareStack, TicketCheck, UserSearch, Wrench, Power, Settings, Menu } from "lucide-react";
import { useNavigate } from "@remix-run/react";
import { logout } from "~/utils/auth";

export function Sidebar({ sidebarVisible, toggleSidebar }: { sidebarVisible: boolean; toggleSidebar: () => void }) {
  const navigate = useNavigate();

  return (
    <aside
      onClick={toggleSidebar}
      className={`transition-all duration-300 fixed md:relative z-50 cursor-pointer ${sidebarVisible ? 'w-1/5' : 'w-16'} bg-primary flex flex-col items-center justify-between py-4 text-white h-full md:static`}
    >
      <div className="flex flex-col items-center w-full mt-8">
        <div className={`flex justify-center w-full transition-all duration-300 ${sidebarVisible ? 'h-32' : 'h-16'}`}>
          <img
            src={sidebarVisible ? "images/logos/Horizontal_white.png" : "images/logos/Simbolo_white.png"}
            alt="Logo"
            className={`transition-all duration-300 ${sidebarVisible ? 'h-32' : 'h-12'}`}
          />
        </div>
        <nav className="flex flex-col space-y-8 mt-8 p-6">
          <SidebarButton icon={Home} label="Dashboard" sidebarVisible={sidebarVisible} />
          <SidebarButton icon={SquareStack} label="Assets" sidebarVisible={sidebarVisible} />
          <SidebarButton icon={TicketCheck} label="Tickets" sidebarVisible={sidebarVisible} />
          <SidebarButton icon={UserSearch} label="Clientes" sidebarVisible={sidebarVisible} />
          <SidebarButton icon={Wrench} label="Técnicos" sidebarVisible={sidebarVisible} />
        </nav>
      </div>

      {/* Botón de Cerrar Sesión */}
      <div className={`flex justify-end transition-opacity duration-300 ${sidebarVisible ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={() => logout(navigate)}
          className="flex items-center space-x-2 text-white p-2 rounded-md hover:bg-white/10"
        >
          <Power className="w-5 h-5" />
          {sidebarVisible && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  );
}

function SidebarButton({ icon: Icon, label, sidebarVisible }: { icon: LucideIcon; label: string; sidebarVisible: boolean }) {
  return (
    <button className="w-full flex items-center space-x-2 text-lg md:text-xl text-white py-2 px-5 rounded-xl hover:bg-black/10">
      <Icon className="w-6 h-6" />
      {sidebarVisible && <span>{label}</span>}
    </button>
  );
}
