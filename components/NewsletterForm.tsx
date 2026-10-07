"use client";

import { useEffect, useId, useRef, useState } from "react";

const subscribeUrl =
  "https://assets.mailerlite.com/jsonp/2688732/forms/200563571880363040/subscribe";

const inputClassName =
  "w-full min-w-0 bg-transparent border border-border rounded px-4 py-3 text-base sm:text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-gold";

export default function NewsletterForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const checkMailerLite = () => {
      const mailerLite = (
        window as Window & {
          ml_jQuery?: (element: HTMLFormElement) => {
            data: (key: string) => unknown;
          };
        }
      ).ml_jQuery;

      if (formRef.current && mailerLite?.(formRef.current).data("ml-submit-bound")) {
        setReady(true);
        setLoadError(false);
        window.clearInterval(interval);
        window.clearTimeout(timeout);
      }
    };

    const interval = window.setInterval(checkMailerLite, 100);
    const timeout = window.setTimeout(() => setLoadError(true), 10000);
    checkMailerLite();

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div id={`mlb2-46777863${formId}`} className="ml-subscribe-form newsletter-form">
      <h2 className="text-xl font-semibold leading-tight mb-2">
        Prijavi se na Aura Brows listu
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        Konkretni saveti za PMU rad, simetriju, tehniku, klijente i razvoj
        tvog biznisa direktno na email.
      </p>

      <form
        ref={formRef}
        action={subscribeUrl}
        method="post"
        onSubmit={(event) => {
          if (!ready) event.preventDefault();
        }}
        className="ml-block-form flex flex-col gap-3"
      >
        <label className="ml-field-name">
          <span className="sr-only">Tvoje ime</span>
          <input
            name="fields[name]"
            type="text"
            placeholder="Tvoje ime"
            autoComplete="given-name"
            className={inputClassName}
          />
        </label>

        <label className="ml-field-email ml-validate-email ml-validate-required">
          <span className="sr-only">Tvoj email</span>
          <input
            name="fields[email]"
            type="email"
            required
            placeholder="Tvoj mail"
            autoComplete="email"
            className={inputClassName}
          />
        </label>

        <div className="text-xs text-text-secondary leading-relaxed">
          <p className="font-semibold text-text-primary mb-1">
            Saglasnost za email komunikaciju
          </p>
          <p className="mb-2">
            Tvoje podatke ćemo koristiti da ti šaljemo edukativne sadržaje,
            korisne savete, novosti i ponude Aura Brows. Saglasnost možeš
            povući u bilo kom trenutku.
          </p>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="gdpr[]"
              value="Email"
              required
              className="mt-1 accent-accent-gold shrink-0"
            />
            <span>
              Želim da primam edukativne sadržaje, korisne savete, novosti i
              ponude Aura Brows putem emaila.
            </span>
          </label>
          <p className="mt-2">
            Možeš se odjaviti u bilo kom trenutku. Slanjem forme pristaješ
            na obradu podataka za email komunikaciju.
          </p>
        </div>

        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <p className="ml-server-error d-none text-sm text-red-400" role="alert" />
        {loadError && !ready && (
          <p className="text-sm text-red-400" role="alert">
            Forma trenutno nije dostupna. Pokušaj ponovo malo kasnije.
          </p>
        )}
        <button
          type="submit"
          aria-disabled={!ready}
          onClick={(event) => {
            if (!ready) event.preventDefault();
          }}
          className={`primary btn-primary w-full !px-5 !py-3 ${ready ? "" : "opacity-50 cursor-not-allowed"}`}
        >
          {ready ? "Pridruži se" : "Učitavanje..."}
        </button>
        <button type="button" disabled className="loading btn-primary w-full !px-5 !py-3 hidden">
          Slanje...
        </button>
      </form>

      <div
        className="ml-block-success fixed inset-0 z-50 hidden bg-black/75 p-5"
        role="alertdialog"
        aria-modal="true"
        aria-label="Prijava na Aura Brows listu"
      >
        <div className="flex min-h-full items-center justify-center">
          <div className="w-full max-w-md rounded-lg border border-border bg-bg-card p-7 text-center shadow-2xl">
            <h2 className="text-2xl font-semibold mb-3">Hvala što si se prijavila!</h2>
            <p className="text-text-secondary mb-6">
              Proveri svoj email i potvrdi prijavu. Nakon potvrde stižu ti
              prvi Aura Brows saveti.
            </p>
            <button type="button" className="btn-primary w-full !px-5 !py-3">
              Zatvori
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
