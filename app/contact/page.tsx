import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";
import { site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
        Contact
      </h1>
      <p className="mt-3 max-w-[50ch] text-lg leading-relaxed text-fg-muted">
        Email is the easiest way to reach me. If it would be simpler to talk, you can book a call.
        You can also download my CV.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-cta-fg transition-colors duration-150 hover:bg-brand-soft"
        >
          {site.email}
        </a>
        <ExternalLink
          href={site.calendarUrl}
          className="rounded-full border border-fg/25 px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:border-fg"
        >
          Book a call
        </ExternalLink>
        <a
          href={site.cvUrl}
          download={site.cvFilename}
          className="rounded-full border border-fg/25 px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:border-fg"
        >
          Download CV
        </a>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-fg-muted">
        {socialLinks.map((s) => (
          <li key={s.label}>
            <ExternalLink href={s.href} className="hover:text-fg">
              {s.label} ↗
            </ExternalLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
