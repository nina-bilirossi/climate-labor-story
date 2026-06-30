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
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
