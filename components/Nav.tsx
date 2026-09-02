"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/kursevi", label: "Kursevi" },
  { href: "/tretmani", label: "Tretmani" },
  { href: "/o-meni", label: "O meni" },
  { href: "/utisci", label: "Utisci" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg-primary/95 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-aura flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-xl tracking-[0.2em] uppercase font-semibold text-text-primary"
        >
          Aura Brows
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="label !text-[13px] hover:text-accent-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/kursevi" className="btn-primary">
            Upiši se
          </Link>
        </div>

        <button
          aria-label="Meni"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-6 bg-text-primary transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden container-aura pb-6 flex flex-col gap-5 border-t border-border pt-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="label !text-[13px] hover:text-accent-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kursevi" className="btn-primary w-fit">
            Upiši se
          </Link>
        </nav>
      )}
    </header>
  );
}
