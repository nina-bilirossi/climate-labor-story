import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import regressionDiagram from "@/assets/regression-settings.png.asset.json";
import regressionPdf from "@/assets/regression-settings.pdf.asset.json";
import { useState } from "react";

export const Route = createFileRoute("/step-4")({
  head: () => ({
    meta: [
      { title: "Step 04 — Running the analysis" },
      { name: "description", content: "Estimating the effect of climate shocks on informality." },
    ],
  }),
  component: Step4,
});

function Step4() {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <ChapterLayout
      eyebrow="Step 04"
      title="Running the analysis"
      lede="The empirical backstage: specifications and robustness check."
    >
      <div className="space-y-4">
        <p>
          This is a good place to include all the robustness checks I made and explain a bit more about how I actually ran the regressions. But because that tends to be quite lengthy, and since I have a hunch that whoever is interested in this would be rather academic, I'll just refer you to the corresponding chapter in the manuscript.
        </p>
        <p>
          All in all, running a regression seems straightforward when it's done, but really there are so many micro-choices that influence results and interpretation. Here is an overview of the workflow for the regression, to give you an idea of the choices I had to make and which now seem as given.
        </p>
        <figure className="mt-8">
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="group relative block w-full text-left"
            aria-label="Open zoom view of regression mind map"
          >
            <img
              src={regressionDiagram.url}
              alt="Visual diagram of regression settings and structure"
              className="w-full rounded-lg border border-border group-hover:ring-2 group-hover:ring-[color:var(--sun)] transition"
            />
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm border border-border opacity-80 group-hover:opacity-100 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                <path d="M11 8v6M8 11h6" />
              </svg>
              Zoom
            </span>
          </button>
          <figcaption className="mt-2 text-sm italic text-muted-foreground text-center">
            Mind map of my regression settings and structure. Made with Miro.
          </figcaption>
        </figure>
      </div>

      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="relative w-full max-w-7xl max-h-full flex flex-col gap-3 rounded-lg bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">
                Mind map of my regression settings and structure
              </span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="hidden sm:inline">Use the PDF controls to zoom</span>
                <button
                  type="button"
                  onClick={() => setZoomOpen(false)}
                  className="text-sm px-2 py-1 rounded hover:bg-foreground/10"
                  aria-label="Close zoom view"
                >
                  ✕
                </button>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-lg bg-background w-full h-[80vh]"
            >
              <iframe
                src={`${regressionPdf.url}#toolbar=1&navpanes=0&view=FitH`}
                title="Zoomed regression mind map PDF"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </ChapterLayout>
  );
}
