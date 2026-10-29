import type { Experience as Exp } from '../data/resume';
import Section, { Reveal } from './Section';

export default function Experience({ items }: { items: Exp[] }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l-2 border-accent/30 pl-6 md:pl-8">
        {items.map((e, i) => (
          <li key={`${e.company}-${e.role}`} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-ink md:-left-[41px]" aria-hidden="true" />
            <Reveal delay={i * 0.05}>
              <article className="card">
                <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                <p className="text-accent">{e.company} <span className="text-slate-400">· {e.duration}</span></p>
                {e.responsibilities?.length ? (<><h4 className="mt-4 text-sm font-semibold uppercase text-slate-400">Responsibilities</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">{e.responsibilities.map(x => <li key={x}>{x}</li>)}</ul></>) : null}
                {e.achievements?.length ? (<><h4 className="mt-4 text-sm font-semibold uppercase text-slate-400">Achievements</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">{e.achievements.map(x => <li key={x}>{x}</li>)}</ul></>) : null}
                {e.tech?.length ? <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">{e.tech.map(t => <li key={t} className="chip">{t}</li>)}</ul> : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
