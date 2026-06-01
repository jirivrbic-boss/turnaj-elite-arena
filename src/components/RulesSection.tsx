"use client";

import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function RulesSection() {
  const { t } = useLanguage();
  const r = t.rules;

  return (
    <section id="pravidla" className="border-t border-accent/15 bg-bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={r.label}
          title={r.title}
          description={r.description}
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {r.items.map((rule, index) => (
            <li
              key={rule}
              className="flex gap-4 border border-white/10 bg-bg-elevated/80 p-5 clip-gaming-sm transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/40 bg-accent/10 heading-display text-lg text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-2 text-text-primary">{rule}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
