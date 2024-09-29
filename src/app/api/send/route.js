import { NextResponse } from "next/server";
import { Resend } from "resend";


const uxdesignInterview = `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">

  <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td>
        <h2 style="color: #333333; text-align: center;">Interview Invitation - UX Design Intern Position</h2>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Dear Applicant,
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Thank you for your interest in the UX Design Intern position at Techspance Ltd. After reviewing your application, we would like to invite you for an interview to discuss the role further and learn more about your qualifications.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Please select a day and time for the interview between <strong>today</strong> and <strong>20th September 2024</strong>, and include your time zone in your response. Kindly reply to this email within <strong>24 hours of receipt</strong> with your resume and preferred time slot.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          We look forward to speaking with you soon!
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 0;">
          Best regards,<br>
          <strong>Waliyat Imran</strong><br>
          Hiring Manager<br>
          Techspance Ltd<br>
          recruitment@techspance.com
        </p>
      </td>
    </tr>
  </table>

</body>`;

const frontendInterview = `
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">

  <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td>
        <h2 style="color: #333333; text-align: center;">Interview Invitation - Front-End Development Intern Position</h2>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Dear Applicant,
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Thank you for applying for the Front-End Development Intern position at Techspance Ltd. We are impressed with your application and would like to invite you for an interview to discuss your qualifications and fit for the role.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Please select a day and time for the interview between <strong>today</strong> and <strong>20th September 2024</strong>, and include your time zone in your response. Kindly reply to this email within <strong>24 hours of receipt</strong> with your preferred time slot.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          We look forward to discussing this opportunity with you!
        </p>

       <p style="color: #333333; font-size: 16px; margin-bottom: 0;">
          Best regards,<br>
          <strong>Waliyat Imran</strong><br>
          Hiring Manager<br>
          Techspance Ltd<br>
          recruitment@techspance.com
        </p>
      </td>
    </tr>
  </table>

</body>

`;


const ibrahim = `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
  <tr>
    <td>
      <p style="margin: 0 0 16px;">Hi Ibrahim,</p>
      <p style="margin: 0 0 16px;">
        Thank you for your message. We are happy to accommodate your request and reschedule your interview to 
        <strong>12:30 PM (WAT)</strong>, which corresponds to <strong>2:30 PM (UTC +3)</strong>.
      </p>
      <p style="margin: 0 0 16px;">Looking forward to our conversation!</p>
      <p style="margin: 0;">
        Best regards,<br>
        Abdul Wasiu Adebayo<br>
        Lead Developer<br>
        <strong>Techspance Ltd</strong>
      </p>
    </td>
  </tr>
</table>


`;
const nawal = `
    <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">

  <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td>
        <h2 style="color: #333333; text-align: center;">Reminder: Front-End Development Intern Interview</h2>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Dear Applicant,
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          This is a reminder for your upcoming interview for the Front-End Development Intern position at Techspance Ltd.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Here are the details of your interview:
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 10px;">
          <strong>Date:</strong> Sep. 19, 2024<br>
          <strong>Time:</strong> 1:00 PM WAT (Please ensure this aligns with your time zone)<br>
          <strong>Google Meet Link:</strong> <a href="https://meet.google.com/ubc-qkjy-mwt" style="color: #3498db;">https://meet.google.com/ubc-qkjy-mwt</a><br>
          <strong>Duration:</strong> 30 minutes
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Please join the meeting promptly. We look forward to discussing your skills and how you might contribute to our team at Techspance Ltd.
        </p>

        <p style="color: #333333; font-size: 16px; margin-bottom: 0;">
          Best regards,<br>
          <strong>Waliyat Imran</strong><br>
          Hiring Manager<br>
          Techspance Ltd
        </p>
      </td>
    </tr>
  </table>

</body>


`;
const zubair = `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td style="padding: 20px;">
        <h2 style="color: #333333; text-align: center;">Interview Follow-Up</h2>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Dear Muhammad,
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          I hope you're doing well. I just wanted to follow up as we had scheduled your interview for the Front-End Development Intern position at Techspance Ltd today at 5:00 PM (WAT). It has now been 10 minutes past the scheduled time, and I wanted to check if you're still available to join the meeting.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          If there was any issue preventing you from attending, please let us know, and we can reschedule at a more convenient time.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Looking forward to your response.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 0;">
          Best regards,<br>
          <strong>Waliyat Imran</strong><br>
          Hiring Manager<br>
          Techspance Ltd
        </p>
      </td>
    </tr>
  </table>
</body>




`;
const abdul = `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
  <tr>
    <td>
      <p style="margin: 0 0 16px;">Hi Muhammad,</p>
      <p style="margin: 0 0 16px;">
        Thank you for letting us know. We understand, and we are happy to reschedule your interview to 
        <strong>5 PM (WAT)</strong> as per your request.
      </p>
      <p style="margin: 0 0 16px;">Looking forward to speaking with you then!</p>
      <p style="margin: 0;">
        Best regards,<br>
        Abdul Wasiu Adebayo<br>
        Lead Developer<br>
        <strong>Techspance Ltd</strong>
      </p>
    </td>
  </tr>
</table>

`;

const onboardingMessage = `
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td style="text-align: center;">
        <h2 style="color: #333333; text-align: center;">Intern Onboarding Information Form</h2>
        
      </td>
    </tr>
    <tr>
      <td>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">Dear Applicant,</p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Congratulations! We are pleased to inform you that you have been selected for the Frontend Development Intern position at Techspance Ltd.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          To move forward with the onboarding process, we kindly request that you fill out the following Google Form with your personal and professional details. This information will help us finalize your offer letter and get everything ready for your internship.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px; text-align: center;">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiDJzWbYPz8_hXcMEYuNloA-WY63U5ljEcP5YPQ-QqyvGdcg/viewform?usp=sf_link" style="color: #ffffff; background-color: #118DF0; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
            Click here to fill out the form
          </a>
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 20px;">
          Please complete the form within the next 48 hours to ensure a smooth onboarding process. If you have any questions or encounter any issues, feel free to reply to this email.
        </p>
        <p style="color: #333333; font-size: 16px; margin-bottom: 0;">
          We’re excited to have you join the team and look forward to working with you at Techspance Ltd!
        </p>
        <p style="color: #333333; font-size: 16px; margin-top: 20px;">
          Best regards,<br>
          <strong>Waliyat Imran</strong><br>
          Hiring Manager<br>
          Techspance Ltd
        </p>
      </td>
    </tr>
  </table>
</body>

`;

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.batch.send([
     
      {
        from: "recruitment@techspance.com",
        to: "aabdulwasiu6609@gmail.com",
        subject: "Request for Information to Complete Onboarding Process",
        html: onboardingMessage,
      },
    ]);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
