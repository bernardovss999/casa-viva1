/* Line-art brand marks inspired by the Casa Viva Itacoá logo:
   the little house, the Itacoatiara rock (Costão) and the sea. */

type P = { className?: string; strokeWidth?: number };

export const Emblem = ({ className = "", strokeWidth = 2.2 }: P) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {/* arch frame */}
    <path d="M18 110V52a42 42 0 0 1 84 0v58Z" />
    {/* sun */}
    <circle cx="78" cy="40" r="9" />
    {/* rocks */}
    <path d="M26 82c4-22 10-30 18-30 7 0 8 12 12 14 5-12 11-20 18-18 8 2 14 18 20 34" />
    <path d="M44 52c1 8-1 18-4 26M74 48c-3 8-3 20 0 30" />
    {/* house */}
    <path d="M30 96V84l10-8 10 8v12Z" />
    <path d="M38 96v-6h4v6" />
    {/* waves */}
    <path d="M18 100c8-4 14-4 22 0s14 4 22 0 14-4 22 0 12 4 18 1" />
    <path d="M24 106c6-3 11-3 17 0s11 3 17 0 11-3 17 0 11 3 17 0" />
  </svg>
);

export const Sparkle = ({ className = "" }: P) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden>
    <path d="M20 0c1 11 4 16 20 20-16 4-19 9-20 20-1-11-4-16-20-20C16 16 19 11 20 0Z" />
  </svg>
);

const base = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const IconFood = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base} aria-hidden>
    <path d="M8 36h48a24 24 0 0 1-48 0Z" /><path d="M4 36h56" />
    <path d="M24 26c0-4 4-4 4-8s-4-4-4-8M34 26c0-4 4-4 4-8s-4-4-4-8" />
  </svg>
);
export const IconMusic = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base} aria-hidden>
    <path d="M24 46V12l28-6v34" /><circle cx="17" cy="46" r="7" /><circle cx="45" cy="40" r="7" /><path d="M24 22l28-6" />
  </svg>
);
export const IconArt = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base} aria-hidden>
    <path d="M32 6C16 6 6 18 6 30c0 14 12 22 20 18 4-2 2-8 6-10s12 4 18 0 8-8 8-14C58 14 46 6 32 6Z" />
    <circle cx="20" cy="24" r="3" /><circle cx="32" cy="16" r="3" /><circle cx="44" cy="22" r="3" />
  </svg>
);
export const IconZen = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base} aria-hidden>
    <circle cx="32" cy="12" r="5" /><path d="M32 18v16M18 28l14 6 14-6" />
    <path d="M10 50c8-8 14-10 22-10s14 2 22 10M10 50h44" />
  </svg>
);
export const IconCake = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} {...base} aria-hidden>
    <path d="M10 56V34h44v22ZM6 56h52M10 42c6 4 10 4 14 0s10-4 14 0 10 4 16 0" />
    <path d="M22 34v-8M32 34v-8M42 34v-8M22 20v-2M32 20v-2M42 20v-2" />
  </svg>
);
