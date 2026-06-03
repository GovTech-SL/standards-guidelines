# GOV-001: GovTech Master Governance Policy

**Document ID:** GOV-001  
**Version:** 1.0  
**Status:** DRAFT (For Internal Review)  
**Classification:** OFFICIAL  
**Pillar:** Apex  
**Issued By:** GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division  
**Date:** May 2026  
**Aligned With:** Sri Lanka's Digital Economy Blueprint  

---

## 1. Purpose

This document is the **apex governance instrument** of GovTech Sri Lanka (Pvt) Ltd. It establishes the authority, mandate, principles, and document framework under which all GovTech standards, guidelines, and approval processes operate.

All other GovTech policy documents across every pillar are children of this Master Governance Policy. In any case of conflict between a child document and this master, this document prevails.

---

## 2. GovTech's Mandate

GovTech Sri Lanka (Pvt) Ltd. is the Government of Sri Lanka's lead implementation agency for national digital transformation, established to:

- Define, publish, and enforce software standards and guidelines across all government digital systems.
- Approve all third-party vendor implementations from initial proposal through to production deployment.
- Conduct equivalent reviews and approvals for all GovTech internal implementations against the same standards.
- Operate the national shared digital platforms (SL-UDI, GovPay, NDX, and related building blocks).
- Drive Sri Lanka's **Digital Economy Blueprint**, ensuring every policy decision, standard, and approval accelerates the nation's digital transformation.

GovTech's governance scope covers every government ministry, department, statutory body, state-owned enterprise, and third-party vendor that builds, operates, or integrates with any government digital system.

---

## 3. Governance Philosophy

The following principles govern how GovTech exercises its mandate. They apply to every document, review, approval, and recommendation produced under this framework.

### 3.1 World-Best Standards as the Baseline, with Controlled Extension Points

GovTech recommends internationally recognised best practices (ISO, NIST, OWASP, WCAG, and equivalents) as the default in every domain. These are not arbitrary choices. They represent the collective knowledge of the global standards community and provide a defensible, auditable baseline.

Every standard or recommendation in a GovTech document includes a defined **Extension Point**, a formal mechanism by which a party may substitute GovTech's default recommendation with an alternative. The substitution is permitted only where all of the following hold:

- The alternative is itself grounded in a recognised international standard or industry best practice.
- The party fully documents the deviation: rationale, chosen alternative, and how it meets the intent of the original requirement.
- **Prior written approval is obtained from GovTech before implementation begins.** Retroactive approvals shall not be accepted under any circumstance.
- The approved deviation is recorded in GovTech's central Deviation Register.

Extension Points are not loopholes. They are a structured mechanism to accommodate legitimate contextual variation while keeping GovTech informed and in control.

### 3.2 Delegated Responsibility: Parties Own Their Compliance

GovTech sets the framework, defines the standards, and enforces accountability. GovTech shall not prescribe every implementation detail, and shall not produce implementation guides for every technology, vendor context, or use case.

> **Design Intent.** This lean governance model exists for two reasons. First, producing exhaustive case-by-case guides would impose an unsustainable workload on GovTech. Second, and more critically, it would create dependency delays that directly impact vendor and agency delivery timelines. Accountability belongs with the implementing party.

Parties operating under GovTech governance are fully and solely responsible for:

- Selecting and adopting applicable international best practices within their implementation domain.
- Producing and maintaining documentation that demonstrates compliance with this framework.
- Implementing the standards they have committed to. GovTech approval of a plan does not transfer implementation responsibility to GovTech.
- Bearing all consequences of their choices, including any failures arising from deviations they have taken.

### 3.3 Upfront Agreements, Always

All decisions that require GovTech sign-off shall be agreed **before** implementation begins. This applies to architecture choices, technology selections, standard deviations, and sub-document submissions. Approval gates are positioned at the design stage, not at deployment.

Post-hoc approvals are not a feature of this framework and shall not be granted.

