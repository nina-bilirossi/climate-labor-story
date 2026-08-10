import { ReactNode } from "react";

const sun = "var(--sun)";

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 96 72" className="h-20 w-24 shrink-0" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function Person({ x, y, s = 1, filled = false }: { x: number; y: number; s?: number; filled?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="0" r="4" fill={filled ? sun : "none"} stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M -6 18 C -6 8 -3 5 0 5 C 3 5 6 8 6 18 Z"
        fill={filled ? sun : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </g>
  );
}

/** 1. General population */
export function IconGeneral() {
  return (
    <Frame>
      {[14, 32, 50, 68, 84].map((x, i) => (
        <Person key={x} x={x} y={22} filled={i % 2 === 0} />
      ))}
      <line x1="8" y1="60" x2="88" y2="60" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </Frame>
  );
}

/** 2. High vs low income states */
export function IconIncome({ highlight = "high" }: { highlight?: "high" | "low" }) {
  const leftFill = highlight === "high" ? sun : "currentColor";
  const leftFillOpacity = highlight === "high" ? undefined : 0.25;
  const rightFill = highlight === "low" ? sun : "currentColor";
  const rightFillOpacity = highlight === "low" ? undefined : 0.25;
  return (
    <Frame>
      <rect
        x="12"
        y="20"
        width="26"
        height="34"
        rx="3"
        fill={leftFill}
        fillOpacity={leftFillOpacity}
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="58"
        y="40"
        width="26"
        height="14"
        rx="3"
        fill={rightFill}
        fillOpacity={rightFillOpacity}
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <text x="25" y="15" textAnchor="middle" fontSize="11" fill="currentColor" opacity={highlight === "high" ? 1 : 0.3}>
        ₹₹
      </text>
      <text x="71" y="35" textAnchor="middle" fontSize="11" fill="currentColor" opacity={highlight === "low" ? 1 : 0.3}>
        ₹
      </text>
      <line x1="6" y1="58" x2="90" y2="58" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </Frame>
  );
}


/** 3. High vs low agricultural employment */
export function IconAgriculture({ highlight = "high" }: { highlight?: "high" | "low" }) {
  const dim = highlight === "low";
  const fill = dim ? "currentColor" : sun;
  const fillOpacity = dim ? 0.25 : undefined;
  return (
    <Frame>
      <g transform="translate(48 56)">
        {/* Stem */}
        <path d="M 0 0 Q -2 -18 0 -36" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M 0 -10 Q -12 -22 -18 -14 Q -10 -16 0 -10" fill={fill} fillOpacity={fillOpacity} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M 0 -18 Q 14 -30 20 -20 Q 10 -24 0 -18" fill={fill} fillOpacity={fillOpacity} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        {/* Rice panicle */}
        <g transform="translate(0 -38)">
          {[0, 1, 2, 3, 4].map((i) => {
            const y = i * 3.5;
            const angle = i % 2 === 0 ? -28 : 28;
            return (
              <g key={i} transform={`translate(0 ${y}) rotate(${angle})`}>
                <ellipse cx="0" cy="0" rx="2.2" ry="1.4" fill={fill} fillOpacity={fillOpacity} stroke="currentColor" strokeWidth="1.2" />
              </g>
            );
          })}
        </g>
      </g>
      <line x1="8" y1="60" x2="88" y2="60" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </Frame>
  );
}

/** 4. Male vs female */
export function IconGender({ highlight = "male" }: { highlight?: "male" | "female" }) {
  return (
    <Frame>
      <g transform="translate(28 20)">
        <circle cx="0" cy="6" r="10" fill={highlight === "male" ? sun : "none"} stroke="currentColor" strokeWidth="1.6" />
        <path d="M 7 -1 L 15 -9 M 9 -9 h 6 v 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g transform="translate(66 18)">
        <circle cx="0" cy="6" r="10" fill={highlight === "female" ? sun : "none"} stroke="currentColor" strokeWidth="1.6" />
        <path d="M 0 16 v 12 M -6 22 h 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <line x1="6" y1="62" x2="90" y2="62" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </Frame>
  );
}

/** 5. Rural vs urban */
export function IconRuralUrban() {
  return (
    <Frame>
      <path d="M 8 52 V 34 L 22 24 L 36 34 V 52 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="18" y="42" width="8" height="10" fill={sun} stroke="currentColor" strokeWidth="1.1" />
      <rect x="56" y="18" width="14" height="34" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="74" y="28" width="12" height="24" fill={sun} stroke="currentColor" strokeWidth="1.4" />
      <g opacity="0.7">
        {[24, 32, 40].map((y) => (
          <line key={y} x1="59" y1={y} x2="67" y2={y} stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
      <line x1="6" y1="56" x2="90" y2="56" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </Frame>
  );
}

interface RowProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function ResultGroupRow({ icon, title, children }: RowProps) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-t border-foreground/10 py-7 first:border-t-0 first:pt-0">
      <div className="shrink-0 text-foreground/80">{icon}</div>
      <div className="min-w-0">
        <h3 className="font-display text-xl leading-tight">{title}</h3>
        <div className="mt-2 space-y-3 text-foreground/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
