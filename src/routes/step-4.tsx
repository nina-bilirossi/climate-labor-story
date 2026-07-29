import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-4")({
  head: () => ({
    meta: [
      { title: "Step 04 — Running the analysis" },
      { name: "description", content: "Estimating the effect of climate shocks on informality." },
    ],
  }),
  component: Step4,
});

function Step4() {
  return (
    <ChapterLayout
      eyebrow="Step 04"
      title="Running the analysis"
      lede="The empirical workhorse: specifications, robustness, and what came out."
    >
      <div className="space-y-4">
        <p>
          This is a good place to include all the robustness checks I made and explain a bit more about how I actually ran the regressions. But because that tends to be quite lengthy, and since I have a hunch that whoever is interested in this would be rather academic, I'll just refer you to the corresponding chapter in the manuscript.
        </p>
        <p>
          All in all, running a regression seems straightforward when it's done, but really there are so many micro-choices that influence results and interpretation. Here is an overview of the workflow for the regression, to give you an idea of the choices I had to make and which now seem as given.
        </p>
      </div>
    </ChapterLayout>
  );
}
