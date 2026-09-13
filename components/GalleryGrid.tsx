"use client";

import { useState } from "react";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import type { GalleryImage } from "@/data/gallery";

const PAGE_SIZE = 12;

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = images.slice(0, visible);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {shown.map((img) => (
          <PhotoPlaceholder
            key={img.src}
            src={img.src}
            alt={img.alt}
            ratio="1 / 1"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
        ))}
      </div>

      {visible < images.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-ghost"
          >
            Prikaži još
          </button>
        </div>
      )}
    </div>
  );
}
