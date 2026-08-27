import { useState } from "react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function PromiseThread({ promises }: { promises: string[] }) {
  const [shown, setShown] = useState(0);
  const done = shown >= promises.length;

  return (
    <div>
      <Reveal>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Pull the thread. Every knot is something I mean.
        </p>
      </Reveal>

      <div className="relative mt-12 pl-8 sm:pl-12">
        <span
          aria-hidden
          className="absolute left-2 top-1 w-px bg-gradient-to-b from-gold/70 via-ember/50 to-transparent transition-[height] duration-1000"
          style={{ height: `${Math.max(shown, 1) * 20}%`, bottom: 0 }}
        />
        <ul className="space-y-6">
          {promises.slice(0, shown).map((p, i) => (
            <li key={p} className="relative animate-rise rounded-2xl glass p-5 sm:p-6">
              <span
                aria-hidden
                className="absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full bg-gold shadow-[0_0_20px_var(--gold)] sm:-left-[2.65rem]"
              />
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-gold/70">
                Promise {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-lg leading-relaxed text-ivory/90">{p}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        {!done ? (
          <CtaButton variant="ghost" onClick={() => setShown((s) => s + 1)}>
            {shown === 0 ? "Pull the thread" : "Next promise"}
          </CtaButton>
        ) : (
          <p className="animate-rise text-2xl text-ivory text-glow">This is my gift to you.</p>
        )}
      </div>
    </div>
  );
}
