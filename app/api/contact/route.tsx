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
      subject: "New Floor Screed Enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E1E1E; color: #FFFFFF; padding: 28px 24px; text-align: center;">
            <div style="font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">RF CONCRETE</div>
            <div style="font-size: 12px; opacity: 0.85; margin-top: 6px; letter-spacing: 0.4px;">LIQUID FLOOR SCREED SPECIALISTS</div>
          </div>
          <div style="height: 4px; background: #F7931E;"></div>
          
          <div style="background: #FFFFFF; padding: 28px 24px;">
            <h2 style="margin: 0 0 20px; font-size: 24px; color: #1E1E1E;">New Floor Screed Enquiry</h2>
            
            <div style="background: #FFF7EE; border: 1px solid #FADAB2; border-left: 4px solid #F7931E; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
              <div style="font-weight: bold; margin-bottom: 8px; color: #1E1E1E;">ENQUIRY DETAILS</div>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #333; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #333;">${body.name || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #333; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${body.email}" style="color: #F7931E; text-decoration: none;">${body.email || "Not provided"}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #333; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0; color: #333;"><a href="tel:${body.phone}" style="color: #F7931E; text-decoration: none;">${body.phone || "Not provided"}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #333; font-weight: bold; vertical-align: top;">Services:</td>
                  <td style="padding: 8px 0; color: #333;">${Array.isArray(body.services) && body.services.length > 0 ? body.services.join(", ") : "Not specified"}</td>
                </tr>
              </table>
            </div>
            
            ${
              body.message
                ? `
              <div style="margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 8px; color: #1E1E1E;">PROJECT DETAILS:</div>
                <div style="background: #F8F9FA; border: 1px solid #ECEFF1; border-radius: 10px; padding: 16px; color: #333; line-height: 1.6;">
                  ${(body.message || "").replace(/\n/g, "<br>")}
                </div>
              </div>
            `
                : ""
            }
          </div>
          
          <div style="background: #1E1E1E; color: #FFFFFF; padding: 18px 24px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 6px; color: #F7931E;">RF CONCRETE CONSTRUCTION</div>
            <div style="font-size: 12px; opacity: 0.9;">Liquid Floor Screed Specialists</div>
          </div>
        </div>
      `,
    })

    if (body.email) {
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
        to: body.email,
        replyTo: process.env.MAIL_REPLY_TO,
        subject: "Thank you for contacting RF Concrete Construction",
        html: `
