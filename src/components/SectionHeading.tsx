interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="heading-display text-sm tracking-[0.3em] text-accent text-glow-accent">
        {label}
      </p>
      <h2 className="heading-display mt-3 text-4xl tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-muted">{description}</p>
      )}
      <div className="divider-diamond mt-6 max-w-xs">
        <span />
      </div>
    </div>
  );
}
