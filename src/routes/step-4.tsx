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

const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

function Step4() {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const clampPan = (nx: number, ny: number, s: number) => {
    const frame = frameRef.current;
    if (!frame) return { x: nx, y: ny };
    const w = frame.clientWidth;
    const h = frame.clientHeight;
    const maxX = ((s - 1) * w) / 2;
    const maxY = ((s - 1) * h) / 2;
    return {
      x: Math.min(maxX, Math.max(-maxX, nx)),
      y: Math.min(maxY, Math.max(-maxY, ny)),
    };
  };

  const reset = () => {
    setScale(1);
    setTx(0);
    setTy(0);
  };

  useEffect(() => {
    if (!zoomOpen) reset();
  }, [zoomOpen]);

  const stateRef = useRef({ scale, tx, ty });
  useEffect(() => { stateRef.current = { scale, tx, ty }; }, [scale, tx, ty]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!zoomOpen || !frame) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = frame.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      const factor = Math.exp(-e.deltaY * 0.0015);
      const { scale: prevS, tx: prevTx, ty: prevTy } = stateRef.current;
      const nextS = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prevS * factor));
      const ratio = nextS / prevS;
      const nx = cx - (cx - prevTx) * ratio;
      const ny = cy - (cy - prevTy) * ratio;
      const c = clampPan(nx, ny, nextS);
      setScale(nextS);
      setTx(c.x);
      setTy(c.y);
    };
    frame.addEventListener("wheel", onWheel, { passive: false });
    return () => frame.removeEventListener("wheel", onWheel);
  }, [zoomOpen]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, tx, ty };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    const c = clampPan(dragRef.current.tx + dx, dragRef.current.ty + dy, scale);
    setTx(c.x);
    setTy(c.y);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    try { (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId); } catch {}
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
                <span className="hidden sm:inline">Scroll to zoom · drag to pan</span>
                <span className="tabular-nums font-medium text-foreground">{scale.toFixed(1)}×</span>
                <button
                  type="button"
                  onClick={reset}
                  className="px-2 py-1 rounded border border-border hover:bg-foreground/5"
                >
                  Reset
                </button>
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
              ref={frameRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="relative overflow-hidden rounded-lg bg-black w-full h-[80vh] touch-none select-none"
              style={{ cursor: scale > 1 ? (dragRef.current ? "grabbing" : "grab") : "default" }}
            >
              <img
                src={regressionDiagram.url}
                alt="Zoomed regression mind map"
                draggable={false}
                className="absolute inset-0 w-full h-full object-contain will-change-transform"
                style={{
                  transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </ChapterLayout>
  );
}
