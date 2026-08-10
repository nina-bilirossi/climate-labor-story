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
            The main result of my research is the observed short-term effects of increasing informality during droughts (over 12 months) and flash floods, though to a lesser extent. This reinforces the vision of informality as a survival strategy for workers -- rather than a career plan.
          </p>
          <p>
            The International Labor Organization states that the decrease in the informal share of employment is a necessary condition for India's inclusive growth. I think that resilience to climate change will be a collaborative effort, and proper planning needs proper knowledge of what is happening. One hindrance of informality is that it is harder to collect information (such as inputs and outputs of firms). But this is in part a big advantage of informality for informal workers and firms (low administrative burden). It is a tradeoff between instant ease and long term planning, adaptation and strategy; both at the individual level (having social security), and at the state or national level (investing in better infrastructure, allocating budget according to risk and vulnerability).
          </p>
          <p>
            Those findings imply that policymakers should put even more emphasis on climate change resilience and providing alternatives to casual work. Their decisions, or lack thereof, could create either a vicious cycle -- where unstable workers, firms, and infrastructure don't recover from climate shocks -- or a virtuous cycle -- where formal or well-funded stable opportunities are created along with an adaptation plan, bringing all hands on deck in building a climate-change resilience movement.
          </p>
          <p>
            Future research priorities include complementing and comparing the empirical findings presented here with qualitative insights, extending this study to long-term effects, understanding the effects on the labor market, migration, and on&nbsp;firms themselves, and investigating the effects of different policies in promoting labor stability in the context of climate change and adaptation -- both in the short term and long term.
          </p>
        </div>
      }
    >
      <p>All my results are 100% valid and objective. Just kidding; every study has its limitations. Check out the ones from my research in the manuscript.&nbsp;</p>
    </ChapterLayout>
  );
}
