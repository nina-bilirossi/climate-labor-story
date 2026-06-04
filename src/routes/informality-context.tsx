import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/informality-context")({
  head: () => ({
    meta: [
      { title: "Informality — Monsoon & Margins" },
      {
        name: "description",
        content: "What informality means in the Indian labor market and why it matters.",
      },
    ],
  }),
  component: InformalityPage,
});

function InformalityPage() {
  return (
    <ChapterLayout
      eyebrow="Context"
      title="Informality"
      lede="Definitions, measurement, and the stakes of working off the books."
    >
      <p>Placeholder content — add your write-up on informality here.</p>
    </ChapterLayout>
  );
}
