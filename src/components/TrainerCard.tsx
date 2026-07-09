import { User } from "lucide-react";

export function TrainerCard() {
  return (
    <div className="not-prose w-full max-w-[240px] text-xs flex">
      <div className="relative flex w-full flex-col rounded-xl border-2 border-[color:var(--sun)] bg-gradient-to-br from-amber-50 to-orange-100 p-3 shadow-[0_4px_0_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.18)] dark:from-amber-950/40 dark:to-orange-950/40">
        {/* Header */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-foreground/70">
          <span>Trainer Card</span>
          <span>HP 100</span>
        </div>

        {/* Portrait */}
        <div className="mt-2 aspect-square w-full overflow-hidden rounded-lg border-2 border-foreground/20 bg-gradient-to-br from-sky-200 via-emerald-100 to-amber-100 dark:from-sky-900/50 dark:via-emerald-900/40 dark:to-amber-900/40">
          <div className="flex h-full w-full items-center justify-center text-foreground/40">
            <User size={40} strokeWidth={1.25} />
          </div>
        </div>

        {/* Name + type */}
        <div className="mt-3 flex items-baseline justify-between">
          <h3 className="font-display text-lg leading-none">Nina</h3>
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
            Agri-Econ · Lv. 24
          </span>
        </div>

        {/* Nationalities */}
        <div className="mt-1 flex gap-2 text-sm">
          <span className="rounded-full bg-foreground/10 px-2 py-0.5">🇫🇷 French</span>
          <span className="rounded-full bg-foreground/10 px-2 py-0.5">🇧🇷 Brazilian</span>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              Strengths
            </p>
            <ul className="mt-1 space-y-0.5">
              <li>✦ Creative</li>
              <li>✦ Passionate</li>
              <li>✦ Curious</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400">
              Weaknesses
            </p>
            <ul className="mt-1 space-y-0.5">
              <li>✕ Impatient</li>
              <li>✕ Scared of mold</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t-2 border-dashed border-foreground/20 pt-2 text-[10px] uppercase tracking-widest text-foreground/50">
          No. 001 · MSc @ ETH Zürich
        </div>
      </div>
    </div>
  );
}
