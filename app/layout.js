import "./globals.css";
import Header from "./components/Header";

export async function generateMetadata() {
  return {
    title: "Softsolution E.U. | Ingeniería y Tecnología",
    description:
      "Servicios profesionales en electricidad, telecomunicaciones, seguridad electrónica y desarrollo de software en Colombia. Estudio, suministro, instalación y mantenimiento.",
    keywords: [
      "ingeniería eléctrica",
      "telecomunicaciones",
      "seguridad electrónica",
      "desarrollo de software",
      "Softsolution",
      "Bucaramanga",
      "Colombia",
    ],
    openGraph: {
      title: "Softsolution E.U.",
      description:
        "Soluciones integrales en ingeniería, tecnología y software.",
      url: "https://softsolution.com.co",
      siteName: "Softsolution E.U.",
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Softsolution E.U.",
        },
      ],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
