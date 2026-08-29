import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="card-border bg-bg-card p-8 flex flex-col gap-5">
      <span className="text-accent-gold tracking-widest">★★★★★</span>
      <p className="text-text-primary leading-relaxed flex-1">“{t.quote}”</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <span className="w-10 h-10 rounded-full bg-accent-gold/15 border border-accent-gold/40 text-accent-gold flex items-center justify-center font-semibold">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-text-secondary">{t.city}</p>
        </div>
      </div>
    </div>
  );
}
