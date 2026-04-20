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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="We’d love to hear from you"
            description="Partnerships, programme questions, or community introductions—send a note and we’ll route it to the right person."
          />
          <div className="mt-8 rounded-2xl border border-border bg-cream/40 p-6 text-sm text-muted">
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
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
