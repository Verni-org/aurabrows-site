"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials, type Testimonial } from "@/data/testimonials";

const motionQuery = "(prefers-reduced-motion: reduce)";
const controlClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-accent-gold transition-colors hover:border-accent-gold hover:bg-accent-gold/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-gold";

function subscribeToMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackId = useId();
  const dialogTitleId = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const autoPlaying = !reducedMotion;

  const move = useCallback((direction: number) => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return;

    const step = track.children[1].getBoundingClientRect().left - track.children[0].getBoundingClientRect().left;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft < 2;
    const atEnd = track.scrollLeft >= maxScroll - 2;
    const wrap = (direction > 0 && atEnd) || (direction < 0 && atStart);
    const next = wrap
      ? direction > 0 ? 0 : maxScroll
      : Math.round(track.scrollLeft / step) * step + direction * step;

    track.scrollTo({
      left: Math.max(0, Math.min(next, maxScroll)),
      behavior: reducedMotion || wrap ? "instant" : "smooth",
    });
  }, [reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    intersectionObserver.observe(track);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!autoPlaying || hovered || focused || selected || !inView) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) move(1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [autoPlaying, hovered, focused, selected, inView, move]);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  return (
    <div
      role="region"
      aria-roledescription="karusel"
      aria-label="Utisci polaznica i klijentkinja"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        ref={trackRef}
        id={trackId}
        className="testimonial-track"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.src}
            role="group"
            aria-roledescription="slajd"
            aria-label="Slajd sa utiskom"
            className="testimonial-slide"
          >
            <TestimonialCard t={testimonial} onOpen={() => {
              setSelected(testimonial);
              dialogRef.current?.showModal();
            }} />
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <button type="button" className={controlClass} aria-label="Prethodni utisak" aria-controls={trackId} onClick={() => move(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className={controlClass} aria-label="Sledeći utisak" aria-controls={trackId} onClick={() => move(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="testimonial-dialog"
        aria-labelledby={dialogTitleId}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 id={dialogTitleId} className="text-xl font-semibold">Utisak iz prve ruke</h2>
          <button type="button" autoFocus className={controlClass} aria-label="Zatvori poruku" onClick={() => dialogRef.current?.close()}>
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        {selected && (
          <a href={selected.src} target="_blank" rel="noopener noreferrer" className="relative block h-[72dvh] w-full cursor-zoom-in" aria-label="Otvori poruku u punoj veličini u novom tabu">
            <Image src={selected.src} alt={selected.alt} fill sizes="(max-width: 960px) 92vw, 900px" className="object-contain" />
          </a>
        )}
      </dialog>
    </div>
  );
}
