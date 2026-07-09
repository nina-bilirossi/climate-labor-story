import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { FieldScene } from "@/components/FieldScene";
import { InformalityTable } from "@/components/InformalityTable";


export const Route = createFileRoute("/step-1")({
  head: () => ({
    meta: [
      { title: "Step 01 — Building up background knowledge" },
      { name: "description", content: "Getting acquainted with the topic of climate shocks and informality." },
    ],
  }),
  component: Step1,
});

function Step1() {
  return (
    <ChapterLayout
      eyebrow="Step 01"
      title="Building up background knowledge"
      lede="What is informality? How come there's data on it? Why would it relate to climate change? Why India?"
    >
      <FieldScene />

      <section id="informality" className="scroll-mt-24 pt-16">
        <h2 className="font-display text-3xl md:text-4xl">What is informality?</h2>
        <p className="mt-4">
          Informal work is employment outside the reach of formal labor protections: no written
          contract, no social security, no guaranteed minimum wage. In India, over 88% of the
          workforce is informal.
          <br /><br />
          Multifaceted definitons and perceptions.
          <br /><br />
          Is it good or bad? Depends who you ask
        </p>
        <InformalityTable />
      </section>


      <section id="climate" className="scroll-mt-24 pt-16">
        <h2 className="font-display text-3xl md:text-4xl">Climate shocks in India</h2>
        <p className="mt-4">
          India is on the frontline of climate change. Heatwaves, erratic monsoons, and droughts
          increasingly disrupt the agricultural calendar that most rural households depend on. These
          shocks don't just harm crops — they ripple into labor markets, pushing workers toward
          informal, precarious jobs.
        </p>
        <div className="mt-4 text-foreground/80 italic">
          Droughts and floods are linked to the same variables and mechanisms
        </div>
      </section>

      <section id="labor" className="scroll-mt-24 pt-16">
        <h2 className="font-display text-3xl md:text-4xl">Indian labor policy history</h2>
        <p className="mt-4">
          From colonial-era factory acts to post-independence protective legislation and the more
          recent Labor Codes, India's approach to regulating work has shifted repeatedly. Yet the
          formal/informal divide has widened rather than closed, shaping how households absorb
          shocks today.
        </p>
      </section>

    </ChapterLayout>
  );
}
