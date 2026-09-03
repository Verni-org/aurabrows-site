"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-border bg-bg-card p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Poruka je <span className="accent">poslata!</span>
        </p>
        <p className="text-text-secondary text-sm">
          Javićemo ti se u najkraćem roku na navedeni email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        required
        placeholder="Ime i prezime"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full min-h-14 bg-transparent border border-border rounded px-5 py-4 text-base leading-tight focus:outline-none focus:border-accent-gold"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full min-h-14 bg-transparent border border-border rounded px-5 py-4 text-base leading-tight focus:outline-none focus:border-accent-gold"
      />
      <textarea
        required
        rows={6}
        placeholder="Poruka"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full min-h-40 bg-transparent border border-border rounded px-5 py-4 text-base leading-relaxed focus:outline-none focus:border-accent-gold resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-fit"
      >
        {status === "loading" ? "Slanje..." : "Pošalji"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400">
          Došlo je do greške. Pokušaj ponovo ili nam piši direktno na email.
        </p>
      )}
    </form>
  );
}
