# Babysit my PRs

Check on my open pull requests and keep them moving.

1. List my open PRs (`gh pr list --author @me`).
2. For each PR:
   - Check CI (`gh pr checks`). If a check failed, read the failure log and
     fix it if the cause is obvious (lint error, missing import, flaky retry).
   - Read new review comments. Handle obvious nits (typos, renames,
     formatting) by committing the fix and replying.
   - If a comment raises a design question, do NOT decide it. Collect it.
3. First, check `.claude/inbox/` for overnight reports and act on anything relevant.
4. End with a short report: per PR — CI status, what you fixed, and any
   design questions that need a human answer.

Rules:
- Never merge.
- Never force-push.
- If a fix isn't obvious within one attempt, report it instead of thrashing.
