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
      subject: `New Floor Screed Enquiry from ${body.name || "Website Visitor"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
              .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; }
              .logo { color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; margin: 0; }
              .subtitle { color: #a0a0a0; font-size: 14px; margin: 8px 0 0 0; }
              .content { padding: 40px 30px; }
              .alert-box { background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; margin-bottom: 30px; border-radius: 4px; }
              .alert-title { color: #0c4a6e; font-size: 18px; font-weight: 600; margin: 0 0 8px 0; }
              .alert-text { color: #075985; font-size: 14px; margin: 0; }
              .info-grid { background-color: #fafafa; border-radius: 8px; padding: 24px; margin: 24px 0; }
              .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e5e5e5; }
              .info-row:last-child { border-bottom: none; }
              .info-label { font-weight: 600; color: #404040; min-width: 120px; font-size: 14px; }
              .info-value { color: #525252; font-size: 14px; flex: 1; }
              .services-list { display: flex; flex-wrap: wrap; gap: 8px; }
              .service-tag { background-color: #1a1a1a; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-block; }
              .message-box { background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 24px 0; }
              .message-title { font-weight: 600; color: #404040; margin: 0 0 12px 0; font-size: 14px; }
              .message-text { color: #525252; line-height: 1.6; font-size: 14px; margin: 0; white-space: pre-wrap; }
              .footer { background-color: #fafafa; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5; }
              .footer-text { color: #737373; font-size: 12px; margin: 0; line-height: 1.6; }
              @media only screen and (max-width: 600px) {
                .content { padding: 30px 20px; }
                .header { padding: 30px 20px; }
                .info-row { flex-direction: column; }
                .info-label { margin-bottom: 4px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 class="logo">RF CONCRETE</h1>
                <p class="subtitle">Liquid Floor Screed Specialists</p>
              </div>
              
              <div class="content">
                <div class="alert-box">
                  <h2 class="alert-title">New Floor Screed Enquiry</h2>
                  <p class="alert-text">You have received a new enquiry for liquid floor screed services from your website.</p>
                </div>

                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Name:</span>
                    <span class="info-value">${body.name || "Not provided"}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value"><a href="mailto:${body.email}" style="color: #0ea5e9; text-decoration: none;">${body.email || "Not provided"}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Phone:</span>
                    <span class="info-value"><a href="tel:${body.phone}" style="color: #0ea5e9; text-decoration: none;">${body.phone || "Not provided"}</a></span>
                  </div>
                  ${
                    body.services && Array.isArray(body.services) && body.services.length > 0
                      ? `
                  <div class="info-row">
                    <span class="info-label">Services:</span>
                    <div class="services-list">
                      ${body.services.map((service: string) => `<span class="service-tag">${service}</span>`).join("")}
                    </div>
                  </div>
                  `
                      : ""
                  }
                </div>

                ${
                  body.message
                    ? `
                <div class="message-box">
                  <h3 class="message-title">Message:</h3>
                  <p class="message-text">${body.message}</p>
                </div>
                `
                    : ""
                }
              </div>

              <div class="footer">
                <p class="footer-text">
                  This email was sent from your RF Concrete Construction website contact form.<br>
                  Please respond to the customer as soon as possible.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (body.email) {
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
        to: body.email,
        replyTo: process.env.MAIL_REPLY_TO,
        subject: "Thank You for Contacting RF Concrete Construction",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
                .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; }
                .logo { color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; margin: 0; }
                .subtitle { color: #a0a0a0; font-size: 14px; margin: 8px 0 0 0; }
                .content { padding: 40px 30px; }
                .greeting { color: #1a1a1a; font-size: 24px; font-weight: 600; margin: 0 0 20px 0; }
                .text { color: #525252; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; }
                .highlight-box { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #0ea5e9; padding: 24px; margin: 30px 0; border-radius: 8px; }
                .highlight-title { color: #0c4a6e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0; }
                .highlight-text { color: #075985; font-size: 14px; line-height: 1.6; margin: 0; }
                .cta-button { display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin: 20px 0; }
                .contact-info { background-color: #fafafa; border-radius: 8px; padding: 24px; margin: 30px 0; }
                .contact-title { color: #404040; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; }
                .contact-item { display: flex; align-items: center; margin: 12px 0; }
                .contact-icon { width: 40px; height: 40px; background-color: #1a1a1a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; flex-shrink: 0; }
                .contact-details { flex: 1; }
                .contact-label { color: #737373; font-size: 12px; margin: 0 0 4px 0; }
                .contact-value { color: #1a1a1a; font-size: 14px; font-weight: 500; margin: 0; }
                .contact-link { color: #0ea5e9; text-decoration: none; }
                .footer { background-color: #fafafa; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5; }
                .footer-text { color: #737373; font-size: 12px; margin: 0; line-height: 1.6; }
                .social-links { margin: 20px 0 0 0; }
                .social-link { display: inline-block; margin: 0 8px; }
                @media only screen and (max-width: 600px) {
                  .content { padding: 30px 20px; }
                  .header { padding: 30px 20px; }
                  .greeting { font-size: 20px; }
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 class="logo">RF CONCRETE</h1>
                  <p class="subtitle">Liquid Floor Screed Specialists</p>
                </div>
                
                <div class="content">
                  <h2 class="greeting">Hi ${body.name ? body.name.split(" ")[0] : "there"}! 👋</h2>
                  
                  <p class="text">
                    Thank you for getting in touch with RF Concrete Construction. We've received your enquiry about our liquid floor screed services and our team will review it shortly.
                  </p>

                  <div class="highlight-box">
                    <h3 class="highlight-title">What happens next?</h3>
                    <p class="highlight-text">
                      Our team typically responds within 24 hours during business days. We'll review your floor screed requirements and get back to you with the information you need or to arrange a site consultation.
                    </p>
                  </div>

                  <p class="text">
                    In the meantime, feel free to explore our website to learn more about our liquid floor screed services, view our completed projects in the gallery, or read about the advantages of choosing RF Concrete Construction for your flooring needs.
                  </p>

                  <div style="text-align: center;">
                    <a href="https://www.rfconcrete.ie" class="cta-button">Visit Our Website</a>
                  </div>

                  <div class="contact-info">
                    <h3 class="contact-title">Get in Touch</h3>
                    
                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div class="contact-details">
                        <p class="contact-label">Phone</p>
                        <p class="contact-value"><a href="tel:+3530877642515" class="contact-link">+353 087 764 2515</a></p>
                      </div>
                    </div>

                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div class="contact-details">
                        <p class="contact-label">Email</p>
                        <p class="contact-value"><a href="mailto:info@rfconcrete.ie" class="contact-link">info@rfconcrete.ie</a></p>
                      </div>
                    </div>

                    <div class="contact-item">
                      <div class="contact-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div class="contact-details">
                        <p class="contact-label">Instagram</p>
                        <p class="contact-value"><a href="https://www.instagram.com/rf_concrete_construction_" class="contact-link">@rf_concrete_construction_</a></p>
                      </div>
                    </div>
                  </div>

                  <p class="text" style="margin-top: 30px;">
                    We look forward to helping you with your floor screed project!
                  </p>

                  <p class="text" style="margin-bottom: 0;">
                    <strong>Best regards,</strong><br>
                    The RF Concrete Construction Team
                  </p>
                </div>

                <div class="footer">
                  <p class="footer-text">
                    RF Concrete Construction - Liquid Floor Screed Specialists<br>
                    Phone: <a href="tel:+3530877642515" style="color: #0ea5e9; text-decoration: none;">+353 087 764 2515</a> | 
                    Email: <a href="mailto:info@rfconcrete.ie" style="color: #0ea5e9; text-decoration: none;">info@rfconcrete.ie</a><br>
                    <a href="https://www.rfconcrete.ie" style="color: #0ea5e9; text-decoration: none;">www.rfconcrete.ie</a>
                  </p>
                  <p class="footer-text" style="margin-top: 16px; font-size: 11px; color: #a3a3a3;">
                    This email was sent because you submitted a contact form on our website.<br>
                    If you did not make this request, please disregard this email.
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      })
    }

    return Response.json({ ok: true })
  } catch (err: any) {
    console.error("CONTACT FORM ERROR:", err)
    return new Response(JSON.stringify({ ok: false, error: err.message || "Send failed" }), { status: 500 })
  }
}
