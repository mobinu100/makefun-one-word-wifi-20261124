// One word for my Wi-Fi: "gaslighting" — full bars, no internet, and somehow it is your fault.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const word = "gaslighting";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word);
