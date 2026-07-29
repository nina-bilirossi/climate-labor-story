import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { InlineMath, BlockMath } from "react-katex";
import { useState, ReactNode } from "react";

export const Route = createFileRoute("/step-3")({
  head: () => ({
    meta: [
      { title: "Step 03 — Laying out the plan and getting the data" },
      {
        name: "description",
        content: "Designing the empirical strategy and assembling the dataset.",
      },
    ],
  }),
  component: Step3,
});

type MathKey = "inf" | "zeta" | "alpha" | "gamma";

function Step3() {
  const [active, setActive] = useState<MathKey | null>(null);

  const HL = ({
    k,
    children,
    inline = false,
  }: {
    k: MathKey;
    children: ReactNode;
    inline?: boolean;
  }) => {
    const isActive = active === k;
    return (
      <span
        onMouseEnter={() => setActive(k)}
        onMouseLeave={() => setActive(null)}
        className={[
          inline ? "inline-block" : "inline-block",
          "rounded px-1 py-0.5 -mx-0.5 transition-colors duration-150",
          isActive
            ? "bg-[color:var(--sun)]/70 text-background"
            : "bg-[color:var(--sun)]/15",
        ].join(" ")}
      >
        {children}
      </span>
    );
  };

  return (
    <ChapterLayout
      eyebrow="Step 03"
      title="Laying out the plan and getting the data"
      lede={
        <>
          I address the short-term effects of climate shocks on informality by
          combining labor data with satellite-derived climate data in a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Panel_analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors"
          >
            panel regression
          </a>{" "}
          framework.
        </>
      }
    >
      <div className="space-y-6">
        <p>
          I estimate coefficients using a two-way fixed-effect panel regression.
          The baseline specification is as follows:
        </p>

        <div className="my-8 overflow-x-auto flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-lg">
          <HL k="inf">
            <InlineMath math="\text{inf}_{i, t}" />
          </HL>
          <InlineMath math="= C +" />
          <InlineMath math="\beta_1 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t}" />
          </HL>
          <InlineMath math="+ \beta_2 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t-1}" />
          </HL>
          <InlineMath math="+ \beta_3 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t-2}" />
          </HL>
          <InlineMath math="+" />
          <HL k="alpha">
            <InlineMath math="\alpha_i" />
          </HL>
          <InlineMath math="+" />
          <HL k="gamma">
            <InlineMath math="\gamma_t" />
          </HL>
          <InlineMath math="+ \delta_i \cdot t + \epsilon_{i, t}" />
        </div>

        <p className="mt-8">
          where <InlineMath math="i" /> indexes states and{" "}
          <InlineMath math="t" /> denotes the period (annual period from June to
          July).{" "}
          <HL k="inf">
            <InlineMath math="\text{inf}_{i, t}" />
          </HL>{" "}
          is the informal employment share, and{" "}
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t}" />
          </HL>{" "}
          is the climate shock index: either the yearly drought index or the
          yearly flood index. I include optimal lags as determined by a BIC
          analysis (3 lags for the drought index, 2 for the flood index). I
          control for state- (
          <HL k="alpha">
            <InlineMath math="\alpha_i" />
          </HL>
          ) and time-fixed (
          <HL k="gamma">
            <InlineMath math="\gamma_t" />
          </HL>
          ) effects, and include state-specific linear time trends (to account
          for state-specific development paths, urbanization, and sectoral
          shifts). Standard errors are clustered at the state level, and all
          regressions are weighted by 2020 population.
        </p>

        <h3 className="mt-8 border-t border-foreground/10 pt-8 font-semibold text-lg mb-4">
          This recipe (analysis) requires a few ingredients:
        </h3>

        <ul className="list-disc pl-5 space-y-2">
          <li
            onMouseEnter={() => setActive("inf")}
            onMouseLeave={() => setActive(null)}
          >
            <a
              href="#informality-construction"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("informality-construction")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors cursor-pointer"
            >
              a set of state- and year- specific informality values
            </a>
          </li>
          <li
            onMouseEnter={() => setActive("zeta")}
            onMouseLeave={() => setActive(null)}
          >
            <a
              href="#climate-construction"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("climate-construction")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors cursor-pointer"
            >
              a set of state- and year- specific climate shock indicators (one
              each for drought and floods)
            </a>
          </li>
          <li>
            population per state, to use as weight and make more populated
            states more influential on the coefficients (to reflect the actual
            affected population)
          </li>
        </ul>

        <section id="informality-construction" className="mt-12 scroll-mt-24 border-t border-foreground/10 pt-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            Construction of the informality share
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[color:var(--sun)]"
              aria-label="House icon"
            >
              <path d="M3 9.5L12 4l9 5.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </h3>

          <div className="space-y-3">
            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span>Some Info on the Labor data:&nbsp;Periodic Labor Force Survey of India (PLFS)</span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Representative national household survey</li>
                  <li>Yearly from 2017 to 2024, for each of the 36 states and union territories</li>
                  <li>Open access, upon request</li>
                </ul>
                <p>
                  More info on survey design:{" "}
                  <a
                    href="https://www.dataforindia.com/plfs-explainer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors"
                  >
                    https://www.dataforindia.com/plfs-explainer/
                  </a>
                </p>
              </div>
            </details>

            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span className="flex items-center gap-2">
                  Index construction
                  <img
                    src="https://access.tufts.edu/sites/default/files/2017-10/STATA.svg"
                    alt="Stata"
                    className="inline-block h-4 w-auto"
                  />
                </span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  My main measure of informality is the <span className="font-bold text-foreground">share of casual workers</span> among all workers aged 15 to 64.
                  Casual worker status is defined as including individuals who worked in a household enterprise (self-employed) as own account workers or helpers, as casual wage labor in public works, or as casual wage labor in other types of work.
                  This excludes individuals who worked as employers in a household enterprise or as salaried or regular-wage workers.
                  Note that begging and prostitution are excluded from the labor force (as per the PLFS classification).
                </p>
                <p>
                  The status of a casual worker is determined if an individual engaged in casual work as a primary or subsidiary activity (≥ 30 days) over the past 365 days.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section id="climate-construction" className="mt-12 scroll-mt-24 border-t border-foreground/10 pt-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            Construction of the climate shock indicators
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[color:var(--sun)] -rotate-12"
              aria-label="Satellite icon"
            >
              <rect x="9" y="9" width="6" height="6" rx="1.5" />
              <rect x="2" y="7" width="6" height="10" rx="1" />
              <path d="M4 7v10 M5 7v10" />
              <rect x="16" y="7" width="6" height="10" rx="1" />
              <path d="M18 7v10 M19 7v10" />
              <path d="M12 9V4" />
              <path d="M9 4h6" />
            </svg>
          </h3>
          <div className="space-y-3">
            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span>Drought index</span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  The drought index is based on the SPEI-12 index, which looks at temperature and evapotranspiration over the past 12 months. Values are normalized at the pixel level so that a negative score indicates a negative deviation (drought) compared to the baseline. I filter out the positive values and keep only the negative values, so that my index reflects the intensity of a drought.
                </p>
              </div>
            </details>

            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span>Flood index</span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>Content coming soon.</p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
