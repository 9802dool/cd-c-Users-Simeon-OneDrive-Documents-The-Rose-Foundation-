import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "COVID-19 Response",
  description:
    "How The Rose Foundation and BP Trinidad and Tobago supported vulnerable communities during the pandemic.",
};

export default function CovidPage() {
  return (
    <div className="mx-auto max-w-3xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="COVID-19 Response"
        title="Kindness at scale when it mattered most"
        description="All over the world, people are stepping up with acts of kindness in response to the Coronavirus pandemic. Learn how The Rose Foundation & BP Trinidad and Tobago are doing our part to help the vulnerable and communities in Trinidad & Tobago."
      />
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
        <p>
          The pandemic demanded speed, care, and coordination. Working
          alongside partners, we focused on practical support for people facing
          heightened risk—food security, information, and community-level
          organising where it could make the fastest difference.
        </p>
        <p>
          #InThisTogether is more than a hashtag: it is a reminder that
          selfless expression shows up in logistics, listening, and showing up
          consistently for neighbours and networks.
        </p>
        <p>
          For the latest public health guidance, please follow official
          advisories from the Government of Trinidad and Tobago and the
          Ministry of Health.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex rounded-xl bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose-deep"
        >
          Contact us
        </Link>
        <Link
          href="/"
          className="inline-flex rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-rose/25"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
