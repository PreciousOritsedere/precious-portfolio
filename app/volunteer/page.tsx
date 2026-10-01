import type { Metadata } from "next";
import { volunteerOrgs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Volunteer
      </h1>
      <p className="mt-3 text-fg-muted">
        Community and mentoring work — separate from paid client systems.
      </p>
      <ul className="mt-12 space-y-10">
        {volunteerOrgs.map((entry) => (
          <li key={entry.org}>
            <h2 className="font-display text-xl font-bold">{entry.org}</h2>
            <p className="mt-1 text-sm font-medium text-brand">{entry.role}</p>
            <p className="mt-2 text-fg-muted">{entry.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
