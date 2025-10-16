import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, services } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu",
      port: Number.parseInt(process.env.ZOHO_SMTP_PORT || "465"),
      secure: true, // SSL for port 465
      auth: {
        user: process.env.ZOHO_SMTP_USER, // studio@clarityweb.ie
        pass: process.env.ZOHO_SMTP_PASSWORD, // App Password
      },
    })

    const mailOptions = {
      from: `${process.env.MAIL_FROM_NAME || "RF CONCRETE"} <${process.env.MAIL_FROM || "info@rfconcrete.ie"}>`,
      to: process.env.CONTACT_EMAIL || "rfconcrete@gmail.com",
      replyTo: process.env.MAIL_REPLY_TO || "rfconcrete@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            ${services && services.length > 0 ? `<p><strong>Services Interested In:</strong> ${services.join(", ")}</p>` : ""}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from the RF Concrete Construction website contact form.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    const confirmationOptions = {
      from: `${process.env.MAIL_FROM_NAME || "RF CONCRETE"} <${process.env.MAIL_FROM || "info@rfconcrete.ie"}>`,
      to: email,
      replyTo: process.env.MAIL_REPLY_TO || "rfconcrete@gmail.com",
      subject: "Thank you for contacting RF Concrete Construction",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Thank You for Your Inquiry</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting RF Concrete Construction. We have received your message and will respond within 24 hours.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
            ${services && services.length > 0 ? `<p><strong>Services:</strong> ${services.join(", ")}</p>` : ""}
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p>If you need immediate assistance, please call us at <strong>+353 087 764 2515</strong>.</p>
          <p>Best regards,<br>RF Concrete Construction Team</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            RF Concrete Construction | Liquid Floor Screed Specialists<br>
            Email: info@rfconcrete.ie | Phone: +353 087 764 2515
          </p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
