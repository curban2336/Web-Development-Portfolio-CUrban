---
title: CSS Layout Experiment
description: This site is used as an experiment in layout design, scaling all the container elements without using @media queries and accommodating for screens of any size(including super large screens).
date: 2025-11-29
tags: ["CSS", "Layout", "Web Development"]
siteUrl: https://cookie-jar-layout-experiment.netlify.app/
repoUrl: https://github.com/RVCC-IDMX/cookie-jar-curban2336
---

The Cookie Jar website, while it does offer several recipes for delicious cookies, is really a demonstration of Layout consistency regardless of screensize. This site has scaling variables and sizing clamps to make sure that the elements are sized appropriately regardless of whether the screen is 400px or 2300px. As an extra challenge, the entirety of the website is styled without using @media in any way. Instead, it uses a series of @container queries to check to specific container sizes in relation to the whole screen.

## Container Styling

### Desktop Styling

{% ImageGet "Desktop", "Screenshot of the website at the largest screen size styling", 400 %}

The website is broken into several containers, to apply styling both outside and inside the cookie cards. Main is for all the larger grid layouts at different sizes. Card is for all the styling inside the recipe cards themselves. At different sizes the display shifts from purely vertical to a slightly horizontal display. Best I can describe it is book page display. The final container is cardGrid, which is the grid of cards themselves. Main is basically the entire webpage, but cardGrid is specifically the grid of cards in the webpage. This changes column count based on the scaling screen size, like everything else in the webpage.

<div class="code-block">

```css
/* ============================================
   CONTAINER QUERIES FOR LAYOUT ADAPTATION
   ============================================ */

/* tablet: if the total of main is tablet size then make the smaller auto-fit columns */
@container main (min-width: 400px) {
	.cookie-grid {
		grid-template-columns: repeat(auto-fit, minmax(var(--card-width-min), 1fr));
		gap: clamp(0.5rem, 1rem + 4cqi, 2rem);
	}
}

/* Desktop and larger: if the total of main is larger then make the large auto-fit columns */
@container main (min-width: 1050px) {
	.cookie-grid {
		grid-template-columns: repeat(
			auto-fit,
			minmax(var(--card-width-half), 1fr)
		);
		gap: clamp(var(--space-xs), 1.5rem + 4cqi, var(--space-sm));
	}
}

/* Modify body text margin for larger cards */
@container card (min-width: 750px) {
	.cookie-card__body {
		margin-left: var(--space-lg);
		margin-right: var(--space-lg);
		overflow-wrap: normal;
	}
}

/*Modify card display*/
@container cardGrid (min-width: 400px) {
	.cookie-card {
		max-width: 100%;
		object-fit: cover; /* Fill space, crop edges */
		margin-bottom: var(--space-sm);
		box-sizing: border-box;
	}
}

/*Accommodations for images and video placeholders*/
@container cardGrid (min-width: 550px) {
	.cookie-card img {
		max-width: 100%; /* Never overflow container */
		height: auto; /* Maintain aspect ratio */
		aspect-ratio: var(--aspect-wide); /* Explicit ratio */
		object-fit: cover; /* Fill space, crop edges */
	}

	.cookie-card .video-placeholder {
		max-width: 100%;
		height: auto;
		object-fit: cover; /* Fill space, crop edges */
		aspect-ratio: var(--aspect-wide); /* Explicit ratio */
		margin: var(--space-sm);
	}
}

/* Desktop and larger: Larger columns and img aspect ratio changes. */
@container cardGrid (min-width: 1050px) {
	.cookie-card {
		width: clamp(var(--card-width-half), max-content, var(--card-width-max));
		grid-template-columns: repeat(
			auto-fit,
			minmax(var(--card-width-inner), 1fr)
		);
		gap: clamp(var(--space-sm), 0.5rem + 5cqi, var(--space-md));
	}

	.cookie-card img {
		aspect-ratio: var(--aspect-square); /* Explicit ratio */
	}
}
```

</div>

### Tablet Styling

{% ImageGet "Tablet", "Screenshot of the website at the tablet screen size styling", 400 %}

### Phone Styling

{% ImageGet "Phone", "Screenshot of the website at the phone screen size styling", 400 %}
