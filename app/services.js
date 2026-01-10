import { Zap, Network, ShieldCheck, Code, Snowflake } from "lucide-react";

export const servicesData = [
  {
    id: "electricidad",
    icon: Zap,
    title: "Electricidad",
    shortText:
       "Soluciones eléctricas residenciales, comerciales e industriales: estudios técnicos, suministro de materiales, instalación, adecuaciones, puesta en marcha y mantenimiento preventivo y correctivo.",
    description: `
Trabajamos con **energía AC y DC**, ofreciendo soluciones eléctricas completas
desde el suministro hasta el mantenimiento especializado.

🔹 Suministro, instalación y mantenimiento preventivo y correctivo de:
• Bancos de baterías
• Rectificadores
• Paneles solares
• Plantas eléctricas estacionarias y móviles de respaldo
• Sistemas de transferencia automática y manual

🔹 Instalación de:
• Canastillas
• Tubería EMT, PVC e industrial
• Infraestructura para cableado eléctrico estructurado

Garantizamos **seguridad, eficiencia energética y continuidad operativa**.
    `,
    images: [
      "/servicios/electrico1.jpg",
      "/servicios/electrico2.jpg",
      "/servicios/electrico3.jpg",
      "/servicios/electrico4.jpg",
      "/servicios/electrico5.jpg",
      "/servicios/electrico6.jpg",
    ],
  },

    {
    id: "telecomunicaciones",
    icon: Network,
    title: "Telecomunicaciones y Redes",
    shortText:
      "Diseño e implementación de redes LAN/WAN, cableado estructurado, fibra óptica, enlaces satelitales, transmisión de datos y certificación de infraestructura.",
    description: `
Desarrollamos proyectos integrales de telecomunicaciones y conectividad.

🔹 Redes:
• LAN / WAN
• Fibra óptica
• Radio enlace punto a punto
• Enlaces satelitales

🔹 Instalación y mantenimiento de:
• Racks y gabinetes de red
• Equipos de transmisión FO, UTP y satelital
• Routers, OLT, módems

🔹 Proyectos especiales:
• Radio bases
• Site survey
• Implementación 4G y 5G
• Infraestructura eléctrica asociada

Conectamos tu negocio con **estabilidad, velocidad y escalabilidad**.
    `,
    images: [
      "/servicios/red1.jpg",
      "/servicios/red2.jpg",
      "/servicios/red3.jpg",   
        "/servicios/red4.jpg",
        "/servicios/red5.jpg",
    "/servicios/red6.jpg",
    "/servicios/red7.jpg",
    "/servicios/red8.jpg",
    "/servicios/red9.jpg",
    "/servicios/red10.jpg",
    "/servicios/red11.jpg",
    ],
  },

  {
    id: "seguridad",
    icon: ShieldCheck,
    title: "Seguridad Electrónica",
    shortText:
      "Sistemas de CCTV, monitoreo, control de acceso y alarmas, desde la cotización y suministro hasta la instalación y mantenimiento.",
    description: `
Implementamos sistemas de **seguridad electrónica avanzados** para todo tipo
de entornos.

Incluye:
🔹 Sistemas CCTV
🔹 Control de acceso
🔹 Alarmas y sensores
🔹 Integración con dispositivos móviles
🔹 Monitoreo remoto en tiempo real

Suministramos **todos los equipos necesarios** y garantizamos instalación
profesional y soporte continuo.
    `,
    images: [
      "/servicios/seguridad1.webp",
      "/servicios/seguridad2.jpg",
        "/servicios/seguridad3.jpg"
    ],
  },

  {
    id: "software",
    icon: Code,
    title: "Desarrollo de Software",
    shortText:
       "Creación de páginas web y soluciones de software a medida, desde el análisis y diseño hasta la implementación, puesta en marcha y soporte continuo.",
    description: `
Desarrollamos **software de todo tipo**, adaptado a tus necesidades.

🔹 Desarrollo de:
• Páginas web corporativas
• Aplicaciones web
• Sistemas offline y online
• Plataformas administrativas

🔹 Servicios:
• Análisis y diseño
• Desarrollo a medida
• Implementación
• Soporte y evolución continua

Convertimos ideas en **soluciones digitales eficientes y escalables**.
    `,
    images: [
      "/servicios/software1.jpg",
      "/servicios/software2.jpg",  
        "/servicios/software3.jpg",
        "/servicios/software4.jpg",
    ],
  },
  {
    id: "climatizacion",
    icon: Snowflake,
    title: "Aires Acondicionados y Climatización",
    shortText:
      "Suministro, instalación y mantenimiento preventivo y correctivo de sistemas de aire acondicionado residenciales, comerciales, industriales y de precisión, garantizando confort térmico, eficiencia energética y operación confiable.",
    description: `
Ofrecemos soluciones completas en **climatización residencial, comercial,
industrial y de precisión**.

🔹 Suministro e instalación de:
• Aires tipo Split, Cassette, Piso-Techo, VRF
• Sistemas de precisión para cuartos técnicos y data centers

🔹 Mantenimiento:
• Preventivo y correctivo
• Optimización de eficiencia energética
• Diagnóstico y reparación especializada

Garantizamos **confort térmico, confiabilidad operativa y larga vida útil**.
    `,
    images: [
      "/servicios/aire1.webp",
      "/servicios/aire2.jpg",
      "/servicios/aire3.jpg",
    ],
  },

];
