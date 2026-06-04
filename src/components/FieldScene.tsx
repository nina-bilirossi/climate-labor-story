import { Link } from "@tanstack/react-router";

/**
 * Minimalist SVG illustration: an Indian worker under a sun and cloud,
 * with a small hut beside them. Three interactive hotspots with styled hover
 * labels link to dedicated context pages.
 */
export function FieldScene() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-3xl">
      <svg
        viewBox="0 0 800 420"
        className="w-full h-auto"
        role="img"
        aria-label="A worker in the field beneath sun and cloud, beside a small hut"
      >
        {/* Ground line */}
        <line
          x1="0"
          y1="330"
          x2="800"
          y2="330"
          stroke="oklch(0.55 0.06 60)"
          strokeWidth="1.5"
          strokeDasharray="3 6"
        />

        {/* === Climate hotspot: sun + cloud === */}
        <Link
          to="/climate-shocks"
          className="group cursor-pointer outline-none"
        >
          <g>
            {/* Glow background */}
            <rect
              x="420"
              y="10"
              width="360"
              height="180"
              rx="24"
              fill="oklch(0.92 0.10 75 / 0)"
              className="transition-all duration-500 group-hover:fill-[oklch(0.92_0.10_75_/_0.10)]"
            />
            {/* invisible hit area */}
            <rect x="430" y="20" width="340" height="160" fill="transparent" />
            {/* Sun */}
            <g className="transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 origin-center">
              <circle
                cx="610"
                cy="90"
                r="42"
                fill="oklch(0.88 0.18 75)"
                className="transition-all duration-300 group-hover:fill-[oklch(0.92_0.20_70)]"
              />
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i / 12) * Math.PI * 2;
                const x1 = 610 + Math.cos(a) * 52;
                const y1 = 90 + Math.sin(a) * 52;
                const x2 = 610 + Math.cos(a) * 66;
                const y2 = 90 + Math.sin(a) * 66;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="oklch(0.85 0.18 70)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </g>
            {/* Cloud */}
            <g
              className="transition-transform duration-500 group-hover:translate-x-[-6px] group-hover:-translate-y-2"
              fill="oklch(0.95 0.01 240)"
              stroke="oklch(0.55 0.03 250)"
              strokeWidth="1.5"
            >
              <ellipse cx="490" cy="120" rx="36" ry="22" />
              <ellipse cx="525" cy="105" rx="30" ry="26" />
              <ellipse cx="560" cy="118" rx="34" ry="22" />
              <rect x="478" y="118" width="100" height="22" rx="11" />
            </g>
            {/* Hover label */}
            <g
              className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            >
              <rect
                x="455"
                y="195"
                width="270"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="590"
                y="214"
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fontWeight="500"
                fill="oklch(0.97 0.02 80)"
                letterSpacing="0.02em"
              >
                More about the climate shocks
              </text>
            </g>
          </g>
        </Link>

        {/* === Worker hotspot === */}
        <Link to="/labor-history" className="group cursor-pointer outline-none">
          <g>
            {/* Glow background */}
            <rect
              x="265"
              y="180"
              width="150"
              height="190"
              rx="24"
              fill="oklch(0.92 0.10 75 / 0)"
              className="transition-all duration-500 group-hover:fill-[oklch(0.92_0.10_75_/_0.10)]"
            />
            <g className="transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-105">
              <rect x="280" y="190" width="120" height="160" fill="transparent" />
              {/* Head (no features) */}
              <circle
                cx="340"
                cy="220"
                r="18"
                fill="oklch(0.55 0.08 50)"
                stroke="oklch(0.25 0.04 40)"
                strokeWidth="1.5"
              />
              {/* Turban / head cloth */}
              <path
                d="M 322 218 Q 340 198 358 218 Q 350 208 340 207 Q 330 208 322 218 Z"
                fill="oklch(0.78 0.14 35)"
                stroke="oklch(0.35 0.08 30)"
                strokeWidth="1.2"
              />
              {/* Body / kurta */}
              <path
                d="M 320 240 Q 340 232 360 240 L 372 320 Q 340 326 308 320 Z"
                fill="oklch(0.82 0.10 90)"
                stroke="oklch(0.30 0.04 60)"
                strokeWidth="1.5"
              />
              {/* Sash */}
              <path
                d="M 308 280 Q 340 286 372 280"
                fill="none"
                stroke="oklch(0.55 0.18 30)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Left arm raised holding tool */}
              <path
                d="M 322 244 L 298 215"
                stroke="oklch(0.55 0.08 50)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Right arm down */}
              <path
                d="M 358 244 L 378 295"
                stroke="oklch(0.55 0.08 50)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Legs (dhoti) */}
              <path
                d="M 320 320 L 318 360 L 332 360 L 340 322"
                fill="oklch(0.92 0.02 90)"
                stroke="oklch(0.30 0.04 60)"
                strokeWidth="1.2"
              />
              <path
                d="M 360 320 L 362 360 L 348 360 L 340 322"
                fill="oklch(0.92 0.02 90)"
                stroke="oklch(0.30 0.04 60)"
                strokeWidth="1.2"
              />
              {/* Sickle */}
              <path
                d="M 298 215 L 285 195"
                stroke="oklch(0.25 0.02 50)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 285 195 Q 270 188 268 175"
                fill="none"
                stroke="oklch(0.70 0.03 240)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="215"
                y="385"
                width="250"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="340"
                y="404"
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fontWeight="500"
                fill="oklch(0.97 0.02 80)"
                letterSpacing="0.02em"
              >
                Indian labor force &amp; informality history
              </text>
            </g>
          </g>
        </Link>

        {/* === Hut hotspot === */}
        <Link to="/informality-context" className="group cursor-pointer outline-none">
          <g>
            {/* Glow background */}
            <rect
              x="95"
              y="210"
              width="190"
              height="140"
              rx="24"
              fill="oklch(0.92 0.10 75 / 0)"
              className="transition-all duration-500 group-hover:fill-[oklch(0.92_0.10_75_/_0.10)]"
            />
            <g className="transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-105">
              <rect x="110" y="220" width="160" height="130" fill="transparent" />
              {/* Roof (thatched) */}
              <path
                d="M 130 280 L 195 230 L 260 280 Z"
                fill="oklch(0.62 0.10 70)"
                stroke="oklch(0.30 0.06 50)"
                strokeWidth="1.5"
              />
              {/* Thatch lines */}
              <path
                d="M 145 273 L 195 235 M 165 273 L 195 245 M 185 273 L 195 255 M 245 273 L 195 235 M 225 273 L 195 245 M 205 273 L 195 255"
                stroke="oklch(0.38 0.07 55)"
                strokeWidth="0.8"
                fill="none"
              />
              {/* Walls */}
              <rect
                x="145"
                y="280"
                width="100"
                height="50"
                fill="oklch(0.80 0.05 70)"
                stroke="oklch(0.30 0.04 50)"
                strokeWidth="1.5"
              />
              {/* Door */}
              <path
                d="M 185 330 L 185 300 Q 195 290 205 300 L 205 330 Z"
                fill="oklch(0.30 0.04 40)"
              />
              {/* Small window */}
              <rect
                x="155"
                y="295"
                width="14"
                height="14"
                fill="oklch(0.40 0.05 50)"
                stroke="oklch(0.25 0.03 40)"
                strokeWidth="1"
              />
            </g>
            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="125"
                y="385"
                width="140"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="195"
                y="404"
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fontWeight="500"
                fill="oklch(0.97 0.02 80)"
                letterSpacing="0.02em"
              >
                More about informality
              </text>
            </g>
          </g>
        </Link>

        {/* A few grass tufts */}
        <g stroke="oklch(0.45 0.10 130)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M 80 332 L 78 322 M 82 332 L 84 324" />
          <path d="M 420 332 L 418 322 M 423 332 L 425 324" />
          <path d="M 700 332 L 698 322 M 702 332 L 704 324" />
        </g>
      </svg>
    </div>
  );
}
