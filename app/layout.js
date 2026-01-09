import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://softsolution-web.vercel.app"),
  title: {
    default: "Softsolution E.U. | Ingeniería y Tecnología",
    template: "%s | Softsolution E.U.",
  },
  description:
    "Servicios profesionales en electricidad, telecomunicaciones, seguridad electrónica y desarrollo de software en Colombia.",
  keywords: [
    "ingeniería eléctrica",
    "telecomunicaciones",
    "seguridad electrónica",
    "desarrollo de software",
    "Softsolution",
    "Bucaramanga",
    "Colombia",
  ],
  authors: [{ name: "Softsolution E.U." }],
  creator: "Softsolution E.U.",
  publisher: "Softsolution E.U.",

  // ✅ AQUI VA LA VERIFICACIÓN DE GOOGLE
  verification: {
    google: "41386a3b4d9eaa7b",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Softsolution E.U. | Ingeniería y Tecnología",
    description:
      "Soluciones integrales en ingeniería, tecnología y software a la medida.",
    url: "https://softsolution-web.vercel.app",
    siteName: "Softsolution E.U.",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Softsolution E.U. Ingeniería y Tecnología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softsolution E.U. | Ingeniería y Tecnología",
    description:
      "Soluciones profesionales en ingeniería eléctrica, telecomunicaciones y software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <Header />
        <main className="pt-18">{children}</main>
      </body>
    </html>
  );
}
