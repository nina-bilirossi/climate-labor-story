import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/climate-shocks")({
  head: () => ({
    meta: [
      { title: "Climate Shocks — Monsoon & Margins" },
      {
        name: "description",
        content:
          "How droughts and floods have shaped agricultural risk and labor outcomes in India.",
      },
    ],
  }),
  component: ClimatePage,
});

function ClimatePage() {
  return (
    <ChapterLayout
      eyebrow="Context"
      title="Climate shocks"
      lede="A short history of the monsoon — and what happens when it fails or overflows."
    >
      <p>Placeholder content — add your write-up on climate shocks here.</p>
    </ChapterLayout>
  );
}
