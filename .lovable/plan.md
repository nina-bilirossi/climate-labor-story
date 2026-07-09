## Changes to `src/routes/step-1.tsx` — "What is informality?" section

1. **White text**: wrap the paragraph in `text-white` (or apply it on the `<p>`) so the whole block renders in white.

2. **Bullet list for the three views**: replace the inline `<br />`-separated view descriptions with a proper `<ul className="list-disc pl-6 space-y-2">` containing three `<li>` items (survivalist / unfair competition / untapped entrepreneurial energy). The intro sentence ending in "…paradigms around informality are:" stays as prose above the list.

3. **Clickable Ulyssea (2020) citation**: turn "Ulyssea (2020)" into a `<Link to="/references" hash="ulyssea-2020">` (underlined, inherits color) pointing at the references page. I'll also add an `id="ulyssea-2020"` anchor entry on `src/routes/references.tsx` so the link scrolls to the right item — if you'd rather it just land on `/references` without an anchor, say so.

No other sections or components are touched.