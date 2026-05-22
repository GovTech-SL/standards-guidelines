# Google Docs Review Workflow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the Google Docs review workflow described in `docs/superpowers/specs/2026-05-22-gdoc-review-workflow-design.md`: a static Apps Script scaffold, two Claude prompts, a workflow README, and one dry-run against `ARC-001`.

**Architecture:** Static `_gdoc-template.gs` lives in `docs/`. The `md-to-gdoc-script` prompt produces a per-document `.gs` file (manifest constant + entry point) that the author pastes alongside the scaffold in a new Apps Script project bound to a fresh Google Doc. Reviewers comment in the doc. The bound `exportReviewComments()` writes a structured review file. The `gdoc-comments-to-md-revision` prompt converts that file plus the source `.md` into a proposed diff.

**Tech Stack:** Google Apps Script (Drive Comments API, DocumentApp), Markdown, Git. No test harness in repo; verification is manual.

**Commit discipline:** This repo follows CLAUDE.md: only commit when the user has explicitly requested it. Every task ends with a **proposed** commit block; the executor must confirm with the user before running `git add`/`git commit`.

---

## File Structure

```
docs/
  _gdoc-template.gs                          (new; static Apps Script scaffold)
  superpowers/
    specs/
      2026-05-22-gdoc-review-workflow-design.md   (already exists)
    plans/
      2026-05-22-gdoc-review-workflow.md          (this file)
prompts/
  md-to-gdoc-script.md                       (new; markdown to .gs converter prompt)
  gdoc-comments-to-md-revision.md            (new; review export to diff prompt)
workflow/
  README.md                                  (new; six-phase narrative + roles)
```

Boundaries:
- `_gdoc-template.gs` is the only executable code. It owns: doc construction from manifest, comment export, menu installation.
- The two prompts are markdown only. Each is self-contained; an engineer reading either one without the other can use it.
- `workflow/README.md` is the human-facing entry point; it references the other three files but contains no logic.

---

## Task 1: Static Apps Script scaffold

**Files:**
- Create: `docs/_gdoc-template.gs`

This is the heaviest task. The scaffold must build a Google Doc deterministically from a manifest and export comments back to Drive. The scaffold contains no document-specific data.

- [ ] **Step 1.1: Create the file with the header block and JSDoc schema for the manifest**

Create `docs/_gdoc-template.gs` with this exact content:

```javascript
/**
 * GovTech Sri Lanka, Standards and Guidelines.
 * Google Docs review template (static scaffold).
 *
 * This file is identical for every policy document. It is paired in the
 * Apps Script project with a small per-document file produced by the
 * `md-to-gdoc-script` prompt. The per-document file defines a constant
 * named MANIFEST and a function `main()` that calls
 * `buildDocFromManifest(MANIFEST)`.
 *
 * Manifest schema:
 * {
 *   docId:        "ARC-001",
 *   title:        "Enterprise Architecture Reference Model",
 *   version:      "0.3",
 *   status:       "Draft",
 *   classification:"OFFICIAL",
 *   pillar:       "4. Architecture Standards",
 *   issuedBy:     "GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division",
 *   date:         "May 2026",
 *   alignedWith:  "Sri Lanka 2030 Digital Blueprint",
 *   review: {
 *     round:    1,
 *     dueDate:  "2026-06-12"
 *   },
 *   blocks: [
 *     { type: "heading", level: 1, number: "1", text: "Purpose and Scope",
 *       anchor: "ARC-001-S1" },
 *     { type: "paragraph", text: "..." },
 *     { type: "list", style: "bullet"|"number", items: ["...", "..."] },
 *     { type: "table", rows: [["h1","h2"], ["c1","c2"]], hasHeader: true },
 *     { type: "code", lang: "json", text: "..." },
 *     { type: "extensionPoint", title: "Extension Point", body: "..." }
 *   ]
 * }
 *
 * Output folder convention: `Review Drafts/<docId>/`.
 */

const REVIEW_DRAFTS_FOLDER = "Review Drafts";
```

