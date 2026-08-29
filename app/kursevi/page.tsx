import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Kursevi",
  description:
    "Edukacije uživo i online video kursevi za oblikovanje i puder tehniku obrva. Doživotni pristup, sertifikat i mentorstvo.",
  ...buildPageMetadata({
    title: "Kursevi | AuraBrows by Saška",
    description:
      "Edukacije uživo i online video kursevi za oblikovanje i puder tehniku obrva. Doživotni pristup, sertifikat i mentorstvo.",
    path: "/kursevi",
    image: "https://aurabrowsbysaska.rs/images/site/aurabrows-bazna-obuka.jpeg",
  }),
};

export default function KurseviPage() {
  const liveCourses = courses.filter((c) => c.type !== "online");
  const onlineCourses = courses.filter((c) => c.type === "online");

  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="label mb-6">Ponuda</p>
          <h1 className="text-5xl font-semibold mb-5">
            Izaberi svoj <span className="accent">put</span>
          </h1>
          <p className="text-text-secondary">
            Doživotni pristup, sertifikat i privatna zajednica uz svaki kurs.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
            <h2 className="text-3xl font-semibold">
              Edukacije <span className="accent">uživo</span>
            </h2>
            <p className="text-sm text-text-secondary">
              Bazne obuke sa mentorstvom i radom na živom modelu
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
            <h2 className="text-3xl font-semibold">
              Online <span className="accent">kursevi</span>
            </h2>
            <p className="text-sm text-text-secondary">
              Video kursevi za samostalno učenje, svojim tempom
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
