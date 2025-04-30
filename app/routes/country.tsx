import type { Route } from "./+types/country"; // Importa el tipo Route desde un archivo de tipos

// Función que carga los datos del país desde una API
export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName; // Obtiene el nombre del país de los parámetros

  // Realiza una solicitud a la API de Rest Countries para obtener información sobre el país
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json(); // Convierte la respuesta en formato JSON
  return data; // Devuelve los datos del país
}

// Función que define los metadatos de la página
export function meta({ params }: Route.MetaArgs) {
  const countryName = params.countryName; // Obtiene el nombre del país de los parámetros
  return [
    { title: `Datos sobre: ${countryName}` }, // Define el título de la página
    {
      name: "¡Consulta los datos del país!", // Define un nombre para los metadatos
      content: `Todo sobre ${countryName}`, // Define el contenido de los metadatos
    },
  ];
}

// Componente principal que muestra la información del país
export default function Country({ loaderData }: Route.ComponentProps) {
  // Extrae la información del país de los datos cargados
  const country = {
    name: loaderData[0]?.name?.common || "N/A", // Nombre común del país
    officialName: loaderData[0]?.name?.official || "N/A", // Nombre oficial del país
    region: loaderData[0]?.region || "N/A", // Región del país
    subregion: loaderData[0]?.subregion || "N/A", // Subregión del país
    capital: loaderData[0]?.capital || "N/A", // Capital del país
    population: loaderData[0]?.population || "N/A", // Población del país
    flagUrl: loaderData[0]?.flags?.png || "", // URL de la bandera del país
  };
  
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Contenedor principal con estilos */}
      <div className="flex flex-col gap-4"> {/* Columna para la información del país */}
        <h2 className="text-3xl font-bold text-gray-900">{country.name}</h2> {/* Nombre del país */}
        <div className="space-y-2 text-gray-700"> {/* Espaciado para la información */}
          <p>
            <span className="font-semibold">Nombre Oficial:</span>{" "}
            {country.officialName} {/* Nombre oficial del país */}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital} {/* Capital del país */}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region} {/* Región del país */}
          </p>
          <p>
            <span className="font-semibold">Sub-Region:</span>{" "}
            {country.subregion} {/* Subregión del país */}
          </p>
          <p>
            <span className="font-semibold">Poblacion:</span>{" "}
            {country.population.toLocaleString()} {/* Población del país, formateada */}
          </p>
        </div>
      </div>
      {country.flagUrl && ( // Si hay una URL de la bandera, se muestra
        <div className="flex justify-center items-center"> {/* Contenedor para la bandera */}
          <img
            src={country.flagUrl} // URL de la bandera
            className="w-56 h-auto border rounded shadow-lg" // Estilos para la imagen de la bandera
          />
        </div>
      )}
    </div>
  );
}