import { Link } from "react-router"; // Importa el componente Link de react-router para la navegación
import type { Route } from "./+types/home"; // Importa el tipo Route desde un archivo de tipos

// Función que define los metadatos de la página
export function meta({}: Route.MetaArgs) {
  return [
    { title: "REST Explorer | Inicio" }, // Define el título de la página
    {
      name: "¡Consulta los datos del país!", // Define un nombre para los metadatos
      content: "Bienvenido a RESTExplorer.", // Define el contenido de los metadatos
    },
  ];
}

// Componente principal de la página de inicio
export default function Home() {
  return (
    <div className="px-2 py-8 md:py-24 bg-white md:px-0"> {/* Contenedor principal con estilos */}
      <div className="container items-center max-w-6xl mx-auto xl:px-5"> {/* Contenedor centrado */}
        <div className="flex flex-wrap items-center sm:-mx-3"> {/* Flexbox para el diseño responsivo */}
          <div className="w-full md:w-1/2 md:px-3"> {/* Columna para el texto */}
            <div className="space-y-6 text-center sm:max-w-md lg:max-w-lg"> {/* Espaciado y alineación del texto */}
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"> {/* Título principal */}
                <span className="block xl:inline">
                  Explora Países con&nbsp; {/* Texto estático */}
                </span>
                <span className="block text-indigo-600 xl:inline">
                  Real-Time Data {/* Texto destacado */}
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl"> {/* Descripción */}
                Descubra detalles sobre cada país del mundo. ¡De las capitales a
                las regiones!
              </p>
              <div className="flex space-y-4 md:space-y-0 justify-evenly flex-col sm:flex-row"> {/* Botones de acción */}
                <Link
                  to="/countries" // Enlace a la página de países
                  className="flex items-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700 w-[75%] justify-center mx-auto md:w-auto md:mx-0"
                >
                  Explorar Ahora {/* Texto del botón */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg" // Icono SVG para el botón
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line> {/* Línea horizontal */}
                    <polyline points="12 5 19 12 12 19"></polyline> {/* Flecha */}
                  </svg>
                </Link>
                <Link
                  to="/about" // Enlace a la página "Sobre"
                  className="flex items-center px-6 py-2 text-lg text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-600 w-[75%] justify-center mx-auto md:mx-0 md:w-auto"
                >
                  Saber Mas {/* Texto del botón */}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:w-1/2"> {/* Columna para la imagen */}
            <div className="overflow-hidden rounded-md shadow-xl"> {/* Contenedor de la imagen */}
              <img
                src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp" // URL de la imagen
                alt="Explore countries" // Texto alternativo para la imagen
                className="w-full h-auto" // Estilos para la imagen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}