"use client";

import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";
import { FACEIT_TOURNAMENT_URL } from "@/lib/tournament";

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

function InfoCardContent({
  item,
  rulesLink,
}: {
  item: InfoItem;
  rulesLink: {
    title: string;
    sub: string;
    faceitNote: string;
  };
}) {
  if (item.kind === "rules") {
    return (
      <div className="mt-2 space-y-3">
        <a
          href="#pravidla"
          className="group block heading-display text-xl text-white transition-colors hover:text-accent-bright"
        >
          <span className="text-accent-bright group-hover:underline">
            {rulesLink.title}
          </span>
          <span className="mt-0.5 block text-sm font-normal normal-case tracking-normal text-text-muted">
            {rulesLink.sub}
          </span>
        </a>
        <p className="text-sm leading-relaxed text-text-muted">
          {rulesLink.faceitNote}
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
  const { t } = useLanguage();
  const i = t.info;

  const infoItems: InfoItem[] = [
    { kind: "simple", label: i.when.label, value: i.when.value },
    {
      kind: "simple",
      label: i.where.label,
      value: i.where.value,
      sub: i.where.sub,
    },
    {
      kind: "simple",
      label: i.fee.label,
      value: i.fee.value,
      sub: i.fee.sub,
    },
    {
      kind: "simple",
      label: i.prize.label,
      value: i.prize.value,
      sub: i.prize.sub,
    },
    { kind: "simple", label: i.format.label, value: i.format.value },
    { kind: "rules", label: i.rules.label },
  ];

  return (
    <section id="info" className="relative border-t border-accent/15 py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label={i.label}
          title={i.title}
          description={i.description}
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
                <InfoCardContent item={item} rulesLink={i.rulesLink} />
              </article>
            ))}

            <article className="col-span-full border border-accent/40 bg-accent/5 p-6 clip-gaming-sm sm:col-span-2">
              <p className="heading-display text-xs tracking-widest text-accent">
                {i.tournamentLink.label}
              </p>
              <a
                href={FACEIT_TOURNAMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="heading-display mt-2 inline-flex items-center gap-2 text-2xl text-white transition-colors hover:text-accent-bright"
              >
                {i.tournamentLink.faceitLabel}
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

          <div className="relative min-h-[320px] overflow-hidden border border-accent/25 sm:min-h-[400px] lg:min-h-[520px]">
            <Image
              src="/fotky/arena.jpg"
              alt={i.arenaAlt}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <p className="absolute bottom-4 left-4 heading-display text-xs tracking-widest text-white/90">
              ELITE GAME ARENA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
