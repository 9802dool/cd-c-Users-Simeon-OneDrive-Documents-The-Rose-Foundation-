import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-rose">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground">
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
