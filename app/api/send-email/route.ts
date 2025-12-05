// app/api/send-email/route.ts - USING NODEMAILER
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Nodemailer API called');
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Get environment variables
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM || 'Portfolio Contact <amanuel2123alex@gmail.com>';
    const emailTo = process.env.EMAIL_TO || 'amanuel2123alex@gmail.com';

    // Check environment variables
    if (!emailUser || !emailPassword) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailHost || 'smtp.gmail.com',
      port: parseInt(emailPort || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: false, // For development only
      },
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service connection failed. Please check credentials.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: emailFrom,
      to: emailTo,
      replyTo: body.email,
      subject: `New Contact Form Message from ${body.name || 'Anonymous'}`,
      text: `
Name: ${body.name || 'Anonymous'}
Email: ${body.email}
Message: ${body.message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4F46E5; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; padding: 5px 0; }
    .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4F46E5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From:</div>
        <div class="value">${body.name || 'Anonymous'} (${body.email})</div>
      </div>
      <div class="field">
        <div class="label">Date:</div>
        <div class="value">${new Date().toLocaleString()}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message">${body.message.replace(/\n/g, '<br>')}</div>
      </div>
      <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
        <small>This message was sent from your portfolio contact form.</small>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      messageId: info.messageId,
    });

  } catch (error: any) {
    console.error('💥 Email sending error:', error);
    
    let errorMessage = 'Failed to send email. Please try again.';
    
    // Common error handling
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection to email service failed. Please check your internet.';
    } else if (error.message?.includes('Invalid login')) {
      errorMessage = 'Invalid email credentials. Please check your email settings.';
    }

    return NextResponse.json(
      { error: errorMessage, details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}