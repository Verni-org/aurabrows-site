import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/data/faq";
import { getFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Najčešća pitanja",
  description:
    "Odgovori na najčešća pitanja o edukacijama, online kursevima, plaćanju i pristupu materijalima.",
};

export default function FaqPage() {
  const faqSchema = getFaqSchema(faqItems);

  return (
    <div className="section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-aura max-w-3xl">
        <div className="text-center mb-16">
          <p className="label mb-6">Pitanja i odgovori</p>
          <h1 className="text-5xl font-semibold">
            Najčešća <span className="accent">pitanja</span>
          </h1>
        </div>
        <FaqAccordion items={faqItems} />
      </div>
    </div>
  );
}
