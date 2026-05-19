import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

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
  // Cracks draw on as drought intensifies — stroke dashoffset trick
  const cracksProgress = useTransform(p, [0.12, 0.42], [1, 0]);
  const cracksWidth = useTransform(p, [0.15, 0.45], [1.5, 4]);


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
          {/* Cracks */}
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            style={{ opacity: cracksOpacity }}
          >
            <g stroke="oklch(0.18 0.04 50)" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M 100 20 L 180 90 L 160 180 L 240 260" />
              <path d="M 400 0 L 420 80 L 380 160 L 460 240 L 430 380" />
              <path d="M 700 30 L 740 110 L 700 200 L 780 290" />
              <path d="M 880 0 L 860 70 L 920 140 L 880 230" />
              <path d="M 250 100 L 320 160" />
              <path d="M 540 60 L 600 130 L 560 220" />
            </g>
          </motion.svg>
        </motion.div>

        {/* Flood water rising */}
        <motion.div
          className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden"
          style={{ height: floodHeight, opacity: floodOpacity }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.30 0.06 245 / 0.85) 0%, oklch(0.18 0.07 250) 40%, oklch(0.10 0.06 255) 100%)",
            }}
          />
          {/* Water surface highlight */}
          <div
            className="absolute inset-x-0 top-0 h-3"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.85 0.04 230 / 0.5), transparent)",
            }}
          />
          {/* Ripples on the surface */}
          <motion.div
            className="absolute inset-x-0 top-0 h-10"
            style={{
              opacity: ripplesOpacity,
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0, transparent 18px, oklch(0.85 0.04 230 / 0.35) 18px, oklch(0.85 0.04 230 / 0.35) 19px)",
            }}
          />
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
              <em className="text-[color:var(--sun)] not-italic font-normal italic">informality</em>{" "}
              in the Indian labor market?
            </h1>
          </div>
        </motion.div>

        {/* Scroll hint, fades early */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/70"
          style={{ opacity: useTransform(p, [0, 0.05], [1, 0]) }}
        >
          Scroll
        </motion.div>
      </div>
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

