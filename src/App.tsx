import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { FooterAndChrome } from './components/FooterAndChrome';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LookbookSection } from './components/LookbookSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { TransformationSection } from './components/TransformationSection';
import { SERVICES } from './data/studioData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].name);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0b09] text-[#f6f0e6]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <LookbookSection onSelectService={handleSelectService} />
        <TransformationSection />
        <TestimonialsAndFaqSection />
        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>
      <FooterAndChrome />
    </div>
  );
}
