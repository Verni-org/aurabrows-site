import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Piši nam za sva pitanja o kursevima, edukacijama i tretmanima. Beograd, Srbija.",
};

export default function KontaktPage() {
  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="label mb-6">Kontakt</p>
          <h1 className="text-5xl font-semibold mb-6">
            Javi nam se <span className="accent">direktno</span>
          </h1>
          <p className="text-text-secondary">
            Za pitanja o kursevima, edukacijama, tretmanima ili saradnji —
            javi nam se, odgovaramo u najkraćem roku.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Pošalji poruku</h2>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informacije</h2>
              <dl className="flex flex-col gap-4 text-sm">
                <div>
                  <dt className="label !text-[10px] mb-1">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-accent-gold"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label !text-[10px] mb-1">Instagram</dt>
                  <dd>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-gold"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label !text-[10px] mb-1">Lokacija</dt>
                  <dd className="text-text-secondary">{siteConfig.location}</dd>
                </div>
              </dl>
            </div>

            <div className="card-border bg-bg-card p-6">
              <h2 className="text-lg font-semibold mb-2">
                Prijavi se na <span className="accent">listu</span>
              </h2>
              <p className="text-text-secondary text-sm mb-5">
                Prva saznaj za nove termine, kurseve i pogodnosti.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
