import { useEffect, useState } from 'react';
/** True on phone-sized screens; used to simplify the 3D scene. */
export function useIsMobile(breakpoint = 768) {
  const [m, setM] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const h = () => setM(mq.matches);
    mq.addEventListener('change', h); h();
    return () => mq.removeEventListener('change', h);
  }, [breakpoint]);
  return m;
}
