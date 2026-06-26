import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { FieldScene } from "@/components/FieldScene";
import { SiteFooter } from "@/components/SiteFooter";
import { TopNav } from "@/components/TopNav";
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

// Curvy dotted arrows connecting cascading boxes. Each arrow varies in shape.
const ARROW_PATHS = [
  { d: "M 10 20 C 60 10, 100 90, 150 110", tip: "142,98 152,114 158,96" },
  { d: "M 10 110 C 70 130, 110 30, 150 20", tip: "140,8 152,22 158,8" },
  { d: "M 10 20 C 80 30, 80 110, 150 110", tip: "140,98 152,114 158,96" },
  { d: "M 10 110 C 60 100, 100 20, 150 30", tip: "140,18 152,32 158,16" },
  { d: "M 10 20 C 70 50, 90 90, 150 100", tip: "140,90 152,104 158,88" },
];

function CurvyArrow({ index }: { index: number }) {
  const a = ARROW_PATHS[index % ARROW_PATHS.length];
  return (
    <svg
      width="160"
      height="140"
      viewBox="0 0 160 140"
      className="text-[color:var(--sun)]/80"
      aria-hidden
    >
      <path
        d={a.d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <polyline
        points={a.tip}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoadmapStepCard({ step, highlight = false }: { step: RoadmapStep; highlight?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={
            "block w-56 cursor-zoom-in rounded-2xl border p-4 text-center transition-all md:w-60 " +
            (highlight
              ? "border-[color:var(--sun)] bg-[color:var(--sun)]/15 shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--sun)_60%,transparent)] hover:bg-[color:var(--sun)]/25 scale-105"
              : "border-border bg-card/40 hover:border-[color:var(--sun)] hover:bg-card/70")
          }
          aria-label={`Open: ${step.title}`}
        >
          <div className="text-xs font-mono text-[color:var(--sun)]">{step.num}</div>
          <h3 className={"mt-2 font-display leading-snug " + (highlight ? "text-xl" : "text-base")}>{step.title}</h3>
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
                className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28"
              />
            )}
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            {highlight ? "The big finish · click" : "Click to zoom"}
          </p>
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

          {/* Horizontal cascading flow: boxes drift down then back up, last one stands out */}
          <div className="mt-16 overflow-x-auto pb-6">
            <div className="flex min-w-max items-start gap-0 px-2">
              {ROADMAP.map((step, i) => {
                const yOffsets = [0, 70, 140, 80, 30, 110];
                const ty = yOffsets[i] ?? 0;
                const isLast = i === ROADMAP.length - 1;
                return (
                  <div key={step.num} className="flex items-start">
                    <div
                      id={step.slug}
                      className="scroll-mt-24"
                      style={{ transform: `translateY(${ty}px)` }}
                    >
                      <RoadmapStepCard step={step} highlight={isLast} />
                    </div>
                    {i < ROADMAP.length - 1 && (
                      <div
                        className="shrink-0"
                        style={{ transform: `translateY(${ty}px)`, marginLeft: "-0.5rem", marginRight: "-0.5rem" }}
                      >
                        <CurvyArrow index={i} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
