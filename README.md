# AI-Powered 3D Personal Portfolio

**Objective:** present a real resume as an immersive, accessible 3D web experience, with the resume as the single source of truth (no AI-invented content).

## Technologies
React 18, TypeScript, Vite, Tailwind CSS, Three.js + React Three Fiber, Framer Motion.

## AI tool and prompting approach
Generated with Claude using a structured prompt (role, task, context, input, constraints, design, technical, output, quality criteria) refined over three iterations. See `PROMPTS.md`.

## Set up your content (do this first)
1. Copy your **photo** to `public/photo.jpg` (compress it, ~100-200 KB is plenty).
2. Copy your **original resume PDF** to `public/resume.pdf`.
3. Open `src/data/resume.ts` and fill it with text taken ONLY from your resume. Any empty section is hidden automatically; skills have no levels or ratings.
4. Edit the `<title>` and meta description in `index.html`.

## Install and run
Install Node.js (LTS), then in this folder:
```
npm install
npm run dev        # development, opens at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # test the production build
```

## Features
Hero with photo and CTA buttons, 3D particles / floating wireframes / grid / mouse parallax; sticky nav with active-section highlight and mobile hamburger; About cards; Experience timeline; expandable project cards; categorised skills; education; optional achievements; contact with CTA; original-PDF resume download; page-load, scroll-reveal, hover and button animations.

## Performance, accessibility, SEO
- 3D code is lazy-loaded in its own chunk, pauses when the hero is off-screen, uses 250 particles (vs 1200) and fewer shapes on mobile, low DPR and `low-power` GPU preference.
- Reduced motion: Framer Motion `reducedMotion="user"`, 3D animation frozen, CSS animations/smooth scroll disabled.
- Semantic landmarks, one `h1`, ordered headings, skip link, keyboard-operable menu/accordions (`aria-expanded`), visible focus ring, alt text, descriptive link text, meaningful title and meta description.

## Challenges / improvements / future scope
Fill these in from your own experience (what you changed after each iteration). Ideas: GSAP scroll timelines, light/dark theme, project screenshots, blog section, automated Lighthouse checks.

## Testing checklist
Desktop, tablet (~768px) and phone (~375px) in browser dev tools; keyboard-only navigation; enable "reduce motion" in your OS; run Lighthouse; confirm Download Resume saves your original PDF.
