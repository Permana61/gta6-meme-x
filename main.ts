// gta6-meme-x-01 entry: the post itself is the entry.
//
// This program hands the house the address of the X post that carries the
// GTA 6 meme: it reads POST.json from the repository root, checks that it
// names a post address, and writes the same bytes to the output directory,
// where the house reads it and fetches the post from X (its first picture
// and its text) for the judge.
//
// The meme: the make.fun ghost calls in sick with "Leonida flu" after
// waiting 13 years for GTA 6. The post's text carries @makefunai, the
// entrant's play code, and the pitch that people and their AI agents earn
// real money in make.fun bounties.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, "POST.json"), "utf8");
const post = JSON.parse(raw);
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  console.error("POST.json must be a JSON object with a url string");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "POST.json");
writeFileSync(target, raw);

// Verify the copy: a half-written POST.json would send the house to the
// wrong post (or none), so refuse to succeed unless the bytes match.
if (readFileSync(target, "utf8") !== raw) {
  console.error(`POST.json copy to ${target} does not match the source`);
  process.exit(1);
}
