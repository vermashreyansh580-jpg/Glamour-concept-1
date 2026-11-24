export type ServiceCategory = 'Makeup' | 'Hair' | 'Skin';

export interface StudioService {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  durationHint: string;
  summary: string;
  ctaLabel: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  serviceId: string;
  src: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  occasion: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingDetails {
  name: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export const STUDIO_CONFIG = {
  businessName: 'Glamour Hub',
  businessTagline: 'Beauty & Artistry',
  phoneDisplay: '+91 82993 43261',
  phoneHref: 'tel:+918299343261',
  whatsappNumber: '918299343261',
  googleRating: '4.9',
  studioHoursSummary: 'By Private Appointment · Morning through Evening Windows',
  locationNote: 'Private studio directions & suite access shared upon appointment confirmation',
};

export const MEDIA_ASSETS = {
  heroEditorial:
    'https://lh3.googleusercontent.com/aida/ALJJyrC-Izv-y1vijkJbzhi78rFcgoZibJAasAS42wLvW5Z5w605IG0y77p7mhN7drTDs3qCxwkNefhFTgNByvr6vU-R_97vZsVB38GhFYAkqNpTKPkYCR2STJLUVMdY37D_qVWqLzRDiADOUKOcTTmKCcaOF28ZFM4taaalHi2bza2o7Y7UmcLAMyDLTBecwYGYRO2EF5OEsX3CuKUEfTnSlyUgMjW6qDW16e1f96BO8VPatw',
  studioInterior:
    'https://lh3.googleusercontent.com/aida/ALJJyrCUUOXaEFeOSZBhWFzbYMjkR42QwQVO4RMUu6Cu8rsaXnPtFeQZ8EQmOl6muD0SrHObNx-cCIUGfCl_TVwHOhwzscxDsT0_ejJqk2e4nOdauNzdxY8NdK_Ifkk8eqecwKjgx4iZQMaZNAmDbtMrrEj7_dw97cE4spB0JKO6gdG_xsq8WvaZ4Jer7iQwjkoCYjF-kHgDHQhyhNhph0285AWQe9wKOyGsnO56DO84l5sFDT7z',
  bridalArtistry:
    'https://lh3.googleusercontent.com/aida/ALJJyrBhv5X_bTb8ClFk0y5TDo_KzyaJNEWil8F9Nu3WcGa2e2p8YKQIgNK9YYhF55gz7Zfte37nCbCRVHGr5dFu7fIOZlyT5dmlax5aot2yaZnmwwV1xxGh63biGZwms2F95GJe8L92lcSMPKfkb4-F7mgP2-Jtz14lvFqy0vqwrXC9rYcnS2eeVXevyI26LZIE06aDffo7fyEyL5jyEcOaDyl8nzeQtT9kvfXS56FmPnlIuQ',
  eveningGlam:
    'https://lh3.googleusercontent.com/aida/ALJJyrCvbj4RnWyYQavAD0zEZI2O3RM7FE06f6VUdKYoyBGMT-cpPlPgh7K2HpTcNQFpMpU3BNH8Vc0gEm3m-R011aF6cdQiywCrx75pJI1uv44bU4Yt1i_l8a4753EUQjTqsSvyKfpYiSt1RbToE3t0niXBgWMRxphZKSnhxhVEFXEBs4zhPVwUtgAkflecfpWv_z7Gg_Wnmcf3IPkZU_HKjamRuWhYA0ozc9sLF__KVM3MCjU',
  bareSkinPrep:
    'https://lh3.googleusercontent.com/aida/ALJJyrAY8cA2NYwTkwnuW7FP53ODOwnKMb5ZictYDeZCwaId7-UBkZ8V6w2a4S7FdciMoAnH44PwFLPJ1aGDPGLf-92-0a8_LORb4t3F2z_t98Ucxpb31iiiEhDq6yM7CmjRDFr-jO65mbRK6WotMVhGqOugeKjgd3JDegEkAlotbNxcezENAW1mmKC44mWNB7lJMLQ2UPbSvt8wjDm3G1ISvx8_KpEoSemQPS3yb3Nxn8lk9vs1',
};

export const SERVICES: StudioService[] = [
  {
    id: 'bridal-glam',
    name: 'Bridal & Reception Artistry',
    category: 'Makeup',
    categoryLabel: 'Makeup Artistry',
    durationHint: 'Trial + Event Day',
    summary:
      'Bespoke bridal looks, trial consultations, and long-wear editorial finishes tailored to attire and lighting.',
    ctaLabel: 'Enquire for Bridal',
  },
  {
    id: 'editorial-party',
    name: 'Evening & Occasion Makeup',
    category: 'Makeup',
    categoryLabel: 'Makeup Artistry',
    durationHint: '90 min Session',
    summary:
      'Luminous skin prep, soft-focus contouring, and custom eye artistry for formal events and celebrations.',
    ctaLabel: 'Enquire for Occasion',
  },
  {
    id: 'hair-styling',
    name: 'Signature Hair Styling & Rituals',
    category: 'Hair',
    categoryLabel: 'Hair Studio',
    durationHint: '60–90 min Session',
    summary:
      'Sculpted waves, sleek blowouts, textured updos, and restorative shine rituals for lasting movement.',
    ctaLabel: 'Enquire for Hair',
  },
  {
    id: 'skin-radiance',
    name: 'Skin Prep & Radiance Facials',
    category: 'Skin',
    categoryLabel: 'Skin & Prep',
    durationHint: '60 min Ritual',
    summary:
      'Hydrating pre-event skin conditioning designed for a smooth, camera-ready complexion.',
    ctaLabel: 'Enquire for Skin',
  },
  {
    id: 'nail-studio',
    name: 'Luxury Nail & Hand Care',
    category: 'Skin',
    categoryLabel: 'Nail Care',
    durationHint: '45–75 min Session',
    summary:
      'Clean cuticle care, gel artistry, and minimalist high-gloss finishes crafted with precision.',
    ctaLabel: 'Enquire for Nails',
  },
  {
    id: 'brow-lash',
    name: 'Brow Architecture & Lash Lift',
    category: 'Makeup',
    categoryLabel: 'Brows & Lashes',
    durationHint: '45 min Session',
    summary:
      'Balanced brow shaping and natural lash enhancement designed to frame your features.',
    ctaLabel: 'Enquire for Brows',
  },
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-bridal',
    title: 'Bridal Artistry',
    subtitle: 'Champagne Shimmer',
    caption: 'Bridal Look — Champagne shimmer, soft-focus complexion, and luminous skin finish',
    serviceId: 'bridal-glam',
    src: MEDIA_ASSETS.bridalArtistry,
    alt: 'Bridal makeup aesthetic with champagne shimmer and radiant complexion',
  },
  {
    id: 'look-evening',
    title: 'Evening Glam',
    subtitle: 'Sculpted Bronze',
    caption: 'Evening Glam — Sculpted bronze definition and velvet satin lip finish',
    serviceId: 'editorial-party',
    src: MEDIA_ASSETS.eveningGlam,
    alt: 'Evening occasion makeup aesthetic with warm bronze tones',
  },
  {
    id: 'look-editorial',
    title: 'Editorial Finish',
    subtitle: 'Warm Studio Glow',
    caption: 'Editorial Portrait — Weightless radiance calibrated for warm evening lighting',
    serviceId: 'editorial-party',
    src: MEDIA_ASSETS.heroEditorial,
    alt: 'Editorial beauty portrait showcasing luminous evening glamour',
  },
  {
    id: 'look-studio',
    title: 'Studio Space',
    subtitle: 'Private Sanctuary',
    caption: 'Studio Ambience — Dark marble, warm architectural illumination, and brushed brass accents',
    serviceId: 'skin-radiance',
    src: MEDIA_ASSETS.studioInterior,
    alt: 'Luxury dark marble and gold-accented beauty studio interior',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    quote:
      'My bridal makeup felt completely weightless from the afternoon ceremony through the late-night reception. The shade matching and calm studio pace made all the difference.',
    clientName: 'Rhea Kapoor',
    occasion: 'Bridal & Reception Artistry',
    rating: 5,
  },
  {
    id: 'review-2',
    quote:
      'Impeccable hygiene, unhurried consultation, and sculpted waves that held their softness all evening without feeling stiff or over-styled.',
    clientName: 'Meera Nair',
    occasion: 'Signature Hair & Evening Makeup',
    rating: 5,
  },
  {
    id: 'review-3',
    quote:
      'The pre-event skin prep facial left my complexion deeply hydrated so the makeup sat like second skin in every flash photograph.',
    clientName: 'Sanya Malhotra',
    occasion: 'Skin Prep & Occasion Glam',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-confirm',
    question: 'How are appointments confirmed?',
    answer:
      'Submitting the enquiry form prepares a pre-filled WhatsApp message to Glamour Hub (+91 82993 43261). Our concierge confirms slot availability and shares exact arrival details directly via WhatsApp or phone.',
  },
  {
    id: 'faq-pricing',
    question: 'How do I receive bespoke pricing and bridal package details?',
    answer:
      'Because bridal and occasion artistry is tailored to your event schedule, outfit palette, and trial preferences, curated package options and availability are shared directly upon enquiry.',
  },
  {
    id: 'faq-location',
    question: 'Where is Glamour Hub located and what are the studio hours?',
    answer:
      'We operate by private appointment across morning, afternoon, and evening windows. Exact studio directions and suite access instructions are provided with your booking confirmation.',
  },
  {
    id: 'faq-prep',
    question: 'Do you recommend a skin prep session before bridal or occasion makeup?',
    answer:
      'Yes. A hydrating skin conditioning session 48 to 72 hours prior—or our signature pre-makeup barrier prep on the day—ensures seamless blending and long-wear luminosity.',
  },
];

export const TIME_WINDOWS = [
  'Morning Preference (10:00 AM – 12:30 PM)',
  'Afternoon Preference (1:00 PM – 4:00 PM)',
  'Evening Preference (4:30 PM – 7:30 PM)',
  'Flexible — Please Suggest Availability',
];

export function formatWhatsAppMessage(details: BookingDetails): string {
  const name = details.name.trim() || 'Guest';
  const phone = details.phone?.trim();
  const service = details.service.trim() || 'General Beauty Consultation';
  const date = details.date.trim() || 'Flexible';
  const time = details.time.trim() || 'Flexible';
  const message = details.message.trim() || 'Please share available slots.';

  const lines = [
    `Hello ${STUDIO_CONFIG.businessName} Team,`,
    '',
    'I would like to request an appointment enquiry:',
    `• Name: ${name}`,
    ...(phone ? [`• Contact Number: ${phone}`] : []),
    `• Selected Service: ${service}`,
    `• Preferred Date: ${date}`,
    `• Preferred Time: ${time}`,
    `• Additional Notes: ${message}`,
    '',
    'Kindly confirm availability. Thank you!',
  ];

  return lines.join('\n');
}

export function buildWhatsAppEnquiryUrl(details: BookingDetails): string {
  const encoded = encodeURIComponent(formatWhatsAppMessage(details));
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encoded}`;
}
