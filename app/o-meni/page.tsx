import type { Metadata } from "next";
import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { siteImages } from "@/lib/images";
import { getPersonSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "O meni",
  description:
    "Aleksandra Stojilković — Saška. Osnivač Studija lepote Saška, edukator za obrve i kreator autorske tehnike AuraBrows.",
};

const experience = [
  "Beauty industrija od 2011. godine",
  "Kreator autorske tehnike AuraBrows by Saška",
  "Bivši edukator PhiAcademy",
  "Osvajač nagrada na WULOP takmičenju u oblasti obrva",
  "Mentor studentima koji danas ostvaruju zapažene rezultate i osvajaju nagrade na takmičenjima",
];

export default function OMeniPage() {
  const personSchema = getPersonSchema();

  return (
    <div className="section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="container-aura">
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <PhotoPlaceholder
            src={siteImages.portrait.src}
            alt={siteImages.portrait.alt}
            objectPosition={siteImages.portrait.objectPosition}
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="aspect-[4/5]"
          />
          <div>
            <p className="label mb-6">O meni</p>
            <h1 className="text-5xl font-semibold leading-tight mb-6">
              Ja sam Aleksandra Stojilković,{" "}
              <span className="accent">poznatija kao Saška.</span>
            </h1>
            <div className="flex flex-col gap-4 text-text-secondary">
              <p>
                Osnivač sam Studija lepote Saška, edukator za obrve i kreator
                autorske tehnike AuraBrows by Saška.
              </p>
              <p>
                U beauty industriji sam od 2011. godine. Svoje iskustvo
                gradila sam kroz rad sa klijentima, kontinuirane edukacije i
                profesionalna usavršavanja, a deo svog profesionalnog puta
                provela sam i kao edukator u okviru PhiAcademy.
              </p>
              <p>
                Danas, kroz svoj studio i AuraBrows edukacije, spajam
                iskustvo, estetiku i individualan pristup. Verujem da dobro
                oblikovane obrve nisu samo estetski detalj — one naglašavaju
                prirodnu lepotu, vraćaju samopouzdanje i stvaraju harmoniju
                lica.
              </p>
              <p>
                Pored rada sa klijentima, svoju strast prenosim kroz
                edukacije i mentorstvo. Moj cilj nije samo da prenesem
                tehniku, već da pomognem budućim beauty profesionalcima da
                steknu sigurnost, razviju svoj stil i izgrade uspešnu
                karijeru.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Iskustvo koje uliva <span className="accent">poverenje</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {experience.map((item) => (
              <div
                key={item}
                className="card-border bg-bg-card p-6 text-sm text-text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-5">
            Verujem da prava transformacija ne počinje{" "}
            <span className="accent">promenom izgleda.</span>
          </h2>
          <p className="text-text-secondary mb-10">
            Počinje onog trenutka kada se spoje znanje, iskustvo i poverenje.
            Bilo da dolazite kao klijent ili student, moj cilj je isti — da
            iz studija izađete sigurniji, zadovoljniji i sa osećajem da ste
            napravili pravi izbor.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/kursevi" className="btn-primary">
              Pogledaj kurseve
            </Link>
            <Link href="/kontakt" className="btn-ghost">
              Kontaktiraj me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
