import { TechChip } from "@/components/tech-chip";
import { stackGroups } from "@/lib/content";

export function StackGroups() {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {stackGroups.map((group) => (
        <div key={group.label} className="grid gap-3 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
          <dt className="pt-1 text-sm font-medium text-fg">
            {group.label}
            {group.note && (
              <span className="mt-1 block text-xs font-normal leading-relaxed text-fg-muted">
                {group.note}
              </span>
            )}
          </dt>
          <dd className="flex flex-wrap content-start gap-1.5">
            {group.items.map((item) => (
              <TechChip key={item} name={item} />
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
