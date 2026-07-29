import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { Cite } from "@/components/Cite";

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
      lede="I investigate the effect of drought and flood shocks on casual labor force participation in India. I combine satellite climate data with labor survey data to investigate a potential correlation and argue for a causal relationship."
    >
      <div className="prose-thesis space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-4">
            It's a bit scary having to check what's already been done, because you can't possibly check every paper that has been published. But to the best&nbsp;of my ability in the limited time that is the thesis, it seems to me like what i've set out to research was fairly original, and contributes to 3 main strands of the literature.
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Determinants and dynamics of informality</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Existing work establishes the structural drivers of informality (<Cite k="Ulyssea2020" />, <Cite k="LaPorta2014" />) and labor market transitions in India (<Cite k="Abraham2025" />), but largely omits an environmental dimension</li>
                <li>This paper identifies climate shocks (droughts and floods) as an exogenous driver of the formal-informal margin</li>
                <li>Also contributes to understanding informal firms' heterogeneous physical/human capital needs in response to destructive climate shocks (c.f. <Cite k="LintBarrage2026" />)</li>
                <li>Tests two competing mechanisms: (1) informal firms' smaller size/lower capital (<Cite k="Jat2026" />) may make them more fragile to climate shocks, reducing informality as they collapse; or (2) informal work's flexibility and low fixed costs may insulate it from shocks, shifting the burden onto formal employment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Economic consequences of climate change</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prior work documents the macroeconomic costs of floods/droughts in India (<Cite k="Panwar2020" />, <Cite k="Bahinipati2026" />) and the migration they induce (<Cite k="Ulyssea2026" />)</li>
                <li>Along with <Cite k="LintBarrage2026" /> on informality, climate policy, and hurricanes, this paper provides state-level evidence that different types of climatic exposure directly reshape the formal-informal composition of the labor force, treating informality as an outcome in its own right rather than a background condition</li>
                <li>Notes that much existing research focuses on temperature increases, rather than shocks (droughts, floods) that arise from those increases</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Climate adaptation and labor policy design</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>India's labor market is already structurally fragile — pervasive informality/self-employment, rising fragmentation, low female labor force participation, marginalization of large social groups (<Cite k="Hammer2022" />)</li>
                <li>Existing labor protections can backfire: <Cite k="Chaurey2024" /> finds new employment protection legislation in Andhra Pradesh reduced formal contract work while expanding lower-wage informal employment, depressing aggregate productivity and welfare</li>
                <li>Climate shocks' poverty consequences are most severe where economies are agriculture-dependent and institutions are weak, though diversification and strong governance can attenuate effects (<Cite k="Behera2025" />)</li>
                <li>This challenge is further complicated by the ambiguity inherent in climate adaptation decision-making (<Cite k="YanSims2025" />)</li>
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
