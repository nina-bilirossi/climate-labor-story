import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { FieldScene } from "@/components/FieldScene";
import { SiteFooter } from "@/components/SiteFooter";
import { Cite } from "@/components/Cite";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import roadmapGaps from "@/assets/roadmap-gaps.png";
import roadmapSatellite from "@/assets/roadmap-satellite.png";
import roadmapComputer from "@/assets/roadmap-computer.png";
import roadmapResults from "@/assets/roadmap-results.png";
import roadmapConclusion from "@/assets/roadmap-conclusion.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Climate Shocked Workers — Droughts, Floods & India's Informal Labor" },
      {
        name: "description",
        content:
          "An interactive presentation of master's thesis research on how climate shocks reshape informality in the Indian labor market.",
      },
      { property: "og:title", content: "Climate Shocked Workers" },
      {
        property: "og:description",
        content: "How droughts and floods reshape informality in India's labor market — a scrollable thesis.",
      },
    ],
  }),
  component: Index,
});

type RoadmapStep = {
  num: string;
  title: string;
  shortTitle: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  custom?: "fieldscene";
};

const ROADMAP: RoadmapStep[] = [
  { num: "01", slug: "step-1", shortTitle: "Topic", title: "Learning about the topic", custom: "fieldscene" },
  { num: "02", slug: "step-2", shortTitle: "Research gaps", title: "Figuring out the research gaps", image: roadmapGaps, imageAlt: "Magnifying glass over papers" },
  { num: "03", slug: "step-3", shortTitle: "Plan & data", title: "Laying out the plan and getting the data", image: roadmapSatellite, imageAlt: "Small satellite" },
  { num: "04", slug: "step-4", shortTitle: "Analysis", title: "Running the analysis", image: roadmapComputer, imageAlt: "Laptop and papers" },
  { num: "05", slug: "step-5", shortTitle: "Results", title: "Analysing the results and discussing the mechanisms", image: roadmapResults, imageAlt: "Chart and magnifier" },
  { num: "06", slug: "step-6", shortTitle: "Conclusion", title: "Limitations and Conclusion", image: roadmapConclusion, imageAlt: "Finish flag and papers" },
];

// A set of varied curvy dotted-arrow paths between successive steps.
// Each path goes from a point near the previous box (top) to a point near the next.
const ARROW_PATHS = [
  // 1 -> 2 (down-right, gentle S)
  { d: "M 60 0 C 90 50, 240 30, 260 130", tip: "248,118 262,134 270,116" },
  // 2 -> 3 (down-left, wide swing)
  { d: "M 260 0 C 240 70, 40 50, 40 130", tip: "30,116 38,134 50,118" },
  // 3 -> 4 (down-right, loopy)
  { d: "M 40 0 C 20 40, 320 60, 280 130", tip: "266,118 280,134 288,114" },
  // 4 -> 5 (down-left, sharp curve)
  { d: "M 280 0 C 320 70, -20 40, 30 130", tip: "20,116 30,134 42,116" },
  // 5 -> 6 (down-center, gentle wave)
  { d: "M 30 0 C 80 60, 220 60, 160 130", tip: "148,116 160,134 172,118" },
];

