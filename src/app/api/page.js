import React from 'react'
import { Resend } from "resend";

export default async function page() {
    async function send() {
        'use server'
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
          from: `consultaion@techspance.com`,
          to: [`info@techspance.com`],
          subject: `Test Email`,
          html: `<h1>Hello! this is a new consultation</h1>`,
        });


        console.log(data);
        console.log(error);
    }

  return (
    <form action={send}>
      <button className="mt-24" type="submit">
        Send email
      </button>
    </form>
  );
};

 