import Link from "next/link";
import { ProjectPreview } from "@/components/project-preview";
import { TechChip } from "@/components/tech-chip";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  large = false,
  priority = false,
}: {
  project: Project;
  large?: boolean;
  priority?: boolean;
}) {
  const shown = project.stack.slice(0, large ? 8 : 4);
  const rest = project.stack.length - shown.length;

  return (
    <article className="group relative">
      <ProjectPreview
        project={project}
        priority={priority}
        sizes={large ? "(min-width: 832px) 800px, 100vw" : "(min-width: 640px) 400px, 100vw"}
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-bold tracking-tight">
          <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <span className="shrink-0 font-mono text-xs text-fg-muted">{project.year}</span>
      </div>
      <p className="mt-0.5 text-sm text-fg-muted">
        {project.role ? <span className="font-medium text-fg">{project.role}</span> : null}
        {project.role ? " · " : ""}
        {project.context}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{project.line}</p>
      {project.proof && (
        <p className="mt-2 font-mono text-xs text-brand">{project.proof}</p>
      )}
      {shown.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
          {shown.map((t) => (
            <li key={t}>
              <TechChip name={t} />
            </li>
          ))}
          {rest > 0 && <li className="self-center px-1 font-mono text-xs text-fg-muted">+{rest}</li>}
        </ul>
      )}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <span className="font-medium text-brand group-hover:underline group-hover:underline-offset-4">
          Case study →
        </span>
        {project.repo ? (
          <a href={project.repo.href} className="relative z-10 text-fg-muted hover:text-fg">
            GitHub ↗
          </a>
        ) : (
          <span className="text-fg-muted/80">Code is private</span>
        )}
        {project.live && (
          <a href={project.live.href} className="relative z-10 text-fg-muted hover:text-fg">
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}
