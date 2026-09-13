import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { educationGallery, treatmentGallery } from "@/data/gallery";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Galerija",
  description:
    "Pogledaj fotografije sa edukacija i polaznica, kao i rezultate AuraBrows tretmana obrva i usana.",
  ...buildPageMetadata({
    title: "Galerija | AuraBrows by Saška",
    description:
      "Pogledaj fotografije sa edukacija i polaznica, kao i rezultate AuraBrows tretmana obrva i usana.",
    path: "/galerija",
    image: "https://aurabrowsbysaska.rs/images/site/aurabrows-tretman.jpeg",
  }),
};

export default function GalerijaPage() {
  return (
    <div className="section-pad">
      <div className="container-aura">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="label mb-6">Galerija</p>
          <h1 className="text-5xl font-semibold mb-6">
            Trenuci sa <span className="accent">edukacija</span> i tretmana
          </h1>
          <p className="text-text-secondary">
            Pogledaj kako izgledaju naše edukacije uživo i rad sa
            polaznicama, kao i rezultate AuraBrows tretmana obrva i usana.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-2">
            Polaznice i <span className="accent">edukacije</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Rad sa polaznicama, praktične vežbe i trenuci sa naših obuka.
          </p>
          <GalleryGrid images={educationGallery} />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Rezultati <span className="accent">tretmana</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Pre i posle, kao i detalji AuraBrows tretmana obrva i usana.
          </p>
          <GalleryGrid images={treatmentGallery} />
        </div>
      </div>
    </div>
  );
}
