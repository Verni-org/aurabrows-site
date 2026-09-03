import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import { IconInfinity, IconCertificate, IconCommunity, IconSteps } from "@/components/icons";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { siteImages } from "@/lib/images";

const previewSlugs = [
  "aurabrows-bazna-obuka",
  "puder-obrve-bazna-obuka",
  "aurabrows-online-bazna-obuka",
  "savrsena-simetrija-obrva",
];
const levelOrder = {
  pocetni: 0,
  svi: 1,
  srednji: 2,
  napredni: 3,
} as const;

const previewCourses = previewSlugs
  .map((slug) => courses.find((c) => c.slug === slug))
  .filter((c): c is (typeof courses)[number] => Boolean(c))
  .sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

const stats = [
  { value: "1200+", label: "zadovoljnih polaznica" },
  { value: "9", label: "godina iskustva" },
  { value: "4.9", label: "prosečna ocena" },
  { value: "30+", label: "zemalja polaznica" },
];

const benefits = [
  {
    icon: IconInfinity,
    title: "Doživotni pristup",
    text: "Gledaj kad god želiš, koliko god puta želiš.",
  },
  {
    icon: IconCertificate,
    title: "Sertifikat",
    text: "Zvanična potvrda o završenoj obuci.",
  },
  {
    icon: IconCommunity,
    title: "Privatna zajednica",
    text: "Podrška i odgovori i posle kursa.",
  },
  {
    icon: IconSteps,
    title: "Korak po korak",
    text: "Jasne lekcije od osnova do naprednog.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="container-aura pt-8 pb-20 md:pt-12 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label mb-6">Online akademija obrva</p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
              Savršene obrve počinju <span className="accent">znanjem</span>
            </h1>
            <div className="w-20 h-px bg-accent-gold/60 mb-6" />
            <p className="text-lg text-text-secondary max-w-md mb-10">
              Naučite zanat puder obrva i oblikovanja od nule, kroz premium
              video kurseve koje gledate svojim tempom, sa doživotnim
              pristupom i sertifikatom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kursevi" className="btn-primary">
                Pogledaj kurseve
              </Link>
              <Link href="/o-meni" className="btn-ghost">
                Upoznaj Sašku
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            objectPosition={siteImages.hero.objectPosition}
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            ratio="4 / 5"
          />
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-border">
        <div className="container-aura py-6">
          <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-border bg-bg-card/50 px-6 py-8 text-center"
              >
                <p className="text-3xl md:text-4xl font-semibold text-accent-gold mb-1">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. O MENI */}
      <section className="section-pad">
        <div className="container-aura grid md:grid-cols-2 gap-14 items-center">
          <PhotoPlaceholder
            src={siteImages.portrait.src}
            alt={siteImages.portrait.alt}
            objectPosition={siteImages.portrait.objectPosition}
            sizes="(max-width: 768px) 100vw, 40vw"
            ratio="4 / 5"
          />
          <div>
            <p className="label mb-6">Dobrodošli u Aura Brows</p>
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Verujem da svaka žena zaslužuje da se{" "}
              <span className="accent">oseća sigurno u svoje umeće.</span>
            </h2>
            <div className="w-20 h-px bg-accent-gold/60 mb-6" />
            <p className="text-text-secondary mb-8">
              Pre devet godina uzela sam prvu olovku za mapiranje i zaljubila
              se u preciznost zanata. Danas je Aura Brows prepoznatljivo ime u
              oblikovanju i puder tehnici, a moja najveća radost je da to
              znanje prenesem dalje.
            </p>
            <div className="flex gap-10 mb-8 pb-8 border-b border-border">
              <div>
                <p className="text-2xl font-semibold text-accent-gold">9+</p>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  godina iskustva
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-accent-gold">
                  1200+
                </p>
                <p className="text-xs uppercase tracking-wider text-text-secondary">
                  polaznica online kursa
                </p>
              </div>
            </div>
            <p className="font-semibold text-lg">Saška</p>
          </div>
        </div>
      </section>

      {/* 4. KURSEVI PREVIEW */}
      <section className="section-pad bg-bg-card">
        <div className="container-aura">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label mb-6">Online kursevi</p>
            <h2 className="text-4xl font-semibold mb-5">
              Izaberi svoj <span className="accent">put</span>
            </h2>
            <div className="w-20 h-px bg-accent-gold/60 mx-auto mb-5" />
            <p className="text-text-secondary">
              Doživotni pristup, sertifikat i privatna zajednica uz svaki
              kurs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/kursevi" className="btn-ghost">
              Pogledaj sve kurseve
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BENEFITI */}
      <section className="section-pad">
        <div className="container-aura grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-accent-gold/40 text-accent-gold flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-text-secondary">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. UTISCI */}
      <section className="section-pad bg-bg-card">
        <div className="container-aura">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label mb-6">Utisci polaznica</p>
            <h2 className="text-4xl font-semibold">
              Reči koje <span className="accent">greju</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section-pad bg-bg-section-alt text-[#1a1611]">
        <div className="container-aura text-center max-w-xl mx-auto">
          <p className="label !text-[#8a7a5f] mb-6">Spremna za prvi korak?</p>
          <h2 className="text-4xl font-semibold mb-10">
            Pretvori strast u <span className="accent">profesiju</span>
          </h2>
          <Link href="/kursevi" className="btn-primary">
            Pogledaj kurseve
          </Link>
        </div>
      </section>
    </>
  );
}
