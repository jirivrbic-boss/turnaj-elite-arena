"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#info", label: t.nav.info },
    { href: "#pravidla", label: t.nav.rules },
    { href: "#vybaveni", label: t.nav.hardware },
    { href: "#prihlaska", label: t.nav.register },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 isolate border-b border-accent/20 bg-black/90 supports-[backdrop-filter]:bg-black/85 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#" className="heading-display shrink-0 text-lg tracking-wider text-white">
          ELITE <span className="text-accent text-glow-accent">ARENA</span>
        </a>
        <nav className="hidden gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="heading-display text-sm tracking-wider text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href="#prihlaska"
            className="clip-gaming-sm border border-accent/60 bg-accent/10 px-3 py-2 heading-display text-xs tracking-wider text-accent transition-colors hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(255,184,0,0.3)] sm:px-4"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
