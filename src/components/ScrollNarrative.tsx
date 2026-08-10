import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


/**
 * The opening cinematic narrative.
 * One ~600vh tall scroller with a sticky stage. Scroll progress drives
 * five overlapping acts: sun → drought heat → soil cracking → clouds → rain.
 */
export function ScrollNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // Sky: warm sun → harsh white-hot → grey clouds → deep storm
  const skyTop = useTransform(p, [0, 0.2, 0.45, 0.6, 1], [
    "oklch(0.92 0.16 90)",
    "oklch(0.86 0.20 70)",
    "oklch(0.70 0.08 80)",
    "oklch(0.45 0.04 250)",
    "oklch(0.18 0.06 255)",
  ]);
  const skyBottom = useTransform(p, [0, 0.2, 0.45, 0.6, 1], [
    "oklch(0.82 0.17 75)",
    "oklch(0.78 0.18 55)",
    "oklch(0.55 0.05 70)",
    "oklch(0.32 0.06 255)",
    "oklch(0.10 0.05 255)",
  ]);

  // Sun: large warm → intense white blaze → fades behind clouds
  const sunOpacity = useTransform(p, [0, 0.35, 0.5, 0.6], [1, 1, 0.4, 0]);
  const sunScale = useTransform(p, [0, 0.35], [1, 1.6]);
  const sunY = useTransform(p, [0, 0.35], ["10%", "-5%"]);
  const sunBlur = useTransform(p, [0, 0.35], [0, 12]);
  const sunFilter = useTransform(sunBlur, (b) => `blur(${b}px)`);

  // Heat haze
  const heatOpacity = useTransform(p, [0.1, 0.3, 0.5], [0, 0.6, 0]);

  // Soil: rises from bottom, then sinks (drought lowering ground)
  const soilY = useTransform(p, [0, 0.25, 0.45, 1], ["0%", "8%", "18%", "22%"]);
  const soilHue = useTransform(p, [0, 0.45], ["oklch(0.45 0.08 60)", "oklch(0.28 0.04 45)"]);
  const cracksOpacity = useTransform(p, [0.15, 0.4], [0, 1]);
  // Cracks draw on as drought intensifies (0 → 1 via framer pathLength)
  const cracksDraw = useTransform(p, [0.15, 0.42], [0, 1]);



  // Clouds: drift in fast around 0.4 → 0.6, three parallax layers
  const cloudsFarX = useTransform(p, [0.38, 0.62], ["-40%", "0%"]);
  const cloudsMidX = useTransform(p, [0.38, 0.62], ["-60%", "0%"]);
  const cloudsNearX = useTransform(p, [0.38, 0.62], ["-90%", "0%"]);
  const cloudsOpacity = useTransform(p, [0.38, 0.55, 0.95, 1], [0, 1, 1, 0.4]);
  // Cloud color shifts from pale grey to bruised storm
  const cloudTint = useTransform(p, [0.4, 0.55, 0.7], [
    "oklch(0.88 0.02 240)",
    "oklch(0.62 0.03 250)",
    "oklch(0.32 0.05 255)",
  ]);

  // Rain: pours from 0.6 → 0.85, stops by 0.92
  const rainOpacity = useTransform(p, [0.55, 0.7, 0.88, 0.95], [0, 1, 1, 0]);

  // Flood: water accumulates on the soil and rises to cover the screen
  const floodHeight = useTransform(p, [0.65, 0.78, 0.92], ["0vh", "20vh", "100vh"]);
  const floodOpacity = useTransform(p, [0.63, 0.7, 0.95, 1], [0, 0.95, 0.95, 0.85]);
  const ripplesOpacity = useTransform(p, [0.65, 0.78, 0.9], [0, 0.6, 0]);

  // Question reveal: appears at the very end (0.9 → 1)
  const questionOpacity = useTransform(p, [0.88, 0.97], [0, 1]);
  const questionY = useTransform(p, [0.88, 0.97], [40, 0]);

  // Final dim wash
  const dimOpacity = useTransform(p, [0.85, 1], [0, 0.5]);

  const drops = useMemo(
    () =>
      Array.from({ length: 120 }).map((_, i) => ({
        left: Math.random() * 100,
        height: 40 + Math.random() * 120,
        delay: Math.random() * 1.2,
        dur: 0.5 + Math.random() * 0.6,
      })),
    [],
  );

  return (
    <section ref={ref} className="relative" style={{ height: "650vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sky gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: useTransform(
              [skyTop, skyBottom] as never,
              ([a, b]: string[]) => `linear-gradient(to bottom, ${a} 0%, ${b} 100%)`,
            ),
          }}
        />

        {/* Sun */}
        <motion.div
          className="absolute left-1/2 top-[20%] -translate-x-1/2 sun-pulse"
          style={{ opacity: sunOpacity, scale: sunScale, y: sunY, filter: sunFilter }}
        >
          <div
            className="h-[28rem] w-[28rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.98 0.12 95) 0%, oklch(0.92 0.18 80) 35%, oklch(0.85 0.20 60 / 0) 70%)",
            }}
          />
        </motion.div>

        {/* Heat haze */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            opacity: heatOpacity,
            background:
              "repeating-linear-gradient(180deg, transparent 0, transparent 6px, oklch(1 0 0 / 0.04) 6px, oklch(1 0 0 / 0.04) 7px)",
          }}
        />

        {/* Clouds — three parallax layers of soft SVG puffs */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: cloudsOpacity }}
        >
          <motion.div style={{ color: cloudTint }} className="absolute inset-0">
            {/* Far layer — large, low contrast, soft */}
            <motion.div
              className="absolute left-0 top-[6%] w-[180%] opacity-70"
              style={{ x: cloudsFarX, filter: "blur(14px)" }}
            >
              <CloudRow seed={0} count={4} scale={1.3} />
            </motion.div>
            {/* Mid layer — denser, slightly sharper */}
            <motion.div
              className="absolute left-0 top-[14%] w-[180%] opacity-85"
              style={{ x: cloudsMidX, filter: "blur(6px)" }}
            >
              <CloudRow seed={11} count={5} scale={1} />
            </motion.div>
            {/* Near layer — crisp foreground wisps */}
            <motion.div
              className="absolute left-0 top-[2%] w-[180%]"
              style={{ x: cloudsNearX, filter: "blur(2px)" }}
            >
              <CloudRow seed={22} count={3} scale={0.75} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Rain */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: rainOpacity }}>
          {drops.map((d, i) => (
            <span
              key={i}
              className="rain-drop"
              style={{
                left: `${d.left}%`,
                height: `${d.height}px`,
                animationDuration: `${d.dur}s`,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}
        </motion.div>

        {/* Soil */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[38vh]"
          style={{ y: soilY, backgroundColor: soilHue }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 0%, oklch(0.55 0.08 60) 0%, transparent 50%), radial-gradient(ellipse at 70% 10%, oklch(0.40 0.06 55) 0%, transparent 60%)",
            }}
          />
          {/* Cracks — jagged, branching, draw-on as drought deepens */}
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            style={{ opacity: cracksOpacity }}
          >
            <defs>
              <linearGradient id="crack-stroke" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.10 0.03 40)" />
                <stop offset="100%" stopColor="oklch(0.04 0.02 30)" />
              </linearGradient>
            </defs>
            {/* Soft dark halo under each major crack for depth */}
            <motion.g
              stroke="oklch(0 0 0 / 0.35)"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: cracksDraw }}
            >
              <path d="M 80 0 L 110 40 L 90 90 L 130 150 L 100 220 L 150 290 L 120 390" />
              <path d="M 560 0 L 585 55 L 545 115 L 605 170 L 565 240 L 625 320 L 590 400" />
              <path d="M 800 0 L 820 65 L 780 135 L 830 205 L 790 285 L 845 370" />
            </motion.g>
            <g
              stroke="url(#crack-stroke)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {[
                "M 80 0 L 110 40 L 90 90 L 130 150 L 100 220 L 150 290 L 120 390",
                "M 130 150 L 200 175 L 245 230",
                "M 245 230 L 275 295 L 255 380",
                "M 320 0 L 345 60 L 310 115 L 365 175 L 330 245 L 385 325",
                "M 365 175 L 435 185 L 475 235 L 515 225",
                "M 475 235 L 495 305 L 465 395",
                "M 560 0 L 585 55 L 545 115 L 605 170 L 565 240 L 625 320 L 590 400",
                "M 605 170 L 675 180 L 710 230",
                "M 710 230 L 740 295 L 720 380",
                "M 800 0 L 820 65 L 780 135 L 830 205 L 790 285 L 845 370",
                "M 830 205 L 895 215 L 935 265 L 975 255",
              ].map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  strokeWidth={i % 3 === 0 ? 3.5 : 1.8}
                  style={{ pathLength: cracksDraw }}
                />
              ))}
            </g>
          </motion.svg>
        </motion.div>

        {/* Flood — water pools on the soil, rises with an animated wavy surface */}
        <motion.div
          className="absolute inset-x-0 bottom-0 pointer-events-none overflow-visible"
          style={{ height: floodHeight, opacity: floodOpacity }}
        >
          {/* Body of water */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.42 0.09 235 / 0.92) 0%, oklch(0.25 0.08 245) 35%, oklch(0.12 0.06 255) 100%)",
            }}
          />
          {/* Caustic shimmer */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-screen"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent 0 22px, oklch(0.85 0.05 230 / 0.25) 22px 24px), repeating-linear-gradient(65deg, transparent 0 30px, oklch(0.75 0.06 220 / 0.18) 30px 32px)",
            }}
          />
          {/* Animated wave surface, sitting just above the water body */}
          <svg
            className="absolute left-0 right-0 -top-6 w-full h-12 overflow-visible"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave-foam" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.95 0.03 220 / 0.9)" />
                <stop offset="100%" stopColor="oklch(0.55 0.08 235 / 0)" />
              </linearGradient>
              <linearGradient id="wave-body" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.48 0.09 235)" />
                <stop offset="100%" stopColor="oklch(0.25 0.08 245)" />
              </linearGradient>
            </defs>
            {/* Back wave, slower */}
            <g className="wave-drift-slow">
              <path
                d="M -1440 30 Q -1260 10 -1080 30 T -720 30 T -360 30 T 0 30 T 360 30 T 720 30 T 1080 30 T 1440 30 T 1800 30 T 2160 30 T 2520 30 T 2880 30 V 80 H -1440 Z"
                fill="url(#wave-body)"
                opacity="0.7"
              />
            </g>
            {/* Front wave + foam line, faster */}
            <g className="wave-drift-fast">
              <path
                d="M -1440 36 Q -1260 16 -1080 36 T -720 36 T -360 36 T 0 36 T 360 36 T 720 36 T 1080 36 T 1440 36 T 1800 36 T 2160 36 T 2520 36 T 2880 36 V 80 H -1440 Z"
                fill="url(#wave-body)"
              />
              <path
                d="M -1440 36 Q -1260 16 -1080 36 T -720 36 T -360 36 T 0 36 T 360 36 T 720 36 T 1080 36 T 1440 36 T 1800 36 T 2160 36 T 2520 36 T 2880 36"
                fill="none"
                stroke="url(#wave-foam)"
                strokeWidth="2.5"
              />
            </g>
          </svg>
          {/* Rising bubbles */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ opacity: ripplesOpacity }}
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="bubble"
                style={{
                  left: `${(i * 73) % 100}%`,
                  width: `${4 + (i % 4) * 3}px`,
                  height: `${4 + (i % 4) * 3}px`,
                  animationDuration: `${3 + (i % 5)}s`,
                  animationDelay: `${(i % 6) * 0.4}s`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Final dim wash */}
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: dimOpacity }} />
        {/* Research question */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{ opacity: questionOpacity, y: questionY }}
        >
          <div className="max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)] mb-6">
              Research question
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              What are the effects of droughts and floods on{" "}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <em className="text-[color:var(--sun)] not-italic font-normal italic border-b border-[color:var(--sun)]/50 transition-colors hover:border-[color:var(--sun)]">
                      informality
                    </em>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="max-w-xs text-sm leading-relaxed"
                  >
                    Informality can be defined in many ways. A simple description (for now) is that it gathers all activities that are in law or practice not sufficiently covered by formal agreements. Think: a food delivery worker with no social security, a contractor for “odd jobs”… more on this later.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {" "}
              in the Indian labor market?
            </h1>
          </div>
        </motion.div>

        {/* Scroll hint, fades early */}
        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 text-sm md:text-base uppercase tracking-[0.3em] text-foreground/80"
          style={{ opacity: useTransform(p, [0, 0.05], [1, 0]) }}
        >
          Scroll down
        </motion.div>
      </div>

      {/* Anchor for the research question — placed where the question becomes visible so hash links land on the final frame */}
      <div id="research-question" className="absolute top-[88%] left-0 h-1 w-full" aria-hidden="true" />
    </section>
  );
}

