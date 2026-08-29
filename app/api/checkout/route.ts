import { NextResponse } from "next/server";
import { sendEmail, ownerNotifyEmail } from "@/lib/email";
import { appendRecord } from "@/lib/store";

interface CheckoutBody {
  courseId: string;
  courseName: string;
  plan?: "grupna" | "individualna";
  payment?: "jednokratno" | "rate";
  addBonus?: boolean;
  name: string;
  email: string;
  phone: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<CheckoutBody>;
  const { courseId, courseName, name, email, phone } = body;

  if (!courseId || !courseName || !name || !email || !phone) {
    return NextResponse.json({ error: "Nedostaju obavezna polja." }, { status: 400 });
  }

  const order = {
    ...body,
    createdAt: new Date().toISOString(),
  };

  await appendRecord("orders.json", order);

  const detailsList = [
    `Kurs: ${courseName}`,
    body.plan && `Vrsta: ${body.plan}`,
    body.payment && `Plaćanje: ${body.payment === "rate" ? "u 2 rate" : "jednokratno"}`,
    body.addBonus && `Order bump: Bonus kurs — Profesionalno sređivanje fotografija (19 €)`,
    `Ime: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone}`,
  ]
    .filter(Boolean)
    .join("<br/>");

  await sendEmail({
    to: ownerNotifyEmail(),
    subject: `Nova narudžbina: ${courseName}`,
    html: `<h2>Nova narudžbina</h2><p>${detailsList}</p>`,
  });

  await sendEmail({
    to: email,
    subject: "Potvrda prijave — AuraBrows by Saška",
    html: `<p>Zdravo ${name},</p><p>Hvala na prijavi za <strong>${courseName}</strong>. Tvoja narudžbina je zabeležena.</p><p>Saška će ti se uskoro javiti na ovaj email sa instrukcijama za uplatu i daljim koracima. Nakon evidentirane uplate dobijaš pristup kursu.</p><p>Vidimo se uskoro,<br/>AuraBrows by Saška</p>`,
  });

  return NextResponse.json({ ok: true });
}
