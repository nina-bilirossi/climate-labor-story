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
      lede="This paper investigates the effect of droughts and floods on informal employment in India, drawing on district-level data across Indian states. The analysis distinguishes between formal and informal segments of the labor force and tests whether exposure to climatic events is a significant determinant of informality. Two competing mechanisms are plausible a priori. On one hand, the smaller production units and lower capital endowments characteristic of informal firms (Jat 2026) may render them more fragile in the face of climate shocks, reducing informality as these enterprises collapse. On the other hand, the relative flexibility and low fixed costs of informal arrangements may insulate such workers from rapid-onset events, while formal employment bears the greater burden of infrastructure destruction and economic contraction. Adjudicating between these mechanisms has direct implications for climate adaptation policy and worker protection frameworks. This study contributes to the growing literature on loss and damage from climate change, as defined by the UNFCCC (2012), and is aligned with SDG 8's commitment to promoting decent work and sustainable economic growth (SDG). By illuminating how extreme weather events reshape the formal-informal boundary, it aims to inform the design of more targeted and effective labor market policies in climate-vulnerable developing economies."
    >
      <p>Content coming soon.</p>
    </ChapterLayout>
  );
}
