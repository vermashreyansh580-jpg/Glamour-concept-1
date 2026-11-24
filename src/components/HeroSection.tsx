import { MEDIA_ASSETS, STUDIO_CONFIG } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Full-screen editorial backdrop */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src={MEDIA_ASSETS.heroEditorial}
          alt="Editorial beauty portrait showcasing luminous evening glamour"
          loading="eager"
          fallbackLabel="Glamour Hub Editorial"
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/95 via-[#0e0b09]/75 to-[#0e0b09]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0e0b09] to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] w-[90vw] mx-auto">
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-4">
            <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
            <span>Glamour Hub · Beauty &amp; Artistry</span>
          </div>

          <h1 className="font-serif font-medium text-[clamp(2.85rem,6vw,5.25rem)] leading-[1.04] tracking-[-0.01em] text-[#f6f0e6] text-balance">
            Where Beauty Meets Elegance.
          </h1>

          <p className="mt-6 text-[clamp(1rem,1.3vw,1.15rem)] text-[#c7bba9] max-w-[56ch] leading-relaxed">
            Bespoke makeup artistry, sculpted hair styling, and restorative beauty rituals crafted
            for moments that deserve quiet perfection.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase bg-[#d4b475] text-[#120e0b] hover:bg-[#ecd49f] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              Book Your Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#d4b475]/30 text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#ecd49f] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-[#d4b475]/20 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#c7bba9]">
            <span className="text-[#ecd49f] font-medium tabular-nums">
              ★ {STUDIO_CONFIG.googleRating} Google Rating
            </span>
            <span aria-hidden="true" className="text-[#8f8373] hidden sm:inline">
              ·
            </span>
            <span>
              Direct Concierge:{' '}
              <a
                href={STUDIO_CONFIG.phoneHref}
                className="text-[#ecd49f] hover:underline underline-offset-4 tabular-nums"
              >
                {STUDIO_CONFIG.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
