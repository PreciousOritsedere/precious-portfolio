import type { Metadata } from "next";
import Link from "next/link";
import { featuredProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl flex-1 px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Work
      </h1>
      <p className="mt-3 max-w-xl text-fg-muted">
        Featured systems first. Full filters and supporting projects land in
        Phase 2.
      </p>
      <ul className="mt-12 divide-y divide-border">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="py-6">
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-display text-xl font-bold group-hover:text-brand">
                  {project.title}
                </p>
                <p className="mt-1 text-sm text-fg-muted">{project.line}</p>
              </div>
              <span className="font-mono text-xs text-stone">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
