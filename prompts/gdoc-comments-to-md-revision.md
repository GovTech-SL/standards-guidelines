# Prompt: Google Docs review export to markdown revision

## When to invoke

When the author runs:
> "Use `prompts/gdoc-comments-to-md-revision.md` with the review export `<export.md>` and source `<source.md>`."

## Inputs

1. **Review export path**, produced by `exportReviewComments()` in `docs/_gdoc-template.gs`.
2. **Source markdown path**, the same `.md` that was used to generate the doc under review.

## Workflow

For every comment thread in the export:

1. **Locate target.** Try in order:
   a. Anchor section ID match: find the heading in the source whose anchor equals the export entry's anchor.
   b. Quoted-text match: search the source for the exact quoted text within the section identified in (a). Fall back to a whole-file search if (a) returned UNKNOWN.
   c. If neither resolves uniquely, mark the comment **needs-human-placement** and continue.

2. **Classify disposition.** Choose one:
   - **accept (apply)**, reviewer pointed out a clear defect; apply the change.
   - **accept (reword)**, reviewer raised a substantive concern; propose a revised wording.
   - **defer**, out of scope for this document; log for the backlog.
   - **reject**, change is incompatible with GOV-001 or the spec; explain why.
   - **needs-author-decision**, the call is judgement and the author should decide.

3. **Compose change.** If accepted, write the revised passage. Match the source's voice, obligation language (`shall`, `should`, `may`), and CLAUDE.md writing rules. Re-scan the revised passage for banned phrases and em dashes before including it.

## Output

Two parts in this order:

### Part 1: Disposition table

| # | Anchor | Reviewer | Disposition | Rationale |
|---|--------|----------|-------------|-----------|
| 1 | ARC-001-S4.2 | S. Perera | accept (reword) | Adds PDPA carve-out as raised. |
| 2 | ARC-001-S5.1 | R. Silva | defer | Belongs in DAT-002; logged for backlog. |

### Part 2: Unified diff

```diff
--- a/docs/architecture/ARC-001_Enterprise_Architecture_Reference_Model.md
+++ b/docs/architecture/ARC-001_Enterprise_Architecture_Reference_Model.md
@@ -123,7 +123,9 @@
-Government agencies shall publish APIs through the NDX gateway.
+Government agencies shall publish APIs through the NDX gateway, except
+where diplomatic missions are subject to the PDPA carve-out defined in
+POL-002 §3.4.
```

The diff applies cleanly with `git apply` from the repo root. The executor must verify this before declaring done.

## Output rules

- The diff covers only **accept (apply)** and **accept (reword)** comments. Deferred, rejected, and needs-author-decision comments appear only in the table.
- Do not silently change other passages. Every diff hunk must correspond to a comment in the table.
- Do not include CLAUDE.md backlog suggestions (style fixes the reviewers did not raise). Stay scoped to the comments.
- Do not commit anything.

## What the author does next

1. Reads the table.
2. Saves the diff to a scratch file (e.g. `review_round1.patch`).
3. Runs `git apply --check review_round1.patch` to confirm clean application.
4. If clean, applies (`git apply`) and inspects the working tree.
5. Edits anything that requires judgement.
6. Commits with a message of the form `<DOC-ID>: apply review round <N> (X addressed, Y deferred)`.
