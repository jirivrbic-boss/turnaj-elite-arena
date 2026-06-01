import { SectionHeading } from "./SectionHeading";
import { ImagePlaceholder } from "./ImagePlaceholder";
import {
  FACEIT_TOURNAMENT_LINK_LABEL,
  FACEIT_TOURNAMENT_URL,
} from "@/lib/tournament";

type SimpleInfoItem = {
  kind: "simple";
  label: string;
  value: string;
  sub?: string;
};

type RulesInfoItem = {
  kind: "rules";
  label: string;
};

type InfoItem = SimpleInfoItem | RulesInfoItem;

const infoItems: InfoItem[] = [
  {
    kind: "simple",
    label: "Kdy",
    value: "19. 6. 2026 od 18:00",
  },
  {
    kind: "simple",
    label: "Kde",
    value: "ELITE GAME ARENA",
    sub: "Hybešova 18, 360 05 Karlovy Vary",
  },
  {
    kind: "simple",
    label: "Vstupné",
    value: "200 Kč na osobu",
    sub: "Platí se až na místě",
  },
  {
    kind: "simple",
    label: "Výhra",
    value: "1000 Kč pro vítěze",
    sub: "Vstup 200 Kč vs výhra 1000 Kč — naprosto fair",
  },
  {
    kind: "simple",
    label: "Formát",
    value: "CS2 1vs1 přes FACEIT",
  },
  {
    kind: "rules",
    label: "Pravidla",
  },
];

function InfoCardContent({ item }: { item: InfoItem }) {
  if (item.kind === "rules") {
    return (
      <div className="mt-2 space-y-3">
        <a
          href="#pravidla"
          className="group block heading-display text-xl text-white transition-colors hover:text-accent-bright"
        >
          <span className="text-accent-bright group-hover:underline">
            Pravidla turnaje
          </span>
          <span className="mt-0.5 block text-sm font-normal normal-case tracking-normal text-text-muted">
            Kompletní přehled níže na stránce ↓
          </span>
        </a>
        <p className="text-sm leading-relaxed text-text-muted">
          Kromě toho platí i{" "}
          <span className="text-white/90">oficiální pravidla FACEIT</span> pro
          zápasy na platformě.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="heading-display mt-2 text-xl text-white">{item.value}</p>
      {item.sub && (
        <p className="mt-1 text-sm text-text-muted">{item.sub}</p>
      )}
    </>
  );
}

export function InfoSection() {
  return (
    <section id="info" className="relative border-t border-accent/15 py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Turnaj"
          title="Základní informace"
          description="Vše, co potřebuješ vědět před startem duelu."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {infoItems.map((item) => (
              <article
                key={item.label}
                className="border border-accent/25 bg-bg-card/90 p-6 clip-gaming-sm transition-colors hover:border-accent/60 hover:shadow-[0_0_20px_rgba(255,184,0,0.08)]"
              >
                <p className="heading-display text-xs tracking-widest text-accent">
                  {item.label}
                </p>
                <InfoCardContent item={item} />
              </article>
            ))}

            <article className="col-span-full border border-accent/40 bg-accent/5 p-6 clip-gaming-sm sm:col-span-2">
              <p className="heading-display text-xs tracking-widest text-accent">
                Odkaz na turnaj
              </p>
              <a
                href={FACEIT_TOURNAMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="heading-display mt-2 inline-flex items-center gap-2 text-2xl text-white transition-colors hover:text-accent-bright"
              >
                {FACEIT_TOURNAMENT_LINK_LABEL}
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </article>
          </div>

          <ImagePlaceholder label="Obrázek arény / turnaje" aspect="square" />
        </div>
      </div>
    </section>
  );
}
