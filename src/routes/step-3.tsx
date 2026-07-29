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
          "rounded px-1 py-0.5 -mx-0.5 transition-colors duration-150 cursor-help",
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

        <p className="mt-8 border-t border-foreground/10 pt-8">
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
          yearly flood index. I control for state- (
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
