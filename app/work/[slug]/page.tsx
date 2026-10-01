import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Case study" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="main" className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <p className="font-mono text-xs text-stone">{project.year}</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-fg-muted">{project.line}</p>
      <div className="mt-10 space-y-6 text-fg">
        <section>
          <h2 className="font-display text-xl font-bold">Context</h2>
          <p className="mt-2 text-fg-muted">
            Case study narrative arrives in Phase 2 — this page is the shell.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold">What I built</h2>
          <p className="mt-2 text-fg-muted">Coming soon.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold">Stack</h2>
          <p className="mt-2 text-fg-muted">Coming soon.</p>
        </section>
      </div>
      <Link
        href="/work"
        className="mt-12 inline-block text-sm font-medium text-brand hover:text-brand-soft"
      >
        ← All work
      </Link>
    </main>
  );
}
