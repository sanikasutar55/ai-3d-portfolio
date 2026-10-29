import { useEffect, useState } from 'react';
/** Returns the id of the section currently in the middle of the viewport (IntersectionObserver). */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? 'home');
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids.join(',')]);
  return active;
}
