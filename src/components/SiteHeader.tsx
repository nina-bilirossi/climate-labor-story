import { TopNav } from "@/components/TopNav";

export function SiteHeader() {
  return (
    <>
      <TopNav visible />
      {/* Spacer to offset the fixed nav height */}
      <div aria-hidden className="h-[52px]" />
    </>
  );
}
