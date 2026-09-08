# Abdul-Samad — Software Engineer Portfolio

A personal developer portfolio built from scratch to showcase my background, experience, open-source contributions, and projects as a self-taught software engineer. The design leans into a terminal/developer aesthetic — an interactive terminal window, a glassy floating navbar, and an animated ID badge — all built with plain HTML, CSS, and JavaScript, no frameworks.


## 🚀 Overview

This portfolio is a single-page site that introduces who I am, what I've built, and how to get in touch. It's designed to feel less like a static resume and more like a small interactive experience — the terminal at the top "types" itself out on load, the ID card shakes and cycles a glowing border, and sections animate into view as you scroll.

The goal of this project isn't just to list my work — it's to demonstrate real front-end skill: layout, animation, responsiveness, and attention to detail, all without relying on a UI framework or a page builder.


## 🧱 Tech Stack

This entire site is hand-built using core web technologies — no React, no Vue, no CSS framework. Everything you see (the layout, the animations, the interactivity) is custom-written.

| Technology | Purpose |
|---|---|
| ![HTML5](https://cdn.simpleicons.org/html5/E34F26) **HTML5** | Page structure and semantic markup for every section |
| ![CSS3](https://cdn.simpleicons.org/css3/1572B6) **CSS3** | All styling, layout (Flexbox/Grid), responsive design, and custom animations (keyframes, transitions, gradients) |
| ![JavaScript](https://cdn.simpleicons.org/javascript/F7DF1E) **JavaScript** | Interactivity — the self-typing terminal effect, scroll-triggered reveal animations, the custom cursor, and the mobile navbar toggle |
| ![Git](https://cdn.simpleicons.org/git/F05032) **Git** | Version control for tracking changes to the project over time |
| ![GitHub](https://cdn.simpleicons.org/github/181717) **GitHub** | Hosting the source code and (optionally) deploying the live site |
| ![Docker](https://cdn.simpleicons.org/docker/2496ED) **Docker** | Used in my broader engineering work (Terminal-Bench task environments) — referenced here as part of my toolkit, shown as an icon in the Toolbox section of the site itself |

> Note: Docker isn't used to run or build *this* portfolio site — it's listed and shown in the Toolbox section because it's part of my day-to-day engineering toolkit from my Terminal-Bench contributions.

---

## 📐 Sections Breakdown

The site is a single scrolling page (index.html), split into these sections:

1. **Navbar** — a floating, centered, glassy pill navigation bar with a frosted-glass blur effect and smooth-scroll links to every section. On mobile, it collapses into a hamburger menu.
2. **Hero** — an interactive terminal window that "types" out a whoami -style introduction on page load, paired with an animated employee-style ID badge (complete with a hanging lanyard, a shake animation on load, and a continuously cycling gradient border).
3. **Journey (Experience)** — a vertical timeline of my work history and education, with a swipe-up animation that replays every time you scroll into the section.
4. **Open Source (Contributions)** — a grid of real, verifiable contributions I've made — Terminal-Bench tasks built for Parsewave — each linking directly to the merged pull request on GitHub.
5. **Projects** — a set of project cards covering things I've built, including tech tags and live/demo links where available.
6. **Toolbox** — a set of featured technology badges plus a continuously auto-scrolling marquee strip of every language, tool, and platform I work with.
7. **Contact** — a simple call-to-action button that opens a pre-filled email to reach me directly.
8. **Footer** — quick links back to my GitHub, LinkedIn, and email.

---

## ✨ Key Features

- **Self-typing terminal animation** — built with vanilla JavaScript using setInterval, simulating a real terminal typing out each line character by character on page load.
- **Custom cursor** — replaces the default OS pointer with a custom icon that smoothly follows the mouse and changes color when hovering clickable elements.
- **Scroll-triggered animations** — sections and cards fade/slide into view using the IntersectionObserver API, and reset when scrolled out of view so the animation replays every time.
- **Fully responsive** — the layout adapts for mobile: the navbar becomes a toggleable hamburger menu, and non-essential decorative elements (like the ID card) are hidden on small screens to keep things clean.
- **No frameworks, no build step** — open `index.html` in a browser and it just works. No npm install, no bundler, no compilation.


## 📁 Project Structure


portfolio/
├── index.html       
├── styles.css        
├── script.js         
├── images/            
└── README.md          


## 🛠️ Running Locally

No installation or build tools required.

1. Clone this repository:
   bash
   git clone https://github.com/abdulsamad817/my-project.git
   
2. Open the folder in VS Code (or any editor).
3. Open index.html directly in your browser, or use a tool like VS Code's **Live Server** extension for auto-reloading while you edit.



## 🌐 Deployment

This site is plain static HTML/CSS/JS, so it can be deployed anywhere that serves static files — GitHub Pages, Vercel, Netlify, or any basic web host.



## 👤 About Me

I'm a self-taught software engineer with about four years of hands-on coding experience. Java is my primary language, backed by a working foundation in HTML, CSS, and JavaScript. I'm a student of University of Lagos, based in Abuja, Nigeria.

- **GitHub:** [abdulsamad817](https://github.com/abdulsamad817)
- **LinkedIn:** [Abdul-Samad Abubakar](https://www.linkedin.com/in/abdul-samad-abubakar-68b6b33a8/)
- **Email:** abdulsamadabubakar817@gmail.com

---

## 📄 License

This project is open for viewing and learning purposes. Please don't copy the personal content (name, bio, contribution details) as your own — feel free to reference the code/structure for learning.
