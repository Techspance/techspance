"use server";
import { Resend } from "resend";

async function sendConsultation() {
  const { email, category } = consultationForm;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: `consultaion@techspance.com`,
    to: [`abdulwasiu6609@gmail.com`],
    subject: "New Consultation Request",
    html: `<p>Email: ${email}</p><p>Category: ${category}</p>`,
  });

  console.log(data);
  console.log(error);
}

export default sendConsultation;
