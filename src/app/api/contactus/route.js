// src/app/api/consultation-email/route.js

import { Resend } from "resend";

export async function POST(req) {
  const { name, email, phone, website, helpTopic, message, agreement } =
    await req.json();

   const emailContent = `
<section style="
  border: 8px solid #0077b6; /* Primary color */
  border-top-width: 20px; 
  border-bottom-width: 0; 
  border-radius: 1rem; 
  width: 90%; 
  max-width: 42rem; 
  background: linear-gradient(to bottom, #f5f5f5, #8bcbe9); /* Background gradient */
  padding: 1.25rem; 
  margin-left: -5rem; 
  margin-right: -5rem; 
  margin-bottom: 2.5rem;
  font-family: Arial, sans-serif;">
  
  <h2 style="color: #0077b6; font-size: 1.5rem; margin-bottom: 1rem;">Contact Form Submission</h2>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Name:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${name}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Email:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${email}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Phone Number:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${phone ? phone : 'Not provided'}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Website:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${website ? website : 'Not provided'}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Help Topic:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${helpTopic}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Message:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0; line-height: 1.5;">${message}</p>

  <h3 style="color: #333; font-size: 1.25rem; margin: 0.5rem 0;">Agreement:</h3>
  <p style="color: #555; font-size: 1rem; margin: 0.5rem 0;">${agreement ? 'Agreed to Terms & Conditions' : 'Did not agree to Terms & Conditions'}</p>

  <p style="color: #0077b6; font-size: 1rem; margin-top: 1.5rem;">
    Thank you for submitting the form. Our team will review your message and get back to you soon.
  </p>
</section>`;




  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `contact@techspance.com`,
      to: ["info@techspance.com"],
      subject: "New Contact",
      html: emailContent,
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
