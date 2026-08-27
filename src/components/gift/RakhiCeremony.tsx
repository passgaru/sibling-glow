import { useState } from "react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function RakhiCeremony() {
  const [tied, setTied] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <Reveal className="max-w-2xl">
        <p className="text-lg leading-relaxed text-ivory/85">
          Today, you tie a Rakhi on my wrist.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          A Rakhi is a symbol of the bond between siblings — a reminder of love, care and the promise
          to stand by each other.
        </p>
      </Reveal>

      <div className="relative mt-14 w-full max-w-md">
        <div
          className={`pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl transition-opacity duration-[1400ms] ${
            tied ? "bg-ember/40 opacity-100" : "bg-ember/10 opacity-40"
          }`}
        />
        <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="A stylised wrist with a rakhi">
          <defs>
            <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.42 0.06 45)" />
              <stop offset="100%" stopColor="oklch(0.3 0.05 30)" />
            </linearGradient>
            <linearGradient id="thread" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.72 0.18 45)" />
              <stop offset="50%" stopColor="oklch(0.86 0.13 82)" />
              <stop offset="100%" stopColor="oklch(0.55 0.16 20)" />
            </linearGradient>
          </defs>
          <path
            d="M40 170 C110 120, 150 120, 210 110 C270 100, 320 96, 372 84 L378 122 C324 136, 274 142, 218 152 C160 162, 122 168, 62 210 Z"
            fill="url(#skin)"
            opacity="0.9"
          />
          <path
            d="M186 88 C214 96, 226 132, 216 166"
            fill="none"
            stroke="url(#thread)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="1000"
            style={{
              strokeDashoffset: tied ? 0 : 1000,
              transition: "stroke-dashoffset 1800ms cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <g
            style={{
              transformOrigin: "202px 128px",
              transform: tied ? "scale(1)" : "scale(0.2)",
              opacity: tied ? 1 : 0,
              transition: "all 1200ms cubic-bezier(0.22,1,0.36,1) 900ms",
            }}
          >
            <circle cx="202" cy="128" r="24" fill="oklch(0.82 0.12 82)" />
            <circle cx="202" cy="128" r="15" fill="oklch(0.55 0.16 25)" />
            <circle cx="202" cy="128" r="6" fill="oklch(0.92 0.08 85)" />
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx={202 + Math.cos((i / 12) * Math.PI * 2) * 30}
                cy={128 + Math.sin((i / 12) * Math.PI * 2) * 30}
                r="3"
                fill="oklch(0.86 0.13 82)"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="mt-10 min-h-[9rem]">
        {!tied ? (
          <CtaButton onClick={() => setTied(true)}>Tie my rakhi</CtaButton>
        ) : (
          <div className="animate-rise">
            <p className="text-2xl text-ivory text-glow">Rakhi tied. ❤️</p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              You tied something around my wrist today. So I want to give you something back.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
