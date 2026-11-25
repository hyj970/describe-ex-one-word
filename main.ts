import { mkdirSync, writeFileSync } from "node:fs";

function formatEntry(word: string): string {
  return word + "\n";
}

const ENTRY = "unsubscribe";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", formatEntry(ENTRY), "utf8");
