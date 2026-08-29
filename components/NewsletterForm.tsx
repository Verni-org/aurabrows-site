"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-accent-gold">
        Hvala na prijavi! Proveri inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tvoj email"
        className="flex-1 min-w-0 bg-transparent border border-border rounded px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-gold"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary !px-5 !py-3 shrink-0"
      >
        {status === "loading" ? "..." : "Pošalji"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 absolute mt-14">
          Greška — pokušaj ponovo.
        </p>
      )}
    </form>
  );
}
