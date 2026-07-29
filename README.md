# Braden Ransom — Portfolio

Next.js static site (App Router). Dark developer portfolio with project case studies.

## Stack

- Next.js 16 (static `output: "export"`)
- React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

## Local

```bash
npm install
npm run dev
```

Production build (writes `out/`):

```bash
npm run build
```

## Netlify

Configured via `netlify.toml`:

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Publish directory | `out` |
| Node | 20 (`.nvmrc`) |

**Git-connected:** Import the repo in Netlify — it will use `netlify.toml` automatically.

**Manual / Drop:** Run `npm run build`, then drag the `out/` folder into Netlify Drop.

Do not enable `@netlify/plugin-nextjs` while using static export — publish is plain HTML from `out/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Static export to `out/` |
| `npm start` | Serve production build (Node; optional locally) |
