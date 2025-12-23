# Code fixes evaluation report

**Project:** Web-Development-Portfolio-CUrban
**Generated:** December 23, 2025 at 2:43 PM ET

---

## Overview

This report evaluates the uncommitted changes made to the CUrban portfolio project. The modifications address content organization, semantic HTML, typography/readability, and CSS consistency.

---

## 1. Template enhancement: post links refactoring

### Files modified

- [post.njk](_includes/layouts/post.njk)

### What was fixed

The post layout template was enhanced to support structured project links through front matter data instead of inline content.

**Before:**

```njk
<ul class="post-metadata">
 <li><time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time></li>
 {%- for tag in tags | filterTagList %}
 ...
 {%- endfor %}
</ul>
```

**After:**

```njk
<nav>
 <ul class="post-metadata">
  ...
 </ul>
</nav>

{%- if siteUrl or repoUrl %}
<div class="post-links">
 {%- if siteUrl %}<a href="{{ siteUrl }}">View Site</a>{% endif %}
 {%- if repoUrl %}<a href="{{ repoUrl }}">View Repo</a>{% endif %}
</div>
{%- endif %}
```

### Why this was fixed

1. **Semantic HTML improvement**: Wrapping the metadata list in a `<nav>` element provides better document structure and accessibility, signaling to assistive technologies that this is a navigation region.

2. **Data separation from content**: Moving project URLs to front matter (`siteUrl`, `repoUrl`) separates structured data from prose content. This follows the "content as data" principle that Eleventy encourages.

3. **Consistent presentation**: All portfolio posts now display their project links in an identical, styled format rather than inconsistent inline text.

4. **Conditional rendering**: The template only renders the links container when URLs are present, avoiding empty markup.

---

## 2. Blog post content cleanup

### Files modified

- [firstpost.md](content/blog/firstpost.md) (Sci-Fi Shooter game)
- [secondpost.md](content/blog/secondpost.md) (Poetry website)
- [thirdpost.md](content/blog/thirdpost.md) (CSS Motion Guide)
- [fourthpost.md](content/blog/fourthpost/fourthpost.md) (About Me)
- [fifthpost.md](content/blog/fifthpost.md) (CSS Layout Experiment)

### What was fixed

All five blog posts were updated to move site/repo links from inline content to front matter fields.

**Before (example from firstpost.md):**

```markdown
---
title: Web Based Video Game.
description: This is a post on my Sci-Fi Shooter game built with Phaser.
date: 2025-05-13
tags: ["JS", "Game Development", "Phaser"]
---

Link to the site:
<a href="https://sci-fi-shooter-curban2336.netlify.app/">https://sci-fi-shooter-curban2336.netlify.app/</a>

Link to the repo:
<a href="https://github.com/RVCC-IDMX/phaser-app-curban2336">https://github.com/RVCC-IDMX/phaser-app-curban2336</a>

{% ImageGet "BossFight"...
```

**After:**

```markdown
---
title: Web Based Video Game.
description: This is a post on my Sci-Fi Shooter game built with Phaser.
date: 2025-05-13
tags: ["JS", "Game Development", "Phaser"]
siteUrl: https://sci-fi-shooter-curban2336.netlify.app/
repoUrl: https://github.com/RVCC-IDMX/phaser-app-curban2336
---

{% ImageGet "BossFight"...
```

### Why this was fixed

1. **Content quality**: The original inline links were redundant and visually inconsistent. Raw anchor tags in markdown content break the prose flow.

2. **DRY principle**: By using front matter, the URL data exists once and the template controls presentation. If the button style needs updating, only one file changes.

3. **Maintainability**: Authors can now add/edit project links by modifying front matter without touching post content.

4. **Cleaner reading experience**: Posts now begin directly with meaningful content (images, descriptions) rather than utility links.

---

## 3. CSS typography and readability improvements

### File modified

- [index.css](css/index.css)

### What was fixed

Multiple typography and layout improvements were made to enhance readability.

#### 3.1 Paragraph constraints

**Before:**

```css
p {
 line-height: 1.5;
 font-size: var(--font-sm);
}
```

**After:**

```css
p {
 line-height: 1.5;
 font-size: var(--font-sm);
 max-width: 70ch;
 margin-inline: auto;
 text-align: left;
}
```

**Why:** The `70ch` maximum width is a typography best practice. Lines longer than 75 characters become difficult to track visually. Centering with `margin-inline: auto` keeps content balanced while left-aligning text improves readability.

#### 3.2 Ordered and unordered list constraints

**Added:**

