import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rf-container rf-container--narrow flex min-w-0 flex-col items-start py-16 sm:py-24">
      <p className="text-sm font-semibold text-rose">404</p>
      <h1 className="mt-2 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That link may be outdated. Try the home page or projects directory.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-rose px-6 py-3 text-sm font-semibold text-white hover:bg-rose-deep"
      >
        Go home
      </Link>
    </div>
  );
}
