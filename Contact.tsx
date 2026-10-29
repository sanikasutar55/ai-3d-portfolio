import type { Resume } from '../data/resume';
import Section, { Reveal } from './Section';

export default function Contact({ c, resumeFile }: { c: Resume['contact']; resumeFile: string }) {
  const links: { label: string; href: string; text: string }[] = [];
  if (c.email) links.push({ label: 'Email', href: `mailto:${c.email}`, text: c.email });
  if (c.linkedin) links.push({ label: 'LinkedIn', href: c.linkedin, text: 'LinkedIn profile' });
  if (c.github) links.push({ label: 'GitHub', href: c.github, text: 'GitHub profile' });
  if (c.portfolio) links.push({ label: 'Portfolio', href: c.portfolio, text: 'Portfolio website' });
  c.other?.forEach(o => links.push({ label: o.label, href: o.url, text: o.label }));
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <div className="card text-center md:p-10">
          <p className="text-2xl font-semibold text-white md:text-3xl">Let’s build something meaningful.</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-4">
            {links.map(l => (
              <li key={l.label}>
                <a className="btn border border-accent/50 text-accent hover:bg-accent/10" href={l.href}
                  {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                  {l.label}: {l.text}
                </a>
              </li>
            ))}
          </ul>
          <a href={resumeFile} download className="btn mt-6 bg-gradient-to-r from-accent to-accent2 text-ink">Download Resume</a>
        </div>
      </Reveal>
    </Section>
  );
}
