"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { boardMembers, type BoardMember } from "@/lib/board";

const DEFAULT_BIO =
  "A full biography will be posted here soon. Contact the Foundation for more information.";

function portraitImageClass(person: BoardMember, interactive: boolean) {
  const fit = person.imageFit ?? "contain";
  const pos = person.imagePosition ?? "center";
  const posClass = pos === "top" ? "object-top" : "object-center";
  const base =
    fit === "cover" ? `object-cover ${posClass}` : `object-contain ${posClass}`;
  return interactive ? `${base} transition group-hover:opacity-95` : base;
}

export function BoardTeamGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogTitleId = useId();

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close]);

  const member: BoardMember | null =
    openIndex !== null ? boardMembers[openIndex]! : null;
  const displayName = member?.name ?? "Name to be announced";
  const bioText = member?.bio?.length
    ? member.bio.join("\n\n")
    : DEFAULT_BIO;

  return (
    <>
      <section className="bg-transparent py-8 sm:py-10">
        <div className="rf-container">
          <p className="mb-8 max-w-2xl text-sm font-medium text-muted">
            Tap or click a photo to open a short biography.
          </p>
          <ul className="rf-fluid-cols-3">
            {boardMembers.map((person, index) => (
              <li
                key={person.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-rose/20 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="group relative aspect-square w-full cursor-pointer border-0 bg-gradient-to-br from-cream to-background p-0 text-left ring-1 ring-border transition hover:ring-2 hover:ring-rose/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                  aria-label={`Open biography: ${person.name}`}
                >
                  <Image
                    src={person.imageSrc}
                    alt=""
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={portraitImageClass(person, true)}
                  />
                </button>
                <div className="flex flex-1 flex-col justify-center border-t border-border bg-cream/30 px-5 py-5 sm:px-6 sm:py-6">
                  <h2 className="text-base font-bold text-rose md:text-lg">
                    {person.role}
                  </h2>
                  <p className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
                    {person.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {member && openIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Close biography"
            onClick={close}
          />
          <div className="relative z-10 max-h-[min(88dvh,40rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-5 pt-11 shadow-lg sm:p-6 sm:pt-12">
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-20 rounded-xl border border-border bg-background px-3 py-1.5 text-sm font-semibold text-foreground transition hover:bg-cream"
            >
              Close
            </button>
            <div className="relative mb-5 aspect-square w-full max-w-[16rem] overflow-hidden rounded-xl border border-border bg-cream/50">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                fill
                sizes="256px"
                className={portraitImageClass(member, false)}
              />
            </div>
            <p className="pr-14 text-xs font-semibold uppercase tracking-[0.12em] text-rose">
              {member.role}
            </p>
            <h2
              id={dialogTitleId}
              className="mt-1 font-serif text-2xl font-semibold tracking-tight text-foreground"
            >
              {displayName}
            </h2>
            <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted">
              {bioText}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
