# SEC-001 Information Security Policy: Design Spec

**Date:** 2026-06-03
**Status:** Design (pre-draft)
**Target document:** `docs/security/SEC-001_Information_Security_Policy.md` (Pillar 3, child of GOV-001)

## Context

SEC-001 is the apex of the Security and Compliance pillar. GOV-001 Section 4 names it "Information Security Policy (ISO 27001)"; ARC-001 Section 6 makes ISO/IEC 27001:2022 and NIST CSF 2.0 mandatory adopted frameworks; and DAT-001 Section 4.3.1 defers the access-control baseline to SEC-001 (and SEC-005). SEC-001 establishes the Information Security Management System (ISMS) and the security baseline that the five SEC siblings and other pillars build on.

Intended outcome: a lean, principle-based umbrella security policy that establishes the ISMS, states policy-level baseline controls across the ISO/IEC 27001:2022 control themes scoped by System Impact Level, sets a tiered assurance regime, and delegates deep specifics to the SEC siblings and other pillars.

## Decisions taken (brainstorming)

1. **Scope: ISMS umbrella with theme-based baselines and delegation (approach A).**
2. **Structure: ISO/IEC 27001:2022 control themes** for the requirements, with **NIST CSF 2.0** framing the risk-management lifecycle.
3. **Assurance: tiered by Impact Level** (certification mandatory at Impact Level 3 and above; self-attestation with GovTech review at 1 to 2).
4. No new organisational role titles are invented; roles stay consistent with the GOV-001 role set plus a generic GovTech security function.

## Control themes (Section 4.3) and delegation

Each ISO/IEC 27001:2022 theme is a subsection stating policy-level mandatory baselines scoped by Impact Level. Deep specifics are delegated:

| Theme | SEC-001 states (policy baseline) | Delegated specifics |
|---|---|---|
| Organizational | Security governance, security roles, supplier and third-party security, asset and change management | Procurement to POL-004 |
| People | Screening, security awareness and training, joiners/movers/leavers | (none) |
| Physical | Facilities, equipment, and media handling | Hosting and data centres to ARC-003 |
| Technological | Logging and monitoring, vulnerability and patch management, secure configuration | Access and identity to SEC-005; cryptography and keys to SEC-006; application security to SEC-002; backup and resilience to ARC-006 |

## Assurance tiering (Section 4.4)

| System Impact Level | Assurance requirement |
|---|---|
| 1 to 2 | ISMS aligned to ISO/IEC 27001:2022; self-attestation reviewed by GovTech |
| 3 to 4 | Independent ISO/IEC 27001 certification, or an accepted equivalent such as SOC 2 Type II with a gap assessment |

Penetration testing is governed by SEC-003; incident response and breach notification by SEC-004; data classification by DAT-001.

## Document structure (follows `docs/_template.md`)

1. **Introduction** (purpose; scope: all GovTech-governed systems and the data they hold; audience; defs: ISMS, security control, Risk Owner, residual risk).
2. **Strategic Context** (security underpins the Blueprint's Trust and Governance enabler and every DPI; ties to GOV-001 Section 6.2 Impact Levels).
3. **Principles** (confidentiality, integrity, availability; security by design; risk-based; defence in depth; least privilege; continuous monitoring; accountability).
4. **Requirements** (each closes with the canonical Extension Point block per template Section 4.0):
   - 4.1 Information Security Management System (adopt ISO/IEC 27001:2022; NIST CSF 2.0 risk lifecycle; ISMS scope, Statement of Applicability, continual improvement).
   - 4.2 Risk Management (assessment, treatment, acceptance; Risk Owner; residual-risk sign-off authority scaled by Impact Level).
   - 4.3 Security Controls by Theme (the four themes above).
   - 4.4 Security Assurance and Certification (the tiering above).
5. **Governance and Compliance** (security governance ownership; assurance gates; monitoring; non-compliance to GOV-001 Section 6).
6. **Roles and Responsibilities** (GovTech security function and Standards and Policy Division; Risk Owner; Custodian; implementing party; agency CIO).
- **Appendix A Glossary**; **Appendix B Related Documents**.

## Boundaries (deferrals)

Application security to SEC-002; penetration testing to SEC-003; incident response and breach notification to SEC-004; identity and access management and SL-UDI to SEC-005; cryptography and key management to SEC-006; data classification and handling to DAT-001; hosting and cloud to ARC-003; disaster recovery and business continuity to ARC-006; personal data protection (PDPA) to POL-002; procurement to POL-004.

## Conventions and sources

- Layout and Extension Point block: `docs/_template.md`. Writing rules: `GovTech_Project_Instructions.md` and `CLAUDE.md` (no em dashes; banned phrases and vocabulary; `shall`/`should`/`may`; no invented names; brand as GovTech Sri Lanka; use "Sri Lanka's Digital Economy Blueprint").
- Adopted frameworks: ISO/IEC 27001:2022 (ISMS and Annex A control themes); NIST Cybersecurity Framework 2.0 (risk lifecycle). Both already adopted in ARC-001 Section 6.
- Front matter: Version 1.0, Status DRAFT, Pillar Security and Compliance, Parent GOV-001, Aligned With Sri Lanka's Digital Economy Blueprint.

## Out of scope

Control-level technical specifications owned by the SEC siblings (app security, pen testing, incident response, IAM, cryptography), hosting and DR specifics, PDPA obligations, and procurement rules. These belong to the documents named above.
