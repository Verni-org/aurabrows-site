import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CourseSidebar from "@/components/CourseSidebar";
import { IconCheck } from "@/components/icons";
import { courses, getCourseBySlug, levelLabels } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.name,
    description: course.shortDescription,
    openGraph: {
      title: course.name,
      description: course.shortDescription,
    },
  };
}

const typeLabels: Record<string, string> = {
  online: "Online video kurs",
  "uzivo-bazna": "Bazna obuka uživo",
  "uzivo-usavrsavanje": "Usavršavanje uživo",
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const paragraphs = course.fullDescription.split("\n\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.shortDescription,
    provider: {
      "@type": "Organization",
      name: "AuraBrows by Saška",
      sameAs: "https://aurabrowsbysaska.rs",
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: course.currency,
      availability: "https://schema.org/InStock",
      url: `https://aurabrowsbysaska.rs/kursevi/${course.slug}`,
    },
  };

  return (
    <div className="section-pad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-aura">
        <Link
          href="/kursevi"
          className="label !text-[11px] hover:text-accent-gold transition-colors inline-block mb-8"
        >
          ← Nazad na kurseve
        </Link>

        <div className="grid lg:grid-cols-[1fr_380px] gap-14">
          <div>
            <p className="label mb-4">
              {levelLabels[course.level]} · {typeLabels[course.type]}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              {course.name}
            </h1>

            <div className="flex flex-col gap-4 text-text-secondary mb-10">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <PhotoPlaceholder
              label="Video — uvodna reč"
              className="aspect-video mb-14"
            />

            <div className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                Šta ćeš <span className="accent">naučiti</span>
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-accent-gold mt-1 shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {course.curriculum && (
              <div className="mb-14">
                <h2 className="text-3xl font-semibold mb-6">
                  Program <span className="accent">kursa</span>
                </h2>
                <ol className="flex flex-col">
                  {course.curriculum.map((mod) => (
                    <li
                      key={mod.number}
                      className="flex gap-5 py-5 border-b border-border"
                    >
                      <span className="text-accent-gold font-semibold shrink-0">
                        {String(mod.number).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p>{mod.title}</p>
                        {(mod.lessonCount || mod.duration) && (
                          <p className="text-xs text-text-secondary mt-1">
                            {[
                              mod.lessonCount && `${mod.lessonCount} lekcija`,
                              mod.duration,
                            ]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Kome je <span className="accent">namenjeno</span>
              </h2>
              <p className="text-text-secondary mb-4">Ovaj program je za tebe ako:</p>
              <ul className="flex flex-col gap-3">
                {course.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">—</span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CourseSidebar course={course} />
        </div>
      </div>
    </div>
  );
}
