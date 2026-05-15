import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — Monsoon & Margins" },
      {
        name: "description",
        content:
          "Difference-in-differences design using district-level rainfall deviations and Indian labor force survey panels.",
      },
      { property: "og:title", content: "Methodology — Monsoon & Margins" },
      {
        property: "og:description",
        content: "Identification strategy, data sources, and empirical specification.",
      },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <ChapterLayout
      eyebrow="Chapter 02"
      title="Methodology"
      lede="A district-by-year panel matched to rainfall anomalies, with informality as the central outcome."
    >
      <h2 className="font-display text-2xl mt-12">Data</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Periodic Labour Force Survey (PLFS) and earlier NSS Employment-Unemployment rounds.</li>
        <li>IMD gridded rainfall (0.25°), aggregated to district-year SPI deviations.</li>
        <li>India Meteorological Department flood event records.</li>
      </ul>

      <h2 className="font-display text-2xl mt-12">Shock definitions</h2>
      <p>
        Drought: SPI ≤ −1 over the kharif window. Flood: at least one IMD-recorded flood event
        and JJAS rainfall ≥ +1.5 standard deviations. Districts can experience either, both, or
        neither in a given year.
      </p>

      <h2 className="font-display text-2xl mt-12">Specification</h2>
      <p>
        A two-way fixed-effects difference-in-differences:
      </p>
      <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm font-mono">
{`y_{idt} = α_d + γ_t + β₁·Drought_{dt} + β₂·Flood_{dt}
        + X_{idt}·δ + ε_{idt}`}
      </pre>
      <p>
        Where <em>y</em> is informal employment status, <em>α_d</em> are district fixed effects,
        <em> γ_t</em> are year fixed effects, and standard errors are clustered at the district
        level.
      </p>

      <h2 className="font-display text-2xl mt-12">Robustness</h2>
      <p>
        Event-study leads/lags, alternative shock thresholds, and a placebo using pre-monsoon
        rainfall — placeholder for your robustness narrative.
      </p>
    </ChapterLayout>
  );
}
