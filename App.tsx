import { useEffect, useMemo } from 'react';
import { MotionConfig } from 'framer-motion';
import resume from './data/resume';
import Navbar, { type NavItem } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const r = resume;
  const hasAbout = !!r.about && Object.values(r.about).some(v => (Array.isArray(v) ? v.length : !!v));
  const hasContact = Object.values(r.contact).some(v => (Array.isArray(v) ? v.length : !!v));
  // A section appears (and gets a nav link) only if the resume provides data for it.
  const items = useMemo<NavItem[]>(() => [
    { id: 'home', label: 'HOME' },
    ...(hasAbout ? [{ id: 'about', label: 'ABOUT' }] : []),
    ...(r.experience.length ? [{ id: 'experience', label: 'EXPERIENCE' }] : []),
    ...(r.projects.length ? [{ id: 'projects', label: 'PROJECTS' }] : []),
    ...(r.skills.length ? [{ id: 'skills', label: 'SKILLS' }] : []),
    ...(r.education.length ? [{ id: 'education', label: 'EDUCATION' }] : []),
    ...(hasContact ? [{ id: 'contact', label: 'CONTACT' }] : [])
  ], [hasAbout, hasContact]);
  const ids = [...items.map(i => i.id), ...(r.achievements.length ? ['achievements'] : [])];
  const active = useActiveSection(ids);

  useEffect(() => { document.title = `${r.name} | ${r.title} - Portfolio`; }, []);
  const workTarget = r.projects.length ? 'projects' : r.experience.length ? 'experience' : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar items={items} active={active} name={r.name} />
      <main id="main">
        <Hero r={r} workTarget={workTarget} />
        {hasAbout && <About about={r.about!} />}
        {r.experience.length > 0 && <Experience items={r.experience} />}
        {r.projects.length > 0 && <Projects items={r.projects} />}
        {r.skills.length > 0 && <Skills groups={r.skills} />}
        {r.education.length > 0 && <Education items={r.education} />}
        {r.achievements.length > 0 && <Achievements items={r.achievements} />}
        {hasContact && <Contact c={r.contact} resumeFile={r.resumeFile} />}
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} {r.name}</footer>
    </MotionConfig>
  );
}
