import type { Metadata } from "next";
import Link from "next/link";
import { BoardTeamGrid } from "@/components/BoardTeamGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: `Executive leadership and directors of ${site.name}.`,
};

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              "radial-gradient(900px 500px at 15% 10%, color-mix(in oklab, var(--rose) 35%, transparent), transparent 55%), radial-gradient(700px 420px at 85% 30%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="mb-4">
            <Link
              href="/"
              className="inline-flex text-sm font-medium text-rose underline-offset-4 transition hover:text-rose-deep hover:underline"
            >
              ← Home
            </Link>
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
            Governance
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Board of Directors
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Leadership profiles and photographs. Select a photo to read the
            full biography.
          </p>
        </div>
      </section>
      <section className="border-b border-border py-10 sm:py-14">
        <BoardTeamGrid />
      </section>
    </div>
  );
}
