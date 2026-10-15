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
      name,
      email,
      phone,
      website,
      helpTopic,
      message,
      agreement,
      turnstileToken,
    } = data;

    // 1. Get client IP for rate limiting
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

    // 2. Anti-spam inspection (Honeypot, timing, heuristic checks)
    const spamCheck = inspectSubmission(data);
    if (spamCheck.isSpam) {
      if (spamCheck.silentDrop) {
        // Pretend success so bots think their submission went through, but do NOT send any email
        console.warn(`[Anti-Spam] Dropped spam submission silently (${spamCheck.reason}) from IP: ${ip}`);
        return new Response(
          JSON.stringify({
            success: true,
            message: "Thank you for submitting the form. Our team will review your message soon.",
          }),
          { status: 200 }
        );
      }
      return new Response(
        JSON.stringify({ success: false, error: spamCheck.userError }),
        { status: 400 }
      );
    }

    // 3. Optional Turnstile verification
    if (turnstileToken) {
      const turnstile = await verifyTurnstileToken(turnstileToken, ip);
      if (!turnstile.success) {
        return new Response(
          JSON.stringify({ success: false, error: "Bot verification failed." }),
          { status: 400 }
        );
      }
    }

    // 4. Build email content
    const emailContent = `
<section style="
  border: 8px solid #0077b6;
  border-top-width: 20px; 
  border-bottom-width: 0; 
  border-radius: 1rem; 
  width: 90%; 
  max-width: 42rem; 
  background: linear-gradient(to bottom, #f5f5f5, #8bcbe9);
  padding: 1.25rem; 
  margin: 0 auto 2.5rem;
  font-family: Arial, sans-serif;">
  
  <h2 style="color: #0077b6; font-size: 1.5rem; margin-bottom: 1rem;">Contact Form Submission</h2>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Name:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${name || "Not provided"}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Email:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${email}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Phone Number:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${phone ? phone : "Not provided"}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Website:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${website ? website : "Not provided"}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Help Topic:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${helpTopic || "General"}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Message:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0; line-height: 1.5;">${message}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Agreement:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${agreement ? "Agreed to Terms & Conditions" : "Did not agree to Terms & Conditions"}</p>

  <p style="color: #0077b6; font-size: 1rem; margin-top: 1.5rem;">
    Thank you for submitting the form. Our team will review your message and get back to you soon.
  </p>
</section>`;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `contact@techspance.com`,
      to: ["info@techspance.com"],
      subject: `New Contact Form Submission: ${name || "Inquiry"}`,
      html: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
