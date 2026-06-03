# DAT-001 Data Classification and Handling Policy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author DAT-001, the Data Classification and Handling Policy, as a single Markdown policy document that resolves the live dangling references in GOV-001 Section 6.2 and ARC-001 Section 4.2.

**Architecture:** One master document under `docs/data/`, following the `docs/_template.md` layout and the canonical Extension Point block. It adopts the GovTech Sri Lanka five-level classification scheme verbatim and maps it to the GOV-001 Impact Levels, adds an obligation-level handling matrix, and defers adjacent concerns to sibling documents. Two index files are updated to mark the document Draft.

**Tech Stack:** Markdown, Git. No build or test toolchain. Quality gates are the repo prose-lint greps and cross-reference checks.

**Source of truth:** Design spec at `toolbox/design/specs/2026-06-03-dat-001-data-classification-design.md`. Classification source: `references/Infomation-Classification-Policy_Ver-1.3.pdf` (ICTA).

**Branch:** `dat-001-data-classification` (already created; the design spec is already committed on it). All authoring lands in ONE final commit (Task 11), then a PR.

**Binding writing rules (apply to every prose step):** no em dashes; no banned phrases ("it is worth noting", "furthermore", "moreover", "in order to", "with respect to", etc.); no banned vocabulary ("robust", "leverage", "utilise", "facilitate", "streamline", "ensure that", etc.); obligation terms `shall`/`shall not`/`should`/`may`/`must not`; active voice; no sentence over two clauses; do not start consecutive bullets with the same word; no invented platform/product names.

**Canonical Extension Point block** (used verbatim, fields filled, at the end of each Section 4.x requirement; from `docs/_template.md` Section 4.0):

```
> **Extension Point: <Section Number and Title>**
>
> **Default Recommendation.** <standard/practice, with version>
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** <artefacts>
>
> **Review Frequency.** <cadence>
```

---

### Task 1: Scaffold the document from the template

**Files:**
- Create: `docs/data/DAT-001_Data_Classification_Handling_Policy.md`

- [ ] **Step 1: Create the file with front matter, TOC, and empty section headings.**

Front matter (match `docs/_template.md` and GOV-001/ARC-001 patterns exactly):

```
# DAT-001: Data Classification and Handling Policy

**Document ID:** DAT-001
**Version:** 1.0
**Status:** DRAFT (For Internal Review)
**Classification:** OFFICIAL
**Pillar:** Data Management
**Parent Document:** [GOV-001: GovTech Master Governance Policy](../Master_Governance_Policy.md)
**Issued By:** GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division
**Date:** June 2026
**Aligned With:** Sri Lanka's Digital Economy Blueprint
```

(Each front-matter line ends with two trailing spaces, as in GOV-001/ARC-001.)

Then a `## Table of Contents` listing the eight top-level sections plus Appendix A and B, then empty `##` headings for sections 1 to 6 and the appendices. Section heading text:
`1. Introduction`, `2. Strategic Context: Sri Lanka's Digital Economy Blueprint`, `3. Principles`, `4. Requirements`, `5. Governance and Compliance`, `6. Roles and Responsibilities`, `Appendix A: Glossary`, `Appendix B: Related Documents`.

- [ ] **Step 2: Verify front matter is complete.**

Run: `grep -nE "Document ID:|Version:|Status:|Pillar:|Parent Document:|Aligned With:" docs/data/DAT-001_Data_Classification_Handling_Policy.md`
Expected: six matching lines.

---

### Task 2: Section 1 Introduction

**Files:** Modify `docs/data/DAT-001_Data_Classification_Handling_Policy.md`

