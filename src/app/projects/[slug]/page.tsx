import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.short,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="rf-container rf-container--prose min-w-0 py-12 sm:py-16 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
        Projects
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-base text-muted sm:text-lg">{project.short}</p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
        {project.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="text-sm font-semibold text-rose hover:text-rose-deep"
        >
          ← All projects
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold text-muted hover:text-foreground"
        >
          Partner with us →
        </Link>
      </div>
    </div>
  );
}
