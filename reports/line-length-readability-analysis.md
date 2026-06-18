# Line length and readability analysis

**Project**: Web Development Portfolio - Christopher Urban
**Generated**: December 23, 2025 at 1:28 PM ET

## Summary

The site lacks `max-width` constraints on text content, causing paragraphs and other readable elements to span the full viewport width on larger screens. This violates the widely accepted typographic guideline of 45-75 characters per line for optimal readability.

## Elements requiring `max-width` constraints

### 1. Paragraphs (`<p>`)

**Current behavior**: Paragraphs expand to fill the container width. On wide screens (1600px+), paragraphs receive large margins (`margin: 5rem`) but no width constraint, meaning text lines can exceed 100+ characters.

**Location in CSS**: [index.css:131-134](css/index.css#L131-L134) (base), [index.css:443-446](css/index.css#L443-L446) (tablet), [index.css:500-503](css/index.css#L500-L503) (desktop)

**Issue**: The `margin: 3rem` and `margin: 5rem` in container queries push content inward but don't limit line length—on a 1920px screen, paragraphs still span ~1700px.

### 2. Ordered lists (`<ol>`)

**Current behavior**: Lists have `text-align: left` but no width constraint. Long list items wrap across the full viewport.

**Location in CSS**: [index.css:140-143](css/index.css#L140-L143)

### 3. List items (`<li>`)

**Current behavior**: Individual list items inherit full container width.

**Location in CSS**: [index.css:136-138](css/index.css#L136-L138)

### 4. Post content (`main` element content)

**Current behavior**: The `<main>` element uses `container-type: inline-size` for container queries but has no `max-width`. All content within inherits this unbounded width.

**Location in CSS**: [index.css:167-170](css/index.css#L167-L170)

### 5. Post descriptions (`.postlist-description`)

**Current behavior**: Uses `flex-basis: 100%` with no max-width, causing descriptions to span full width.

**Location in CSS**: [index.css:393-397](css/index.css#L393-L397)

## Recommended CSS modifications

### Option A: Constrain the `<main>` content wrapper (recommended)

Add a max-width to the `<main>` element or create a content wrapper. This is the most efficient fix as it constrains all readable content at once.

```css
main {
  container-type: inline-size;
  container-name: blogBody;
  max-width: 70ch;      /* ~70 characters for optimal reading */
  margin-inline: auto;  /* center the content */
}
```

**Trade-off**: This affects all content including images. May need to allow images to break out of the constraint using negative margins or a wrapper approach.

### Option B: Target specific text elements

Add max-width to paragraph and list elements directly:

```css
p,
ol,
ul:not(.nav):not(.post-metadata):not(.postlist) {
  max-width: 70ch;
  margin-inline: auto;
}
```

This preserves full-width images while constraining text.

### Option C: Content wrapper class

Create a `.prose` or `.content` wrapper class for readable content:

```css
.prose {
  max-width: 65ch;
  margin-inline: auto;
}

.prose p,
.prose ol,
.prose ul,
.prose li {
  max-width: 100%; /* inherit from wrapper */
}
```

Apply this class in templates where long-form content appears.

## Container query considerations

The existing container queries at 800px and 1600px increase font sizes but don't address line length. At larger breakpoints:

| Breakpoint | Font size | Issue |
|------------|-----------|-------|
| Base (<800px) | `--font-sm` (14px) | Acceptable—narrow viewport limits line length naturally |
| 800px+ | `--font-lg` (18px) | Lines become too long as viewport exceeds ~900px |
| 1600px+ | `--font-xl` (30px) | Large font on very wide lines; extremely poor readability |

The large margins at 1600px (`margin: 5rem`) attempt to address this but margins alone don't constrain line length—they just add whitespace.

## Priority elements

Ranked by impact on user experience:

1. **`<p>` elements in blog posts** — Most content is paragraph text; fixing this addresses the majority of the issue
2. **`<ol>` and `<li>` in blog posts** — Numbered lists with long descriptions (e.g., code explanations)
3. **`.postlist-description`** — Post summaries on the blog listing page
4. **About page paragraphs** — Long biographical text with no constraints

## Technical notes

- The `ch` unit (width of the "0" character) is ideal for text max-width as it scales with font size
- Using `65ch` to `75ch` is the industry standard for body text
- The `margin-inline: auto` shorthand centers constrained content horizontally
- Consider using CSS `text-wrap: pretty` (if browser support allows) for improved line breaking in addition to max-width
