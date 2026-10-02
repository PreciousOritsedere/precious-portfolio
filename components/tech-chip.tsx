import type { CSSProperties } from "react";
import { techIcon } from "@/lib/tech";

export function TechChip({ name, inline = false }: { name: string; inline?: boolean }) {
  const icon = techIcon(name);

  return (
    <span
      className={`group/chip inline-flex items-center gap-1.5 rounded-md border border-border bg-bg font-mono text-fg transition-[translate,border-color,box-shadow] duration-300 ease-(--ease-out-expo) hover:-translate-y-0.5 hover:border-brand-soft/50 hover:shadow-[0_6px_14px_-8px_rgb(42_31_28/0.35)] ${
        inline ? "mx-0.5 px-1.5 py-px align-[0.1em] text-[0.8em]" : "px-2 py-1 text-xs"
      }`}
    >
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="size-3.5 shrink-0 fill-ink transition-colors duration-200 group-hover/chip:fill-(--logo)"
          style={{ "--logo": `#${icon.hex}` } as CSSProperties}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brand-soft" />
      )}
      {name}
    </span>
  );
}
