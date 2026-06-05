import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/discussion")({
  head: () => ({
    meta: [
      { title: "Discussion & Conclusion — Monsoon & Margins" },
      {
        name: "description",
        content:
          "Putting the estimated effects of climate shocks on informality into broader context, and outlining directions for future research.",
      },
      { property: "og:title", content: "Discussion & Conclusion" },
      {
        property: "og:description",
        content:
          "Interpretation of results, policy implications, and an agenda for future work.",
      },
    ],
  }),
  component: DiscussionPage,
});

function DiscussionPage() {
  return (
    <ChapterLayout
      eyebrow="Chapter 04"
      title="Discussion & Conclusion"
      lede="Placing the estimates in the broader literature on climate, development, and informal labor — and pointing toward what comes next."
    >
      <h2 className="font-display text-2xl mt-12">What the results mean</h2>
      <p>
        Placeholder — interpret the magnitude and direction of the drought and flood effects in
        light of existing evidence on rural-to-urban reallocation and the stickiness of informal
        work.
      </p>

      <h2 className="font-display text-2xl mt-12">Policy implications</h2>
      <p>
        Placeholder — connect the findings to ongoing debates around the four labor codes, social
        protection portability, and climate adaptation in agriculture.
      </p>

      <h2 className="font-display text-2xl mt-12">Future research</h2>
      <p>
        Placeholder — longer panels, finer geographic resolution, distinguishing transient from
        permanent reallocation, and integrating heat stress alongside rainfall shocks.
      </p>
    </ChapterLayout>
  );
}
