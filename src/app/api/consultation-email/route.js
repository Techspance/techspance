// src/app/api/consultation-email/route.js

import { Resend } from "resend";
import { checkRateLimit } from "@/lib/antispam";

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, category, _gotcha } = data;

    // 1. Client IP rate limit
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Please wait a few minutes before trying again.",
        }),
        { status: 429 }
      );
    }

    // 2. Honeypot check
    if (_gotcha) {
      console.warn(`[Anti-Spam] Dropped spam consultation request silently from IP: ${ip}`);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide a valid email." }),
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `consultation@techspance.com`,
      to: ["info@techspance.com"],
      subject: "New Consultation Request",
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Category:</strong> ${category || "General"}</p>`,
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
