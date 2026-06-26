import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
  image?: string;
  imageAlt?: string;
  custom?: "fieldscene";
};

const ROADMAP: RoadmapStep[] = [
  { num: "01", title: "Learning about the topic", custom: "fieldscene" },
  { num: "02", title: "Figuring out the research gaps", image: roadmapGaps, imageAlt: "Magnifying glass over papers" },
  {
    num: "03",
    title: "Laying out the plan and getting the data",
    image: roadmapSatellite,
    imageAlt: "Small satellite",
  },
  { num: "04", title: "Running the analysis", image: roadmapComputer, imageAlt: "Laptop and papers" },
  {
    num: "05",
    title: "Analysing the results and discussing the mechanisms",
    image: roadmapResults,
    imageAlt: "Chart and magnifier",
  },
  { num: "06", title: "Limitations and Conclusion", image: roadmapConclusion, imageAlt: "Finish flag and papers" },
];

function DottedArrow() {
  return (
    <div className="flex justify-center py-6" aria-hidden>
      <svg width="40" height="60" viewBox="0 0 40 60" className="text-[color:var(--sun)]/70">
        <line
          x1="20"
          y1="0"
          x2="20"
          y2="48"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 6"
          strokeLinecap="round"
        />
        <polyline points="12,42 20,54 28,42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function RoadmapStepCard({ step }: { step: RoadmapStep }) {
  return (
    <div className="flex flex-col items-center text-center">
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
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Roadmap</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">The journey, step by step</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A visual outline of how this thesis came together — from first encounter with the topic to final
            conclusions.
          </p>

          <div className="mt-16">
            {ROADMAP.map((step, i) => (
              <div key={step.num}>
                <RoadmapStepCard step={step} />
                {i < ROADMAP.length - 1 && <DottedArrow />}
              </div>
            ))}
          </div>

          {/* Appendix note */}
          <p className="mt-16 text-sm text-foreground/60 italic">
            Note: the Appendix is not included on the website. Readers can download the full manuscript for additional
            tables, figures, and methodological notes (e.g. the choice of time lags).
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
