import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { boardMembers } from "@/lib/board";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: `Executive leadership and directors of ${site.name}.`,
};

export default function BoardOfDirectorsPage() {
  return (
    <div className="bg-[#f1f4f8]">
      <section className="border-b border-slate-200/80 bg-[#0c1222] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200/90">
                Governance
              </p>
              <h1 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Board of Directors
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Experienced leaders guiding {site.name} in its mandate to
                provide hope, equitable development, and selfless service—
                nationally, regionally, and internationally.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                About the Foundation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-500/95 px-4 py-2.5 text-sm font-semibold text-[#0c1222] shadow-lg shadow-amber-500/10 transition hover:bg-amber-400"
              >
                Contact leadership
              </Link>
            </div>
          </div>
          <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-amber-400/80 via-rose-400/60 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col gap-2 border-b border-slate-200/90 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-sans text-lg font-semibold text-[#0c1222]">
              Executive profiles
            </h2>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              Biographies and portraits as published on the Foundation’s{" "}
              <a
                href="https://rosefoundationtt.org/about/#elementor-toc__heading-anchor-6"
                className="font-medium text-rose underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>{" "}
              page.
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Non-profit organisation · Trinidad &amp; Tobago
          </p>
        </div>

        <ul className="space-y-10">
          {boardMembers.map((member, index) => (
            <li key={member.slug}>
              <article className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.06)]">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative aspect-[4/5] w-full shrink-0 border-b border-slate-100 bg-slate-100 lg:w-[min(100%,320px)] lg:border-b-0 lg:border-r">
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 320px, 100vw"
                      priority={index < 2}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#0c1222] sm:text-[1.65rem]">
                        {member.name}
                      </h3>
                      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-rose">
                      {member.role}
                    </p>
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                      {member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-xl border border-slate-200 bg-white px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Corporate enquiries
              </p>
              <p className="mt-2 max-w-lg text-sm text-slate-600">
                Registration No. T - 2613 (95) · DUNS 817178086 · Non-profit
                organisation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#0c1222] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#151d33]"
            >
              Reach the secretariat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
