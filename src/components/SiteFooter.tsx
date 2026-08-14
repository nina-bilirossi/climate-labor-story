import { Link } from "@tanstack/react-router";


export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-foreground/50">
      <div>
        Master's thesis ·{" "}
        <Link to="/about" className="underline decoration-dotted underline-offset-2 hover:text-foreground/80">
          Nina Bili Rossi
        </Link>
        , MSc Agricultural Economics @ ETH Zürich
      </div>
      <div className="mt-2">
        Feeling more academic? Download my official thesis{" "}
        <a
          href={thesisPdf.url}
          download="Casual-Business_BiliRossi_MscThesis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-foreground/80"
        >
          here
        </a>
      </div>
      <div className="mt-2">
        <Link to="/references" className="underline decoration-dotted underline-offset-2 hover:text-foreground/80">
          References
        </Link>
      </div>
    </footer>
  );
}
