import { useState } from 'react';
import { Minus, Plus, Star } from 'lucide-react';
import { FAQ_ITEMS, STUDIO_CONFIG, TESTIMONIALS } from '../data/studioData';

export function TestimonialsAndFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <>
      {/* Client Impressions */}
      <section id="reviews" className="py-20 lg:py-28">
        <div className="max-w-[1240px] w-[90vw] mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-3">
                <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
                <span>Client Impressions</span>
              </div>
              <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6] tabular-nums">
                {STUDIO_CONFIG.googleRating} ★ Google Rating
              </h2>
            </div>

            <p className="text-xs text-[#8f8373] tracking-wide">
              Reflections from recent bridal, editorial, and private studio appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-[#1d1713] border border-[#d4b475]/16 p-8 flex flex-col justify-between gap-6 m-0"
              >
                <div>
                  <div
                    className="flex items-center gap-1 text-[#d4b475] mb-4"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#d4b475] text-[#d4b475]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-xl leading-relaxed text-[#f6f0e6]">
                    “{item.quote}”
                  </p>
                </div>

                <footer className="text-xs text-[#8f8373] tracking-[0.1em] uppercase pt-4 border-t border-[#d4b475]/10">
                  <span className="text-[#c7bba9]">{item.clientName}</span>
                  <span aria-hidden="true" className="mx-2">
                    ·
                  </span>
                  <span>{item.occasion}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        id="faq"
        className="py-20 lg:py-28 bg-[#17120f] border-y border-[#d4b475]/15"
      >
        <div className="max-w-[820px] w-[90vw] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-3">
              <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
              <span>Concierge Notes</span>
            </div>
            <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-[#d4b475]/20">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="border-b border-[#d4b475]/20">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => toggleFaq(item.id)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left font-serif text-xl sm:text-2xl text-[#f6f0e6] hover:text-[#ecd49f] transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className="text-[#d4b475] shrink-0" aria-hidden="true">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`panel-${item.id}`}
                      className="pb-6 text-sm sm:text-base text-[#c7bba9] leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
