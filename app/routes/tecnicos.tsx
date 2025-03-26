import { useState } from "react";
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Plus, X, Pencil, Trash2 } from "lucide-react";
import { Sidebar } from "~/components/sidebar";
import { Navbar } from "~/components/navbar";

// Definimos una interfaz para los datos del cliente
interface Tecnico {
  id?: number;
  nombreCuadrilla: string;
  correo: string;
  telefono: number;
  ticketAsignado: string;
  disponibilidad: string;
}

export default function DashboardLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la paginación
  const [isAddingTecnico, setIsAddingTecnico] = useState(false); // Estado para agregar técnico
  const [selectedTecnico, setSelectedTecnico] = useState<any>(null); // Estado para editar técnico
  const itemsPerPage = 5; // Número de técnicos por página
  const pageTitle = "Técnicos";

  // Datos de ejemplo para la tabla
  const [tecnicos, setTecnicos] = useState([
    {
      id: 1,
      nombreCuadrilla: "Cuadrilla A",
      correo: "cuadrillaA@example.com",
      telefono: "123456789",
      ticketAsignado: "001",
      disponibilidad: "Disponible"
    },
    {
      id: 2,
      nombreCuadrilla: "Cuadrilla B",
      correo: "cuadrillaB@example.com",
      telefono: "987654321",
      ticketAsignado: "002",
      disponibilidad: "Ocupado"
    },
    {
      id: 3,
      nombreCuadrilla: "Cuadrilla C",
      correo: "cuadrillaC@example.com",
      telefono: "555555555",
      ticketAsignado: "003",
      disponibilidad: "De baja"
    },
    {
      id: 4,
      nombreCuadrilla: "Cuadrilla D",
      correo: "cuadrillaD@example.com",
      telefono: "5457457323",
      ticketAsignado: "035",
      disponibilidad: "En descanso"
    },
    {
      id: 5,
      nombreCuadrilla: "Cuadrilla A",
      correo: "cuadrillaA@example.com",
      telefono: "123456789",
      ticketAsignado: "001",
      disponibilidad: "Disponible"
    },
    {
      id: 6,
      nombreCuadrilla: "Cuadrilla B",
      correo: "cuadrillaB@example.com",
      telefono: "987654321",
      ticketAsignado: "002",
      disponibilidad: "Ocupado"
    },
    {
      id: 7,
      nombreCuadrilla: "Cuadrilla C",
      correo: "cuadrillaC@example.com",
      telefono: "555555555",
      ticketAsignado: "003",
      disponibilidad: "De baja"
    },
    {
      id: 8,
      nombreCuadrilla: "Cuadrilla D",
      correo: "cuadrillaD@example.com",
      telefono: "5457457323",
      ticketAsignado: "035",
      disponibilidad: "En descanso"
    },
    {
      id: 9,
      nombreCuadrilla: "Cuadrilla A",
      correo: "cuadrillaA@example.com",
      telefono: "123456789",
      ticketAsignado: "001",
      disponibilidad: "Disponible"
    },
    {
      id: 10,
      nombreCuadrilla: "Cuadrilla B",
      correo: "cuadrillaB@example.com",
      telefono: "987654321",
      ticketAsignado: "002",
      disponibilidad: "Ocupado"
    },
    {
      id: 11,
      nombreCuadrilla: "Cuadrilla C",
      correo: "cuadrillaC@example.com",
      telefono: "555555555",
      ticketAsignado: "003",
      disponibilidad: "De baja"
    },
    {
      id: 12,
      nombreCuadrilla: "Cuadrilla D",
      correo: "cuadrillaD@example.com",
      telefono: "5457457323",
      ticketAsignado: "035",
      disponibilidad: "En descanso"
    },
  ]);

  // Filtrar técnicos según la búsqueda
  const filteredTecnicos = tecnicos.filter((tecnico) =>
    tecnico.id.toString().includes(search) ||
    tecnico.nombreCuadrilla.toLowerCase().includes(search.toLowerCase()) ||
    tecnico.ticketAsignado.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar técnicos por ID
  const sortedTecnicos = [...filteredTecnicos].sort((a, b) =>
    sortAsc ? a.id - b.id : b.id - a.id
  );

  // Lógica de paginación
  const totalPages = Math.max(Math.ceil(sortedTecnicos.length / itemsPerPage), 1);
  const currentTecnicos = sortedTecnicos.slice(
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

  // Alterna la visibilidad de la barra lateral
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Función para obtener el color de fondo según la disponibilidad
  const getAvailabilityColor = (disponibilidad: string) => {
    switch (disponibilidad) {
      case "Disponible":
        return "bg-cyan-600";
      case "Ocupado":
        return "bg-blue-700";
      case "De baja":
        return "bg-slate-700";
      case "En descanso":
        return "bg-blue-400";
      default:
        return "bg-gray-500";
    }
  };

  // Función para agregar o editar un técnico
  const handleAddOrEditTecnico = (newTecnicoData: any) => {
    if (isAddingTecnico) {
      // Agregar nuevo técnico
      const newTecnico = {
        id: tecnicos.length + 1, // Generar un nuevo ID
        ...newTecnicoData,
        ticketAsignado: "N/A", // Valor por defecto
        disponibilidad: "Disponible", // Valor por defecto
      };
      setTecnicos([...tecnicos, newTecnico]);
    } else {
      // Editar técnico existente
      setTecnicos((prevTecnicos) =>
        prevTecnicos.map((tecnico) =>
          tecnico.id === selectedTecnico.id ? { ...tecnico, ...newTecnicoData } : tecnico
        )
      );
    }
    setIsAddingTecnico(false);
    setSelectedTecnico(null);
  };

  // Función para eliminar un técnico
  const handleDeleteTecnico = (id: number) => {
    setTecnicos(tecnicos.filter((tecnico) => tecnico.id !== id));
  };

  return (
    <div className="w-screen h-screen flex bg-sky-50">
      {/* Sidebar */}
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Contenido principal */}
      <main className="flex flex-col h-screen w-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} title={pageTitle} />

        {/* Contenido principal */}
        <div className="flex h-full p-4 md:p-6 overflow-auto">
          {/* Tabla */}
          <div className="flex flex-col justify-between bg-white h-full w-full shadow-md rounded-3xl p-6 overflow-x-auto">
            <div className="flex flex-col">
              {/* Encabezado de la tabla */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-black">Técnicos</h1>
                  <p className="text-sm text-blue-500">Asignar técnicos</p>
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
                  {/* Botón para agregar un nuevo técnico */}
                  <button
                    className="h-10 w-10 flex items-center bg-primary text-black p-2 rounded-full space-x-2"
                    onClick={() => setIsAddingTecnico(true)}
                  >
                    <Plus className="w-6 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Tabla de técnicos */}
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-black uppercase text-sm leading-normal">
                    <th className="py-3 px-6">ID</th>
                    <th className="py-3 px-6">Nombre Cuadrilla</th>
                    <th className="py-3 px-6">Teléfono</th>
                    <th className="py-3 px-6">Correo</th>
                    <th className="py-3 px-6">Ticket Asignado</th>
                    <th className="py-3 px-6">Disponibilidad</th>
                    <th className="py-3 px-6">Acciones</th> {/* Nueva columna de acciones */}
                  </tr>
                </thead>
                <tbody>
                  {currentTecnicos.map((tecnico) => (
                    <tr key={tecnico.id} className="border-b border-gray-200 hover:bg-blue-50">
                      <td className="py-3 px-6 text-blue-500">{tecnico.id}</td>
                      <td className="py-3 px-6 text-black">{tecnico.nombreCuadrilla}</td>
                      <td className="py-3 px-6 text-black">{tecnico.telefono}</td>
                      <td className="py-3 px-6 text-black">{tecnico.correo}</td>
                      <td className="py-3 px-6 text-black">{"Ticket " + tecnico.ticketAsignado}</td>
                      <td className="py-3 px-6">
                        <div
                          className={`h-full w-fit px-2 py-1 rounded-md text-white cursor-default ${getAvailabilityColor(tecnico.disponibilidad)}`}
                        >
                          {tecnico.disponibilidad}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {/* Botón para editar técnico */}
                        <button
                          onClick={() => setSelectedTecnico(tecnico)}
                          className="text-blue-500 hover:text-blue-700 mr-3"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        {/* Botón para eliminar técnico */}
                        <button
                          onClick={() => handleDeleteTecnico(tecnico.id)}
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
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}
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

        {/* Modal para agregar/editar técnico */}
        {(selectedTecnico || isAddingTecnico) && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h3 className="text-lg font-semibold text-black">
                  {isAddingTecnico ? "Agregar Técnico" : "Editar Técnico"}
                </h3>
                <button
                  onClick={() => {
                    setSelectedTecnico(null);
                    setIsAddingTecnico(false);
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

                  const newTecnicoData = {
                    nombreCuadrilla: String(rawFormData.nombreCuadrilla),
                    correo: String(rawFormData.correo),
                    telefono: String(rawFormData.telefono),
                  };

                  handleAddOrEditTecnico(newTecnicoData);
                }}
              >
                {[
                  { label: "Nombre Cuadrilla", name: "nombreCuadrilla" },
                  { label: "Correo", name: "correo" },
                  { label: "Teléfono", name: "telefono" },
                ].map(({ label, name }) => (
                  <div key={name} className="mb-3">
                    <label className="block text-sm text-black capitalize">{label}</label>
                    <input
                      type="text"
                      name={name}
                      defaultValue={selectedTecnico ? selectedTecnico[name] || "" : ""}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-3">
                  {isAddingTecnico ? "Agregar" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}