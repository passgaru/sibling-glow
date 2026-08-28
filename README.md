# A Gift I Couldn't Buy — Raksha Bandhan 2026

A cinematic, interactive digital keepsake made for two sisters: an opening
sequence, a shared "Rakhi House", two fully personalized 8-chapter journeys,
a virtual Rakhi ceremony, promise threads, handwritten letters, and a shared
"Three of Us" family timeline.

## Editing the content

All copy, names, letters, promises, memories and timeline entries live in a
single configuration file:

```
src/data/rakhiData.ts
```

Change the sister names, chapter text, captions and letters there — nothing is
hard-coded in the components.

## Replacing photos

Drop your own images into `src/assets/` and update the imports referenced in
`src/data/rakhiData.ts`. Recommended: landscape JPGs around 1600px wide.

## Development

```bash
bun install
bun run dev
```

The app runs at http://localhost:8080.

## Tech

React 19, TanStack Start (file-based routing in `src/routes`), Tailwind CSS v4
with a custom design-token theme in `src/styles.css`, and Vite 7.
