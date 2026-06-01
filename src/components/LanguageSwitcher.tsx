"use client";

import { LOCALES, type Locale } from "@/i18n/types";
import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  const pick = (code: Locale) => {
    setLocale(code);
  };

  return (
    <div
      className="flex items-stretch overflow-hidden rounded border border-white/20 bg-black/80"
      role="group"
      aria-label={t.nav.language}
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => pick(code)}
            aria-pressed={active}
            aria-label={label}
            className={`min-h-11 min-w-11 touch-manipulation px-2.5 heading-display text-[11px] tracking-wider transition-colors sm:min-w-12 sm:text-xs ${
              active
                ? "bg-accent text-black"
                : "text-text-muted active:bg-white/10 hover:text-accent"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
