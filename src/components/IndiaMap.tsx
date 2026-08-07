import { useEffect, useMemo, useRef, useState } from "react";
import { STATE_STATS_BY_NAME, type StateStat } from "@/data/stateStats";

type MetricKey = "drought" | "flood" | "agri" | "inf";

type Metric = {
  key: MetricKey;
  label: string;
  short: string;
  unit: string;
  get: (s: StateStat) => number | null;
  sd?: (s: StateStat) => number | null;
  format: (v: number) => string;
  /** low value = intense (true for SPEI, where more negative = drier) */
  invert?: boolean;
  /** fixed numeric domain; otherwise derived from data min/max */
  domain?: [number, number];
};

const METRICS: Metric[] = [
  {
    key: "drought",
    label: "Drought index (SPEI, mean)",
    short: "Drought",
    unit: "SPEI",
    get: (s) => s.speiMean,
    sd: (s) => s.speiSd,
    format: (v) => v.toFixed(3),
    invert: true,
  },
  {
    key: "flood",
    label: "Flood index (mean)",
    short: "Flood",
    unit: "index",
    get: (s) => s.floodMean,
    sd: (s) => s.floodSd,
    format: (v) => v.toFixed(3),
  },
  {
    key: "agri",
    label: "Agricultural share of employment",
    short: "Agri. share",
    unit: "%",
    get: (s) => s.agriShare,
    format: (v) => `${v.toFixed(1)}%`,
    domain: [0, 100],
  },
  {
    key: "inf",
    label: "Baseline casual labour share (informality)",
    short: "Baseline informality",
    unit: "share",
    get: (s) => s.baselineInf,
    format: (v) => v.toFixed(3),
  },
];

type Feature = {
  properties: { st_nm: string };
  geometry: { type: string; coordinates: number[][][] | number[][][][] };
};

function ringsOf(f: Feature): number[][][] {
  if (f.geometry.type === "Polygon") return f.geometry.coordinates as number[][][];
  return (f.geometry.coordinates as number[][][][]).flat();
}

