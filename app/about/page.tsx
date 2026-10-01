import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

const employmentPreview = [
  {
    role: "Frontend Developer",
    org: "Open Data Institute",
    dates: "Nov 2025 – Present",
  },
  {
    role: "Frontend Engineer",
    org: "Code Funhouse",
    dates: "Jul 2024 – Nov 2025",
  },
  {
    role: "Frontend Developer",
    org: "Turbham Technologies",
    dates: "Mar 2024 – Oct 2025",
  },
  {
    role: "Lead Frontend Engineer",
    org: "SellMedia Inc",
    dates: "Jul 2024 – Mar 2025",
  },
  {
    role: "Team Lead Blockchain Frontend",
    org: "UNICCON Group",
    dates: "Jan 2024 – Apr 2024",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        About
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-fg">
        I&apos;m {site.name} — a software engineer who ships product systems end
        to end: React/Next and Vue clients, Node.js backends, Solid/RDF open-data
        platforms, and data-rich UIs. I&apos;m highly effective with modern AI
        coding workflows.
      </p>
      <p className="mt-4 leading-relaxed text-fg-muted">
        Off the clock there&apos;s usually something on Spotify, and Oreo — my
        cat — who now also follows the cursor on this site.
      </p>

      <h2 className="mt-14 font-display text-2xl font-bold">Experience</h2>
      <p className="mt-2 text-sm text-fg-muted">
        Full timeline and accordion detail in Phase 2. Chedaro omitted per PRD.
      </p>
      <ul className="mt-8 space-y-5">
        {employmentPreview.map((job) => (
          <li key={`${job.org}-${job.role}`}>
            <p className="font-medium text-fg">{job.role}</p>
            <p className="text-sm text-fg-muted">
              {job.org} · {job.dates}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-bold">Skills</h2>
      <p className="mt-2 text-sm text-fg-muted">
        TypeScript · Node.js · Next.js · React · Vue · Solid/RDF · Tailwind ·
        AI-fluent delivery
      </p>

      <p className="mt-10 text-sm">
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:text-brand-soft"
        >
          LinkedIn →
        </a>
      </p>
    </main>
  );
}
