import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/reflections")({
  head: () => ({
    meta: [
      { title: "Bonus — Reflections on Writing the Thesis" },
      {
        name: "description",
        content:
          "A personal reflection on the experience of writing a master's thesis — what worked, what didn't, and what I'd do differently.",
      },
      { property: "og:title", content: "Bonus — Reflections" },
      {
        property: "og:description",
        content: "A quick dip into my brain after a year of thesis writing.",
      },
    ],
  }),
  component: ReflectionsPage,
});

function ReflectionsPage() {
  return (
    <ChapterLayout
      eyebrow="Bonus"
      title="A quick dip into my brain"
      lede="Reflections on the experience of writing this thesis — the false starts, the small wins, and what I wish I'd known on day one."
    >
      <p>Placeholder — coming soon.</p>
    </ChapterLayout>
  );
}
