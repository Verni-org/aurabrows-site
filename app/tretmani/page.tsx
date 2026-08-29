import type { Metadata } from "next";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { treatments } from "@/data/treatments";
import { siteConfig } from "@/data/site";
import { treatmentImages } from "@/lib/images";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Tretmani",
  description:
    "AuraBrows autorska tehnika, puder obrve, hair stroke i trajna šminka usana — tretmani prilagođeni tvom licu.",
  ...buildPageMetadata({
    title: "Tretmani | AuraBrows by Saška",
    description:
      "AuraBrows autorska tehnika, puder obrve, hair stroke i trajna šminka usana — tretmani prilagođeni tvom licu.",
    path: "/tretmani",
    image: "https://aurabrowsbysaska.rs/images/site/aurabrows-tretman.jpeg",
  }),
};

export default function TretmaniPage() {
  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="label mb-6">Tretmani</p>
          <h1 className="text-5xl font-semibold mb-6">
            Tretmani kreirani prema{" "}
            <span className="accent">tvom licu</span>
          </h1>
          <p className="text-text-secondary">
            Svako lice je drugačije, zato se oblik obrva, raspored dlačica,
            nijansa i intenzitet pigmentacije uvek biraju individualno. Pre
            svakog tretmana razgovaramo o tvojim željama, analiziramo crte
            lica, prirodan rast dlačica i stanje kože, kako bismo odabrale
            tehniku koja će dati skladan i dugotrajan rezultat.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {treatments.map((t, i) => {
            const image = treatmentImages[t.id];

            return (
            <div
              key={t.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <PhotoPlaceholder
                  src={image?.src}
                  alt={image?.alt ?? t.name}
                  objectPosition={image?.objectPosition}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  label={`Foto — ${t.name}`}
                  className="aspect-[4/3]"
                />
              </div>
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <h2 className="text-3xl font-semibold mb-5">{t.name}</h2>
                <div className="flex flex-col gap-4 text-text-secondary mb-6">
                  {t.description.split("\n\n").map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
                <p className="label !text-[11px] mb-3">
                  Pravi izbor za tebe ako:
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {t.goodFor.map((g) => (
                    <li key={g} className="flex items-start gap-3 text-sm">
                      <span className="text-accent-gold mt-1">—</span>
                      <span className="text-text-secondary">{g}</span>
                    </li>
                  ))}
                </ul>
                <a href="/kontakt" className="btn-ghost">
                  Zakaži konsultaciju
                </a>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-24 card-border bg-bg-card p-10 md:p-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Nisi sigurna koja{" "}
            <span className="accent">tehnika</span> je za tebe?
          </h2>
          <p className="text-text-secondary mb-8">
            Ne moraš unapred znati naziv tretmana koji ti je potreban. Pre
            rada ćemo analizirati tvoje obrve ili usne, razgovarati o
            rezultatu koji želiš i odabrati tehniku ili kombinaciju tehnika
            koja najbolje odgovara tvojoj koži, prirodnim dlačicama i crtama
            lica.
          </p>
          <a href="/kontakt" className="btn-primary">
            Zakaži konsultaciju
          </a>
          <p className="text-xs text-text-secondary mt-6">
            ili nam piši direktno na{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent-gold"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
