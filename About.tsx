import type { Resume } from '../data/resume';
import Section, { Reveal } from './Section';

export default function About({ about }: { about: NonNullable<Resume['about']> }) {
  const cards: { icon: string; title: string; text?: string; list?: string[] }[] = [
    { icon: '👤', title: 'Professional Background', text: about.background },
    { icon: '🔭', title: 'Areas of Interest', list: about.interests },
    { icon: '🎯', title: 'Professional Focus', text: about.focus },
    { icon: '🧭', title: 'Career Direction', text: about.direction },
    { icon: '💪', title: 'Key Strengths', list: about.strengths }
  ].filter(c => c.text || c.list?.length);
  return (
    <Section id="about" title="About">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.07}>
            <article className="card h-full">
              <div className="mb-3 text-3xl" aria-hidden="true">{c.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
              {c.text && <p className="text-slate-300">{c.text}</p>}
              {c.list && <ul className="flex flex-wrap gap-2">{c.list.map(x => <li key={x} className="chip">{x}</li>)}</ul>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
