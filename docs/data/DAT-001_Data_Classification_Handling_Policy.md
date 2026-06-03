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

This document defines how government information is classified and handled across all GovTech-governed digital systems. It establishes the classification scheme that GOV-001 Section 6.2 uses for the confidentiality dimension of the System Impact Level, and supplies the classification labels that ARC-001 Section 4.2 requires on all data elements. All ministries, departments, statutory bodies, and vendors operating GovTech-governed systems are bound by this policy.

### 1.2 Scope

This policy applies to all government data created, stored, processed, or exchanged in GovTech-owned or GovTech-governed systems, in any medium, whether digital or physical. It binds all ministries, departments, statutory bodies, and vendors that operate such systems.

ICT assets that are not information assets (software, hardware, and physical infrastructure) are out of scope for classification. They do, however, inherit handling obligations from the data they store, process, or transmit.

### 1.3 Intended Audience

- Information Owners and Custodians
- Agency CIOs and CTOs
- Solution architects and system integrators
- Vendors delivering systems under GovTech governance
- GovTech Standards and Policy Division reviewers

### 1.4 Definitions and Acronyms

The following terms are specific to this document. Shared terms (SL-UDI, GovPay, NDX, Extension Point, Deviation Register, Impact Level, Enforcement Level) are defined in GOV-001 and shall not be redefined here.

| Term | Definition |
|---|---|
| Information Asset | An identifiable collection of data, stored in any manner, recognised as having value for enabling a government agency to perform its business functions. |
| Information Owner | The government official or organisational unit accountable for an information asset: its classification, authorised use, and periodic review. |
| Custodian | The party responsible for implementing and maintaining the technical and procedural controls that protect an information asset, acting on the rules set by the Information Owner. |
| Declassification | The formal act of reducing or removing the security classification of an information asset, carried out by the originating organisation per the process in Section 4.4. |
| Data Class | One of the five security classification levels defined in Section 4.1 (Unclassified, Public, Limited Sharing, Confidential, Secret), each carrying defined handling obligations. |

---

## 2. Strategic Context: Sri Lanka's Digital Economy Blueprint

Sri Lanka's Digital Economy Blueprint identifies Trust and Governance as a cross-cutting enabler at every layer of the national digital architecture. Sound information classification is the foundational control for that enabler: it establishes the boundary conditions for data sharing, protects citizen rights, and maintains public confidence in government digital services. Classification is also the precondition for consent-driven exchange over the National (Federated) Data Exchange (NDX); an agency cannot share data responsibly through NDX without first knowing what it holds and how sensitive it is.

This policy operationalises GOV-001 Section 6.2 by supplying the classification scheme that determines the confidentiality dimension of the System Impact Level. A system that processes Secret data carries a confidentiality Impact Level of 4 (Very High); a system processing only Public data carries a confidentiality Impact Level of 1 (Low). That linkage connects individual data classification decisions directly to the system-level risk model that governs architecture reviews, procurement approvals, and enforcement across every GovTech pillar.

---

## 3. Principles

The following principles are binding on all parties subject to this policy.

1. Classify every information asset by its sensitivity and value, at the earliest opportunity and across all media.
2. Treat unclassified information as Limited Sharing until a formal classification is assigned by the Information Owner.
3. Maintain the assigned classification across the full information lifecycle, from creation through exchange, archiving, and disposal.
4. Hold the Information Owner accountable for all classification decisions and for the annual review of those decisions.
5. Grant access on a need-to-know, least-privilege basis, commensurate with the assigned class.
6. Apply controls proportionate to the assigned class, neither under-protecting sensitive data nor imposing unnecessary restrictions on Public information.

---

## 4. Requirements

### 4.1 Classification Scheme

#### 4.1.1 Five Security Classification Levels

GovTech Sri Lanka establishes a five-level information classification scheme as the national standard for government information. The five levels, their identifying colours, definitions, and representative examples are set out below.

