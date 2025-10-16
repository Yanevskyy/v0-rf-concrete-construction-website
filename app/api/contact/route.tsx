import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New contact form submission from ${body.name || "Website"}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><b>Name:</b> ${body.name || ""}</p>
        <p><b>Email:</b> ${body.email || ""}</p>
        <p><b>Phone:</b> ${body.phone || ""}</p>
        <p><b>Services:</b> ${Array.isArray(body.services) ? body.services.join(", ") : body.services || ""}</p>
        <p><b>Message:</b><br>${(body.message || "").replace(/\n/g, "<br>")}</p>
      `,
    })

    if (body.email) {
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
        to: body.email,
        subject: "Thank you for contacting RF Concrete Construction",
        html: `
          <p>Hi ${body.name || "there"},</p>
          <p>Thank you for getting in touch with RF Concrete Construction. We've received your message and will get back to you soon.</p>
          <p>Here's a summary of what you sent:</p>
          <blockquote>${(body.message || "").replace(/\n/g, "<br>")}</blockquote>
          <p>Kind regards,<br><b>RF Concrete Construction Team</b></p>
        `,
      })
    }

    return Response.json({ ok: true })
  } catch (err: any) {
    console.error("CONTACT FORM ERROR:", err)
    return new Response(JSON.stringify({ ok: false, error: err.message || "Send failed" }), { status: 500 })
  }
}
