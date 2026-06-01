"use client";

const navLinks = [
  { href: "#info", label: "Info" },
  { href: "#pravidla", label: "Pravidla" },
  { href: "#vybaveni", label: "Vybavení" },
  { href: "#prihlaska", label: "Přihláška" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent/20 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="heading-display text-lg tracking-wider text-white">
          ELITE <span className="text-accent text-glow-accent">ARENA</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="heading-display text-sm tracking-wider text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#prihlaska"
          className="clip-gaming-sm border border-accent/60 bg-accent/10 px-4 py-2 heading-display text-xs tracking-wider text-accent transition-colors hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(255,184,0,0.3)]"
        >
          Přihlásit se
        </a>
      </div>
    </header>
  );
}
