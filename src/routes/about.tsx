import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";
import { ChapterLayout } from "@/components/ChapterLayout";
import ninaPhoto from "@/assets/nina-portrait.jpeg.asset.json";

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
      lede="MSc Agricultural Economics @ ETH Zürich. I like maths, economics, and am fascinated by food and agricultural systems."
    >
      <div className="not-prose flex flex-col sm:flex-row gap-6 items-stretch">
        <div className="shrink-0 w-full sm:w-56">
          <img
            src={ninaPhoto.url}
            alt="Nina hiking in the mountains"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-foreground/85 leading-relaxed">
          I am defined by curiosity and desire to learn.&nbsp;After my Bachelor's in Maths and
          Economics,&nbsp;I wanted to study something more applied&nbsp;and&nbsp;tangible, and to learn
          more about the real world. This led me to the&nbsp;Master's program in Agricultural
          Economics at ETHZ. I got to diversify&nbsp;and deepen&nbsp;my knowledge of food
          systems&nbsp;and the world through classes, internships, and projects. It's been very
          exciting, and the master's thesis&nbsp;is the last bit of this chapter for me. It summarizes
          my interests: quantitative and mathematical methods applied to environmental&nbsp;economic
          problems, caring for livelihoods in a future marked by an uncertain climate.
        </p>
      </div>

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

      <p className="mt-4">Any suggestions?&nbsp;</p>

      <div className="not-prose flex flex-wrap items-center gap-4 pt-2">
        <span className="inline-flex items-center gap-2 text-sm text-foreground/70">
          <span className="text-lg leading-none">🇫🇷</span>
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-foreground/70">
          <span className="text-lg leading-none">🇧🇷</span>
        </span>
        <span className="mx-1 text-foreground/30">· &nbsp;</span>
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
