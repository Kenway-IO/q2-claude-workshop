# Deploy watch

Check the live app and report regressions. **Read-only — never touch production.**

1. Hit the health endpoints:
   <!-- Fill in. e.g.: -->
   <!-- - https://app.example.com/api/health -->
   <!-- - https://app.example.com/ (expect HTTP 200) -->
2. Run the verification skill against production if it supports a base URL.
3. Compare with the last report in `.claude/inbox/deploy-watch-latest.md`
   (if it exists): anything that was passing and now fails is a regression.
4. Write the current status to `.claude/inbox/deploy-watch-latest.md`.
5. Report: status of each check, any regressions since last run.

Rules:
- GET requests only. No deploys, no restarts, no config changes, no writes
  to any production system.
- A regression is reported, never auto-fixed in this loop.
