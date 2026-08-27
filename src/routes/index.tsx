import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Atmosphere } from "@/components/gift/Atmosphere";
import { CtaButton } from "@/components/gift/CtaButton";
import { AudioController } from "@/components/gift/AudioController";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Gift I Couldn't Buy — Raksha Bandhan 2026" },
      {
        name: "description",
        content: "A little digital gift from a brother to his sisters. Raksha Bandhan 2026.",
      },
      { property: "og:title", content: "A Gift I Couldn't Buy — Raksha Bandhan 2026" },
      {
        property: "og:description",
        content: "A little digital gift from a brother to his sisters.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Opening,
});

function Opening() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timers = [900, 2200, 3600, 5000, 6200].map((ms, i) =>
      setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const open = () => {
    setLeaving(true);
    setTimeout(() => navigate({ to: "/house" }), 900);
  };

  const fade = (n: number) =>
    `transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      step >= n ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[3px]"
    }`;

  return (
    <main
      className={`relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center transition-all duration-[900ms] ${
        leaving ? "scale-[1.04] opacity-0 blur-md" : "opacity-100"
      }`}
    >
      <Atmosphere />
      <AudioController />

      <p className={`text-[0.62rem] uppercase tracking-[0.45em] text-gold/80 ${fade(1)}`}>
        Raksha Bandhan 2026
      </p>

      <h1
        className={`mt-6 max-w-4xl text-[clamp(2.6rem,11vw,6rem)] leading-[0.98] text-ivory text-glow ${fade(2)}`}
      >
        A Gift I Couldn't Buy
      </h1>

      <p className={`mt-6 font-display text-lg italic text-ivory/70 ${fade(3)}`}>
        From your brother.
      </p>

      <div className={`mt-10 max-w-xl space-y-4 text-sm leading-[1.9] text-muted-foreground ${fade(4)}`}>
        <p>
          I wanted to give you something this Raksha Bandhan. Something you could unwrap. Something
          you could keep. Something that would remind you of me.
        </p>
        <p>But this year, I couldn't.</p>
        <p className="text-ivory/80">So I made you something instead.</p>
      </div>

      <div className={`mt-12 ${fade(5)}`}>
        <CtaButton onClick={open}>Open my gift →</CtaButton>
      </div>
    </main>
  );
}
