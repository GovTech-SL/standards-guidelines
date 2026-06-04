# POL-001 Software Governance Policy: Design Spec

**Date:** 2026-06-04
**Status:** Design (pre-draft)
**Target document:** `docs/policy-legal/POL-001_Software_Governance_Policy.md` (Pillar 1, child of GOV-001)

## Context

POL-001 is the apex of Pillar 1 (Policy and Legal Framework) and the first document authored in that pillar. GOV-001 Section 4 names it "Software Governance Policy" and lists it ahead of POL-002 to POL-005. It opens the policy spine that every delivery-facing pillar plugs into: vendor approval (Pillar 2), development (Pillar 6), and the security and data pillars all assume a governed software lifecycle exists. No such lifecycle is yet defined anywhere in the framework; GOV-001 Section 4.5 and Section 7 refer loosely to "Gate 1 and Gate 2 submissions" without defining the gate model. POL-001 formalises it.

Intended outcome: a lean, principle-based policy that governs the **life of a government software initiative** as an accountable undertaking, from business justification through approval gates, in-service ownership, and funded sunset, independent of whether the software is built in-house or by a vendor. POL-001 owns the lifecycle gate model and the build/buy/reuse mandate, and delegates all downstream specifics to the relevant pillars.

## Decisions taken (brainstorming)

1. **Spine: software lifecycle governance with named gates (delegated to the author to define the boundary).** POL-001 governs the full life of a software initiative; it does not re-state GOV-001's enforcement model, nor the SDLC mechanics owned by DEV-001, nor vendor sign-off mechanics owned by VAP-005.
2. **Gate model: G0 to G4** formalised here and referenced by other documents. This extends, and does not contradict, GOV-001's existing "Gate 1 / Gate 2" wording (G1 and G2 retain that meaning; G0, G3, G4 are additive).
3. **Build/buy/reuse: a binding decision discipline** with shared-platform reuse first (SL-UDI, GovPay, NDX), then evaluated procurement, then justified build.
4. **Named ownership: every system has a single accountable owner;** no orphan software; sunset is a funded obligation, not an afterthought.
5. **Three mermaid diagrams** embedded in the Markdown source (GitHub renders natively, plain-text diffable): lifecycle state diagram, build/buy/reuse decision tree, gate-authority swimlane. RACI stays a table.
6. No new organisational role titles are invented; roles stay consistent with the GOV-001 role set.

## Scope boundary (the crux)

| Document | Owns | POL-001 does not |
|---|---|---|
| GOV-001 (apex) | Mandate, governance philosophy, enforcement model, Impact Levels, Deviation Register, document hierarchy | Re-state any of this; POL-001 cites it |
| **POL-001 (this)** | The life of a software initiative as a governed undertaking: business justification, the approval gates (G0 to G4), in-service ownership, funded sunset, and the build/buy/reuse decision | (its own scope) |
| VAP-005 | Vendor sign-off mechanics (forms, signatures, countersigning) | POL-001 sets the gates; VAP-005 operationalises vendor sign-off within them |
| DEV-001 (SDLC) | How software is engineered between gates | POL-001 governs the gates around the SDLC, not the SDLC |
| POL-003 / 004 / 005 | Open standards, procurement, IP and licensing | POL-001 references these at the relevant gate |

One-line positioning: GOV-001 says how GovTech governs; POL-001 says how a piece of government software is brought into being, kept accountable, and retired.

## Gate model (Section 4.1)

| Gate | Name | Question answered | Approval authority | Evidence (illustrative) |
|---|---|---|---|---|
| **G0** | Concept and Justification | Should this software exist, and why not reuse or buy? | Agency CIO, endorsed by S&P Division | Business case, build/buy/reuse outcome, Impact Level proposal |
| **G1** | Design and Architecture | Is the design compliant before build begins? | Architecture Review Board | Architecture diagram, standards conformance, Extension Point requests |
| **G2** | Pre-Deployment Assurance | Is it safe and compliant to deploy? | ARB; Chief Architect for Impact Level 3 to 4 | Security assurance (SEC-001), test evidence (DEV-003), SBOM |
| **G3** | In-Service | Is it owned, monitored, and accountable in production? | Named System Owner; reviewed by S&P Division | Named owner, operational ownership record, periodic attestation |
| **G4** | Sunset and Decommission | Is retirement planned, funded, and data handled? | Agency CIO, endorsed by S&P Division | Decommission plan, data disposal per DAT-004, successor mapping |

