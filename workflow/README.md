# Google Docs Review Workflow

**Owner:** Standards and Policy Division
**Status:** Active
**Applies to:** every policy document in `/docs` that goes through external review.

This workflow lets non-Git reviewers (Cabinet, line ministries, legal counsel, external advisors) comment on policy drafts in Google Docs without losing the auditability of Markdown and Git as the source of truth.

## Roles

- **Author** (Standards and Policy Division staff). Owns the `.md`. Runs the prompts. Applies the revisions. Commits.
- **Reviewer.** Comments in the Google Doc. Never edits the body. Never touches Git.
- **Standards and Policy Division** (collective). Approves PRs that apply review rounds.

## Artifacts

| File | Purpose |
|---|---|
| `docs/_gdoc-template.gs` | Static Apps Script scaffold paired with every per-document manifest. |
| `prompts/md-to-gdoc-script.md` | Claude prompt: converts a policy `.md` into a per-document `.gs` manifest. |
| `prompts/gdoc-comments-to-md-revision.md` | Claude prompt: converts a comment export plus the source `.md` into a diff. |
| `docs/superpowers/specs/2026-05-22-gdoc-review-workflow-design.md` | The design rationale. |

## Six-phase workflow

1. **Generate.**
   - Run the `md-to-gdoc-script` prompt with the source `.md`, the round number, and the due date.
   - Open https://script.google.com, create a new project.
   - Paste `docs/_gdoc-template.gs` as `Code.gs`.
   - Paste the prompt output as `Manifest.gs`.
   - Enable the Drive Advanced Service: in the left sidebar of the Apps Script editor, click the **+** next to **Services**, choose **Drive API**, leave version at **v3**, and click Add.
   - Run `main`. The Google Doc lands in `Review Drafts/<DOC-ID>/`.

2. **Distribute.**
   - Set sharing to commenter (named reviewers preferred; "anyone with link, commenter" for wide rounds).
   - Send the link with the deadline that already appears in the doc's review banner.

3. **Review.**
   - Reviewers comment in-place. They are reminded by the banner not to edit anchor codes.
   - Author monitors for blocking questions but does not engage in side debates inside the doc.

4. **Export.**
   - At the deadline, the author opens the doc and clicks **GovTech Review > Export Review Comments** from the document's menu bar. (Apps Script adds the menu at the top level; it cannot nest under the Extensions menu.)
   - A `.md` file is written into the same `Review Drafts/<DOC-ID>/` folder.
   - Author downloads the file to a local scratch path (not committed to the repo by default).

5. **Apply.**
   - Author runs the `gdoc-comments-to-md-revision` prompt with the export and the source `.md`.
   - Author reads the disposition table.
   - Author saves the diff and runs `git apply --check`. If clean, applies. If not, edits manually.
   - Author resolves any needs-author-decision items by hand.

6. **Close out.**
   - Author commits: `<DOC-ID>: apply review round <N> (X addressed, Y deferred)`.
   - Author opens a PR for review by the Standards and Policy Division.
   - Author marks comments resolved in the Google Doc.
   - If a second round is required, the author returns to Phase 1 and creates a **new** Google Doc for round `N+1`. The round-`N` doc is left read-only for audit.

## What this workflow does not cover

- Style enforcement on the source `.md`. The prompts scan for the most common CLAUDE.md violations but do not replace a future `scripts/lint-prose.sh` (CLAUDE.md backlog item 5).
- Cross-document consistency (e.g. a term defined differently in two documents). That is the future central glossary's job (CLAUDE.md backlog item 4).
- Status transitions (Draft to Active). Those require a signoff workflow that is not yet defined (CLAUDE.md backlog item 2).

## First-run checklist for an author

- [ ] Source `.md` passes the prompt's pre-flight (no em dashes, no banned phrases).
- [ ] Drive Advanced Service (Drive API v3) is enabled in the Apps Script project. The `Review Drafts/<DOC-ID>/` folder is created by `main` on first run; do not pre-create it.
- [ ] You can read `_gdoc-template.gs` and the per-document manifest end-to-end before running `main`.