```css
ol {
 text-align: left;
 font-size: var(--font-sm);
 max-width: 70ch;
 margin-inline: auto;
}

ul:not(.nav):not(.post-metadata):not(.postlist):not(.links-nextprev) {
 max-width: 70ch;
 margin-inline: auto;
}
```

**Why:** Lists should follow the same readability constraints as paragraphs. The `:not()` selectors exclude navigation and structural lists that need different layout behavior.

#### 3.3 Heading centering

**Added:**

```css
h1,
h2,
h3,
h4,
h5,
h6 {
 text-align: center;
}
```

**Why:** Centered headings create visual hierarchy and work well with the centered content approach. This is particularly effective for portfolio/blog layouts.

#### 3.4 Image centering

**Before:**

```css
img {
 max-width: 100%;
 border-radius: 0.5rem;
}
```

**After:**

```css
img {
 display: block;
 margin-inline: auto;
 max-width: 100%;
 border-radius: 0.5rem;
}
```

**Why:** Images were likely appearing left-aligned within their containers. Adding `display: block` and `margin-inline: auto` centers them, matching the centered typography approach.

#### 3.5 Post description width constraint

**Added:**

```css
.postlist-description {
 ...
 max-width: 70ch;
}
```

**Why:** Ensures post descriptions on listing pages also follow the 70-character line length guideline.

---

## 4. New component: post links styling

### File modified

- [index.css](css/index.css)

### What was added

```css
/* Post links (site/repo) */
.post-links {
 display: flex;
 justify-content: center;
 gap: 1.5em;
 margin-block: 1em;
}

.post-links a {
 text-decoration: none;
 padding: 0.5em 1em;
 border: 1px solid var(--text-color-link);
 border-radius: 0.25rem;
}

.post-links a:hover {
 background-color: var(--text-color-link);
 color: var(--background-color);
}
```

### Why this was added

1. **Visual prominence**: The project links are important calls-to-action. Button-style presentation makes them more discoverable than inline text links.

2. **Interactive feedback**: The hover state with inverted colors provides clear interaction feedback.

3. **Consistent with design system**: The styling uses existing CSS custom properties (`--text-color-link`, `--background-color`) maintaining visual consistency.

4. **Centered layout**: The flexbox centering with gap spacing creates balanced, professional presentation.

---

## 5. Navigation styling for post metadata

### File modified

- [index.css](css/index.css)

### What was added

```css
main nav {
 display: block;
 max-width: fit-content;
 margin-inline: auto;
}
```

### Why this was added

The new `<nav>` wrapper around post metadata needed styling to center it properly within the main content area. Using `fit-content` ensures the nav doesn't stretch unnecessarily while `margin-inline: auto` centers it.

---

## 6. CSS formatting consistency

### File modified

- [index.css](css/index.css)

### What was fixed

Throughout the CSS file, indentation was normalized from mixed spaces to consistent tabs. Comments that were inline with property values were moved to separate lines.

**Before:**

```css
--font-sm: 0.875rem; /* 14px /16 */
--font-md: 1rem; /* 16px /16 */
```

**After:**

```css
--font-sm: 0.875rem;
/* 14px /16 */
--font-md: 1rem;
/* 16px /16 */
```

### Why this was fixed

While the inline comments are useful documentation, the reformatting improves scannability. However, this change appears to be from an auto-formatter rather than intentional refactoring. The original inline format was arguably more compact and equally readable.

---

## 7. Removed commented code

### File modified

- [index.css](css/index.css)

### What was fixed

```css
/* text-align: center; */
```

The global `text-align: center` on body was commented out rather than removed.

### Why this matters

The change from global center alignment to targeted centering on specific elements (headings, images) represents a more nuanced typography approach. Content text is now left-aligned for readability while structural elements are centered for visual balance.

---

## 8. Container query refinement

### File modified

- [index.css](css/index.css)

### What was fixed

In the tablet container query, the paragraph margin was removed:

**Before:**

```css
@container blogBody (min-width: 800px) {
 p {
  margin: 3rem;
  font-size: var(--font-lg);
 }
}
```

**After:**

```css
@container blogBody (min-width: 800px) {
 p {
  font-size: var(--font-lg);
 }
}
```

### Why this was fixed

The `3rem` margin on all sides of paragraphs was excessive and conflicted with the new `margin-inline: auto` centering approach. Removing it allows the base paragraph styles to handle spacing consistently.

---

## Summary of improvements

| Category | Impact |
|----------|--------|
| Semantic HTML | Improved accessibility with `<nav>` wrapper |
| Content architecture | Data separated from presentation via front matter |
| Typography | 70ch line length, centered headings, left-aligned prose |
| Visual design | New styled button links for project URLs |
| Maintainability | Single source of truth for link presentation |
| Consistency | Uniform formatting across all blog posts |

---
