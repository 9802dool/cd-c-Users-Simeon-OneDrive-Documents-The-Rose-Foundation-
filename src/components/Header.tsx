"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/services", label: "Services" },
      { href: "/board-of-directors", label: "Board" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/covid-19-response", label: "COVID-19 Response" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
        active
          ? "bg-cream text-rose"
          : "text-foreground/85 hover:bg-cream/80 hover:text-rose"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 pt-[env(safe-area-inset-top,0)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/rose-foundation-logo.png"
            alt={site.name}
            width={480}
            height={165}
            className="h-11 w-auto max-w-[min(62vw,22rem)] object-contain object-left sm:h-12 sm:max-w-[26rem] md:h-14 md:max-w-[30rem] lg:h-16 lg:max-w-[34rem]"
            priority
            sizes="(max-width: 640px) 62vw, (max-width: 1024px) 50vw, 480px"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) =>
            "children" in item ? (
              <span key={item.href} className="flex items-center gap-0.5">
                <NavLink
                  href={item.href}
                  label={item.label}
                  active={
                    pathname === item.href ||
                    item.children.some((c) => pathname === c.href)
                  }
                />
                <span className="text-muted/40 px-0.5" aria-hidden>
                  /
                </span>
                {item.children.map((c) => (
                  <NavLink
                    key={c.href}
                    href={c.href}
                    label={c.label}
                    active={pathname === c.href}
                  />
                ))}
              </span>
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            ),
          )}
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex shrink-0 items-center rounded-full border border-border bg-card px-2.5 py-2 text-xs font-medium text-foreground/85 hover:border-rose/30 hover:text-rose sm:ml-2 sm:px-3 sm:text-sm"
          >
            Facebook
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card p-2.5 text-foreground shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((item) => (
              <div key={item.href} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    pathname === item.href
                      ? "bg-cream text-rose"
                      : "hover:bg-cream/70"
                  }`}
                >
                  {item.label}
                </Link>
                {"children" in item
                  ? item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`rounded-lg px-3 py-2 pl-6 text-sm ${
                          pathname === c.href
                            ? "text-rose font-medium"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg border border-border bg-card px-3 py-3 text-center text-sm font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
