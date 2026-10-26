import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
      requirements,
      formType = "Website Lead / Inquiry",
      selectedModules = [],
    } = data

    const fullName = name || [firstName, lastName].filter(Boolean).join(" ") || "Prospective Client"
    const inquiryMessage = message || requirements || "Requested a callback / product demo walkthrough."
    const modulesText = Array.isArray(selectedModules) && selectedModules.length > 0 
      ? selectedModules.join(", ") 
      : "General Enterprise Suite"

    console.log("==================================================")
    console.log(`📩 NEW INQUIRY RECEIVED FOR: rvmcrm@gmail.com`)
    console.log(`Form Type: ${formType}`)
    console.log(`From: ${fullName} (${email || "No email provided"})`)
    console.log(`Phone: ${phone || "N/A"}`)
    console.log(`Company: ${company || "N/A"}`)
    console.log(`Modules of Interest: ${modulesText}`)
    console.log(`Message/Requirements: ${inquiryMessage}`)
    console.log("==================================================")

    const targetRecipient = process.env.INQUIRY_RECIPIENT || "rvmcrm@gmail.com"

    // Construct professional HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #125486; padding: 24px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">RVM CRM — New Lead Submission</h1>
          <p style="color: #e0f2fe; margin: 6px 0 0 0; font-size: 14px;">Notification for ${formType}</p>
        </div>
        
        <div style="padding: 30px;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">
            A new inquiry has been submitted through the RVM CRM website. Below are the prospect details:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 35%;">Prospect Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Work Email:</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #125486; text-decoration: none; font-weight: 600;">${email || "N/A"}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #125486; text-decoration: none; font-weight: 600;">${phone || "N/A"}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Company / Organization:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${company || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Inquiry Type / Subject:</td>
              <td style="padding: 10px 0; color: #0f172a;">${subject || formType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Modules of Interest:</td>
              <td style="padding: 10px 0; color: #0f172a;">${modulesText}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <div style="font-size: 13px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Message / Operational Requirements:</div>
            <div style="font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${inquiryMessage}</div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center;">
            <a href="mailto:${email}?subject=RE: RVM CRM Demo & Inquiry" style="display: inline-block; background-color: #125486; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Reply Directly to Prospect
            </a>
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 16px 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          RVM CRM Automated Notification System &bull; Delivered to ${targetRecipient} &bull; Powered by RVM Infotech Private Limited
        </div>
      </div>
    `

    // If SMTP credentials exist, send email via nodemailer
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Boolean(process.env.SMTP_SECURE !== "false"),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"${fullName} via RVM CRM" <${process.env.SMTP_USER}>`,
        to: targetRecipient,
        replyTo: email || undefined,
        subject: `[RVM CRM Lead] ${formType} from ${fullName} - ${company || "New Inquiry"}`,
        html: htmlContent,
      })
      console.log(`✅ Email successfully dispatched via SMTP to ${targetRecipient}`)
    } else {
      console.log(`ℹ️ SMTP credentials not detected in env. Lead captured and logged for ${targetRecipient}.`)
    }

    return NextResponse.json({
      success: true,
      message: `Thank you! Your inquiry has been forwarded to our team at ${targetRecipient}.`,
    })
  } catch (error: any) {
    console.error("Error processing inquiry submission:", error)
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process form submission." },
      { status: 500 }
    )
  }
}
