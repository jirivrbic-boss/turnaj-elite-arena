import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const hardwareItems = [
  {
    title: "Výkonné herní stanice",
    description:
      "Každá stanice zvládne i ty nejnáročnější hry bez kompromisů. AMD Ryzen 5 5800X, RTX 5070, DDR5 RAM, Full HD Res., vodní chlazení. Plynulý výkon bez lagů.",
    image: "/fotky/pc.jpg",
    alt: "Herní PC stanice v Elite Arena",
  },
  {
    title: "Obraz, který tě vtáhne",
    description:
      '27" monitory, QHD rozlišení, až 280 Hz. Maximální plynulost a rychlá odezva.',
    image: "/fotky/monitor.jpg",
    alt: "Herní monitor v Elite Arena",
  },
  {
    title: "Komfort bez kompromisů",
    description:
      "Ergonomické židle, optimalizované setupy. Hraj hodiny bez nepohodlí.",
    image: "/fotky/chair.jpg",
    alt: "Ergonomická herní židle v Elite Arena",
  },
];

export function HardwareSection() {
  return (
    <section id="vybaveni" className="relative border-t border-accent/15 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Setup"
          title="Vybavení"
          description="Profesionální gear připravený na CS2 1vs1."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {hardwareItems.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden border border-white/10 bg-bg-card/90 transition-all hover:border-accent/40"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
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
