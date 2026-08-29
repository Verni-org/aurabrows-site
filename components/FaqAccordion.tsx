"use client";

import { useState } from "react";
import { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-medium">
                {item.question}
              </span>
              <span
                className={`text-accent-gold text-2xl leading-none shrink-0 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-text-secondary pr-10">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
