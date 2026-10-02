"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 flex justify-center px-3 pt-3 [view-transition-name:site-header]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="flex items-center gap-0.5 rounded-full border border-border bg-bg/85 p-1 shadow-[0_10px_30px_-14px_rgb(42_31_28/0.35)] backdrop-blur-md"
      >
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          aria-current={pathname === "/" ? "page" : undefined}
          className="grid size-8 place-items-center rounded-full bg-brand font-display text-[11px] font-extrabold tracking-tight text-cta-fg transition-[rotate,scale] duration-500 ease-(--ease-out-expo) hover:-rotate-12 hover:scale-110"
        >
          PO
        </Link>
        {navLinks.map((link) => {
          const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current ? "page" : undefined}
              className="relative isolate rounded-full px-2.5 py-1.5 text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg aria-[current=page]:text-fg sm:px-3 sm:text-sm"
            >
              {current && (
                <motion.span
                  layoutId="nav-pill"
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-bg-elevated"
                  transition={reduce ? { duration: 0 } : { type: "spring", bounce: 0.22, duration: 0.55 }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
        <a
          href={`mailto:${site.email}`}
          className="ml-1 hidden rounded-full bg-fg px-3.5 py-1.5 text-sm font-medium text-bg transition-colors duration-150 hover:bg-brand sm:inline-flex"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
