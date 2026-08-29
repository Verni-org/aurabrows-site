import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Utisci polaznica",
  description:
    "Pročitaj šta polaznice kažu o AuraBrows edukacijama i online kursevima.",
  ...buildPageMetadata({
    title: "Utisci polaznica | AuraBrows by Saška",
    description:
      "Pročitaj šta polaznice kažu o AuraBrows edukacijama i online kursevima.",
    path: "/utisci",
    image: "https://aurabrowsbysaska.rs/images/site/sertifikat-polaznica.jpeg",
  }),
};

export default function UtisciPage() {
  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="label mb-6">Utisci polaznica</p>
          <h1 className="text-5xl font-semibold mb-6">
            Reči koje <span className="accent">greju</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/kursevi" className="btn-primary">
            Pogledaj kurseve
          </Link>
        </div>
      </div>
    </div>
  );
}
