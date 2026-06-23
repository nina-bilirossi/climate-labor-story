import { Link } from "@tanstack/react-router";

/**
 * Minimalist SVG illustration: an Indian worker under a sun and cloud,
 * with a small hut beside them and a tuft of grass nearby. Four interactive
 * hotspots with styled hover labels link to dedicated context pages. On hover,
 * the shapes lift slightly and gain a soft faded-white contour glow that hugs
 * their outlines.
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
          {/* Shape-hugging soft white contour glow */}
          <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feFlood floodColor="oklch(1 0 0)" floodOpacity="0.85" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
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
            <rect x="430" y="20" width="340" height="170" fill="transparent" />

            {/* Glow layer: white contour, fades in on hover */}
            <g
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-translate-y-2 transition-transform"
              filter="url(#whiteGlow)"
            >
              <circle cx="615" cy="92" r="34" fill="oklch(1 0 0)" />
              <ellipse cx="500" cy="120" rx="28" ry="16" fill="oklch(1 0 0)" />
              <ellipse cx="525" cy="110" rx="32" ry="20" fill="oklch(1 0 0)" />
              <ellipse cx="558" cy="118" rx="28" ry="16" fill="oklch(1 0 0)" />
            </g>

            {/* Visible shapes — original simple design */}
            <g className="transition-transform duration-500 group-hover:-translate-y-2">
              {/* Sun */}
              <circle cx="615" cy="92" r="34" fill="oklch(0.88 0.16 80)" />
              {/* Sun rays */}
              <g
                stroke="oklch(0.85 0.18 75)"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="615" y1="40" x2="615" y2="52" />
                <line x1="615" y1="132" x2="615" y2="144" />
                <line x1="563" y1="92" x2="575" y2="92" />
                <line x1="655" y1="92" x2="667" y2="92" />
                <line x1="578" y1="55" x2="586" y2="63" />
                <line x1="644" y1="121" x2="652" y2="129" />
                <line x1="578" y1="129" x2="586" y2="121" />
                <line x1="644" y1="63" x2="652" y2="55" />
              </g>

              {/* Cloud — three ellipses */}
              <ellipse cx="500" cy="120" rx="28" ry="16" fill="oklch(0.95 0.01 240)" />
              <ellipse cx="525" cy="110" rx="32" ry="20" fill="oklch(0.97 0.01 240)" />
              <ellipse cx="558" cy="118" rx="28" ry="16" fill="oklch(0.95 0.01 240)" />
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
            <g
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-translate-y-3 transition-transform"
              filter="url(#whiteGlow)"
            >
              <circle cx="340" cy="225" r="14" fill="oklch(1 0 0)" />
              <path d="M 326 215 Q 340 200 354 215 L 354 222 L 326 222 Z" fill="oklch(1 0 0)" />
              <rect x="322" y="240" width="36" height="60" rx="4" fill="oklch(1 0 0)" />
              <rect x="320" y="298" width="40" height="40" rx="3" fill="oklch(1 0 0)" />
              <line x1="322" y1="252" x2="300" y2="232" stroke="oklch(1 0 0)" strokeWidth="8" strokeLinecap="round" />
              <line x1="358" y1="252" x2="378" y2="280" stroke="oklch(1 0 0)" strokeWidth="8" strokeLinecap="round" />
              <line x1="378" y1="280" x2="386" y2="248" stroke="oklch(1 0 0)" strokeWidth="3" strokeLinecap="round" />
            </g>

            <g className="transition-transform duration-500 group-hover:-translate-y-3">
              {/* Head */}
              <circle cx="340" cy="225" r="14" fill="oklch(0.62 0.08 50)" />
              {/* Turban */}
              <path
                d="M 326 215 Q 340 200 354 215 L 354 222 L 326 222 Z"
                fill="oklch(0.72 0.16 30)"
              />
              <line
                x1="326"
                y1="220"
                x2="354"
                y2="220"
                stroke="oklch(0.45 0.14 30)"
                strokeWidth="1"
              />

              {/* Body / kurta */}
              <rect
                x="322"
                y="240"
                width="36"
                height="60"
                rx="4"
                fill="oklch(0.84 0.10 90)"
                stroke="oklch(0.40 0.05 60)"
                strokeWidth="1"
              />
              {/* Sash */}
              <line
                x1="322"
                y1="285"
                x2="358"
                y2="285"
                stroke="oklch(0.55 0.18 30)"
                strokeWidth="3"
              />

              {/* Arms */}
              <line
                x1="322"
                y1="252"
                x2="300"
                y2="232"
                stroke="oklch(0.62 0.08 50)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <line
                x1="358"
                y1="252"
                x2="378"
                y2="280"
                stroke="oklch(0.62 0.08 50)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Dhoti / legs */}
              <rect
                x="320"
                y="298"
                width="40"
                height="40"
                rx="3"
                fill="oklch(0.94 0.02 90)"
                stroke="oklch(0.40 0.05 60)"
                strokeWidth="1"
              />
              <line
                x1="340"
                y1="298"
                x2="340"
                y2="338"
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
            <g
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:-translate-y-3 transition-transform"
              filter="url(#whiteGlow)"
            >
              <polygon points="130,286 195,232 260,286" fill="oklch(1 0 0)" />
              <rect x="150" y="286" width="90" height="50" fill="oklch(1 0 0)" />
              <rect x="184" y="308" width="22" height="28" fill="oklch(1 0 0)" />
              <rect x="160" y="300" width="12" height="10" fill="oklch(1 0 0)" />
              <rect x="218" y="300" width="12" height="10" fill="oklch(1 0 0)" />
            </g>

            <g className="transition-transform duration-500 group-hover:-translate-y-3">
              {/* Roof */}
              <polygon
                points="130,286 195,232 260,286"
                fill="oklch(0.55 0.10 55)"
                stroke="oklch(0.35 0.06 50)"
                strokeWidth="1"
              />
              {/* Thatch hints */}
              <g stroke="oklch(0.40 0.08 55)" strokeWidth="0.8" opacity="0.7">
                <line x1="160" y1="280" x2="170" y2="248" />
                <line x1="190" y1="280" x2="195" y2="236" />
                <line x1="220" y1="280" x2="215" y2="246" />
              </g>

              {/* Walls */}
              <rect
                x="150"
                y="286"
                width="90"
                height="50"
                fill="oklch(0.78 0.06 70)"
                stroke="oklch(0.35 0.04 50)"
                strokeWidth="1"
              />
              {/* Door */}
              <rect
                x="184"
                y="308"
                width="22"
                height="28"
                fill="oklch(0.28 0.04 40)"
              />
              {/* Windows */}
              <rect
                x="160"
                y="300"
                width="12"
                height="10"
                fill="oklch(0.40 0.06 60)"
                stroke="oklch(0.25 0.03 40)"
                strokeWidth="0.8"
              />
              <rect
                x="218"
                y="300"
                width="12"
                height="10"
                fill="oklch(0.40 0.06 60)"
                stroke="oklch(0.25 0.03 40)"
                strokeWidth="0.8"
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

        {/* Grass tufts */}
        <g stroke="oklch(0.50 0.10 130)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="80" y1="332" x2="82" y2="322" />
          <line x1="86" y1="332" x2="88" y2="324" />
          <line x1="700" y1="332" x2="702" y2="322" />
          <line x1="706" y1="332" x2="708" y2="324" />
        </g>

        {/* === Grass hotspot === */}
        <Link to="/grass" className="group cursor-pointer outline-none">
          <g>
            <rect x="380" y="315" width="130" height="65" fill="transparent" pointerEvents="all" />

            {/* Hover label */}
            <g className="transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              <rect
                x="380"
                y="350"
                width="130"
                height="30"
                rx="15"
                fill="oklch(0.18 0.04 255 / 0.85)"
              />
              <text
                x="445"
                y="369"
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-sans)"
                fontWeight="500"
                fill="oklch(0.97 0.02 80)"
                letterSpacing="0.02em"
              >
                More about grass
              </text>
            </g>

            {/* Visible grass */}
            <g
              stroke="oklch(0.50 0.10 130)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="transition-transform duration-500 group-hover:-translate-y-2"
            >
              <line x1="420" y1="332" x2="422" y2="322" />
              <line x1="426" y1="332" x2="428" y2="324" />
            </g>
          </g>
        </Link>

      </svg>
    </div>
  );
}
