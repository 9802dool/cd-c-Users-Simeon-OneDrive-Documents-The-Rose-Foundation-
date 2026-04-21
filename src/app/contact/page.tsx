import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${site.name} in Port of Spain — phone, email, and message form.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="We’d love to hear from you"
            description="Partnerships, programme questions, or community introductions—send a note and we’ll route it to the right person."
          />
          <div className="mt-8 rounded-2xl border border-border bg-cream/40 p-5 text-sm text-muted sm:p-6">
            <p className="font-medium text-foreground">— or —</p>
            <p className="mt-3">
              Call{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold text-rose hover:text-rose-deep"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-xl font-semibold sm:text-2xl">
            Send a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
