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
      lede="I address the question of the short-term effects of climate shocks on informality by combining labor data with satellite-derived climate data in a panel regression framework."
    >
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
