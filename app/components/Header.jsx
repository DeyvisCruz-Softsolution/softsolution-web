"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sections = ["inicio", "servicios", "porque", "contacto"];
  const active = useActiveSection(sections);

  const linkClass = (id) =>
    `transition-colors duration-300 ${
      active === id
        ? "text-red-600 font-semibold"
        : "text-gray-300 hover:text-red-500"
    }`;

  const getHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image src="/uno.png" alt="Softsolution E.U." width={40} height={40} />
          <span className="font-bold tracking-wide">Softsolution E.U.</span>
        </div>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {sections.map((id) => (
            <a
              key={id}
              href={getHref(id)}
              className={linkClass(id)}
            >
              {id === "porque"
                ? "¿Por qué elegirnos?"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="/cotizacion"
          className="hidden md:inline-block px-5 py-2 bg-red-700 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Cotizar
        </a>

        {/* BOTÓN MÓVIL */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6 text-sm">
          {sections.map((id) => (
            <a
              key={id}
              href={getHref(id)}
              onClick={() => setOpen(false)}
              className={`block ${linkClass(id)}`}
            >
              {id === "porque"
                ? "¿Por qué elegirnos?"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <a
            href="/cotizacion"
            className="block text-center mt-4 px-6 py-3 bg-red-700 rounded-xl font-semibold hover:bg-red-800 transition"
          >
            Solicitar cotización
          </a>
        </div>
      )}
    </header>
  );
}
