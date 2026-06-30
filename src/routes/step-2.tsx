import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-2")({
  head: () => ({
    meta: [
      { title: "Step 02 — Figuring out the research gaps" },
      { name: "description", content: "Identifying what is missing in the existing literature." },
    ],
  }),
  component: Step2,
});

function Step2() {
  return (
    <ChapterLayout
      eyebrow="Step 02"
      title="Figuring out the research gaps"
      lede="Where existing work stops, and where this thesis steps in."
    >
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
