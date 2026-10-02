import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ExternalLink } from "@/components/external-link";
import { ProjectPreview } from "@/components/project-preview";
import { TechChip } from "@/components/tech-chip";
import { featuredProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Case study", description: project?.line };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-fg-muted">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = featuredProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = featuredProjects[index];
  const next = featuredProjects[(index + 1) % featuredProjects.length];

  return (
    <main id="main" className="mx-auto w-full max-w-[64rem] flex-1 px-5 pt-16 sm:px-8">
      <Link href="/work" className="text-sm text-fg-muted hover:text-fg">
        ← All work
      </Link>
      <p className="mt-8 font-mono text-xs text-fg-muted">
        {project.context} · {project.year}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-fg-muted">{project.line}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.live && (
          <ExternalLink
            href={project.live.href}
            className="btn btn-primary"
          >
            Visit live site ↗
          </ExternalLink>
        )}
        {project.repo && (
          <ExternalLink
            href={project.repo.href}
            className="btn btn-ghost"
          >
            View code on GitHub ↗
          </ExternalLink>
        )}
      </div>

      <div className="mt-10">
        <ProjectPreview project={project} priority sizes="(min-width: 832px) 800px, 100vw" />
      </div>

      <div className="mt-14 grid gap-12 sm:grid-cols-[1fr_15rem]">
        <div className="space-y-10">
          {project.problem && (
            <Section title="Why it exists">
              <p>{project.problem}</p>
            </Section>
          )}
          {project.owned && (
            <Section title="What I worked on">
              <p>{project.owned}</p>
            </Section>
          )}
          {project.build && (
            <Section title="A few details">
              <ul className="space-y-3">
                {project.build.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-brand-soft" />
                    {point}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <aside className="space-y-8 sm:border-l sm:border-border sm:pl-6">
          <dl className="space-y-4 text-sm">
            {project.role && (
              <div>
                <dt className="text-fg-muted">Role</dt>
                <dd className="mt-0.5 font-medium">{project.role}</dd>
              </div>
            )}
            {project.proof && (
              <div>
                <dt className="text-fg-muted">GitHub</dt>
                <dd className="mt-0.5 font-mono text-xs leading-relaxed text-brand">{project.proof}</dd>
              </div>
            )}
            <div>
              <dt className="text-fg-muted">Code</dt>
              <dd className="mt-0.5">
                {project.repo ? (
                  <ExternalLink
                    href={project.repo.href}
                    className="break-all font-mono text-xs hover:text-brand"
                  >
                    {project.repo.label} ↗
                  </ExternalLink>
                ) : (
                  <span className="text-fg-muted">Private client repository</span>
                )}
              </dd>
            </div>
          </dl>
          <div>
            <h2 className="text-sm text-fg-muted">Stack</h2>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <li key={t}>
                  <TechChip name={t} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-20 flex items-baseline justify-between gap-4 border-t border-border pt-6"
      >
        <span className="text-sm text-fg-muted">Next project</span>
        <span className="font-display text-xl font-bold tracking-tight group-hover:text-brand">
          {next.title} →
        </span>
      </Link>
    </main>
  );
}
