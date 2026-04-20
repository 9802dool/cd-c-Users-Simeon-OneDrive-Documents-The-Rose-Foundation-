import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore programmes from Beyond Borders to Triumph! — enterprise, learning, and community initiatives.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Programmes across the Foundation"
        description="Each project reflects a facet of our mission: widening opportunity, strengthening local economies, and honouring resilience."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-rose/25"
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground group-hover:text-rose">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.short}</p>
              <span className="mt-6 text-sm font-semibold text-rose">
                Read more →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
