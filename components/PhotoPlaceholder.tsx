import Image from "next/image";

type PhotoPlaceholderProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  ratio?: string;
};

export default function PhotoPlaceholder({
  src,
  alt = "",
  label = "FOTO",
  className = "",
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
  objectFit = "cover",
  ratio = "4 / 5",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition, objectFit }}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
