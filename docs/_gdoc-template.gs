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
    "Anchor codes (example: ARC-001-S4.2) are machine identifiers. " +
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
  try {
    const doc = DocumentApp.getActiveDocument();
    const fileId = doc.getId();

    const threads = [];
    let pageToken = null;
    do {
      const params = {
        fields: "nextPageToken,comments(id,content,author/displayName,createdTime,resolved," +
                "quotedFileContent/value,replies(content,author/displayName,createdTime))",
        pageSize: 100,
        includeDeleted: false
      };
      if (pageToken) params.pageToken = pageToken;
      const res = Drive.Comments.list(fileId, params);
      if (res.comments) {
        for (const c of res.comments) threads.push(c);
      }
      pageToken = res.nextPageToken || null;
    } while (pageToken);

    const anchorIndex = buildAnchorIndex(doc);
    const lines = formatExport(doc, threads, anchorIndex);

    const filename = buildExportFilename(doc);
    const folder = getDocFolder(fileId);
    const file = folder.createFile(filename, lines.join("\n"), "text/markdown");

    DocumentApp.getUi().alert(
      "Exported " + threads.length + " comment thread(s) to:\n\n" +
      file.getUrl()
    );
  } catch (e) {
    DocumentApp.getUi().alert("Export failed: " + e.message);
  }
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
