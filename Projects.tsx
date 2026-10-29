import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../data/resume';
import Section, { Reveal } from './Section';

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const hasMore = !!(p.contribution || p.results || p.github || p.demo);
  const panel = `proj-${index}`;
  return (
    <Reveal delay={index * 0.06}>
      <motion.article whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} style={{ transformPerspective: 800 }} className="card h-full overflow-hidden">
        {p.image && <img src={p.image} alt={`Preview of ${p.name}`} loading="lazy" decoding="async" className="-mx-5 -mt-5 mb-4 h-40 w-[calc(100%+2.5rem)] object-cover" />}
        <h3 className="text-xl font-semibold text-white">{p.name}</h3>
        <p className="mt-2 text-slate-300">{p.description}</p>
        {p.tech?.length ? <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">{p.tech.map(t => <li key={t} className="chip">{t}</li>)}</ul> : null}
        {hasMore && (
          <>
            <button className="mt-4 text-sm font-semibold text-accent underline-offset-4 hover:underline" aria-expanded={open} aria-controls={panel} onClick={() => setOpen(o => !o)}>
              {open ? 'Hide details' : 'Show details'}
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div id={panel} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="space-y-3 pt-3 text-slate-300">
                    {p.contribution && <p><strong className="text-white">My contribution: </strong>{p.contribution}</p>}
                    {p.results && <p><strong className="text-white">Results: </strong>{p.results}</p>}
                    <div className="flex gap-4">
                      {p.github && <a className="text-accent underline" href={p.github} target="_blank" rel="noopener noreferrer">{p.name} on GitHub</a>}
                      {p.demo && <a className="text-accent underline" href={p.demo} target="_blank" rel="noopener noreferrer">{p.name} live demo</a>}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.article>
    </Reveal>
  );
}

export default function Projects({ items }: { items: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">{items.map((p, i) => <ProjectCard key={p.name} p={p} index={i} />)}</div>
    </Section>
  );
}
