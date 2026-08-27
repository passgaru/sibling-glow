import { useEffect, useState, type ReactNode } from "react";
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max <= 0 ? 0 : root.scrollTop / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ember via-gold to-transparent"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