| Data Class | Colour | Definition | Examples |
|---|---|---|---|
| **Unclassified** | White | Interim status for information not yet evaluated. All government information not yet assigned a class shall be allocated to this level. Unclassified information shall be treated at least as strictly as Limited Sharing until it is formally assessed. Release to the public requires prior authorisation from the Information Owner. | Any government information pending formal classification review. |
| **Public** | Green | Information freely available to the public, government employees, organisations, regulators, project managers, and contractors, including information deemed public by legislation or routine-disclosure policy. Requires minimal or no confidentiality protection; accuracy and integrity shall be protected prior to release. | Government acts and policies; organisation contact persons; information on public services provided to citizens; weather information; job advertisements. |
| **Limited Sharing** | Amber | Information whose compromise may lead to a minor probability of limited damage to the Government of Sri Lanka, commercial entities, or members of the public. Unauthorised disclosure causes negligible or no damage to national security, Sri Lankan defence forces, or Sri Lanka's foreign relations. | Organisational processes and internal information; personal information of citizens; confidential business information of entities; minutes of meetings and file notes; government evaluations of company products; inventory data. |
| **Confidential** | Red | Information whose compromise may lead to a high probability of damage to national security, internal stability, national infrastructure, defence forces, commercial entities, or members of the public. Confidential assets are subject to disclosure restrictions that may be limited or prohibited. | Personal case files (benefits, programme files, or personnel records); tax returns or financial health of the organisation; personal health information of individuals; trade secrets; salary information. |
| **Secret** | Scarlet | Information whose compromise could cause serious damage to national security, government, nationally important economic and commercial interests, or threaten life. Compromise could raise international tension, seriously damage foreign relations, shut down or substantially disrupt significant national infrastructure, or seriously damage the internal stability of Sri Lanka or other countries. | Details of sex offenders and victims; criminal investigations for major crime; data related to foreign affairs; Cabinet documents; provincial budget prior to public release. |

#### 4.1.2 Class-to-Impact-Level Mapping

The table below is the confidentiality dimension referenced by GOV-001 Section 6.2. A system's confidentiality Impact Level is determined by the highest Data Class of any information asset the system stores, processes, or transmits.

| Data Class | Confidentiality Impact Level |
|---|---|
| Unclassified | Interim; handled as Limited Sharing until assessed |
| Public | 1 (Low) |
| Limited Sharing | 2 (Medium) |
| Confidential | 3 (High) |
| Secret | 4 (Very High) |

> **Extension Point: 4.1 Classification Scheme**
>
> **Default Recommendation.** The five-level GovTech Sri Lanka classification scheme defined in Section 4.1.1 of this document.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** A classification register extract showing how the proposed alternative scheme maps to the five classes defined in Section 4.1.1, with explicit mapping of each alternative level to the corresponding Confidentiality Impact Level in the table above.
>
> **Review Frequency.** Annual, or on publication of a revised edition of the GovTech Sri Lanka classification standard.

---

### 4.2 Classifying Information

#### 4.2.1 Classification Process

The Information Owner (or an authorised delegate) shall classify every information asset at the earliest possible opportunity, and no later than when the originator or Owner becomes aware of the asset's sensitivity. The classification process follows these five steps:

1. **Identify the information asset.** The party creating or receiving the asset shall identify it as a discrete, nameable collection of data and enter it in the agency's information asset register.
2. **Assign an Information Owner and a Custodian.** Each asset shall have a named Owner accountable for classification decisions and a named Custodian responsible for applying controls.
3. **Assess impact across confidentiality, integrity, and availability.** The Owner shall assess the likely impact of compromise for each of the three security criteria, using the four-level impact scale in GOV-001 Section 6.2.
4. **Determine the Data Class.** The assigned class shall be the highest level reached across any of the three impact criteria. Where the asset can be classified by legislation, regulation, policy, or contractual obligation, that classification shall apply.
5. **Apply controls per Section 4.3.** The Custodian shall implement all handling obligations associated with the assigned class before the asset is stored, exchanged, or made accessible to any party.

#### 4.2.2 Externally Generated Assets

When an information asset arrives from outside the originating agency and has not been classified, the officer receiving it shall: assign an Information Owner and Custodian; treat it as Unclassified (and therefore as Limited Sharing) until a formal class is determined; and enter it in the information asset register. Classification shall be completed before the asset is shared further.

#### 4.2.3 Altering a Classification

Only the originating organisation (or its successor on merger or abolition) may alter the security classification of an information asset. A party that considers a classification to be incorrect or inappropriate shall query the originating organisation and shall not alter the classification unilaterally. Where the originating organisation no longer exists and no successor has been identified, the receiving agency shall seek guidance from the GovTech Standards and Policy Division before making any change.

