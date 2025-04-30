import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "REST Explorer | Sobre Nosotros" },
    { name: "¡Consulta los datos del país!", content: "Sobre RESTExplorer." },
  ];
}

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container text-center mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold capitalize text-gray-900 mb-6 text-center">
          Acerca de este sitio web
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          Este sitio web utiliza la
          <span className="font-semibold text-indigo-600">
            &nbsp;REST Countries API
          </span>{" "}
          para mostrar información completa sobre países de todo el mundo.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Explora nuestros datos para conocer nombres de países, capitales,
          regiones, poblaciones, banderas y mucho más. Tanto si sientes
          curiosidad por un país en particular como si buscas información sobre
          regiones del mundo, nuestro explorador interactivo te lo pone fácil.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nuestro objetivo es construir una aplicación web totalmente receptiva
          y moderna utilizando las últimas tecnologías, incluido React Router v7
          para un enrutamiento perfecto y Tailwind CSS para una interfaz de
          usuario hermosa y receptiva.
        </p>
      </div>
    </div>
  );
}
