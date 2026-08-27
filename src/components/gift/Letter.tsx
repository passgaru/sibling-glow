import type { Sister } from "@/data/rakhiData";
import { Reveal } from "./Reveal";

export function Letter({ sister }: { sister: Sister }) {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-[1.75rem] lift grain">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,oklch(0.94_0.03_85),oklch(0.88_0.04_78))]" />
        <div className="px-6 py-10 sm:px-14 sm:py-16">
          <p className="text-[0.58rem] uppercase tracking-[0.36em] text-maroon/70">
            Raksha Bandhan 2026
          </p>
          <h3 className="mt-4 font-display text-3xl text-maroon sm:text-4xl">{sister.letter.greeting}</h3>
          <div className="mt-6 space-y-5">
            {sister.letter.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="font-display text-[1.15rem] leading-[1.85] text-maroon/85 sm:text-[1.3rem]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 font-display text-2xl italic text-maroon">{sister.letter.signoff}</p>
        </div>
      </article>
    </Reveal>
  );
}
