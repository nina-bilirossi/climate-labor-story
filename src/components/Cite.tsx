import { Link } from "@tanstack/react-router";
import { referencesByKey } from "@/data/references";

interface CiteProps {
  k: string;
  /** Optional display override. Defaults to "Author, Year" derived from bib entry. */
  children?: React.ReactNode;
}

function formatAuthorsShort(authors?: string): string {
  if (!authors) return "";
  // Split on " and " or " AND "
  const list = authors.split(/\s+and\s+/i).map((a) => a.trim()).filter(Boolean);
  const lastNames = list.map((a) => {
    if (a.includes(",")) return a.split(",")[0].trim();
    const parts = a.split(/\s+/);
    return parts[parts.length - 1];
  });
  if (lastNames.length === 1) return lastNames[0];
  if (lastNames.length === 2) return `${lastNames[0]} & ${lastNames[1]}`;
  return `${lastNames[0]} et al.`;
}

export function Cite({ k, children }: CiteProps) {
  const ref = referencesByKey[k.toLowerCase()];
  const label =
    children ??
    (ref ? `${formatAuthorsShort(ref.authors) || ref.key}, ${ref.year ?? ""}`.replace(/, $/, "") : k);
  return (
    <Link
      to="/references"
      hash={`cite-${k.toLowerCase()}`}
      className="text-[color:var(--sun)] underline decoration-dotted underline-offset-2 hover:decoration-solid"
    >
      {label}
    </Link>
  );
}
