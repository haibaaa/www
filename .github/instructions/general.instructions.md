---
applyTo: '**'
---

# project overview

samarth patel's personal portfolio site. includes about, projects, blog, and contact sections.

## stack

- framework: sveltekit (svelte 5) with `@sveltejs/adapter-static`. fully prerendered.
- languages: svelte + javascript + markdown via mdsvex.
- styling: vanilla css. global `src/app.css` + component `<style>`.
- content pipeline: mdsvex + shiki highlighting (`svelte.config.js`), `@sveltejs/enhanced-img` for responsive images.
- build: vite
- deployment: cloudflare pages (through wrangler).

## project structure

- `src/routes/` sveltekit route tree. each folder represents a route.
  - layouts use `+layout.svelte`, `+layout.js`.
  - pages use `+page.svelte`, `+page.js`.
  - each page/layout load returns a `meta` object for SEO use (`src/lib/components/PageHead.svelte` component).
- `src/content/` mdsvex content files (blog posts and projects)
- `src/lib/` shared libraries (e.g. components, utilities).
  - `src/lib/components/` shared svelte 5 components.
  - `src/lib/js/` utilities (e.g. post loaders / icons / images / formatting).
  - `src/lib/assets/` static assets (e.g. fonts, shiki css).
