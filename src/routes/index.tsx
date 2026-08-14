import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ScrollNarrative } from "@/components/ScrollNarrative";

import { SiteFooter } from "@/components/SiteFooter";
import { TopNav } from "@/components/TopNav";
import { Cite } from "@/components/Cite";
import thesisPdf from "@/assets/thesis.pdf.asset.json";
const roadmapGaps = "/images/roadmap-gaps.png";
const roadmapSatellite = "/images/roadmap-satellite.png";
const roadmapComputer = "/images/roadmap-computer.png";
const roadmapResults = "/images/roadmap-results.png";
const roadmapConclusion = "/images/roadmap-conclusion.png";

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
  {
    num: "02",
    slug: "step-2",
    shortTitle: "Research gaps",
    title: "Figuring out the research gaps",
    image: roadmapGaps,
    imageAlt: "Magnifying glass over papers",
  },
  {
    num: "03",
    slug: "step-3",
    shortTitle: "Plan & data",
    title: "Laying out the plan and getting the data",
    image: roadmapSatellite,
    imageAlt: "Small satellite",
  },
  {
    num: "04",
    slug: "step-4",
    shortTitle: "Analysis",
    title: "Running the analysis",
    image: roadmapComputer,
    imageAlt: "Laptop and papers",
  },
  {
    num: "05",
    slug: "step-5",
    shortTitle: "Results",
    title: "Analysing the results and discussing the mechanisms",
    image: roadmapResults,
    imageAlt: "Chart and magnifier",
  },
  {
    num: "06",
    slug: "step-6",
    shortTitle: "Conclusion",
    title: "Conclusion",
    image: roadmapConclusion,
    imageAlt: "Finish flag and papers",
  },
];


function RoadmapStepCard({ step, highlight = false }: { step: RoadmapStep; highlight?: boolean }) {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);
    window.setTimeout(() => {
      navigate({ to: `/${step.slug}` });
    }, 360);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        "block w-40 cursor-pointer rounded-2xl border p-3 text-center transition-all md:w-44 " +
        (animating ? "roadmap-droplet " : "") +
        (highlight
          ? "border-[color:var(--sun)] bg-[color:var(--sun)]/15 shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--sun)_60%,transparent)] hover:bg-[color:var(--sun)]/25 scale-105"
          : "border-border bg-card/40 hover:border-[color:var(--sun)] hover:bg-card/70")
      }
      aria-label={`Open: ${step.title}`}
    >
      <div className="text-xs font-mono text-[color:var(--sun)]">{step.num}</div>
      <h3 className={"mt-2 font-display leading-snug text-sm " + (highlight ? "md:text-base" : "")}>{step.title}</h3>
      <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
        {highlight ? "\u00a0" : "Click to open"}
      </p>
    </button>
  );
}

function VerticalArrow() {
  return (
    <svg width="24" height="40" viewBox="0 0 24 40" className="text-[color:var(--sun)]/70" aria-hidden>
      <line
        x1="12"
        y1="0"
        x2="12"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <polygon points="8,32 12,40 16,32" fill="currentColor" />
    </svg>
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
          <div className="mt-6 text-lg leading-relaxed text-foreground/85 space-y-4">
            <p>
              Before diving into any kind of content or definition, let me just say a few words about what this website
              is and its purpose.
            </p>
            <p>
              By the time you read this, I will have completed and submitted my master's thesis. Seeing how it is going
              now, the manuscript might well be over 70 pages long. However interesting the writing, I do not believe
              very strongly that anyone who is not grading me might read it. That's a shame because it is truly, really,
              very interesting (not clickbait). Anyway, I decided I would like to share what I've learned over the past
              6 months in a way that could transmit how captivating this topic has been for me.&nbsp;
            </p>
            <p>This is the goal of the website.&nbsp;</p>
            <p>
              The tone I use throughout is rather casual&nbsp;and differs substantially from scholarly prose. If you are
              feeling a bit more academic, the manuscript is available for download at the bottom of this page.
            </p>
            <p>Happy exploring!</p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">(VERY INFORMAL) ABSTRACT</p>
          <div className="mt-6 text-lg leading-relaxed text-foreground/85 space-y-6">
            <p>
              It's a tough world out there. Especially if you are a country that was colonized up until the mid-19th century, and
              you suddenly gained a lot of space for policy work&nbsp;after independence. Add to that the fast-growing and
              largest-on-earth population; having to get good jobs, social security, and food on the table for
              everyone!! &nbsp;AND climate change is hitting you hard, like hard hard, and it's getting hard to
              predict climate shocks, which are also getting more intense, by the way.&nbsp;
            </p>
            <p>
              The <Cite k="ilo2019informal">International Labor Organization</Cite> states that the decrease in the
              informal share of employment is a necessary condition for India's inclusive growth. Informality has been
              sticky, but may take a turn in the coming years… I dive into it and see how it reacts to some climate
              shocks!
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="scene" className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Begin reading</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Climate shocked into informality?</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Casual Business: Floods, Droughts, and Informal Work in India
          </p>

          {/* Vertical stack of roadmap blocks */}
          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-4">
            {ROADMAP.map((step, i) => (
              <div key={step.num} id={step.slug} className="flex flex-col items-center scroll-mt-24">
                <RoadmapStepCard step={step} highlight={step.num === "06"} />
                {i < ROADMAP.length - 1 && <VerticalArrow />}
              </div>
            ))}
          </div>

          {/* Bonus block */}
          <Link
            to="/reflections"
            className="group mx-auto mt-24 block max-w-xl rounded-xl border p-4 transition-all border-[color:var(--sun)]/40 bg-[color:var(--sun)]/10 hover:bg-[color:var(--sun)]/15 hover:border-[color:var(--sun)]"
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[color:var(--sun)]">Bonus</div>
            <h3 className="mt-2 font-display text-lg leading-snug">
              Reflecting on my experience writing the master's thesis
            </h3>
            <p className="mt-2 text-sm text-foreground/75">A quick dip into my brain.</p>
            <div className="mt-4 text-sm text-foreground/70 group-hover:text-foreground">Read →</div>
          </Link>
        </div>
      </section>

      {/* Manuscript download */}
      <section className="relative border-t border-border/60 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">The manuscript</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            Casual Business: Floods, Droughts, and Informal Work in India
          </h2>
          <p className="mt-3 text-foreground/70">
            The full master's thesis, in proper academic prose.
          </p>
          <a
            href={thesisPdf.url}
            download="Casual-Business_BiliRossi_MscThesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--sun)]/50 bg-[color:var(--sun)]/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-[color:var(--sun)]/20 hover:border-[color:var(--sun)]"
          >
            Download the PDF (4.7 MB) ↓
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
