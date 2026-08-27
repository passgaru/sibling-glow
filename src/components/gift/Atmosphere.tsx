import { useMemo } from "react";
import { images } from "@/data/rakhiData";

export function Atmosphere({ withImage = true }: { withImage?: boolean }) {
  const embers = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        delay: `${(i * 1.7) % 18}s`,
        duration: `${22 + ((i * 5) % 18)}s`,
        size: 1 + ((i * 3) % 3),
        dx: `${((i % 5) - 2) * 24}px`,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain">
      {withImage && (
        <img
          src={images.ambient}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          loading="eager"
          decoding="async"
        />
      )}
      <div className="absolute inset-0 warm-veil" />
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute left-1/2 top-[-18%] h-[52vh] w-[80vw] -translate-x-1/2 rounded-full bg-ember/20 blur-[110px] animate-soft-glow" />
      {embers.map((e, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] rounded-full bg-gold/70 animate-ember"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDelay: e.delay,
            animationDuration: e.duration,
            ["--dx" as string]: e.dx,
          }}
        />
      ))}
    </div>
  );
}
