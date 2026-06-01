"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { InfoSection } from "./InfoSection";
import { RulesSection } from "./RulesSection";
import { HardwareSection } from "./HardwareSection";
import { RegistrationForm } from "./RegistrationForm";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function HomePage() {
  const { locale } = useLanguage();

  return (
    <div key={locale}>
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
        <RulesSection />
        <HardwareSection />
        <RegistrationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
