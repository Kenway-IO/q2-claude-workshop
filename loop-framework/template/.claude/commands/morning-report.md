# Morning report

Summarize what happened overnight so the human starts the day informed.
**Read-only — gather and write, change nothing.**

1. Gather since yesterday evening:
   - Commits merged (`git log --since=yesterday`)
   - PR activity: new PRs, new reviews, CI failures (`gh pr list`, `gh pr checks`)
   - New issues (`gh issue list`)
   - Latest deploy-watch status from `.claude/inbox/deploy-watch-latest.md`
2. Write the summary to `.claude/inbox/morning-report-<YYYY-MM-DD>.md`:
   - **Needs attention** (failing CI, regressions, blocked PRs) — first
   - Everything else — brief
3. Keep it under one screen. Link, don't paste.
