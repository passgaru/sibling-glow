import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChapterShell } from "@/components/gift/ChapterShell";
import { CtaButton } from "@/components/gift/CtaButton";
import { GiftChrome } from "@/components/gift/GiftChrome";
import { Letter } from "@/components/gift/Letter";
import { MemoryGallery } from "@/components/gift/MemoryGallery";
import { PromiseThread } from "@/components/gift/PromiseThread";
import { RakhiCeremony } from "@/components/gift/RakhiCeremony";
import { Reveal } from "@/components/gift/Reveal";
import { ShareLink } from "@/components/gift/ShareLink";
import { UnsaidThings } from "@/components/gift/UnsaidThings";
import {
  chapters,
  finalChapter,
  getSister,
  images,
  site,
} from "@/data/rakhiData";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Route = createFileRoute("/sister/$id")({
  loader: ({ params }) => {
    const sister = getSister(params.id);
    if (!sister) throw notFound();
    return { sister };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.sister.name ?? "Your gift"} — ${site.title}`,
      },
      { name: "description", content: site.description },
      {
        property: "og:title",
        content: `${loaderData?.sister.name ?? "Your gift"} — ${site.title}`,
      },
      { property: "og:description", content: site.description },
    ],
  }),
  component: SisterJourney,
});

function scrollToChapter(id: string, instant: boolean) {
  document.getElementById(id)?.scrollIntoView({
    behavior: instant ? "auto" : "smooth",
    block: "start",
  });
}

function SisterJourney() {
  const { sister } = Route.useLoaderData();
  const reduced = useReducedMotion();

  return (
    <main className="relative pb-[max(7rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))]">
      <GiftChrome progress />

      <ChapterShell index={1} title={chapters[0]} id="ch-01">
        <div className="max-w-2xl space-y-6 text-lg leading-[1.9] text-ivory/80">
          {sister.intro.map((line, i) => (
            <Reveal key={line} delay={i * 160} as="p">
              {line}
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <CtaButton onClick={() => scrollToChapter("ch-02", reduced)}>Continue →</CtaButton>
        </div>
      </ChapterShell>

      <ChapterShell index={2} title={chapters[1]} id="ch-02">
        <ul className="max-w-2xl space-y-4">
          {sister.special.map((line, i) => (
            <Reveal key={line} delay={i * 60} as="li">
              <p className="rounded-2xl glass px-6 py-5 text-lg leading-relaxed text-ivory/88 sm:text-xl">
                {line}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="mt-10 max-w-2xl">
          <p className="font-display text-2xl italic text-ivory text-glow sm:text-3xl">
            {sister.specialClose}
          </p>
        </Reveal>
      </ChapterShell>

      <ChapterShell index={3} title={chapters[2]} id="ch-03">
        <MemoryGallery memories={sister.memories} />
      </ChapterShell>

      <ChapterShell index={4} title={chapters[3]} id="ch-04">
        <UnsaidThings lines={sister.unsaidThings} />
      </ChapterShell>

      <ChapterShell index={5} title={chapters[4]} id="ch-05">
        <RakhiCeremony />
      </ChapterShell>

      <ChapterShell index={6} title={chapters[5]} id="ch-06">
        <PromiseThread promises={sister.promises} />
      </ChapterShell>

      <ChapterShell index={7} title={chapters[6]} id="ch-07">
        <Letter sister={sister} />
      </ChapterShell>

      <ChapterShell index={8} title={chapters[7]} id="ch-08">
        <h3 className="sr-only">{finalChapter.heading}</h3>
        <p className="font-display text-3xl text-ivory sm:text-4xl">{finalChapter.heading}</p>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-[1.9] text-muted-foreground">
          {finalChapter.body.map((line) => (
            <Reveal key={line} as="p">
              {line}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-[1.75rem] lift">
          <img
            src={images.family}
            alt="The three of us — a family frame to keep"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </ChapterShell>

      <section
        aria-labelledby="farewell"
        className="mx-auto max-w-3xl px-6 pb-8 pt-10 text-center"
      >
        <Reveal>
          <p id="farewell" className="text-xl leading-relaxed text-ivory/85 sm:text-2xl">
            {sister.farewell}
          </p>
          <p className="mt-10 font-display text-3xl text-ivory text-glow sm:text-4xl">
            Happy Raksha Bandhan, {sister.name}. ❤️
          </p>
          <p className="mt-6 text-sm tracking-[0.2em] text-gold/80">— Your Brother</p>
        </Reveal>
        <div className="mt-14 flex flex-col items-center gap-5">
          <Link
            to="/house"
            className="inline-flex min-h-12 items-center rounded-full glass px-7 text-[0.68rem] uppercase tracking-[0.28em] text-ivory/80 transition hover:text-gold"
          >
            Back to the Rakhi House
          </Link>
          <ShareLink label="Share her gift" />
        </div>
      </section>
    </main>
  );
}
