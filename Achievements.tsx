import type { Achievement } from '../data/resume';
import Section, { Reveal } from './Section';

export default function Achievements({ items }: { items: Achievement[] }) {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <article className="card h-full">
              {a.type && <p className="mb-1 text-xs font-semibold uppercase text-accent2">{a.type}</p>}
              <h3 className="text-lg font-semibold text-white">{a.title}</h3>
              {a.detail && <p className="mt-2 text-slate-300">{a.detail}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
