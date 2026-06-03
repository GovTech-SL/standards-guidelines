# Prompt: Google Docs review export to markdown revision

## When to invoke

When the author runs:
> "Use `toolbox/prompts/gdoc-comments-to-md-revision.md` with the review export `<export.md>` and source `<source.md>`."

## Inputs

1. **Review export path**, produced by `exportReviewComments()` in `toolbox/_gdoc-template.gs`.
2. **Source markdown path**, the same `.md` that was used to generate the doc under review.

## Workflow

For every comment thread in the export:

1. **Locate target.** Try in order:
   a. Anchor section ID match: find the heading in the source whose anchor equals the export entry's anchor. If the anchor is `UNKNOWN`, or if the export's anchor is absent from the current source (a section may have been renumbered or removed since the doc was generated), skip to (b).
   b. Quoted-text match: search the source for the exact quoted text. Restrict the search to the section identified in (a) when (a) succeeded; otherwise search the whole file. Tolerate whitespace, smart-quote, and em-dash substitutions when comparing.
   c. If the quoted text is absent or equals `(no anchored text)` (the exporter writes this when a comment has no anchored span), or if (a) and (b) both fail to resolve uniquely, mark the comment **needs-human-placement** and continue.

2. **Classify disposition.** Choose one:
   - **accept (apply)**, reviewer pointed out a clear defect; apply the change.
   - **accept (reword)**, reviewer raised a substantive concern; propose a revised wording.
   - **defer**, out of scope for this document; log for the backlog.
   - **reject**, change is incompatible with GOV-001 or the spec; explain why.
   - **needs-author-decision**, the call is judgement and the author should decide. Also use this disposition when two or more accepted comments anchor to the same passage with mutually incompatible changes: cite the conflicting comment numbers in the Rationale column rather than picking one silently.

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
@@ -120,7 +120,9 @@ The integration model is governed by three platforms.
 
 ### 3.2 API Publication
 
-Government agencies shall publish APIs through the NDX gateway.
+Government agencies shall publish APIs through the NDX gateway, except
+where diplomatic missions are subject to the PDPA carve-out defined in
+POL-002 §3.4.
 
 The gateway enforces rate limits, authentication, and audit logging.
```

Always emit unified diffs with at least three context lines on each side (equivalent to `git diff --unified=3`). Hunk header line counts MUST match the number of context plus changed lines actually present in the hunk; mismatched counts cause `git apply` to fail with "patch does not apply".

The diff applies cleanly with `git apply` from the repo root. The executor must verify this before declaring done.

## Output rules

- The diff covers only **accept (apply)** and **accept (reword)** comments. Deferred, rejected, and needs-author-decision comments appear only in the table.
- Resolved threads (the exporter marks them `resolved` in the comment header) are treated as informational: surface them in the disposition table with a Rationale note "already resolved, no action" and do NOT emit diff hunks for them. The change has typically already been applied, and emitting a hunk for it will fail `git apply` or corrupt the source.
- Do not silently change other passages. Every diff hunk must correspond to a comment in the table.
- Do not include CLAUDE.md backlog suggestions (style fixes the reviewers did not raise). Stay scoped to the comments.
- Do not commit anything.

## What the author does next

1. Reads the table.
2. Saves the diff to a scratch file (e.g. `review_round1.patch`).
3. Runs `git apply --check <patch-file>` to confirm clean application.
4. If clean, applies (`git apply <patch-file>`) and inspects the working tree.
5. Edits anything that requires judgement.
6. Commits with a message of the form `<DOC-ID>: apply review round <N> (X addressed, Y deferred)`.
