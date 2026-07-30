import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import {
  ResultGroupRow,
  IconGeneral,
  IconIncome,
  IconAgriculture,
  IconGender,
  IconRuralUrban,
} from "@/components/ResultGroupPictograms";

export const Route = createFileRoute("/step-5")({
  head: () => ({
    meta: [
      { title: "Step 05 — Analysing the results and discussing the mechanisms" },
      { name: "description", content: "Interpreting the estimates and the channels behind them." },
      { property: "og:title", content: "Step 05 — Analysing the results and the mechanisms" },
      {
        property: "og:description",
        content:
          "Results broken down by population, state income, agricultural employment, gender, and rural/urban.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Step5,
});

function Step5() {
  return (
    <ChapterLayout
      eyebrow="Step 05"
      title="Analysing the results and discussing the mechanisms"
      lede="The numbers, what they mean, and why."
    >
      <p>I regress on different populations and state subgroups to better understand what's happening.</p>

      <div className="not-prose mt-10">
        <ResultGroupRow icon={<IconGeneral />} title="General population">
          <p>- droughts</p>
        </ResultGroupRow>

        <ResultGroupRow icon={<IconIncome />} title="High- vs low-income states">
          <p>
            Splitting states by income tests whether wealthier states absorb shocks better through
            savings, insurance, and public safety nets.
          </p>
        </ResultGroupRow>

        <ResultGroupRow
          icon={<IconAgriculture />}
          title="High vs low share of agricultural employment"
        >
          <p>
            Agriculture is the most weather-exposed sector, so states that depend on it should
            transmit climate shocks into informality most directly.
          </p>
        </ResultGroupRow>

        <ResultGroupRow icon={<IconGender />} title="Male vs female workers">
          <p>
            Men and women enter and exit informal work through different channels, so the same
            shock can produce very different adjustments.
          </p>
        </ResultGroupRow>

        <ResultGroupRow icon={<IconRuralUrban />} title="Rural vs urban areas">
          <p>
            Rural labour markets are closer to the shock itself; urban informality often reflects
            the migration and spillovers that follow.
          </p>
        </ResultGroupRow>
      </div>

      <p className="mt-10">
        I also run regression to look at the effects of climate shocks on a handful of labor market
        measures (unemployment, employment, labor force participation) for each of those
        subgroups, and&nbsp;at the relative size of each industry in relation to climate shocks.
      </p>
    </ChapterLayout>
  );
}

