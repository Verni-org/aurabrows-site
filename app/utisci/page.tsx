import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Utisci polaznica i klijentkinja",
  description:
    "Pogledaj poruke polaznica i klijentkinja o AuraBrows edukacijama, online kursevima i tretmanima.",
  ...buildPageMetadata({
    title: "Utisci polaznica i klijentkinja | AuraBrows by Saška",
    description:
      "Pogledaj poruke polaznica i klijentkinja o AuraBrows edukacijama, online kursevima i tretmanima.",
    path: "/utisci",
    image: "https://aurabrowsbysaska.rs/images/site/sertifikat-polaznica.jpeg",
  }),
};

export default function UtisciPage() {
  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="label mb-6">Utisci polaznica i klijentkinja</p>
          <h1 className="text-5xl font-semibold mb-6">
            Reči koje <span className="accent">greju</span>
          </h1>
        </div>

        <div className="mb-20">
          <TestimonialCarousel />
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
