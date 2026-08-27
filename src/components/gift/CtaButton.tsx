import type { ButtonHTMLAttributes, ReactNode } from "react";

export function CtaButton({
  children,
  className = "",
  variant = "solid",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] transition-all duration-500 active:scale-[0.98]";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-b from-primary to-gold text-primary-foreground shadow-[0_0_50px_-14px_var(--gold)] hover:shadow-[0_0_70px_-8px_var(--gold)] hover:brightness-110"
      : "glass text-ivory/85 hover:text-ivory hover:border-gold/40";
  return (
    <button type="button" {...rest} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
    </button>
  );
}
