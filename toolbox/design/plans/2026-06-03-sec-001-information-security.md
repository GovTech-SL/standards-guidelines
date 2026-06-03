# SEC-001 Information Security Policy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author SEC-001, the Information Security Policy, as a single Markdown policy document that establishes the GovTech Sri Lanka ISMS and the security baseline the SEC siblings and other pillars build on.

**Architecture:** One master document under `docs/security/`, following the `docs/_template.md` layout and the canonical Extension Point block. It establishes an ISO/IEC 27001:2022 ISMS with NIST CSF 2.0 framing the risk lifecycle, states policy-level baseline controls across the four ISO control themes scoped by System Impact Level, sets a tiered assurance regime, and delegates deep specifics to SEC-002..006 and other pillars. Two index files are updated to mark the document Draft.

**Tech Stack:** Markdown, Git. No build or test toolchain. Quality gates are the repo prose-lint greps and cross-reference checks.

**Source of truth:** Design spec at `toolbox/design/specs/2026-06-03-sec-001-information-security-design.md`. Adopted frameworks: ISO/IEC 27001:2022 and NIST CSF 2.0 (both already adopted in ARC-001 Section 6).

**Branch:** `sec-001-information-security` (already created; the design spec is already committed on it). All authoring lands in ONE final commit (Task 11), then a PR.

**Binding writing rules (apply to every prose step):** no em dashes; no banned phrases ("it is worth noting", "furthermore", "moreover", "in order to", "with respect to", etc.); no banned vocabulary ("robust", "leverage", "utilise", "facilitate", "streamline", "ensure that", etc.); obligation terms `shall`/`shall not`/`should`/`may`/`must not`; active voice; no sentence over two clauses; do not start consecutive bullets with the same word; no invented platform/product names; brand as GovTech Sri Lanka, never ICTA; use "Sri Lanka's Digital Economy Blueprint".

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
- Create: `docs/security/SEC-001_Information_Security_Policy.md`

- [ ] **Step 1: Create the file with front matter, TOC, and empty section headings.**

Front matter (match `docs/_template.md` and GOV-001/ARC-001/DAT-001 patterns; each line ends with two trailing spaces):

```
# SEC-001: Information Security Policy

**Document ID:** SEC-001
**Version:** 1.0
**Status:** DRAFT (For Internal Review)
**Classification:** OFFICIAL
**Pillar:** Security and Compliance
**Parent Document:** [GOV-001: GovTech Master Governance Policy](../Master_Governance_Policy.md)
**Issued By:** GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division
**Date:** June 2026
**Aligned With:** Sri Lanka's Digital Economy Blueprint
```

Then `## Table of Contents` listing the eight top-level sections plus Appendix A and B, then empty `##` headings. Section heading text: `1. Introduction`, `2. Strategic Context: Sri Lanka's Digital Economy Blueprint`, `3. Principles`, `4. Requirements`, `5. Governance and Compliance`, `6. Roles and Responsibilities`, `Appendix A: Glossary`, `Appendix B: Related Documents`.

- [ ] **Step 2: Verify front matter.** Run: `grep -nE "Document ID:|Version:|Status:|Pillar:|Parent Document:|Aligned With:" docs/security/SEC-001_Information_Security_Policy.md` Expected: six matching lines.

---

### Task 2: Section 1 Introduction

**Files:** Modify `docs/security/SEC-001_Information_Security_Policy.md`

- [ ] **Step 1: Write subsections 1.1 to 1.4.**
  - **1.1 Purpose:** SEC-001 establishes the Information Security Management System (ISMS) and the security baseline for all GovTech-governed digital systems. It is the apex of the Security and Compliance pillar; the SEC sibling standards and other pillars operationalise its requirements.
  - **1.2 Scope:** applies to all GovTech-owned and GovTech-governed systems and the government data they hold, process, or exchange, and to all ministries, departments, statutory bodies, and vendors operating such systems.
  - **1.3 Intended Audience:** Risk Owners and system owners; agency CIOs and CTOs; solution architects and vendors; the GovTech security function and reviewers.
  - **1.4 Definitions and Acronyms:** document-specific terms only: `ISMS`, `Security Control`, `Risk Owner`, `Residual Risk`, `Statement of Applicability`. Reference shared terms (Impact Level, Enforcement Level, Extension Point, Deviation Register, SL-UDI, GovPay, NDX) from GOV-001.

- [ ] **Step 2: Prose-lint.** Run: `grep -nE "—|robust|leverage|utilise|facilitate|streamline|ensure that|in order to|furthermore|moreover|with respect to" docs/security/SEC-001_Information_Security_Policy.md` Expected: no matches.

---

### Task 3: Section 2 Strategic Context

- [ ] **Step 1: Write Section 2.** Two short paragraphs: (a) information security underpins the Blueprint's Trust and Governance enabler and protects every Digital Public Infrastructure service; (b) security controls scale with the System Impact Level defined in GOV-001 Section 6.2, so protection is proportionate to the consequence of compromise.
- [ ] **Step 2: Prose-lint (same grep).** Expected: no matches.

