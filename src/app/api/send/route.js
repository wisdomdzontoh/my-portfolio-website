import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse JSON data from the request body
    const { email, subject, message } = await req.json();

    // Log the request data for debugging purposes
    console.log("Received email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Validate required fields
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Return success response
    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return error response
    return NextResponse.json(
      { error: "An error occurred while sending the email." },
      { status: 500 }
    );
  }
}
