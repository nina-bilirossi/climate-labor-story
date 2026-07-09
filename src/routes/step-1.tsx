import { createFileRoute, Link } from "@tanstack/react-router";
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
        <p className="mt-4 text-white">
          Informal work is employment outside the reach of formal labor protections: no written
          contract, no social security, no guaranteed minimum wage. In India, over 88% of the
          workforce is informal.
          <br /><br />
          Multifaceted definitons and perceptions.
          <br /><br />
          Informality is one of those concepts that can be talked about or quantified in many
          different ways. In fact, because countries have different laws, labor systems, and data
          available, informality needs to be quantified and judged in different ways. One core
          element to decide on when discussing informality is whether we are looking at firms or
          workers. My research focuses on workers, as this more closely aligns with my desire to
          observe the effects of climate change on livelihoods.
          <br /><br />
          Nevertheless, the literature has provided much reflection on why firms decide to
          formalize or not.{" "}
          <Link
            to="/references"
            hash="cite-ulyssea2020"
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            Ulyssea (2020)
          </Link>{" "}
          provides an account of those views, and argues that the three main paradigms are not
          contradictory, but rather highlight heterogeneous informal firms within the same economy.
          The backbone argument to those views is that formalization comes at a cost (administrative
          burden, regulatory constraints, financial barriers) which firms cannot or do not want to
          pay. The three main paradigms around informality are:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-white">
          <li>
            <strong>The survivalist view:</strong> those informal firms would not break even if
            they were to become formal. They operate in a different bubble of the economy and do
            not compete with formal firms. They are too different, not from the same world.
          </li>
          <li>
            <strong>The unfair competition view:</strong> those informal firms would break even if
            they were to become formal, but benefit from remaining informal because of the avoided
            costs.
          </li>
          <li>
            <strong>The untapped entrepreneurial energy view:</strong> those informal firms would
            break even and net benefit from formalizing (e.g., they could expand), but remain
            informal because of formalization constraints.
          </li>
        </ul>
        <p className="mt-4 text-white">
          Informality is
          <br /><br />
          Is it good or bad? Depends who you ask.
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
