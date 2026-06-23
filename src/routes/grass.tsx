import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grass")({
  head: () => ({
    meta: [
      { title: "More about grass — Nina Bili Rossi" },
      { name: "description", content: "just kidding." },
    ],
  }),
  component: GrassPage,
});

function GrassPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <p className="text-2xl">just kidding.</p>
    </main>
  );
}
