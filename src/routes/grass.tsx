import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/grass")({
  head: () => ({
    meta: [
      { title: "More about grass — Nina Bili Rossi" },
      { name: "description", content: "Just kidding." },
    ],
  }),
  component: GrassPage,
});

function GrassPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold mb-6">More about grass</h1>
      <p className="text-xl">just kidding.</p>
      <Link to="/" className="mt-8 underline opacity-70">
        Back home
      </Link>
    </main>
  );
}
