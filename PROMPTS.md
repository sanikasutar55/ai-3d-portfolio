# Prompt File

## Iteration 1 - Initial prompt
**Role:** You are a senior front-end engineer and UI/UX designer who builds premium, accessible 3D portfolio websites.
**Task:** Build a complete interactive 3D personal portfolio website: "a resume, but presented as an immersive digital experience."
**Context:** Student portfolio for job applications; recruiters must find key information within seconds.
**Input:** The attached resume PDF is the single source of truth; the attached photo is used in the hero.
**Constraints:** Do not invent personal information, companies, roles, projects, skills, qualifications, certifications, achievements, statistics, testimonials, contact details or social links. No skill percentages/ratings/levels unless in the resume. Omit sections with no data.
**Design requirements:** Full-screen hero (photo, name, title, intro, "View My Work", "Download Resume", particles, soft lighting, floating shapes, grid, mouse parallax). Sticky nav HOME/ABOUT/EXPERIENCE/PROJECTS/SKILLS/EDUCATION/CONTACT with smooth scroll, active highlight, mobile hamburger. Sections: About cards, Experience timeline, expandable Project cards, categorised Skills, Education, Achievements (only if present), Contact with CTA "Let's build something meaningful."
**Technical requirements:** React + TypeScript + Vite, Tailwind, React Three Fiber, Framer Motion; component-based; all content in one typed data file; comments where needed.
**Output requirements:** Full file tree, complete code for every file, install and run steps.
**Quality criteria:** 3D enhances rather than distracts; responsive on desktop/tablet/mobile; semantic HTML, keyboard navigation, alt text, visible focus, prefers-reduced-motion; SEO title and meta description.

## Iteration 2 - Improvement prompt
Using the existing code, improve: (1) UI polish and visual hierarchy (spacing, typography scale, consistent cards); (2) responsiveness at 375px, 768px and 1280px; (3) animations (hero entrance, scroll reveal, hover and button feedback); (4) 3D interaction (smoother camera parallax, depth layers, floating shapes). Keep every previous constraint, especially: invent nothing from the resume. Return only the changed files in full.

## Iteration 3 - Optimization prompt
Using the existing code, optimize: (1) performance - lazy-load the 3D chunk, pause rendering off-screen, reduce particles and shapes on mobile, optimised images; (2) accessibility - heading order, skip link, aria attributes, contrast, focus states, reduced motion; (3) SEO - title, meta description, descriptive link text, alt text; (4) mobile experience; (5) code quality - types, reusable components, comments. Keep all constraints. Return changed files in full plus a short list of what changed.

## Final prompt
Iteration 1 + the improvement and optimisation requirements of Iterations 2 and 3 combined into one prompt (paste your own final version here after you finish refining).
