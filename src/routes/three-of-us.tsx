import { createFileRoute, Link } from "@tanstack/react-router";
import { GiftChrome } from "@/components/gift/GiftChrome";
import { Reveal } from "@/components/gift/Reveal";
import { ShareLink } from "@/components/gift/ShareLink";
import { site, timeline, timelineClose } from "@/data/rakhiData";

export const Route = createFileRoute("/three-of-us")({
  head: () => ({
    meta: [
      { title: `The Three of Us — ${site.title}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `The Three of Us — ${site.title}` },
      { property: "og:description", content: site.description },
    ],
  }),
  component: ThreeOfUs,
});

function ThreeOfUs() {
  return (
    <main className="relative mx-auto max-w-4xl px-6 pb-[max(7rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top))] sm:pt-28">
      <GiftChrome progress />
      <p className="text-[0.62rem] uppercase tracking-[0.45em] text-gold/80">The Three of Us</p>
      <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,4.2rem)] leading-[1.05] text-ivory text-glow">
        Two Sisters. One Brother. A Lifetime of Memories.
      </h1>

      <ol className="mt-16 space-y-16">
        {timeline.map((beat, i) => (
          <li key={beat.title} className="grid items-center gap-8 md:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="overflow-hidden rounded-[1.5rem] lift">
                <img
                  src={beat.src}
                  alt={beat.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80} className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="text-[0.58rem] uppercase tracking-[0.36em] text-gold/70">{beat.year}</p>
              <h2 className="mt-3 text-3xl text-ivory">{beat.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{beat.caption}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-20 text-center">
        <p className="font-display text-2xl italic text-ivory/90 sm:text-3xl">{timelineClose}</p>
      </Reveal>

      <div className="mt-14 flex flex-col items-center gap-5">
        <Link
          to="/house"
          className="inline-flex min-h-12 items-center rounded-full glass px-7 text-[0.68rem] uppercase tracking-[0.28em] text-ivory/80 transition hover:text-gold"
        >
          Back to the Rakhi House
        </Link>
        <ShareLink />
      </div>
    </main>
  );
}
