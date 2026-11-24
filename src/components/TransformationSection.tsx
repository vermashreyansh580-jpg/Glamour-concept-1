import { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section
      id="inspiration"
      className="py-20 lg:py-28 bg-[#17120f] border-y border-[#d4b475]/15"
    >
      <div className="max-w-[1240px] w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-4">
            <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
            <span>Beauty Inspiration</span>
          </div>

          <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6] mb-5 text-balance">
            Skin-First Transformation.
          </h2>

          <p className="text-[clamp(1rem,1.3vw,1.12rem)] text-[#c7bba9] max-w-[54ch] leading-relaxed mb-5">
            Drag the divider across the portrait to compare a clean, hydrated bare-skin prep against
            a finished evening glamour look.
          </p>

          <p className="text-[#c7bba9]/90 leading-relaxed max-w-[54ch] mb-8">
            True luxury makeup enhances bone structure and skin luminosity rather than masking it.
            Our approach prioritizes breathable layers that hold seamlessly from ceremony to
            reception.
          </p>

          <div className="flex items-center gap-4 text-xs text-[#8f8373] tabular-nums">
            <span>Prep View: {sliderPosition}%</span>
            <span aria-hidden="true">·</span>
            <span>Glam View: {100 - sliderPosition}%</span>
          </div>
        </div>

        <div className="w-full max-w-[460px] mx-auto">
          <div
            className="relative w-full aspect-[3/4] overflow-hidden border border-[#d4b475]/25 select-none bg-[#1d1713]"
            aria-label="Before and after skin prep to evening glamour comparison"
          >
            {/* After / Glam Layer */}
            <ResilientImage
              src={MEDIA_ASSETS.eveningGlam}
              alt="Finished evening glamour makeup look"
              fallbackLabel="Evening Glam"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before / Bare-skin Prep Layer */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <ResilientImage
                src={MEDIA_ASSETS.bareSkinPrep}
                alt="Clean hydrated bare-skin preparation"
                fallbackLabel="Bare-Skin Prep"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Crisp Corner Labels */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#0e0b09]/85 border border-[#d4b475]/25 text-[11px] tracking-[0.14em] uppercase text-[#f6f0e6] pointer-events-none">
              Skin Prep
            </span>
            <span className="absolute top-4 right-4 px-3 py-1 bg-[#0e0b09]/85 border border-[#d4b475]/25 text-[11px] tracking-[0.14em] uppercase text-[#ecd49f] pointer-events-none">
              Evening Glam
            </span>

            {/* Gold Hairline Divider & Handle */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 w-[2px] bg-[#d4b475] pointer-events-none -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0e0b09] border-2 border-[#d4b475] text-[#d4b475] grid place-items-center pointer-events-none shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <MoveHorizontal className="w-4 h-4" />
            </div>

            {/* Interactive Range Input */}
            <input
              type="range"
              min={5}
              max={95}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Slide to compare skin preparation and finished evening glamour"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize m-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
