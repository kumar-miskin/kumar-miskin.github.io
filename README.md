# Kumar Miskin — Personal Website

Modern, single-page personal site for Kumar Miskin, built with Next.js 16, React 19, and custom CSS. Static-exported and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Produces a fully static export in `out/` (configured via `output: "export"` in `next.config.ts`).

## Project structure

- `app/layout.tsx` — root layout, fonts (Inter + JetBrains Mono, self-hosted), metadata, theme bootstrap script
- `app/page.tsx` — all page sections (hero, about, publications, experience, projects, contact)
- `app/globals.css` — design system: theme tokens, layout, components
- `components/` — Nav (scrollspy + mobile menu), ThemeToggle, Reveal (scroll animations), icons
- `lib/content.ts` — **all site content lives here** (bio, publications, experience, links). Edit this file to update text without touching components.

## Theme

Dark/light toggle with system-preference detection. Persisted in `localStorage`; a `beforeInteractive` script sets the theme before paint to avoid flashing.

## Deploying to GitHub Pages

Push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages automatically.

One-time setup in the repo settings: **Settings → Pages → Source → "GitHub Actions"**. The site will be live at `https://kumar-miskin.github.io`.
