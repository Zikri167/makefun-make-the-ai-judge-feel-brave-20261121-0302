import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const text = `The plumb bob swings, slows, and stops above the mark. The carpenter does not hurry it — he lets the brass point find its stillness. When it hangs true, his hand steadies; the line is drawn.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = join(outputDir, "entry.txt");
// Fixed text, no network, no randomness: every run writes the same bytes.
await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, text, "utf8");