---

### Task 4: Section 3 Principles

- [ ] **Step 1: Write Section 3** as a short list of binding principles, one sentence each, distinct opening words:
  1. Protect the confidentiality, integrity, and availability of government information.
  2. Build security into systems from design, not after deployment.
  3. Base controls on assessed risk and the System Impact Level.
  4. Apply defence in depth across layers.
  5. Grant access on a least-privilege, need-to-know basis.
  6. Monitor continuously and assume that compromise will be attempted.
  7. Hold a named Risk Owner accountable for each system's security.
- [ ] **Step 2: Prose-lint (same grep); confirm no two consecutive principles open with the same word.** Expected: no matches.

---

### Task 5: Section 4.1 Information Security Management System

- [ ] **Step 1: Write Section 4.1.** Every implementing party shall operate an ISMS aligned to ISO/IEC 27001:2022 for the systems it runs. The ISMS shall define its scope, maintain a Statement of Applicability recording which controls apply and why, and follow a documented continual-improvement cycle. NIST CSF 2.0 frames the risk-management lifecycle (govern, identify, protect, detect, respond, recover) used across this policy.
- [ ] **Step 2: Add the Extension Point block.** Default Recommendation: ISO/IEC 27001:2022 (ISMS) with NIST CSF 2.0 for the risk lifecycle. Evidence: the ISMS scope statement and Statement of Applicability. Review Frequency: annual.
- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 6: Section 4.2 Risk Management

- [ ] **Step 1: Write Section 4.2.** Each system shall undergo a documented security risk assessment before its design-stage approval (Gate 1 in ARC-001). The party shall produce a risk treatment plan; residual risk shall be accepted in writing by the Risk Owner. Residual-risk sign-off authority scales with the System Impact Level: Impact Level 1 to 2 by the agency Risk Owner; Impact Level 3 to 4 by the agency accounting officer with notification to GovTech. Risk assessments shall be reviewed on a defined cycle and on material change.
- [ ] **Step 2: Add the Extension Point block.** Default Recommendation: a risk-management method aligned to NIST CSF 2.0 and ISO/IEC 27005. Evidence: the risk assessment, treatment plan, and signed residual-risk acceptance. Review Frequency: annual or on material change.
- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 7: Section 4.3 Security Controls by Theme

- [ ] **Step 1: Write Section 4.3** with one subsection per ISO/IEC 27001:2022 control theme. Each states policy-level baselines scoped by Impact Level and delegates specifics. Content:
  - **4.3.1 Organizational controls:** maintain documented security policies and a current information asset register; assign security responsibilities; manage supplier and third-party security risk through contractual security clauses and access review; apply change management to security-relevant changes. Procurement requirements are defined in POL-004.
  - **4.3.2 People controls:** screen personnel proportionate to the Impact Level of the data they access; deliver security awareness training at onboarding and at least annually; operate a joiners, movers, and leavers process that provisions and revokes access promptly; bind staff and contractors to confidentiality obligations.
  - **4.3.3 Physical controls:** restrict physical access to facilities and equipment holding government data; protect and securely dispose of storage media. Hosting and data-centre controls are defined in ARC-003.
  - **4.3.4 Technological controls:** maintain centralised, tamper-evident logging and monitoring integrated with the GovTech National Operations Centre; run vulnerability management and apply security patches within timelines that tighten as the Impact Level rises; enforce secure configuration baselines. Access and identity are defined in SEC-005; cryptography and key management in SEC-006; application security in SEC-002; backup and resilience in ARC-006.
- [ ] **Step 2: Add the Extension Point block** for Section 4.3 (Default Recommendation: the ISO/IEC 27001:2022 Annex A controls across the four themes; Evidence: the Statement of Applicability mapping each applicable control to its implementation; Review Frequency: annual).
- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 8: Section 4.4 Security Assurance and Certification

- [ ] **Step 1: Write Section 4.4** with the tiered assurance table:

```
| System Impact Level | Assurance requirement |
|---|---|
| 1 to 2 | ISMS aligned to ISO/IEC 27001:2022; self-attestation reviewed by GovTech |
| 3 to 4 | Independent ISO/IEC 27001 certification, or an accepted equivalent such as SOC 2 Type II with a documented gap assessment |
```

State that penetration testing is governed by SEC-003, incident response and breach notification by SEC-004, and data classification by DAT-001; these apply in addition to the assurance requirement.

- [ ] **Step 2: Add the Extension Point block.** Default Recommendation: independent ISO/IEC 27001 certification at Impact Level 3 and above. Evidence: the certificate or equivalent attestation with its scope, or the reviewed self-attestation for Impact Level 1 to 2. Review Frequency: on the certificate's cycle, or annual for self-attestation.
- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 9: Sections 5 and 6 (Governance, Roles)

