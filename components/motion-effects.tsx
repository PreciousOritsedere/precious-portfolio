"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupReveals() {
  document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
    const kind = group.dataset.revealStagger || "up";
    for (const child of Array.from(group.children) as HTMLElement[]) {
      if (!child.dataset.reveal) child.dataset.reveal = kind;
    }
  });

  const timers: number[] = [];
  const pending = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
  );

  // Fully clipped elements never report as intersecting, so clip-path reveals watch their parent.
  const watched = new Map<Element, HTMLElement[]>();
  const watch = (el: HTMLElement) => {
    const sentinel = el.dataset.reveal === "image" ? (el.parentElement ?? el) : el;
    watched.set(sentinel, [...(watched.get(sentinel) ?? []), el]);
    io.observe(sentinel);
  };

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left,
        )
        .flatMap((entry) => {
          io.unobserve(entry.target);
          const els = watched.get(entry.target) ?? [];
          watched.delete(entry.target);
          return els;
        });
      visible.forEach((target, i) => {
        const step = Math.min(i, 5);
        target.style.setProperty("--reveal-i", String(step));
        target.dataset.revealed = "true";
        timers.push(
          window.setTimeout(() => {
            target.dataset.revealed = "done";
          }, 1500 + step * 90),
        );
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
  );

  const fold = window.innerHeight * 0.94;
  for (const el of pending) {
    if (el.getBoundingClientRect().top < fold) {
      el.dataset.revealed = "done";
    } else {
      el.dataset.revealed = "false";
      watch(el);
    }
  }

  return () => {
    io.disconnect();
    timers.forEach(clearTimeout);
  };
}

function setupPointerEffects() {
  let tiltRoot: HTMLElement | null = null;
  let magnet: HTMLElement | null = null;

  const clearTilt = () => {
    if (!tiltRoot) return;
    tiltRoot.removeAttribute("data-tilting");
    const target = tiltRoot.querySelector<HTMLElement>("[data-tilt-target]") ?? tiltRoot;
    target.style.setProperty("--rx", "0deg");
    target.style.setProperty("--ry", "0deg");
    tiltRoot = null;
  };

  const clearMagnet = () => {
    if (!magnet) return;
    magnet.style.translate = "";
    magnet = null;
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = e.target instanceof Element ? e.target : null;

    const root = el?.closest<HTMLElement>("[data-tilt]") ?? null;
    if (root !== tiltRoot) clearTilt();
    if (root) {
      tiltRoot = root;
      const target = root.querySelector<HTMLElement>("[data-tilt-target]") ?? root;
      const r = target.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      root.setAttribute("data-tilting", "");
      target.style.setProperty("--rx", `${((0.5 - y) * 5).toFixed(2)}deg`);
      target.style.setProperty("--ry", `${((x - 0.5) * 7).toFixed(2)}deg`);
      target.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
      target.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
    }

    const button = el?.closest<HTMLElement>(".btn") ?? null;
    if (button !== magnet) clearMagnet();
    if (button) {
      magnet = button;
      const r = button.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const tx = Math.max(-6, Math.min(6, dx * 0.2));
      const ty = Math.max(-4, Math.min(4, dy * 0.3));
      button.style.translate = `${tx.toFixed(1)}px ${ty.toFixed(1)}px`;
    }
  };

  const onLeave = () => {
    clearTilt();
    clearMagnet();
  };

  document.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  return () => {
    onLeave();
    document.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
  };
}

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion()) return;
    let cleanup: (() => void) | undefined;
    const raf = requestAnimationFrame(() => {
      cleanup = setupReveals();
    });
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  useEffect(() => {
    if (reducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    return setupPointerEffects();
  }, []);

  return null;
}
