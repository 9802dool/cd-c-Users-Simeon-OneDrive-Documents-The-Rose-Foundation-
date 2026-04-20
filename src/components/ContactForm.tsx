"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") ?? "").trim();
        const email = String(fd.get("email") ?? "").trim();
        const message = String(fd.get("message") ?? "").trim();
        const subject = encodeURIComponent(`Website inquiry from ${name}`);
        const body = encodeURIComponent(
          `${message}\n\n—\n${name}\n${email}`,
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setDone(true);
      }}
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none ring-rose/0 transition focus:ring-2 focus:ring-rose/30"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none ring-rose/0 transition focus:ring-2 focus:ring-rose/30"
          autoComplete="email"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none ring-rose/0 transition focus:ring-2 focus:ring-rose/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-rose px-6 py-3.5 text-sm font-semibold text-white hover:bg-rose-deep sm:w-auto"
      >
        Send
      </button>
      {done ? (
        <p className="text-sm text-muted">
          If your mail client did not open, email us directly at{" "}
          <a className="font-medium text-rose" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
