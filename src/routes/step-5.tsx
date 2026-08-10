import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import {
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

      <h2 className="mt-10 font-display text-2xl leading-tight">
        Effects of climate shocks on casual labor force participation
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        +/- indicates an associated increase/decrease in informality following a shock, all lags included. The number of signs indicates the effect's strength as a combination of significance and magnitude. Conventional levels are used (∗p&lt;0.1; ∗∗p&lt;0.05; ∗∗∗p&lt;0.01). For detailed scientific results, refer to the manuscript.
      </p>

      <div className="not-prose mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="w-1/2 px-3 py-3 text-left font-medium text-muted-foreground">
                Subgroup
              </th>
              <th className="px-3 py-3 text-center font-medium text-muted-foreground">Droughts</th>
              <th className="px-3 py-3 text-center font-medium text-muted-foreground">Floods</th>
            </tr>
          </thead>
          <tbody>
            {[
              { icon: <IconGeneral />, label: "General population", drought: "+++", flood: "non significant" },
              { icon: <IconIncome highlight="high" />, label: "High-income states", drought: "−-", flood: "−" },
              { icon: <IconIncome highlight="low" />, label: "Low-income states", drought: "++", flood: "+" },
              { icon: <IconAgriculture highlight="high" />, label: "Agricultural states", drought: "-", flood: "non-significant" },
              { icon: <IconAgriculture highlight="low" />, label: "Less agricultural states", drought: "+++", flood: "−" },
              { icon: <IconGender highlight="male" />, label: "Male workers", drought: "++", flood: "non significant" },
              { icon: <IconGender highlight="female" />, label: "Female workers", drought: "+++", flood: "non significant" },
              { icon: <IconRuralUrban highlight="rural" />, label: "Rural areas", drought: "++", flood: "non significant" },
              { icon: <IconRuralUrban highlight="urban" />, label: "Urban areas", drought: "++", flood: "not very significant (+)" },
            ].map((row) => (
              <tr key={row.label} className="border-b border-border/60 align-middle">
                <td className="px-3 py-4">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">{row.icon}</div>
                    <span className="font-medium">{row.label}</span>
                  </div>
                </td>
                <td
                  className={`px-3 py-4 text-center tabular-nums ${
                    /^[+\u2212-]+$/.test(row.drought) ? "text-2xl" : "text-sm text-muted-foreground"
                  }`}
                >
                  {row.drought}
                </td>
                <td
                  className={`px-3 py-4 text-center tabular-nums ${
                    /^[+\u2212-]+$/.test(row.flood) ? "text-2xl" : "text-sm text-muted-foreground"
                  }`}
                >
                  {row.flood}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10">
        I also run regression to look at the effects of climate shocks on a handful of labor market
        measures (unemployment, employment, labor force participation) for each of those
        subgroups, and&nbsp;at the relative size of each industry in relation to climate shocks.
      </p>
    </ChapterLayout>
  );
}
