---
title: About Me
description: A site dedicated to displaying my hobbies, profession, and a little blog about filter effects using CSS
date: 2025-05-06
tags: ["CSS", "HTML", "Web Development"]
---

Link to the site:
<a href="https://about-me-curban2336.netlify.app/">https://about-me-curban2336.netlify.app/</a>

Link to the repo:
<a href="https://github.com/RVCC-IDMX/about-me-curban2336">https://github.com/RVCC-IDMX/about-me-curban2336</a>

This website was constructed with the purpose of showing a wide array of skills both web development as well as my personal likes and hobbies. The website color-coordinates, scales appropriately with multiple screen sizes. I have a worked nav bar, and at smaller screen sizes that nav bar gets condensed into a hamburger pop-up menu. The most interesting part of the website comes from the form submission and the several overlay effects I demonstrate towards the bottom of the page.

## Overlay Effects

Here is a snippet of the primary overlay effects used in the website. Each follows the same principle. Webkit transformations are used, adjusting specific variable values with :hover effects to create the many different displays shown below. What's better is that they can all be combined and stacked together, meaning that the world truly is your oyster as far as hover effects are concerned!

<div class="code-block">

```css
/* Zoom In & Out */

#imageHover .zoom1,
#imageHover .zoom2 {
	display: flex;
	padding: 0;
	width: 100%;
	justify-content: center;
}

.zoom1 figure,
.zoom2 figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.zoom1 figure img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}
.zoom1 figure:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}

.zoom2 figure img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.zoom2 figure:hover img {
	-webkit-transform: scale(1);
	transform: scale(1);
}

/* Spin */

#imageHover .spin {
	display: flex;
	padding: 0;
	width: 100%;
	justify-content: center;
}

.spin figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.spin figure img {
	-webkit-transform: rotate(15deg) scale(1.3);
	transform: rotate(15deg) scale(1.3);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.spin figure:hover img {
	-webkit-transform: rotate(0) scale(1);
	transform: rotate(0) scale(1);
}

/* Filters */

#imageHover .gray,
#imageHover .sepia,
#imageHover .invert,
#imageHover .blur,
#imageHover .hrotate,
#imageHover .flash,
#imageHover .shine,
#imageHover .combo {
	display: flex;
	padding: 0;
	width: 100%;
	justify-content: center;
}

/* GrayScale Filter */

.gray figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.gray figure img {
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.gray figure:hover img {
	-webkit-filter: grayscale(0);
	filter: grayscale(0);
}

/* Sepia Filter */

.sepia figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.sepia figure img {
	-webkit-filter: sepia(100%);
	filter: sepia(100%);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.sepia figure:hover img {
	-webkit-filter: sepia(0);
	filter: sepia(0);
}

/* Invert Filter */

.invert figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.invert figure img {
	-webkit-filter: Invert(100%);
	filter: Invert(100%);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.invert figure:hover img {
	-webkit-filter: Invert(0);
	filter: Invert(0);
}

/* Blur Filter */

.blur figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.blur figure img {
	-webkit-filter: blur(5px);
	filter: blur(5px);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.blur figure:hover img {
	-webkit-filter: blur(0);
	filter: blur(0);
}

/* Hue-Rotate Filter */

.hrotate figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.hrotate figure img {
	-webkit-filter: hue-rotate(90deg);
	filter: hue-rotate(90deg);
	-webkit-transition: 0.3s ease-in-out;
	transition: 0.3s ease-in-out;
}

.hrotate figure:hover img {
	-webkit-filter: hue-rotate(0);
	filter: hue-rotate(0);
}

/* Flash */

.flash figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
}

.flash figure:hover img {
	opacity: 1;
	-webkit-animation: flash 1.5s;
	animation: flash 1.5s;
}

@-webkit-keyframes flash {
	0% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
}
@keyframes flash {
	0% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
}

/* Shine */

.shine figure {
	width: 300px;
	height: 400px;
	overflow: hidden;
	text-align: center;
	position: relative;
}

.shine figure::before {
	position: absolute;
	top: 0;
	left: -80%;
	z-index: 2;
	display: block;
	content: "";
	width: 50%;
	height: 100%;
	background: -webkit-linear-gradient(
		left,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.3) 100%
	);
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.3) 100%
	);
	-webkit-transform: skewX(-25deg);
	transform: skewX(-25deg);
}

.shine figure:hover::before {
	-webkit-animation: shine 0.75s;
	animation: shine 0.75s;
}

@-webkit-keyframes shine {
	100% {
		left: 125%;
	}
}
@keyframes shine {
	100% {
		left: 125%;
	}
}
```

</div>

<div class="image-grid">
{% ImageGet "Invert", "Screenshot of the Invert Filter", 400 %}

{% ImageGet "Twist", "Screenshot of the Twist Filter", 400 %}

{% ImageGet "Hue", "Screenshot of the Hue Filter", 400 %}

{% ImageGet "Sepia", "Screenshot of the Sepia Filter", 400 %}

{% ImageGet "Blur", "Screenshot of the Blur Filter", 400 %}

</div>

## Contact Form

This contact form takes in multiple pieces of information. Name, contact information, and even a comment to attach to the whole thing. Through Netlify, these forms are submitted and logged by Netlify for me to view later, allowing for cataloged contact forms for anyone wanting to reach out! While not as flashy as the overlay effects, this still shows excellent ability to craft anything I might need for a website. It also took a long time to figure out at first and I'm proud of how successful it turned out!

<div class="code-block">

```html
<!--Contact Form: Where viewers can reach out to me-->
<section id="contact">
	<h2>Contact Me:</h2>
	<form
		id="contactForm"
		name="contactForm"
		data-netlify="true"
		method="post"
		netlify
	>
		<fieldset>
			<legend>Contact Form</legend>
			<div id="formElements">
				<!-- Name -->
				<label for="name">Name(Required)</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Your Name Here"
					required
				/>

				<!--Email-->
				<label for="email">Email(Required)</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="your@email.com"
					required
				/>

				<!--Phone-->
				<label for="tel">Phone(Optional)</label>
				<input type="tel" id="tel" name="tel" placeholder="XXX-XXX-XXXX" />

				<!--Phone type-->
				<label for="phonetype">Phone Type (Optional)</label>
				<select id="phonetype" name="phonetype">
					<option value="" selected>Select Phone Type</option>
					<option value="Mobile">Mobile</option>
					<option value="Work">Work</option>
					<option value="Home">Home</option>
				</select>

				<!-- Message -->
				<label for="message">Message (Optional)</label>
				<textarea
					id="message"
					name="message"
					rows="8"
					placeholder="Put Message Here!"
				></textarea>

				<!-- Reply -->
				<fieldset>
					<legend>Would You Like A Reply?</legend>

					<ul>
						<li>
							<input type="radio" id="message-yes" name="reply" value="Yes" />
							<label for="message-yes">Yes, a reply would be nice.</label>
						</li>
						<li>
							<input
								type="radio"
								id="message-no"
								name="reply"
								value="No"
								checked
							/>
							<label for="message-no">No, thanks.</label>
						</li>
					</ul>
				</fieldset>

				<!-- Submit -->
				<button type="submit">Send</button>
			</div>
		</fieldset>
	</form>
</section>
```

</div>
