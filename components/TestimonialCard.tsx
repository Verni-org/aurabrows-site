import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  t,
  onOpen,
}: {
  t: Testimonial;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Uvećaj poruku: ${t.alt}`}
      aria-haspopup="dialog"
      className="group card-border flex w-full cursor-zoom-in flex-col max-sm:pointer-events-none max-sm:cursor-default overflow-hidden bg-bg-primary p-3 text-left transition-colors hover:border-accent-gold/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-gold"
    >
      <span className="relative block aspect-[4/5] w-full overflow-hidden rounded bg-black">
        <Image
          src={t.src}
          alt={t.alt}
          fill
          sizes="(max-width: 639px) calc(100vw - 74px), (max-width: 1023px) 45vw, 360px"
          className="object-contain"
        />
      </span>
      <span className="flex items-center justify-between max-sm:hidden gap-3 px-1 pt-3 pb-1 text-sm text-text-secondary group-hover:text-accent-gold">
        <span>Uvećaj poruku</span>
        <span aria-hidden="true">↗</span>
      </span>
    </button>
  );
}
