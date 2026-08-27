import { useCallback, useEffect, useState } from "react";
import type { Memory } from "@/data/rakhiData";
import { Reveal } from "./Reveal";

export function MemoryGallery({ memories }: { memories: Memory[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback(
    (dir: number) => {
      setOpen((cur) => (cur === null ? cur : (cur + dir + memories.length) % memories.length));
    },
    [memories.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  const active = open === null ? null : memories[open];

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {memories.map((m, i) => (
          <Reveal key={m.title} delay={i * 80} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-2xl glass text-left lift transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={m.src}
                  alt={m.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.58rem] uppercase tracking-[0.32em] text-gold/70">{m.date}</p>
                <h3 className="mt-2 text-xl text-ivory">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.caption}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/92 p-4 backdrop-blur-xl animate-rise"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass lift"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.title} className="w-full object-contain" />
            <div className="p-6 sm:p-8">
              <p className="text-[0.58rem] uppercase tracking-[0.32em] text-gold/70">{active.date}</p>
              <h3 className="mt-2 text-2xl text-ivory">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.caption}</p>
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="min-h-11 px-3 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/70 hover:text-gold"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="min-h-11 px-3 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/70 hover:text-gold"
                >
                  Next →
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full glass text-ivory/80 hover:text-gold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
