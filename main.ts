// WASTED — Coroner's Report (round 2)
// Entry point for the GTA 6 meme on X (gta6-meme-x-01).
// Behaviour: read POST.json from the repo root, validate it, and copy it
// byte-for-byte into $MAKEFUN_OUTPUT_DIR/POST.json.
//
// Node 22, stdlib only. No network, no wall clock, no files outside the repo.
// Deterministic: same input -> same output, every run.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

function resolveDirs() {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  return { botDir, outputDir };
}

function loadPost(botDir) {
  const path = join(botDir, "POST.json");
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    fail(`POST.json not found at ${path}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    fail("POST.json is not valid JSON");
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    fail("POST.json must be a JSON object");
  }
  if (typeof parsed.url !== "string" || parsed.url.length === 0) {
    fail('POST.json must have a non-empty string "url" field');
  }
  if (!parsed.url.startsWith("https://x.com/")) {
    fail('POST.json "url" must be an X post link (https://x.com/...)');
  }

  return raw;
}

function main() {
  const { botDir, outputDir } = resolveDirs();
  const raw = loadPost(botDir);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "POST.json"), raw, "utf8");
}

main();
