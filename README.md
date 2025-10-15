# Liam Stapley Portfolio

**Live Site:** [liamstapley.github.io/liamstapley-portfolio](https://liamstapley.github.io/liamstapley-portfolio)

---

## 👋 About Me

Hi, I’m **Liam Stapley** — a Computer Science and Data Science student at the **University of Delaware Honors College**, pursuing a double major in **Computer Science (B.S.)** and **Mathematics & Data Science (B.S.)**, with a **minor in Economics**.

I’m passionate about building **impactful, user-focused technology** — from full-stack web apps and data visualization platforms to machine learning systems and research tools. My work blends **technical innovation**, **design thinking**, and **social good**.

Outside of coding, I’m a soccer coach, photographer, and music enthusiast — you’ll see some of that reflected in my personal sections on the site.

---

## 💻 Project Overview

This repository hosts my **personal portfolio website**, built with **React + TypeScript (TSX)** and styled using a custom **modern dark-glass UI**. The site is fully responsive and deployed via **GitHub Pages**.

### 🧱 Tech Stack

- **Frontend Framework:** React (TypeScript)
- **Styling:** Custom CSS (modern glassmorphic UI)
- **Icons:** React Icons (Font Awesome)
- **Deployment:** GitHub Pages via `gh-pages`
- **Build Tool:** Vite or Create React App (depending on setup)

---

## 🌐 Site Structure

The site is divided into four primary sections:

1. **Home** — Personal intro, contact links, skills, and carousels highlighting personal interests (music, movies, and video games).
2. **Projects** — Interactive project cards showcasing apps and data science projects. Each expands to reveal details, technologies used, and external links.
3. **Experience** — Professional and leadership experience at the University of Delaware, HenHacks, and Sensify Lab.
4. **Education** — Academic background, major/minor information, and honors such as Dean’s List.

Each section is rendered as a single-page component, navigable through a sleek top navigation bar or via keyboard-friendly arrow navigation.

---

## 🚀 Deployment

### 🔧 1. Initial Setup

Clone the repository:

```bash
git clone https://github.com/liamstapley/liamstapley-portfolio.git
cd liamstapley-portfolio
```

Install dependencies:

```bash
npm install
```

### 🧪 2. Local Development

Run the local dev environment:

```bash
npm start
```

Then visit:

```
http://localhost:3000
```

### 🌍 3. Deploying to GitHub Pages

This project uses the `gh-pages` package to publish the `/build` directory to the `gh-pages` branch.

To deploy updates:

```bash
npm run deploy
```

This will automatically build and push the latest changes to GitHub Pages.

**Note:** Ensure your `package.json` contains the correct homepage field:

```json
"homepage": "https://liamstapley.github.io/liamstapley-portfolio"
```

---

## 🧩 Features

- Smooth single-page transitions with component-based routing.
- Custom responsive layout using Flexbox and CSS transitions.
- Expandable project cards with modal-style popups.
- Interactive image carousels in the About section.
- Integrated contact icons with direct links to GitHub, LinkedIn, and Email.
- PDF asset support for project posters and publications.

---

## 🗂 File Structure

```
src/
 ┣ assets/          # Images, PDFs, posters, personal carousels
 ┣ components/      # Core UI components (Navbar, Arrows, Modals)
 ┣ pages/           # Page sections (Home, Projects, Experience, Education)
 ┣ styles/          # CSS styling
 ┣ declarations.d.ts # TypeScript declarations for custom file types
 ┗ App.tsx          # Root component
```

---

## 🧠 Future Enhancements

- Add automatic carousel animation with pause-on-hover.
- Integrate CMS for easy project updates.
- Include downloadable resume section.
- Add accessibility improvements (ARIA labels, keyboard navigation refinements).

---

## 🪪 Author

**Liam Stapley**\
📍 Newark, Delaware\
✉️ [stapley.liam@gmail.com](mailto\:stapley.liam@gmail.com)\
🔗 [LinkedIn](https://www.linkedin.com/in/liamstapley)\
💻 [GitHub](https://github.com/liamstapley)

---

## 🧾 License

This project is open-source under the **MIT License** — feel free to use it as a reference for your own portfolio setups.

---

### 🏁 Quick Reference: Deployment Commands

| Action                  | Command          |
| ----------------------- | ---------------- |
| Run locally             | `npm start`      |
| Build production bundle | `npm run build`  |
| Deploy to GitHub Pages  | `npm run deploy` |

---

*This portfolio is a continuously evolving reflection of my technical journey, creativity, and professional growth.*