- [ ] **Step 1.2: Verify the file is syntactically valid**

Run: `node --check "docs/_gdoc-template.gs"`
Expected: command exits 0 with no output. (Apps Script runs on V8; `node --check` catches most syntax errors.)

- [ ] **Step 1.3: Implement `buildDocFromManifest` end-to-end**

Append to `docs/_gdoc-template.gs`:

```javascript
/**
 * Top-level builder. Creates the Google Doc in the configured Drive folder
 * and populates it from the manifest. Returns the new doc URL.
 */
function buildDocFromManifest(manifest) {
  const doc = DocumentApp.create(
    manifest.docId + " v" + manifest.version + " (Round " +
    manifest.review.round + ")"
  );
  moveToReviewFolder(doc, manifest.docId);

  const body = doc.getBody();
  body.clear();

  writeCoverBlock(body, manifest);
  writeReviewBanner(body, manifest);
  writeTableOfContents(body);
  writeBlocks(body, manifest.blocks);

  setFooter(doc, manifest);

  doc.saveAndClose();
  return doc.getUrl();
}

function moveToReviewFolder(doc, docId) {
  const root = getOrCreateChildFolder(DriveApp.getRootFolder(), REVIEW_DRAFTS_FOLDER);
  const target = getOrCreateChildFolder(root, docId);
  const file = DriveApp.getFileById(doc.getId());
  file.moveTo(target);
}

function getOrCreateChildFolder(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function writeCoverBlock(body, m) {
  body.appendParagraph("GovTech Sri Lanka (Pvt) Ltd.")
      .setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
  body.appendParagraph(m.title)
      .setHeading(DocumentApp.ParagraphHeading.TITLE);

  const metaLines = [
    "Document ID: " + m.docId,
    "Version: " + m.version,
    "Status: " + m.status,
    "Classification: " + m.classification,
    "Pillar: " + m.pillar,
    "Issued by: " + m.issuedBy,
    "Date: " + m.date,
    "Aligned with: " + m.alignedWith
  ];
  metaLines.forEach(function (line) {
    body.appendParagraph(line).setAttributes({ FONT_SIZE: 10 });
  });
  body.appendPageBreak();
}

function writeReviewBanner(body, m) {
  const banner = body.appendParagraph(
    "REVIEW DRAFT  ·  Round " + m.review.round +
    "  ·  Comments due " + m.review.dueDate
  );
  banner.setAttributes({
    BACKGROUND_COLOR: "#FFF4CE",
    BOLD: true,
    FONT_SIZE: 11
  });
  body.appendParagraph(
    "Anchor codes such as [ARC-001-S4.2] are machine identifiers. " +
    "Do not edit them."
  ).setAttributes({ ITALIC: true, FONT_SIZE: 9 });
  body.appendHorizontalRule();
}

function writeTableOfContents(body) {
  body.appendParagraph("Contents")
      .setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendTableOfContents();
  body.appendPageBreak();
}

function writeBlocks(body, blocks) {
  blocks.forEach(function (b) {
    switch (b.type) {
      case "heading":        writeHeading(body, b);        break;
      case "paragraph":      writeParagraph(body, b);      break;
      case "list":           writeList(body, b);           break;
      case "table":          writeTable(body, b);          break;
      case "code":           writeCode(body, b);           break;
      case "extensionPoint": writeExtensionPoint(body, b); break;
      default:
        throw new Error("Unknown block type: " + b.type);
    }
  });
}

function writeHeading(body, b) {
  const headingMap = {
    1: DocumentApp.ParagraphHeading.HEADING1,
    2: DocumentApp.ParagraphHeading.HEADING2,
    3: DocumentApp.ParagraphHeading.HEADING3,
    4: DocumentApp.ParagraphHeading.HEADING4,
    5: DocumentApp.ParagraphHeading.HEADING5,
    6: DocumentApp.ParagraphHeading.HEADING6
  };
  const headingText = b.number ? (b.number + ". " + b.text) : b.text;
  const para = body.appendParagraph(headingText);
  para.setHeading(headingMap[b.level] || DocumentApp.ParagraphHeading.HEADING2);

  const anchorPara = body.appendParagraph("[" + b.anchor + "]");
  anchorPara.setAttributes({
    FONT_SIZE: 8,
    FOREGROUND_COLOR: "#888888",
    ITALIC: true
  });
}

function writeParagraph(body, b) {
  body.appendParagraph(b.text);
}

function writeList(body, b) {
  const glyph = (b.style === "number")
    ? DocumentApp.GlyphType.NUMBER
    : DocumentApp.GlyphType.BULLET;
  b.items.forEach(function (item) {
    body.appendListItem(item).setGlyphType(glyph);
  });
}

function writeTable(body, b) {
  const table = body.appendTable(b.rows);
  if (b.hasHeader && table.getNumRows() > 0) {
    const header = table.getRow(0);
    for (var i = 0; i < header.getNumCells(); i++) {
      header.getCell(i).editAsText().setBold(true);
    }
  }
}

function writeCode(body, b) {
  const para = body.appendParagraph(b.text);
  para.setAttributes({
    FONT_FAMILY: "Consolas",
    FONT_SIZE: 9,
    BACKGROUND_COLOR: "#F4F4F4"
  });
}

function writeExtensionPoint(body, b) {
  const table = body.appendTable([[b.title], [b.body]]);
  table.getCell(0, 0).editAsText().setBold(true);
  table.getCell(0, 0).setBackgroundColor("#E8F0FE");
}

function setFooter(doc, m) {
  const footer = doc.getFooter() || doc.addFooter();
  footer.clear();
  footer.appendParagraph(
    m.docId + "  ·  v" + m.version + "  ·  OFFICIAL"
  ).setAttributes({ FONT_SIZE: 8, FOREGROUND_COLOR: "#666666" });
}
```

