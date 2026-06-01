export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-bg-card/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="heading-display text-xl text-white">
            ELITE GAME ARENA
          </p>
          <p className="mt-1 text-sm text-text-muted">
            CS2 1vs1 Turnaj · Karlovy Vary
          </p>
        </div>

        <p className="text-sm text-text-muted">
          Provozovatel: SL Fortis s.r.o. · IČO: 180 20 984
        </p>
      </div>
    </footer>
  );
}
