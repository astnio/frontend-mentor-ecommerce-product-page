# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Project Structure](#-project-structure)
- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Astro](https://astro.build)

### What I learned

So I have already been making a lot of projects that follow similar patterns to what this project requires, and I wanted to learn something new this time. I decided to use Astro for this, because it is something I wanted to learn and use for my personal site, and thought this would be a good chance to give it a try.

It was a struggle initially, because I already have experience with some frameworks like Svelte or React, which have more intuitvely reactive components. Astro, however, is all about static pages, and without using islands, can be hard to make reactive components. Well, it was hard at first, at least. I came into it with the wrong mindset. Making reactive components was actually mostly fine as long as I used regular JavaScript concepts. I suppose I was just expecting a more declarative style, rather than the plain JavaScript imperative style.

Once I wrapped my head around that it became easier. One thing that became more of a challenge, though, was that I wanted to utilize Astro Collections to make the "add to cart" function work, by adding the product to a collection list and pulling from that using an ID of some sort. That turned out to be more trouble than I initially thought, and figured this project was't structured in such a way that was efficient to do anyway, so I just took a shortcut and set my cart items to always exist, just the button now makes them appear or disappear.

### Continued development

I am not totally satisified with how many "shortcuts" I felt that I took during this project. I only say that because I wanted to utilize collections more. However, the structure of the project made that a bit difficult, considering it was just a single page for a single product. I look forward to using this framework more in other projects that may better befit the use of collections.

Astro can also use components from other frameworks, too. I intentionally limited myself to plain JavaScript in this project, but I want to use React more in future projects.
