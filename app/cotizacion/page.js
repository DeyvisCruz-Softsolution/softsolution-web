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
    "cotización tecnología",
    "cotización telecomunicaciones",
    "cotización seguridad electrónica",
    "cotización desarrollo de software",
    "cotización ingeniería y tecnología",
    "cotización ingeniería y telecomunicaciones",
    "cotización ingeniería y seguridad electrónica",
    "cotización ingeniería y desarrollo de software",
    "aires acondicionados",
    "automatización",
    "automatización residencial",
    "automatización comercial",
    "electricidad",
    "telecomunicaciones",
    "seguridad electrónica",
    "desarrollo de software",
    "Softsolution",
    "ingeniería",
        "Bucaramanga",
    "Medellín",
    "piedecuesta",
    "floridablanca",
    "girón",
    "san gil",
    "Colombia",
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
