import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfoSection } from "@/components/InfoSection";
import { RulesSection } from "@/components/RulesSection";
import { HardwareSection } from "@/components/HardwareSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
