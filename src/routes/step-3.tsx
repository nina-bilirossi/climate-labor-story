import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import * as ReactKatexNS from "react-katex";

const ReactKatex = ((ReactKatexNS as Record<string, unknown>)["default"] ?? ReactKatexNS) as unknown as {
  InlineMath: React.ComponentType<{ math: string }>;
  BlockMath: React.ComponentType<{ math: string }>;
};
const { InlineMath, BlockMath } = ReactKatex;
import { useState, ReactNode } from "react";
const droughtWorkflow = "/images/spei-workflow-2026-07-29.png";
const floodWorkflow = "/images/flood-workflow.png";
const floodBlock1 = "/images/flood-block-1.png";
const floodBlock2 = "/images/flood-block-2.png";
const floodBlock3 = "/images/flood-block-3.png";
const floodBlock4 = "/images/flood-block-4.png";
const floodBlock6 = "/images/flood-block-6.png";
const floodBlock7 = "/images/flood-block-7.png";

// Gallery of flood workflow detail images, numbered per user's mapping.
const FLOOD_GALLERY: Array<{ badge: string; label: string; image: string }> = [
  { badge: "1", label: "ERA5 daily precipitation", image: floodBlock1 },
  { badge: "2", label: "GEV threshold τᵢ", image: floodBlock2 },
  { badge: "3", label: "#flood / district-year", image: floodBlock6 },
  { badge: "4", label: "Average to state-year", image: floodBlock7 },
  { badge: "A", label: "ERA5 soil moisture", image: floodBlock3 },
  { badge: "B", label: "Soil moisture modifier f(sᵢ,d)", image: floodBlock4 },
];

export const Route = createFileRoute("/step-3")({
  head: () => ({
    meta: [
      { title: "Step 03 — Laying out the plan and getting the data" },
      {
        name: "description",
        content: "Designing the empirical strategy and assembling the dataset.",
      },
    ],
  }),
  component: Step3,
});

type MathKey = "inf" | "zeta" | "alpha" | "gamma";

