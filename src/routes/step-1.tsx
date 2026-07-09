import { createFileRoute, Link } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";
import { FieldScene } from "@/components/FieldScene";
import { InformalityTable } from "@/components/InformalityTable";


export const Route = createFileRoute("/step-1")({
  head: () => ({
    meta: [
      { title: "Step 01 — Building background knowledge" },
      { name: "description", content: "Getting acquainted with the topic of climate shocks and informality." },
    ],
  }),
  component: Step1,
});

function Step1() {
  return (
    <ChapterLayout
      eyebrow="Step 01"
      title="Building background knowledge"
      lede="What is informality? How come there's data on it? Why would it relate to climate change? Why India?"
    >
      <FieldScene />

      <section id="informality" className="scroll-mt-24 pt-16">
        <h2 className="font-display text-3xl md:text-4xl">What is informality?</h2>
        <p className="mt-4 text-white">
          In short: Informal work is employment outside the reach of formal labor protections: no
          written contract, no social security, no guaranteed minimum wage. In India, over 88% of
          the workforce is informal.
          <br />
          <br />
          In not so short:
        </p>
        <h3 className="mt-8 text-xl font-bold text-white">Multifaceted definitons and perceptions</h3>
        <p className="mt-4 text-white">
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
          Droughts and floods are linked to the same variables (temperature, precipitation, soil
          moisture) and mechanisms: temperature increase =&gt; water retention of air increases
          =&gt; it is both drier, and when it rains, it rains much more intensely.
        </div>

        <div className="mt-8 text-white space-y-6">
          <div>
            <h3 className="text-xl font-bold">India: a critical site for informality research</h3>
            <p className="mt-4">
              India offers a particularly instructive case. With the world's largest population and
              one of the highest informal employment rates globally — 87% as of 2025{" "}
              <Link to="/references" hash="cite-ilostat2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (ILO 2025)
              </Link>
              {" "}— India concentrates an extraordinary share of the world's informal workforce.
              In 2017, informal enterprises accounted for 43% of non-farm GDP and 68% of all
              non-farm employment{" "}
              <Link to="/references" hash="cite-jat2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Jat 2026)
              </Link>
              . Agriculture, which employs roughly 42% of the labor force, remains deeply
              intertwined with informality, seasonal precarity, and subsistence livelihoods{" "}
              <Link to="/references" hash="cite-ilostat2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (ILO 2025)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-behera2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Behera 2025)
              </Link>
              . These structural conditions make India a critical site for studying the channels
              through which economic shocks propagate across formal and informal segments of the
              labor market.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Acute exposure to climate risk</h3>
            <p className="mt-4">
              At the same time, India is acutely exposed to climate risk. The IPCC Sixth
              Assessment Report projects that extreme weather events will intensify and occur more
              frequently, generating growing economic and non-economic losses and damages{" "}
              <Link to="/references" hash="cite-ipcc2022b" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (IPCC 2022b)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-ipcc2022a" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (IPCC 2022a)
              </Link>
              . Among South Asian nations, India is considered one of the most vulnerable, owing
              to its geographical exposure, population pressure, and developmental challenges{" "}
              <Link to="/references" hash="cite-bahinipati2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Bahinipati 2026)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-behera2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Behera 2025)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-hammer2022" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Hammer 2022)
              </Link>
              . Droughts and floods are particularly prominent threats: research documents a
              persistent and severe drought risk for India's population, with economic losses
              increasing steadily between 1964 and 2019{" "}
              <Link to="/references" hash="cite-bahinipati2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Bahinipati 2026)
              </Link>
              . Increasing mean temperatures (0.25°C per decade) and declining precipitation both
              exacerbate drought frequency and intensity and amplify flood magnitudes during
              extreme rainfall periods{" "}
              <Link to="/references" hash="cite-sharma2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Sharma 2025)
              </Link>
              . Area and extreme rainfall thresholds are projected to increase by about 18(13)%
              and 58(50)% in the far future (2071–2100) under SSP5-8.5 (SSP2-4.5){" "}
              <Link to="/references" hash="cite-konda24" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Konda 2024)
              </Link>
              . Moreover, drought and flood losses exhibit significant regional disparity across
              Indian states, reflecting heterogeneous exposure, infrastructure capacity, and
              adaptive resources{" "}
              <Link to="/references" hash="cite-archana2024" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Archana 2024)
              </Link>
              . In sum, as climate change accelerates, the frequency, severity, and unpredictability
              of these events are projected to increase, making adaptation not merely a policy
              aspiration but an economic necessity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">A critical but underexplored intersection</h3>
            <p className="mt-4">
              The intersection of high informality and climate vulnerability defines a critical but
              underexplored research domain. The existing literature has examined how climate
              shocks affect labor productivity, migration, and poverty.{" "}
              <Link to="/references" hash="cite-ulyssea2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                Ulyssea (2026)
              </Link>
              , for instance, studies drought-induced migration from rural to urban areas in
              Brazil. Studies on India establish that agricultural regions are especially
              vulnerable to climatic shocks, with events such as floods and droughts directly
              threatening food production, economic stability, and poverty outcomes{" "}
              <Link to="/references" hash="cite-behera2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Behera 2025)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-colmer2021" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Colmer 2021)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-bahinipati2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Bahinipati 2026)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-joshi2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Joshi 2025)
              </Link>
              . Studies also highlight that high-income states are more resilient to climate
              damage, and that policy is an important factor in reducing damage{" "}
              <Link to="/references" hash="cite-patri2022" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Patri 2022)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-panwar2020" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Panwar 2020)
              </Link>
              ,{" "}
              <Link to="/references" hash="cite-kannan2025" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Kannan 2025)
              </Link>
              . Yet while these contributions identify significant economic vulnerabilities
              following extreme weather events, most do not isolate informality as a distinct
              outcome, nor do they specify the channels through which climate shocks alter the
              formal-informal composition of the labor market. This gap is consequential: if
              climate shocks systematically shift workers into or out of informality, then standard
              analyses of poverty and labor market resilience may be mischaracterizing the
              mechanisms at work. With a stronger focus on informality,{" "}
              <Link to="/references" hash="cite-lintbarrage2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                Lint &amp; Barrage (2026)
              </Link>
              {" "}investigate the labor market effects of hurricanes and temperature extremes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">This paper's contribution</h3>
            <p className="mt-4">
              This paper investigates the effect of droughts and floods on informal employment in
              India, drawing on district-level data across Indian states. The analysis
              distinguishes between formal and informal segments of the labor force and tests
              whether exposure to climatic events is a significant determinant of informality. Two
              competing mechanisms are plausible a priori. On one hand, the smaller production
              units and lower capital endowments characteristic of informal firms{" "}
              <Link to="/references" hash="cite-jat2026" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (Jat 2026)
              </Link>
              {" "}may render them more fragile in the face of climate shocks, reducing informality
              as these enterprises collapse. On the other hand, the relative flexibility and low
              fixed costs of informal arrangements may insulate such workers from rapid-onset
              events, while formal employment bears the greater burden of infrastructure
              destruction and economic contraction. Adjudicating between these mechanisms has
              direct implications for climate adaptation policy and worker protection frameworks.
              This study contributes to the growing literature on loss and damage from climate
              change, as defined by the{" "}
              <Link to="/references" hash="cite-unfccc2012" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                UNFCCC (2012)
              </Link>
              , and is aligned with SDG 8's commitment to promoting decent work and sustainable
              economic growth{" "}
              <Link to="/references" hash="cite-sdg" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
                (SDG)
              </Link>
              . By illuminating how extreme weather events reshape the formal-informal boundary,
              it aims to inform the design of more targeted and effective labor market policies in
              climate-vulnerable developing economies.
            </p>
          </div>
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
