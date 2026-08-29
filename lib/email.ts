import { siteConfig } from "@/data/site";

interface SendEmailArgs {
  to: string;
  subject: string;
  html: string;
}

/**
 * Sends transactional email via Resend's HTTP API. Falls back to a console
 * log when RESEND_API_KEY isn't configured, so forms keep working in local
 * dev / before the client wires up their email provider.
 */
export async function sendEmail({ to, subject, html }: SendEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "AuraBrows by Saška <onboarding@resend.dev>";

  if (!apiKey) {
    console.log(`[email:stub] To: ${to} | Subject: ${subject}\n${html}`);
    return { skipped: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error (${res.status}): ${text}`);
  }

  return res.json();
}

export function ownerNotifyEmail() {
  return process.env.ORDER_NOTIFY_EMAIL || siteConfig.email;
}
