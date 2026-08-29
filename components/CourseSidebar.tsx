"use client";

import { useState } from "react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import CheckoutModal from "./CheckoutModal";
import { IconLock } from "./icons";
import { Course, formatPrice, levelLabels } from "@/data/courses";

export default function CourseSidebar({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const isLive = course.type !== "online";

  return (
    <aside className="lg:sticky lg:top-28 h-fit card-border bg-bg-card overflow-hidden">
      <PhotoPlaceholder label={`Foto — ${course.name}`} className="aspect-[4/3]" />
      <div className="p-6 flex flex-col gap-5">
        <div>
          {isLive && course.priceIndividual ? (
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  Grupna
                </span>
                <span className="text-2xl font-bold text-accent-gold">
                  {formatPrice(course.price, course.currency)}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-text-secondary">
                  Individualna
                </span>
                <span className="text-xl font-bold text-accent-gold">
                  {formatPrice(course.priceIndividual, course.currency)}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-3xl font-bold text-accent-gold">
              {formatPrice(course.price, course.currency)}
            </span>
          )}
          <p className="text-xs text-text-secondary mt-2">
            {course.hasRatePayment
              ? "Jednokratno ili u 2 rate"
              : "Jednokratno"}{" "}
            · pristup {course.accessDuration}
          </p>
        </div>

        <button onClick={() => setOpen(true)} className="btn-primary w-full">
          {isLive ? "Prijavi se" : "Kupi kurs"}
        </button>

        <p className="flex items-center gap-2 text-xs text-text-secondary">
          <IconLock className="w-4 h-4 shrink-0" />
          Bezbedna kupovina · brz odgovor
        </p>

        <dl className="grid grid-cols-2 gap-y-3 text-sm pt-4 border-t border-border">
          <dt className="text-text-secondary">Pristup</dt>
          <dd className="text-right">{course.accessDuration}</dd>
          {course.videoHours && (
            <>
              <dt className="text-text-secondary">Trajanje</dt>
              <dd className="text-right">{course.videoHours}</dd>
            </>
          )}
          {course.lessonCount && (
            <>
              <dt className="text-text-secondary">Lekcija</dt>
              <dd className="text-right">{course.lessonCount}</dd>
            </>
          )}
          <dt className="text-text-secondary">Nivo</dt>
          <dd className="text-right">{levelLabels[course.level]}</dd>
          <dt className="text-text-secondary">Sertifikat</dt>
          <dd className="text-right">{course.hasCertificate ? "Da" : "Ne"}</dd>
        </dl>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <span className="w-11 h-11 rounded-full bg-accent-gold/15 border border-accent-gold/40 text-accent-gold flex items-center justify-center font-semibold shrink-0">
            S
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-text-secondary">
              Tvoj edukator
            </p>
            <p className="font-semibold">Saška</p>
            <p className="text-xs text-text-secondary">9+ godina iskustva</p>
          </div>
        </div>
      </div>

      {open && <CheckoutModal course={course} onClose={() => setOpen(false)} />}
    </aside>
  );
}