export function IndiaMap() {
  const [features, setFeatures] = useState<Feature[] | null>(null);
  const [metricKey, setMetricKey] = useState<MetricKey>("drought");
  const [hover, setHover] = useState<{ name: string; x: number; y: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    fetch("/data/india-states.json")
      .then((r) => r.json())
      .then((d) => {
        if (alive) setFeatures(d.features as Feature[]);
      })
      .catch(() => setFeatures([]));
    return () => {
      alive = false;
    };
  }, []);

  const metric = METRICS.find((m) => m.key === metricKey)!;

  const paths = useMemo(() => {
    if (!features || features.length === 0) return null;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const f of features) {
      for (const ring of ringsOf(f)) {
        for (const [lon, lat] of ring) {
          if (lon < minX) minX = lon;
          if (lon > maxX) maxX = lon;
          if (lat < minY) minY = lat;
          if (lat > maxY) maxY = lat;
        }
      }
    }
    const W = 760, H = 820, PAD = 12;
    const kx = Math.cos((((minY + maxY) / 2) * Math.PI) / 180);
    const w = (maxX - minX) * kx;
    const h = maxY - minY;
    const scale = Math.min((W - 2 * PAD) / w, (H - 2 * PAD) / h);
    const offX = (W - w * scale) / 2;
    const offY = (H - h * scale) / 2;
    const px = (lon: number) => offX + (lon - minX) * kx * scale;
    const py = (lat: number) => offY + (maxY - lat) * scale;

    return {
      W,
      H,
      items: features.map((f) => ({
        name: f.properties.st_nm,
        d: ringsOf(f)
          .map((ring) => ring.map(([lon, lat], i) => `${i === 0 ? "M" : "L"}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join("") + "Z")
          .join(""),
      })),
    };
  }, [features]);

  const { min, max } = useMemo(() => {
    const vals = Object.values(STATE_STATS_BY_NAME)
      .map((s) => metric.get(s))
      .filter((v): v is number => v !== null);
    return { min: Math.min(...vals), max: Math.max(...vals) };
  }, [metric]);

  function fillFor(name: string) {
    const stat = STATE_STATS_BY_NAME[name];
    const v = stat ? metric.get(stat) : null;
    if (v === null || v === undefined) return "color-mix(in oklab, var(--muted) 70%, transparent)";
    let t = max === min ? 0.5 : (v - min) / (max - min);
    if (metric.invert) t = 1 - t;
    const pct = (8 + t * 88).toFixed(1);
    return `color-mix(in oklab, var(--sun) ${pct}%, var(--storm-deep))`;
  }

  const hovered = hover ? STATE_STATS_BY_NAME[hover.name] : null;
  const hoveredValue = hovered ? metric.get(hovered) : null;
  const hoveredSd = hovered && metric.sd ? metric.sd(hovered) : null;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {METRICS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMetricKey(m.key)}
            aria-pressed={m.key === metricKey}
            className={
              "rounded-full border px-3 py-1.5 text-sm transition-colors " +
              (m.key === metricKey
                ? "border-[color:var(--sun)] bg-[color:var(--sun)] text-background"
                : "border-foreground/20 text-foreground/70 hover:border-[color:var(--sun)] hover:text-foreground")
            }
          >
            {m.short}
          </button>
        ))}
      </div>

      <div
        ref={wrapRef}
        className="relative mt-4 rounded-lg border border-foreground/10 bg-card/40 p-2"
        onMouseLeave={() => setHover(null)}
      >
        {!paths ? (
          <div className="flex h-[420px] items-center justify-center text-sm text-foreground/50">Loading map…</div>
        ) : (
          <svg viewBox={`0 0 ${paths.W} ${paths.H}`} className="h-auto w-full max-h-[70vh]" role="img" aria-label={`Map of India: ${metric.label}`}>
            {paths.items.map((it) => (
              <path
                key={it.name}
                d={it.d}
                fill={fillFor(it.name)}
                stroke="var(--background)"
                strokeWidth={hover?.name === it.name ? 2.2 : 0.8}
                style={{ cursor: "pointer" }}
                onMouseMove={(e) => {
                  const rect = wrapRef.current?.getBoundingClientRect();
                  setHover({
                    name: it.name,
                    x: e.clientX - (rect?.left ?? 0),
                    y: e.clientY - (rect?.top ?? 0),
                  });
                }}
                onMouseEnter={(e) => {
                  const rect = wrapRef.current?.getBoundingClientRect();
                  setHover({ name: it.name, x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) });
                }}
              />
            ))}
          </svg>
        )}

        {hover && (
          <div
            className="pointer-events-none absolute z-10 max-w-[15rem] rounded-md border border-foreground/15 bg-popover px-3 py-2 text-xs shadow-lg"
            style={{ left: Math.min(hover.x + 14, (wrapRef.current?.clientWidth ?? 400) - 200), top: hover.y + 14 }}
          >
            <div className="font-semibold">{hovered?.label ?? hover.name}</div>
            <div className="mt-1 text-foreground/70">
              {metric.short}:{" "}
              <span className="text-foreground">
                {hoveredValue === null || hoveredValue === undefined ? "no data" : metric.format(hoveredValue)}
              </span>
              {hoveredSd !== null && hoveredSd !== undefined ? (
                <span className="text-foreground/50"> (SD {hoveredSd.toFixed(3)})</span>
              ) : null}
            </div>
            {hovered?.population ? (
              <div className="text-foreground/50">Population: {hovered.population.toLocaleString("en-US")}</div>
            ) : null}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-foreground/60">
        <span>{metric.invert ? "Wetter" : "Low"}</span>
        <span
          className="h-3 w-40 rounded-full"
          style={{
            background: metric.invert
              ? "linear-gradient(to right, color-mix(in oklab, var(--sun) 8%, var(--storm-deep)), color-mix(in oklab, var(--sun) 96%, var(--storm-deep)))"
              : "linear-gradient(to right, color-mix(in oklab, var(--sun) 8%, var(--storm-deep)), color-mix(in oklab, var(--sun) 96%, var(--storm-deep)))",
          }}
        />
        <span>{metric.invert ? "Drier" : "High"}</span>
        <span className="ml-2">
          {metric.invert
            ? `${metric.format(max)} → ${metric.format(min)}`
            : `${metric.format(min)} → ${metric.format(max)}`}
        </span>
        <span className="ml-auto flex items-center gap-1">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "color-mix(in oklab, var(--muted) 70%, transparent)" }} />
          no data
        </span>
      </div>
    </div>
  );
}
