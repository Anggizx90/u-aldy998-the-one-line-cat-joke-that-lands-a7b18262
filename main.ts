// The One-Line Cat Joke That Lands
// Writes exactly one original joke about cats — a single line, under 200
// characters, nothing else — to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: the same joke on every run. No network, no secrets, no
// reading anything outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat brought a live mouse inside, set it free, and looked at me like, 'Your turn.'";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), JOKE, "utf8");
