import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import regressionDiagram from "@/assets/regression-settings.jpg.asset.json";
import { useEffect, useRef, useState } from "react";

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
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const [thumbRect, setThumbRect] = useState<{ w: number; h: number } | null>(null);
  const [mainRect, setMainRect] = useState<{ w: number; h: number } | null>(null);
  const thumbRef = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const ZOOM = 3;

  const measure = () => {
    if (thumbRef.current) {
      setThumbRect({ w: thumbRef.current.clientWidth, h: thumbRef.current.clientHeight });
    }
    if (mainRef.current) {
      setMainRect({ w: mainRef.current.clientWidth, h: mainRef.current.clientHeight });
    }
  };

  useEffect(() => {
    if (!zoomOpen) return;
    measure();
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoomOpen]);

  const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
  const edge = 1 / (2 * ZOOM);

  const updatePos = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, edge, 1 - edge);
    const y = clamp((e.clientY - rect.top) / rect.height, edge, 1 - edge);
    setPos({ x, y });
  };

  const indicatorStyle = () => {
    if (!thumbRect) return {};
    const iw = thumbRect.w / ZOOM;
    const ih = thumbRect.h / ZOOM;
    const left = clamp(pos.x * thumbRect.w - iw / 2, 0, thumbRect.w - iw);
    const top = clamp(pos.y * thumbRect.h - ih / 2, 0, thumbRect.h - ih);
    return { width: iw, height: ih, left, top };
  };

  const mainImageStyle = () => {
    if (!mainRect) return {};
    const w = mainRect.w * ZOOM;
    const h = mainRect.h * ZOOM;
    const left = mainRect.w * (0.5 - pos.x * ZOOM);
    const top = mainRect.h * (0.5 - pos.y * ZOOM);
    return { width: w, height: h, left, top };
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
        >
          <div
            className="relative w-full max-w-7xl max-h-full flex flex-col md:flex-row gap-4 overflow-auto rounded-lg bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between md:hidden">
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

            <div className="flex flex-col gap-2 md:w-56 shrink-0">
              <div className="relative inline-block self-start rounded-lg border border-border overflow-hidden bg-background">
                <img
                  ref={thumbRef}
                  src={regressionDiagram.url}
                  alt="Overview of regression mind map"
                  className="w-32 md:w-52 h-auto block cursor-crosshair"
                  onLoad={measure}
                  onMouseMove={updatePos}
                  onMouseDown={updatePos}
                />
                {thumbRect && (
                  <div
                    className="absolute pointer-events-none border-2 border-[color:var(--sun)] bg-[color:var(--sun)]/20 rounded-sm"
                    style={indicatorStyle()}
                  />
                )}
              </div>
              <p className="text-xs text-muted-foreground hidden md:block">
                Hover or drag the thumbnail to explore the zoomed area.
              </p>
            </div>

            <div className="flex-1 min-w-0 flex flex-col">
              <div className="hidden md:flex items-center justify-between pb-3 border-b border-border mb-3">
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

              <div
                ref={mainRef}
                className="relative overflow-hidden rounded-lg bg-black w-full max-h-[70vh]"
                style={{
                  aspectRatio: thumbRef.current
                    ? thumbRef.current.naturalWidth / thumbRef.current.naturalHeight
                    : undefined,
                }}
              >
                <img
                  src={regressionDiagram.url}
                  alt="Zoomed regression mind map"
                  className="absolute top-0 left-0 max-w-none max-h-none"
                  onLoad={measure}
                  style={mainImageStyle()}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </ChapterLayout>
  );
}
