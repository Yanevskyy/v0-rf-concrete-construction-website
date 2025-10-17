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
                body { 
                  margin: 0; 
                  padding: 0; 
                  font-family: 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; 
                  background-color: #F2F2F2;
                  background-image: 
                    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
                  background-size: 50px 50px;
                }
                .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
                .header { 
                  background-color: #1E1E1E; 
                  padding: 50px 30px; 
                  text-align: center;
                  border-bottom: 4px solid #F7931E;
                }
                .logo { 
                  color: #ffffff; 
                  font-size: 36px; 
                  font-weight: 900; 
                  letter-spacing: 2px; 
                  margin: 0;
                  text-transform: uppercase;
                }
                .subtitle { 
                  color: #F7931E; 
                  font-size: 14px; 
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  margin: 12px 0 0 0; 
                }
                .content { padding: 50px 40px; background-color: #ffffff; }
                .greeting { 
                  color: #1E1E1E; 
                  font-size: 28px; 
                  font-weight: 700; 
                  margin: 0 0 24px 0;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }
                .text { 
                  color: #4a4a4a; 
                  font-size: 16px; 
                  line-height: 1.8; 
                  margin: 0 0 24px 0; 
                }
                .highlight-box { 
                  background: linear-gradient(135deg, #FFF5E6 0%, #FFE8CC 100%); 
                  border-left: 6px solid #F7931E; 
                  padding: 30px; 
                  margin: 35px 0; 
                  border-radius: 8px;
                  box-shadow: 0 2px 8px rgba(247, 147, 30, 0.15);
                }
                .highlight-title { 
                  color: #1E1E1E; 
                  font-size: 18px; 
                  font-weight: 700; 
                  margin: 0 0 14px 0;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }
                .highlight-text { 
                  color: #4a4a4a; 
                  font-size: 15px; 
                  line-height: 1.7; 
                  margin: 0; 
                }
                .cta-container { text-align: center; margin: 40px 0; }
                .cta-button { 
                  display: inline-block; 
                  background-color: #F7931E; 
                  color: #ffffff; 
                  padding: 18px 48px; 
                  text-decoration: none; 
                  border-radius: 8px; 
                  font-weight: 700; 
                  font-size: 16px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  box-shadow: 0 4px 12px rgba(247, 147, 30, 0.3);
                  transition: all 0.3s ease;
                }
                .cta-button:hover { 
                  background-color: #e08419;
                  box-shadow: 0 6px 16px rgba(247, 147, 30, 0.4);
                  transform: translateY(-2px);
                }
                .contact-info { 
                  background: linear-gradient(135deg, #F2F2F2 0%, #E8E8E8 100%); 
                  border-radius: 12px; 
                  padding: 35px 30px; 
                  margin: 40px 0;
                  border: 2px solid #E0E0E0;
                }
                .contact-title { 
                  color: #1E1E1E; 
                  font-size: 20px; 
                  font-weight: 700; 
                  margin: 0 0 24px 0;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  text-align: center;
                }
                .contact-grid { 
                  display: table; 
                  width: 100%; 
                  border-collapse: separate; 
                  border-spacing: 0 16px; 
                }
                .contact-item { 
                  display: table-row;
                }
                .contact-icon-cell { 
                  display: table-cell; 
                  width: 60px; 
                  vertical-align: middle;
                  padding-right: 20px;
                }
                .contact-icon { 
                  width: 50px; 
                  height: 50px; 
                  background-color: #F7931E; 
                  border-radius: 50%; 
                  display: flex; 
                  align-items: center; 
                  justify-content: center;
                  box-shadow: 0 3px 8px rgba(247, 147, 30, 0.3);
                }
                .contact-details-cell { 
                  display: table-cell; 
                  vertical-align: middle;
                }
                .contact-label { 
                  color: #737373; 
                  font-size: 12px; 
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  margin: 0 0 6px 0; 
                }
                .contact-value { 
                  color: #1E1E1E; 
                  font-size: 16px; 
                  font-weight: 600; 
                  margin: 0; 
                }
                .contact-link { 
                  color: #1E1E1E; 
                  text-decoration: none;
                  transition: color 0.3s ease;
                }
                .contact-link:hover { 
                  color: #F7931E; 
                }
                .footer { 
                  background-color: #1E1E1E; 
                  padding: 40px 30px; 
                  text-align: center; 
                  border-top: 4px solid #F7931E;
                }
                .footer-text { 
                  color: #E0E0E0; 
                  font-size: 13px; 
                  margin: 0 0 12px 0; 
                  line-height: 1.8; 
                }
                .footer-link { 
                  color: #F7931E; 
                  text-decoration: none;
                  font-weight: 600;
                }
                .footer-link:hover { 
                  color: #ffffff; 
                }
                .footer-disclaimer { 
                  color: #999999; 
                  font-size: 11px; 
                  margin: 20px 0 0 0; 
                  line-height: 1.6; 
                }
                @media only screen and (max-width: 600px) {
                  .content { padding: 40px 25px; }
                  .header { padding: 40px 25px; }
                  .greeting { font-size: 24px; }
                  .logo { font-size: 30px; }
                  .contact-info { padding: 30px 20px; }
                  .cta-button { padding: 16px 36px; font-size: 14px; }
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
                    <h3 class="highlight-title">What Happens Next?</h3>
                    <p class="highlight-text">
                      Our team typically responds within 24 hours during business days. We'll review your floor screed requirements and get back to you with the information you need or to arrange a site consultation.
                    </p>
                  </div>

                  <p class="text">
                    In the meantime, feel free to explore our website to learn more about our liquid floor screed services, view our completed projects in the gallery, or read about the advantages of choosing RF Concrete Construction for your flooring needs.
                  </p>

                  <div class="cta-container">
                    <a href="https://www.rfconcrete.ie" class="cta-button">Visit Our Website</a>
                  </div>

                  <div class="contact-info">
                    <h3 class="contact-title">Get in Touch</h3>
                    
                    <div class="contact-grid">
                      <div class="contact-item">
                        <div class="contact-icon-cell">
                          <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="contact-details-cell">
                          <p class="contact-label">Phone</p>
                          <p class="contact-value"><a href="tel:+3530877642515" class="contact-link">+353 087 764 2515</a></p>
                        </div>
                      </div>

                      <div class="contact-item">
                        <div class="contact-icon-cell">
                          <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          </div>
                        </div>
                        <div class="contact-details-cell">
                          <p class="contact-label">Email</p>
                          <p class="contact-value"><a href="mailto:info@rfconcrete.ie" class="contact-link">info@rfconcrete.ie</a></p>
                        </div>
                      </div>

                      <div class="contact-item">
                        <div class="contact-icon-cell">
                          <div class="contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </div>
                        </div>
                        <div class="contact-details-cell">
                          <p class="contact-label">Instagram</p>
                          <p class="contact-value"><a href="https://www.instagram.com/rf_concrete_construction_" class="contact-link">@rf_concrete_construction_</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="text" style="margin-top: 40px;">
                    We look forward to helping you with your floor screed project!
                  </p>

                  <p class="text" style="margin-bottom: 0;">
                    <strong style="color: #1E1E1E;">Best regards,</strong><br>
                    <strong style="color: #F7931E;">The RF Concrete Construction Team</strong>
                  </p>
                </div>

                <div class="footer">
                  <p class="footer-text">
                    <strong style="color: #F7931E; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">RF Concrete Construction</strong><br>
                    Liquid Floor Screed Specialists
                  </p>
                  <p class="footer-text" style="margin-top: 20px;">
                    Phone: <a href="tel:+3530877642515" class="footer-link">+353 087 764 2515</a><br>
                    Email: <a href="mailto:info@rfconcrete.ie" class="footer-link">info@rfconcrete.ie</a><br>
                    Web: <a href="https://www.rfconcrete.ie" class="footer-link">www.rfconcrete.ie</a>
                  </p>
                  <p class="footer-disclaimer">
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
