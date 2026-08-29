import { NextResponse } from "next/server";
import { sendEmail, ownerNotifyEmail } from "@/lib/email";
import { appendRecord } from "@/lib/store";

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
  }

  await appendRecord("contact.json", { name, email, message, createdAt: new Date().toISOString() });

  await sendEmail({
    to: ownerNotifyEmail(),
    subject: `Nova poruka sa sajta — ${name}`,
    html: `<p><strong>Ime:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Poruka:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  return NextResponse.json({ ok: true });
}