- [ ] **Step 1.4: Run `node --check` again to catch syntax issues**

Run: `node --check "docs/_gdoc-template.gs"`
Expected: exit 0.

- [ ] **Step 1.5: Implement `exportReviewComments` and the menu installer**

Append to `docs/_gdoc-template.gs`:

```javascript
function onOpen() {
  DocumentApp.getUi()
    .createMenu("GovTech Review")
    .addItem("Export Review Comments", "exportReviewComments")
    .addToUi();
}

/**
 * Walks every comment thread on the bound doc and writes a structured
 * markdown export file into the same Drive folder as the doc.
 *
 * Requires the Drive Advanced Service to be enabled in the Apps Script
 * project (Services, Drive API, v3).
 */
function exportReviewComments() {
  const doc = DocumentApp.getActiveDocument();
  const fileId = doc.getId();

  const threads = Drive.Comments.list(fileId, {
    fields: "comments(id,content,author/displayName,createdTime,resolved," +
            "quotedFileContent/value,replies(content,author/displayName,createdTime))",
    pageSize: 100,
    includeDeleted: false
  }).comments || [];

  const anchorIndex = buildAnchorIndex(doc);
  const lines = formatExport(doc, threads, anchorIndex);

  const filename = buildExportFilename(doc);
  const folder = getDocFolder(fileId);
  const file = folder.createFile(filename, lines.join("\n"), "text/markdown");

  DocumentApp.getUi().alert(
    "Exported " + threads.length + " comment thread(s) to:\n\n" +
    file.getUrl()
  );
}

/** Map every anchor occurrence in the body text to its character offset. */
function buildAnchorIndex(doc) {
  const body = doc.getBody().getText();
  const re = /\[([A-Z]+-\d+-S[0-9.]+)\]/g;
  const index = [];
  for (const match of body.matchAll(re)) {
    index.push({ offset: match.index, anchor: match[1] });
  }
  return index;
}

/** For a given character offset, find the most recent anchor before it. */
function anchorForOffset(anchorIndex, offset) {
  let current = null;
  for (var i = 0; i < anchorIndex.length; i++) {
    if (anchorIndex[i].offset <= offset) {
      current = anchorIndex[i].anchor;
    } else break;
  }
  return current || "UNKNOWN";
}

function formatExport(doc, threads, anchorIndex) {
  const lines = [];
  const openCount = threads.filter(function (t) { return !t.resolved; }).length;
  const resolvedCount = threads.length - openCount;

  lines.push("# Review Export: " + doc.getName());
  lines.push("");
  lines.push("**Exported:** " + new Date().toISOString());
  lines.push("**Total comments:** " + threads.length +
             " (open " + openCount + ", resolved " + resolvedCount + ")");
  lines.push("");
  lines.push("---");
  lines.push("");

  const bodyText = doc.getBody().getText();

  threads.forEach(function (t, i) {
    const quoted = (t.quotedFileContent && t.quotedFileContent.value) || "";
    const offset = quoted ? bodyText.indexOf(quoted) : -1;
    const anchor = (offset >= 0)
      ? anchorForOffset(anchorIndex, offset)
      : "UNKNOWN";
    const status = t.resolved ? "resolved" : "open";

    lines.push("## Comment " + (i + 1) + " · [" + anchor + "] · " + status);
    lines.push("");
    lines.push("**Anchor text:**");
    lines.push("> " + (quoted || "(no anchored text)"));
    lines.push("");
    lines.push("**Reviewer:** " + (t.author && t.author.displayName || "(unknown)") +
               "  ·  " + t.createdTime);
    lines.push("");
    lines.push("**Comment:**");
    lines.push("");
    lines.push(t.content || "");
    lines.push("");

    if (t.replies && t.replies.length > 0) {
      lines.push("**Replies:**");
      lines.push("");
      t.replies.forEach(function (r) {
        lines.push("- " + (r.author && r.author.displayName || "(unknown)") +
                   " " + r.createdTime + ": " + r.content);
      });
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  });

  return lines;
}

function buildExportFilename(doc) {
  const name = doc.getName().replace(/[^A-Za-z0-9_.-]/g, "_");
  const stamp = Utilities.formatDate(new Date(),
    Session.getScriptTimeZone(), "yyyy-MM-dd");
  return name + "_review_" + stamp + ".md";
}

function getDocFolder(fileId) {
  const it = DriveApp.getFileById(fileId).getParents();
  return it.hasNext() ? it.next() : DriveApp.getRootFolder();
}
```

