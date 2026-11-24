import { MEDIA_ASSETS } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-[1240px] w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-4">
            <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
            <span>About Glamour Hub</span>
          </div>

          <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6] mb-5 text-balance">
            Unrushed Artistry, Tailored to Your Presence.
          </h2>

          <p className="text-[clamp(1rem,1.3vw,1.12rem)] text-[#c7bba9] max-w-[56ch] leading-relaxed mb-5">
            Glamour Hub is envisioned as an intimate sanctuary where modern beauty techniques meet
            timeless restraint. Every consultation begins with skin preparation, lighting
            awareness, and your personal comfort.
          </p>

          <p className="text-[#c7bba9]/90 leading-relaxed max-w-[56ch] mb-8">
            Whether preparing for a grand bridal celebration or an understated evening appearance,
            our studio focuses on luminous finishes that photograph effortlessly and feel
            weightless in person.
          </p>

          <a
            href="#booking"
            className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase border border-[#d4b475]/30 text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#ecd49f] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Request a Private Consultation
          </a>
        </div>

        <div className="p-3 border border-[#d4b475]/20 bg-[#17120f]/40">
          <div className="overflow-hidden aspect-[4/3]">
            <ResilientImage
              src={MEDIA_ASSETS.studioInterior}
              alt="Luxury dark marble and gold-accented beauty studio interior"
              fallbackLabel="The Private Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-[#8f8373] mt-3 tracking-wide">
            Private marble &amp; warm brass sanctuary · Dedicated bridal and styling suites
          </p>
        </div>
      </div>
    </section>
  );
}
