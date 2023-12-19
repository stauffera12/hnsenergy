import { NextResponse, NextRequest } from 'next/server';
import sendMail from '../../../../services/mail.service';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();
    console.log('Request body', requestData);
        const { to, subject, text, html, type } = requestData;
    await sendMail({
      to,
      subject,
      text,
      html,
      type: type ?? 'gmail'
    });
    return NextResponse.json({
      message: "Email sent",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