- [ ] **Step 1.6: Run `node --check` once more**

Run: `node --check "docs/_gdoc-template.gs"`
Expected: exit 0. Note: `Drive.Comments`, `DocumentApp`, `DriveApp`, `Utilities`, and `Session` are Apps Script globals; `node --check` only checks syntax, not symbol resolution, so missing globals do not fail the check.

- [ ] **Step 1.7: Manual smoke test in Apps Script (HUMAN STEP)**

Pause and ask the user if they want to run this now, or defer.

If running now:
1. Open https://script.google.com, create a new project.
2. Paste all of `docs/_gdoc-template.gs` into `Code.gs`.
3. Add a second file `Manifest.gs` with this minimal fixture:
   ```javascript
   const MANIFEST = {
     docId: "TEST-001", title: "Smoke Test", version: "0.1",
     status: "Draft", classification: "OFFICIAL", pillar: "0. Test",
     issuedBy: "Test", date: "May 2026", alignedWith: "Test",
     review: { round: 1, dueDate: "2026-06-12" },
     blocks: [
       { type: "heading", level: 1, number: "1", text: "Purpose",
         anchor: "TEST-001-S1" },
       { type: "paragraph", text: "Smoke test paragraph." }
     ]
   };
   function main() { return buildDocFromManifest(MANIFEST); }
   ```
