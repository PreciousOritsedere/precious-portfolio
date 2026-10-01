"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import type { ContributionYear } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_MS = 86_400_000;
const dayFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const numberFormat = new Intl.NumberFormat("en-GB");

type Cell =
  | { future: false; index: number; date: Date; count: number; level: number }
  | { future: true; date: Date };

function buildYear(data: ContributionYear) {
  const jan1 = Date.UTC(data.year, 0, 1);
  const dec31 = Date.UTC(data.year, 11, 31);
  const firstLogged = Date.parse(`${data.start}T00:00:00Z`);
  const lead = new Date(jan1).getUTCDay();

  const cells: (Cell | null)[] = Array.from({ length: lead }, () => null);
  for (let t = jan1; t <= dec31; t += DAY_MS) {
    const i = Math.round((t - firstLogged) / DAY_MS);
    const date = new Date(t);
    cells.push(
      i >= 0 && i < data.counts.length
        ? { future: false, index: i, date, count: data.counts[i], level: data.levels[i] }
        : { future: true, date },
    );
  }

  const weeks = Math.ceil(cells.length / 7);
  const monthStarts: { label: string; column: number }[] = [];
  cells.forEach((cell, i) => {
    if (cell && cell.date.getUTCDate() === 1) {
      monthStarts.push({ label: MONTHS[cell.date.getUTCMonth()], column: Math.floor(i / 7) + 1 });
    }
  });

  let longest = 0;
  let run = 0;
  let best = { count: 0, index: -1 };
  let activeDays = 0;
  data.counts.forEach((count, i) => {
    run = count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
    if (count > 0) activeDays++;
    if (count > best.count) best = { count, index: i };
  });

  return { cells, weeks, monthStarts, longest, best, activeDays, firstLogged };
}

function plural(n: number, word: string) {
  return `${numberFormat.format(n)} ${word}${n === 1 ? "" : "s"}`;
}

export function ContributionGraph({
  years,
  profileUrl,
}: {
  years: ContributionYear[];
  profileUrl: string;
}) {
  const [year, setYear] = useState(years[0].year);
  const [active, setActive] = useState<number | null>(null);
  const data = years.find((y) => y.year === year) ?? years[0];
  const built = useMemo(() => buildYear(data), [data]);
  const allTime = years.reduce((sum, y) => sum + y.total, 0);
  const firstYear = years[years.length - 1].year;

  const dateOf = (i: number) => new Date(built.firstLogged + i * DAY_MS);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const step = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 }[e.key];
    if (step === undefined) return;
    e.preventDefault();
    setActive((current) => {
      const next = (current ?? data.counts.length - 1) + step;
      return Math.min(Math.max(next, 0), data.counts.length - 1);
    });
  }

  const readout =
    active !== null ? (
      <>
        <span className="font-medium text-fg">{plural(data.counts[active], "contribution")}</span>{" "}
        on {dayFormat.format(dateOf(active))}
      </>
    ) : built.best.index >= 0 ? (
      <>
        Busiest day:{" "}
        <span className="font-medium text-fg">{plural(built.best.count, "contribution")}</span> on{" "}
        {dayFormat.format(dateOf(built.best.index))}
      </>
    ) : (
      "No public activity this year yet."
    );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <p className="text-fg-muted">
          <span className="font-display text-3xl font-bold tracking-tight text-fg tabular-nums">
            {numberFormat.format(data.total)}
          </span>{" "}
          contributions in {data.year}
          <span className="mt-1 block font-mono text-xs">
            {numberFormat.format(allTime)} since {firstYear} · {built.activeDays} active days ·{" "}
            longest streak {plural(built.longest, "day")}
          </span>
        </p>
        <div role="group" aria-label="Choose a year" className="flex flex-wrap gap-1">
          {years.map((y) => (
            <button
              key={y.year}
              type="button"
              aria-pressed={y.year === year}
              onClick={() => {
                setYear(y.year);
                setActive(null);
              }}
              className="rounded-md px-2.5 py-1.5 font-mono text-xs text-fg-muted transition-colors duration-150 hover:bg-bg-elevated hover:text-fg aria-pressed:bg-fg aria-pressed:text-bg"
            >
              {y.year}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex min-w-[42rem] gap-2">
          <div
            aria-hidden
            className="grid shrink-0 grid-rows-[auto_repeat(7,minmax(0,1fr))] gap-[3px] pt-px font-mono text-[10px] text-fg-muted"
          >
            <span className="leading-4">&nbsp;</span>
            {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
              <span key={i} className="flex items-center leading-none">
                {d}
              </span>
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <div
              aria-hidden
              className="grid gap-[3px] font-mono text-[10px] leading-4 text-fg-muted"
              style={{ gridTemplateColumns: `repeat(${built.weeks}, minmax(0, 1fr))` }}
            >
              {built.monthStarts.map((m) => (
                <span key={m.label} style={{ gridColumnStart: m.column }} className="col-span-3">
                  {m.label}
                </span>
              ))}
            </div>
            <div
              role="img"
              tabIndex={0}
              aria-label={`${plural(data.total, "contribution")} in ${data.year}. Use arrow keys to read individual days.`}
              onKeyDown={onKeyDown}
              onBlur={() => setActive(null)}
              onPointerLeave={() => setActive(null)}
              className="mt-[3px] grid grid-flow-col grid-rows-7 gap-[3px] rounded-sm"
              style={{ gridTemplateColumns: `repeat(${built.weeks}, minmax(0, 1fr))` }}
            >
              {built.cells.map((cell, i) =>
                cell === null ? (
                  <span key={i} />
                ) : cell.future ? (
                  <span key={i} className="aspect-square rounded-[3px] border border-dashed border-border/60" />
                ) : (
                  <span
                    key={i}
                    onPointerEnter={() => setActive(cell.index)}
                    onClick={() => setActive(cell.index)}
                    className="aspect-square rounded-[3px] data-[active=true]:outline-2 data-[active=true]:outline-offset-1 data-[active=true]:outline-fg"
                    data-active={active === cell.index}
                    style={{ background: `var(--heat-${cell.level})` }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
        <p aria-live="polite" className="min-h-5 text-fg-muted">
          {readout}
        </p>
        <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted">
          <span className="flex items-center gap-1" aria-hidden>
            Less
            {[0, 1, 2, 3, 4].map((l) => (
              <span key={l} className="size-2.5 rounded-[2px]" style={{ background: `var(--heat-${l})` }} />
            ))}
            More
          </span>
          <a href={profileUrl} className="text-brand underline-offset-4 hover:underline">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
