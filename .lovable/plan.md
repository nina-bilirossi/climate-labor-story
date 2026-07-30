Problem
The regression mind map shown on /step-4 is currently served as a 54 KB WebP image (`src/assets/regression-settings.png.asset.json`, asset `7f707f80...`). At that compression level the diagram loses detail, so it looks worse in the preview/zoom modal than the original file does on the user's computer.

Plan
1. Verify which source file the user wants to use (the latest uploaded image/PDF) and confirm its local dimensions/file size.
2. Delete the old low-quality asset pointer (`src/assets/regression-settings.png.asset.json`) using `lovable-assets delete` so the CDN object is removed.
3. Create a new high-quality Lovable Asset from the chosen source file:
   - Prefer a PNG or high-resolution JPEG.
   - Target at least 3000–4000 px wide for readable zoom.
   - Avoid re-compressing an already-compressed file; use the original export from Miro/PDF if possible.
4. Update `src/routes/step-4.tsx` to import the new asset pointer (rename import if the extension changed).
5. Add CSS to improve perceived sharpness when the image is scaled:
   - `image-rendering: crisp-edges` or `image-rendering: pixelated` on the zoomed image.
   - Ensure the modal image uses `object-contain` and `will-change-transform` (already present).
6. Verify in the preview that the new image loads and that zooming in remains readable.

Out of scope
- No changes to the zoom/pan interaction logic.
- No changes to page text or layout beyond the image source and rendering hints.

Acceptance criteria
- The asset file size is noticeably larger than 54 KB (indicating less aggressive compression).
- /step-4 loads the new asset URL.
- Zooming in on the diagram in the modal shows crisper text than before.