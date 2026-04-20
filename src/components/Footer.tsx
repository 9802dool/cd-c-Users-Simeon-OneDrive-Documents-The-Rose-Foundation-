import Link from "next/link";
import { projects, site } from "@/lib/site";

const browse = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/covid-19-response", label: "COVID-19 Response" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[#1a1210] text-[#f5f0ea]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            {site.tagline}. Serving communities across Trinidad & Tobago since{" "}
            {site.founded}.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>{site.address}</li>
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="hover:text-white underline-offset-4 hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Browse
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {browse.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/80 hover:text-white underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {projects.map((p) => (
              <li key={p.slug} className="col-span-2 sm:col-span-1">
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-white/70 hover:text-white underline-offset-4 hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {site.founded}–{year} {site.name}. All rights reserved.
          </p>
          <p className="text-white/45">
            Earlier web presence developed by Spxcorp Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
