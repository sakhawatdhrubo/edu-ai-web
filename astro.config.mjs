import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Mobile-first responsive mockup. Static output — it is a website, not an app.
//
// GitHub Pages: a project site is served at https://<owner>.github.io/<repo>/, so on a real build
// assets and links must be prefixed with `base`. Internal links go through src/lib/nav.ts `url()`
// so they respect `base` automatically.
//
// Local `npm run dev` uses base '/' so the site opens at http://localhost:4321/ (root) — no /edu-ai-web
// prefix to remember. Build / preview / CI use the real base '/edu-ai-web' (matches GitHub Pages).
// `astro dev` always sets NODE_ENV=development; everything else falls through to the production base.
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://sakhawatdhrubo.github.io',
  base: isDev ? '/' : '/edu-ai-web', // repo name = edu-ai-web → site is .../edu-ai-web/
  server: { port: 4321 }, // change here if 4321 is taken (or use: npm run dev -- --port 3000)
  integrations: [
    tailwind({
      // We own the base layer (fonts, CSS vars, body) in src/styles/global.css.
      applyBaseStyles: false,
    }),
  ],
});
