import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeading({
  id,
  title,
  intro,
  link,
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-4">
        <h2 id={id} className="font-display text-2xl font-bold tracking-tight">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 translate-y-[-0.3em] bg-border" />
        {link && (
          <Link href={link.href} className="shrink-0 text-sm font-medium text-brand hover:underline hover:underline-offset-4">
            {link.label} →
          </Link>
        )}
      </div>
      {intro && <p className="mt-2 max-w-[60ch] text-fg-muted">{intro}</p>}
    </div>
  );
}
