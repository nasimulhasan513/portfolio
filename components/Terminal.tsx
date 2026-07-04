"use client";

import { useEffect, useState } from "react";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "status"; name: string; state: string }
  | { kind: "link"; href: string; text: string }
  | { kind: "gap" };

const LINES: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "nasimul hasan deep — lead backend engineer & cto" },
  { kind: "gap" },
  { kind: "cmd", text: "uptime" },
  { kind: "out", text: "4+ years in production · 10 products live" },
  { kind: "gap" },
  { kind: "cmd", text: "status --live" },
  { kind: "status", name: "acs-future-school", state: "online" },
  { kind: "status", name: "rhombus-publications", state: "online" },
  { kind: "status", name: "8-more-products", state: "online" },
  { kind: "gap" },
  { kind: "cmd", text: "contact --now" },
  { kind: "link", href: "mailto:contact@nasimulhasan.me", text: "contact@nasimulhasan.me" },
];

const TYPE_MS = 38;
const LINE_MS = 170;
const CMD_PAUSE_MS = 380;

export default function Terminal() {
  const [pos, setPos] = useState({ line: 0, char: 0 });
  const done = pos.line >= LINES.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos({ line: LINES.length, char: 0 });
    }
  }, []);

  useEffect(() => {
    if (done) return;
    const current = LINES[pos.line];
    let delay: number;
    let next: { line: number; char: number };

    if (current.kind === "cmd" && pos.char < current.text.length) {
      delay = TYPE_MS;
      next = { line: pos.line, char: pos.char + 1 };
    } else {
      delay = current.kind === "cmd" ? CMD_PAUSE_MS : current.kind === "gap" ? 60 : LINE_MS;
      next = { line: pos.line + 1, char: 0 };
    }

    const t = window.setTimeout(() => setPos(next), delay);
    return () => window.clearTimeout(t);
  }, [pos, done]);

  const renderLine = (line: Line, i: number) => {
    const isTyping = i === pos.line && line.kind === "cmd";
    if (i > pos.line) return null;

    switch (line.kind) {
      case "cmd":
        return (
          <div key={i}>
            <span className="text-term-accent">$ </span>
            <span className="text-term-fg">
              {isTyping ? line.text.slice(0, pos.char) : line.text}
            </span>
            {isTyping && <span className="cursor-blink text-term-accent">▮</span>}
          </div>
        );
      case "out":
        return (
          <div key={i} className="text-term-muted">
            {line.text}
          </div>
        );
      case "status":
        return (
          <div key={i} className="flex items-baseline justify-between gap-4">
            <span className="text-term-fg">
              <span className="text-term-accent">● </span>
              {line.name}
            </span>
            <span className="text-term-muted">[{line.state}]</span>
          </div>
        );
      case "link":
        return (
          <div key={i}>
            <span className="text-term-accent">→ </span>
            <a
              href={line.href}
              className="text-term-fg underline decoration-term-line underline-offset-4 transition-colors hover:text-term-accent hover:decoration-term-accent"
            >
              {line.text}
            </a>
          </div>
        );
      case "gap":
        return <div key={i} aria-hidden="true">&nbsp;</div>;
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-term-line bg-term-bg shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-term-line px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4234]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4a4234]" />
          <span className="h-2.5 w-2.5 rounded-full bg-term-accent/80" />
        </div>
        <span className="font-mono text-[0.68rem] tracking-[0.18em] text-term-muted">
          nasimul@prod — ~
        </span>
        <span className="font-mono text-[0.68rem] text-term-muted">bash</span>
      </div>

      <div className="min-h-[350px] px-5 py-5 font-mono text-[0.8rem] leading-[1.95] sm:min-h-[380px] sm:text-[0.85rem]">
        {LINES.map(renderLine)}
        {done && (
          <div>
            <span className="text-term-accent">$ </span>
            <span className="cursor-blink text-term-accent">▮</span>
          </div>
        )}
      </div>
    </div>
  );
}
