import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Course, formatPrice, levelLabels } from "@/data/courses";
import { courseImages } from "@/lib/images";

export default function CourseCard({ course }: { course: Course }) {
  const isLive = course.type !== "online";
  const image = courseImages[course.id];

  return (
    <Link
      href={`/kursevi/${course.slug}`}
      className="group card-border bg-bg-card overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
    >
      <PhotoPlaceholder
        src={image?.src}
        alt={image?.alt ?? course.name}
        objectPosition={image?.objectPosition}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        label={`Foto — ${course.name}`}
        ratio="4 / 3"
      />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="label !text-[10px]">{levelLabels[course.level]}</span>
        <h3 className="text-2xl font-semibold leading-snug">{course.name}</h3>
        <p className="text-text-secondary text-sm flex-1">
          {course.shortDescription}
        </p>

        {(course.videoHours || course.lessonCount) && (
          <div className="flex gap-4 text-xs text-text-secondary">
            {course.videoHours && <span>{course.videoHours}</span>}
            {course.lessonCount && <span>{course.lessonCount} lekcija</span>}
          </div>
        )}

        <div className="flex items-end justify-between gap-4 pt-4 border-t border-border mt-2">
          <div className="min-h-[3.5rem] flex flex-col justify-end">
            {isLive && (
              <span className="block text-[11px] text-text-secondary uppercase tracking-wider mb-0.5">
                Grupna cena
              </span>
            )}
            <span className="text-2xl font-bold text-accent-gold">
              {formatPrice(course.price, course.currency)}
            </span>
          </div>
          <span className="label !text-[11px] group-hover:text-accent-gold transition-colors">
            Detaljnije →
          </span>
        </div>
      </div>
    </Link>
  );
}
