import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/ChapterLayout";

export const Route = createFileRoute("/reflections")({
  head: () => ({
    meta: [
      { title: "Bonus — Reflections on Writing the Thesis" },
      {
        name: "description",
        content:
          "A personal reflection on the experience of writing a master's thesis — what worked, what didn't, and what I'd do differently.",
      },
      { property: "og:title", content: "Bonus — Reflections" },
      {
        property: "og:description",
        content: "A quick dip into my brain after a year of thesis writing.",
      },
    ],
  }),
  component: ReflectionsPage,
});

function ReflectionsPage() {
  return (
    <ChapterLayout
      eyebrow="Bonus"
      title="A quick dip into my brain"
      lede="Reflections on the experience of writing this thesis — the false starts, the small wins, and what I wish I'd known on day one."
    >
      <p className="text-lg leading-relaxed text-foreground/85">
        <strong className="text-foreground">Main takeaway:</strong> The thesis is about learning. I learned about
        informality in response to climate shocks in India (duh), but more importantly, I learned about organizational,
        life-work balance, communicating progress, and feeling confident as a researcher.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        Coming into the thesis, my goal was to do work I would be proud of and interested in, and to have fun doing it.
        I had some awareness of what challenges I would face, based on previous experience and on knowing myself.
        Namely, I wanted to keep a high level of focus and motivation, but also have some balance and not end up
        sacrificing this last semester of student life by being stressed or not allowing other activities.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        <strong className="text-foreground">Built-up motivation:</strong> Having worked for the past year, I was extra
        motivated to get the chance to work on my own research and delve as deep as I wanted (although sometimes at the
        beginning I was worried about “wasting time”). I was excited to apply all the things I had learned from my
        internships, both in terms of methods and knowledge.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        <strong className="text-foreground">Environment and supervision:</strong> The thesis experience started by
        reaching out to my supervisor. I figured that I could be interested in any topic, given the environment would be
        good. Coming back to Zurich after a year in Paris and most of my friends gone, it was very important for me to
        carefully choose what I would launch myself into. From previous experiences, I knew having a good mentor is such
        a crucial element of learning (thanks Koen :). For that reason, I reached out to Lint, whom I had never met
        before but of whom I had heard really great things.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        The chair and supervision were both an informed choice and a stroke of luck. I am very grateful to have
        benefited from Selina and Patricio’s closer supervision, as well as Lint’s valuable input. Having people to talk
        about my research with made it meaningful. Making sure to always show up in the office/not work from home was a
        good start to get motivated and create a distinction between living space and working space. And, of course, I
        also reached out to Lint because I knew I was interested in quantitative data analysis and environmental
        macroeconomics.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        <strong className="text-foreground">Progress communication & imposter syndrome:</strong> I knew I was quite
        prone to imposter syndrome (much less now I think), and I think one way to combat this is clear communication
        about progress. I met with Patricio & Selina roughly every 2 weeks to share my progress, making fun recap slides
        — which also helped.
      </p>

      <p className="text-lg leading-relaxed text-foreground/85">
        <strong className="text-foreground">Research as a creative endeavour:</strong> I think one thing that
        complicates the life-work balance aspect of research is how much it relies on creativity. One way to ease this
        consuming aspect of it is preparing some more technical tasks, and alternating between the creative work and the
        practical work, which doesn’t necessarily.
      </p>

      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-foreground/85">
          <strong className="text-foreground">Resources that helped me:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/85">
          <li>
            <strong>Book:</strong> <em>Deep Work</em>, by Cal Newport.
          </li>
          <li>
            <strong>Organization tools:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-foreground/85">
              <li>
                <strong>Notion</strong> was super useful for the literature review phase, writing and saving ideas for
                later, as well as for organizing the data work.
              </li>
              <li>
                <strong>Miro</strong> came in super handy for all things regression-related, where I needed to map out
                the elements I wanted to take in or leave out.
              </li>
              <li>
                <strong>PowerPoint:</strong> making the recap slides for the biweekly meetings gave me milestones.
              </li>
              <li>
                <strong>Tasks & Reminders:</strong> to list out urgent tasks, and communicate with the group on
                achievements.
              </li>
              <li>
                <strong>Paper:</strong> writing everything down in a notebook, meeting notes, random ideas to explore.
                It liberates space in my brain, and I can flip through it when I have extra time.
              </li>
            </ul>
          </li>
          <li>Sports to clear my head.</li>
          <li>
            Complete isolation time without distraction (the peak was going to my parents’ house, where I couldn’t reach
            my friends even by phone because of the time difference). That week I worked on the theoretical model (tdb
            if I include it in the thesis or not, but it was so interesting).
          </li>
          <li>
            <strong>Support from friends</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-foreground/85">
              <li>
                Talking to my friend Youssef for one week; I was feeling guilty about feeling like I was essentially
                just switching tabs, not feeling “productive” at all. His words really stuck with me. He spoke from his
                experience of working on his PhD, and reminded me that the most important task in the thesis is to grow.
              </li>
              <li>Sharing doubts with Izzy, a good friend also writing her thesis.</li>
              <li>The MSc Thesis lab in CAB, with monitors, daylight, and people around to hold you accountable.</li>
              <li>Issey Skyr yogurt for days I felt I needed an extra boost.</li>
              <li>
                A Post-it note on my desk: <strong>“You are here to GROW”</strong>.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ChapterLayout>
  );
}
