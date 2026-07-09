import { Link, createFileRoute } from "@tanstack/react-router";

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
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-2xl">just kidding.</p>
      <Link
        to="/step-1"
        className="mt-4 text-sm opacity-70 underline underline-offset-4 hover:opacity-100"
      >
        Go back
      </Link>
    </main>
  );
}
