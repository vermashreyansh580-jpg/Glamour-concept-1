import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export function FooterAndChrome() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-[#d4b475]/16 bg-[#090706] pt-16 pb-24 lg:pb-16">
        <div className="max-w-[1240px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="font-serif text-xl tracking-[0.16em] uppercase text-[#f6f0e6] mb-3">
                {STUDIO_CONFIG.businessName}
              </div>
              <p className="text-sm text-[#c7bba9] max-w-[34ch] leading-relaxed">
                Luxury beauty, bridal artistry, and sculpted hair styling crafted for moments of
                quiet elegance.
              </p>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-3">
                Contact
              </div>
              <p className="mb-1.5">
                <a
                  href={STUDIO_CONFIG.phoneHref}
                  className="text-sm text-[#f6f0e6] hover:text-[#ecd49f] transition-colors tabular-nums"
                >
                  {STUDIO_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="text-xs text-[#8f8373] leading-relaxed max-w-[34ch]">
                {STUDIO_CONFIG.studioHoursSummary}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-3">
                Navigation
              </div>
              <ul className="space-y-1.5 text-sm text-[#c7bba9]">
                <li>
                  <a href="#services" className="hover:text-[#d4b475] transition-colors">
                    Signature Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#d4b475] transition-colors">
                    Editorial Lookbook
                  </a>
                </li>
                <li>
                  <a href="#inspiration" className="hover:text-[#d4b475] transition-colors">
                    Skin-First Transformation
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-[#d4b475] transition-colors">
                    Book Your Appointment
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[#d4b475]/15 flex flex-wrap justify-between items-center gap-4 text-xs text-[#8f8373]">
            <span>© {new Date().getFullYear()} Glamour Hub. All rights reserved.</span>
            <span>Bespoke Bridal &amp; Beauty Artistry</span>
          </div>
        </div>
      </footer>

      {/* Compact Sticky Mobile CTA Bar (well within 15% mobile viewport cap) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#0e0b09]/95 backdrop-blur-md border-t border-[#d4b475]/25 px-4 py-2.5 grid grid-cols-2 gap-3">
        <a
          href={STUDIO_CONFIG.phoneHref}
          className="py-2.5 text-center text-xs font-semibold tracking-[0.12em] uppercase border border-[#d4b475]/30 text-[#f6f0e6]"
        >
          Call Studio
        </a>
        <a
          href="#booking"
          className="py-2.5 text-center text-xs font-semibold tracking-[0.12em] uppercase bg-[#d4b475] text-[#120e0b]"
        >
          Book Now
        </a>
      </div>

      {/* Floating Back-to-Top Control */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-5 bottom-20 lg:bottom-8 z-30 w-11 h-11 bg-[#1d1713] border border-[#d4b475]/30 text-[#d4b475] hover:border-[#d4b475] hover:bg-[#d4b475] hover:text-[#120e0b] grid place-items-center transition-all duration-200 cursor-pointer ${
          showBackToTop
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-2'
        }`}
      >
        <ArrowUp className="w-4 h-4" aria-hidden="true" />
      </button>
    </>
  );
}
