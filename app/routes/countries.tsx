import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center md:text-left font-bold mb-6 text-gray-900">Países</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        >
          <option value="">Todas las Regiones</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <div> Ningún país coincide con tus filtros. </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCountries.map((country: any) => (
            <li
              key={country.cca3}
              className="bg-white cursor-pointer border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition text-center md:text-left"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-indigo-600 hover:underline text-lg font-semibold"
              >
                {country.name.common}
              </Link>
              <div className="text-gray-600 text-sm mt-1">
                Región: {country.region} <br />
                Población: {country.population.toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}