function Step3() {
  const [active, setActive] = useState<MathKey | null>(null);

  const HL = ({
    k,
    children,
    inline = false,
  }: {
    k: MathKey;
    children: ReactNode;
    inline?: boolean;
  }) => {
    const isActive = active === k;
    return (
      <span
        onMouseEnter={() => setActive(k)}
        onMouseLeave={() => setActive(null)}
        className={[
          inline ? "inline-block" : "inline-block",
          "rounded px-1 py-0.5 -mx-0.5 transition-colors duration-150",
          isActive
            ? "bg-[color:var(--sun)]/70 text-background"
            : "bg-[color:var(--sun)]/15",
        ].join(" ")}
      >
        {children}
      </span>
    );
  };

  return (
    <ChapterLayout
      eyebrow="Step 03"
      title="Laying out the plan and getting the data"
      lede={
        <>
          I address the short-term effects of climate shocks on informality by
          combining labor data with satellite-derived climate data in a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Panel_analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors"
          >
            panel regression
          </a>{" "}
          framework.
        </>
      }
    >
      <div className="space-y-6">
        <p>
          I estimate coefficients using a two-way fixed-effect panel regression.
          The baseline specification is as follows:
        </p>

        <div className="my-8 overflow-x-auto flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-lg">
          <HL k="inf">
            <InlineMath math="\text{inf}_{i, t}" />
          </HL>
          <InlineMath math="= C +" />
          <InlineMath math="\beta_1 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t}" />
          </HL>
          <InlineMath math="+ \beta_2 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t-1}" />
          </HL>
          <InlineMath math="+ \beta_3 \cdot" />
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t-2}" />
          </HL>
          <InlineMath math="+" />
          <HL k="alpha">
            <InlineMath math="\alpha_i" />
          </HL>
          <InlineMath math="+" />
          <HL k="gamma">
            <InlineMath math="\gamma_t" />
          </HL>
          <InlineMath math="+ \delta_i \cdot t + \epsilon_{i, t}" />
        </div>

        <p className="mt-8">
          where <InlineMath math="i" /> indexes states and{" "}
          <InlineMath math="t" /> denotes the period (annual period from June to
          July).{" "}
          <HL k="inf">
            <InlineMath math="\text{inf}_{i, t}" />
          </HL>{" "}
          is the informal employment share, and{" "}
          <HL k="zeta">
            <InlineMath math="\zeta_{i, t}" />
          </HL>{" "}
          is the climate shock index: either the yearly drought index or the
          yearly flood index. I include optimal lags as determined by a BIC
          analysis (3 lags for the drought index, 2 for the flood index). I
          control for state- (
          <HL k="alpha">
            <InlineMath math="\alpha_i" />
          </HL>
          ) and time-fixed (
          <HL k="gamma">
            <InlineMath math="\gamma_t" />
          </HL>
          ) effects, and include state-specific linear time trends (to account
          for state-specific development paths, urbanization, and sectoral
          shifts). Standard errors are clustered at the state level, and all
          regressions are weighted by 2020 population.
        </p>

        <h3 className="mt-8 border-t border-foreground/10 pt-8 font-semibold text-lg mb-4">
          This recipe (analysis) requires a few ingredients:
        </h3>

        <ul className="list-disc pl-5 space-y-2">
          <li
            onMouseEnter={() => setActive("inf")}
            onMouseLeave={() => setActive(null)}
          >
            <a
              href="#informality-construction"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("informality-construction")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors cursor-pointer"
            >
              a set of state- and year- specific informality values
            </a>
          </li>
          <li
            onMouseEnter={() => setActive("zeta")}
            onMouseLeave={() => setActive(null)}
          >
            <a
              href="#climate-construction"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("climate-construction")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors cursor-pointer"
            >
              a set of state- and year- specific climate shock indicators (one
              each for drought and floods)
            </a>
          </li>
          <li>
            population per state, to use as weight and make more populated
            states more influential on the coefficients (to reflect the actual
            affected population)
            <p className="mt-4 italic text-foreground/70">
              Specific instructions on data retrieval, along with all my code,
              is decribed in the thesis manuscript (download it at the bottom of
              the page) and on my Github.
            </p>
          </li>
        </ul>

        <section id="informality-construction" className="mt-12 scroll-mt-24 border-t border-foreground/10 pt-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            Construction of the informality share
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[color:var(--sun)]"
              aria-label="House icon"
            >
              <path d="M3 9.5L12 4l9 5.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </h3>

          <div className="space-y-3">
            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span>Some Info on the Labor data:&nbsp;Periodic Labor Force Survey of India (PLFS)</span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Representative national household survey</li>
                  <li>Yearly from 2017 to 2024, for each of the 36 states and union territories</li>
                  <li>Open access, upon request</li>
                </ul>
                <p>
                  More info on survey design:{" "}
                  <a
                    href="https://www.dataforindia.com/plfs-explainer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors"
                  >
                    https://www.dataforindia.com/plfs-explainer/
                  </a>
                </p>
              </div>
            </details>

            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span className="flex items-center gap-2">
                  Index construction
                  <img
                    src="https://access.tufts.edu/sites/default/files/2017-10/STATA.svg"
                    alt="Stata"
                    className="inline-block h-4 w-auto"
                  />
                </span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  My main measure of informality is the <span className="font-bold text-foreground">share of casual workers</span> among all workers aged 15 to 64.
                  Casual worker status is defined as including individuals who worked in a household enterprise (self-employed) as own account workers or helpers, as casual wage labor in public works, or as casual wage labor in other types of work.
                  This excludes individuals who worked as employers in a household enterprise or as salaried or regular-wage workers.
                  Note that begging and prostitution are excluded from the labor force (as per the PLFS classification).
                </p>
                <p>
                  The status of a casual worker is determined if an individual engaged in casual work as a primary or subsidiary activity (≥ 30 days) over the past 365 days.
                </p>
                <p>
                  I also compute the share of informality for each state for males and females (other genders represent a tiny, if not invisible, fraction of the survey respondents, so they are excluded), and rural and urban areas separately. Additionally, I generate state splits based on the share of agricultural employment and state income [I also tested for geography (north-east, south, ...) but found no significant results, so I dropped it].
                </p>
              </div>
            </details>
          </div>
        </section>

        <section id="climate-construction" className="mt-12 scroll-mt-24 border-t border-foreground/10 pt-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            Construction of the climate shock indicators
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-[color:var(--sun)] -rotate-12"
              aria-label="Satellite icon"
            >
              {/* Left solar panel wing */}
              <rect x="2" y="20" width="18" height="24" rx="2" />
              <path d="M7 20v24 M12 20v24 M17 20v24" />
              <path d="M2 27h18 M2 34h18 M2 41h18" />
              {/* Right solar panel wing */}
              <rect x="44" y="20" width="18" height="24" rx="2" />
              <path d="M49 20v24 M54 20v24 M59 20v24" />
              <path d="M44 27h18 M44 34h18 M44 41h18" />
              {/* Connecting arms */}
              <path d="M20 32h6" />
              <path d="M38 32h6" />
              {/* Central satellite body */}
              <rect x="26" y="24" width="12" height="16" rx="3" />
              {/* Body details */}
              <circle cx="32" cy="30" r="2" fill="currentColor" stroke="none" />
              <circle cx="32" cy="36" r="1.5" fill="currentColor" stroke="none" />
              {/* Dish antenna */}
              <path d="M32 24c0-6 4-10 9-11" />
              <path d="M41 13c-4 1-7 5-7 10" />
              <circle cx="41" cy="13" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </h3>

          <div className="border border-sun bg-sun/10 rounded-lg p-4 mb-4">
            <p className="font-semibold text-foreground mb-2">Why satellite data?</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Risk = hazard × vulnerability × exposure. I focus on capturing hazard{" "}
              and therefore try to get data as objective and unaffected by human
              decisions. Damage data reflects part of vulnerability. Satellite data
              is more objective than station data because it is likely that stations
              are unevenly distributed, and richer states may have different
              infrastructure than poorer states, creating a bias.
              <br />
              <br />
              Note that I do integrate some exposure, since I am weighing events by
              population living in the area of the event, but I assume that exposure
              was not chosen, i.e., people could not determine they would be exposed
              to those threats when they established their livelihoods in those
              areas.
            </p>
          </div>

          <div className="space-y-3">
            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span className="flex items-center gap-2">
                  Drought index
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg"
                    alt="R"
                    className="inline-block h-5 w-auto"
                  />
                </span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  The drought index is based on the SPEI-12 index, which looks at temperature and evapotranspiration over the past 12 months. Values are normalized at the pixel level so that a negative score indicates a negative deviation (drought) compared to the baseline. I filter out the positive values and keep only the negative values, so that my index reflects the intensity of a drought.
                </p>

                <p className="pt-4">
                  My workflow for the index construction from satellite to state-year index is the following
                </p>

                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Download SPEI (12 months) gridded data (0.25° resolution) from Copernicus
                  </li>
                  <li>
                    Compute population per district and average SPEI per district
                  </li>
                  <li>
                    Aggregate to state level using population weight
                  </li>
                </ol>

                <figure className="my-6">
                  <img
                    src={droughtWorkflow}
                    alt="Drought index construction workflow showing SPEI gridded data and population raster being combined at district level, then aggregated to state boundaries to produce a population-weighted state SPEI12 map."
                    className="w-full rounded-lg border border-foreground/10 bg-background"
                  />
                  <figcaption className="mt-3 text-sm text-foreground/60 text-center">
                    Workflow: from SPEI gridded data and population raster to population-weighted state-level SPEI12.
                    <br />
                    Sources: ECMWF (SPEI), WorldPop (population), GADM (state boundaries).
                  </figcaption>
                </figure>
              </div>
            </details>

            <details className="group border-t border-foreground/10 pt-4">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <span className="flex items-center gap-2">
                  Flood index
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg"
                    alt="Python"
                    className="inline-block h-5 w-auto"
                  />
                </span>
                <span className="ml-4 text-foreground/50 transition-transform group-open:rotate-90">▶</span>
              </summary>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  Building the flood index was much less straightforward than the
                  drought index. But it was also a lot more fun and required more
                  investigation. It seems there is no unanimous approach to
                  measuring floods in environmental economics. Floods are complex&nbsp;and
                  can be broken down into three main categories: flash floods,
                  fluvial floods, and coastal floods. Keeping the rationale of
                  focusing on the hazard, and because of my technical expertise, I
                  focus on flash floods (fluvial and coastal floods reflect, to some
                  extent, human decisions in establishing in that area, and their
                  damage will also depend on land use choices and infrastructure -
                  many more variables than just precipitation intensity).
                </p>
                <p>
                  What's a flash flood? Essentially, very intense precipitation over
                  the course of a few hours. Those can be very destructive (I go
                  into more details in{" "}
                  <Link
                    to="/step-5"
                    className="underline underline-offset-4 decoration-[color:var(--sun)]/30 hover:decoration-[color:var(--sun)] transition-colors"
                  >
                    Results
                  </Link>
                  , as I explain the observed motions).
                </p>
                <p>
                  So how do I go about measuring them?&nbsp;
                  I capture the year's worst hit by flash floods by counting the
                  number of extreme events that occurred in that year in a given
                  state, weighing the events within the state by how many people
                  live in the affected area.
                </p>
                <div className="mt-4 space-y-4">
                  <p>
                    But what counts as an extreme event? For each district, I ask,{" "}
                    <span className="rounded px-1.5 py-0.5 font-semibold italic bg-[color:var(--sun)]/15">
                      "If I wait 10 years, what’s the worst event I can reasonably
                      expect? How many times was this value exceeded?"
                    </span>
                    &nbsp;This is known as "return period value exceedance" (common in
                    insurance). You can find the details of my process in the
                    thesis itself; here's the overview. Ah yes, also, because
                    research suggests that when the soil is drier, it is much
                    harder for water to penetrate, so that very dry soil
                    amplifies the intensity of flash floods [think of the
                    animation on the website's welcome page]. Essentially, I
                    start by looking at precipitation, calculate the extreme
                    threshold, and count how many times it is surpassed,
                    multiplying it by a multiplier so that if the soil was drier
                    than usual at that location on that day, the event counts as
                    stronger.
                  </p>
                  <figure className="mt-6">
                    <div className="relative w-full rounded-lg border border-foreground/10 bg-white overflow-hidden">
                      <img
                        src={floodWorkflow}
                        alt="Flood index workflow: from ERA5 precipitation and soil moisture to a population-weighted state-year flash-flood index"
                        className="w-full block"
                      />
                      {[
                        { badge: "1", left: "1.5%", top: "8%" },
                        { badge: "2", left: "27%", top: "8%" },
                        { badge: "A", left: "1.5%", top: "43%" },
                        { badge: "B", left: "27%", top: "43%" },
                        { badge: "3", left: "73%", top: "29%" },
                        { badge: "4", left: "73%", top: "52%" },
                      ].map((b) => (
                        <span
                          key={b.badge}
                          className="absolute flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[color:var(--sun)] text-background text-xs sm:text-sm font-semibold shadow"
                          style={{ left: b.left, top: b.top }}
                        >
                          {b.badge}
                        </span>
                      ))}
                    </div>
                  <figcaption className="mt-3 text-sm text-foreground/60 text-center">
                    Workflow: from precipitation and soil moisture data to a population-weighted state-year flash-flood index.
                    <br />
                    Sources: ECMWF (ERA5-LAND, via Google Earth Engine), WorldPop (population), GADM (state boundaries).
                  </figcaption>
                    <FloodGallery />
                  </figure>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl">The data, state by state</h2>
          <p className="mt-3 text-foreground/70 max-w-3xl">
            Pick an indicator to see how it varies across the 35 states and union territories in the
            sample (Lakshadweep excluded). Hover a state for its value.
          </p>
          <IndiaMap />
          <p className="mt-3 text-sm text-foreground/50">
            State-level summary statistics. SPEI, flood and extreme precipitation indices are period
            means; agricultural share of employment and baseline informality (casual labour share)
            are reported where available.
          </p>
        </section>
      </div>
    </ChapterLayout>
  );
}

function FloodGallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {FLOOD_GALLERY.map((item, i) => (
          <button
            key={item.badge}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group relative rounded-md border border-foreground/10 bg-white overflow-hidden hover:ring-2 hover:ring-[color:var(--sun)] transition"
            aria-label={`Enlarge ${item.label}`}
          >
            <span className="absolute top-1 left-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--sun)] text-background text-xs font-semibold shadow">
              {item.badge}
            </span>
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-28 object-cover"
            />
            <span className="block px-2 py-1 text-[11px] text-foreground/70 text-center truncate">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIdx(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div
            className="relative max-w-6xl w-full max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10">
              <span className="flex items-center gap-2 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--sun)] text-background text-xs font-semibold">
                  {FLOOD_GALLERY[openIdx].badge}
                </span>
                {FLOOD_GALLERY[openIdx].label}
              </span>
              <button
                type="button"
                onClick={() => setOpenIdx(null)}
                className="text-sm px-2 py-1 rounded hover:bg-foreground/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <img
              src={FLOOD_GALLERY[openIdx].image}
              alt={FLOOD_GALLERY[openIdx].label}
              className="w-full max-h-[80vh] object-contain bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
