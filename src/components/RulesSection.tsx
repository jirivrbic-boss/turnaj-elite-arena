import { SectionHeading } from "./SectionHeading";

const rules = [
  "K účasti je nezbytný PRIME účet.",
  "Hráči nesmí mít na svém profilu žádný VAC, game či trade ban.",
  "Přísný zákaz smurfingu.",
  "Zákaz využívání chyb v mapě a provádění pixel-walků.",
  "Všechny formy programů typu SKINCHANGER jsou přísně zakázány.",
  "Během celého turnaje je nezbytné dodržovat pravidla fair play.",
];

export function RulesSection() {
  return (
    <section id="pravidla" className="border-t border-accent/15 bg-bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Fair play"
          title="Pravidla turnaje"
          description="1vs1 formát — dodržuj pravidla, jinak diskvalifikace."
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {rules.map((rule, index) => (
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