- [ ] **Step 1: Write Section 5 Governance and Compliance.** The GovTech security function owns this policy and reviews assurance submissions; compliance is a condition of the ARC-001 approval gates; security posture is monitored continuously; non-compliance is handled per GOV-001 Section 6 (System Impact Classification, Enforcement Levels, and non-compliance actions). Reference GOV-001; do not duplicate it.
- [ ] **Step 2: Write Section 6 Roles and Responsibilities** as a table: GovTech security function and Standards and Policy Division (own and maintain this policy, review assurance); Risk Owner (accepts residual risk, accountable for the system's security); Custodian (operates controls); Implementing Party (runs the ISMS, evidences compliance); Agency CIO (accountable for portfolio compliance). Keep role titles consistent with the GOV-001 role set; do not invent new organisational titles.
- [ ] **Step 3: Prose-lint (same grep).** Expected: no matches.

---

### Task 10: Appendices A and B

- [ ] **Step 1: Write Appendix A Glossary** for document-specific terms only (ISMS, Security Control, Risk Owner, Residual Risk, Statement of Applicability); reference shared terms from GOV-001.
- [ ] **Step 2: Write Appendix B Related Documents** table: GOV-001 (parent); SEC-002, SEC-003, SEC-004, SEC-005, SEC-006 (siblings); DAT-001 (classification); ARC-001 (adopts ISO 27001/NIST CSF and the approval gates), ARC-003 (hosting), ARC-006 (DR and business continuity); POL-002 (PDPA); POL-004 (procurement). Mark each Planned or Active/Draft per the README.
- [ ] **Step 3: Verify referenced Doc IDs exist.** Run: `for id in GOV-001 SEC-002 SEC-003 SEC-004 SEC-005 SEC-006 DAT-001 ARC-001 ARC-003 ARC-006 POL-002 POL-004; do grep -q "$id" docs/README.md && echo "$id ok" || echo "$id MISSING"; done` Expected: all `ok`.

---

### Task 11: Index updates, final verification, single commit and PR

**Files:**
- Modify: `docs/README.md`
- Modify: `docs/Master_Governance_Policy.md`

- [ ] **Step 1: Mark SEC-001 as Draft in the indexes.** In `docs/Master_Governance_Policy.md` Section 4 Pillar 3, change the SEC-001 row status from `Planned` to `Draft` (the row currently reads "Information Security Policy (ISO 27001) | Planned"). In `docs/README.md`, move SEC-001 from the Planned table into the existing-documents (Active) table, mirroring how ARC-001 and DAT-001 are listed, and remove its Planned-table row.

- [ ] **Step 2: Full prose-lint across the new document and the indexes.** Run: `grep -nE "—|it is worth noting|furthermore|moreover|in order to|with respect to|robust|leverage|utilise|facilitate|streamline|ensure that" docs/security/SEC-001_Information_Security_Policy.md docs/README.md docs/Master_Governance_Policy.md` Expected: no matches.

- [ ] **Step 3: No-invented-names and no-ICTA check.** Run: `grep -nE "GovPortal|GovApp|GovCloud|GovNotify|GovSign|eServices|ICTA" docs/security/SEC-001_Information_Security_Policy.md` Expected: no matches.

- [ ] **Step 4: Template conformance.** Run: `grep -cE "Extension Point:" docs/security/SEC-001_Information_Security_Policy.md` Expected: 4 (one per Section 4.x).

- [ ] **Step 5: Single commit.**

```bash
git add docs/security/SEC-001_Information_Security_Policy.md docs/README.md docs/Master_Governance_Policy.md
git commit -m "Add SEC-001 Information Security Policy (draft)"
```

(Commit body: summarise the ISMS, the theme-based controls scoped by Impact Level, the tiered assurance, and the deferrals to siblings. No AI-attribution footer.)

- [ ] **Step 6: Push and open a PR.**

```bash
git push -u origin sec-001-information-security
gh pr create --base main --title "Add SEC-001 Information Security Policy (draft)" --body "<summary + verification notes; no AI-attribution footer>"
```

---

## Self-Review (completed during planning)

- **Spec coverage:** ISMS (Task 5), risk management (Task 6), the four control themes (Task 7), tiered assurance (Task 8), governance and roles (Task 9), boundaries/deferrals (Tasks 7, 8, 10), front matter and structure (Tasks 1 to 10), index updates (Task 11). All spec sections map to a task.
- **Placeholder scan:** the assurance table and the Extension Point block are included verbatim; narrative sections specify exact required content. No "TBD"/"TODO".
- **Consistency:** the four ISO 27001:2022 theme names, the Impact-Level tiering (1 to 2 self-attest; 3 to 4 certify), and the delegations (SEC-005 access, SEC-006 crypto, SEC-002 app, ARC-006 backup, ARC-003 hosting) are identical across Tasks 7, 8, and the spec. Extension Point count expected = 4 matches the four Section 4.x requirements.
