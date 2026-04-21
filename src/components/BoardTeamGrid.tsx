"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { boardMembers, type BoardMember } from "@/lib/board";

const DEFAULT_BIO =
  "A full biography will be posted here soon. Contact the Foundation for more information.";

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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 max-w-2xl text-sm font-medium text-sky-300">
            Tap or click a photo to open a short biography.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((person, index) => (
              <li
                key={person.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-[0_4px_14px_rgba(15,23,42,0.35)] transition hover:shadow-[0_8px_24px_rgba(15,23,42,0.45)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="group relative aspect-square w-full cursor-pointer border-0 bg-gradient-to-br from-slate-800 to-slate-950 p-0 text-left ring-1 ring-slate-700 transition hover:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label={`Open biography: ${person.name}`}
                >
                  <Image
                    src={person.imageSrc}
                    alt=""
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      (person.imageFit ?? "contain") === "cover"
                        ? "object-cover object-center transition group-hover:opacity-95"
                        : "object-contain object-center transition group-hover:opacity-95"
                    }
                  />
                </button>
                <div className="flex flex-1 flex-col justify-center border-t border-slate-800 bg-slate-950 px-5 py-5 sm:px-6 sm:py-6">
                  <h2 className="text-base font-bold text-sky-400 md:text-lg">
                    {person.role}
                  </h2>
                  <p className="mt-2 text-xl font-bold leading-snug text-white md:text-2xl">
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
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            aria-label="Close biography"
            onClick={close}
          />
          <div className="relative z-10 max-h-[min(92vh,40rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-600 bg-slate-900 p-6 pt-12 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-20 rounded-xl border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              Close
            </button>
            <div className="relative mb-5 aspect-square w-full max-w-[16rem] overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-950">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                fill
                sizes="256px"
                className={
                  (member.imageFit ?? "contain") === "cover"
                    ? "object-cover object-center"
                    : "object-contain object-center"
                }
              />
            </div>
            <p className="pr-14 text-xs font-semibold uppercase tracking-[0.12em] text-sky-400">
              {member.role}
            </p>
            <h2
              id={dialogTitleId}
              className="mt-1 text-2xl font-bold tracking-tight text-white"
            >
              {displayName}
            </h2>
            <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-slate-400">
              {bioText}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
