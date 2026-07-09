import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { references, type Reference } from "@/data/references";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References — Monsoon & Margins" },
      { name: "description", content: "Bibliography and works cited." },
    ],
  }),
  component: ReferencesPage,
});

function stripBraces(s?: string): string {
  if (!s) return "";
  return s.replace(/[{}]/g, "");
}

function formatAuthors(authors?: string): string {
  if (!authors) return "";
  return stripBraces(authors)
    .split(/\s+and\s+/i)
    .map((a) => a.trim().replace(/\s+/g, " "))
    .join(", ");
}

function sortKey(r: Reference): string {
  return (r.authors || r.key).toLowerCase();
}

function bestUrl(r: Reference): string | undefined {
  if (r.url) return r.url;
  if (r.doi) {
    return r.doi.startsWith("http") ? r.doi : `https://doi.org/${r.doi.replace(/^https?:\/\/doi\.org\//, "")}`;
  }
  return undefined;
}

function ReferenceEntry({ r }: { r: Reference }) {
  const url = bestUrl(r);
  return (
    <li id={`cite-${r.key.toLowerCase()}`} className="scroll-mt-24 target:bg-[color:var(--sun)]/10 rounded-md px-2 py-2 -mx-2">
      <span className="text-foreground">{formatAuthors(r.authors)}</span>
      {r.year && <span className="text-foreground"> ({r.year})</span>}
      {r.title && (
        <>
          {". "}
          <span className="italic text-foreground/90">{r.title}</span>
        </>
      )}
      {r.journal && (
        <>
          {". "}
          <span>{r.journal}</span>
          {r.volume && <span>, {r.volume}</span>}
          {r.number && <span>({r.number})</span>}
          {r.pages && <span>, {r.pages}</span>}
        </>
      )}
      {r.booktitle && (
        <>
          {". In "}
          <span>{r.booktitle}</span>
          {r.pages && <span> (pp. {r.pages})</span>}
        </>
      )}
      {r.publisher && <span>. {r.publisher}</span>}
      {r.institution && <span>. {r.institution}</span>}
      {r.howpublished && <span>. {r.howpublished}</span>}
      <span>.</span>
      {url && (
        <>
          {" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--sun)] underline decoration-dotted underline-offset-2 hover:decoration-solid break-all"
          >
            {url}
          </a>
        </>
      )}
    </li>
  );
}

function ReferencesPage() {
  // Smooth scroll to hash on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hash;
    if (h) {
      const el = document.getElementById(h.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const sorted = [...references].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">Bibliography</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">References</h1>
        <p className="mt-6 text-foreground/70">
          {sorted.length} works cited. Click any in-text citation to jump here.
        </p>
        <ol className="mt-12 space-y-5 text-sm text-foreground/80 leading-relaxed list-none">
          {sorted.map((r) => (
            <ReferenceEntry key={r.key} r={r} />
          ))}
        </ol>
      </article>
      <SiteFooter />
    </div>
  );
}
