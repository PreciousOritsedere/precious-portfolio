import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";
import { volunteerOrgs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
        Volunteer
      </h1>
      <p className="mt-3 max-w-[56ch] text-lg leading-relaxed text-fg-muted">
        I volunteer as an engineer and mentor when I have the time. These are the communities
        I&apos;ve worked with.
      </p>
      <ul className="mt-12 border-t border-border">
        {volunteerOrgs.map((entry) => (
          <li key={entry.org} className="border-b border-border py-6">
            <h2 className="font-display text-xl font-bold tracking-tight">{entry.org}</h2>
            <p className="mt-1 text-sm font-medium text-brand">{entry.role}</p>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-fg-muted">{entry.summary}</p>
            {entry.href && (
              <ExternalLink
                href={entry.href}
                className="mt-3 inline-block text-sm text-fg-muted hover:text-fg"
              >
                {new URL(entry.href).hostname.replace("www.", "")} ↗
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
