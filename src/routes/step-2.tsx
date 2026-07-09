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
      lede="I investigate the effect of drought and flood shocks on casual labor force participation in India. I combine satellite climate data with labor survey data to investigate a potential correlation and argue a causal relationship. 

The analysis distinguishes between formal and informal segments of the labor force and tests whether exposure to climatic events is a significant determinant of informality. Two competing mechanisms are plausible a priori. On one hand, the smaller production units and lower capital endowments characteristic of informal firms (Jat 2026) may render them more fragile in the face of climate shocks, reducing informality as these enterprises collapse. On the other hand, the relative flexibility and low fixed costs of informal arrangements may insulate such workers from rapid-onset events, while formal employment bears the greater burden of infrastructure destruction and economic contraction. Adjudicating between these mechanisms has direct implications for climate adaptation policy and worker protection frameworks. This study contributes to the growing literature on loss and damage from climate change, as defined by the UNFCCC (2012), and is aligned with SDG 8's commitment to promoting decent work and sustainable economic growth (SDG). By illuminating how extreme weather events reshape the formal-informal boundary, it aims to inform the design of more targeted and effective labor market policies in climate-vulnerable developing economies."
    >
      <div className="prose-thesis space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-4">Contribution:</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Determinants and dynamics of informality</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Existing work establishes the structural drivers of informality (Ulyssea 2020), (LaPorta 2014) and labor market transitions in India (Abraham 2025), but largely omits an environmental dimension</li>
                <li>This paper identifies climate shocks (droughts and floods) as an exogenous driver of the formal-informal margin</li>
                <li>Also contributes to understanding informal firms' heterogeneous physical/human capital needs in response to destructive climate shocks (c.f. Lint & Barrage 2026)</li>
                <li>Tests two competing mechanisms: (1) informal firms' smaller size/lower capital (Jat 2026) may make them more fragile to climate shocks, reducing informality as they collapse; or (2) informal work's flexibility and low fixed costs may insulate it from shocks, shifting the burden onto formal employment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Economic consequences of climate change</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prior work documents the macroeconomic costs of floods/droughts in India (Panwar 2020), (Bahinipati 2026) and the migration they induce (Ulyssea 2026)</li>
                <li>Along with Lint & Barrage (2026) on informality, climate policy, and hurricanes, this paper provides state-level evidence that different types of climatic exposure directly reshape the formal-informal composition of the labor force, treating informality as an outcome in its own right rather than a background condition</li>
                <li>Notes that much existing research focuses on temperature increases, rather than the more frequent, less predictable shocks (droughts, floods) that arise from those increases</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Climate adaptation and labor policy design</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>India's labor market is already structurally fragile — pervasive informality/self-employment, rising fragmentation, low female labor force participation, marginalization of large social groups (Hammer 2022)</li>
                <li>Existing labor protections can backfire: Chaurey (2024) finds new employment protection legislation in Andhra Pradesh reduced formal contract work while expanding lower-wage informal employment, depressing aggregate productivity and welfare</li>
                <li>Climate shocks' poverty consequences are most severe where economies are agriculture-dependent and institutions are weak, though diversification and strong governance can attenuate effects (Behera 2025)</li>
                <li>This challenge is further complicated by the ambiguity inherent in climate adaptation decision-making (Yan & Sims 2025)</li>
                <li>This paper contributes evidence on the informality channel to inform better-targeted social protection and labor market policy in climate-vulnerable developing economies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Broader framing:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contributes to the loss-and-damage literature as defined by UNFCCC (2012), and aligns with SDG 8 (decent work and sustainable economic growth)</li>
                <li>Aims to inform the design of more targeted labor market policies in climate-vulnerable developing economies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
