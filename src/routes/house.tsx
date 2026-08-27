import { createFileRoute, Link } from "@tanstack/react-router";
import { GiftChrome } from "@/components/gift/GiftChrome";
import { ShareLink } from "@/components/gift/ShareLink";
import { site, sisters } from "@/data/rakhiData";

export const Route = createFileRoute("/house")({
  head: () => ({
    meta: [
      { title: `The Rakhi House — ${site.title}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `The Rakhi House — ${site.title}` },
      { property: "og:description", content: site.description },
    ],
  }),
  component: House,
});

function House() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center px-6 pb-[max(6rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top))] sm:pt-28">
      <GiftChrome />
      <p className="text-[0.62rem] uppercase tracking-[0.45em] text-gold/80">Raksha Bandhan 2026</p>
      <h1 className="mt-6 max-w-3xl text-center text-[clamp(2.2rem,8vw,4.4rem)] leading-[1.05] text-ivory text-glow">
        There are two people this gift was made for.
      </h1>
      <p className="mt-5 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
        Choose whose thread to follow. Each journey is its own, written only for her.
      </p>

      <div className="mt-14 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {sisters.map((sister) => (
          <Link
            key={sister.id}
            to="/sister/$id"
            params={{ id: sister.id }}
            className="group rounded-[1.75rem] glass lift p-8 text-left transition-transform duration-500 hover:-translate-y-1"
          >
            <p className="text-2xl" aria-hidden>
              {sister.flower}
            </p>
            <h2 className="mt-4 text-3xl text-ivory sm:text-4xl">{sister.name}</h2>
            <p className="mt-2 text-sm italic text-ivory/55">{sister.nickname}</p>
            <p className="mt-8 text-[0.68rem] uppercase tracking-[0.28em] text-gold/80 transition group-hover:text-gold">
              Open your gift →
            </p>
          </Link>
        ))}
      </div>

      <Link
        to="/three-of-us"
        className="mt-16 rounded-full glass px-8 py-4 text-center text-[0.68rem] uppercase tracking-[0.32em] text-ivory/75 transition hover:text-gold"
      >
        The Three of Us
      </Link>

      <div className="mt-10">
        <ShareLink label="Copy this house link" />
      </div>
    </main>
  );
}