### 3.4 Software Stack, SDLC, Libraries, and Licensing: Party Responsibility

GovTech does not prescribe specific development tools, programming languages, frameworks, or commercial software products unless a specific interoperability or security requirement makes prescription necessary.

Parties are fully responsible for:

- Selecting and managing their software toolchain, SDLC methodology, dependency libraries, and third-party components.
- Maintaining a current **Software Bill of Materials (SBOM)** covering all libraries, frameworks, and licensed components.
- Demonstrating software licensing compliance. GovTech approval confers no licensing rights or indemnification.
- Verifying that selections do not introduce proprietary lock-in, unpatched vulnerabilities (CVEs), or licence obligations that conflict with government open-source policies.
- Bearing all commercial software licensing costs.

### 3.5 Master Document Architecture: Hierarchical and Extensible

GovTech documents are structured as **master documents**. A master document:

- Defines the authoritative, binding requirements for its domain.
- May reference **sub-documents** (supplementary annexes, implementation guides, templates, checklists, or vendor-specific schedules) that extend or operationalise the master without overriding it.
- Takes precedence over all sub-documents in the event of any conflict.

Parties may propose and attach their own sub-documents (implementation plans, architecture artefacts, compliance evidence) to a master document as part of the approval process. These become binding upon GovTech sign-off.

### 3.6 Document Format: Markdown

All GovTech documents are authored in **Markdown (.md)**. Markdown is the authoritative source of truth. DOCX and PDF outputs are generated from Markdown for formal publication and distribution. The Markdown source remains the master.

### 3.7 Version Control: Git

All GovTech documents are managed in **Git**. The Git commit history is the authoritative audit trail. It supersedes any manual version table. Substantive changes shall go through a pull request reviewed and approved by the Standards and Policy Division before merging. Document versions correspond to Git tags (e.g. `v1.0`, `v1.1`).

---

## 4. Document Framework: Full Hierarchy

The following hierarchy defines the complete GovTech Standards and Guidelines framework. All documents report to this Master Governance Policy (GOV-001).

> Sub-documents may be attached to any document at any level. They are listed under their parent where they exist.

---

### Pillar 1: Policy and Legal Framework

Establishes the legal, regulatory, and policy foundations that all other pillars operate within.

| Doc ID | Title | Status |
|---|---|---|
| **POL-001** | Software Governance Policy | Planned |
| **POL-002** | Data Sovereignty and Personal Data Protection Act Compliance | Planned |
| **POL-003** | Open Standards and Vendor Neutrality Policy | Planned |
| **POL-004** | Government Procurement Rules for Software | Planned |
| **POL-005** | Intellectual Property and Licensing Policy | Planned |

---

### Pillar 2: Vendor Approval Process

Defines the end-to-end process by which third-party vendors are evaluated, approved, and held accountable.

| Doc ID | Title | Status |
|---|---|---|
| **VAP-001** | Vendor Registration and Eligibility Criteria | Planned |
| **VAP-002** | RFP Evaluation Framework | Planned |
| **VAP-003** | Technical Due Diligence Checklist | Planned |
| **VAP-004** | Proof of Concept (PoC) Guidelines | Planned |
| **VAP-005** | Approval and Sign-off Workflow | Planned |
| **VAP-006** | Vendor Performance and SLA Standards | Planned |

---

### Pillar 3: Security and Compliance

Establishes the security baseline, compliance requirements, and incident response framework for all government digital systems.

| Doc ID | Title | Status |
|---|---|---|
| **SEC-001** | Information Security Policy (ISO 27001) | Planned |
| **SEC-002** | Application Security Standard (OWASP ASVS) | Planned |
| **SEC-003** | Penetration Testing Requirements | Planned |
| **SEC-004** | Incident Response and Breach Notification | Planned |
| **SEC-005** | Identity and Access Management (SL-UDI Integration) | Planned |
| **SEC-006** | Cryptography and Key Management Standard | Planned |

