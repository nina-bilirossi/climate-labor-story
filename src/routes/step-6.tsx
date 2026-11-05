import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/step-6")({
  head: () => ({
    meta: [
      { title: "Step 06 — Conclusion" },
      { name: "description", content: "The big finish: caveats and takeaways." },
    ],
  }),
  component: Step6,
});

function Step6() {
  return (
    <ChapterLayout
      eyebrow="Step 06"
      title="Conclusion"
      lede={
        <div className="space-y-6">
          <p>
            For droughts, this directional effect was observed across all regressions and subgroups, EXCEPT for states with a high agricultural share of employment and for high-income states.
          </p>
          <p>
            For floods, effects are more often insignificant than not. Nevertheless, the analyses show that flash floods are associated with an increased casual worker share in low-income states and a decrease in high-income states.
          </p>
        </div>
      }
    >
      <div className="space-y-6">
        <h3 className="font-display text-2xl">How can we interpret this?</h3>
        <p>First, let’s lay down a bit of a thought framework. What does a change in the casual worker share actually represent?</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Casual workers entering or exiting employment,</li>
          <li><em>and/or</em> formal/informal workers transitioning between employment, unemployment, and labor force inactivity,</li>
          <li><em>and/or</em> workers leaving permanently (migration or death).</li>
        </ol>
        <p>This decomposition matters for interpretation: a rising casual share does not necessarily mean more casual jobs are being created; it may simply reflect that formal jobs are being destroyed faster, and that workers with no formal options are accepting whatever casual work is available.</p>
        <p>Two elements inform the interpretation of the coefficients. First, it is structurally difficult to increase informality where baseline informality is already very high – there is a natural ceiling. Second, and more importantly, it is difficult to decrease informality in the short run: formal jobs cannot be conjured quickly in response to a shock. The short-term increases in casual worker share observed throughout our results are therefore consistent with a world in which workers do not choose between formal and informal employment, but rather between casual work and no work at all. Formal jobs are stable; informal jobs are not. This logic is supported by the empirical analysis: it might be a factor explaining why the observed effects are weaker in rural and high-agricultural-employment-share states – not because those workers are more sheltered from shocks, but because informality is already very high, leaving less room for the ratio to move upward.</p>
        <p>This page is getting lengthy, so I’ll cut it short (and urge you to read the manuscript’s conclusion if you are interested!).</p>
        <p>Essentially, droughts and floods affect the labor market in different ways (e.g., rapid infrastructure destruction vs. prolonged stress). The results from the empirical study can be explained in this context. In the short term, informal labor seems to act as a buffer to stabilize the economy in response to a shock.</p>
        <p>Specific patterns observed:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Gender:</strong> female labor force metrics are more variable than male ones, and informality follows.</li>
          <li><strong>Settlement:</strong> differences in urban and rural infrastructure and opportunities result in varying impacts.</li>
          <li><strong>Agricultural share:</strong> states with a low agricultural employment share have more potential for informality variation because they have lower informality to start with.</li>
          <li><strong>Income:</strong> high-income states foster more resilience and opportunities, allowing for decreases in informality when shocks arise.</li>
        </ul>
        <h3 className="font-display text-2xl pt-4">Concluding thoughts</h3>
        <p>My research complements the literature and reinforces the view of informality as a survival strategy for workers — rather than a career plan.</p>
        <p>These findings imply that policymakers should put even more emphasis on climate change resilience and on providing alternatives to casual work. Their decisions, or lack thereof, could create either a vicious cycle — where unstable workers, firms, and infrastructure don't recover from climate shocks — or a virtuous cycle — where formal or well-funded stable opportunities are created along with an adaptation plan, bringing all hands on deck in building a climate-change resilience movement.</p>
        <p><strong>What next?!</strong>&nbsp;Future research priorities include complementing and comparing the empirical findings presented here with qualitative insights, extending this study to long-term effects, understanding the effects on the labor market, migration, and on firms themselves, and investigating the effects of different policies in promoting labor stability in the context of climate change and adaptation — both in the short term and long term.</p>
        <aside className="border-l-2 border-sun pl-4 text-sm text-muted-foreground italic">
          <p className="not-italic font-semibold mb-1">Interpretation note: comparing the drought and flood indices</p>
          <p>Drought shock effects are generally stronger and more robust, but the flash flood index captures a different type of event altogether, with a different timeline (yearly scale versus daily scale), so statements like “droughts have stronger effects” are to be avoided, especially considering the events’ linked nature (Kumar &amp; Arya, 2025). Rather, their effects should be considered together (I also run a regression where both the drought and flood indices are included). Additionally, one must keep in mind that flash floods are a subset of floods, so we should not generalize too quickly.</p>
        </aside>
      </div>
      <div className="space-y-6">
        <p>All my results are 100% valid and objective. Just kidding; every study has its limitations. Check out the ones from my research in the manuscript.&nbsp;</p>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Also, here are some recent news to bring some contrast and food for thought:&nbsp;</p>
          <div>
            <h4 className="font-display text-base mb-1">
              <a
                href="https://www.economist.com/asia/2026/02/05/a-booming-gig-economy-is-formalising-indias-labour-force"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-sun hover:underline"
              >
                A booming gig economy is formalising India’s labour force
              </a>
            </h4>
            <p className="text-xs text-muted-foreground">The Economist, Feb 5th 2026</p>
          </div>
        </div>
      </div>
    </ChapterLayout>
  );
}
