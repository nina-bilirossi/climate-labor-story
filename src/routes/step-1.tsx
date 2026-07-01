import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { FieldScene } from "@/components/FieldScene";

export const Route = createFileRoute("/step-1")({
  head: () => ({
    meta: [
      { title: "Step 01 — Learning about the topic" },
      { name: "description", content: "Getting acquainted with the topic of climate shocks and informality." },
    ],
  }),
  component: Step1,
});

function Step1() {
  return (
    <ChapterLayout
      eyebrow="Step 01"
      title="Learning about the topic"
      lede="The starting point: getting acquainted with India's informal labor market and the climate context. Hover over the drawing to explore the pieces."
    >
      <FieldScene />
    </ChapterLayout>
  );
}
