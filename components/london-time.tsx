"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  hour: "2-digit",
  minute: "2-digit",
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

export function LondonTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => null,
  );

  return (
    <span className="tabular-nums">
      London · <time>{time ?? "--:--"}</time>
    </span>
  );
}
