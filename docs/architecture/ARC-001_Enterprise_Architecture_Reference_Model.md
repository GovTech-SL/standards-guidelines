# ARC-001: Enterprise Architecture Reference Model

**Document ID:** ARC-001  
**Version:** 1.0  
**Status:** DRAFT (For Internal Review)  
**Classification:** OFFICIAL  
**Pillar:** Architecture Standards  
**Parent Document:** [GOV-001: GovTech Master Governance Policy](../Master_Governance_Policy.md)  
**Issued By:** GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division  
**Date:** May 2026  
**Aligned With:** Sri Lanka 2030 Digital Blueprint  

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Strategic Context: Sri Lanka 2030 Digital Blueprint](#2-strategic-context-sri-lanka-2030-digital-blueprint)
3. [Architecture Principles](#3-architecture-principles)
4. [Enterprise Architecture Framework](#4-enterprise-architecture-framework)
5. [Reference Architecture and Shared Building Blocks](#5-reference-architecture-and-shared-building-blocks)
6. [Adopted Standards and Frameworks](#6-adopted-standards-and-frameworks)
7. [Governance and Compliance](#7-governance-and-compliance)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Related Documents](#appendix-b-related-documents)

---

## 1. Introduction

### 1.1 Purpose

This document defines the **Enterprise Architecture Reference Model (EARM)** for GovTech Sri Lanka (Pvt) Ltd. and all government digital systems under its governance mandate. All government software implementations shall conform to this document before deployment, whether developed internally by GovTech or delivered by a third-party vendor.

The EARM establishes a common structural framework, a set of binding principles, and defined Extension Points. Extension Points allow parties to adapt specific standards to their context, subject to prior written GovTech approval.

### 1.2 Scope

This document applies to:

- All GovTech-owned and GovTech-governed software platforms and services
- All third-party vendor implementations submitted for GovTech approval
- All government ministries, departments, and statutory bodies procuring or deploying digital systems
- All shared infrastructure and national digital building blocks (SL-UDI, GovPay, NDX)

Systems that are purely internal administrative tools with no public-facing component or inter-agency integration requirement may qualify for a simplified compliance pathway. Refer to [Section 7.3: Waiver Process](#73-waiver-process).

### 1.3 Intended Audience

- GovTech policy architects and standards reviewers
- Chief Information Officers (CIOs) and Chief Technology Officers (CTOs) of government ministries and agencies
- Third-party software vendors seeking GovTech approval
- System integrators and solution architects engaged on government projects
- Internal GovTech engineering and platform teams

### 1.4 Definitions and Acronyms

| Term | Definition |
|---|---|
| EARM | Enterprise Architecture Reference Model: this document |
| GovTech | GovTech Sri Lanka (Pvt) Ltd., the Government of Sri Lanka's lead implementation agency for national digital transformation |
| SL-UDI | Sri Lanka Unified Digital Identity: the national digital identity infrastructure |
| GovPay | Government Payment Gateway: the national payment processing platform |
| NDX | National Data Exchange: the government data interoperability and exchange platform |
| SBOM | Software Bill of Materials: a complete inventory of all software components, libraries, and licences in a system |
| Extension Point | A formally defined mechanism allowing a party to substitute a GovTech default recommendation, subject to prior written approval |
| Deviation Register | GovTech's central record of all approved Extension Point deviations |
| API | Application Programming Interface |
| SDLC | Software Development Lifecycle |
| TOGAF | The Open Group Architecture Framework |
| 2030 Blueprint | Sri Lanka 2030 Digital Blueprint: the national digital transformation roadmap |
| RTO | Recovery Time Objective: the maximum acceptable time to restore a system after a disruption |
| RPO | Recovery Point Objective: the maximum acceptable data loss measured in time |

---

## 2. Strategic Context: Sri Lanka 2030 Digital Blueprint

### 2.1 Blueprint Pillars

Sri Lanka's 2030 Digital Blueprint is the national roadmap for digital transformation, structured around five strategic pillars:

| Pillar | Strategic Objective |
|---|---|
| **Digital Infrastructure** | Establish resilient, high-availability digital infrastructure capable of supporting national-scale services |
| **Digital Government** | Deliver seamless, citizen-centric government services accessible via unified digital channels |
| **Digital Economy** | Enable a thriving digital economy through interoperable platforms and open data ecosystems |
| **Digital Society** | Ensure inclusive digital participation for all Sri Lankans regardless of geography, language, or ability |
| **Cybersecurity** | Protect national digital assets through sound security frameworks and proven cyber resilience capabilities |

### 2.2 GovTech's Architectural Mandate

GovTech is the primary delivery vehicle for the Digital Government and Digital Infrastructure pillars. The EARM translates the Blueprint's ambitions into actionable, enforceable architectural requirements.

Every architecture decision made under this EARM shall be evaluated against the following questions:

1. Does this architecture accelerate progress towards the 2030 Blueprint milestones?
2. Does it promote reuse of shared national platforms (SL-UDI, GovPay, NDX)?
3. Does it eliminate or reduce citizen interaction friction?
4. Does it maintain or improve national data sovereignty?
5. Does it avoid proprietary lock-in that would constrain future government choices?

### 2.3 Architectural Maturity Targets

| Stage | Target Year | Maturity Description |
|---|---|---|
| **Stage 1** | 2026 | Digitised: core government processes are digital; siloed but functional |
| **Stage 2** | 2027 | Connected: systems are integrated via APIs; shared identity and payment in use |
| **Stage 3** | 2028 | Intelligent: data-driven decision making; predictive services; NDX fully active |
| **Stage 4** | 2030 | Transformed: proactive government; citizen-centric by design; fully interoperable |

---

## 3. Architecture Principles

The following principles are binding on all systems governed by this EARM. They are listed in priority order. Where principles appear to conflict, the higher-ranked principle prevails.

| # | Principle | Rationale | Implication |
|---|---|---|---|
| P1 | **Citizen-Centric by Design** | All systems exist to serve citizens | Services shall be mobile-first, multilingual, and WCAG 2.1 AA accessible as a minimum |
| P2 | **Reuse Before Buy Before Build** | Shared platforms reduce cost and accelerate delivery | Parties shall integrate with SL-UDI, GovPay, and NDX before proposing alternatives |
| P3 | **Data Sovereignty** | Citizen and government data shall remain under Sri Lankan jurisdiction | Data residency in Sri Lanka is mandatory; offshore processing requires explicit ministerial approval |
| P4 | **Open Standards First** | Open standards prevent vendor lock-in | Proprietary protocols require written justification and a documented exit strategy |
| P5 | **Security by Default** | Security is built in from inception, not added after the fact | Security architecture review is mandatory at design phase |
| P6 | **API-First Design** | All services shall expose functionality via well-documented, versioned APIs | No service may be deployed without a published API contract |
| P7 | **Design for Scale and Resilience** | Government systems are critical infrastructure | All production systems shall target 99.9% availability with defined RTO and RPO |
| P8 | **Loosely Coupled, Highly Cohesive** | Hard dependencies between systems increase fragility | Event-driven integration is preferred over synchronous point-to-point coupling |
| P9 | **Auditability and Transparency** | Government actions shall be traceable and accountable | All systems shall implement comprehensive, tamper-evident audit logging |
| P10 | **Privacy by Design** | Personal data protection is a fundamental right, not a compliance exercise | Data minimisation, purpose limitation, and consent management shall be built in from the outset |

> **Extension Point: Architecture Principles**
>
> A party may request an exemption from a specific principle where a compelling technical or operational constraint exists. The request shall document: which principle is affected, the nature of the constraint, compensating measures in place, and a timeline for achieving full compliance. Prior written approval from the GovTech Chief Architect is required. Approved exemptions are recorded in the Deviation Register.

---

## 4. Enterprise Architecture Framework

GovTech adopts a four-domain enterprise architecture framework, adapted from TOGAF 10 and tailored to the Sri Lankan government context. All four domains shall be addressed in every system design submitted for GovTech approval.

### 4.1 Business Architecture

The Business Architecture domain defines the organisational structures, processes, and capabilities that digital systems are built to support.

Parties are responsible for producing and maintaining their own Business Architecture documentation. GovTech does not author business architecture artefacts on behalf of implementing parties. Required artefacts include:

- A map to an identified government service or citizen-facing capability
- Documented business processes being digitised or automated
- Measurable service delivery outcomes and KPIs
- A stakeholder map identifying impacted ministries, agencies, and citizen segments

> **Extension Point: Business Architecture Tooling**
>
> GovTech does not mandate a specific modelling tool or notation for Business Architecture. Parties may use BPMN, ArchiMate, plain flowcharts, or equivalent notation. The chosen approach shall be documented and consistently applied. Prior approval is not required for tooling choice. Output artefacts shall be submitted in an open, readable format: PDF or SVG export alongside the source file.

### 4.2 Data Architecture

The Data Architecture domain governs how data is defined, stored, managed, exchanged, and protected.

Implementing parties are responsible for defining, documenting, and maintaining their Data Architecture. Required artefacts include:

- A formal data model covering all entities created, consumed, or exchanged by the system
- Data classification labels applied to all data elements (refer to [DAT-001: Data Classification and Handling Policy](../data/DAT-001_Data_Classification_Handling_Policy.md))
- A documented data flow diagram showing all data ingress, egress, and storage points
- Defined data retention periods aligned with the National Archives guidelines

> **Extension Point: Data Architecture**
>
> Inter-agency data exchange shall use NDX in all cases. This requirement is not subject to an Extension Point. Parties may request an Extension Point for the internal data model notation or tooling used. Direct point-to-point data sharing between agencies that bypasses NDX will not be approved under any circumstance.

### 4.3 Application Architecture

#### 4.3.1 Architectural Style

Microservices architecture is the GovTech default for new government systems. Implementing parties are responsible for selecting an architectural style appropriate to their system's complexity and scale, subject to the following constraints:

- All services shall be independently deployable
- All functionality shall be exposed through versioned, documented APIs
- Shared database patterns between services are prohibited
- Asynchronous messaging shall be used for event-driven scenarios

> **Extension Point: Architectural Style**
>
> A party may propose a modular monolith or service-oriented architecture (SOA) where microservices would introduce disproportionate operational complexity for the system's scale. The proposal shall include: the chosen architectural style, justification relative to system scale, how API-first and loose coupling requirements are still met, and a roadmap for migration if scale increases. Prior written approval from the GovTech Chief Architect is required.

#### 4.3.2 Integration Patterns

The following integration patterns are approved for use in government systems. Parties are responsible for selecting the appropriate pattern for each use case:

| Pattern | Use Case | Notes |
|---|---|---|
| REST API (HTTPS) | Synchronous request-response | Mandatory for all public-facing service endpoints |
| Event Streaming (via NDX) | Asynchronous, high-volume inter-agency data flows | Preferred for inter-agency data exchange |
| GraphQL | Complex, client-driven queries | Permitted for internal dashboards and analytics interfaces |
| Webhooks | Event notifications to external parties | Shall include signature verification and retry logic |

> **Extension Point: Integration Patterns**
>
> Parties may propose alternative integration patterns (e.g., gRPC for high-performance internal service communication) with documented justification. The proposal shall demonstrate that the alternative meets the API-first principle and does not compromise interoperability with national building blocks.

### 4.4 Technology Architecture

GovTech maintains a **Government Technology Standards List (GTSL)**, updated biannually, listing approved technologies for government systems. Parties are responsible for selecting technologies from the GTSL that best fit their technical requirements.

Parties are fully responsible for their technology stack selection, software licensing, and SBOM maintenance. GovTech approval of an architecture does not constitute endorsement of any specific technology product, nor does it assume any licensing obligation on GovTech's part.

Key technology architecture requirements:

- Cloud hosting shall use GovTech-approved providers with data centres within Sri Lanka (refer to [ARC-003: Cloud and Hosting Policy](ARC-003_Cloud_Hosting_Policy.md))
- Containerisation using Docker is mandatory for all new deployments; orchestration shall use Kubernetes
- All APIs shall be registered with and routed through the GovTech API Gateway
- Infrastructure shall be defined as code (IaC); parties select their own IaC tooling
- All systems shall integrate with the GovTech National Operations Centre (NOC) for centralised logging, monitoring, and alerting

> **Extension Point: Technology Stack**
>
> Parties may request approval to use a technology not on the GTSL where a compelling capability, performance, or commercial case exists. The request shall include: the technology in question, the GTSL gap it addresses, a security assessment, licensing terms, and an exit strategy. Prior written approval from the Standards and Policy Division is required before adoption.

---

## 5. Reference Architecture and Shared Building Blocks

### 5.1 National Digital Platform Architecture

GovTech operates a four-tier national digital platform. All government systems shall be positioned within this architecture:

| Tier | Layer | Key Components |
|---|---|---|
| **Tier 1** | Citizen Experience | GovPortal, GovApp (mobile), eServices Gateway, multilingual interfaces |
| **Tier 2** | Shared Services | SL-UDI (identity), GovPay (payments), GovNotify (notifications), GovSign (e-signature) |
| **Tier 3** | Data and Integration | NDX (data exchange), API Gateway, Event Bus, Master Data Registry |
| **Tier 4** | Infrastructure | GovCloud, Container Platform (Kubernetes), Network Fabric, Security Operations |

### 5.2 Mandatory Building Block Integration

The following building blocks are mandatory. Implementing parties are responsible for integrating with each applicable building block and for producing and maintaining all integration documentation.

#### SL-UDI: Sri Lanka Unified Digital Identity

SL-UDI is the mandatory authentication and identity verification mechanism for all citizen-facing services. Parties shall:

- Implement OpenID Connect (OIDC) for all authentication flows
- Use SL-UDI eKYC APIs for identity verification during onboarding
- Never build or maintain independent citizen identity stores

> **Extension Point: SL-UDI**
>
> Internal staff-facing systems that are not citizen-facing may use an alternative identity provider (e.g., a ministry's existing Active Directory or Azure AD) provided: the alternative meets OIDC standards, MFA is enforced, and a formal integration roadmap to SL-UDI is submitted with a defined completion date. Prior written approval is required before implementation.

#### GovPay: Government Payment Gateway

GovPay is the mandatory payment platform for all government financial transactions involving citizens. Parties shall:

- Integrate exclusively with GovPay for citizen payment collection
- Never handle or store raw payment card data, thereby eliminating PCI-DSS scope
- Support all GovPay-approved payment methods (LankaPay, credit and debit cards, Internet banking)
- Implement GovPay reconciliation APIs for financial reporting

> **Extension Point: GovPay**
>
> No extension is permitted for citizen-facing payment collection. Internal government-to-government financial transactions may use alternative mechanisms with prior written approval.

#### NDX: National Data Exchange

NDX is the mandatory platform for all data exchange between government agencies. Parties shall:

- Register all data products they publish with the NDX Data Catalogue
- Subscribe to required datasets via NDX rather than building direct agency-to-agency integrations
- Implement NDX data contracts specifying schema, frequency, and quality SLAs
- Never establish direct database-to-database integrations with other agencies

> **Extension Point: NDX**
>
> No extension is permitted for inter-agency data exchange. A time-limited interim direct integration may be approved while an NDX data contract is being established, provided a formal NDX migration plan with a defined completion date is submitted and approved before the interim integration is deployed.

---

## 6. Adopted Standards and Frameworks

GovTech adopts the following international standards and frameworks. Implementing parties are responsible for understanding, applying, and documenting their compliance with each relevant standard. GovTech sets the requirement; parties own the implementation.

| Standard | Domain | Compliance Level | Extension Point |
|---|---|---|---|
| TOGAF 10 | Enterprise Architecture | Adopted (adapted) | Parties may use an alternative EA framework (e.g., Zachman, FEAF) with documented mapping to TOGAF concepts and prior written approval |
| ISO/IEC 27001:2022 | Information Security | Mandatory | Equivalent certification (e.g., SOC 2 Type II) may be accepted with prior approval and a gap assessment |
| NIST CSF 2.0 | Cybersecurity | Mandatory | Alternative risk frameworks accepted with documented mapping to NIST CSF outcomes and prior approval |
| OWASP ASVS 4.0 | Application Security | Mandatory (Level 2 minimum) | Higher ASVS level required for systems processing sensitive data; no lower level is permitted |
| OpenAPI 3.1 | API Specification | Mandatory | No extension permitted: OpenAPI 3.1 is the sole accepted API specification format |
| WCAG 2.1 AA | Accessibility | Mandatory | Higher conformance (AAA) is encouraged; no lower level is permitted |
| OAuth 2.0 / OIDC | Identity and Auth | Mandatory | No extension permitted for citizen-facing authentication |
| ISO 22301 | Business Continuity | Mandatory (Tier 1 systems) | Tier 2 and below systems may use a simplified BCP framework with prior written approval |

---

## 7. Governance and Compliance

### 7.1 Architecture Review Process

All systems subject to this EARM shall pass two mandatory approval gates before production deployment. Implementing parties are responsible for preparing and submitting all required artefacts at each gate.

**Gate 1: Design Review** (before development begins)

Required submission artefacts:

- System context diagram
- Data flow diagram covering all ingress, egress, and storage points
- Technology stack declaration and initial SBOM
- Building block integration plan (SL-UDI, GovPay, NDX as applicable)
- Security threat model
- WCAG and multilingual compliance approach

**Gate 2: Pre-Production Review** (before go-live)

Required submission artefacts:

- Passing security assessment results (penetration test report)
- Building block integration test evidence (SL-UDI, GovPay, NDX)
- Performance benchmark results against defined SLAs
- Accessibility audit results (WCAG 2.1 AA)
- Disaster recovery test evidence demonstrating RTO and RPO targets
- Updated SBOM (final)

> **Extension Point: Review Process**
>
> For low-risk, internal-only systems, a party may request a simplified single-gate review process. The request shall classify the system risk profile with supporting justification. Prior written approval from the Architecture Review Board is required before the simplified process is applied.

### 7.2 Ongoing Compliance

Implementing parties are responsible for maintaining ongoing compliance throughout the operational life of their system. Obligations include:

- Submitting an Annual Architecture Compliance Declaration to GovTech
- Notifying GovTech within 72 hours of any material architecture change (new technology, integration, or data flow)
- Keeping the SBOM current and available to GovTech on request
- Participating in GovTech-led interoperability testing exercises, conducted biannually

### 7.3 Waiver Process

Where a system cannot meet a specific EARM requirement, a formal Architecture Waiver may be requested. Waivers shall be submitted before implementation of the non-compliant approach begins. A waiver:

- Is time-limited (maximum 12 months) and shall be renewed if the constraint persists
- Shall document: the specific requirement being waived, the reason for non-compliance, compensating controls in place, and a timeline for achieving full compliance
- Is recorded in the GovTech Deviation Register and summarised in GovTech's annual governance report

---

## 8. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| **GovTech Chief Architect** | Owns this EARM; approves architecture waivers; chairs the Architecture Review Board |
| **Architecture Review Board** | Reviews Gate 1 and Gate 2 submissions; issues compliance findings |
| **Standards and Policy Division** | Maintains this document in Git; manages the Deviation Register; conducts annual compliance assessments |
| **Ministry / Agency CIO** | Accountable for EARM compliance of all systems under their portfolio |
| **Solution Architect (Vendor or Internal)** | Responsible for producing and submitting all Gate 1 and Gate 2 artefacts |
| **GovTech NOC** | Monitors operational compliance; escalates deviations to the Architecture Review Board |
| **Implementing Party** | Fully responsible for their own compliance, SBOM, software licensing, and implementation outcomes |

---

## Appendix A: Glossary

| Term | Definition |
|---|---|
| Data Product | A curated, documented, and published dataset available via NDX |
| Building Block | A reusable, shared platform capability operated by GovTech (SL-UDI, GovPay, NDX, and equivalents) |
| Architecture Waiver | A time-limited, documented exception to a specific EARM requirement |
| GovCloud | The government-approved cloud hosting environment within Sri Lanka's territorial jurisdiction |
| GTSL | Government Technology Standards List: the biannual approved technology list |
| NOC | National Operations Centre: GovTech's centralised monitoring and incident response function |
| eKYC | Electronic Know Your Customer: digital identity verification via SL-UDI |
| IaC | Infrastructure as Code: managing infrastructure through machine-readable configuration files |
| Extension Point | A formally defined mechanism for substituting a GovTech default with a prior-approved alternative |
| Deviation Register | GovTech's central log of all approved Extension Point deviations across all systems |

---

## Appendix B: Related Documents

| Doc ID | Title | Status | Relationship |
|---|---|---|---|
| [GOV-001](../Master_Governance_Policy.md) | GovTech Master Governance Policy | Active | Parent document |
| ARC-002 | API Design and Integration Standard | Planned | Child standard |
| ARC-003 | Cloud and Hosting Policy | Planned | Child standard |
| ARC-004 | Microservices and Platform Design Guidelines | Planned | Child standard |
| ARC-005 | NDX and GovPay Integration Standards | Planned | Child standard |
| ARC-006 | Disaster Recovery and Business Continuity | Planned | Child standard |
| SEC-001 | Information Security Policy | Planned | Referenced |
| DAT-001 | Data Classification and Handling Policy | Planned | Referenced |
| POL-001 | Software Governance Policy | Planned | Referenced |

---

*This document is version-controlled in Git. Refer to the commit history for the complete change log.*  
*GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division, Colombo, Sri Lanka*
