export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl min-w-0">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
