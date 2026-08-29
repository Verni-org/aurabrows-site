export default function PhotoPlaceholder({
  label = "FOTO",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`photo-placeholder ${className}`}>
      <span>{label}</span>
    </div>
  );
}
