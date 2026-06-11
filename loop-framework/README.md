# The 5-Day Loop Framework

Teach Claude Code to run unattended loops in any repo, one day at a time.
Everything in `template/` is generic — copy it into a project and fill in the blanks.

**The rule: every code-writing loop gets a separate verifier.**

- Builder makes the change.
- Verifier runs the real app.
- You read the diff.

---

## Day 1 — Repo memory

Give Claude durable context so every loop iteration starts smart.

1. Copy `template/CLAUDE.md` to your repo root and fill it in:
   stack, test commands, code style, release rules, gotchas.
2. Copy `template/.claude/settings.json` and list the shell commands
   Claude is allowed to run without asking.

**Done when:** a fresh Claude session can run your tests without being told how.

## Day 2 — Verification skill

Pick **one** flow Claude keeps breaking. Make it checkable by machine.

1. Copy `template/.claude/skills/verify-flow/` and rename `verify-flow`
   to your flow (e.g. `verify-checkout`).
2. Put the real browser/API test in its `scripts/` folder.
3. The script must report three things: **pass/fail**, **the failing step**,
   and a **screenshot or log path**.

**Done when:** you can ask Claude "verify the <flow>" and get a pass/fail answer with evidence.

## Day 3 — Commands

Copy the three command files from `template/.claude/commands/`:

| Command | What it does |
|---|---|
| `/babysit` | Checks your PRs, reads CI, fixes obvious review nits, surfaces design questions to you |
| `/triage-issues` | Labels new issues, dedupes against existing ones, assigns owners |
| `/deploy-watch` | Checks the live app, reports regressions, never touches production |

**Done when:** each command runs correctly once, by hand.

## Day 4 — Loops

Now make them recur. In a Claude Code session:

```
/loop 5m /babysit
/loop 15m /triage-issues
/loop 5m /deploy-watch
```

Pick intervals that match how fast the thing changes. CI updates in minutes;
issues trickle in over hours.

**Done when:** the loops run for an afternoon without you steering.

## Day 5 — Overnight work

Schedule work for while you sleep, and give it a place to leave results.

1. Copy `template/.claude/commands/morning-report.md` and `deep-audit.md`.
2. Schedule them (e.g. `/schedule` in Claude Code):
   - `/morning-report` — early morning, before you start
   - `/deep-audit` — overnight, when nothing else is running
3. Both write their findings to `.claude/inbox/` as dated markdown files.
4. Your morning `/babysit` loop reads `.claude/inbox/` first and acts on what it finds.

**Done when:** you arrive to a report you didn't have to ask for.
