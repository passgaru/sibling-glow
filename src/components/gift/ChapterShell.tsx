import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function ChapterShell({
  index,
  title,
  children,
  id,
  className = "",
}: {
  index: number;
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  const num = String(index).padStart(2, "0");
  return (
    <section
      id={id}
      aria-labelledby={`chapter-${num}`}
      className={`relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-32 ${className}`}
    >
      <Reveal className="mb-10 sm:mb-14">
        <p className="text-[0.62rem] uppercase tracking-[0.42em] text-gold/70">Chapter {num}</p>
        <h2
          id={`chapter-${num}`}
          className="mt-3 text-[clamp(2rem,7vw,3.6rem)] leading-[1.05] text-ivory text-glow"
        >
          {title}
        </h2>
        <div className="mt-6 hairline w-24" />
      </Reveal>
      {children}
    </section>
  );
}

export function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ember via-gold to-transparent"
      style={{ transform: "scaleX(var(--scroll, 0))" }}
      id="scroll-progress"
    />
  );
}
