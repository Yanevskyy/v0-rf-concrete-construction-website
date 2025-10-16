import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT),
      secure: Number(process.env.ZOHO_SMTP_PORT) === 465,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASSWORD,
      },
      pool: false, // Disable connection pooling for serverless
      maxConnections: 1,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      logger: false,
      debug: false,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
    })

    await transporter.verify()

    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_FROM,
      replyTo: process.env.MAIL_REPLY_TO,
      subject: `New contact form message from ${body.name}`,
      html: `
        <h2>New Enquiry from RF Concrete Website</h2>
        <p><strong>Name:</strong> ${body.name || ""}</p>
        <p><strong>Email:</strong> ${body.email || ""}</p>
        <p><strong>Phone:</strong> ${body.phone || ""}</p>
        <p><strong>Services:</strong> ${Array.isArray(body.services) ? body.services.join(", ") : body.services || "None selected"}</p>
        <p><strong>Message:</strong><br>${(body.message || "No message provided").replace(/\n/g, "<br>")}</p>
      `,
    })

    transporter.close()

    return Response.json({ ok: true, id: info.messageId })
  } catch (err: any) {
    console.error("Contact form error:", err.message || err)
    return new Response(
      JSON.stringify({
        ok: false,
        error: err.message || "Failed to send email. Please try again later.",
      }),
      { status: 500 },
    )
  }
}
