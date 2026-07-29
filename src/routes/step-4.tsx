import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import regressionDiagram from "@/assets/regression-settings.jpg.asset.json";
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
  const [lens, setLens] = useState<{ x: number; y: number; bgX: number; bgY: number; bgW: number; bgH: number; visible: boolean }>({
    x: 0, y: 0, bgX: 0, bgY: 0, bgW: 0, bgH: 0, visible: false,
  });
  const LENS_W = 360;
  const LENS_H = 240;
  const ZOOM = 3;

  const handleLensMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bgW = rect.width * ZOOM;
    const bgH = rect.height * ZOOM;
    const bgX = -(x * ZOOM - LENS_W / 2);
    const bgY = -(y * ZOOM - LENS_H / 2);
    setLens({ x: e.clientX, y: e.clientY, bgX, bgY, bgW, bgH, visible: true });
  };

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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div
            className="relative w-full max-w-6xl max-h-full overflow-auto rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-white/95 backdrop-blur">
              <span className="text-sm font-medium text-foreground">
                Mind map of my regression settings and structure
              </span>
              <button
                type="button"
                onClick={() => setZoomOpen(false)}
                className="text-sm px-2 py-1 rounded hover:bg-foreground/10"
                aria-label="Close zoom view"
              >
                ✕
              </button>
            </div>
            <img
              src={regressionDiagram.url}
              alt="Zoomed visual diagram of regression settings and structure"
              className="w-full h-auto block cursor-crosshair"
              onMouseMove={handleLensMove}
              onMouseLeave={() => setLens((l) => ({ ...l, visible: false }))}
            />
          </div>
          {lens.visible && (
            <div
              className="pointer-events-none fixed rounded-lg border-2 border-white shadow-2xl"
              style={{
                left: lens.x - LENS_W / 2,
                top: lens.y - LENS_H / 2,
                width: LENS_W,
                height: LENS_H,
                backgroundImage: `url(${regressionDiagram.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${lens.bgW}px ${lens.bgH}px`,
                backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
                backgroundColor: "white",
              }}
            />
          )}
        </div>
      )}
    </ChapterLayout>
  );
}
