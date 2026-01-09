"use client";

import Image from "next/image";
import { Zap, Network, ShieldCheck, Code } from "lucide-react";
import useInView from "./hooks/useInView";

export default function Home() {
  const [heroRef, heroVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [whyRef, whyVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section
        ref={heroRef}
        id="inicio"
        className={`scroll-mt-28 min-h-screen flex flex-col justify-center text-center px-4 reveal ${
          heroVisible ? "reveal-visible" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/uno.png"
              alt="Logo corporativo de Softsolution E.U."
              width={200}
              height={200}
              priority
              sizes="(max-width: 768px) 160px, 200px"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide mb-6">
            Softsolution E.U.
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ingeniería, Tecnología y Soluciones Integrales
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            En <strong className="text-white">Softsolution E.U.</strong> ofrecemos
            servicios profesionales en <strong>electricidad residencial, comercial
            e industrial</strong>, <strong>telecomunicaciones y redes</strong>,
            <strong> sistemas de seguridad electrónica</strong> y
            <strong> desarrollo de software</strong>, abarcando desde el
            <strong> estudio técnico y suministro</strong> hasta la
            <strong> instalación, puesta en marcha y mantenimiento integral</strong>.
          </p>

          <a
            href="/cotizacion"
            className="inline-block px-10 py-4 bg-red-700 font-semibold rounded-xl
            hover:bg-red-800 hover:scale-105 transition-transform duration-300"
          >
            Solicitar cotización
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        ref={servicesRef}
        id="servicios"
        className={`scroll-mt-28 w-full bg-black py-14 px-6 reveal ${
          servicesVisible ? "reveal-visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            Nuestros Servicios
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Electricidad",
                text: "Soluciones eléctricas residenciales, comerciales e industriales: estudios técnicos, suministro de materiales, instalación, adecuaciones, puesta en marcha y mantenimiento preventivo y correctivo."
              },
              {
                icon: Network,
                title: "Telecomunicaciones y Redes",
                text: "Diseño e implementación de redes LAN/WAN, cableado estructurado, fibra óptica, enlaces satelitales, transmisión de datos y certificación de infraestructura."
              },
              {
                icon: ShieldCheck,
                title: "Sistemas de Seguridad",
                text: "Sistemas de CCTV, monitoreo, control de acceso y alarmas, desde la cotización y suministro hasta la instalación y mantenimiento."
              },
              {
                icon: Code,
                title: "Desarrollo de Software",
                text: "Creación de páginas web y soluciones de software a medida, desde el análisis y diseño hasta la implementación, puesta en marcha y soporte continuo."
              }
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-neutral-900/60 border border-gray-800 rounded-xl p-6 card-hover"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <Icon className="text-red-600 w-6 h-6" />
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify hyphens-auto">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section
        ref={whyRef}
        id="porque"
        className={`scroll-mt-28 w-full bg-black py-14 px-6 reveal ${
          whyVisible ? "reveal-visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            ¿Por qué elegir Softsolution E.U.?
          </h2>

          <div className="grid gap-10 sm:grid-cols-2">
            {[
              ["Experiencia técnica integral", "Contamos con experiencia en proyectos de ingeniería eléctrica, telecomunicaciones, seguridad electrónica y desarrollo de software."],
              ["Soluciones a la medida", "Analizamos cada proyecto de forma personalizada, ajustándonos a los requerimientos técnicos y presupuestales."],
              ["Cobertura integral", "Acompañamos todo el proceso: estudio, suministro, instalación, puesta en marcha y mantenimiento."],
              ["Compromiso y cumplimiento", "Trabajamos bajo altos estándares de calidad, seguridad y cumplimiento."]
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-justify hyphens-auto">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        ref={contactRef}
        id="contacto"
        className={`scroll-mt-28 w-full bg-linear-to-b from-black via-neutral-900 to-black py-20 px-6 reveal ${
          contactVisible ? "reveal-visible" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded-full" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            ¿Listo para iniciar tu proyecto?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            En <strong className="text-white">Softsolution E.U.</strong> estamos listos
            para acompañarte desde la idea hasta la ejecución.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <a
            href="/cotizacion"
            className="inline-block px-10 py-4 bg-red-700 font-semibold rounded-xl
            hover:bg-red-800 hover:scale-105 transition-transform duration-300"
          >
              Solicitar cotización
            </a>

            <a
              href="https://wa.me/573153411850?text=Hola%20Softsolution%20E.U.%20quiero%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-gray-700 font-semibold
              rounded-xl hover:border-red-600 hover:scale-105 transition-transform duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mx-auto max-w-md text-center">
            <p className="text-gray-500 text-sm mb-4">
              Atención personalizada • Respuesta rápida • Cotización sin costo
            </p>
<p className="text-gray-500 text-sm mb-4">
              CEO DEYVIS FABIANY CRUZ CARVAJAL
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>📧 softsolution.eu.software@gmail.com</p>
              <p>📍 Bucaramanga / Santander / Colombia</p>
              <p>🌐 https://softsolution-web.vercel.app/</p>
              <p>📞 +57 315 341 1850</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
