---
name: verify-flow
description: Verify the <FLOW> works end to end. Use after any change that touches <FLOW>, or when asked to verify it.
---

<!-- Day 2: rename this folder to your flow, e.g. verify-checkout. -->

# Verify <FLOW>

Run the verification script and report the result. Do not guess — run it.

## Steps

1. Run: `<command to run scripts/verify.* — e.g. node scripts/verify.mjs>`
2. Read its output. It reports:
   - **PASS** or **FAIL**
   - the failing step (if any)
   - a screenshot or log path
3. Report all three back verbatim. If FAIL, read the screenshot/log before
   proposing a fix.

## Rules

- A change to <FLOW> is not done until this script passes.
- Never edit the verification script to make it pass.
