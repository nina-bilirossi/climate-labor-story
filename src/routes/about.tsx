import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Climate Shocked Workers" },
      {
        name: "description",
        content:
          "A little about Nina Bili Rossi, MSc Agricultural Economics @ ETH Zürich, and the story behind this thesis.",
      },
      { property: "og:title", content: "About — Climate Shocked Workers" },
      {
        property: "og:description",
        content: "About the author of this master's thesis.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <ChapterLayout
      eyebrow="About"
      title="Hi, I'm Nina"
      lede="MSc Agricultural Economics @ ETH Zürich. I care about how people make a living when the climate stops cooperating."
    >
      <p>
        Placeholder — a few paragraphs about my background, what drew me to this question, and the
        path that led to this thesis.
      </p>

      <p>
        If you want the messier, more personal side of how this thesis came together — the false
        starts, the small wins, and the things I'd do differently —{" "}
        <Link
          to="/reflections"
          className="underline decoration-[color:var(--sun)] decoration-2 underline-offset-4 hover:text-foreground"
        >
          read my reflections on writing the master's thesis
        </Link>
        .
      </p>
    </ChapterLayout>
  );
}