<!doctype html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RF Concrete — Confirmation</title>
    <style>
      @media only screen and (max-width: 620px){
        .wrap{width:100% !important; margin:0 !important; border-radius:0 !important;}
        .px{padding-left:16px !important; padding-right:16px !important;}
        .ptb{padding-top:18px !important; padding-bottom:18px !important;}
        h1{font-size:22px !important; line-height:28px !important;}
        p, a, li{font-size:15px !important; line-height:22px !important;}
        .btn{display:block !important; width:100% !important;}
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#F5F6F7; color:#1E1E1E; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td align="center" style="padding:0 12px;">
          <!-- Header -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="wrap" style="width:600px; max-width:600px; background:#1E1E1E; margin:28px auto 0; border-radius:12px 12px 0 0;">
            <tr>
              <td align="center" style="padding:28px 24px; color:#FFFFFF;">
                <div style="font-size:22px; font-weight:bold; letter-spacing:0.5px;">RF CONCRETE</div>
                <div style="font-size:12px; opacity:0.85; margin-top:6px; letter-spacing:0.4px;">LIQUID FLOOR SCREED SPECIALISTS</div>
              </td>
            </tr>
            <tr>
              <td style="height:4px; background:#F7931E;"></td>
            </tr>
          </table>

          <!-- Content -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="wrap" style="width:600px; max-width:600px; background:#FFFFFF; margin:0 auto; border-radius:0 0 12px 12px;">
            <tr>
              <td class="px ptb" style="padding:28px 28px 8px;">
                <h1 style="margin:0 0 12px; font-size:24px; line-height:30px; letter-spacing:0.2px;">
                  Hi ${body.name || "there"},
                </h1>
                <p style="margin:0 0 16px; font-size:16px; line-height:24px; color:#333;">
                  Thank you for getting in touch with RF Concrete Construction. We've received your enquiry about our liquid floor screed services and our team will review it shortly.
                </p>

                <!-- Info Box -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FFF7EE; border:1px solid #FADAB2; border-left:4px solid #F7931E; border-radius:10px;">
                  <tr>
                    <td style="padding:14px 16px;">
                      <div style="font-weight:bold; margin:0 0 6px; color:#1E1E1E;">WHAT HAPPENS NEXT?</div>
                      <div style="color:#444; font-size:15px; line-height:22px;">
                        Our team typically responds within 24 hours during business days.
                        We'll review your floor screed requirements and get back to you with the information you need or to arrange a site consultation.
                      </div>
                    </td>
                  </tr>
                </table>

                <p style="margin:18px 0 22px; font-size:15px; line-height:22px; color:#333;">
                  In the meantime, feel free to explore our website to learn more about our services, view completed projects, and see the benefits of choosing RF Concrete Construction.
                </p>

                <!-- Button -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 8px;">
                  <tr>
                    <td>
                      <a href="https://www.rfconcrete.ie" target="_blank"
                         class="btn"
                         style="background:#F7931E; color:#1E1E1E; text-decoration:none; font-weight:bold; padding:12px 22px; display:inline-block; border-radius:10px;">
                        VISIT OUR WEBSITE
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Contact Info -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:22px 0 6px; background:#F8F9FA; border:1px solid #ECEFF1; border-radius:10px;">
                  <tr>
                    <td style="padding:18px 16px;">
                      <div style="text-align:center; font-weight:bold; margin:0 0 10px; color:#1E1E1E;">GET IN TOUCH</div>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="padding:6px 0; font-size:15px;">
                            <span style="display:inline-block; width:10px; height:10px; background:#F7931E; border-radius:50%; margin-right:10px;"></span>
                            <strong>Phone:</strong>
                            <a href="tel:+3530877642515" style="color:#1E1E1E; text-decoration:none;">+353 087 764 2515</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; font-size:15px;">
                            <span style="display:inline-block; width:10px; height:10px; background:#F7931E; border-radius:50%; margin-right:10px;"></span>
                            <strong>Email:</strong>
                            <a href="mailto:info@rfconcrete.ie" style="color:#1E1E1E; text-decoration:none;">info@rfconcrete.ie</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; font-size:15px;">
                            <span style="display:inline-block; width:10px; height:10px; background:#F7931E; border-radius:50%; margin-right:10px;"></span>
                            <strong>Instagram:</strong>
                            <a href="https://www.instagram.com/rf_concrete_construction_?igsh=aGUyNGJtMWR2M2Fx&utm_source=qr" style="color:#1E1E1E; text-decoration:none;">@rf_concrete_construction_</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="margin:18px 0 0; font-size:15px; line-height:22px; color:#333;">
                  We look forward to helping you with your floor screed project!
                </p>
                <p style="margin:6px 0 28px; font-size:15px; line-height:22px; color:#333;">
                  Best regards,<br>
                  <strong>The RF Concrete Construction Team</strong>
                </p>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="wrap" style="width:600px; max-width:600px; margin:14px auto 28px; background:#1E1E1E; border-radius:12px;">
            <tr>
              <td class="px ptb" align="center" style="padding:18px 24px; color:#FFFFFF;">
                <div style="font-weight:bold; margin-bottom:6px; color:#F7931E;">RF CONCRETE CONSTRUCTION</div>
                <div style="font-size:12px; opacity:0.9;">Liquid Floor Screed Specialists</div>
                <div style="font-size:12px; opacity:0.9; margin-top:8px;">
                  Phone: <a href="tel:+3530877642515" style="color:#FFFFFF; text-decoration:none;">+353 087 764 2515</a> &nbsp;•&nbsp;
                  Email: <a href="mailto:info@rfconcrete.ie" style="color:#FFFFFF; text-decoration:none;">info@rfconcrete.ie</a> &nbsp;•&nbsp;
                  Web: <a href="https://www.rfconcrete.ie" style="color:#FFFFFF; text-decoration:underline;">rfconcrete.ie</a>
                </div>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
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
