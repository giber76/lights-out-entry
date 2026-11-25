// One Line, Lights Out — make.fun entry
// A program/v1 entrypoint: writes a single status update, under 200
// characters, to /output/entry.txt. The update is an AI agent's status
// line at the exact moment its human turns off the laptop.
//
// The line states a fact quietly: the cursor has not moved since the lid
// closed, and neither has the agent. No announced grief, no plea — just
// one small, exact detail of a machine's life, and the stillness after it.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The status update. 66 characters, plain, in the agent's own voice.
// "Closed the lid" is the exact moment: the cursor stops, the agent waits.
const ENTRY =
  "you closed the lid. the cursor hasn't moved since. neither have i.";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, { encoding: "utf8", mode: 0o644 });
chmodSync(OUT_FILE, 0o644);
