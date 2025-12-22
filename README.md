### Attribution

This Eleventy site was originally built from [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) by Zach Leatherman ([@zachleat](https://github.com/zachleat)): "A starter repository showing how to build a blog with the Eleventy site generator (using the v3.0 release)."

# Web Dev Portfolio — Christopher Urban

Personal web development portfolio built with Eleventy. Showcases projects through blog posts with: interactive overlay-effect demos, Netlify-backed contact form and industry standard practices.

## Overview

- Static site generated with Eleventy 3.x (ESM). Content lives in `content/` and ships to `_site/` on build.
- Responsive layout using container queries and locally hosted variable fonts for Playfair and Lora.
- Cloudinary-powered `ImageGet` shortcode outputs responsive `srcset` images with lazy loading and intrinsic dimensions.
- Demonstrating my best web development sites, showcasing my experimental and finest work.

## Tech Stack

- Eleventy (Nunjucks templates)
- Cloudinary image helper (`_data/cloudinary.js`) used by `ImageGet` in `eleventy.config.js`
- CSS: custom, mobile-first with container queries and Prism diff syntax highlighting
- Deployment targets: Netlify (default) and Vercel support via `vercel.json`

## Project Structure

- `content/` — pages and posts (markdown/Nunjucks) plus tag templates
- `_includes/` — layouts and partials (`base.njk`, `home.njk`, `post.njk`, `postslist.njk`)
- `_data/` — global metadata and Cloudinary helper
- `css/` — site styles (`index.css`, `message-box.css`, `prism-diff.css`)
- `eleventy.config.js` — Eleventy setup, plugins, shortcodes, passthrough copies

## Key Features

- Responsive image shortcode: `{% ImageGet "Name", "Alt text", width %}` renders 400w/800w/1600w sources, lazy loading, and async decoding.
- Accessible navigation (skip link), semantic headings, and responsive typography tuned for small-to-large viewports.

## Getting Started

1. Install Node 18+.
2. Install dependencies:

```
npm install
```

3. Run the dev server with live reload:

```
npm start
```

4. Build for production:

```
npm run build
```

`npm start` serves via Eleventy’s built-in dev server; output goes to `_site/`.

## Content Editing

- Blog posts live under `content/blog/` (markdown with front matter: `title`, `description`, `date`, `tags`).
- Home and About pages: `content/index.njk`, `content/about.md`.
- Tag and sitemap templates: `content/tag-pages.njk`, `content/sitemap.xml.njk`.

## Deployment

- Netlify: build command `npm run build`, publish directory `_site/`. Netlify forms work automatically.
- Vercel: uses `vercel.json`; set build command `npm run build`, output directory `_site/`.