> **Extension Point: 4.2 Classifying Information**
>
> **Default Recommendation.** The five-step classification process defined in Section 4.2.1 of this document.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** The documented information asset register showing Owner and Custodian assignments for all assets in scope; evidence that the alternative process produces a class determination equivalent to the five-step process in Section 4.2.1 for each asset class held.
>
> **Review Frequency.** Annual, aligned with the Information Owner's classification review cycle.

---

### 4.3 Handling Requirements

#### 4.3.1 Obligation-Level Handling Matrix

The table below states the minimum handling obligations for each Data Class. Cryptographic algorithm selection, key lengths, and key management procedures are defined in SEC-006. Identity verification and access-control implementation are defined in SEC-005 and SEC-001.

| Data Class | Labelling | Access | At Rest | In Transit | Sharing |
|---|---|---|---|---|---|
| **Public** | Optional | Open | No confidentiality control required; integrity protected before release | Encrypted channel (TLS) | Unrestricted; Owner approves each release to confirm Public status |
| **Limited Sharing** | Required on all copies | Need-to-know | Encrypted | Encrypted channel (TLS) | Named recipients only; consent required for personal data per POL-002 |
| **Confidential** | Required on all copies | Need-to-know with strong authentication | Encrypted | Encrypted channel with mutual TLS authentication | Explicit written Owner authorisation required per named recipient |
| **Secret** | Required on all copies | Strict named allowlist, reviewed quarterly | Encrypted with hardware-backed key protection | Encrypted channel with mutual TLS authentication | Prohibited unless the Owner authorises in writing per named recipient and occasion |

#### 4.3.2 Personal Data

Personal data shall be classified at a minimum of Limited Sharing. The full obligations arising under the Personal Data Protection Act, including lawful basis for processing, consent management, and data-subject rights, are defined in POL-002 and apply in addition to the handling obligations in the matrix above.

#### 4.3.3 Inter-Agency Data Exchange

When data is shared across agencies, it carries its assigned Data Class into NDX. The receiving agency shall apply controls at least as strict as those required for the data's class. Exchange mechanics, data contracts, and NDX onboarding are governed by DAT-003 and ARC-005; this policy does not alter those requirements.

> **Extension Point: 4.3 Handling Requirements**
>
> **Default Recommendation.** The obligation-level handling matrix in Section 4.3.1, with cryptographic controls per SEC-006 (GovTech Cryptography and Key Management Standard).
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** A control-mapping document showing how the system meets each handling obligation in the matrix for every Data Class the system holds, including the cryptographic mechanism used at rest and in transit, the access-control model, and the labelling implementation.
>
> **Review Frequency.** Annual, or on any material change to the system's architecture, data holdings, or cryptographic dependencies.

---

### 4.4 Declassification and Review

#### 4.4.1 Duration of Classification

The duration for which an information asset retains its classification shall be specified at the time of classification, using one of the following approaches:

- A specific date or event after which the asset is automatically declassified (for example, the public release of a budget document changes its class from Secret to Public on the date of release).
- A fixed period after the last recorded action on the asset (for example, six months after last use).
- Where neither a date, event, nor period is specified, the asset shall be marked for a declassification review at ten years from the date of original classification, consistent with applicable government norms.

Some information assets may be classified for an indefinite duration where the nature of the information so requires. Cabinet documents are not subject to automatic declassification arrangements.

#### 4.4.2 Reclassification

The Information Owner shall review the classification of each asset on the scheduled trigger or at the defined interval. The Owner may reclassify the asset upward or downward, or confirm the existing class. Reclassification shall be recorded in the information asset register with the date, the new class, and the justification.

#### 4.4.3 Retention and Disposal

Retention periods and disposal procedures are governed by DAT-004 and are out of scope for this policy. The Custodian shall apply DAT-004 disposal controls at the end of an asset's retention period, consistent with the asset's class at the time of disposal.

> **Extension Point: 4.4 Declassification and Review**
>
> **Default Recommendation.** Scheduled declassification review as defined in Section 4.4.1 of this document.
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** The declassification schedule or event-based trigger registered with each affected asset in the information asset register, showing the basis for any departure from the default ten-year review period.
>
> **Review Frequency.** Per the declassification schedule or trigger assigned to each individual asset.

---

## 5. Governance and Compliance

Classification and labelling are auditable obligations under this policy. The Information Owner shall conduct a classification review of all assets under their accountability at least annually, updating the information asset register and adjusting controls where the class has changed.

