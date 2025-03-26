import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { LucideIcon, Home, SquareStack, TicketCheck, UserSearch, Wrench, Power, Settings, Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Sidebar } from "~/components/sidebar";
import { Navbar } from "~/components/navbar";
import { getUserRole, removeToken } from "~/utils/auth"; // Importamos la validación

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const pageTitle = "Dashboard";
  const [tickets, setTickets] = useState([
    { id: 1, problema: "No prende", cliente: "Densua", asset: "Refrigerador", tecnico: "Alexis Perez", status: "Abierto", tipo: "Correctivo", fecha: "2021-12-08" },
    { id: 2, problema: "Pantalla rota", cliente: "Margarita", asset: "Laptop", tecnico: "Juan López", status: "En Proceso", tipo: "Preventivo", fecha: "2022-01-12" },
    { id: 3, problema: "No carga", cliente: "Carlos", asset: "Teléfono", tecnico: "Ana Sánchez", status: "Cerrado", tipo: "Correctivo", fecha: "2021-02-15" },
  ]);

  // 🚨 Proteger el acceso al dashboard 🚨
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      removeToken(); // Eliminar cualquier resto de sesión
      navigate("/login"); // Redirigir al login
    }
  }, []);

  const filteredTickets = tickets.filter(ticket =>
    ticket.problema.toLowerCase().includes(search.toLowerCase()) ||
    ticket.cliente.toLowerCase().includes(search.toLowerCase()) ||
    ticket.asset.toLowerCase().includes(search.toLowerCase()) ||
    ticket.tecnico.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    const dateA = new Date(a.fecha).getTime();
    const dateB = new Date(b.fecha).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  const toggleSortOrder = () => {
    setSortAsc(!sortAsc);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="w-screen h-screen flex bg-sky-50 relative">
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} title={pageTitle} />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Tickets" value={12} />
            <StatCard title="Clientes" value={128} />
            <StatCard title="Técnicos Disponibles" value={10} />
          </div>
          <div className="bg-white shadow-md rounded-3xl p-6 mt-6">
            <h2 className="text-xl font-semibold text-black mb-4">Tickets Recientes</h2>
            <div className="flex items-center mb-4 space-x-6">
              <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
                <Search className="w-5 h-5 text-black" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="ml-2 outline-none text-black bg-white"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                className="flex items-center bg-gray-300 text-black p-2 rounded-md space-x-2"
                onClick={toggleSortOrder}
              >
                {sortAsc ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                <span>{sortAsc ? 'Ascendente' : 'Descendente'}</span>
              </button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-black uppercase text-sm leading-normal">
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Problema</th>
                  <th className="py-3 px-6">Cliente</th>
                  <th className="py-3 px-6">Nombre Assets</th>
                  <th className="py-3 px-6">Nombre Técnico</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Tipo</th>
                  <th className="py-3 px-6">Fecha de Alta</th>
                </tr>
              </thead>
              <tbody>
                {sortedTickets.map(ticket => (
                  <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-blue-500">{ticket.id}</td>
                    <td className="py-3 px-6 text-black">{ticket.problema}</td>
                    <td className="py-3 px-6 text-black">{ticket.cliente}</td>
                    <td className="py-3 px-6 text-black">{ticket.asset}</td>
                    <td className="py-3 px-6 text-black">{ticket.tecnico}</td>
                    <td className="py-3 px-6 text-black">
                      <button className="px-2 py-1 rounded-md bg-green-500 text-white">
                        {ticket.status}
                      </button>
                    </td>
                    <td className="py-3 px-6 text-black">{ticket.tipo}</td>
                    <td className="py-3 px-6 text-black">{ticket.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6 flex items-center justify-between space-x-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-blue-500">{value}</p>
      </div>
    </div>
  );
}

