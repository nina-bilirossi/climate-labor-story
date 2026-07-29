const references: Record<string, string> = {
  "1": "Abraham and Kesar (2025)",
  "2": "LaPorta and Shleifer (2014)",
  "3": "Jat and Ramaswami (2026)",
  "4": "Dandapat et al. (2025)",
  "5": "Sahoo and Neog (2017)",
  "6": "Barrage and Schön (2026)",
  "7": "Imbert and Ulyssea (2026)",
  "8": "Ulyssea (2020)",
  "9": "Meemken et al. (2025)",
  "10": "Chiplunkar et al. (2024)",
  "11": "Banerjee and Duflo (2011)",
  "12": "Elgin et al. (2019)",
};

function Cite({ ids }: { ids: string[] }) {
  return (
    <sup className="ml-0.5 text-foreground/60">
      {ids.map((id, i) => (
        <span key={id}>
          <abbr
            title={references[id]}
            className="no-underline cursor-help"
          >
            {id}
          </abbr>
          {i < ids.length - 1 ? ", " : ""}
        </span>
      ))}
    </sup>
  );
}

type Item = { text: string; cites: string[] };

const rows: {
  group: string;
  pros: Item[];
  cons: Item[];
}[] = [
  {
    group: "Workers",
    pros: [
      { text: "Flexible hours", cites: ["5", "8"] },
      { text: "Tax evasion", cites: ["5", "8"] },
      { text: "Autonomy", cites: ["1", "5"] },
      { text: "Reduced administrative burden", cites: ["13"] },
    ],
    cons: [
      { text: "Lower wage", cites: ["1", "10"] },
      { text: "Low formal labor market transition", cites: ["1"] },
      {
        text: "Limited social security benefits: healthcare, unemployment, retirement (country specific)",
        cites: ["2", "9"],
      },
      {
        text: "Uncertainty around employment duration, working hours, and pay",
        cites: ["9"],
      },
    ],
  },
  {
    group: "Firms",
    pros: [
      { text: "Tax evasion", cites: ["2"] },
      { text: "Reduced entry costs", cites: ["8"] },
      { text: "Reduced recurrent administrative burden", cites: ["8", "13"] },
    ],
    cons: [
      { text: "Forced to remain small*", cites: ["3"] },
      { text: "Risk of inspection (stress)", cites: ["7"] },
      {
        text: "Difficult access to financial products (credit, insurance)",
        cites: ["2", "11", "13"],
      },
      { text: "Limited physical capital accumulation", cites: ["13"] },
      { text: "Low productivity and low quality output", cites: ["2"] },
    ],
  },
  {
    group: "Economy / Government / Policymaker",
    pros: [{ text: "Short term unemployment buffer", cites: ["7"] }],
    cons: [
      { text: "Tax revenue loss, distortions", cites: ["6", "12"] },
      { text: "Inadequate worker protection policy", cites: ["9"] },
      { text: "Low productivity, resource misallocation", cites: ["3", "13"] },
      { text: "Distributional concerns**", cites: ["4", "5"] },
      { text: "Less traceability of energy and capital use", cites: ["6"] },
      { text: "Unfair competition", cites: ["2"] },
      { text: "Slower human capital accumulation", cites: ["13"] },
    ],
  },
];

export function InformalityTable() {
  return (
    <figure className="not-prose my-8">
      <figcaption className="text-center font-display text-lg mb-4">
        Table 1: Generalized Pros and Cons of Informality
      </figcaption>
      <div className="overflow-x-auto border-y border-foreground/20">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-foreground/20">
              <th className="w-1/6 py-3 px-3 text-left font-semibold align-bottom"></th>
              <th className="w-2/5 py-3 px-3 text-left font-semibold align-bottom">
                Pros
              </th>
              <th className="py-3 px-3 text-left font-semibold align-bottom">
                Cons
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.group}
                className="border-b border-foreground/10 last:border-0 align-top"
              >
                <th className="py-4 px-3 text-left font-semibold">
                  {row.group}
                </th>
                <td className="py-4 px-3">
                  <ul className="list-disc pl-5 space-y-1.5">
                    {row.pros.map((item, i) => (
                      <li key={i}>
                        {item.text}
                        <Cite ids={item.cites} />
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-3">
                  <ul className="list-disc pl-5 space-y-1.5">
                    {row.cons.map((item, i) => (
                      <li key={i}>
                        {item.text}
                        <Cite ids={item.cites} />
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-xs text-foreground/70 space-y-2">
        <p>
          *Informality and firm size are mutually reinforcing: informal firms
          cannot grow without risking inspection<sup>8</sup>, and small firms
          may remain informal because of high formalization costs
          <sup>2</sup>. Low managerial human capital may independently drive
          both outcomes. Measuring capital stocks across formal and informal
          firms remains methodologically challenging<sup>2</sup>.
        </p>
        <p>
          **E.g., gender and settlement: Formal workers and informal employers
          tend to concentrate in urban areas, while own-account, unpaid family,
          and casual workers are predominantly rural<sup>5</sup>.
        </p>
        <p className="pt-2 border-t border-foreground/10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          {Object.entries(references).map(([id, ref]) => (
            <span key={id}>
              <sup>{id}</sup> {ref}
            </span>
          ))}
        </p>
      </div>
    </figure>
  );
}
