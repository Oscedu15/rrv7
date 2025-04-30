import {
  type RouteConfig, // Importa el tipo RouteConfig para definir la estructura de las rutas
  index, // Importa la función index para definir rutas de índice
  prefix, // Importa la función prefix para agrupar rutas bajo un prefijo
  route, // Importa la función route para definir rutas específicas
} from "@react-router/dev/routes"; // Importa desde el paquete de rutas de React Router

export default [
  index("routes/home.tsx"), // Define la ruta de índice que apunta a "routes/home.tsx"

  route("about", "routes/about.tsx"), // Define una ruta llamada "about" que apunta a "routes/about.tsx"

  ...prefix("countries", [
    // Agrupa las siguientes rutas bajo el prefijo "countries"
    index("routes/countries.tsx"), // Define la ruta de índice que apunta a "routes/countries.tsx"
    route(":countryName", "routes/country.tsx"), // Define una ruta dinámica que acepta un nombre de país como parámetro y apunta a "routes/country.tsx"
  ]),
] satisfies RouteConfig; // Asegura que el arreglo cumple con la estructura de RouteConfig
