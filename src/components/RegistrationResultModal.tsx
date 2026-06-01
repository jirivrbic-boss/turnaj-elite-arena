"use client";

import {
  FACEIT_TOURNAMENT_LINK_LABEL,
  FACEIT_TOURNAMENT_URL,
} from "@/lib/tournament";

const STEPS = [
  "Přihláška na webu je uložená — hotovo.",
  "Klikni na tlačítko níže a otevři stránku turnaje na FACEIT.",
  "Přihlas se ke svému FACEIT účtu (pokud ještě nejsi).",
  "Na stránce turnaje klikni na Join / Přihlásit se do turnaje.",
  "Zkontroluj, že používáš stejný FACEIT nick jako ve formuláři.",
];

type RegistrationResultModalProps = {
  phase: "loading" | "success";
  onClose: () => void;
};

export function RegistrationResultModal({
  phase,
  onClose,
}: RegistrationResultModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div className="relative w-full max-w-lg border border-accent/30 bg-bg-card p-8 clip-gaming glow-accent">
        {phase === "loading" ? (
          <div className="text-center">
            <div
              className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-accent/30 border-t-accent"
              aria-hidden
            />
            <h2
              id="registration-modal-title"
              className="heading-display text-2xl text-white"
            >
              Odesílám přihlášku…
            </h2>
            <p className="mt-3 text-text-muted">Chvilku strpení.</p>
          </div>
        ) : (
          <>
            <h2
              id="registration-modal-title"
              className="heading-display text-2xl text-accent-bright text-glow-accent"
            >
              Přihláška odeslána
            </h2>
            <p className="mt-3 text-text-primary">
              Ještě jeden krok —{" "}
              <strong className="text-white">
                přihlas se do turnaje na FACEIT
              </strong>
              , jinak tě neuvidíme v soupisce.
            </p>

            <ol className="mt-6 space-y-3">
              {STEPS.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-accent/40 bg-accent/10 heading-display text-xs text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href={FACEIT_TOURNAMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 bg-accent py-4 heading-display text-lg tracking-wider text-black clip-gaming transition-colors hover:bg-accent-bright"
            >
              {FACEIT_TOURNAMENT_LINK_LABEL}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full border border-white/15 py-3 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-white"
            >
              Zavřít
            </button>
          </>
        )}
      </div>
    </div>
  );
}
