import { useEffect, useState } from 'react';

export interface NavItem { id: string; label: string }

/** Sticky responsive nav: smooth-scroll anchors, active-section highlight, hamburger on mobile. */
export default function Navbar({ items, active, name }: { items: NavItem[]; active: string; name: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc);
  }, []);
  const link = (i: NavItem) => (
    <a key={i.id} href={`#${i.id}`} onClick={() => setOpen(false)} aria-current={active === i.id ? 'page' : undefined}
      className={`rounded px-3 py-2 text-sm font-semibold tracking-wide transition-colors ${active === i.id ? 'text-accent' : 'text-slate-300 hover:text-white'}`}>
      {i.label}
    </a>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-bold text-white">{name}</a>
        <div className="hidden gap-1 md:flex">{items.map(link)}</div>
        <button className="rounded p-2 text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && <div id="mobile-menu" className="flex flex-col border-t border-white/10 bg-ink px-5 pb-4 md:hidden">{items.map(link)}</div>}
    </header>
  );
}
