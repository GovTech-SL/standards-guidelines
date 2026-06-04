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

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Strategic Context: Sri Lanka's Digital Economy Blueprint](#2-strategic-context-sri-lankas-digital-economy-blueprint)
3. [Principles](#3-principles)
4. [Requirements](#4-requirements)
5. [Governance and Compliance](#5-governance-and-compliance)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Related Documents](#appendix-b-related-documents)

---

## 1. Introduction

### 1.1 Purpose

This document establishes the Information Security Management System (ISMS) and the security baseline for all GovTech-governed digital systems. It is the apex document of the Security and Compliance pillar; the SEC sibling standards and requirements from other pillars operationalise the requirements set out here. All implementing parties shall comply with this policy as a condition of operating GovTech-governed systems.

### 1.2 Scope

This policy applies to all GovTech-owned and GovTech-governed systems, the government data they hold, process, or exchange, and all parties operating such systems. Bound parties include all government ministries, departments, statutory bodies, and vendors.

Systems that are not GovTech-owned and not GovTech-governed are out of scope; however, any third-party system that stores, processes, or exchanges government data comes within scope through contractual obligation to the party responsible for that data.

### 1.3 Intended Audience

- Risk Owners and system owners
- Agency CIOs and CTOs
- Solution architects and system integrators
- Vendors delivering systems under GovTech governance
- The GovTech security function and Standards and Policy Division reviewers

### 1.4 Definitions and Acronyms

The following terms are specific to this document. Shared terms (Impact Level, Enforcement Level, Extension Point, Deviation Register, SL-UDI, GovPay, NDX) are defined in GOV-001 and shall not be redefined here.

| Term | Definition |
|---|---|
| ISMS | Information Security Management System: a set of policies, processes, and controls that collectively manage information security risk on a continual-improvement basis, as defined by ISO/IEC 27001:2022. |
| Security Control | A measure, technical or procedural, that protects the confidentiality, integrity, or availability of an information asset. |
| Risk Owner | The named individual accountable for accepting or treating the residual security risk associated with a specific system or information asset. |
| Residual Risk | The level of security risk that remains after security controls have been applied and the risk treatment plan executed. |
| Statement of Applicability | A documented record, produced as part of an ISMS, stating which ISO/IEC 27001:2022 controls apply to the system in scope, which do not, and the justification for each determination. |

---

## 2. Strategic Context: Sri Lanka's Digital Economy Blueprint

Sri Lanka's Digital Economy Blueprint identifies Trust and Governance as a cross-cutting enabler at every layer of the national digital architecture. Information security is the operational foundation of that enabler. Without it, the Digital Public Infrastructure services that GovTech operates, including SL-UDI, GovPay, and NDX, cannot be trusted by citizens, agencies, or partner organisations. A compromise of any of these services carries consequences that extend beyond a single agency and directly undermines the Blueprint's goals.

Security controls under this policy scale with the System Impact Level defined in GOV-001 Section 6.2. A system that processes Secret-classified data or enables essential national services operates at a higher Impact Level and attracts correspondingly more demanding controls. This proportionality is deliberate: it concentrates the most stringent requirements on systems whose compromise would cause the most serious harm, while applying lighter-touch obligations to lower-risk systems to avoid unnecessary delivery friction.

---

## 3. Principles

The following principles are binding on all parties subject to this policy.

1. Protect the confidentiality, integrity, and availability of government information across its full lifecycle.
2. Build security into systems from design; do not add it after deployment.
3. Base controls on assessed risk and the System Impact Level assigned under GOV-001 Section 6.2.
4. Apply defence in depth: no single control is sufficient; layers of complementary controls are required.
5. Grant access on a least-privilege, need-to-know basis; revoke access promptly when it is no longer required.
6. Monitor continuously and assume that compromise will be attempted against any system connected to government networks.
7. Hold a named Risk Owner accountable for each system's security posture and for accepting or escalating residual risk.

---

## 4. Requirements

### 4.1 Information Security Management System

Every implementing party shall operate an ISMS aligned to ISO/IEC 27001:2022 for the systems it runs under GovTech governance. The ISMS shall:

- Define and document its scope, identifying the systems, data, and organisational units it covers.
- Maintain a Statement of Applicability recording which ISO/IEC 27001:2022 Annex A controls apply, which do not, and the justification for each determination.
- Follow a documented continual-improvement cycle covering risk assessment, control implementation, performance evaluation, and management review.

NIST Cybersecurity Framework 2.0 frames the risk-management lifecycle across this policy. The six NIST CSF 2.0 functions, Govern, Identify, Protect, Detect, Respond, and Recover, provide the structural lens through which implementing parties shall organise their security programme.

---

> **Extension Point: 4.1 Information Security Management System**
>
> **Default Recommendation.** ISO/IEC 27001:2022 as the ISMS standard, with NIST Cybersecurity Framework 2.0 framing the risk-management lifecycle.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** The ISMS scope statement and Statement of Applicability demonstrating coverage of the systems in scope; a mapping showing how the proposed alternative achieves outcomes equivalent to ISO/IEC 27001:2022 and NIST CSF 2.0.
>
> **Review Frequency.** Annual, aligned with the ISMS management review cycle.

---

### 4.2 Risk Management

Each system shall undergo a documented security risk assessment before its design-stage approval (Gate 1, as defined in ARC-001 Section 7.1). The party shall produce a risk treatment plan setting out the controls selected to address identified risks.

Residual risk shall be accepted in writing by the Risk Owner before the system proceeds past Gate 1. The authority to accept residual risk scales with the System Impact Level:

- **Impact Level 1 to 2:** The agency Risk Owner accepts residual risk.
- **Impact Level 3 to 4:** The agency accounting officer accepts residual risk, and the GovTech security function shall be notified at the point of acceptance.

Risk assessments shall be reviewed on a defined cycle agreed at Gate 1, and immediately on any material change to the system's architecture, data holdings, or operational environment. Material change includes a change in the system's Impact Level classification.

---

> **Extension Point: 4.2 Risk Management**
>
> **Default Recommendation.** A risk-management method aligned to NIST Cybersecurity Framework 2.0 (Govern and Identify functions) and ISO/IEC 27005 (information security risk management).
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** The completed risk assessment, the risk treatment plan, and the signed residual-risk acceptance at the appropriate authority level; a mapping showing how the proposed alternative method produces outputs equivalent to those required by NIST CSF 2.0 and ISO/IEC 27005.
>
> **Review Frequency.** Annual, or on material change to the system, whichever occurs first.

---

### 4.3 Security Controls by Theme

This section states policy-level baseline controls across the four ISO/IEC 27001:2022 control themes. Baselines are scoped by System Impact Level. Deep technical specifications are delegated to the documents named in each subsection.

#### 4.3.1 Organizational Controls

Every implementing party shall:

- Maintain documented security policies covering the systems in scope and review them at least annually.
- Hold a current information asset register identifying all information assets, their owners, and their Data Class per DAT-001.
- Assign named security responsibilities for each system, identifying the Risk Owner and the Custodian.
- Manage supplier and third-party security risk through contractual security clauses, periodic access review, and documented right-to-audit provisions. At Impact Level 3 and above, this review shall be conducted at least annually and evidence shall be available to GovTech on request.
- Apply formal change management to all security-relevant changes, requiring security impact assessment before implementation.

Procurement requirements, including mandatory contractual security clauses for government suppliers, are defined in POL-004.

#### 4.3.2 People Controls

Every implementing party shall:

- Screen personnel before granting access to systems, proportionate to the Impact Level of the data they will access. At Impact Level 3 and above, pre-employment checks shall include identity verification, reference checks, and criminal background review.
- Deliver security awareness training at onboarding and at least annually thereafter.
- Operate a documented joiners, movers, and leavers process that provisions access at onboarding and revokes it no later than the end of the day on which a person's assignment ends.
- Bind all staff and contractors to confidentiality obligations as a condition of access.

#### 4.3.3 Physical Controls

Every implementing party shall:

- Restrict physical access to facilities and equipment holding government data to authorised personnel, using controls proportionate to the Impact Level of the data held.
- Protect storage media and equipment through the full asset lifecycle, including at disposal.
- Enforce clear-desk and clear-screen practices at all facilities where government data is processed.

Hosting and data-centre physical security controls, including government cloud security requirements, are defined in ARC-003.

#### 4.3.4 Technological Controls

Every implementing party shall:

- Maintain centralised, tamper-evident logging of security-relevant events for all systems and integrate those logs with the GovTech National Operations Centre (NOC). At Impact Level 3 and above, log retention shall be at least twelve months.
- Run a documented vulnerability management programme, identifying, assessing, and remediating known vulnerabilities. Patch timelines tighten as the Impact Level rises: critical-severity patches shall be applied within thirty days at Impact Level 1 to 2, within fourteen days at Impact Level 3, and within seven days at Impact Level 4.
- Enforce documented secure configuration baselines for all operating systems, container images, and middleware components, aligned to a recognised benchmarking standard.

The following controls are delegated to the named documents:

- Access and identity management, including SL-UDI integration: SEC-005
- Cryptography and key management: SEC-006
- Application security: SEC-002
- Backup and resilience: ARC-006

---

> **Extension Point: 4.3 Security Controls by Theme**
>
> **Default Recommendation.** The ISO/IEC 27001:2022 Annex A controls across the four themes (Organizational, People, Physical, Technological), applied at the baselines stated in Sections 4.3.1 to 4.3.4 and scoped by System Impact Level.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** The Statement of Applicability mapping each applicable ISO/IEC 27001:2022 Annex A control to its implementation status and the compensating or alternative control where the default is not applied; evidence that all baselines stated in Sections 4.3.1 to 4.3.4 are met or equivalently addressed.
>
> **Review Frequency.** Annual, or on any material change to the system's architecture, data holdings, or operational environment.

---

### 4.4 Security Assurance and Certification

The assurance requirement for a system scales with its System Impact Level, as set out in the table below.

| System Impact Level | Assurance Requirement |
|---|---|
| 1 to 2 | ISMS aligned to ISO/IEC 27001:2022; self-attestation reviewed by the GovTech security function |
| 3 to 4 | Independent ISO/IEC 27001 certification, or an accepted equivalent such as SOC 2 Type II accompanied by a documented gap assessment against ISO/IEC 27001:2022 |

Self-attestation at Impact Level 1 to 2 shall be submitted to the GovTech security function at Gate 2 (ARC-001 Section 7.1) and renewed annually thereafter. The GovTech security function may request additional evidence at any time.

At Impact Level 3 and above, the certification scope shall cover the systems subject to this policy and shall be current at the time of the Gate 2 submission. A certification obtained under a predecessor edition of ISO/IEC 27001 shall not be accepted in lieu of ISO/IEC 27001:2022 certification unless the gap assessment demonstrates equivalence and the GovTech security function approves the equivalence finding in writing.

Penetration testing requirements are governed by SEC-003. Incident response and breach notification obligations are governed by SEC-004. Data classification requirements are governed by DAT-001. These apply in addition to the assurance requirement in this section.

---

> **Extension Point: 4.4 Security Assurance and Certification**
>
> **Default Recommendation.** Independent ISO/IEC 27001:2022 certification at System Impact Level 3 and above; self-attestation reviewed by the GovTech security function at Impact Level 1 to 2.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** For Impact Level 3 to 4: the current ISO/IEC 27001:2022 certificate with its scope statement, or the accepted equivalent attestation (e.g. SOC 2 Type II report) together with the documented gap assessment and GovTech's written equivalence finding. For Impact Level 1 to 2: the reviewed self-attestation record held by the GovTech security function.
>
> **Review Frequency.** On the certificate's renewal cycle for certified parties; annual for self-attesting parties.

---

## 5. Governance and Compliance

The GovTech security function owns this policy and is responsible for maintaining it, reviewing assurance submissions, and monitoring the security posture of GovTech-governed systems. The Standards and Policy Division manages the Deviation Register for approved Extension Point deviations under this document.

Compliance with this policy is a condition of the ARC-001 architecture approval gates. A party that cannot demonstrate an ISMS aligned to ISO/IEC 27001:2022 and a completed security risk assessment shall not pass Gate 1. A party that cannot submit the required assurance evidence shall not pass Gate 2.

Security posture is monitored continuously through the GovTech NOC integration required by Section 4.3.4. The GovTech security function may conduct assurance reviews, request evidence, or commission independent assessments at any time during the operational life of a system.

Non-compliance with this policy is handled under the enforcement mechanism defined in GOV-001 Section 6, including the escalation actions in Section 6.4. This policy does not create separate enforcement procedures; it defines the security obligations against which GOV-001 Section 6 determinations are made.

---

## 6. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| **GovTech Security Function** | Owns and maintains this policy; reviews assurance submissions at Gate 2 and annually; monitors security posture through the NOC; advises parties on security queries; escalates non-compliance to the Standards and Policy Division. |
| **GovTech Standards and Policy Division** | Maintains the Deviation Register for this policy; approves Extension Point deviations; conducts compliance assessments; reviews and merges policy amendments. |
| **Risk Owner** | Accepts residual risk in writing before Gate 1; is accountable for the security posture of the system; reviews and re-accepts residual risk on the defined cycle and on material change. |
| **Custodian** | Operates the security controls required by this policy; implements the ISMS on behalf of the implementing party; maintains evidence of control operation. |
| **Implementing Party** | Runs the ISMS; conducts and documents security risk assessments; submits assurance evidence at the approval gates; notifies the GovTech security function of any material security incident or architecture change. |
| **Agency CIO** | Accountable for the security compliance of all systems under their portfolio; signs the annual portfolio compliance declaration. |

---

## Appendix A: Glossary

The following terms are specific to this document. Shared terms used across the GovTech framework (Impact Level, Enforcement Level, Extension Point, Deviation Register, SL-UDI, GovPay, NDX) are defined in GOV-001 and shall be referenced from that document.

| Term | Definition |
|---|---|
| ISMS | Information Security Management System: a set of policies, processes, and controls that collectively manage information security risk on a continual-improvement basis, as defined by ISO/IEC 27001:2022. |
| Security Control | A measure, technical or procedural, that protects the confidentiality, integrity, or availability of an information asset. Controls are selected from the ISO/IEC 27001:2022 Annex A control set or an approved alternative. |
| Risk Owner | The named individual accountable for accepting or treating the residual security risk associated with a specific system or information asset. The Risk Owner's sign-off authority scales with the System Impact Level per Section 4.2. |
| Residual Risk | The level of security risk that remains after the risk treatment plan has been implemented and all applicable security controls are in place. |
| Statement of Applicability | A documented record, produced as part of an ISMS, stating which ISO/IEC 27001:2022 Annex A controls apply to the system in scope, which do not, and the justification for each determination. It is a mandatory ISMS artefact. |

---

## Appendix B: Related Documents

| Doc ID | Title | Status | Relationship |
|---|---|---|---|
| [GOV-001](../Master_Governance_Policy.md) | GovTech Master Governance Policy | Draft | Parent document; Section 6.2 defines Impact Levels; Section 6.3 defines Enforcement Levels; Section 6.4 governs non-compliance |
| SEC-002 | Application Security Standard (OWASP ASVS) | Planned | Sibling; defines application security controls delegated from Section 4.3.4 |
| SEC-003 | Penetration Testing Requirements | Planned | Sibling; governs penetration testing referenced in Section 4.4 |
| SEC-004 | Incident Response and Breach Notification | Planned | Sibling; governs incident response and breach notification referenced in Section 4.4 |
| SEC-005 | Identity and Access Management (SL-UDI Integration) | Planned | Sibling; defines access and identity controls delegated from Section 4.3.4 |
| SEC-006 | Cryptography and Key Management Standard | Planned | Sibling; defines cryptographic controls delegated from Section 4.3.4 |
| [DAT-001](../data/DAT-001_Data_Classification_Handling_Policy.md) | Data Classification and Handling Policy | Draft | Sibling; governs data classification referenced in Sections 4.3.1 and 4.4; Section 4.3.1 of DAT-001 defers the access-control baseline to this document |
| [ARC-001](../architecture/ARC-001_Enterprise_Architecture_Reference_Model.md) | Enterprise Architecture Reference Model | Draft | Consumer; adopts ISO/IEC 27001:2022 and NIST CSF 2.0 (Section 6); defines Gate 1 and Gate 2 approval gates (Section 7.1) referenced in Sections 4.2 and 4.4 |
| ARC-003 | Cloud and Hosting Policy | Planned | Sibling; defines hosting and data-centre physical security controls delegated from Section 4.3.3 |
| ARC-006 | Disaster Recovery and Business Continuity | Planned | Sibling; defines backup and resilience controls delegated from Section 4.3.4 |
| POL-002 | Data Sovereignty and PDPA Compliance | Planned | Sibling; governs personal data protection obligations that apply in addition to this policy |
| POL-004 | Government Procurement Rules for Software | Planned | Sibling; defines procurement security clauses referenced in Section 4.3.1 |

---

*This document is version-controlled in Git. Refer to the commit history for the complete change log.*  
*GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division, Colombo, Sri Lanka.*
