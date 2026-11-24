import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { LOOKBOOK_ITEMS, SERVICES } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

interface LookbookSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function LookbookSection({ onSelectService }: LookbookSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? LOOKBOOK_ITEMS[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % LOOKBOOK_ITEMS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const handleBookLook = () => {
    if (!activeItem) return;
    const matched = SERVICES.find((s) => s.id === activeItem.serviceId);
    setActiveIndex(null);
    if (matched) {
      onSelectService(matched.name);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="max-w-[1240px] w-[90vw] mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-3">
              <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
              <span>Visual Lookbook</span>
            </div>
            <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6]">
              Editorial Aesthetics
            </h2>
          </div>

          <p className="text-xs text-[#8f8373] tracking-wide">
            Select any frame to inspect lighting, texture, and finish details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOOKBOOK_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Inspect ${item.title}: ${item.subtitle}`}
              className="group relative overflow-hidden border border-[#d4b475]/20 bg-[#1d1713] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#d4b475]"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ResilientImage
                  src={item.src}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 luxury-ease group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/50 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                <div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-[#d4b475]">
                    {item.subtitle}
                  </div>
                  <div className="font-serif text-lg text-[#f6f0e6] mt-0.5">{item.title}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.14em] uppercase text-[#ecd49f] shrink-0">
                  <span>View</span>
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Lookbook preview: ${activeItem.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
          className="fixed inset-0 z-50 bg-[#090706]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close preview"
            className="absolute top-5 right-5 w-11 h-11 border border-[#d4b475]/30 text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#d4b475] grid place-items-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="relative flex items-center justify-center max-w-4xl w-full gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length
                )
              }
              aria-label="Previous look"
              className="w-11 h-11 shrink-0 border border-[#d4b475]/30 text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#d4b475] grid place-items-center cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="border border-[#d4b475]/30 bg-[#17120f] max-h-[72vh] overflow-hidden">
              <ResilientImage
                src={activeItem.src}
                alt={activeItem.alt}
                loading="eager"
                fallbackLabel={activeItem.title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % LOOKBOOK_ITEMS.length)}
              aria-label="Next look"
              className="w-11 h-11 shrink-0 border border-[#d4b475]/30 text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#d4b475] grid place-items-center cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 text-center max-w-xl">
            <p className="text-sm text-[#c7bba9]">{activeItem.caption}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleBookLook}
                className="px-6 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#d4b475] text-[#120e0b] hover:bg-[#ecd49f] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Enquire About This Look
              </button>
              <span className="text-xs text-[#8f8373] tabular-nums">
                {activeIndex + 1} / {LOOKBOOK_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
