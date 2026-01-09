import CotizacionClient from "./CotizacionClient";

export const metadata = {
  title: "Cotización de servicios tecnológicos | Softsolution E.U.",
  description:
    "Solicita tu cotización sin costo en Softsolution E.U. para servicios de electricidad, telecomunicaciones, seguridad electrónica y desarrollo de software en Colombia.",
  keywords: [
    "cotización ingeniería",
    "cotización electricidad",
    "telecomunicaciones Colombia",
    "seguridad electrónica",
    "desarrollo de software",
    "Softsolution",
  ],
  openGraph: {
    title: "Cotización | Softsolution E.U.",
    description:
      "Solicita tu cotización profesional en ingeniería y tecnología.",
    url: "https://softsolution-web.vercel.app/cotizacion",
    siteName: "Softsolution E.U.",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <CotizacionClient />;
}