4. Enable Drive Advanced Service (Services, Add, Drive API v3).
5. Run `main`. Authorise when prompted.
6. Verify a new doc appears in `Review Drafts/TEST-001/` with cover, banner, anchor under the heading.
7. Add one comment in the doc. Reload. Confirm the "GovTech Review" menu appears. Click "Export Review Comments". Confirm a `.md` file lands in the same Drive folder with the comment captured.

Expected: smoke test passes. If it fails, capture the error message and revise the scaffold before continuing.

- [ ] **Step 1.8: Propose commit (ask user before running)**

Proposed commit:
```bash
git add docs/_gdoc-template.gs
git commit -m "Add Apps Script scaffold for Google Docs review workflow.

Static scaffold paired with per-document manifest files emitted by the
md-to-gdoc-script prompt. Implements buildDocFromManifest (cover,
banner, anchors, blocks, footer) and exportReviewComments (Drive
Comments API to structured markdown export). Anchor scheme:
[<DOC-ID>-S<dotted-section>] under every heading."
```

---

## Task 2: `md-to-gdoc-script` prompt

**Files:**
- Create: `prompts/md-to-gdoc-script.md`

This prompt is read by Claude when the author asks "convert this `.md` to an Apps Script". The prompt must be self-contained and produce a deterministic `.gs` artifact.

- [ ] **Step 2.1: Create the prompt file with the full content**

Create `prompts/md-to-gdoc-script.md`:

````markdown
# Prompt: Markdown to Google Apps Script (per-document file)

## When to invoke

When the author runs:
> "Use `prompts/md-to-gdoc-script.md` to convert `docs/architecture/ARC-001_Enterprise_Architecture_Reference_Model.md` for review round N due YYYY-MM-DD."

## Inputs

1. **Source path**, a `.md` file in this repo with the standard policy front matter.
2. **Review round number** (integer, default 1).
3. **Review due date** (ISO date, e.g. 2026-06-12).

## Pre-flight checks (refuse and report on failure)

Before emitting any output, scan the source `.md` and refuse with a line-numbered report if any of these are present:

- Em dash character anywhere in body text (not in code fences or tables of cited symbols).
- Banned phrases (case-insensitive): "it is worth noting", "it is important to note", "furthermore", "moreover", "in conclusion", "it should be noted", "this ensures that", "by doing so", "in order to", "with respect to".
- Banned vocabulary (case-insensitive, whole-word): "robust", "leverage", "utilise", "facilitate", "streamline", "holistic", "cutting-edge", "best-in-class", "straightforward", "ensure that".

Report format on refusal:
```
REFUSED: Source markdown violates CLAUDE.md writing rules.
- Line 42: em dash in body text
- Line 117: banned phrase "in order to"
Fix the source file and re-run.
```

## Output

A single fenced block of Google Apps Script (`.gs`) the author pastes as a second file (e.g. `Manifest.gs`) in the Apps Script project that already contains `_gdoc-template.gs`. The output contains:

1. A `MANIFEST` constant matching the schema documented at the top of `docs/_gdoc-template.gs`.
2. A `main()` function that calls `buildDocFromManifest(MANIFEST)`.

## Mapping rules

- **Front matter** (`**Document ID:** ...`, etc.) populates the manifest cover fields.
- **Review round and due date** are taken from the invocation args, not from the source.
- **Headings (`#`, `##`, `###`, ...)** become `{ type: "heading", level, number, text, anchor }`. Numbering is derived by walking the heading tree (`1`, `1.1`, `1.2`, `2`, ...). The anchor is `<DOC-ID>-S<number>`.
- **Paragraphs** become `{ type: "paragraph", text }`. Convert inline markdown (`**bold**`, `*italic*`, links) to plain text; styling is applied by the scaffold defaults. Inline code stays in backticks but is rendered as plain text.
- **Bullet or numbered lists** become `{ type: "list", style, items: [...] }`. Nested lists are flattened to a single level with leading `"  "` indentation prepended to nested items (Apps Script's bullet handling is simpler than markdown's).
- **Tables** become `{ type: "table", rows, hasHeader: true }`. First row is the header.
- **Fenced code blocks** become `{ type: "code", lang, text }`.
- **Blocks beginning with `> **Extension Point**`** or a heading containing the words "Extension Point" produce `{ type: "extensionPoint", title, body }`. Body is the paragraph(s) until the next heading.

