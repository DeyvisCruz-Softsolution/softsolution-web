import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { nombre, email, telefono, servicio, mensaje } = await req.json();

    await resend.emails.send({
      from: "Cotizaciones Softsolution <onboarding@resend.dev>",
      to: ["softsolution.eu.software@gmail.com"],
      subject: `Nueva cotización - ${servicio}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