- [ ] **Step 1: Write subsections 1.1 to 1.4.**
  - **1.1 Purpose:** DAT-001 defines how government information is classified and handled across all GovTech-governed digital systems. It establishes the classification scheme that GOV-001 Section 6.2 uses for the confidentiality dimension of the System Impact Level, and the labelling that ARC-001 Section 4.2 requires.
  - **1.2 Scope:** applies to all government data created, stored, processed, or exchanged in GovTech-owned or GovTech-governed systems, in any medium; to all ministries, departments, statutory bodies, and vendors operating such systems. ICT assets that are not information assets (software, hardware) are out of scope for classification but inherit handling obligations from the data they process.
  - **1.3 Intended Audience:** Information Owners and Custodians; agency CIOs and CTOs; solution architects and vendors; GovTech reviewers.
  - **1.4 Definitions and Acronyms:** a table defining only document-specific terms: `Information Asset`, `Information Owner`, `Custodian`, `Declassification`, `Data Class`. Reference shared terms (SL-UDI, GovPay, NDX, Extension Point, Deviation Register, Impact Level, Enforcement Level) from GOV-001 rather than redefining.

- [ ] **Step 2: Prose-lint this section.**

Run: `grep -nE "—|robust|leverage|utilise|facilitate|streamline|ensure that|in order to|furthermore|moreover|with respect to" docs/data/DAT-001_Data_Classification_Handling_Policy.md`
Expected: no matches.

---

### Task 3: Section 2 Strategic Context

**Files:** Modify the document.

- [ ] **Step 1: Write Section 2.** Two short paragraphs: (a) classification advances the Blueprint's Trust and Governance enabler and is the precondition for consent-driven exchange over the National (Federated) Data Exchange (NDX); (b) the scheme operationalises GOV-001 Section 6.2, supplying the confidentiality dimension of the System Impact Level. Use Blueprint terminology; keep NDX/SL-UDI/GovPay names.

- [ ] **Step 2: Prose-lint (same grep as Task 2 Step 2).** Expected: no matches.

---

### Task 4: Section 3 Principles

**Files:** Modify the document.

- [ ] **Step 1: Write Section 3 as a short list of binding principles**, each one sentence, distinct opening words:
  1. Classify every information asset by its sensitivity and value.
  2. Treat unclassified information as Limited Sharing until it is assessed.
  3. Maintain classification across the full information lifecycle.
  4. Hold the Information Owner accountable for classification decisions.
  5. Grant access on a need-to-know, least-privilege basis.
  6. Apply controls commensurate with the assigned class.

- [ ] **Step 2: Prose-lint (same grep).** Expected: no matches. Confirm no two consecutive principles open with the same word.

---

### Task 5: Section 4.1 Classification Scheme

**Files:** Modify the document.

- [ ] **Step 1: Write Section 4.1.** Adopt the five ICTA levels verbatim in a table (class, colour, definition, examples), faithful to `references/Infomation-Classification-Policy_Ver-1.3.pdf`:
  - Unclassified (White): interim status for information not yet evaluated; handled as Limited Sharing until assessed; release to the public requires prior Owner authorisation.
  - Public (Green): freely available; minimal or no confidentiality protection; integrity protected on release. Examples: government acts and policies; public-service information; weather information; job advertisements.
  - Limited Sharing (Amber): compromise causes limited damage; covers organisational process information, personal information of citizens, confidential business information, meeting minutes, inventory data.
  - Confidential (Red): compromise causes high-probability damage to national security, infrastructure, commercial entities, or individuals; covers personal case files, tax returns, personal health information, trade secrets, salary information.
  - Secret (Scarlet): compromise causes serious damage to national security or life; covers criminal investigations for major crime, foreign-affairs data, Cabinet documents, provincial budget prior to release.

- [ ] **Step 2: Add the class-to-Impact-Level mapping table** (this is the model GOV-001 Section 6.2 references):

```
| Data class | Confidentiality Impact Level |
|---|---|
| Unclassified | Interim; handled as Limited Sharing until assessed |
| Public | 1 (Low) |
| Limited Sharing | 2 (Medium) |
| Confidential | 3 (High) |
| Secret | 4 (Very High) |
```