## Output template

```javascript
/**
 * Per-document manifest for <DOC-ID> v<VERSION>, Round <N>.
 * Generated <YYYY-MM-DD> from <relative path to source .md>.
 * Pair with docs/_gdoc-template.gs in the same Apps Script project.
 */

const MANIFEST = {
  docId: "<DOC-ID>",
  title: "<TITLE>",
  version: "<VERSION>",
  status: "<STATUS>",
  classification: "<CLASSIFICATION>",
  pillar: "<PILLAR>",
  issuedBy: "<ISSUED BY>",
  date: "<DATE>",
  alignedWith: "<ALIGNED WITH>",
  review: {
    round: <N>,
    dueDate: "<YYYY-MM-DD>"
  },
  blocks: [
    // ordered blocks per mapping rules
  ]
};

function main() {
  const url = buildDocFromManifest(MANIFEST);
  Logger.log("Created: " + url);
  return url;
}
```

## Quality bar

- The output `.gs` is valid JavaScript. The executor should mentally run `node --check` over it; if uncertain, ask the author to run it.
- The block list is in source order. No reordering, no merging of paragraphs.
- Anchor numbering is stable: the same source `.md` produces the same anchors on a second run.

## What this prompt does NOT do

- It does not create the Google Doc. The author runs the Apps Script.
- It does not edit the source `.md`. If pre-flight fails, it reports and stops.
- It does not commit anything to git.
````

- [ ] **Step 2.2: Verify the prompt against the spec**

Read your written prompt back. Confirm each spec item is covered:
- Pre-flight rule scanning (CLAUDE.md compliance). Yes.
- Manifest schema matches scaffold. Yes.
- Anchor scheme `<DOC-ID>-S<dotted>`. Yes.
- No doc creation, no commits. Yes.

If any are missing, add inline.

- [ ] **Step 2.3: Propose commit (ask user before running)**

Proposed commit:
```bash
git add prompts/md-to-gdoc-script.md
git commit -m "Add md-to-gdoc-script prompt for review-doc generation.

Converts a policy .md into a per-document Apps Script manifest paired
with docs/_gdoc-template.gs. Includes pre-flight CLAUDE.md rule scan
that refuses to emit on em-dash or banned-phrase hits."
```

---

## Task 3: `gdoc-comments-to-md-revision` prompt

**Files:**
- Create: `prompts/gdoc-comments-to-md-revision.md`

- [ ] **Step 3.1: Create the prompt file**

Create `prompts/gdoc-comments-to-md-revision.md`:

````markdown
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
````

- [ ] **Step 3.2: Spot-check the prompt against a fabricated example (mental walkthrough)**

Mentally walk through these two comments and check the prompt covers them:
- Comment: "This sentence has an em dash." Disposition: accept (apply); diff replaces em dash. Prompt covers this via the re-scan rule in step 3. Yes.
- Comment: "Move this whole section to the security pillar." Disposition: defer; appears only in table, not in diff. Prompt covers this. Yes.

Expected: both paths covered.

- [ ] **Step 3.3: Propose commit (ask user before running)**

Proposed commit:
```bash
git add prompts/gdoc-comments-to-md-revision.md
git commit -m "Add gdoc-comments-to-md-revision prompt for review round-trip.

Converts an exportReviewComments output plus the source policy .md
into a disposition table and a git-applyable diff. Anchor-first
matching with quoted-text fallback. Re-scans accepted revisions for
CLAUDE.md writing-rule violations before emitting."
```

---

## Task 4: Workflow README

