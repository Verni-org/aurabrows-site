import Image from "next/image";

type PhotoPlaceholderProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

export default function PhotoPlaceholder({
  src,
  alt = "",
  label = "FOTO",
  className = "",
  sizes = "100vw",
  priority = false,
  objectPosition = "center",
}: PhotoPlaceholderProps) {
  return (
    <div className={`photo-placeholder ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
