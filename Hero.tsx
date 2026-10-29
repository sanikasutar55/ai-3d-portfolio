import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Resume } from '../data/resume';
import { useIsMobile } from '../hooks/useIsMobile';

const Scene3D = lazy(() => import('./Scene3D'));   // 3D code is loaded only when needed

export default function Hero({ r, workTarget }: { r: Resume; workTarget?: string }) {
  const reduce = !!useReducedMotion();
  const mobile = useIsMobile();
  const [visible, setVisible] = useState(true);
  const [photoOk, setPhotoOk] = useState(true);
  const ref = useRef<HTMLElement>(null);
  // Pause rendering when the hero is off-screen (saves GPU/CPU).
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    o.observe(ref.current); return () => o.disconnect();
  }, []);
  const initials = r.name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <section id="home" ref={ref} aria-labelledby="home-h" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={null}>{visible && <Scene3D mobile={mobile} animate={!reduce} />}</Suspense>
      </div>
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent2/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 md:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{r.title}</p>
          <h1 id="home-h" className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{r.name}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">{r.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {workTarget && (
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href={`#${workTarget}`} className="btn bg-gradient-to-r from-accent to-accent2 text-ink">View My Work</motion.a>
            )}
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href={r.resumeFile} download className="btn border border-accent/60 text-accent hover:bg-accent/10">Download Resume</motion.a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="order-1 mx-auto md:order-2">
          <div className="rounded-3xl bg-gradient-to-br from-accent to-accent2 p-1 shadow-2xl shadow-accent2/20">
            {photoOk ? (
              <img src={r.photo} alt={r.photoAlt} width={360} height={440} decoding="async" onError={() => setPhotoOk(false)}
                className="h-64 w-52 rounded-[22px] object-cover sm:h-80 sm:w-64 lg:h-[26rem] lg:w-80" />
            ) : (
              <div role="img" aria-label={r.photoAlt} className="flex h-64 w-52 items-center justify-center rounded-[22px] bg-panel text-5xl font-bold text-accent sm:h-80 sm:w-64 lg:h-[26rem] lg:w-80">{initials}</div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
