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
    <div className="rf-container min-w-0 py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Programmes across the Foundation"
        description="Each project reflects a facet of our mission: widening opportunity, strengthening local economies, and honouring resilience."
      />
      <ul className="rf-fluid-cols-2 mt-10 sm:mt-14">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose/25 sm:p-8"
            >
              <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-rose sm:text-2xl">
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