function CurvyArrow({ index }: { index: number }) {
  const a = ARROW_PATHS[index % ARROW_PATHS.length];
  return (
    <div className="pointer-events-none flex justify-center" aria-hidden>
      <svg
        width="320"
        height="140"
        viewBox="0 0 320 140"
        className="text-[color:var(--sun)]/70 -my-6"
      >
        <path
          d={a.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 7"
          strokeLinecap="round"
        />
        <polyline
          points={a.tip}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RoadmapStepCard({ step }: { step: RoadmapStep }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="block w-full max-w-xs cursor-zoom-in rounded-xl border border-border bg-card/40 p-4 text-center transition-all hover:border-[color:var(--sun)] hover:bg-card/70"
          aria-label={`Open: ${step.title}`}
        >
          <div className="text-xs font-mono text-[color:var(--sun)]">{step.num}</div>
          <h3 className="mt-2 font-display text-lg leading-snug">{step.title}</h3>
          <div className="mt-3">
            {step.custom === "fieldscene" ? (
              <div className="pointer-events-none">
                <FieldScene />
              </div>
            ) : (
              <img
                src={step.image}
                alt={step.imageAlt ?? ""}
                width={512}
                height={512}
                loading="lazy"
                className="mx-auto h-32 w-32 object-contain md:h-36 md:w-36"
              />
            )}
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">Click to zoom in</p>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="mt-4 text-center">
          <div className="text-xs font-mono text-[color:var(--sun)]">{step.num}</div>
          <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
          <div className="mt-6">
            {step.custom === "fieldscene" ? (
              <FieldScene />
            ) : (
              <img
                src={step.image}
                alt={step.imageAlt ?? ""}
                width={512}
                height={512}
                className="mx-auto h-72 w-72 object-contain"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


function TopNav({ visible }: { visible: boolean }) {
  const linkBase =
    "whitespace-nowrap rounded px-2 py-1 text-foreground/80 hover:text-[color:var(--sun)]";
  const dropdownLink =
    "block rounded px-3 py-2 text-xs uppercase tracking-[0.2em] text-foreground/80 hover:bg-accent hover:text-[color:var(--sun)]";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 text-xs uppercase tracking-[0.2em]">
        <a href="#top" className={linkBase}>
          Homepage
        </a>

        <span className="text-foreground/30">·</span>

        <div className="group relative flex items-center">
          <button type="button" className={`${linkBase} flex items-center gap-1`}>
            CONTEXT <span aria-hidden>▾</span>
          </button>
          <div className="absolute left-0 top-full z-50 hidden min-w-[12rem] rounded-md border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur group-hover:block">
            <a href="#step-1" className={dropdownLink}>
              Introduction
            </a>
            <a href="#step-2" className={dropdownLink}>
              Research gaps
            </a>
          </div>
        </div>

        <span className="text-foreground/30">·</span>

        <div className="group relative flex items-center">
          <button type="button" className={`${linkBase} flex items-center gap-1`}>
            MY RESEARCH <span aria-hidden>▾</span>
          </button>
          <div className="absolute left-0 top-full z-50 hidden min-w-[12rem] rounded-md border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur group-hover:block">
            <a href="#step-3" className={dropdownLink}>
              Plan and data
            </a>
            <a href="#step-4" className={dropdownLink}>
              Analysis
            </a>
            <a href="#step-5" className={dropdownLink}>
              Results
            </a>
          </div>
        </div>

        <span className="text-foreground/30">·</span>

        <a href="#step-6" className={linkBase}>
          Conclusions
        </a>

        <span className="text-foreground/30">·</span>

        <Link to="/about" className={linkBase}>
          About me
        </Link>
      </div>
    </nav>
  );
}

function Index() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Show nav once the sentinel (placed at end of ScrollNarrative) has scrolled out the top
        setNavVisible(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    obs.observe(el);
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      setNavVisible(rect.top < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main id="top" className="bg-background text-foreground">
      <TopNav visible={navVisible} />
      <ScrollNarrative />
      <div ref={sentinelRef} aria-hidden />


      {/* First things first */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">First things first</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Before diving into any kind of content or definition, let me just say a few words about what this website is
            and its purpose. <br></br>By the time you read this, I will have completed and submitted my master's thesis.
            Seeing how it is going now, the manuscript might well be over 70 pages long. However interesting the
            writing, I do not believe very strongly that anyone who is not grading me might read it. That's a shame
            because it is truly, really, very interesting (not clickbait). Anyway, I decided I would like to share what
            I've learned over the past 6 months in a way that could transmit how captivating this topic has been for me.
            This is the goal of the website. And if you are feeling a bit more academic, the manuscript is available for
            download at the bottom of this page.
            <br></br>Happy exploring!
          </p>
        </div>
      </section>

      {/* Abstract */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Abstract</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            It's a tough world out there. Especially if you as a country was colonized up until the mid-19th century and
            you had to build you labor laws kinda from scratch after independence. Now add to that the fast growing and
            largest-on-earth population, imagine having to get good jobs, social security, and food on the table for
            everyone!! That's crazy. AND climate change is hitting you hard, like hard hard and it's getting hard to
            predict climate shocks, which are also getting more intense by the way. The International Labor Organization
            states that the decrease in the informal share of employment is a necessary condition for India's inclusive
            growth <Cite k="ilo2019informal" />. Informality has been sticky, but may take a turn in the coming years… I
            dive into it and see how it reacts to some climate shocks!
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section id="scene" className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Begin reading</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Climate shocked into informality?</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A master's thesis on how shocks linked to climate change — too little rain, then too much — influence the
            movement of Indian workers.
          </p>

          <div className="mt-16">
            {ROADMAP.map((step, i) => {
              // Horizontal offsets for a wide zig-zag; vertical overlap via negative margin.
              const offsets = ["0", "16rem", "-14rem", "18rem", "-16rem", "4rem"];
              const tx = offsets[i] ?? "0";
              return (
                <div key={step.num} id={step.slug} className="scroll-mt-24">
                  <div
                    className="flex justify-center"
                    style={{ transform: `translateX(${tx})`, marginTop: i === 0 ? 0 : "-2.5rem" }}
                  >
                    <RoadmapStepCard step={step} />
                  </div>
                  {i < ROADMAP.length - 1 && (
                    <div style={{ marginTop: "-1rem", marginBottom: "-1rem" }}>
                      <CurvyArrow index={i} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Appendix note */}
          <p className="mt-16 text-sm text-foreground/60 italic">
            Note: the Appendix is not included on the website. Readers can download the full manuscript for additional
            tables, figures, and methodological notes (e.g. the choice of time lags).
          </p>

          {/* Bonus block */}
          <Link
            to="/reflections"
            className="group mt-10 block rounded-2xl border p-6 transition-all border-[color:var(--sun)]/40 bg-[color:var(--sun)]/10 hover:bg-[color:var(--sun)]/15 hover:border-[color:var(--sun)]"
          >
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[color:var(--sun)]">Bonus</div>
            <h3 className="mt-3 font-display text-2xl">Reflecting on my experience writing the master's thesis</h3>
            <p className="mt-3 text-sm text-foreground/75">A quick dip into my brain.</p>
            <div className="mt-6 text-sm text-foreground/70 group-hover:text-foreground">Read →</div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
