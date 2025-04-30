import { Link } from "react-router"; // Importa el componente Link de react-router para la navegación
import type { Route } from "./+types/countries"; // Importa el tipo Route desde un archivo de tipos
import { useState } from "react"; // Importa el hook useState de React para manejar el estado

// Función que define los metadatos de la página
export function meta({}: Route.MetaArgs) {
  return [
    { title: "REST Explorer | Paises" }, // Define el título de la página
    {
      name: "¡Consulta los datos del país!", // Define un nombre para los metadatos
      content: "Listado de Paises RESTExplorer.", // Define el contenido de los metadatos
    },
  ];
}

// Función que carga todos los países desde la API
export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all"); // Realiza una solicitud a la API para obtener todos los países
  const data = await res.json(); // Convierte la respuesta en formato JSON
  return data; // Devuelve los datos de los países
}

// Componente principal que muestra la lista de países
export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>(""); // Estado para almacenar el texto de búsqueda
  const [region, setRegion] = useState<string>(""); // Estado para almacenar la región seleccionada

  // Filtra los países según la búsqueda y la región seleccionada
  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase(); // Verifica si el país coincide con la región seleccionada
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase()); // Verifica si el país coincide con el texto de búsqueda
    return matchesSearch && matchesRegion; // Devuelve true si ambos criterios coinciden
  });

  return (
    <div className="p-6">
      {" "}
      {/* Contenedor principal con estilos */}
      <h2 className="text-2xl text-center md:text-left font-bold mb-6 text-gray-900">
        {" "}
        {/* Título de la sección */}
        Países
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {" "}
        {/* Contenedor para los filtros */}
        <input
          type="text" // Campo de entrada para buscar por nombre
          placeholder="Buscar por nombre..."
          value={search} // Valor del campo de búsqueda
          onChange={(e) => setSearch(e.target.value)} // Actualiza el estado de búsqueda al cambiar el valor
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500" // Estilos del campo de búsqueda
        />
        <select
          value={region} // Valor del selector de región
          onChange={(e) => setRegion(e.target.value)} // Actualiza el estado de región al cambiar el valor
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500" // Estilos del selector de región
        >
          <option value="">Todas las Regiones</option>{" "}
          {/* Opción por defecto */}
          <option value="africa">Africa</option> {/* Opción para África */}
          <option value="americas">America</option> {/* Opción para América */}
          <option value="asia">Asia</option> {/* Opción para Asia */}
          <option value="europe">Europa</option> {/* Opción para Europa */}
          <option value="oceania">Oceania</option> {/* Opción para Oceanía */}
        </select>
      </div>
      {filteredCountries.length === 0 ? ( // Si no hay países filtrados
        <div> Ningún país coincide con tus filtros. </div> // Mensaje de no coincidencia
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {" "}
          {/* Lista de países */}
          {filteredCountries.map(
            (
              country: any // Mapea los países filtrados
            ) => (
              <li
                key={country.cca3} // Clave única para cada país
                className="bg-white cursor-pointer border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition text-center md:text-left" // Estilos para cada elemento de la lista
              >
                <Link
                  to={`/countries/${country.name.common}`} // Enlace a la página del país específico
                  className="text-indigo-600 hover:underline text-lg font-semibold" // Estilos para el enlace
                >
                  {country.name.common}
                </Link>
                <div className="text-gray-600 text-sm mt-1">
               {/* // Información adicional del país  */}
                Región: {
                    country.region
                  }  
                  <br /> Población: &nbsp;
                   {country.population.toLocaleString()}
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