**Files:**
- Create: `workflow/README.md`

- [ ] **Step 4.1: Create the workflow README**

Create `workflow/README.md`:

```markdown
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
   - Enable Services, Drive API v3.
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
- [ ] `Review Drafts/<DOC-ID>/` exists in your Drive (created automatically on first run).
- [ ] Drive Advanced Service is enabled in the Apps Script project.
- [ ] You can read `_gdoc-template.gs` and the per-document manifest end-to-end before running `main`.
```

- [ ] **Step 4.2: Propose commit (ask user before running)**

Proposed commit:
```bash
git add workflow/README.md
git commit -m "Add workflow README for the Google Docs review process.

Six-phase narrative (generate, distribute, review, export, apply,
close out) with roles, artifacts table, and a first-run checklist."
```

---

## Task 5: Dry-run validation against ARC-001

**Files:**
- No code changes.
- Generates: a per-document `.gs` for `ARC-001` (kept as a working artifact, not committed by default).

- [ ] **Step 5.1: Run the prompt against ARC-001**

Action: invoke the `md-to-gdoc-script` prompt with:
- Source: `docs/architecture/ARC-001_Enterprise_Architecture_Reference_Model.md`
- Round: 1
- Due date: ask the user for a realistic date

Expected output: a fenced `.gs` block defining `MANIFEST` and `main()` for ARC-001.

- [ ] **Step 5.2: Sanity-check the emitted manifest**

Confirm:
- Front matter (Document ID, Version, Status, Classification, Pillar, Issued By, Date, Aligned With) all populated.
- First heading block matches the first `#` heading in ARC-001 and carries anchor `ARC-001-S1`.
- No banned phrases survived into block text.
- The total block count is in a plausible range for ARC-001 (eyeball; do not assert exact number).

Expected: all four checks pass. If any fail, fix the prompt and re-run.

- [ ] **Step 5.3: Optional Apps Script smoke test (HUMAN STEP)**

If the user wants end-to-end confirmation now: paste the scaffold plus the emitted ARC-001 manifest into an Apps Script project, run `main`, open the resulting Google Doc, and visually confirm cover, banner, anchors under each heading, and footer.

Expected: doc renders without script errors. Capture and fix any rendering glitches before declaring the workflow ready for production use.

- [ ] **Step 5.4: No commit on this task by default**

The dry-run artifact is operational, not part of the repo's normative content. Do not commit unless the user asks.

---

## Self-Review (run after writing the plan)

This section was completed during plan authoring. Findings:

- **Spec coverage:** every section of the design doc maps to a task:
  - Spec §4 (template layout, anchors, style), Task 1 (step 1.3 covers cover, banner, anchors, blocks, footer).
  - Spec §5.1 (doc builder), Task 1 step 1.3.
  - Spec §5.2 (comment exporter), Task 1 step 1.5.
  - Spec §5.3 (export file format), Task 1 step 1.5 `formatExport`.
  - Spec §6.1 (md-to-gdoc-script prompt), Task 2.
  - Spec §6.2 (gdoc-comments-to-md-revision prompt), Task 3.
  - Spec §7 (repo additions), file-structure table at top plus all tasks.
  - Spec §8 (six-phase workflow), Task 4 (README).
  - Spec §10 (success criteria), Task 5 (dry-run).
- **Placeholder scan:** no TBDs, no "implement appropriately", no "similar to Task N" without the actual code. The two HUMAN STEP markers (steps 1.7 and 5.3) are intentional and bounded.
- **Type consistency:** manifest fields used in `_gdoc-template.gs` match the schema documented at the top of that file and in the `md-to-gdoc-script` prompt's template. Function names are consistent between scaffold and prompt (`buildDocFromManifest`, `main`).
- **Scope:** single coherent feature, one implementation plan. Decomposition not warranted.

No fixes required.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-22-gdoc-review-workflow.md`.

Two execution options:

1. **Subagent-Driven (recommended)**, I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution**, execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach?
