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
          <span className="text-xl font-bold">Multifaceted definitons and perceptions.</span>
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
        <div className="mt-8 text-white space-y-6">
          <div>
            <h3 className="text-xl font-bold">Defining the Margin: Firms versus Individuals</h3>
            <p className="mt-4">
              One way to define informality is by what it lacks: state regulation, official registration, legal protections. When counting informality, one of the important choices to make in the definition is whether to look at individuals or firms (i.e., the intensive and extensive margins of informality).
            </p>
            <p className="mt-4">
              Looking at informal firms, also referred to as the <em>informal economy</em>, the informal sector comprises small, unregistered, or unincorporated private enterprises that fall outside official regulatory and tax frameworks and do not maintain full accounts. In India, this maps to the historical distinction between the <em>organized</em> and <em>unorganized</em> sectors, where the organized segment is legally defined as non-agricultural units employing ten or more workers with power, or twenty or more without power. If we instead look at informality from an employment perspective, as codified by the International Labor Organization{" "}
              <Link to="/references" hash="cite-ilostat2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (ILO 2026)
              </Link>
              , determining factors are workers' contracts and social safety net, encompassing all jobs—whether in formal enterprises, informal enterprises, or households—that lack basic social security coverage, paid annual leave, or protection against arbitrary dismissal. Some nuances are carried by the naming choices of informality measures: "individuals engaged in the informal economy" is more restrictive than "casual workers," which is generally more restrictive than "informal workers" (the ILO reports informality as the share of informal workers among all workers).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Data availability</h3>
            <p className="mt-4">
              Those structured definitions make informality data surprisingly tractable despite the phenomenon's hidden nature. Researchers exploit administrative and survey infrastructure to observe the margin directly. In Brazil, the <em>carteira de trabalho</em> allows researchers to precisely observe when workers transition out of legally binding formal contracts{" "}
              <Link to="/references" hash="cite-ulyssea2020" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Ulyssea 2020)
              </Link>
              . In India, the tracking of this margin shifted structurally in 2017, when the NSSO replaced its quinquennial employment rounds with the Periodic Labour Force Survey (PLFS), introducing methodological adjustments better suited to capturing high-frequency labor dynamics. Other ways to capture informality is through household surveys, enterprise surveys and Value Added Per Worker estimates.{" "}
              <Link to="/references" hash="cite-murthy2019" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                Murthy (2019)
              </Link>{" "}
              presents the different approaches to measuring informality in India.
            </p>
            <p className="mt-4">
              That said, aside from data availability, there are many factors when determining how to classify an activity or worker as informal (part-time work, workers with a contract but lacking social security benefits, ...) that complicate the evaluation of informality shares in a country or economy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Is informality good or bad?</h3>
            <p className="mt-2">Depends who you ask.</p>
          </div>
        </div>
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
