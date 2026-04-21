import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, site } from "@/lib/site";

export default function HomePage() {
  const featured = projects.slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              "radial-gradient(900px 500px at 15% 10%, color-mix(in oklab, var(--rose) 35%, transparent), transparent 55%), radial-gradient(700px 420px at 85% 30%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 50%)",
          }}
        />
        <div className="relative rf-container py-12 sm:py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
            #{site.name.replace(/\s/g, "")}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(1.875rem,5.5vw+0.75rem,3.75rem)] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The Realisation of{" "}
            <span className="text-rose">Selfless Expression</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Amidst the world changes of {site.founded}, The Rose Foundation was
            birthed in a time of cosmic transition. Global paradigm shifts
            created uncertainty in an era when the value of everything was
            questioned. Beyond time and space this clarion call of our collective
            consciousness was heard, and from a celestial experience The Rose
            Foundation emerged to provide hope and a pathway to selfless
            service.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-rose px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose/20 transition hover:bg-rose-deep"
            >
              Learn more
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-rose/25"
            >
              Explore projects
            </Link>
          </div>
          <p className="mt-10 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 text-xs text-muted shadow-sm backdrop-blur sm:px-4 sm:text-sm">
            <span
              className="h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden
            />
            #InThisTogether — community-first programmes across Trinidad &amp;
            Tobago
          </p>
        </div>
      </section>

      <section className="rf-container py-12 sm:py-16 lg:py-20">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <SectionHeading
            eyebrow="COVID-19 Response"
            title="Standing with the vulnerable"
            description="All over the world, people are stepping up with acts of kindness in response to the Coronavirus pandemic. Learn how The Rose Foundation & BP Trinidad and Tobago are doing our part to help the vulnerable and communities in Trinidad & Tobago."
          />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm leading-relaxed text-muted">
              Our response focused on practical relief, coordination with
              partners, and clear communication—meeting urgent needs while
              strengthening community resilience for the long term.
            </p>
            <Link
              href="/covid-19-response"
              className="mt-6 inline-flex text-sm font-semibold text-rose hover:text-rose-deep"
            >
              Read the COVID-19 response →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream/50">
        <div className="rf-container py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Latest projects"
            title="Initiatives that nurture enterprise, learning, and hope"
            description="From grassroots commerce to online learning, our programmes meet people where they are—with structure, mentorship, and heart."
          />
          <ul className="rf-fluid-cols-4 mt-12">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-rose/25 hover:shadow-md"
                >
                  <span className="font-serif text-lg font-semibold text-foreground group-hover:text-rose sm:text-xl">
                    {p.title}
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-muted">
                    {p.short}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-rose opacity-0 transition group-hover:opacity-100">
                    View →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-rose/25"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="rf-container py-12 sm:py-16 lg:py-20">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Stay in touch"
              title="Updates from the Foundation"
              description="Share your email and we’ll keep you posted on programmes, events, and ways to collaborate."
            />
            <Newsletter />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl">
              Contact us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted break-words">
              <li>{site.address}</li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-medium text-rose hover:text-rose-deep"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-rose hover:text-rose-deep"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-rose hover:text-rose-deep"
            >
              Open contact form →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
