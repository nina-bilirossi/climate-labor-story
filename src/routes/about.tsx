import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
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
      lede="MSc Agricultural Economics @ ETH Zürich. I like math, economics, and am fascinated bvy foos and agricultural systems."
    >
      <p>
        I am defined by curiosity and desire to learn.&nbsp;After my Bachelor's in Maths and
        Economics,&nbsp;I wanted to study something more applied&nbsp;and&nbsp;tangible, and to learn
        more about the real world. This led me to the&nbsp;Master's program in Agricultural
        Economics at ETHZ. I got to diversify&nbsp;and deepen&nbsp;my knowledge of food
        systems&nbsp;and the world through classes, internships, and projects. It's been very
        exciting, and the master's thesis&nbsp;is the last bit of this chapter for me. It summarizes
        my interests: quantitative and mathematical methods applied to environmental&nbsp;economic
        problems, caring for livelihoods in a future marked by an uncertain climate.
      </p>

      <p>
        If you want the more personal side of how this thesis came together,&nbsp;
        <Link
          to="/reflections"
          className="underline decoration-[color:var(--sun)] decoration-2 underline-offset-4 hover:text-foreground"
        >
          read my reflections on writing the master's thesis
        </Link>
        .
      </p>

      <div className="flex items-center gap-4 pt-2">
        <a
          href="https://www.linkedin.com/in/nina-bili-rossi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:nina.bilirossi@gmail.com"
          aria-label="Email Nina"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </ChapterLayout>
  );
}
