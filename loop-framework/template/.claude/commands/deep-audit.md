# Deep audit

Overnight slow work: look for problems no one has time to look for during the
day. **Read-only — report findings, fix nothing.**

1. Pick ONE area per run (rotate; note which in the report):
   - Test gaps: code paths with no test coverage
   - Dead code and unused dependencies
   - TODO/FIXME comments older than 3 months
   - Slow or flaky tests
2. Investigate it properly — this run has time, daytime loops don't.
3. Write findings to `.claude/inbox/deep-audit-<YYYY-MM-DD>.md`:
   - Each finding: what, where (file:line), why it matters, suggested fix.
   - Rank by impact. Five good findings beat fifty noisy ones.