/**
 * A horizontal row of organically-shaped clouds built from overlapping ellipses.
 * Deterministic per `seed` so layers don't reshuffle on re-render.
 */
function CloudRow({ seed, count, scale }: { seed: number; count: number; scale: number }) {
  // Simple seeded PRNG so layouts are stable
  const rand = (n: number) => {
    const x = Math.sin(seed * 9301 + n * 49297) * 233280;
    return x - Math.floor(x);
  };
  const clouds = Array.from({ length: count }).map((_, i) => {
    const left = (i / count) * 100 + rand(i) * 8;
    const top = rand(i + 100) * 40;
    const w = (16 + rand(i + 200) * 14) * scale;
    return { left, top, w, puffs: 5 + Math.floor(rand(i + 300) * 4) };
  });

  return (
    <div className="relative h-[40vh] w-full">
      {clouds.map((c, i) => (
        <svg
          key={i}
          className="absolute"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            width: `${c.w}rem`,
            height: `${c.w * 0.55}rem`,
          }}
          viewBox="0 0 200 110"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <defs>
            <radialGradient id={`cg-${seed}-${i}`} cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="60%" stopColor="currentColor" stopOpacity="0.85" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g fill={`url(#cg-${seed}-${i})`}>
            {/* Base flat bottom */}
            <ellipse cx="100" cy="78" rx="92" ry="20" />
            {/* Stacked puffs forming the top */}
            <ellipse cx="55" cy="62" rx="32" ry="26" />
            <ellipse cx="95" cy="45" rx="42" ry="36" />
            <ellipse cx="140" cy="55" rx="36" ry="30" />
            <ellipse cx="170" cy="68" rx="24" ry="20" />
            <ellipse cx="30" cy="70" rx="22" ry="18" />
          </g>
        </svg>
      ))}
    </div>
  );
}

