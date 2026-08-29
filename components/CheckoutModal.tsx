"use client";

import { useState } from "react";
import { Course, bonusCourse, formatPrice } from "@/data/courses";

export default function CheckoutModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  const isLive = course.type !== "online";
  const [plan, setPlan] = useState<"grupna" | "individualna">("grupna");
  const [payment, setPayment] = useState<"jednokratno" | "rate">("jednokratno");
  const [addBonus, setAddBonus] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const selectedPrice =
    isLive && plan === "individualna" && course.priceIndividual
      ? course.priceIndividual
      : course.price;

  const total =
    selectedPrice + (addBonus ? bonusCourse.price : 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          courseName: course.name,
          plan: isLive ? plan : undefined,
          payment: course.hasRatePayment ? payment : undefined,
          addBonus,
          ...form,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-bg-card card-border w-full max-w-lg my-8 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Zatvori"
          className="absolute top-5 right-5 text-text-secondary hover:text-accent-gold text-2xl leading-none"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="py-10 text-center">
            <p className="text-2xl font-semibold mb-3">
              Hvala na <span className="accent">prijavi!</span>
            </p>
            <p className="text-text-secondary">
              Poslali smo ti email sa potvrdom i instrukcijama za uplatu.
              Saška će ti se javiti čim uplata bude evidentirana.
            </p>
            <button onClick={onClose} className="btn-ghost mt-8">
              Zatvori
            </button>
          </div>
        ) : (
          <>
            <p className="label mb-2">{isLive ? "Prijava" : "Narudžbina"}</p>
            <h3 className="text-2xl font-semibold mb-6">{course.name}</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {isLive && course.priceIndividual && (
                <div>
                  <p className="text-sm mb-2 text-text-secondary">
                    Izaberi vrstu obuke
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {(["grupna", "individualna"] as const).map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPlan(p)}
                        className={`border rounded px-4 py-3 text-sm capitalize transition-colors ${
                          plan === p
                            ? "border-accent-gold text-accent-gold"
                            : "border-border text-text-secondary"
                        }`}
                      >
                        {p}
                        <span className="block text-xs mt-1">
                          {formatPrice(
                            p === "individualna"
                              ? course.priceIndividual!
                              : course.price,
                            course.currency
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLive && course.hasRatePayment && (
                <div>
                  <p className="text-sm mb-2 text-text-secondary">
                    Način plaćanja
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      [
                        { key: "jednokratno", label: "Jednokratno" },
                        { key: "rate", label: "U 2 rate" },
                      ] as const
                    ).map((opt) => (
                      <button
                        type="button"
                        key={opt.key}
                        onClick={() => setPayment(opt.key)}
                        className={`border rounded px-4 py-3 text-sm transition-colors ${
                          payment === opt.key
                            ? "border-accent-gold text-accent-gold"
                            : "border-border text-text-secondary"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <input
                required
                placeholder="Ime i prezime"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent-gold"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent-gold"
              />
              <input
                required
                type="tel"
                placeholder="Telefon"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent-gold"
              />

              {!isLive && (
                <label className="flex items-start gap-3 border border-border rounded px-4 py-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addBonus}
                    onChange={(e) => setAddBonus(e.target.checked)}
                    className="mt-1 accent-[var(--accent-gold)]"
                  />
                  <span className="text-sm text-text-secondary">
                    Dodaj bonus kurs{" "}
                    <span className="text-text-primary">
                      „{bonusCourse.name}“
                    </span>{" "}
                    za samo{" "}
                    <span className="text-accent-gold font-semibold">
                      {formatPrice(bonusCourse.price, bonusCourse.currency)}
                    </span>
                  </span>
                </label>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-text-secondary">Ukupno</span>
                <span className="text-2xl font-bold text-accent-gold">
                  {formatPrice(total, course.currency)}
                </span>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full"
              >
                {status === "loading"
                  ? "Slanje..."
                  : isLive
                    ? "Prijavi se"
                    : "Potvrdi narudžbinu"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Došlo je do greške. Pokušaj ponovo ili nam piši direktno na
                  email.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
