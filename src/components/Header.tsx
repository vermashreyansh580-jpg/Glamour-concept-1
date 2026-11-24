import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

const NAV_LINKS = [
  { href: '#about', label: 'The Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Lookbook' },
  { href: '#inspiration', label: 'Transformation' },
  { href: '#booking', label: 'Enquire' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 luxury-ease border-b ${
          isScrolled
            ? 'bg-[#0e0b09]/95 backdrop-blur-md border-[#d4b475]/15 py-3.5'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-[1240px] w-[90vw] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 group"
            aria-label="Glamour Hub Home"
          >
            <span className="w-9 h-9 border border-[#d4b475] grid place-items-center font-serif text-base text-[#d4b475] tracking-wider transition-colors duration-200 group-hover:bg-[#d4b475] group-hover:text-[#0e0b09]">
              GH
            </span>
            <span className="font-serif text-xl tracking-[0.16em] uppercase text-[#f6f0e6]">
              {STUDIO_CONFIG.businessName}
            </span>
          </a>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.14em] uppercase text-[#c7bba9] hover:text-[#d4b475] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#d4b475]/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#booking"
              className="px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase bg-[#d4b475] text-[#120e0b] hover:bg-[#ecd49f] transition-all duration-200 whitespace-nowrap shrink-0"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className="lg:hidden w-11 h-11 border border-[#d4b475]/25 text-[#f6f0e6] grid place-items-center hover:border-[#d4b475] transition-colors duration-200 cursor-pointer"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-50 bg-[#0e0b09] p-8 flex flex-col justify-between transition-transform duration-300 luxury-ease lg:hidden ${
          drawerOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl tracking-[0.16em] uppercase text-[#f6f0e6]">
            {STUDIO_CONFIG.businessName}
          </span>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            className="w-11 h-11 border border-[#d4b475]/25 text-[#f6f0e6] grid place-items-center hover:border-[#d4b475] cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className="my-8">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="font-serif text-3xl text-[#f6f0e6] hover:text-[#d4b475] transition-colors block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#faq"
                onClick={() => setDrawerOpen(false)}
                className="font-serif text-3xl text-[#f6f0e6] hover:text-[#d4b475] transition-colors block py-1"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href="#booking"
            onClick={() => setDrawerOpen(false)}
            className="w-full py-3.5 text-center text-xs font-semibold tracking-[0.14em] uppercase bg-[#d4b475] text-[#120e0b]"
          >
            Book Your Appointment
          </a>
          <a
            href={STUDIO_CONFIG.phoneHref}
            className="w-full py-3.5 text-center text-xs font-semibold tracking-[0.14em] uppercase border border-[#d4b475]/30 text-[#f6f0e6]"
          >
            {STUDIO_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
