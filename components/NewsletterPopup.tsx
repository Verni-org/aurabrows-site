"use client";

import { useCallback, useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";

const storageKey = "aura-newsletter-popup-dismissed-at";
const hideForMs = 3 * 24 * 60 * 60 * 1000;
const openDelayMs = 500;

function wasRecentlyDismissed() {
  try {
    const dismissedAt = Number(window.localStorage.getItem(storageKey));
    return dismissedAt > 0 && Date.now() - dismissedAt < hideForMs;
  } catch {
    return false;
  }
}

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(storageKey, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    if (wasRecentlyDismissed()) return;
    const timeout = window.setTimeout(() => setOpen(true), openDelayMs);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Prijava na Aura Brows listu"
    >
      <div
        className="bg-bg-card card-border w-full max-w-md my-8 p-8 relative"
        onClick={(event) => {
          event.stopPropagation();
          // MailerLite's success overlay closes on click; close the popup with it.
          if ((event.target as HTMLElement).closest(".ml-block-success")) close();
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Zatvori"
          className="absolute top-3 right-4 text-text-secondary hover:text-accent-gold text-2xl leading-none"
        >
          ×
        </button>
        <NewsletterForm showName={false} />
      </div>
    </div>
  );
}
