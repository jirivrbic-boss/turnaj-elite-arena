"use client";

import { LOCALES } from "@/i18n/types";
import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <label className="flex items-center gap-2">
      <span className="sr-only">{t.nav.language}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        className="cursor-pointer border border-white/20 bg-black/60 px-2 py-1.5 heading-display text-xs tracking-wider text-text-muted outline-none transition-colors hover:border-accent/50 hover:text-accent focus:border-accent clip-gaming-sm"
        aria-label={t.nav.language}
      >
        {LOCALES.map(({ code, label }) => (
          <option key={code} value={code} title={label} className="bg-black text-white">
            {code.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
