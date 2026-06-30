import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-5")({
  head: () => ({
    meta: [
      { title: "Step 05 — Analysing the results and discussing the mechanisms" },
      { name: "description", content: "Interpreting the estimates and the channels behind them." },
    ],
  }),
  component: Step5,
});

function Step5() {
  return (
    <ChapterLayout
      eyebrow="Step 05"
      title="Analysing the results and discussing the mechanisms"
      lede="What the numbers mean — and why."
    >
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
