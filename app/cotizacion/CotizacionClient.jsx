"use client";

import { useState } from "react";
import Link from "next/link";

export default function CotizacionClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/cotizacion", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* VOLVER */}
        <Link
          href="/"
          className="inline-block mb-8 text-sm text-gray-400 hover:text-red-500 transition"
        >
          ← Volver al inicio
        </Link>

        {/* TÍTULO */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Solicitar cotización
        </h1>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Completa el formulario y tu solicitud será enviada directamente
          a nuestro correo corporativo.
        </p>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-neutral-900/60 border border-gray-800 rounded-2xl p-8"
        >
          {/* NOMBRE */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* TELÉFONO */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              required
              value={form.telefono}
              onChange={handleChange}
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* SERVICIO */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Servicio de interés
            </label>
            <select
              name="servicio"
              required
              value={form.servicio}
              onChange={handleChange}
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 focus:outline-none focus:border-red-600"
            >
              <option value="">Selecciona un servicio</option>
              <option>Electricidad</option>
              <option>Telecomunicaciones y Redes</option>
              <option>Sistemas de Seguridad</option>
              <option>Desarrollo de Software</option>
              <option>Aires Acondicionados y Climatización</option>
            </select>
          </div>

          {/* MENSAJE */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Detalles del proyecto
            </label>
            <textarea
              name="mensaje"
              rows="4"
              required
              value={form.mensaje}
              onChange={handleChange}
              className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-700 py-4 rounded-xl font-semibold
            hover:bg-red-800 hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar cotización por correo"}
          </button>

          {/* MENSAJES */}
          {status === "success" && (
            <p className="text-green-500 text-sm text-center">
              ✅ Cotización enviada correctamente. Te contactaremos pronto.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              ❌ Ocurrió un error. Intenta nuevamente.
            </p>
          )}
        </form>

        {/* INFO */}
        <div className="mt-12 text-center space-y-2 text-gray-400 text-sm">
          <p>Atención personalizada • Respuesta rápida • Cotización sin costo</p>
          <p className="font-semibold">
            CEO DEYVIS FABIANY CRUZ CARVAJAL
          </p>
          <p>📧 softsolution.eu.software@gmail.com</p>
          <p>📍 Bucaramanga / Santander / Colombia</p>
          <p>🌐 https://softsolution-web.vercel.app/</p>
          <p>📞 +57 315 341 1850</p>
        </div>
      </div>
    </main>
  );
}
