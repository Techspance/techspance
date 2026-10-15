import { Resend } from "resend";
import {
  checkRateLimit,
  inspectSubmission,
  verifyTurnstileToken,
} from "@/lib/antispam";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      name,
      email,
      company,
      service,
      message,
      turnstileToken,
    } = data;

    // 1. Get client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please wait a few minutes before trying again.",
        }),
        { status: 429 }
      );
    }

    // 2. Anti-spam inspection (Honeypot, timing, heuristic checks)
    const spamCheck = inspectSubmission(data);
    if (spamCheck.isSpam) {
      if (spamCheck.silentDrop) {
        // Pretend success so bots think their submission went through, but do NOT send any email
        console.warn(`[Anti-Spam] Dropped spam submission silently (${spamCheck.reason}) from IP: ${ip}`);
        return new Response(
          JSON.stringify({
            success: true,
            message: "Message sent! We'll get back to you within 1-2 business days.",
          }),
          { status: 200 }
        );
      }
      return new Response(
        JSON.stringify({ error: spamCheck.userError }),
        { status: 400 }
      );
    }

    // 3. Optional Turnstile verification
    if (turnstileToken) {
      const turnstile = await verifyTurnstileToken(turnstileToken, ip);
      if (!turnstile.success) {
        return new Response(
          JSON.stringify({ error: "Bot verification failed." }),
          { status: 400 }
        );
      }
    }

    const senderName = [firstName, lastName].filter(Boolean).join(" ") || name || "Website Visitor";

    // 4. Build dark/clean styled email matching production format
    const emailContent = `
<div style="background-color: #0b0f17; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; border-radius: 12px; max-width: 580px; margin: 0 auto; border: 1px solid #1e293b;">
  <h2 style="color: #3b82f6; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 20px;">New Contact Form Submission</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <td style="padding: 8px 0; color: #94a3b8; width: 100px; font-size: 14px;">Name:</td>
      <td style="padding: 8px 0; color: #f8fafc; font-weight: 600; font-size: 14px;">${senderName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Email:</td>
      <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Company:</td>
      <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${company || "Not provided"}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">Service:</td>
      <td style="padding: 8px 0; color: #f8fafc; font-size: 14px;">${service || "Not specified"}</td>
    </tr>
  </table>

  <div style="background-color: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 16px;">
    <p style="color: #94a3b8; font-size: 12px; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</p>
    <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
  </div>
</div>`;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `contact@techspance.com`,
      to: ["info@techspance.com"],
      subject: `New Contact Form Submission - ${senderName}`,
      html: emailContent,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent! We'll get back to you within 1-2 business days.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send message" }),
      { status: 500 }
    );
  }
}
