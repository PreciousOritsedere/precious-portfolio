import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">
        Prefer email for async, or book a short call if that&apos;s faster.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex rounded-lg bg-cta-bg px-5 py-3 text-sm font-medium text-cta-fg transition-opacity hover:opacity-90"
        >
          Email me
        </a>
        <a
          href={site.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-brand hover:text-brand"
        >
          Book a call
        </a>
      </div>
      <p className="mt-8 font-mono text-sm text-stone">{site.email}</p>
    </main>
  );
}
