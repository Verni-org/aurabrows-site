import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";
import { getContactPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Piši nam za sva pitanja o kursevima, edukacijama i tretmanima. Beograd, Srbija.",
  ...buildPageMetadata({
    title: "Kontakt | AuraBrows by Saška",
    description:
      "Piši nam za sva pitanja o kursevima, edukacijama i tretmanima. Beograd, Srbija.",
    path: "/kontakt",
    image: "https://aurabrowsbysaska.rs/images/site/hero-edukacija.jpeg",
  }),
};

export default function KontaktPage() {
  const contactSchema = getContactPageSchema();

  return (
    <div className="section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <p className="label !text-sm md:!text-lg mb-4 md:mb-6">Kontakt</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 md:mb-6">
            Javi nam se <span className="accent">direktno</span>
          </h1>
          <p className="text-text-secondary">
            Za pitanja o kursevima, edukacijama, tretmanima ili saradnji -
            javi nam se, odgovaramo u najkraćem roku.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-16 md:gap-y-10 max-w-4xl mx-auto">
          <div className="order-2 md:order-none md:row-span-2">
            <h2 className="text-2xl font-semibold mb-6">Pošalji poruku</h2>
            <ContactForm />
          </div>

          <div className="order-1 md:order-none">
            <h2 className="text-2xl font-semibold mb-4 md:mb-6">Informacije</h2>
            <dl className="flex flex-col gap-4 text-base md:text-sm">
              <div>
                <dt className="label !text-[10px] mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-block py-1 text-accent-gold break-all"
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
                    className="inline-block py-1 text-accent-gold"
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

          <div className="order-3 md:order-none md:self-start card-border bg-bg-card p-5 sm:p-6">
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
  );
}
