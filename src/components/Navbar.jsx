import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
          <a href="#home" className="text-sm font-semibold tracking-tight text-white">
            <span className="rounded-md bg-white px-2 py-1 text-black">Alex</span>
            <span className="ml-2 text-white/80">Full‑Stack</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/80 transition hover:text-white">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-white/90">
              Hire Me
            </a>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 hover:bg-white/90">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
