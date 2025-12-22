---
title: Poetry Website.
description: This is a website utilizing multiple standard practices and features to display a Poem with style
date: 2025-09-28
tags: ["JS", "HTML", "CSS", "Web Development"]
---

Link to the site:
<a href="https://snowyevening-robertfrost.netlify.app/">https://snowyevening-robertfrost.netlify.app/</a>

Link to the repo:
<a href="https://github.com/RVCC-IDMX/poetry-interpretation-curban2336">https://github.com/RVCC-IDMX/poetry-interpretation-curban2336</a>

This poem was a little love letter to a Poem I really enjoy. That poem being Robert Frost's "Stopping by Woods on a Snowy Evening". It is a very rich and interprative piece that also happens to fit multiple differing themes. In the case of this website, I chose to focus on the winter aspect of it, making the colors and images reflect the snow and icy themes. This webpage has several self-sizing images as well as multiple pages giving interpretations of the work and the history of the poem. There is a line holder property of the poem, letting you highlight the line you are on. In addition I added a button that allows you to copy the poem onto your devices clipboard for pasting later!

## Highlight Feature

{% ImageGet "Highlight", "Screenshot of the highlight feature in effect", 400 %}

In truth the highlight effect is a very simple use of CSS :hover and :focus. However, the small things in web dev do matter! Such a trivial aspect of the website helps many users keep their place in the poem in the event they look away. As someone who loses their spot in books all the time I know first hand how helpful something like this can be!

<div class="code-block">

```css
/* Hover/focus signpost for poem lines */
.line {
	transition: color 160ms ease, background-color 160ms ease;
}

.line:hover,
.line:focus {
	color: #073d99; /* accent color */
	background-color: rgba(11, 102, 255, 0.06);
	outline: none;
}

/* Improved visible focus for keyboard users */
.line:focus-visible {
	box-shadow: 0 0 0 3px rgba(11, 102, 255, 0.12);
	border-radius: 4px;
}
```

</div>

## Copy Button

Adding a copy button to my poem was something I wanted to add for no other reason then I personally wanted to know how such a thing was done. To my surprise, it wasn't all that hard. It took a lot of trial and error, and a lot of research to get down right. However, it really came down to just grabbing the poem text from the stanza elements, coding them to add to the users clipboard, and then adding an eventlistener to wait for the button press.

<div class="code-block">

```js
(function () {
	const poem = document.querySelector(".poem");
	const btn = document.getElementById("copy-poem");
	const status = document.getElementById("copy-status");

	if (!poem || !btn) return;

	function getPoemText() {
		const stanzas = Array.from(poem.querySelectorAll(".stanza"));
		return stanzas
			.map((stanza) =>
				Array.from(stanza.querySelectorAll(".line"))
					.map((l) => l.textContent.trim())
					.join("\n")
			)
			.join("\n\n");
	}

	async function copyText(text) {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			await navigator.clipboard.writeText(text);
			return true;
		}
		// fallback
		const ta = document.createElement("textarea");
		ta.value = text;
		ta.setAttribute("readonly", "");
		ta.style.position = "absolute";
		ta.style.left = "-9999px";
		document.body.appendChild(ta);
		ta.select();
		try {
			document.execCommand("copy");
			document.body.removeChild(ta);
			return true;
		} catch (e) {
			document.body.removeChild(ta);
			return false;
		}
	}

	btn.addEventListener("click", async () => {
		const text = getPoemText();
		btn.disabled = true;
		const success = await copyText(text).catch(() => false);
		if (success) {
			btn.textContent = "Copied!";
			status.textContent = "Poem copied to clipboard";
		} else {
			btn.textContent = "Copy failed";
			status.textContent = "Unable to copy to clipboard";
		}
		setTimeout(() => {
			btn.disabled = false;
			btn.textContent = "Copy poem";
			status.textContent = "";
		}, 2000);
	});
})();
```

</div>
