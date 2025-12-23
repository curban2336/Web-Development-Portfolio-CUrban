# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal web development portfolio built with Eleventy 3.x (ESM). Uses Nunjucks templates, Cloudinary for responsive images, and variable fonts. Based on the `eleventy-base-blog` starter template.

## Commands

```bash
# Install dependencies (Node 18+ required)
npm install

# Start dev server with live reload
npm start

# Build for production
npm run build

# Debug mode with verbose output
npm run debug

# Debug mode with dev server
npm run debugstart
```

## Architecture

### Directory structure

- `content/` — Input directory for pages and blog posts (markdown/Nunjucks)
- `_includes/layouts/` — Nunjucks layouts (`base.njk`, `home.njk`, `post.njk`)
- `_data/` — Global data files (`metadata.js`, `cloudinary.js`)
- `_config/` — Eleventy plugin configurations (`filters.js`)
- `css/` — Stylesheets (bundled into pages via `{% include %}`)
- `fonts/` — Variable fonts (Playfair Display, Lora)
- `public/` — Static assets copied to output root
- `_site/` — Build output (gitignored)

### Eleventy configuration

`eleventy.config.js` uses ESM format and configures:

- **Input/output paths**: `content/` → `_site/`
- **Template engines**: Nunjucks for both Markdown and HTML preprocessing
- **Includes path**: `../_includes` (relative to input)
- **Data path**: `../_data` (relative to input)

### Cloudinary image integration

The `ImageGet` shortcode generates responsive images from Cloudinary:

```njk
{% ImageGet "ImageName", "Alt text", 400 %}
```

- Outputs `<img>` with `srcset` at 400w/800w/1600w breakpoints
- Image names must match keys in `_data/cloudinary.js` (e.g., `HeadShot`, `BossFight`)
- Images include lazy loading and async decoding by default

To add new images:
1. Upload to Cloudinary under `chrisurban-portfolio` cloud
2. Add entry to `_data/cloudinary.js` with filename and version number

### CSS bundling

CSS is bundled inline for performance using Eleventy's bundle plugin:

- Main styles: `css/index.css` included in `base.njk`
- Per-page CSS: Use `{% css %}...{% endcss %}` paired shortcode
- Retrieved via `{% getBundle "css" %}` in layout head

### Content authoring

Blog posts use front matter:

```yaml
---
title: Post Title
description: Brief description
date: 2024-01-15
tags:
  - tag-name
draft: true  # Optional: hides in production builds
---
```

Posts tagged with `posts` are collected automatically. Draft posts show "(draft)" suffix in dev mode and are excluded from production builds.

## Deployment

- **Netlify**: Build command `npm run build`, publish `_site/`
- **Vercel**: Uses `vercel.json`, same build settings
