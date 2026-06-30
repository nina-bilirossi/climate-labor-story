import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-6")({
  head: () => ({
    meta: [
      { title: "Step 06 — Limitations and Conclusion" },
      { name: "description", content: "The big finish: caveats and takeaways." },
    ],
  }),
  component: Step6,
});

function Step6() {
  return (
    <ChapterLayout
      eyebrow="Step 06"
      title="Limitations and Conclusion"
      lede="Where the analysis stops, and what it still tells us."
    >
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
