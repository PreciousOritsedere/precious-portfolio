import type { CSSProperties } from "react";

export function SplitReveal({ text }: { text: string }) {
  let index = 0;
  const words = text.split(" ");

  return (
    <span aria-hidden>
      {words.map((word, w) => (
        <span key={`${word}-${w}`}>
          <span className="split-mask">
            {Array.from(word).map((char, c) => (
              <span key={c} className="split-char" style={{ "--i": index++ } as CSSProperties}>
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
