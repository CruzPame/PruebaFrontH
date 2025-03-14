import { useState } from "react";
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Files, Plus, X, Pencil, Trash2 } from "lucide-react";
import { Sidebar } from "~/components/sidebar";
import { Navbar } from "~/components/navbar";

// Definimos una interfaz para los datos del cliente
interface Cliente {
  id?: number;
  nombre: string;
  telefono: string;
  correo: string;
  empresa: string;
  direccion: string;
  ticketsActivos: string;
  totalTickets: string;
}

export default function ClientesLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [isAddingClient, setIsAddingClient] = useState(false);

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Número de clientes por página

  // Datos de ejemplo para la tabla de clientes
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "123456789",
      correo: "juan@example.com",
      empresa: "Empresa A",
      direccion: "Apaxco, Estado de México",
      ticketsActivos: "12",
      totalTickets: "62",
    },
    {
      id: 2,
      nombre: "María López",
      telefono: "987654321",
      correo: "maria@example.com",
      empresa: "Empresa B",
      direccion: "Santiago de Querétaro",
      ticketsActivos: "53",
      totalTickets: "351",
    },
    {
      id: 3,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "41",
      totalTickets: "214",
    },
    {
      id: 4,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "51",
      totalTickets: "214",
    },
    {
      id: 5,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 6,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 7,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 8,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 9,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 10,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 11,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 12,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },
    {
      id: 13,
      nombre: "Carlos Ramírez",
      telefono: "555555555",
      correo: "carlos@example.com",
      empresa: "Empresa C",
      direccion: "Michoacán de Ocampo",
      ticketsActivos: "31",
      totalTickets: "214",
    },

    // Agrega más clientes si es necesario para probar la paginación
  ]);

  // Función para copiar el correo al portapapeles
  const copyToClipboard = (correo: string) => {
    navigator.clipboard.writeText(correo).then(() => {
      alert(`Correo copiado: ${correo}`);
    }).catch((err) => {
      console.error("Error al copiar el correo:", err);
    });
  };

  // Función para eliminar un cliente
  const handleDeleteClient = (id: number) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  // Filtrar clientes según la búsqueda
  const filteredClientes = clientes.filter((cliente) =>
    cliente.id.toString().includes(search) ||
    cliente.nombre.toLowerCase().includes(search.toLowerCase()) ||
    cliente.empresa.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar clientes por ID
  const sortedClientes = [...filteredClientes].sort((a, b) =>
    sortAsc ? a.id! - b.id! : b.id! - a.id!
  );

  // Lógica de paginación
  const totalPages = Math.max(Math.ceil(sortedClientes.length / itemsPerPage), 1); // Total de páginas
  const currentClientes = sortedClientes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambiar a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Cambiar a la página anterior
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Alternar orden ascendente/descendente
  const toggleSortOrder = () => {
    setSortAsc(!sortAsc);
  };

  // Alternar la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Función para agregar un nuevo cliente
  const handleAddClient = (newClientData: Cliente) => {
    const newClient = {
      id: clientes.length + 1,
      ...newClientData,
    };
    setClientes([...clientes, newClient]);
    setIsAddingClient(false);
  };

  return (
    <div className="w-screen h-screen flex bg-sky-50">
      {/* Sidebar */}
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Contenido principal */}
      <main className="flex flex-col h-screen w-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} title="Clientes" />

        {/* Contenido principal */}
        <div className="flex h-full p-4 md:p-6 overflow-auto">
          {/* Tabla */}
          <div className="flex flex-col justify-between bg-white h-full w-full shadow-md rounded-3xl p-6 overflow-x-auto">
            {/* Encabezado de la tabla */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-4 select-none">
                <div>
                  <h1 className="text-2xl font-bold text-black">Clientes</h1>
                  <p className="text-sm text-blue-500">Gestión de clientes</p>
                </div>

                {/* Barra de búsqueda y botón de ordenar */}
                <div className="flex space-x-4">
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
                    className="h-10 w-10 flex items-center bg-slate-200 text-black p-2 rounded-full space-x-2"
                    onClick={toggleSortOrder}
                  >
                    {sortAsc ? <ChevronDown className="w-6 h-5" /> : <ChevronUp className="w-6 h-5" />}
                  </button>
                  {/* Botón para agregar un nuevo cliente */}
                  <button
                    className="h-10 w-10 flex items-center bg-primary text-black p-2 rounded-full space-x-2"
                    onClick={() => setIsAddingClient(true)}
                  >
                    <Plus className="w-6 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Tabla de clientes */}
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-black uppercase text-sm leading-normal">
                    <th className="py-3 px-6">ID</th>
                    <th className="py-3 px-6">Cliente</th>
                    <th className="py-3 px-6">Teléfono</th>
                    <th className="py-3 px-6">Correo</th>
                    <th className="py-3 px-6">Dirección</th>
                    <th className="py-3 px-6">Tickets Activos</th>
                    <th className="py-3 px-6">Total de Tickets</th>
                    <th className="py-3 px-6">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentClientes.map((cliente) => (
                    <tr key={cliente.id} className="border-b border-gray-200 hover:bg-sky-50">
                      <td className="py-3 px-6 text-blue-500">{cliente.id}</td>
                      <td className="py-3 px-6 text-black">{cliente.nombre}</td>
                      <td className="py-3 px-6 text-black">{cliente.telefono}</td>
                      <td className="py-3 px-6 flex items-center space-x-2">
                        <div className="flex-grow truncate max-w-[8rem] text-black">{cliente.correo}</div>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => copyToClipboard(cliente.correo)}
                        >
                          <Files className="w-5 h-5" />
                        </button>
                      </td>
                      <td className="py-3 px-6 text-black">{cliente.direccion}</td>
                      <td className="py-3 px-6 text-black">{cliente.ticketsActivos}</td>
                      <td className="py-3 px-6 text-black">{cliente.totalTickets}</td>
                      <td className="py-3 px-6 text-center">
                        <button
                          onClick={() => setSelectedCliente(cliente)}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          <Pencil className="w-5 h-5 mr-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteClient(cliente.id!)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Controles de paginación */}
            <div className="flex justify-center md:justify-end mt-4 space-x-2">
              {/* Botón "Anterior" */}
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Botones de paginación numéricos */}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Botón "Siguiente" */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal para agregar/editar cliente */}
        {(selectedCliente || isAddingClient) && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-semibold text-black">
                  {isAddingClient ? "Agregar Cliente" : "Editar Cliente"}
                </h3>
                <button
                  onClick={() => {
                    setSelectedCliente(null);
                    setIsAddingClient(false);
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const rawFormData = Object.fromEntries(formData.entries());

                  const newClientData: Cliente = {
                    nombre: String(rawFormData.nombre),
                    telefono: String(rawFormData.telefono),
                    correo: String(rawFormData.correo),
                    empresa: String(rawFormData.empresa),
                    direccion: String(rawFormData.direccion),
                    ticketsActivos: String(rawFormData.ticketsActivos),
                    totalTickets: String(rawFormData.totalTickets),
                  };

                  if (isAddingClient) {
                    handleAddClient(newClientData);
                  } else {
                    // Lógica para editar cliente
                    setSelectedCliente(null);
                  }
                }}
              >
                {[
                  { label: "Nombre", name: "nombre" },
                  { label: "Teléfono", name: "telefono" },
                  { label: "Correo", name: "correo" },
                  { label: "Empresa", name: "empresa" },
                  { label: "Dirección", name: "direccion" },
                  { label: "Tickets Activos", name: "ticketsActivos" },
                  { label: "Total Tickets", name: "totalTickets" },
                ].map(({ label, name }) => (
                  <div key={name} className="mb-3">
                    <label className="block text-sm text-black capitalize">{label}</label>
                    <input
                      type="text"
                      name={name}
                      defaultValue={selectedCliente ? selectedCliente[name as keyof Cliente] || "" : ""}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-3">
                  {isAddingClient ? "Agregar" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}