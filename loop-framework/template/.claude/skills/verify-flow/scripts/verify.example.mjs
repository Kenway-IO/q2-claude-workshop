// Day 2: replace this with your real browser/API test.
// The only contract: print PASS or FAIL, the failing step, and an artifact path.

const steps = [
  ["load the page", async () => { /* await fetch(...) */ }],
  ["log in", async () => { /* ... */ }],
  ["complete the flow", async () => { /* ... */ }],
];

const logPath = ".claude/skills/verify-flow/last-run.log";

for (const [name, run] of steps) {
  try {
    await run();
  } catch (err) {
    console.log(`FAIL`);
    console.log(`failing step: ${name}`);
    console.log(`log: ${logPath}`);
    console.log(String(err));
    process.exit(1);
  }
}

console.log(`PASS`);
console.log(`log: ${logPath}`);
