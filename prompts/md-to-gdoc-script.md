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
