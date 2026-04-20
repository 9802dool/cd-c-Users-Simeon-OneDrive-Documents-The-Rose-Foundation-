import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}, founded in ${site.founded}, and our mission of selfless service.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="About"
        title="Hope in a time of transition"
        description={`The Rose Foundation was birthed in ${site.founded} during a period of profound global change. When certainty felt scarce, a shared call toward compassion and service became the seed of our work.`}
      />
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
        <p>
          Global paradigm shifts created uncertainty in an era when the value of
          everything was questioned. Beyond time and space this clarion call of
          our collective consciousness was heard, and from a celestial
          experience The Rose Foundation emerged to provide hope and a pathway to
          selfless service.
        </p>
        <p>
          Today, that pathway shows up in practical programmes: supporting small
          business, widening access to learning, strengthening grassroots
          networks, and celebrating stories of perseverance.
        </p>
      </div>
      <Link
        href="/services"
        className="mt-10 inline-flex rounded-xl bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose-deep"
      >
        View services
      </Link>
    </div>
  );
}