- [ ] **Step 3: Add the Extension Point block** (Default Recommendation: the GovTech Sri Lanka classification scheme in Section 4.1.1; Evidence: a classification register extract and the proposed alternative scheme with mapping to these five classes; Review Frequency: annual).

- [ ] **Step 4: Prose-lint (same grep).** Expected: no matches.

---

### Task 6: Section 4.2 Classifying Information

**Files:** Modify the document.

- [ ] **Step 1: Write Section 4.2** adopting the GovTech Sri Lanka classification process and roles:
  - The five-step process: identify the information asset; assign an Information Owner and a Custodian; assess impact across confidentiality, integrity, and availability; determine the class as the highest level reached; apply controls per Section 4.3.
  - Assigning: the Owner (or delegate) classifies at the earliest opportunity. Externally generated assets: the receiving officer ensures an Owner and Custodian are assigned and the asset is entered in the information asset register.
  - Altering: only the originating organisation (or its successor on merger or abolition) may alter a classification; a party that believes a classification is wrong shall query the originating organisation.

- [ ] **Step 2: Add the Extension Point block** (Default Recommendation: the classification process in Section 4.2.1; Evidence: the documented asset register and Owner/Custodian assignments; Review Frequency: annual).

- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 7: Section 4.3 Handling Requirements

**Files:** Modify the document.

- [ ] **Step 1: Write Section 4.3** with one obligation-level matrix. Crypto specifics defer to SEC-006; identity and access to SEC-005 and SEC-001. Matrix:

```
| Data class | Labelling | Access | At rest | In transit | Sharing |
|---|---|---|---|---|---|
| Public | Optional | Open | No confidentiality control; integrity protected | Encrypted channel (TLS) | Unrestricted; Owner approves release |
| Limited Sharing | Required | Need-to-know | Encrypted | Encrypted channel (TLS) | Named recipients; consent for personal data |
| Confidential | Required | Need-to-know with strong authentication | Encrypted | Encrypted channel with mutual authentication | Explicit Owner authorisation per recipient |
| Secret | Required | Strict allowlist | Encrypted with hardware-backed key protection | Encrypted channel with mutual authentication | Prohibited unless the Owner authorises in writing |
```

State that personal data is classified at minimum Limited Sharing, with PDPA obligations defined in POL-002; that data shared across agencies carries its class into NDX, with exchange mechanics defined in DAT-003 and ARC-005.

- [ ] **Step 2: Add the Extension Point block** (Default Recommendation: these handling obligations with cryptographic control per SEC-006; Evidence: a control-mapping showing how the system meets each obligation for the data classes it holds; Review Frequency: annual or on material architecture change).

- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 8: Section 4.4 Declassification and Review

**Files:** Modify the document.

- [ ] **Step 1: Write Section 4.4.** Classification duration may be set by a date or event, or a fixed period after the last action on an asset; where none is set, a default review at ten years applies, consistent with government norms. The Owner reviews classification on a defined trigger or schedule and may reclassify. Some information may be classified indefinitely. Destruction and retention schedules are defined in DAT-004 and are out of scope here.

