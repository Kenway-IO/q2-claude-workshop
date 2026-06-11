# Q2 Workshop — Automating Claude Code: Loops, Goals, and Workflows

A field guide to the three ways Claude Code keeps working without you, when to use each, and how to write prompts for them. All sources are official Anthropic docs. Hands-on exercises live in [`loop-framework/`](loop-framework/README.md).

## The three automation primitives

| Primitive | Next turn starts when… | Best for | Docs |
|---|---|---|---|
| `/loop` | A time interval elapses | Polling things that change on a clock (CI, deploys, issue queues) | [Scheduled tasks](https://code.claude.com/docs/en/scheduled-tasks) |
| `/goal` | The previous turn finishes | Substantial work with a verifiable end state | [Goal](https://code.claude.com/docs/en/goal) |
| Workflows | A script you can read decides | Fanning out dozens–hundreds of subagents (audits, migrations, deep research) | [Workflows](https://code.claude.com/docs/en/workflows) |

### `/loop` — run something on an interval

```
/loop 5m /babysit              # fixed: every 5 minutes
/loop check whether CI passed  # self-paced: Claude picks the next delay (1m–1h)
/loop                          # bare: built-in maintenance prompt (customize via .claude/loop.md)
```

Session-scoped: it stops when you close the terminal (restores on `--resume` within 7 days). Press `Esc` to stop between iterations.

**Tailor the prompt:** each iteration starts fresh, so the prompt must be self-contained — say what to check, what counts as a problem, and what to do about it ("check CI on my open PRs; fix lint failures; report anything else"). Match the interval to how fast the thing actually changes.

### `/goal` — work until a condition is verifiably met

```
/goal all tests in test/auth pass and `git status` is clean
/goal        # check status
/goal clear  # stop early
```

Claude keeps taking turns until a small evaluator model confirms the condition from Claude's own output. No timer — it's completion-driven, not clock-driven.

**Tailor the condition:** the evaluator only sees what Claude surfaces in the conversation, so phrase it as something Claude's output can prove: `` `npm test` exits 0 `` beats "the tests work." Add constraints (`no other test file is modified`) and a runtime bound (`or stop after 20 turns`).

### Workflows — script-orchestrated agent fleets

A workflow is a JavaScript script that spawns subagents in parallel pipelines; intermediate results live in script variables, not Claude's context, so it scales to hundreds of agents. Trigger one by including the keyword `ultracode` in your prompt or asking to "use a workflow"; save good runs to `.claude/workflows/` (via `/workflows` → `s`) and they become reusable slash commands.

**Tailor the prompt:** scope and quality bar drive how many agents spawn — "find any bugs" gets a few finders; "thoroughly audit every endpoint under src/routes/ for missing auth" gets a fleet plus adversarial verification. Name the target set explicitly.

## Supporting pieces

- **Custom slash commands** ([Skills docs](https://code.claude.com/docs/en/skills)) — a Markdown file at `.claude/commands/deploy.md` becomes `/deploy`; `$ARGUMENTS` substitutes whatever you type after it. These are what your loops re-run, so write them like instructions to a new hire: exact commands, explicit success criteria, hard rules ("never merge").
- **`/schedule` / Routines** ([Routines docs](https://code.claude.com/docs/en/routines), research preview) — cloud-hosted runs that don't need your machine on. Minimum interval 1 hour; right for overnight reports and audits. Prompts must be fully self-contained since no user is present.

## Writing prompts for unattended runs

From Anthropic's [Claude Code best practices](https://code.claude.com/docs/en/best-practices):

1. **Give Claude a way to verify its work** — a test suite, exit code, or script to run. Without a check, "looks done" is the only signal. (This is the builder/verifier rule the [loop-framework](loop-framework/README.md) is built around.)
2. **Define success explicitly** — "fix the bug" → "write a test that reproduces it, then make it pass."
3. **State the boundaries** — what the loop must never do (merge, deploy, force-push) belongs in the command file and in `.claude/settings.json` deny rules, not in your head.
4. **Keep context lean** — put commands Claude can't guess in `CLAUDE.md`; leave out what it can learn by reading code.

## Sources

- [Scheduled tasks (`/loop`)](https://code.claude.com/docs/en/scheduled-tasks) · [Goal (`/goal`)](https://code.claude.com/docs/en/goal) · [Workflows](https://code.claude.com/docs/en/workflows) — code.claude.com
- [Skills & slash commands](https://code.claude.com/docs/en/skills) · [Routines (`/schedule`)](https://code.claude.com/docs/en/routines) · [Best practices](https://code.claude.com/docs/en/best-practices) — code.claude.com
