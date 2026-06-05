import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { FieldScene } from "@/components/FieldScene";
import { SiteFooter } from "@/components/SiteFooter";
import { Cite } from "@/components/Cite";

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

function Index() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <main className="bg-background text-foreground">
      <ScrollNarrative />

      {/* Abstract */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Abstract</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            It's a tough world out there. Especially if you as a country was colonized up until the
            mid-19th century and you had to build you labor laws kinda from scratch after
            independence. Now add to that the fast growing and largest-on-earth population, imagine
            having to get good jobs, social security, and food on the table for everyone!! That's
            crazy. AND climate change is hitting you hard, like hard hard and it's getting hard to
            predict climate shocks, which are also getting more intense by the way. The
            International Labor Organization states that the decrease in the informal share of
            employment is a necessary condition for India's inclusive growth{" "}
            <Cite k="ilo2019informal" />. Informality has been sticky, but may take a turn in the
            coming years… I dive into it and see how it reacts to some climate shocks!
          </p>
        </div>
      </section>

      {/* Introduction — collapsible */}
      <section className="relative border-t border-border/60 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() => setIntroOpen((v) => !v)}
            className="group flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={introOpen}
          >
            <span>
              <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">
                Introduction
              </span>
              <span className="mt-2 block font-display text-2xl md:text-3xl">
                The longer version
              </span>
            </span>
            <span
              className={`text-2xl text-foreground/60 transition-transform group-hover:text-foreground ${
                introOpen ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>

          {introOpen && (
            <div className="prose-thesis mt-8 space-y-5 leading-relaxed text-foreground/85">
              <p>
                Placeholder for the full introduction. Write here the longer narrative that frames
                the research question, situates it in the literature, and previews the chapters to
                come.
              </p>
              <p>
                You can use multiple paragraphs and inline citations like <Cite k="ilo2019informal" />{" "}
                — they will resolve against your bibliography.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Scene + chapter cards */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Begin reading</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Climate shocked into informality?
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A master's thesis on how shocks linked to climate change — too little rain, then too
            much — influence the movement of Indian workers.
          </p>

          <FieldScene />

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Hover the scene · tap to explore
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                to: "/background" as const,
                num: "01",
                title: "Background",
                desc: "Literature review on climate shocks, agriculture and labor reallocation in developing economies.",
                sub: null,
              },
              {
                to: "/methodology" as const,
                num: "02",
                title: "Methods",
                desc: "How I go from raw survey and rainfall data to causal estimates.",
                sub: "Data · Index Construction · Empirical Strategy",
              },
              {
                to: "/results" as const,
                num: "03",
                title: "Results",
                desc: "Effects on informality rates, wages, and sectoral movement across drought and flood districts.",
                sub: null,
              },
              {
                to: "/discussion" as const,
                num: "04",
                title: "Discussion & Conclusion",
                desc: "Putting the results in the broader context and looking at what future research shall focus on.",
                sub: null,
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-[color:var(--sun)] hover:bg-card/80"
              >
                <div className="text-xs font-mono text-[color:var(--sun)]">{c.num}</div>
                <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                {c.sub && (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {c.sub}
                  </p>
                )}
                <p className="mt-3 text-sm text-foreground/70">{c.desc}</p>
                <div className="mt-6 text-sm text-foreground/60 group-hover:text-foreground">
                  Read →
                </div>
              </Link>
            ))}
          </div>

          {/* Appendix note */}
          <p className="mt-8 text-sm text-foreground/60 italic">
            Note: the Appendix is not included on the website. Readers can download the full
            manuscript for additional tables, figures, and methodological notes (e.g. the choice of
            time lags).
          </p>

          {/* Bonus block — distinct color */}
          <Link
            to="/reflections"
            className="group mt-10 block rounded-2xl border p-6 transition-all border-[color:var(--sun)]/40 bg-[color:var(--sun)]/10 hover:bg-[color:var(--sun)]/15 hover:border-[color:var(--sun)]"
          >
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[color:var(--sun)]">
              Bonus
            </div>
            <h3 className="mt-3 font-display text-2xl">
              Reflecting on my experience writing the master's thesis
            </h3>
            <p className="mt-3 text-sm text-foreground/75">
              A quick dip into my brain.
            </p>
            <div className="mt-6 text-sm text-foreground/70 group-hover:text-foreground">
              Read →
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
