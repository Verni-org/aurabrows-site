import { NextResponse } from "next/server";
import { sendEmail, ownerNotifyEmail } from "@/lib/email";
import { appendRecord } from "@/lib/store";

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Neispravan email." }, { status: 400 });
  }

  await appendRecord("newsletter.json", { email, createdAt: new Date().toISOString() });

  await sendEmail({
    to: ownerNotifyEmail(),
    subject: "Nova prijava na mail listu",
    html: `<p>Nova prijava: ${email}</p>`,
  });

  await sendEmail({
    to: email,
    subject: "Dobrodošla u AuraBrows by Saška",
    html: `<p>Hvala što si se prijavila na našu mail listu!</p><p>Prva ćeš saznati za nove termine, kurseve i pogodnosti.</p>`,
  });

  return NextResponse.json({ ok: true });
}
