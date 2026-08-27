import { useState } from "react";
import { CtaButton } from "./CtaButton";

export function UnsaidThings({ lines }: { lines: string[] }) {
  const [shown, setShown] = useState(1);
  const done = shown >= lines.length;

  return (
    <div>
      <ol className="space-y-5">
        {lines.slice(0, shown).map((line, i) => (
          <li
            key={line}
            className="animate-rise rounded-2xl glass px-6 py-7 sm:px-8"
          >
            <p className="text-[0.58rem] uppercase tracking-[0.36em] text-gold/70">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-[1.15rem] leading-relaxed text-ivory/90 sm:text-2xl">
              {line}
            </p>
          </li>
        ))}
      </ol>
      {!done ? (
        <div className="mt-8">
          <CtaButton variant="ghost" onClick={() => setShown((s) => s + 1)}>
            Reveal the next
          </CtaButton>
        </div>
      ) : null}
    </div>
  );
}
