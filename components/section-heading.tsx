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
    <div data-reveal="up" className="mb-8">
      <div className="flex items-baseline gap-4">
        <h2 id={id} className="font-display text-2xl font-bold tracking-tight">
          {title}
        </h2>
        <span aria-hidden data-reveal="line" className="h-px flex-1 translate-y-[-0.3em] bg-border" />
        {link && (
          <Link href={link.href} className="group shrink-0 text-sm font-medium text-brand">
            <span className="link-grow">{link.label}</span>{" "}
            <span aria-hidden className="inline-block transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
      {intro && <p className="mt-2 max-w-[60ch] text-fg-muted">{intro}</p>}
    </div>
  );
}
