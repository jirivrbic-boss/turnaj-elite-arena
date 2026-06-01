"use client";

import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

const HARDWARE_IMAGES = [
  { image: "/fotky/pc.jpg" },
  { image: "/fotky/monitor.jpg" },
  { image: "/fotky/chair.jpg" },
] as const;

export function HardwareSection() {
  const { t } = useLanguage();
  const h = t.hardware;

  return (
    <section id="vybaveni" className="relative border-t border-accent/15 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label={h.label}
          title={h.title}
          description={h.description}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {h.items.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden border border-white/10 bg-bg-card/90 transition-all hover:border-accent/40"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={HARDWARE_IMAGES[index].image}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-display text-xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