---

### Pillar 4: Architecture Standards

Defines the enterprise architecture reference model and all binding architectural standards for government digital systems.

| Doc ID | Title | Status |
|---|---|---|
| **ARC-001** | Enterprise Architecture Reference Model | Draft |
| **ARC-002** | API Design and Integration Standard | Planned |
| **ARC-003** | Cloud and Hosting Policy | Planned |
| **ARC-004** | Microservices and Platform Design Guidelines | Planned |
| **ARC-005** | NDX and GovPay Integration Standards | Planned |
| **ARC-006** | Disaster Recovery and Business Continuity | Planned |

---

### Pillar 5: Data Management

Governs how data is classified, handled, exchanged, retained, and published across all government systems.

| Doc ID | Title | Status |
|---|---|---|
| **DAT-001** | Data Classification and Handling Policy | Draft |
| **DAT-002** | Master Data Management Standard | Planned |
| **DAT-003** | Data Interoperability and Exchange (NDX) | Planned |
| **DAT-004** | Data Retention and Disposal Policy | Planned |
| **DAT-005** | Open Data and Transparency Guidelines | Planned |

---

### Pillar 6: Development Standards

Establishes standards for software development lifecycle, code quality, testing, security, and release management.

| Doc ID | Title | Status |
|---|---|---|
| **DEV-001** | Software Development Lifecycle (SDLC) Policy | Planned |
| **DEV-002** | Coding Standards and Code Review Guidelines | Planned |
| **DEV-003** | Testing and QA Requirements | Planned |
| **DEV-004** | DevSecOps and CI/CD Pipeline Standards | Planned |
| **DEV-005** | Open Source Usage Policy | Planned |
| **DEV-006** | Release and Deployment Management | Planned |

---

### Pillar 7: Digital Inclusion

Requires all government digital services to be accessible, multilingual, and usable by every Sri Lankan citizen.

| Doc ID | Title | Status |
|---|---|---|
| **INC-001** | Accessibility Standard (WCAG 2.1 AA) | Planned |
| **INC-002** | Multilingual Requirements (Sinhala, Tamil, English) | Planned |
| **INC-003** | Mobile-First and Low-Bandwidth Design Guidelines | Planned |
| **INC-004** | Digital Literacy and User Onboarding Standards | Planned |

---

### Pillar 8: Digital Economy Blueprint Alignment

Tracks and enforces alignment of all government digital initiatives with the Digital Economy Blueprint milestones.

| Doc ID | Title | Status |
|---|---|---|
| **BLU-001** | Digital Transformation Readiness Assessment | Planned |
| **BLU-002** | Shared Platform and Common Building Blocks Policy | Planned |
| **BLU-003** | Legacy System Sunset and Migration Guidelines | Planned |
| **BLU-004** | Innovation and Emerging Technology Adoption Framework | Planned |
| **BLU-005** | Digital KPI and Maturity Measurement Standard | Planned |

---

## 5. National Platform Building Blocks

The following shared platforms are operated by GovTech and are mandatory integration points for all applicable government digital systems. Each has a dedicated integration standard document.

| Platform | Purpose | Integration Standard |
|---|---|---|
| **SL-UDI** | Sri Lanka Unified Digital Identity: national citizen identity and authentication | SEC-005 |
| **GovPay** | Government Payment Gateway: all citizen-facing government payments | ARC-005 |
| **NDX** | National Data Exchange: all inter-agency data sharing and exchange | ARC-005, DAT-003 |

Any system architecture that bypasses or replicates any of these building blocks shall obtain explicit written approval from the GovTech Chief Architect before design begins.

---

## 6. Compliance and Enforcement

### 6.1 Compliance Obligation

All government ministries, departments, statutory bodies, and third-party vendors building or operating government digital systems are bound by this Master Governance Policy and all child documents applicable to their system.

