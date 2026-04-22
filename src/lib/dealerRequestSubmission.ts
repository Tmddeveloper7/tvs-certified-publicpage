import { NextResponse } from "next/server";

const RESEND_API_KEY =
  process.env.RESEND_API_KEY ?? "re_CVmYjas5_5rL53T64m8QxHiteMShP3txV";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "TVS Certified <onboarding@resend.dev>";
const RESEND_REPLY_TO =
  process.env.RESEND_REPLY_TO ?? "support@whuakoubo.resend.app";
const RESEND_TEST_EMAIL =
  process.env.RESEND_TO_EMAIL ?? "tvscertified@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type DealerPayload = {
  company_name: string;
  contact_person_name: string;
  email: string;
  phone_number: string;
  state: string;
  city: string;
  pincode: string;
};

export async function handleDealerRequestSubmission(request: Request) {
  try {
    const payload = (await request.json()) as DealerPayload;

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const emailResult = await sendDealerEmails(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Member registration submitted successfully.",
        email: emailResult,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to submit dealer request right now.",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

function validatePayload(payload: Partial<DealerPayload>) {
  if (
    !payload.company_name ||
    !payload.contact_person_name ||
    !payload.email ||
    !payload.phone_number ||
    !payload.state ||
    !payload.city ||
    !payload.pincode
  ) {
    return "All dealer registration fields are required.";
  }

  return null;
}

async function sendDealerEmails(payload: DealerPayload) {
  if (!RESEND_API_KEY) {
    return { sent: false, reason: "Missing RESEND_API_KEY" };
  }

  try {
    const isTestingSender = FROM_EMAIL.includes("resend.dev");
    const recipients = isTestingSender
      ? { to: [RESEND_TEST_EMAIL], cc: [] as string[] }
      : getRecipients(payload.state);

    const textBody = `
New member registration from TVS Certified website:

Company Name: ${payload.company_name}
Contact Person: ${payload.contact_person_name}
Email: ${payload.email}
Phone Number: ${payload.phone_number}
State: ${payload.state}
City: ${payload.city}
Pincode: ${payload.pincode}
  `.trim();

    const htmlBody = `
<div style="background-color:#f4f6f8; padding:20px; font-family: Arial, sans-serif;">
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.08);">
    <div style="background:#0A1F44; color:#ffffff; padding:16px 20px; text-align:center;">
      <h2 style="margin:0; font-size:18px;">New Member Registration</h2>
    </div>

    <div style="padding:20px; color:#333;">
      <p style="margin-top:0;">Hello Team,</p>
      <p>A new member registration has been submitted. Please find the details below:</p>

      <table style="width:100%; border-collapse:collapse; margin-top:15px;">
        <tr><td style="padding:8px 0; font-weight:bold;">Company Name:</td><td style="padding:8px 0;">${payload.company_name}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Contact Person:</td><td style="padding:8px 0;">${payload.contact_person_name}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Email:</td><td style="padding:8px 0;">${payload.email}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Phone Number:</td><td style="padding:8px 0;">${payload.phone_number}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">State:</td><td style="padding:8px 0;">${payload.state}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">City:</td><td style="padding:8px 0;">${payload.city}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Pincode:</td><td style="padding:8px 0;">${payload.pincode}</td></tr>
      </table>

      <p style="margin-top:20px;">Please follow up with the user at the earliest.</p>
      <p style="margin-bottom:0;">Regards,<br/>Your Website System</p>
    </div>

    <div style="background:#f1f1f1; padding:12px 20px; font-size:12px; color:#777; text-align:center;">
      This is an automated notification. Please do not reply to this email.
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
        to: recipients.to,
        cc: recipients.cc,
        reply_to: RESEND_REPLY_TO,
        subject: "New member registration | TVS Certified",
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!adminRes.ok) {
      const err = await adminRes.text();
      return {
        sent: false,
        reason: `Dealer registration email failed: ${err}`,
      };
    }

    const ackText = `
Dear ${payload.contact_person_name},

Thank you for registering your dealership with TVS Certified.

We have received your membership request and our team will contact you shortly.

Company Name: ${payload.company_name}
Location: ${payload.city}, ${payload.state} - ${payload.pincode}

Best regards,
TVS Certified
support@tvscertified.in
  `.trim();

    const ackHtml = `
<div style="font-family: Arial, sans-serif; color:#0A1F44;">
  <p>Dear ${payload.contact_person_name},</p>
  <p><strong>Thank you for registering your dealership with TVS Certified.</strong></p>
  <p>We have received your membership request and our team will contact you shortly.</p>
  <p><strong>Company Name:</strong> ${payload.company_name}</p>
  <p><strong>Location:</strong> ${payload.city}, ${payload.state} - ${payload.pincode}</p>
  <p>
    Best regards,<br/>
    TVS Certified<br/>
    support@tvscertified.in
  </p>
</div>
`;

    let ackSent = false;
    let note: string | undefined;

    if (payload.email && !isTestingSender) {
      const ackRes = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [payload.email],
          reply_to: RESEND_REPLY_TO,
          subject: "We received your membership request | TVS Certified",
          text: ackText,
          html: ackHtml,
        }),
      });

      if (!ackRes.ok) {
        const err = await ackRes.text();
        console.error("Dealer ack email failed:", err);
      } else {
        ackSent = true;
      }
    } else if (isTestingSender) {
      note =
        "Resend testing domain is active, so admin mail was sent only to the verified inbox and customer acknowledgment was skipped.";
    }

    return { sent: true, ackSent, note };
  } catch (error) {
    return {
      sent: false,
      reason: error instanceof Error ? error.message : String(error),
    };
  }
}

function getRecipients(rawState?: string): { to: string[]; cc: string[] } {
  const state = (rawState || "").trim().toLowerCase();

  const dinesh = "dinesh.aravindakshan@tvs.in";
  const hiro = "hiroyuki.takase@tvs.in";

  if (state.includes("tamil")) {
    return {
      to: [
        "mdahilinnoblitz@gmail.com",
        "mkm117747@gmail.com",
        "Vadivelu Thirunavukkarasu <Vadivelu.thirunavukkarasu@tvs.in>",
      ],
      cc: [
        "Seetharaman Jayaram <seetharaman.jayaram@tvs.in>",
        `A Dinesh <${dinesh}>`,
        `Hiroyuki Takase <${hiro}>`,
      ],
    };
  }

  if (state.includes("kerala") || state === "kl") {
    return {
      to: ["Thomas <thomas.mathew@tvs.in>"],
      cc: [
        "Akash <akash.viswanath@tvs.in>",
        "Prasanth Prasannakumar <prasanth.prasannakumar@tvs.in>",
        "Pramod Kumar <pramod.kumar@tvs.in>",
        `A Dinesh <${dinesh}>`,
        `Hiroyuki Takase <${hiro}>`,
      ],
    };
  }

  if (
    state.includes("andhra") ||
    state === "ap" ||
    state.includes("telangana") ||
    state === "ts"
  ) {
    return {
      to: ["Naveen Adimulam <naveen.adimulam@tvs.in>"],
      cc: [`A Dinesh <${dinesh}>`, `Hiroyuki Takase <${hiro}>`],
    };
  }

  return {
    to: ["tvscertified@gmail.com"],
    cc: [],
  };
}
