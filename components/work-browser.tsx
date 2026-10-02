"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "@/components/external-link";
import { ProjectCard } from "@/components/project-card";
import { projects, projectTags, type ProjectTag } from "@/lib/content";

export function WorkBrowser() {
  const [tag, setTag] = useState<ProjectTag | null>(null);
  const visible = tag ? projects.filter((p) => p.tags.includes(tag)) : projects;
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  const filters: { label: string; value: ProjectTag | null }[] = [
    { label: "Everything", value: null },
    ...projectTags.map((t) => ({ label: t, value: t })),
  ];

  return (
    <>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5">
        {filters.map((f) => {
          const count = f.value ? projects.filter((p) => p.tags.includes(f.value!)).length : projects.length;
          return (
            <button
              key={f.label}
              type="button"
              aria-pressed={tag === f.value}
              onClick={() => setTag(f.value)}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm text-fg-muted transition-colors duration-150 hover:border-fg/40 hover:text-fg aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-bg"
            >
              {f.label} <span className="ml-1 font-mono text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-xl font-bold tracking-tight">Other work</h2>
          <ul className="mt-5 border-t border-border">
            {rest.map((p) => (
              <li
                key={p.slug}
                className="grid gap-x-6 gap-y-1 border-b border-border py-4 sm:grid-cols-[1fr_auto]"
              >
                <div className="min-w-0">
                  <p className="font-medium">
                    {p.title}
                    <span className="font-normal text-fg-muted">
                      {" "}
                      · {p.role ? `${p.role}, ` : ""}
                      {p.context}
                    </span>
                  </p>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-fg-muted">{p.line}</p>
                  {p.proof && <p className="mt-1.5 font-mono text-xs text-brand">{p.proof}</p>}
                  {p.stack.length > 0 && (
                    <p className="mt-1.5 font-mono text-xs text-fg-muted">{p.stack.join(" · ")}</p>
                  )}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs sm:flex-col sm:items-end sm:gap-1">
                  <span className="text-fg-muted">{p.year}</span>
                  {p.repo && (
                    <ExternalLink
                      href={p.repo.href}
                      className="text-brand hover:underline hover:underline-offset-4"
                    >
                      GitHub ↗
                    </ExternalLink>
                  )}
                  {p.live && (
                    <ExternalLink
                      href={p.live.href}
                      className="text-brand hover:underline hover:underline-offset-4"
                    >
                      Live ↗
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-12 text-sm text-fg-muted">
        Some of this work lives in private client repositories.{" "}
        <Link href="/contact" className="text-brand hover:underline hover:underline-offset-4">
          Get in touch if you want to know more →
        </Link>
      </p>
    </>
  );
}