Non-compliance with this policy is handled under the enforcement mechanism defined in GOV-001 Section 6 (System Impact Classification, Enforcement Levels, and non-compliance actions). This policy does not create additional or separate enforcement procedures; it supplies the classification evidence on which GOV-001 Section 6 determinations are made. Parties shall not duplicate the GOV-001 enforcement provisions here.

The GovTech Standards and Policy Division may audit classification records, labelling implementation, and control evidence at any time. Parties shall make their information asset registers and control documentation available to auditors on request and within the timeframe stipulated in the audit notice.

---

## 6. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| **Information Owner** | Classifies information assets at the earliest opportunity; authorises any release or reclassification; conducts the annual classification review; is accountable for the accuracy of the information asset register entries under their remit. |
| **Custodian** | Implements and maintains the technical and procedural controls required by the asset's Data Class; acts on the rules set by the Information Owner; notifies the Owner of any event that may warrant reclassification. |
| **GovTech Standards and Policy Division** | Maintains this policy; audits classification accuracy and control implementation; manages the Deviation Register for approved Extension Point deviations under this document; advises parties on classification queries. |
| **Implementing Party** | Labels all data assets per the assigned class; applies the handling controls in Section 4.3; evidences compliance at GovTech architecture review gates; notifies the Information Owner of any material change that may affect classification. |

---

## Appendix A: Glossary

The following terms are specific to this document. Shared terms used across the GovTech framework (SL-UDI, GovPay, NDX, Extension Point, Deviation Register, Impact Level, Enforcement Level) are defined in GOV-001 and shall be referenced from that document.

| Term | Definition |
|---|---|
| Information Asset | An identifiable collection of data, stored in any manner, recognised as having value for enabling a government agency to perform its business functions. Examples include records, documents, electronic messages, database tables, and metadata about other information assets. |
| Information Owner | The government official or organisational unit accountable for an information asset: its classification, authorised use, and periodic review. The Owner sets the policy governing the asset and may delegate operational responsibility to a Custodian. |
| Custodian | The party responsible for implementing and maintaining the controls that protect an information asset, operating under the rules set by the Information Owner. The Custodian applies controls covering quality, security, integrity, correctness, consistency, privacy, confidentiality, and accessibility. |
| Declassification | The formal act of reducing or removing the security classification assigned to an information asset, carried out by the originating organisation per Section 4.4 of this policy. |
| Data Class | One of the five security classification levels defined in Section 4.1 (Unclassified, Public, Limited Sharing, Confidential, Secret). Each class carries defined handling obligations under Section 4.3. |

---

## Appendix B: Related Documents

| Doc ID | Title | Status | Relationship |
|---|---|---|---|
| [GOV-001](../Master_Governance_Policy.md) | GovTech Master Governance Policy | Draft | Parent document; Section 6.2 references this policy for the confidentiality dimension of the System Impact Level |
| DAT-002 | Master Data Management Standard | Planned | Sibling; governs master data definitions |
| DAT-003 | Data Interoperability and Exchange (NDX) | Planned | Sibling; governs NDX exchange mechanics for inter-agency data sharing |
| DAT-004 | Data Retention and Disposal Policy | Planned | Sibling; governs retention periods and disposal procedures referenced in Section 4.4.3 |
| DAT-005 | Open Data and Transparency Guidelines | Planned | Sibling; governs open-data release requirements for Public-classified data |
| POL-002 | Data Sovereignty and PDPA Compliance | Planned | Sibling; defines PDPA obligations for personal data classified as Limited Sharing and above |
| SEC-001 | Information Security Policy | Planned | Sibling; defines access-control baseline referenced in Section 4.3.1 |
| SEC-005 | Identity and Access Management (SL-UDI) | Planned | Sibling; defines identity verification and access-management controls referenced in Section 4.3.1 |
| SEC-006 | Cryptography and Key Management Standard | Planned | Sibling; defines cryptographic algorithms and key management referenced in Section 4.3.1 |
| [ARC-001](../architecture/ARC-001_Enterprise_Architecture_Reference_Model.md) | Enterprise Architecture Reference Model | Draft | Consumer; Section 4.2 requires classification labels on all data elements |

---

*This document is version-controlled in Git. Refer to the commit history for the complete change log.*  
*GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division, Colombo, Sri Lanka.*
