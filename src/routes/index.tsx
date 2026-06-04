import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { FieldScene } from "@/components/FieldScene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Climate Shocked Workers — Droughts, Floods & India's Informal Labor" },
      {
        name: "description",
        content:
          "An interactive presentation of master's thesis research on how climate shocks reshape informality in the Indian labor market.",
      },
      { property: "og:title", content: "Climate Shocked Workers" },
      {
        property: "og:description",
        content: "How droughts and floods reshape informality in India's labor market — a scrollable thesis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <ScrollNarrative />

      {/* Menu reveal section */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Begin reading</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">Climate shocked into informality?.</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            A master's thesis on how climate volatility — too little rain, then too much — pushes workers in India
            between formal and informal employment.
          </p>

          <FieldScene />

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-foreground/50">Hover the scene · tap to explore</p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                to: "/background" as const,
                num: "01",
                title: "Background",
                desc: "Literature review on climate shocks, agriculture and labor reallocation in developing economies.",
              },
              {
                to: "/methodology" as const,
                num: "02",
                title: "Methodology",
                desc: "Difference-in-differences with district-level rainfall deviations, panel data from PLFS rounds.",
              },
              {
                to: "/results" as const,
                num: "03",
                title: "Results",
                desc: "Effects on informality rates, wages, and sectoral movement across drought and flood districts.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-[color:var(--sun)] hover:bg-card/80"
              >
                <div className="text-xs font-mono text-[color:var(--sun)]">{c.num}</div>
                <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{c.desc}</p>
                <div className="mt-6 text-sm text-foreground/60 group-hover:text-foreground">Read →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-10 text-center text-xs text-foreground/50">
        Master's thesis · Replace with your name & affiliation
      </footer>
    </main>
  );
}
