// src/app/api/consultation-email/route.js

import { Resend } from "resend";

export async function POST(req) {
  const { email, category } = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `consultation@techspance.com`,
      to: ["info@techspance.com"],
      subject: "New Consultation Request",
      html: `<p>Email: ${email}</p><p>Category: ${category}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
