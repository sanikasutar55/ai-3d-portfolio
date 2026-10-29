import type { Education as Edu } from '../data/resume';
import Section, { Reveal } from './Section';

export default function Education({ items }: { items: Edu[] }) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((e, i) => (
          <Reveal key={`${e.degree}-${e.institution}`} delay={i * 0.06}>
            <article className="card h-full">
              <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
              <p className="text-accent">{e.institution}</p>
              <p className="text-sm text-slate-400">{e.duration}</p>
              {e.details && <p className="mt-3 text-slate-300">{e.details}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
