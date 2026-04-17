import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "re_CVmYjas5_5rL53T64m8QxHiteMShP3txV";
const TO_EMAIL =
  process.env.RESEND_TO_EMAIL || "tvscertified@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "TVS Certified <onboarding@resend.dev>";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function POST(request: Request) {
  try {
    // ✅ Check API Key
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // ✅ Parse Request
    const { name, email, phone, trustedPartner, state, message } = await request.json();

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // ✅ Admin Email Content
    const textBody = `
New contact submission from TVS Certified site:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
State: ${state || "N/A"}

Message:
${message}
Category Interest: ${trustedPartner || "N/A"}
    `.trim();

    // const htmlBody = `
    //   <div style="font-family: Arial, sans-serif; color: #0A1F44;">
    //     <h2>New Contact Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    //     <p><strong>State:</strong> ${state || "N/A"}</p>
    //     <p><strong>Category:</strong> ${trustedPartner || "N/A"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, "<br/>")}</p>
    //   </div>
    // `;

    // ✅ Send Email to Admin
const htmlBody = `
<div style="background-color:#f4f6f8; padding:20px; font-family: Arial, sans-serif;">
  
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:#0A1F44; color:#ffffff; padding:20px; text-align:center;">
      <h2 style="margin:0;">New Contact Submission</h2>
      <p style="margin:5px 0 0; font-size:14px;">TVS Certified Website</p>
    </div>

    <!-- Body -->
    <div style="padding:20px;">
      
      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        
        <tr>
          <td style="padding:10px; font-weight:bold; color:#555; width:35%;">Name</td>
          <td style="padding:10px;">${name}</td>
        </tr>

        <tr style="background:#f9f9f9;">
          <td style="padding:10px; font-weight:bold; color:#555;">Email</td>
          <td style="padding:10px;">
            <a href="mailto:${email}" style="color:#0A1F44; text-decoration:none;">
              ${email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding:10px; font-weight:bold; color:#555;">Phone</td>
          <td style="padding:10px;">${phone || "N/A"}</td>
        </tr>

        <tr style="background:#f9f9f9;">
          <td style="padding:10px; font-weight:bold; color:#555;">State</td>
          <td style="padding:10px;">${state || "N/A"}</td>
        </tr>

        <tr>
          <td style="padding:10px; font-weight:bold; color:#555;">Category</td>
          <td style="padding:10px;">${trustedPartner || "N/A"}</td>
        </tr>

        <!-- ✅ Fixed Message Alignment -->
        <tr style="background:#f9f9f9;">
          <td style="padding:10px; font-weight:bold; color:#555; vertical-align:top;">
            Message
          </td>
          <td style="padding:10px;">
            <div style="border-radius:6px; line-height:1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </td>
        </tr>

      </table>

      <!-- Optional Button -->
      <div style="text-align:center; margin-top:20px;">
        <a href="mailto:${email}" 
           style="display:inline-block; padding:10px 18px; background:#0A1F44; color:#fff; text-decoration:none; border-radius:6px; font-size:14px;">
           Reply to User
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#777;">
      <p style="margin:0;">This email was generated from TVS Certified website contact form</p>
    </div>

  </div>

</div>
`;
    const adminRes = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: "New contact from TVS Certified website",
        text: textBody,
        html: htmlBody,
        tags: [{ name: "source", value: "contact-us" }],
      }),
    });

    if (!adminRes.ok) {
      const err = await adminRes.text();
      throw new Error(`Admin email failed: ${err}`);
    }

    // ✅ Client Auto-Reply Content
    const clientText = `
Dear ${name},

Thank you for submitting your request.

We have received your details, and our team will contact you shortly.

If you need immediate help, just reply to this email.

Best regards,  
TVS Certified  
support@tvscertified.in
    `.trim();

    // const clientHtml = `
    //   <div style="font-family: Arial, sans-serif; color:#0A1F44;">
    //     <p>Dear ${name},</p>
    //     <p><b>Thank you for submitting your request.</b></p>
    //     <p>We have received your details, and our team will contact you shortly.</p>
    //     <p>If you need immediate help, just reply to this email.</p>
    //     <p>
    //       Best regards,<br/>
    //       TVS Certified<br/>
    //       support@tvscertified.in
    //     </p>
    //   </div>
    // `;
    const clientHtml = `
<div style="background-color:#f4f6f8; padding:20px; font-family: Arial, sans-serif;">
  
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:#0A1F44; color:#ffffff; padding:20px; text-align:center;">
      <h2 style="margin:0;"> Request Received</h2>
      <p style="margin:5px 0 0; font-size:14px;">TVS Certified</p>
    </div>

    <!-- Body -->
    <div style="padding:25px; color:#333; font-size:14px; line-height:1.6;">
      
      <p>Dear <b>${name}</b>,</p>

      <p style="margin-top:15px;">
        Thank you for reaching out to us. We have successfully received your request.
      </p>

      <div style="background:#f4f6f8; padding:15px; border-radius:6px; margin:20px 0;">
        <p style="margin:0;">
          Our team will review your details and get back to you shortly.
        </p>
      </div>

      <p>
        If you need immediate assistance, feel free to reply to this email.
      </p>

      <!-- CTA Button -->
      <div style="text-align:center; margin:25px 0;">
        <a href="mailto:support@tvscertified.in" 
           style="display:inline-block; padding:12px 20px; background:#0A1F44; color:#ffffff; text-decoration:none; border-radius:6px; font-size:14px;">
          Contact Support
        </a>
      </div>

      <p style="margin-top:20px;">
        Best regards,<br/>
        <b>TVS Certified Team</b><br/>
        <a href="mailto:support@tvscertified.in" style="color:#0A1F44; text-decoration:none;">
          support@tvscertified.in
        </a>
      </p>

    </div>

    <!-- Footer -->
    <div style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#777;">
      <p style="margin:0;">
        This is an automated confirmation email. Please do not worry, our team will contact you soon.
      </p>
    </div>

  </div>

</div>
`;

    // ✅ Send Auto-Reply to Client (FIXED: no restriction)
    if (email) {
      console.log("Sending ACK to:", email);

      const ackRes = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [email],
          subject: "We received your request | TVS Certified",
          text: clientText,
          html: clientHtml,
          tags: [{ name: "source", value: "contact-us-ack" }],
        }),
      });

      if (!ackRes.ok) {
        const err = await ackRes.text();
        console.error("ACK email failed:", err);
        // ❗ Don't break flow if ack fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
