import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, mobileNumber, email, message, productName } = body;

    // Validation
    if (!mobileNumber || !email) {
      return NextResponse.json(
        { success: false, error: "Mobile number and Email address are required." },
        { status: 400 }
      );
    }

    const cleanMobile = String(mobileNumber).replace(/\D/g, "");
    if (cleanMobile.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Mobile number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || "info.paratechindustries@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "nppo lzdn elah cekd";

    // Transporter configuration for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass.replace(/\s+/g, ""), // strip any spaces from app password if present
      },
    });

    const mailOptions = {
      from: `"Paratech Website Inquiry" <${smtpUser}>`,
      to: "info.paratechindustries@gmail.com",
      replyTo: email,
      subject: `New Quote Request${productName ? `: ${productName}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #111111; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Quote Inquiry Received</h2>
          </div>
          <div style="padding: 24px; color: #333333; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">You have received a new quote inquiry from the Paratech Industries website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              ${productName ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Product:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${productName}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="tel:${mobileNumber}" style="color: #0066cc; text-decoration: none;">${mobileNumber}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message || "No message provided"}</td>
              </tr>
            </table>

            <p style="font-size: 12px; color: #888888; margin-top: 24px; text-align: center;">
              This inquiry was sent automatically from Paratech Industries website quote form.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Quote request sent successfully." });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
