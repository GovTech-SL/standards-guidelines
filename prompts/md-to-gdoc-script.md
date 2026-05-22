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
- Obligation softeners used in place of `shall`, `should`, or `may` (case-insensitive, whole-word): "consider", "look to", "seek to", "aim to". Flag every occurrence; the author confirms each whether the use is legitimate (e.g. "the committee will consider the submission") or a softening of an obligation (a violation).

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

- **Front matter** (`**Document ID:** ...`, etc.) populates the manifest cover fields, except for `title`. The `title` field is derived from the source document's `#` heading: strip a leading `<DOC-ID>:` prefix and any whitespace, leaving only the descriptive title. For example, `# ARC-001: Enterprise Architecture Reference Model` produces `title: "Enterprise Architecture Reference Model"`. Copy the `status` value verbatim from the front matter, including any parenthetical qualifier such as `(For Internal Review)`; do not normalise it.
- **Missing front matter.** If a required field is absent from the source (e.g. `GOV-001` omits `Pillar`; an early draft may omit `Date`), use an empty string `""` for that field in the manifest and append a JavaScript line comment on the same line flagging it, e.g. `pillar: "", // not present in source - verify before sending`. Never emit `undefined` or `null` for cover fields.
- **Review round and due date** are taken from the invocation args, not from the source.
- **Headings.** The source `.md`'s top-level `#` heading is the document title; it is already rendered by the scaffold's cover block from the `title` front-matter field and MUST NOT be emitted as a block. Body headings start at `##`, with one exception: a `##` heading whose text equals "Table of Contents" (case-insensitive, optionally followed by punctuation) MUST be skipped, along with the list block that follows it until the next heading. The scaffold generates its own TOC; emitting the source's TOC would duplicate it and consume the first anchor slot, shifting every section's anchor by one. Map markdown depth to manifest `level` as: `##` -> `level: 1`, `###` -> `level: 2`, `####` -> `level: 3`, `#####` -> `level: 4`, `######` -> `level: 5`. Each emitted heading becomes `{ type: "heading", level, number, text, anchor }`. Numbering is derived by walking the heading tree from the first `##` (`1`, `1.1`, `1.2`, `2`, ...). The anchor is `<DOC-ID>-S<number>` and only heading blocks carry an anchor; paragraph, list, table, code, and extension-point blocks inherit the anchor of the nearest preceding heading for review-comment purposes.
- **Paragraphs** become `{ type: "paragraph", text }`. Strip inline markdown markers (`**`, `*`, backticks, `[text](url)` link syntax keeping only the visible text) to produce plain text. The scaffold does not apply character-level bold, italic, or link formatting in paragraphs; rich text in body paragraphs is not supported in this output path.
- **Bullet or numbered lists** become `{ type: "list", style, items: [...] }`. The outer list's marker style sets `style` for the entire flattened block. Nested items are flattened to a single level with leading `"  "` indentation prepended; if a nested level uses a different marker style from its parent, that distinction is lost in the rendered Google Doc (a known limitation). Each list item must be a single string; multi-paragraph items are concatenated with a single space.
- **Tables** become `{ type: "table", rows, hasHeader }`. `hasHeader` is `true` if the markdown table has a separator row (`| --- |`), `false` otherwise. If `hasHeader` is `true`, the first row is the header.
- **Fenced code blocks** become `{ type: "code", lang, text }`. The `lang` field is captured for completeness; the current scaffold does not apply syntax-specific styling, so `lang` is descriptive only.
- **Extension Points.** Two source forms produce an `extensionPoint` block. (a) A heading whose text contains "Extension Point" (any level) is consumed entirely as the block's `title`; no sibling heading block is emitted; the `body` is the concatenation of paragraphs that follow until the next heading. (b) A blockquote that begins `> **Extension Point**` under a non-Extension-Point heading produces an `extensionPoint` block whose `title` is "Extension Point" and whose `body` is the remainder of the blockquote; the preceding heading is still emitted as its own heading block. Form (a) takes precedence: if a heading contains "Extension Point", do not also process a blockquote inside that section as a separate extensionPoint block; merge it into the title's `body`.

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