- [ ] **Step 2: Add the Extension Point block** (Default Recommendation: scheduled declassification review; Evidence: the declassification schedule or trigger registered with the asset; Review Frequency: per the asset's declassification schedule).

- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 9: Sections 5 and 6 (Governance, Roles)

**Files:** Modify the document.

- [ ] **Step 1: Write Section 5 Governance and Compliance.** Labelling and classification are auditable; the Information Owner conducts an annual classification review; non-compliance is handled per GOV-001 Section 6 (System Impact Classification, Enforcement Levels, and non-compliance actions). Do not duplicate GOV-001; reference it.

- [ ] **Step 2: Write Section 6 Roles and Responsibilities** as a table: Information Owner (classifies, authorises release, reviews annually); Custodian (implements and maintains controls per the Owner's rules); Standards and Policy Division (maintains this document, audits classification); Implementing Party (labels data, applies handling controls, evidences compliance).

- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 10: Appendices A and B

**Files:** Modify the document.

- [ ] **Step 1: Write Appendix A Glossary** for document-specific terms only (Information Asset, Information Owner, Custodian, Declassification, Data Class); reference shared terms from GOV-001.

- [ ] **Step 2: Write Appendix B Related Documents** table: GOV-001 (parent); DAT-002, DAT-003, DAT-004, DAT-005 (siblings); POL-002 (personal data and PDPA); SEC-001, SEC-005, SEC-006 (security, identity, cryptography); ARC-001 (consumes classification). Mark each Planned or Active/Draft as per the README.

- [ ] **Step 3: Verify every referenced Doc ID exists** in `docs/README.md` or GOV-001 Section 4.

Run: `for id in GOV-001 DAT-002 DAT-003 DAT-004 DAT-005 POL-002 SEC-001 SEC-005 SEC-006 ARC-001; do grep -q "$id" docs/README.md && echo "$id ok" || echo "$id MISSING"; done`
Expected: all `ok`.

---

### Task 11: Index updates, final verification, single commit and PR

**Files:**
- Modify: `docs/README.md`
- Modify: `docs/Master_Governance_Policy.md`

- [ ] **Step 1: Mark DAT-001 as Draft in the indexes.** In `docs/Master_Governance_Policy.md` Section 4 Pillar 5, change the DAT-001 row status from `Planned` to `Draft` (mirroring how ARC-001 is shown). In `docs/README.md`, move DAT-001 from the Planned table into the existing-documents (Active) table with Status Draft, mirroring ARC-001's treatment, and remove its Planned-table row.

- [ ] **Step 2: Full prose-lint across the new document and the indexes.**

Run: `grep -nE "—|it is worth noting|furthermore|moreover|in order to|with respect to|robust|leverage|utilise|facilitate|streamline|ensure that" docs/data/DAT-001_Data_Classification_Handling_Policy.md docs/README.md docs/Master_Governance_Policy.md`
Expected: no matches.

- [ ] **Step 3: No-invented-names check.**

Run: `grep -nE "GovPortal|GovApp|GovCloud|GovNotify|GovSign|eServices" docs/data/DAT-001_Data_Classification_Handling_Policy.md`
Expected: no matches.

- [ ] **Step 4: Template conformance.** Confirm sections 1 to 6 plus Appendix A and B are present and that every Section 4.x requirement ends with an Extension Point block.

Run: `grep -cE "Extension Point:" docs/data/DAT-001_Data_Classification_Handling_Policy.md`
Expected: 4 (one per Section 4.x).

- [ ] **Step 5: Single commit.**

```bash
git add docs/data/DAT-001_Data_Classification_Handling_Policy.md docs/README.md docs/Master_Governance_Policy.md
git commit -m "Add DAT-001 Data Classification and Handling Policy (draft)"
```

(Commit body: summarise the scheme, the Impact-Level mapping resolving GOV-001 Section 6.2, the handling matrix, and the deferrals to sibling documents. No AI-attribution footer.)

- [ ] **Step 6: Push and open a PR.**

```bash
git push -u origin dat-001-data-classification
gh pr create --base main --title "Add DAT-001 Data Classification and Handling Policy (draft)" --body "<summary + verification notes; no AI-attribution footer>"
```

---

## Self-Review (completed during planning)

- **Spec coverage:** scheme + mapping (Task 5), process + roles (Task 6, 9), handling matrix (Task 7), declassification (Task 8), boundaries (Tasks 7, 8, 10), front matter and structure (Task 1 to 10), index updates (Task 11). All spec sections map to a task.
- **Placeholder scan:** the verbatim tables (mapping, handling matrix) and the Extension Point block are included; narrative sections specify exact required content. No "TBD"/"TODO".
- **Consistency:** the five class names, colours, and the Impact-Level mapping are identical across Tasks 5, 7, and the spec. Extension Point count expected = 4 matches the four Section 4.x requirements.
