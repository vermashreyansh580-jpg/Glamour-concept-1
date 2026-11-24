import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, type ServiceCategory } from '../data/studioData';

type FilterValue = 'all' | ServiceCategory;

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'Makeup', label: 'Makeup' },
  { value: 'Hair', label: 'Hair' },
  { value: 'Skin', label: 'Skin & Nails' },
];

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const visibleServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeFilter);

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#17120f] border-y border-[#d4b475]/15"
    >
      <div className="max-w-[1240px] w-[90vw] mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-3">
              <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
              <span>Curated Menu</span>
            </div>
            <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6]">
              Signature Services
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter services by category"
            className="flex flex-wrap gap-2"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase border transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'border-[#d4b475] text-[#d4b475] bg-[#d4b475]/10'
                      : 'border-[#d4b475]/20 text-[#c7bba9] hover:border-[#d4b475]/60 hover:text-[#f6f0e6]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <article
              key={service.id}
              className="bg-[#1d1713] border border-[#d4b475]/16 p-8 flex flex-col justify-between gap-6 hover:border-[#d4b475] hover:-translate-y-1 transition-all duration-200 luxury-ease"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#d4b475] mb-3">
                  <span>{service.categoryLabel}</span>
                  <span aria-hidden="true" className="text-[#8f8373]">
                    ·
                  </span>
                  <span className="text-[#c7bba9]">{service.durationHint}</span>
                </div>
                <h3 className="font-serif font-medium text-[clamp(1.35rem,2vw,1.7rem)] leading-snug text-[#f6f0e6] mb-3">
                  {service.name}
                </h3>
                <p className="text-sm text-[#c7bba9] leading-relaxed">{service.summary}</p>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(service.name)}
                className="self-start inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#ecd49f] hover:text-[#f6f0e6] transition-colors duration-200 cursor-pointer py-1 whitespace-nowrap shrink-0 group"
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </article>
          ))}
        </div>

        <p className="text-xs text-[#8f8373] mt-7 tracking-wide">
          Custom bridal &amp; occasion packages, trial schedules, and detailed rate cards are shared
          directly upon WhatsApp enquiry.
        </p>
      </div>
    </section>
  );
}
