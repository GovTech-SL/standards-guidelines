# DAT-001 Data Classification and Handling Policy: Design Spec

**Date:** 2026-06-03
**Status:** Design (pre-draft)
**Target document:** `docs/data/DAT-001_Data_Classification_Handling_Policy.md` (Pillar 5, child of GOV-001)

## Context

DAT-001 is a live dangling dependency. GOV-001 Section 6.2 states that the confidentiality dimension of the System Impact Level "follows the data-classification model defined in DAT-001," and ARC-001 Section 4.2 requires "classification labels applied to all data elements (refer to DAT-001)." Neither resolves today because the document does not exist. The national source, the ICTA Information Classification Policy for Government Organizations, is held in `references/Infomation-Classification-Policy_Ver-1.3.pdf`. This document operationalizes that national standard for GovTech-governed digital systems.

Intended outcome: a concise, principle-based classification-and-handling policy that publishes the classification scheme, the class-to-Impact-Level mapping that satisfies GOV-001 Section 6.2, the classification process, and an obligation-level handling matrix, while deferring adjacent concerns to their sibling documents.

## Decisions taken (brainstorming)

1. **Scope: tight classification-and-handling core (approach A).** Adjacent concerns are deferred to siblings (see Boundaries).
2. **Classification scheme: adopt the ICTA five levels verbatim** (Unclassified, Public, Limited Sharing, Confidential, Secret) and map them to the GOV-001 Impact Levels.
3. **Handling controls: one concise obligation-level matrix in the document.** Cryptographic specifics defer to SEC-006; access and identity defer to SEC-005 and SEC-001.

## Classification scheme and Impact-Level mapping (Section 4.1)

Adopt the five ICTA levels with their definitions and examples. Publish this mapping (the confidentiality dimension referenced by GOV-001 Section 6.2):

| Data class | Colour (ICTA) | Confidentiality Impact Level |
|---|---|---|
| Unclassified | White | Interim only; handled as Limited Sharing until assessed |
| Public | Green | 1 (Low) |
| Limited Sharing | Amber | 2 (Medium) |
| Confidential | Red | 3 (High) |
| Secret | Scarlet | 4 (Very High) |

## Handling matrix shape (Section 4.3)

Obligation-level, one row per class, columns: labelling, access, at rest, in transit, sharing. Example obligations (final wording during drafting): Public requires no confidentiality controls but integrity on release; Limited Sharing and above require labelling, need-to-know access, and encryption at rest and in transit; Confidential and above require strong authentication and tighter access control; Secret requires the strictest access and hardware-backed key protection. The matrix states obligations only; algorithms, key lengths, and key management defer to SEC-006.

## Document structure (follows `docs/_template.md`)

1. **Introduction** (purpose, scope: all government data in GovTech-governed systems across all media; audience; doc-specific definitions: Information Asset, Owner, Custodian, Declassification).
2. **Strategic Context** (supports the Blueprint's Trust and Governance enabler; classification is the precondition for consent-driven NDX exchange; ties to GOV-001 Section 6.2).
3. **Principles** (classify by sensitivity and value; unclassified is treated as Limited Sharing until assessed; classification spans the full lifecycle; the Owner is accountable; need-to-know and least privilege; classification drives controls).
4. **Requirements** (each closes with the canonical Extension Point block per template Section 4.0):
   - 4.1 Classification Scheme (five levels + definitions + examples + the Impact-Level mapping above).
   - 4.2 Classifying Information (process: identify asset; assign Owner and Custodian; impact assessment; determine class; apply controls; plus assigning, altering, and externally generated data).
   - 4.3 Handling Requirements (the per-class matrix; crypto to SEC-006, identity and access to SEC-005 and SEC-001).
   - 4.4 Declassification and Review (duration, review triggers, reclassification; destruction and retention schedules to DAT-004).
5. **Governance and Compliance** (labelling audits; the Owner's annual review; non-compliance routes to GOV-001 Section 6).
6. **Roles and Responsibilities** (Owner, Custodian, Standards and Policy Division, implementing party).
- **Appendix A: Glossary**; **Appendix B: Related Documents**.

## Boundaries (deferrals to siblings)

- Personal data: classified at minimum Limited Sharing; PDPA obligations (lawful basis, consent, data-subject rights) defer to POL-002.
- Inter-agency shared data carries its classification into NDX; exchange mechanics defer to DAT-003 and ARC-005.
- Retention and disposal schedules defer to DAT-004; master data definitions to DAT-002; open-data release to DAT-005.
- Cryptography to SEC-006; identity and access management to SEC-005 and SEC-001.

## Conventions and sources

- Layout and Extension Point block: `docs/_template.md`. Writing rules: `GovTech_Project_Instructions.md` and `CLAUDE.md` (no em dashes, banned phrases and vocabulary, `shall`/`should`/`may`, no invented names).
- Source standard: `references/Infomation-Classification-Policy_Ver-1.3.pdf` (ICTA).
- Front matter: Version 1.0, Status DRAFT, Pillar Data, Parent GOV-001, Aligned With Sri Lanka's Digital Economy Blueprint.

## Out of scope

Retention and disposal procedures, PDPA compliance detail, NDX exchange mechanics, master-data management, open-data publishing, and cryptographic specifics. These belong to the sibling documents named above.
