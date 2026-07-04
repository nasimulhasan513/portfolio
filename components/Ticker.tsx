const ITEMS = [
  "backend systems",
  "performance",
  "security",
  "automation",
  "architecture",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {ITEMS.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-8 sm:gap-12">
          <span className="font-display text-xl font-bold uppercase tracking-tight text-ink-soft sm:text-2xl">
            {item}
          </span>
          <span aria-hidden="true" className="font-mono text-lg text-accent">
            *
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker overflow-hidden border-y border-line py-5" aria-hidden="true">
      {/* two identical copies; the track loops at -50% for a seamless scroll */}
      <div className="ticker-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
