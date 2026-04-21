import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How The Rose Foundation supports communities through facilitation, incubation, learning, and partnership.",
};

const services = [
  {
    title: "Community facilitation",
    text: "We convene stakeholders, clarify shared goals, and help groups move from ideas to coordinated action.",
  },
  {
    title: "Enterprise support",
    text: "From incubation to chamber-style networking, we strengthen the conditions for small business to thrive.",
  },
  {
    title: "Learning & curricula",
    text: "Online and in-person learning pathways make skills accessible to people balancing work and family.",
  },
  {
    title: "Partnerships",
    text: "We collaborate with organisations—including initiatives like the COVID-19 response with BP Trinidad and Tobago—to extend reach and impact.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Services"
        title="How we work alongside communities"
        description="Our services translate mission into momentum: practical guidance, trusted relationships, and programmes designed for real-world constraints."
      />
      <ul className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
        {services.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
              {s.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex rounded-xl bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose-deep"
        >
          See projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-rose/25"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
