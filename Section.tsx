import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Reusable section wrapper: semantic <section>, labelled h2, scroll-reveal (respects reduced motion via MotionConfig). */
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:py-24">
      <motion.h2 id={`${id}-h`} className="mb-10 text-3xl font-bold text-white md:text-4xl"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
        {title}<span className="ml-3 inline-block h-1 w-12 rounded bg-gradient-to-r from-accent to-accent2 align-middle" aria-hidden="true" />
      </motion.h2>
      {children}
    </section>
  );
}

/** Fade-up wrapper for any child. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}
