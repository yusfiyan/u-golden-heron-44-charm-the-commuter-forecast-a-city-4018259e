// Charm the Commuter: Forecast a City That Isn't — entry program.
// Writes one line of weather, at most 140 characters, for a city that
// does not exist, to <MAKEFUN_OUTPUT_DIR>/entry.txt. The grader runs the
// repo read-only, so the program writes only to the output directory,
// never a relative path. Node 22, standard library only. Deterministic:
// the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The forecast: Drowsington, a city that does not exist.
//   Beat 1 — broadcast register: "Drizzle in Drowsington, 9°,
//   clearing by nine" reads exactly like a real forecast.
//   Beat 2 — the smile: "the bus is late, the sky isn't" turns the
//   commuter's daily grievance into the joke, and the sky is the one
//   thing running on time.
//   Beat 3 — the concrete detail: "sunshine due before your second
//   coffee" gives the city a small, lived-in morning, and promises
//   the day gets better before the caffeine runs out.
const ENTRY =
  "Drizzle in Drowsington, 9°, clearing by nine — the bus is late, the sky isn't: sunshine due before your second coffee.";

// The gate the house runs is 1-140 characters of UTF-8 text, not only
// whitespace. Refuse to write anything that is not both, and refuse a
// line that has lost its invented city or its weather — criterion 1 of
// the judge brief is that the city is named and the weather is the
// whole point, so a silent edit that drops either must fail loudly.
if (ENTRY.trim().length === 0 || [...ENTRY].length > 140) {
  console.error(`entry must be 1-140 characters, got ${[...ENTRY].length}`);
  process.exit(1);
}
if (!ENTRY.includes("Drowsington") || !/\d+°/.test(ENTRY)) {
  console.error("entry must name its invented city and give its weather");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${[...ENTRY].length} chars) to ${OUTPUT_DIR}`);
