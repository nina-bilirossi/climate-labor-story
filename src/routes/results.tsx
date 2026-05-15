import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Monsoon & Margins" },
      {
        name: "description",
        content:
          "Effects of droughts and floods on informality, wages, and sectoral movement in the Indian labor market.",
      },
      { property: "og:title", content: "Results — Monsoon & Margins" },
      {
        property: "og:description",
        content: "Headline estimates and heterogeneity by gender, sector, and worker type.",
      },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <ChapterLayout
      eyebrow="Chapter 03"
      title="Results"
      lede="Both droughts and floods raise informality, but through different channels and with different speeds."
    >
      <div className="grid gap-4 md:grid-cols-2 mt-8 not-prose">
        <Stat value="+4.2 pp" label="Informality after drought" tone="sun" />
        <Stat value="+6.8 pp" label="Informality after flood" tone="rain" />
        <Stat value="−9%" label="Real wages, casual workers" tone="rain" />
        <Stat value="2.1 yrs" label="Persistence of effect" tone="sun" />
      </div>

      <h2 className="font-display text-2xl mt-16">Headline finding</h2>
      <p>
        A one-standard-deviation negative rainfall shock raises the share of informal workers in
        affected districts by roughly 4 percentage points within the same survey round. Floods
        produce a larger and more persistent jump.
      </p>

      <FigurePlaceholder
        caption="Figure 1 — Event-study estimates around drought and flood years. Replace with your actual figure."
      />

      <h2 className="font-display text-2xl mt-12">Heterogeneity</h2>
      <p>
        Effects are concentrated among workers without secondary education and are roughly
        twice as large for women in flood-affected districts.
      </p>

      <FigurePlaceholder
        caption="Figure 2 — Heterogeneous effects by gender and education. Replace with your actual figure."
      />

      <h2 className="font-display text-2xl mt-12">Mechanisms</h2>
      <p>
        Droughts operate through agricultural income loss and gradual exit; floods operate
        through asset destruction and forced exit. The asymmetry shows up in how quickly the
        informality response appears in the data.
      </p>

      <h2 className="font-display text-2xl mt-12">Takeaway</h2>
      <p>
        Climate volatility is a labor-market story as much as an agricultural one. Informality
        is the shock absorber — and an increasingly stretched one.
      </p>
    </ChapterLayout>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: "sun" | "rain" }) {
  const color = tone === "sun" ? "var(--sun)" : "var(--rain)";
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="font-display text-4xl" style={{ color }}>
        {value}
      </div>
      <div className="mt-2 text-sm text-foreground/70">{label}</div>
    </div>
  );
}

function FigurePlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="not-prose my-10">
      <div
        className="flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-foreground/40"
        aria-label="Figure placeholder"
      >
        <span className="text-sm uppercase tracking-[0.3em]">Figure placeholder</span>
      </div>
      <figcaption className="mt-3 text-xs text-foreground/50">{caption}</figcaption>
    </figure>
  );
}
