interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
}

export function ImagePlaceholder({
  label,
  className = "",
  aspect = "video",
}: ImagePlaceholderProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <div
      className={`group relative overflow-hidden border border-accent/20 bg-bg-elevated ${aspectClass} clip-gaming-sm ${className}`}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent/60" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent/60" />
      <div className="relative flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
        <svg
          className="h-10 w-10 text-white/20 transition-colors group-hover:text-accent/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="heading-display text-xs tracking-widest text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
