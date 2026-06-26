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
  const [contribOpen, setContribOpen] = useState(false);

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

      {/* Introduction — first paragraph visible, rest collapsible */}
      <section className="relative border-t border-border/60 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Introduction</p>

          <div className="prose-thesis mt-6 space-y-5 leading-relaxed text-foreground/85">
            <p>
              The majority of employment worldwide is informal. The International Labor Organization estimates that 58%
              of workers globally are engaged in economic activities that are — in law or in practice — not covered or
              insufficiently covered by formal arrangements <Cite k="ilostat2026" />. While informality is present
              across all levels of development, it is a defining characteristic of developing economies{" "}
              <Cite k="Ulyssea2020" />, where it tends to thrive in contexts of high unemployment, underemployment,
              poverty, gender inequality, and precarious work <Cite k="ilostat2026" />. Informal work arrangements
              exacerbate existing difficult and exploitative working conditions and payment practices by limiting social
              protection and creating uncertainty around employment duration, working hours, and pay{" "}
              <Cite k="Meemken2025" />. Beyond their implications for individual workers, informality carries
              significant macroeconomic consequences: informal firms may account for up to 35% of GDP in low-income
              countries <Cite k="LaPorta2008" />
              <Cite k="LaPorta2014" />, while the loss of tax revenue and the exclusion of workers from social
              protection systems constrain states' capacity to invest and redistribute. Understanding the determinants
              and dynamics of informality is therefore not only a matter of labor economics, but of development policy
              more broadly.
            </p>

            {!introOpen && <p className="text-foreground/50">…</p>}

            {introOpen && (
              <>
                <p>
                  India offers a particularly instructive case. With the world's largest population and one of the
                  highest informal employment rates globally — 87% as of 2025 <Cite k="ilostat2025" /> — India
                  concentrates an extraordinary share of the world's informal workforce. In 2017, informal enterprises
                  accounted for 43% of non-farm GDP and 68% of all non-farm employment <Cite k="Jat2026" />.
                  Agriculture, which employs roughly 42% of the labor force, remains deeply intertwined with
                  informality, seasonal precarity, and subsistence livelihoods <Cite k="ilostat2025" />
                  <Cite k="Behera2025" />. These structural conditions make India a critical site for studying the
                  channels through which economic shocks propagate across formal and informal segments of the labor
                  market.
                </p>
                <p>
                  At the same time, India is acutely exposed to climate risk. The IPCC Sixth Assessment Report projects
                  that extreme weather events will intensify and occur more frequently, generating growing economic and
                  non-economic losses and damages <Cite k="ipcc2022b" />
                  <Cite k="ipcc2022a" />. Among South Asian nations, India is considered one of the most vulnerable,
                  owing to its geographical exposure, population pressure, and developmental challenges{" "}
                  <Cite k="Bahinipati2026" />
                  <Cite k="Behera2025" />
                  <Cite k="Hammer2022" />. Droughts and floods are particularly prominent threats: research documents a
                  persistent and severe drought risk for India's population, with economic losses increasing steadily
                  between 1964 and 2019 <Cite k="Bahinipati2026" />. Increasing mean temperatures (0.25°C per decade)
                  and declining precipitation both exacerbate drought frequency and intensity and amplify flood
                  magnitudes during extreme rainfall periods <Cite k="sharma2025" />. Area and extreme rainfall
                  thresholds are projected to increase by about 18(13)% and 58(50)% in the far future (2071–2100) under
                  SSP5-8.5 (SSP2-4.5) <Cite k="Konda24" />. Moreover, drought and flood losses exhibit significant
                  regional disparity across Indian states, reflecting heterogeneous exposure, infrastructure capacity,
                  and adaptive resources <Cite k="Archana2024" />. In sum, as climate change accelerates, the frequency,
                  severity, and unpredictability of these events are projected to increase, making adaptation not merely
                  a policy aspiration but an economic necessity.
                </p>
                <p>
                  The intersection of high informality and climate vulnerability defines a critical but underexplored
                  research domain. The existing literature has examined how climate shocks affect labor productivity,
                  migration, and poverty. <Cite k="Ulyssea2026" />, for instance, study drought-induced migration from
                  rural to urban areas in Brazil. Studies on India establish that agricultural regions are especially
                  vulnerable to climatic shocks, with events such as floods and droughts directly threatening food
                  production, economic stability, and poverty outcomes <Cite k="Behera2025" />
                  <Cite k="Colmer2021" />
                  <Cite k="Bahinipati2026" />
                  <Cite k="Joshi2025" />. Studies also highlight that high-income states are more resilient to climate
                  damage, and that policy is an important factor in reducing damage <Cite k="Patri2022" />
                  <Cite k="Panwar2020" />
                  <Cite k="Kannan2025" />. Yet while these contributions identify significant economic vulnerabilities
                  following extreme weather events, most do not isolate informality as a distinct outcome, nor do they
                  specify the channels through which climate shocks alter the formal-informal composition of the labor
                  market. This gap is consequential: if climate shocks systematically shift workers into or out of
                  informality, then standard analyses of poverty and labor market resilience may be mischaracterizing
                  the mechanisms at work. With a stronger focus on informality, <Cite k="LintBarrage2026" /> investigate
                  the labor market effects of hurricanes and temperature extremes.
                </p>
                <p>
                  This paper investigates the effect of droughts and floods on informal employment in India, drawing on
                  district-level data across Indian states. The analysis distinguishes between formal and informal
                  segments of the labor force and tests whether exposure to climatic events is a significant determinant
                  of informality. Two competing mechanisms are plausible a priori. On one hand, the smaller production
                  units and lower capital endowments characteristic of informal firms <Cite k="Jat2026" /> may render
                  them more fragile in the face of climate shocks, reducing informality as these enterprises collapse.
                  On the other hand, the relative flexibility and low fixed costs of informal arrangements may insulate
                  such workers from rapid-onset events, while formal employment bears the greater burden of
                  infrastructure destruction and economic contraction. Adjudicating between these mechanisms has direct
                  implications for climate adaptation policy and worker protection frameworks. This study contributes to
                  the growing literature on loss and damage from climate change, as defined by the{" "}
                  <Cite k="unfccc2012" />, and is aligned with SDG 8's commitment to promoting decent work and
                  sustainable economic growth <Cite k="sdg" />. By illuminating how extreme weather events reshape the
                  formal-informal boundary, it aims to inform the design of more targeted and effective labor market
                  policies in climate-vulnerable developing economies.
                </p>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIntroOpen((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
            aria-expanded={introOpen}
          >
            <span
              className={`inline-block text-lg leading-none transition-transform ${introOpen ? "rotate-45" : ""}`}
              aria-hidden
            >
              +
            </span>
            <span>{introOpen ? "Show less" : "Read the rest"}</span>
          </button>
        </div>
      </section>

      {/* Contribution — fully hidden until expanded */}
      <section className="relative border-t border-border/60 px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() => setContribOpen((v) => !v)}
            className="group flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={contribOpen}
          >
            <span>
              <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Contribution</span>
              <span className="mt-2 block font-display text-2xl md:text-3xl"></span>
            </span>
            <span
              className={`text-2xl text-foreground/60 transition-transform group-hover:text-foreground ${
                contribOpen ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>

          {contribOpen && (
            <div className="prose-thesis mt-8 space-y-5 leading-relaxed text-foreground/85">
              <p>
                This paper contributes to three strands of literature. First, it extends the empirical literature on the{" "}
                <strong>determinants and dynamics of informality</strong>. Existing work has established the structural
                underpinnings of informality in developing economies <Cite k="Ulyssea2020" />
                <Cite k="LaPorta2014" /> and investigated labor market transitions between levels of formality in India{" "}
                <Cite k="Abraham2025" />. I add to these contributions by identifying climate shocks — droughts and
                floods — as an exogenous driver of the formal-informal margin, introducing an environmental dimension
                largely absent from the canonical determinants literature. This also contributes to understanding the
                underpinnings of informality, such as the heterogeneous physical and human capital needs of informal
                firms, namely in response to destructive climate shocks (c.f. <Cite k="LintBarrage2026" />
                ).
              </p>
              <p>
                Second, the paper contributes to the literature on the{" "}
                <strong>economic consequences of climate change</strong>. Prior work documents the macroeconomic costs
                of floods and droughts in India <Cite k="Panwar2020" />
                <Cite k="Bahinipati2026" /> and the migratory responses they induce <Cite k="Ulyssea2026" />. Along with
                the work of <Cite k="LintBarrage2026" /> on informality, climate policy, and hurricanes, I complement
                these contributions by providing state-level empirical evidence that different types of climatic
                exposure directly alter the formal-informal composition of the Indian labor force — isolating
                informality as an outcome in its own right rather than a background condition. In particular, much of
                the research focuses on the effect of temperature increase, but doesn't look specifically at the climate
                shocks that arise more often and less predictably from those temperature increases in the long term,
                such as droughts and floods.
              </p>
              <p>
                Third, this research adds to the emerging literature on{" "}
                <strong>climate adaptation and labor policy design</strong>. The Indian labor market is already
                structurally fragile: <Cite k="Hammer2022" /> characterize it as marked by pervasive informality and
                self-employment, rising labor fragmentation, low female labor force participation, and the
                marginalization of large social groups — vulnerabilities that leave workers with limited buffers against
                external shocks. Labor market policies intended to address these conditions have themselves proven
                double-edged: <Cite k="Chaurey2024" /> finds that new employment protection legislation in Andhra
                Pradesh reduced contract work in formal firms while expanding informal employment at lower wages,
                ultimately depressing aggregate productivity and welfare. Climate shocks interact with this fragility in
                unequal ways; <Cite k="Behera2025" /> shows that their poverty consequences are most severe where
                economies depend on agriculture and institutions are weak, but that diversification and strong
                governance can attenuate these effects. Taken together, these findings point to an urgent and
                underspecified policy challenge, one further complicated by the ambiguity inherent in climate adaptation
                decision-making <Cite k="YanSims2025" />. By illuminating the informality channel through which climate
                shocks propagate, our findings provide actionable evidence to inform the design of social protection and
                labor market policies in climate-vulnerable developing economies.
              </p>
              <p className="text-foreground/70">
                The rest of the thesis is organized as follows: an overview of the state of informality and climate
                shocks in India, the data used for the empirical analysis, the empirical model and the index
                construction, the main results, a discussion of mechanisms, a theoretical model that rationalizes the
                findings, and a conclusion.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Scene + chapter cards */}
      <section id="scene" className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Begin reading</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Climate shocked into informality?</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A master's thesis on how shocks linked to climate change — too little rain, then too much — influence the
            movement of Indian workers.
          </p>

          <FieldScene />

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-foreground/50">Hover the scene · tap to explore</p>

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
                {c.sub && <p className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/50">{c.sub}</p>}
                <p className="mt-3 text-sm text-foreground/70">{c.desc}</p>
                <div className="mt-6 text-sm text-foreground/60 group-hover:text-foreground">Read →</div>
              </Link>
            ))}
          </div>

          {/* Appendix note */}
          <p className="mt-8 text-sm text-foreground/60 italic">
            Note: the Appendix is not included on the website. Readers can download the full manuscript for additional
            tables, figures, and methodological notes (e.g. the choice of time lags).
          </p>

          {/* Bonus block — distinct color */}
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
