"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const STORAGE_KEY = "elite-arena-cookie-consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "accepted") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookie.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-accent/25 bg-bg-card/95 px-4 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-text-muted">
          {t.cookie.text}{" "}
          <a
            href="#kontakt"
            className="text-accent underline-offset-2 hover:underline"
          >
            {t.cookie.contact}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="clip-gaming-sm shrink-0 border border-accent bg-accent px-6 py-2.5 heading-display text-sm tracking-wider text-black transition-colors hover:bg-accent-bright"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
