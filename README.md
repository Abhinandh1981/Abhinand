# Abhinand — Portfolio Website

A bold, playful creative-studio portfolio website built for **Abhinand** (First-Year B.Tech Computer Science & Engineering · Artificial Intelligence at Thejus Engineering College, Thrissur, Kerala).

Inspired by the vivid, high-energy aesthetic of Two26 Studio:
- **Palette**: Vivid Studio Orange (`#FF4D00`), Soft Blush Pink (`#FBE3E1`), Off-White (`#FFF8F5`), and Near-Black (`#141414`).
- **Typography**: Giant condensed uppercase display headlines (`Bebas Neue` / `Anton`) paired with clean geometric grotesque body (`Plus Jakarta Sans`).
- **Artistic Motifs**: Overlapping black capsule pill labels, hand-drawn vector looping squiggles, walking student character with laptop, playful companion cats, and an arched bottom marquee hill.

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP (ScrollTrigger)](https://greensock.com/gsap/)
- **Smooth Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Confetti**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ✏️ How to Customize Content

All text, projects, skills, biography, and social links are centralized in a single file:
👉 **`src/data.ts`**

Simply open `src/data.ts` and modify:
- **`personal`**: Name, email, headline, campus details, and narrative bio.
- **`projects`**: Add or modify your projects (title, description, tags, live URLs, GitHub repositories).
- **`skills`**: Add new tools, languages, or AI frameworks to your skill chips.
- **`journey`**: Update your milestones and academic timeline.
- **`socials`**: Add your GitHub, LinkedIn, Instagram, or Twitter profile links.
- **`marqueeItems`**: Change ticker slogans scrolling along the hero arch and footer.

---

## 🌐 Free 1-Click Deployment

### Option A: Deploy on Vercel (Recommended)
1. Push this repository to your GitHub account (`git push origin main`).
2. Visit [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New Project"** and import `abhinand-portfolio`.
4. Leave the Framework Preset as **Vite** and click **Deploy**.
5. Your portfolio is live with a free SSL certificate!

### Option B: Deploy on Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **"Import an existing project"** from GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**.

---

## 📄 License
MIT © Abhinand. Free to use and customize.

