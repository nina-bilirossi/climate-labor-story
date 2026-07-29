import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-3")({
  head: () => ({
    meta: [
      { title: "Step 03 — Laying out the plan and getting the data" },
      { name: "description", content: "Designing the empirical strategy and assembling the dataset." },
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
      <p>This recipe (analysis) requires a few ingredients:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>a set of state- and year- specific informality values</li>
        <li>
          a set of state- and year- specific climate shock indicators (one each
          for drought and floods)
        </li>
        <li>
          population per state, to use as weight and make more populated states
          more influential on the coefficients (to reflect the actual affected
          population)
        </li>
      </ul>
    </ChapterLayout>
  );
}
