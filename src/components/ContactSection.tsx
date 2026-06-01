import { SectionHeading } from "./SectionHeading";

const PHONE_DISPLAY = "606 020 284";
const PHONE_TEL = "+420606020284";
const EMAIL = "jiri@esportarena.cz";

export function ContactSection() {
  return (
    <section id="kontakt" className="border-t border-accent/15 bg-bg-card/30 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          label="Máš dotaz?"
          title="Kontakt"
          description="Ozvi se — rádi ti poradíme s turnajem nebo registrací."
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group border border-accent/25 bg-bg-card/90 p-6 clip-gaming-sm transition-colors hover:border-accent/60 hover:bg-accent/5"
          >
            <p className="heading-display text-xs tracking-widest text-accent">
              Telefon
            </p>
            <p className="heading-display mt-2 text-2xl text-white group-hover:text-accent-bright">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Klikni a zavolej
            </p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="group border border-accent/25 bg-bg-card/90 p-6 clip-gaming-sm transition-colors hover:border-accent/60 hover:bg-accent/5"
          >
            <p className="heading-display text-xs tracking-widest text-accent">
              E-mail
            </p>
            <p className="mt-2 break-all text-lg font-medium text-white group-hover:text-accent-bright sm:text-xl">
              {EMAIL}
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Klikni a napiš nám
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
