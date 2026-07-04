import LocalTime from "./ui/LocalTime";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="container-px flex flex-col items-center justify-between gap-2.5 py-5 font-mono text-[0.7rem] tracking-[0.12em] text-ink-muted sm:flex-row">
        <p className="m-0">© {new Date().getFullYear()} nasimul hasan deep · built &amp; designed by me</p>
        <LocalTime />
        <p className="m-0 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          all systems operational
        </p>
      </div>
    </footer>
  );
}
