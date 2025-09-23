import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER, // Your authenticated email
      to: 'learning@triquetratech.co.za', // Where the email goes
      subject: `Website Contact from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              New Contact Form Submission from ${name}
            </h2>
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #2d5a2d; font-weight: bold;">
                Reply directly to this email to respond to ${name}
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Name:</strong>
              <p style="margin: 5px 0; color: #333;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Email:</strong>
              <p style="margin: 5px 0; color: #333;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Subject:</strong>
              <p style="margin: 5px 0; color: #333;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Message:</strong>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">
                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from your website contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
              </p>
            </div>
          </div>
        </div>
      `,
      // Also include a plain text version
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
      `,
      // Set reply-to as the sender's email
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}