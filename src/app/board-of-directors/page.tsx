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
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800 bg-[#0c1929] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(12 25 41) 0%, rgb(30 58 95) 50%, rgb(30 64 175 / 0.25) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="mb-4">
            <Link
              href="/"
              className="inline-flex text-sm font-medium text-sky-200 underline-offset-4 transition hover:text-white hover:underline"
            >
              ← Home
            </Link>
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Board of Directors
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
            Leadership profiles and photographs. Select a photo to read the
            full biography.
          </p>
        </div>
      </section>
      <section className="border-b border-slate-800 bg-slate-950 py-14">
        <BoardTeamGrid />
      </section>
    </div>
  );
}
