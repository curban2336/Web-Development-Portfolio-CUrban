---
title: CSS Motion Guide.
description: This site is built around demonstrating all the different ways you can perform motion in CSS.
date: 2025-11-08
tags: ["CSS", "Web Development"]
siteUrl: https://css-motion-curban2336.netlify.app/
repoUrl: https://github.com/RVCC-IDMX/css-motion-curban2336
---

{% ImageGet "Motion", "Screenshot of the CSS Motion Website", 400 %}

My CSS Motion Guide site is all about displaying the many ways you can subtly use motion to convey certain messages to users. It explains how timing, the level of subtlety, and the motion itself can all impact the information you're conveying. This was all primarily handled in CSS.

## Timing

The Timing buttons demonstrate how speed and the actual hover effect can convey different tones to users. In the example, the button enlarges in a cartoon style. Faster effect conveys a more fast paced and exciting tone. While the longer time span on the same effect gives off a calmer and more professional effect. Crazy huh?

{% ImageGet "Timing", "Screenshot of the one timing buttons enlarged hover effect", 400 %}

<div class="code-block">

```css
/* ============================================
   SECTION 2: TIMING COMPARISON
   Side-by-side comparison container
   ============================================ */
.comparison-container {
	/* Responsive layout: side-by-side on larger screens, stacked on mobile */
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-lg);
	justify-content: center;
	padding: var(--space-lg);
	border: 3px solid var(--header-border);
}

.comparison-item {
	/* Individual comparison item */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-sm);
	min-width: 200px;
	padding: var(--space-md);
}

.timing-button {
	/* Basic button reset */
	border: none;
	cursor: pointer;
	padding: var(--space-lg) var(--space-xl);
	width: 100%;

	background-color: var(--button);
	font-size: var(--space-sm);
	color: var(--text-button);
	font-weight: bold;

	transform: scale(1);
	transition: transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.timing-one {
	transition: transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.timing-two {
	transition: transform 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.timing-one:hover,
.timing-one:focus {
	transform: scale(1.4);
}

.timing-two:hover,
.timing-two:focus {
	transform: scale(1.4);
}

.timing-label {
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--text-header);
	font-size: var(--space-md);
	text-align: center;
}
```

</div>

## Flip Card

It was a big challenge trying to understand the 3D concepts that are involved in a card flip effect. That being said, finally working it out was a very rewarding feeling with great payoff! This also taught me a valuable lesson involving the many different ways a site can be styled and animated using CSS. CSS is a very powerful language. And when you learn how to use it and HTML properly you can accomplish most front end tasks with ease.

<div class="code-block">

```css
/* ============================================
   SECTION 3: FEATURE CARD (3D FLIP)
   Card flip structure based on Kevin Powell tutorial
   ============================================ */

/* Outer container - centers the card */
.card-container {
	/* Center the card on the page */
	display: flex;
	justify-content: center;
	align-items: center;
	padding: var(--space-md);
}

/* Card inner - this is what rotates */
.card-inner {
	/* Card dimensions */
	width: var(--card-width);
	height: var(--card-height);
	position: relative;

	transform-style: preserve-3d;
	transition: transform 600ms ease-in-out;
}

/* Both card faces share these properties */
.card-face {
	/* Position faces on top of each other */
	position: absolute;
	width: 100%;
	height: 100%;

	/* Prevent back face from showing through */
	backface-visibility: hidden;

	/* Layout for content inside face */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: var(--space-lg);
	gap: var(--space-md);
	line-height: 1.5;

	background-color: var(--bg);
	border: 3px solid var(--header-border);
	border-radius: 1rem;
	text-align: center;
	transform-style: preserve-3d;
}

/* card face headers */
.card-front h3,
.card-back h3 {
	font-size: var(--space-lg);
}

.card-front h3 {
	color: var(--text-header);
}

/* Back face - rotated 180 degrees */
.card-back {
	transform: rotateY(180deg);
	background-color: var(--button);
	color: var(--text-button);
}

/* Hover/focus state for card */
.card-container:hover .card-inner,
.card-container:focus-within .card-inner {
	transform: rotateY(180deg);
}
```

</div>
