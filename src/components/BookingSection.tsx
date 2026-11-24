import { useMemo, useState, type FormEvent } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, Phone } from 'lucide-react';
import {
  SERVICES,
  STUDIO_CONFIG,
  TIME_WINDOWS,
  buildWhatsAppEnquiryUrl,
  formatWhatsAppMessage,
} from '../data/studioData';

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (serviceName: string) => void;
}

export function BookingSection({ selectedService, onServiceChange }: BookingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(TIME_WINDOWS[0]);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const todayIso = useMemo(() => new Date().toISOString().split('T')[0], []);

  const enquiryDetails = {
    name,
    phone,
    service: selectedService,
    date,
    time,
    message,
  };

  const whatsappUrl = buildWhatsAppEnquiryUrl(enquiryDetails);
  const previewText = formatWhatsAppMessage(enquiryDetails);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name so our concierge knows how to address you.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }
    setErrorMsg(null);
    setSubmitted(true);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(previewText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch {
      // Fallback silent if clipboard permissions unavailable
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONFIG.phoneDisplay);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback silent
    }
  };

  return (
    <section id="booking" className="py-20 lg:py-28">
      <div className="max-w-[1240px] w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14 items-start">
        {/* Left Column: Direct Concierge Info */}
        <div>
          <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#d4b475] mb-4">
            <span className="w-7 h-px bg-[#d4b475]" aria-hidden="true" />
            <span>Private Concierge</span>
          </div>

          <h2 className="font-serif font-medium text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.12] text-[#f6f0e6] mb-5 text-balance">
            Book Your Appointment
          </h2>

          <p className="text-[clamp(1rem,1.3vw,1.1rem)] text-[#c7bba9] max-w-[50ch] leading-relaxed mb-9">
            Share your preferred service and date. Your enquiry is formatted directly for WhatsApp
            so our team can confirm studio availability with you personally.
          </p>

          <div className="border-t border-[#d4b475]/20 pt-7 space-y-6">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-1.5">
                Direct Phone &amp; WhatsApp
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={STUDIO_CONFIG.phoneHref}
                  className="font-serif text-2xl sm:text-3xl text-[#f6f0e6] hover:text-[#ecd49f] transition-colors tabular-nums"
                >
                  {STUDIO_CONFIG.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase border border-[#d4b475]/25 text-[#c7bba9] hover:border-[#d4b475] hover:text-[#ecd49f] transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#d4b475]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-1.5">
                Studio Hours &amp; Visits
              </div>
              <p className="text-sm text-[#c7bba9]">{STUDIO_CONFIG.studioHoursSummary}</p>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-1.5">
                Studio Location
              </div>
              <p className="text-sm text-[#c7bba9] mb-4">{STUDIO_CONFIG.locationNote}</p>
              <div className="p-5 border border-[#d4b475]/20 bg-[#17120f] text-xs text-[#c7bba9] leading-relaxed space-y-1.5">
                <div className="font-medium text-[#ecd49f] tracking-wider uppercase text-[11px]">
                  Private Suite Etiquette
                </div>
                <p>
                  Bridal trials include lighting calibration and skin-prep planning. Kindly share
                  event timings and outfit tones in your enquiry notes for tailored guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Validated Appointment Form / Confirmation Panel */}
        <div className="bg-[#1d1713] border border-[#d4b475]/25 p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="bookingName"
                    className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="bookingName"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Ananya Sharma"
                    className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] placeholder:text-[#8f8373] focus:outline-none focus:border-[#d4b475] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bookingPhone"
                    className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                  >
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="bookingPhone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] placeholder:text-[#8f8373] focus:outline-none focus:border-[#d4b475] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="bookingService"
                  className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                >
                  Selected Service
                </label>
                <select
                  id="bookingService"
                  value={selectedService}
                  onChange={(e) => onServiceChange(e.target.value)}
                  className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] focus:outline-none focus:border-[#d4b475] transition-colors"
                >
                  {SERVICES.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="bookingDate"
                    className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="bookingDate"
                    type="date"
                    required
                    min={todayIso}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] focus:outline-none focus:border-[#d4b475] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bookingTime"
                    className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="bookingTime"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] focus:outline-none focus:border-[#d4b475] transition-colors"
                  >
                    {TIME_WINDOWS.map((win) => (
                      <option key={win} value={win}>
                        {win}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="bookingMessage"
                  className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#ecd49f] mb-2"
                >
                  Additional Message (Optional)
                </label>
                <textarea
                  id="bookingMessage"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share event details, look preferences, or questions..."
                  className="w-full bg-[#0e0b09] border border-[#d4b475]/20 px-4 py-3 text-sm text-[#f6f0e6] placeholder:text-[#8f8373] focus:outline-none focus:border-[#d4b475] transition-colors resize-y"
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  className="mb-4 text-xs text-[#ecd49f] bg-[#d4b475]/10 border border-[#d4b475]/35 px-4 py-3"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#d4b475] text-[#120e0b] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#ecd49f] transition-colors duration-200 cursor-pointer"
              >
                Prepare WhatsApp Enquiry
              </button>

              <div className="mt-4 p-4 border border-[#d4b475]/20 bg-[#d4b475]/[0.05] text-xs text-[#c7bba9] leading-relaxed">
                Submitting prepares a tailored WhatsApp enquiry to Glamour Hub (
                {STUDIO_CONFIG.phoneDisplay}). Bookings are confirmed directly upon studio reply.
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4b475] mb-2">
                  Enquiry Ready
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f6f0e6]">
                  Thank you, {name.trim()}.
                </h3>
                <p className="text-sm text-[#c7bba9] mt-2">
                  Your appointment request has been prepared below. Send it directly to our
                  concierge on WhatsApp or copy the message.
                </p>
              </div>

              <pre className="p-4 bg-[#0e0b09] border border-[#d4b475]/20 text-xs text-[#c7bba9] whitespace-pre-wrap font-sans leading-relaxed">
                {previewText}
              </pre>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#d4b475] text-[#120e0b] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#ecd49f] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Open in WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 border border-[#d4b475]/30 text-xs font-semibold tracking-[0.14em] uppercase text-[#f6f0e6] hover:border-[#d4b475] hover:text-[#ecd49f] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-4 h-4 text-[#d4b475]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#d4b475]/15 text-xs">
                <a
                  href={STUDIO_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2 text-[#ecd49f] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Call {STUDIO_CONFIG.phoneDisplay} directly</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[#c7bba9] hover:text-[#f6f0e6] underline underline-offset-4 cursor-pointer"
                >
                  Edit enquiry details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
