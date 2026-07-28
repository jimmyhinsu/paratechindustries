import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, mobileNumber, email } = body;

    // Validation
    if (!fullName || !mobileNumber) {
      return NextResponse.json(
        { success: false, error: "Full Name and Phone Number are required." },
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

    // Save user entry to Supabase database welcome_users table
    const { error: dbError } = await supabase.from("welcome_users").insert([
      {
        full_name: fullName,
        mobile_number: cleanMobile,
        email: email || null,
        created_at: new Date().toISOString()
      }
    ]);

    if (dbError) {
      console.error("Supabase welcome_users insert error:", dbError);
    }

    // Send email using Nodemailer
    const smtpUser = process.env.SMTP_USER || "info.paratechindustries@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "nppo lzdn elah cekd";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass.replace(/\s+/g, ""),
      },
    });

    const mailOptions = {
      from: `"Paratech Website Inquiry" <${smtpUser}>`,
      to: "info.paratechindustries@gmail.com",
      replyTo: email || smtpUser,
      subject: `New Website Visitor Lead: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #111111; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">🎯 New Website Visitor Lead</h2>
          </div>
          <div style="padding: 24px; color: #333333; line-height: 1.6;">
            <p style="font-size: 15px; margin-top: 0;">A visitor submitted their contact details via the Welcome Popup on Paratech Industries website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Full Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile Number:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <a href="tel:${cleanMobile}" style="color: #0066cc; text-decoration: none; font-weight: 600;">${cleanMobile}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #0066cc; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Submitted At:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${new Date().toLocaleString()}</td>
              </tr>
            </table>

            <p style="font-size: 12px; color: #888888; margin-top: 24px; text-align: center;">
              This notification was generated automatically from Paratech Industries Welcome Popup.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Welcome details submitted successfully!" });
  } catch (error) {
    console.error("Error processing welcome popup submission:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit details. Please try again." },
      { status: 500 }
    );
  }
}
