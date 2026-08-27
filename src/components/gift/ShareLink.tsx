import { useState } from "react";

export function ShareLink({ label = "Share this gift" }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="min-h-11 rounded-full glass px-5 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/70 transition hover:text-gold"
    >
      {copied ? "Link copied" : label}
    </button>
  );
}
