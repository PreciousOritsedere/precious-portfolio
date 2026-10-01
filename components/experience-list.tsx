import { experience } from "@/lib/content";

export function ExperienceList({ limit }: { limit?: number }) {
  const roles = limit ? experience.slice(0, limit) : experience;

  return (
    <ol className="border-t border-border">
      {roles.map((role, i) => (
        <li key={`${role.org}-${role.dates}`} className="border-b border-border">
          <details name="experience" open={i === 0} className="group">
            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 sm:grid-cols-[9.5rem_1fr_auto] [&::-webkit-details-marker]:hidden">
              <span className="order-3 col-span-2 font-mono text-xs text-fg-muted sm:order-none sm:col-span-1">
                {role.dates}
              </span>
              <span className="min-w-0">
                <span className="font-medium text-fg">{role.org}</span>
                {role.current && (
                  <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2 py-0.5 align-middle font-mono text-[10px] text-brand">
                    <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                    now
                  </span>
                )}
                <span className="block text-sm text-fg-muted sm:inline sm:before:mx-2 sm:before:content-['·']">
                  {role.title}
                  {role.place ? `, ${role.place}` : ""}
                </span>
              </span>
              <span
                aria-hidden
                className="font-mono text-lg leading-none text-fg-muted transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="space-y-1.5 pb-5 text-[15px] leading-relaxed text-fg-muted sm:pl-[calc(9.5rem+1rem)]">
              {role.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-brand-soft" />
                  {p}
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ol>
  );
}
