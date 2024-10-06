import { NextResponse } from "next/server";
import { Resend } from "resend";



export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.batch.send([
     
      {
        from: "",
        to: "",
        subject: "",
        html: ``,
      },
    ]);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
