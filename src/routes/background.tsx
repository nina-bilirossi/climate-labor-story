import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/background")({
  head: () => ({
    meta: [
      { title: "Background — Monsoon & Margins" },
      {
        name: "description",
        content:
          "Literature review on weather shocks, agricultural risk, and labor reallocation in developing economies.",
      },
      { property: "og:title", content: "Background — Monsoon & Margins" },
      {
        property: "og:description",
        content:
          "How prior research has studied climate volatility and informal employment in India and beyond.",
      },
    ],
  }),
  component: BackgroundPage,
});

function BackgroundPage() {
  return (
    <ChapterLayout
      eyebrow="Chapter 01"
      title="Background"
      lede="Climate shocks have long been understood as productivity events for agriculture. A growing literature now reads them as labor-market events."
    >
      <h2 className="font-display text-2xl mt-12">Climate shocks and agriculture</h2>
      <p>
        A first strand of work documents how rainfall deviations affect crop yields and rural
        incomes. Rosenzweig & Binswanger (1993), Jayachandran (2006), and a host of follow-on
        studies show that yield variability translates almost mechanically into household income
        variability for unprotected farmers.
      </p>

      <h2 className="font-display text-2xl mt-12">Labor reallocation</h2>
      <p>
        A second strand asks where displaced agricultural labor goes. Kaur (2019) shows nominal
        wage rigidity in rural India; Colmer (2021) finds that high-temperature shocks accelerate
        movement out of agriculture. The destinations, though, are typically informal.
      </p>

      <h2 className="font-display text-2xl mt-12">Informality as a margin of adjustment</h2>
      <p>
        Building on Maloney (2004) and Ulyssea (2018), this thesis treats informality not as a
        residual but as the active margin on which Indian labor markets absorb climate volatility.
        Floods and droughts plausibly act asymmetrically — placeholder for your full argument.
      </p>

      <h2 className="font-display text-2xl mt-12">Gap addressed</h2>
      <p>
        Existing work studies droughts <em>or</em> floods, rarely both, and rarely with
        informality as the outcome of interest. This thesis fills that gap using two decades of
        PLFS / NSS rounds matched to district-level rainfall.
      </p>
    </ChapterLayout>
  );
}
