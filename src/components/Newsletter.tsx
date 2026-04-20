"use client";

import { useState } from "react";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          autoComplete="email"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none ring-rose/0 transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-rose/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-rose px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-deep"
      >
        {sent ? "Thank you" : "Send"}
      </button>
    </form>
  );
}
