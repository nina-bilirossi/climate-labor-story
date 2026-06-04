import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/labor-history")({
  head: () => ({
    meta: [
      { title: "Indian Labor Force — Monsoon & Margins" },
      {
        name: "description",
        content:
          "A short history of the Indian labor force and the long shadow of informality.",
      },
    ],
  }),
  component: LaborHistoryPage,
});

function LaborHistoryPage() {
  return (
    <ChapterLayout
      eyebrow="Context"
      title="Indian labor force"
      lede="From agrarian roots to today's heterogeneous labor market."
    >
      <p>Placeholder content — add your write-up on the Indian labor force and informality history here.</p>
    </ChapterLayout>
  );
}