G1 and G2 preserve GOV-001's existing meaning. Gate approvals are upfront (GOV-001 Section 3.3): each gate is cleared before the next phase begins; retroactive approval is not granted.

## Mermaid diagrams

1. **Lifecycle state diagram** (`stateDiagram-v2`), anchors Section 4.1: G0 to G4 with rejection loop-backs and the decommission terminal state.
2. **Build / buy / reuse decision tree** (`flowchart TD`), anchors Section 4.2: shared-platform reuse check first (SL-UDI / GovPay / NDX), then COTS evaluation, then justified build; bypass of a shared platform routes to Chief Architect approval (GOV-001 Section 5).
3. **Gate-authority swimlane** (`flowchart LR` with subgraphs per role), anchors Section 4.1 or Section 5: which role clears each gate, showing the design-stage approval principle.

## Document structure (follows `docs/_template.md`)

1. **Introduction** (purpose; scope: every government software initiative, build or buy, in-house or vendor; audience; defs specific to POL-001: software initiative, System Owner, gate, build/buy/reuse, orphan software).
2. **Strategic Context** (software governance serves the Blueprint's Trust and Governance enabler and the Policy, Legislation and Institutions enabler; disciplined lifecycle governance is the precondition for every Digital Public Infrastructure deliverable).
3. **Principles** (justify before build; reuse before buy, buy before build; named ownership for every system; no orphan software; upfront gate approval; sunset is a funded obligation; proportionality to Impact Level).
4. **Requirements** (each section recommending a standard or process closes with the canonical Extension Point block per template Section 4.0):
   - 4.1 Software Governance Lifecycle and Gates (G0 to G4; entry criteria, evidence, authority per gate; Diagram 1 and Diagram 3).
   - 4.2 Build, Buy, or Reuse Decision (shared-platform-first mandate; COTS evaluation; build justification; Diagram 2).
   - 4.3 System Ownership and Accountability (single named System Owner; software asset register; no orphan software; ownership transfer on handover).
   - 4.4 In-Service Governance and Sunset (periodic attestation; sunset planning as a funded obligation; data disposal deferral to DAT-004).
5. **Governance and Compliance** (how gates map to GOV-001 Section 6 enforcement and Impact Levels; gate clearance as the compliance evidence trail; non-compliance to GOV-001 Section 6.4).
6. **Roles and Responsibilities** (table: GovTech Board out of scope; Director General; Chief Architect; S&P Division; Architecture Review Board; Agency CIO; System Owner (new accountable named role, not a new org title); Implementing Party).
- **Appendix A Glossary** (document-specific delta only: System Owner, software initiative, gate, orphan software); **Appendix B Related Documents**.

## Boundaries (deferrals)

Vendor registration and eligibility to VAP-001; RFP evaluation to VAP-002; technical due diligence to VAP-003; vendor sign-off mechanics to VAP-005; SDLC and engineering practice to DEV-001 to DEV-006; security assurance to SEC-001; test evidence to DEV-003; data classification to DAT-001 and data disposal to DAT-004; open standards to POL-003; procurement rules to POL-004; IP and licensing to POL-005; PDPA to POL-002; shared-platform integration specifics to ARC-005, DAT-003, SEC-005.

## Conventions and sources

- Layout, Table of Contents, and Extension Point block: `docs/_template.md`. Writing rules: `GovTech_Project_Instructions.md` and `CLAUDE.md` (no em dashes; banned phrases and vocabulary; `shall` / `should` / `may` / `must not`; active voice; no invented org titles; brand as GovTech Sri Lanka; use "Sri Lanka's Digital Economy Blueprint").
- Front matter: Version 1.0, Status DRAFT, Pillar Policy and Legal, Parent GOV-001, Date June 2026, Aligned With Sri Lanka's Digital Economy Blueprint.
- Mermaid: fenced ```mermaid blocks in the Markdown source; no em dashes inside node labels (use commas or restructure); kept minimal so they diff cleanly.

## Out of scope

GOV-001's enforcement model and Impact Level definitions (cited, not restated); SDLC engineering mechanics (DEV-001); vendor evaluation and sign-off mechanics (VAP pillar); procurement, IP, open-standards, and PDPA policy (POL-002 to POL-005); shared-platform technical integration (ARC-005, DAT-003, SEC-005).
