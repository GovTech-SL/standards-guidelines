# <DOC-ID>: <Document Title>

**Document ID:** <DOC-ID>  
**Version:** 0.1  
**Status:** DRAFT (For Internal Review)  
**Classification:** OFFICIAL  
**Pillar:** <Architecture | Policy and Legal | Vendor Approval | Security | Data | Development | Inclusion | Blueprint>  
**Parent Document:** [GOV-001: GovTech Master Governance Policy](Master_Governance_Policy.md)  
**Issued By:** GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division  
**Date:** <Month YYYY>  
**Aligned With:** Sri Lanka 2030 Digital Blueprint  

---

> **How to use this template.** Copy this file into the correct pillar folder under `/docs`, rename to `<PREFIX>-<NNN>_<Title_With_Underscores>.md`, and complete every section. Delete this guidance block and the `<...>` placeholders before submitting for review. Follow the writing rules in `../CLAUDE.md` and `../GovTech_Project_Instructions.md` without exception.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Strategic Context: Sri Lanka 2030 Digital Blueprint](#2-strategic-context-sri-lanka-2030-digital-blueprint)
3. [Principles](#3-principles)
4. [Requirements](#4-requirements)
5. [Governance and Compliance](#5-governance-and-compliance)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Related Documents](#appendix-b-related-documents)

---

## 1. Introduction

### 1.1 Purpose

State the authoritative purpose of the document in two or three sentences. Identify which domain it governs and which class of implementations it binds.

### 1.2 Scope

List the systems, parties, and platforms to which this document applies. State any exclusions explicitly.

### 1.3 Intended Audience

List the roles that shall act on this document (e.g. GovTech reviewers, agency CIOs, vendor architects, system integrators).

### 1.4 Definitions and Acronyms

Define only terms specific to this document. Common terms (SL-UDI, GovPay, NDX, SBOM, Extension Point, Deviation Register) shall be referenced from the central glossary and shall not be redefined here.

| Term | Definition |
|---|---|
| <Term> | <Definition> |

---

## 2. Strategic Context: Sri Lanka 2030 Digital Blueprint

State how this document advances the Blueprint pillars (Digital Infrastructure, Digital Government, Digital Economy, Digital Society, Cybersecurity). Flag any deliverables, milestones, or shared building blocks this document directly supports.

---

## 3. Principles

State the binding principles that govern every requirement in this document. Principles are outcome-focused, not implementation-specific.

---

## 4. Requirements

Each numbered requirement shall use the obligation terms defined in the writing rules (`shall`, `shall not`, `should`, `may`, `must not`). Each requirement section that recommends a standard shall include an Extension Point block in the format defined in Section 4.0.

### 4.0 Extension Point Block (Required Format)

Every section that recommends a standard, technology, framework, or process shall close with an Extension Point block in exactly the following structure. Reviewers shall reject any section recommending a standard without one.

> **Extension Point: <Section Number and Title>**
>
> **Default Recommendation.** <The internationally recognised standard, framework, or practice recommended by GovTech, including the specific version or edition adopted.>
>
> **Permitted Alternative Pathway.** A party may substitute the default with an alternative, subject to all of the following:
> - The alternative is itself grounded in a recognised international standard or documented industry best practice.
> - The party submits a written deviation request setting out: the rationale, the alternative standard (with version), and how the alternative meets the intent of the default requirement.
> - Prior written approval is granted by the GovTech Standards and Policy Division before implementation begins. Retroactive approval shall not be granted.
> - The approved deviation is recorded in the GovTech Deviation Register and the register reference is cited in the approved implementation plan.
>
> **Approval Authority.** GovTech Standards and Policy Division.
>
> **Evidence Required at Approval.** <List the artefacts the party shall submit, e.g. architecture diagram, threat model, SBOM extract, conformance test report.>
>
> **Review Frequency.** <How often this Extension Point decision is revisited, e.g. annual, on platform version change.>

### 4.1 <Domain Requirement>

State the requirement. Close with the Extension Point block where a standard is being recommended.

---

## 5. Governance and Compliance

State the approval gates, audit obligations, and enforcement mechanisms specific to this document. Reference `GOV-001` for repository-wide governance; do not duplicate it.

---

## 6. Roles and Responsibilities

| Role | Responsibility |
|---|---|
| GovTech Standards and Policy Division | <Decision rights and oversight obligations.> |
| Implementing Party | <Delivery, documentation, and SBOM obligations.> |
| Agency CIO / CTO | <Approval and compliance attestation obligations.> |

---

## Appendix A: Glossary

Reference shared terms from the central glossary. Include only document-specific terms here.

---

## Appendix B: Related Documents

| Doc ID | Title | Relationship |
|---|---|---|
| GOV-001 | GovTech Master Governance Policy | Parent (apex) document |
| <ID> | <Title> | <Sibling / dependency / sub-document> |
