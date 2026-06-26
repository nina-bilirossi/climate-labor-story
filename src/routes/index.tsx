import { useState } from "react";
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

function CurvyArrow({ direction }: { direction: "left" | "right" }) {
  // Curves from top-center down to bottom-left or bottom-right
  const path =
    direction === "right"
      ? "M 100 0 C 100 40, 180 50, 180 110"
      : "M 100 0 C 100 40, 20 50, 20 110";
  const tip = direction === "right" ? "172,102 180,118 188,102" : "12,102 20,118 28,102";
  return (
    <div className="flex justify-center py-2" aria-hidden>
      <svg width="200" height="120" viewBox="0 0 200 120" className="text-[color:var(--sun)]/70">
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 6"
          strokeLinecap="round"
        />
        <polyline
          points={tip}
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

function RoadmapStepCard({ step, align }: { step: RoadmapStep; align: "left" | "center" | "right" }) {
  const alignClass =
    align === "left" ? "md:items-start md:text-left" : align === "right" ? "md:items-end md:text-right" : "";
  return (
    <div className={`flex flex-col items-center text-center ${alignClass}`}>
      <div className="text-xs font-mono text-[color:var(--sun)]">{step.num}</div>
      <h3 className="mt-2 font-display text-xl md:text-2xl max-w-md">{step.title}</h3>
      <div className="mt-4">
        {step.custom === "fieldscene" ? (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="block w-full max-w-xs cursor-zoom-in rounded-xl border border-border bg-card/40 p-3 transition-all hover:border-[color:var(--sun)] hover:bg-card/70"
                aria-label="Open interactive scene"
              >
                <div className="pointer-events-none scale-100 origin-top">
                  <FieldScene />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">Click to zoom in</p>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl">
              <div className="mt-4">
                <FieldScene />
                <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Hover the scene · tap to explore
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <img
            src={step.image}
            alt={step.imageAlt ?? ""}
            width={512}
            height={512}
            loading="lazy"
            className="mx-auto h-40 w-40 object-contain md:h-48 md:w-48"
          />
        )}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <ScrollNarrative />

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
              const positions: Array<"left" | "center" | "right"> = [
                "center",
                "right",
                "left",
                "right",
                "left",
                "center",
              ];
              const align = positions[i] ?? "center";
              const nextAlign = positions[i + 1];
              const arrowDir: "left" | "right" =
                nextAlign === "left" ? "left" : nextAlign === "right" ? "right" : align === "left" ? "right" : "left";
              return (
                <div key={step.num}>
                  <RoadmapStepCard step={step} align={align} />
                  {i < ROADMAP.length - 1 && <CurvyArrow direction={arrowDir} />}
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
