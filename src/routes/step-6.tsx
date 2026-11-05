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
            For droughts, this directional effect was observed across all regressions and subgroups, EXCEPT for states with a high agricultural share of employment and for high-income states.
            <br />
            <br />
            For floods
            <br />
            <br />
            This reinforces the view of informality as a survival strategy for workers — rather than a career plan.
          </p>
        </div>
      }
    >
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
