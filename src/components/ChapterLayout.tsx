import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface Props {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
}

export function ChapterLayout({ eyebrow, title, lede, children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--sun)]">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">{title}</h1>
        {lede && <p className="mt-6 text-lg text-foreground/70 leading-relaxed">{lede}</p>}
        <div className="prose-thesis mt-12 space-y-6 text-foreground/85 leading-relaxed">
          {children}
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
