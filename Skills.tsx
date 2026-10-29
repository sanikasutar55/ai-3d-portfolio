import { motion } from 'framer-motion';
import type { SkillGroup } from '../data/resume';
import Section, { Reveal } from './Section';

/** Skills are shown as plain categorised chips - no levels, percentages or ratings. */
export default function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.06}>
            <article className="card h-full">
              <h3 className="mb-3 text-lg font-semibold text-white">{g.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(s => <motion.li key={s} whileHover={{ y: -3, scale: 1.06 }} className="chip">{s}</motion.li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
