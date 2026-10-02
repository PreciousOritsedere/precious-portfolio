import Image from "next/image";
import type { Project } from "@/lib/content";

const podTree = [
  { depth: 0, name: "https://pod.example/", note: "" },
  { depth: 1, name: "profile/card#me", note: "WebID" },
  { depth: 1, name: "documents/", note: "" },
  { depth: 2, name: "proposal.pdf", note: "" },
  { depth: 2, name: "budget.ttl", note: "" },
  { depth: 1, name: "photos/", note: "shared · 2 WebIDs" },
  { depth: 1, name: "settings/", note: "acp: owner" },
];

function PodTree() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 bg-bg-elevated px-6 font-mono text-[11px] text-ink sm:px-10 sm:text-sm">
      {podTree.map((row) => (
        <div key={row.name} className="flex items-baseline gap-2 whitespace-nowrap" style={{ paddingLeft: `${row.depth * 1.5}rem` }}>
          <span aria-hidden className="text-stone">
            {row.depth === 0 ? "◆" : row.name.endsWith("/") ? "▸" : "·"}
          </span>
          <span className={row.depth === 0 ? "text-brand" : "text-fg"}>{row.name}</span>
          {row.note && <span className="text-brand-soft">{row.note}</span>}
        </div>
      ))}
    </div>
  );
}

export function ProjectPreview({
  project,
  priority = false,
  sizes = "(min-width: 832px) 400px, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-bg-elevated">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title}, live site`}
          width={1440}
          height={900}
          sizes={sizes}
          priority={priority}
          className="size-full object-cover object-top transition-transform duration-700 ease-(--ease-out-expo) group-hover:scale-[1.025]"
        />
      ) : (
        <PodTree />
      )}
    </div>
  );
}
