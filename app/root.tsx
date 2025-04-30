import {
  isRouteErrorResponse, // Importa la función para verificar si hay un error de ruta
  Links, // Importa el componente para manejar enlaces
  Meta, // Importa el componente para manejar metadatos
  Outlet, // Importa el componente Outlet para renderizar rutas anidadas
  Scripts, // Importa el componente para manejar scripts
  ScrollRestoration, // Importa el componente para restaurar el desplazamiento
} from "react-router"; // Importa desde react-router

import type { Route } from "./+types/root"; // Importa el tipo Route desde un archivo de tipos
import "./app.css"; // Importa el archivo de estilos CSS
import Navbar from "./components/navbar"; // Importa el componente Navbar

// Función que define los enlaces que se utilizarán en la aplicación
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" }, // Preconexión a Google Fonts
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous", // Preconexión a Google Fonts con CORS
  },
  {
    rel: "stylesheet", // Enlace a la hoja de estilos de Google Fonts
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Componente Layout que define la estructura HTML de la aplicación
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* Define el idioma del documento */}
      <head>
        <meta charSet="utf-8" /> {/* Define el conjunto de caracteres */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Configura la vista para dispositivos móviles */}
        <Meta /> {/* Renderiza los metadatos */}
        <Links /> {/* Renderiza los enlaces */}
      </head>
      <body>
        {children} {/* Renderiza los hijos del componente Layout */}
        <ScrollRestoration /> {/* Restaura el desplazamiento al navegar */}
        <Scripts /> {/* Renderiza los scripts */}
      </body>
    </html>
  );
}

// Componente principal de la aplicación
export default function App() {
  return (
    <>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <Outlet /> {/* Renderiza las rutas anidadas */}
    </>
  );
}

// Componente para manejar errores en la aplicación
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"; // Mensaje por defecto para errores
  let details = "An unexpected error occurred."; // Detalles del error
  let stack: string | undefined; // Variable para almacenar la pila de errores

  // Verifica si hay un error de ruta
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"; // Mensaje según el estado del error
    details =
      error.status === 404
        ? "The requested page could not be found." // Detalles para error 404
        : error.statusText || details; // Detalles del error
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message; // Mensaje del error
    stack = error.stack; // Pila del error
  }

  return (
    <main className="pt-16 p-4 container mx-auto"> {/* Contenedor principal para el error */}
      <h1>{message}</h1> {/* Muestra el mensaje de error */}
      <p>{details}</p> {/* Muestra los detalles del error */}
      {stack && ( // Si hay una pila de errores, la muestra
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code> {/* Muestra la pila de errores */}
        </pre>
      )}
    </main>
  );
}