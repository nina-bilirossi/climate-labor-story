import { Link } from "@tanstack/react-router";

/**
 * Minimalist SVG illustration: an Indian worker under a sun and cloud,
 * with a small hut beside them. Three interactive hotspots with styled hover
 * labels link to dedicated context pages. Hover applies a soft contour glow
 * that hugs the shapes (via SVG filter) rather than a square background.
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
        <defs>
          {/* Shape-hugging warm glow */}
          <filter id="warmGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="oklch(0.92 0.16 75)" floodOpacity="0.75" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft cloud gradient */}
          <radialGradient id="cloudGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.99 0.005 240)" />
            <stop offset="100%" stopColor="oklch(0.88 0.02 250)" />
          </radialGradient>

          {/* Warm sun gradient */}
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.16 85)" />
            <stop offset="100%" stopColor="oklch(0.80 0.20 60)" />
          </radialGradient>

          {/* Earthy hut wall gradient */}
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.84 0.06 75)" />
            <stop offset="100%" stopColor="oklch(0.70 0.07 60)" />
          </linearGradient>

          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.68 0.12 65)" />
            <stop offset="100%" stopColor="oklch(0.48 0.10 50)" />
          </linearGradient>
        </defs>

        {/* Horizon */}
        <line
          x1="0"
          y1="332"
          x2="800"
          y2="332"
          stroke="oklch(0.55 0.06 60)"
          strokeWidth="1.5"
          strokeDasharray="3 6"
          opacity="0.6"
        />

        {/* === Climate hotspot: sun + cloud === */}
        <Link to="/climate-shocks" className="group cursor-pointer outline-none">
          <g>
            {/* Hit area only — no visible rect */}
            <rect x="430" y="20" width="340" height="170" fill="transparent" />

            {/* Glow layer: duplicates of the shapes, filtered, fade in on hover */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" filter="url(#warmGlow)">
              <circle cx="615" cy="92" r="38" fill="oklch(0.92 0.18 80)" />
              <path
                d="M 470 130 Q 460 100 490 96 Q 498 76 522 82 Q 540 64 568 78 Q 595 80 590 108 Q 610 122 588 134 Q 580 144 470 140 Z"
                fill="oklch(0.95 0.02 240)"
              />
            </g>

            {/* Visible shapes */}
            <g className="transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 origin-center">
              <circle cx="615" cy="92" r="38" fill="url(#sunGrad)" />
              <circle
                cx="615"
                cy="92"
                r="38"
                fill="none"
                stroke="oklch(0.55 0.18 55)"
                strokeWidth="1.2"
                opacity="0.5"
              />
            </g>

            <g className="transition-transform duration-500 group-hover:translate-x-[-6px] group-hover:-translate-y-2">
              {/* Soft pebble-shaped cloud (single rounded path) */}
              <path
                d="M 470 130 Q 460 100 490 96 Q 498 76 522 82 Q 540 64 568 78 Q 595 80 590 108 Q 610 122 588 134 Q 580 144 470 140 Z"
                fill="url(#cloudGrad)"
                stroke="oklch(0.62 0.03 250)"
                strokeWidth="1.2"
              />
              {/* Soft inner highlight */}
              <path
                d="M 488 100 Q 510 92 530 96"
                fill="none"
                stroke="oklch(1 0 0 / 0.6)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="455"
                y="200"
                width="270"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="590"
                y="219"
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
            <rect x="280" y="190" width="120" height="170" fill="transparent" />

            {/* Glow layer */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" filter="url(#warmGlow)">
              {/* head */}
              <ellipse cx="340" cy="222" rx="16" ry="18" fill="oklch(0.6 0.08 50)" />
              {/* body silhouette */}
              <path
                d="M 318 252 Q 340 244 362 252 Q 372 290 368 332 Q 340 340 312 332 Q 308 290 318 252 Z"
                fill="oklch(0.82 0.10 90)"
              />
              {/* dhoti */}
              <path
                d="M 314 332 Q 340 340 366 332 L 360 372 Q 340 376 320 372 Z"
                fill="oklch(0.92 0.02 90)"
              />
            </g>

            <g className="transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-105 origin-bottom">
              {/* Head */}
              <ellipse
                cx="340"
                cy="222"
                rx="16"
                ry="18"
                fill="oklch(0.62 0.08 50)"
              />
              {/* Turban — rounded dome */}
              <path
                d="M 322 220 Q 340 198 358 220 Q 350 210 340 209 Q 330 210 322 220 Z"
                fill="oklch(0.72 0.16 30)"
              />
              <path
                d="M 322 220 Q 340 212 358 220"
                stroke="oklch(0.45 0.14 30)"
                strokeWidth="1"
                fill="none"
              />

              {/* Body — soft curved tunic, no straight sticks */}
              <path
                d="M 318 252 Q 340 244 362 252 Q 372 290 368 332 Q 340 340 312 332 Q 308 290 318 252 Z"
                fill="oklch(0.84 0.10 90)"
                stroke="oklch(0.40 0.05 60)"
                strokeWidth="1.2"
              />
              {/* Sash */}
              <path
                d="M 312 296 Q 340 304 368 296"
                fill="none"
                stroke="oklch(0.55 0.18 30)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Arms — gentle curves, capsule-thick */}
              <path
                d="M 322 258 Q 308 244 296 230"
                fill="none"
                stroke="oklch(0.62 0.08 50)"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M 358 258 Q 374 282 372 312"
                fill="none"
                stroke="oklch(0.62 0.08 50)"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Dhoti / legs — flowing */}
              <path
                d="M 314 332 Q 340 340 366 332 L 360 372 Q 340 376 320 372 Z"
                fill="oklch(0.94 0.02 90)"
                stroke="oklch(0.40 0.05 60)"
                strokeWidth="1.1"
              />
              <path
                d="M 340 340 L 340 372"
                stroke="oklch(0.40 0.05 60)"
                strokeWidth="0.8"
              />
            </g>

            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="215"
                y="388"
                width="250"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="340"
                y="407"
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
            <rect x="110" y="210" width="170" height="140" fill="transparent" />

            {/* Glow layer */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" filter="url(#warmGlow)">
              <path
                d="M 130 282 Q 195 222 260 282 Q 258 286 250 286 L 140 286 Q 132 286 130 282 Z"
                fill="oklch(0.6 0.12 60)"
              />
              <path
                d="M 150 286 Q 150 282 156 282 L 234 282 Q 240 282 240 286 L 240 330 Q 240 336 234 336 L 156 336 Q 150 336 150 330 Z"
                fill="oklch(0.78 0.06 70)"
              />
            </g>

            <g className="transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-105 origin-bottom">
              {/* Roof — rounded thatched dome */}
              <path
                d="M 130 282 Q 195 222 260 282 Q 258 286 250 286 L 140 286 Q 132 286 130 282 Z"
                fill="url(#roofGrad)"
                stroke="oklch(0.35 0.06 50)"
                strokeWidth="1.2"
              />
              {/* Thatch hints — curved, no sharp ticks */}
              <path
                d="M 160 280 Q 170 260 178 248 M 190 278 Q 195 250 198 232 M 220 280 Q 215 256 210 240"
                stroke="oklch(0.40 0.08 55)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.7"
              />

              {/* Walls — rounded corners */}
              <path
                d="M 150 286 Q 150 282 156 282 L 234 282 Q 240 282 240 286 L 240 330 Q 240 336 234 336 L 156 336 Q 150 336 150 330 Z"
                fill="url(#wallGrad)"
                stroke="oklch(0.35 0.04 50)"
                strokeWidth="1.2"
              />
              {/* Door — arched */}
              <path
                d="M 184 336 L 184 308 Q 184 296 195 296 Q 206 296 206 308 L 206 336 Z"
                fill="oklch(0.28 0.04 40)"
              />
              {/* Window — round */}
              <circle
                cx="165"
                cy="306"
                r="6"
                fill="oklch(0.40 0.06 60)"
                stroke="oklch(0.25 0.03 40)"
                strokeWidth="1"
              />
              <circle
                cx="225"
                cy="306"
                r="6"
                fill="oklch(0.40 0.06 60)"
                stroke="oklch(0.25 0.03 40)"
                strokeWidth="1"
              />
            </g>

            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="125"
                y="388"
                width="140"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="195"
                y="407"
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

        {/* Grass tufts — soft curls */}
        <g stroke="oklch(0.50 0.10 130)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M 80 332 Q 78 324 82 318 M 86 332 Q 88 326 92 322" />
          <path d="M 420 332 Q 418 324 422 318 M 426 332 Q 428 326 432 322" />
          <path d="M 700 332 Q 698 324 702 318 M 706 332 Q 708 326 712 322" />
        </g>
      </svg>
    </div>
  );
}
