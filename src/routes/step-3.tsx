import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { InlineMath, BlockMath } from "react-katex";

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

function Step3() {
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

        <div className="my-8 overflow-x-auto">
          <BlockMath math="\text{inf}_{i, t} = C + \beta_1 \cdot \zeta_{i, t} + \beta_2 \cdot \zeta_{i, t-1} + \beta_3 \cdot \zeta_{i, t-2} + \alpha_i + \gamma_t + \delta_i \cdot t + \epsilon_{i, t}" />
        </div>

        <p>
          where <InlineMath math="i" /> indexes states and{" "}
          <InlineMath math="t" /> denotes the period (annual period from June to
          July). <InlineMath math="\text{inf}_{i, t}" /> is the informal
          employment share, and <InlineMath math="\zeta_{i, t}" /> is the
          climate shock index: either the yearly drought index or the yearly
          flood index. I control for state- (<InlineMath math="\alpha_i" />) and
          time-fixed (<InlineMath math="\gamma_t" />) effects, and include
          state-specific linear time trends (to account for state-specific
          development paths, urbanization, and sectoral shifts). Standard errors
          are clustered at the state level, and all regressions are weighted by
          2020 population.
        </p>

        <p className="mt-12 pt-8 border-t border-foreground/10">
          Essentially, this is the equation:
        </p>

        <p className="font-semibold text-lg">
          This recipe (analysis) requires a few ingredients:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>a set of state- and year- specific informality values</li>
          <li>
            a set of state- and year- specific climate shock indicators (one
            each for drought and floods)
          </li>
          <li>
            population per state, to use as weight and make more populated
            states more influential on the coefficients (to reflect the actual
            affected population)
          </li>
        </ul>
      </div>
    </ChapterLayout>
  );
}
