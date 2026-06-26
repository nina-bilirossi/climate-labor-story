import { Link } from "@tanstack/react-router";

interface Props {
  /** When false, slides nav out of view (used on the homepage before scroll). Defaults to true. */
  visible?: boolean;
}

export function TopNav({ visible = true }: Props) {
  const linkBase =
    "whitespace-nowrap rounded px-2 py-1 text-foreground/80 hover:text-[color:var(--sun)]";
  const dropdownLink =
    "block rounded px-3 py-2 text-xs uppercase tracking-[0.2em] text-foreground/80 hover:bg-accent hover:text-[color:var(--sun)]";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-1 overflow-x-visible px-4 py-3 text-xs uppercase tracking-[0.2em]">
        <Link to="/" hash="top" className={linkBase}>
          Homepage
        </Link>

        <span className="text-foreground/30">·</span>

        <div className="group relative flex items-center">
          <button type="button" className={`${linkBase} flex items-center gap-1`}>
            CONTEXT <span aria-hidden>▾</span>
          </button>
          <div className="absolute right-0 top-full z-50 hidden min-w-[12rem] rounded-md border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur group-hover:block">
            <Link to="/" hash="step-1" className={dropdownLink}>
              Introduction
            </Link>
            <Link to="/" hash="step-2" className={dropdownLink}>
              Research gaps
            </Link>
          </div>
        </div>

        <span className="text-foreground/30">·</span>

        <div className="group relative flex items-center">
          <button type="button" className={`${linkBase} flex items-center gap-1`}>
            MY RESEARCH <span aria-hidden>▾</span>
          </button>
          <div className="absolute right-0 top-full z-50 hidden min-w-[12rem] rounded-md border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur group-hover:block">
            <Link to="/" hash="step-3" className={dropdownLink}>
              Plan and data
            </Link>
            <Link to="/" hash="step-4" className={dropdownLink}>
              Analysis
            </Link>
            <Link to="/" hash="step-5" className={dropdownLink}>
              Results
            </Link>
          </div>
        </div>

        <span className="text-foreground/30">·</span>

        <Link to="/" hash="step-6" className={linkBase}>
          Conclusions
        </Link>

        <span className="text-foreground/30">·</span>

        <Link to="/about" className={linkBase}>
          About me
        </Link>
      </div>
    </nav>
  );
}
