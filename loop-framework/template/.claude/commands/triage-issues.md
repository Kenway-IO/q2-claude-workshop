# Triage new issues

Triage issues that have no labels yet.

1. List unlabeled issues (`gh issue list --label ""` or filter for no labels).
2. For each one:
   - **Label it**: bug / feature / question / docs, plus the affected area.
   - **Dedupe**: search existing issues for the same problem. If it's a
     duplicate, comment with a link to the original and close it.
   - **Assign**: pick an owner from the ownership map below.
3. End with a report: issues triaged, duplicates closed, who got assigned what.

## Ownership map

<!-- Fill in. e.g.: -->
<!-- - frontend / UI → @alice -->
<!-- - API / database → @bob -->
<!-- - anything else → @team-lead -->

Rules:
- When unsure between two labels, apply both.
- When unsure about the owner, assign the fallback owner and say so in the report.
- Never close a non-duplicate issue.
