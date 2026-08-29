import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const BASE_URL = "https://aurabrowsbysaska.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kursevi",
    "/tretmani",
    "/o-meni",
    "/utisci",
    "/faq",
    "/kontakt",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${BASE_URL}/kursevi/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
