import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const heroFile = new URL("./Hero.jsx", import.meta.url);

test("uses the MVP phone cue on mobile and keeps the mouse on desktop", async () => {
  const heroSource = await readFile(heroFile, "utf8");

  assert.match(heroSource, /className="h-9\.5 w-6[^"\n]*max-md:hidden"/);
  assert.match(heroSource, /className="hidden h-8 w-\[1\.45rem\][^"\n]*max-md:block"/);
  assert.match(heroSource, /viewBox="0 0 24 34"/);
});
