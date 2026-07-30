import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { cn } from "@/lib/utils";
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

      <div className="not-prose mt-10 overflow-x-auto">
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
              {
                icon: <IconGeneral />,
                title: "General population",
                subs: ["Aggregate"],
              },
              {
                icon: <IconIncome />,
                title: "High- vs low-income states",
                subs: ["High-income states", "Low-income states"],
              },
              {
                icon: <IconAgriculture />,
                title: "High vs low share of agricultural employment",
                subs: ["High agricultural share", "Low agricultural share"],
              },
              {
                icon: <IconGender />,
                title: "Male vs female workers",
                subs: ["Male workers", "Female workers"],
              },
              {
                icon: <IconRuralUrban />,
                title: "Rural vs urban areas",
                subs: ["Rural areas", "Urban areas"],
              },
            ].map((group) => (
              <Fragment key={group.title}>
                {group.subs.map((sub, i) => {
                  const isLast = i === group.subs.length - 1;
                  const isFirst = i === 0;
                  return (
                    <tr
                      key={`${group.title}-${sub}`}
                      className={cn(
                        "align-middle",
                        isLast && "border-b border-border/60",
                        !isLast && "border-b border-dashed border-border/40"
                      )}
                    >
                      <td className="px-3 py-4">
                        <div className="flex items-center gap-4">
                          <div className="shrink-0">
                            {isFirst ? group.icon : <div className="w-12" />}
                          </div>
                          <span className="font-medium">
                            {isFirst && group.subs.length > 1 ? group.title : sub}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center text-lg tabular-nums"></td>
                      <td className="px-3 py-4 text-center text-lg tabular-nums"></td>
                    </tr>
                  );
                })}
              </Fragment>
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

