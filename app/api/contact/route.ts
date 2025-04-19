import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Import Resend (install with: npm install resend)
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, website } = await req.json();
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    // Honeypot spam check
    if (website) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }
    // Save to DB
    await prisma.contactMessage.create({
      data: { name, email, message },
    });
    // Send notification email
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Set this to a verified sender
      to: process.env.CONTACT_EMAIL_TO || 'your@email.com',
      subject: `New contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