### 6.2 System Impact Classification

Every government digital system shall be assigned a System Impact Level. The Impact Level reflects the consequence of a breach of the system's confidentiality, integrity, or availability. GovTech adopts the national four-level impact model set out below.

| Impact Level | Designation | Consequence of compromise |
|---|---|---|
| **1** | Low (negligible) | Affects a single line of business or a specific service. |
| **2** | Medium (moderate) | Affects several areas of activity of the organisation. |
| **3** | High (severe) | Significantly affects services essential to the population, or the rights and privacy of individuals. |
| **4** | Very High (very serious) | Prevents delivery of one or more essential services, or endangers the rights, health, or life of individuals. |

A system's Impact Level is the highest level it reaches on any of the three criteria: confidentiality, integrity, or availability. A system that is citizen-facing, or that exchanges data across agencies, shall be classified at Impact Level 3 or above unless GovTech approves a lower level in writing. The confidentiality dimension follows the data-classification model defined in DAT-001.

### 6.3 Enforcement Levels

Every requirement in a GovTech document carries an Enforcement Level that states the obligation and the systems it binds. Authors shall tag each requirement using these terms.

| Enforcement Level | Obligation term | Meaning |
|---|---|---|
| **Mandatory** | shall / shall not | Binding. The applicable Impact Levels are stated with the requirement; where none are stated, the requirement binds all systems. |
| **Recommended** | should | Expected unless a documented reason justifies a different approach. |
| **Optional** | may | Permitted at the party's discretion. |
| **Prohibited** | must not | Absolute prohibition, applied for safety-critical reasons. |

A requirement may bind at a higher Enforcement Level as the system Impact Level rises. A control may be Recommended at Impact Level 1 and 2 and Mandatory at Impact Level 3 and 4. A standard that GovTech has adopted but that is under active international revision shall additionally be marked **[Watch]**. Watch-listed standards are reviewed more often than the annual cycle, so that parties are alerted before a revision takes effect.

### 6.4 Non-Compliance

GovTech may respond to non-compliance with any of the following actions, depending on severity:

- Formal written notice requiring remediation within a defined period.
- Suspension of the GovTech approval or deployment certificate.
- Escalation to the relevant ministry secretary or procurement authority.
- Public reporting in GovTech's annual governance report.

### 6.5 Deviation Register

GovTech maintains a central Deviation Register recording all approved Extension Point deviations across all systems. The register shall be reviewed quarterly by the Architecture Review Board and published annually in summary form.

---

## 7. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| **GovTech Board** | Approves this Master Governance Policy and any amendments. |
| **Director General, GovTech** | Accountable for overall framework governance and enforcement. |
| **GovTech Chief Architect** | Owns the Architecture Standards pillar; chairs the Architecture Review Board; approves major Extension Point deviations. |
| **Standards and Policy Division** | Maintains all documents in this framework; manages the Deviation Register; conducts compliance assessments; reviews and merges pull requests. |
| **Architecture Review Board** | Reviews Gate 1 and Gate 2 submissions; issues compliance findings; reviews the Deviation Register quarterly. |
| **Ministry / Agency CIO** | Accountable for compliance of all systems under their portfolio. |
| **Implementing Party (Vendor or Internal Team)** | Responsible for their own compliance, documentation, implementation, SBOM, and licensing. |

---

## 8. Related Documents

This document is the parent of all documents listed in Section 4. The following external references informed this framework:

- Sri Lanka's Digital Economy Blueprint (Government of Sri Lanka)
- Personal Data Protection Act, Sri Lanka
- TOGAF 10, The Open Group Architecture Framework
- ISO/IEC 27001:2022, Information Security Management
- NIST Cybersecurity Framework 2.0
- OWASP Application Security Verification Standard 4.0

---

*This document is version-controlled in Git. Refer to the commit history for the complete change log.*  
*GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division, Colombo, Sri Lanka.*
