# Comparative Analysis: Peer-Government Digital Standards Frameworks

**Purpose:** Reference note to inform refinement of the GovTech Sri Lanka Standards and Guidelines repository.
**Prepared:** June 2026
**Status:** Supporting material (not a policy document). Local research aid.
**Method:** Deep-research harness, 32 sources fetched, 133 claims extracted, top 25 adversarially verified (3-vote). 24 confirmed, 1 refuted.

> **Terminology note.** X-Road, GovStack, and the other framework names below are external comparators for analysis only. Sri Lankan policy text (GOV-001, ARC-001, and child documents) uses the Digital Economy Blueprint's own terminology: the platform names NDX, SL-UDI, and GovPay, and the general Blueprint terms Digital Public Infrastructure (DPI), Unique Digital Identity, National (Federated) Data Exchange, and Digital Payments.

---

## 1. Headline

Peer governments do **not** use a multi-pillar policy spine like Sri Lanka's eight numbered pillars. The verified models fall into three structural shapes:

- **Domain-committee, per-document numbering** (India): working groups emit independently numbered standards (IFEG:01, MDDS-Demographic:01, QAF:01).
- **Flat numbered list** (UK): 13 Technology Code of Practice principles; 14 Service Standard points; no nesting.
- **Unified, unnumbered catalogue** (Singapore): a single "Standards and Best Practices" set of 11 named guidelines, codified as machine-readable controls.

Three durable lessons emerge for Sri Lanka: (a) enforceability is almost never a flat mandatory/advisory split; (b) the leading authoritative-source practice is **machine-readable**, not just human-readable Markdown; (c) open-standards / vendor-neutrality is consistently a **first-class, named** requirement rather than a buried clause.

---

## 2. Per-jurisdiction comparison (verified findings)

| Jurisdiction | Taxonomy / numbering | Governance and version control | Enforceability model | Confidence |
|---|---|---|---|---|
| **India** | Domain working groups (legal, localisation, metadata, network, quality, technical) under an apex body; per-document IDs (IFEG:01, MDDS-Demographic:01, QAF:01, eSAFE-GD203). Portal tiers: Framework/Policies, Notified Standards, Guidelines, Notifications, Templates. | NeGD / MeitY with NIC, STQC, C-DAC. IndEA developed by an STQC/MeitY working group (Oct 2016 to Jun 2017). | **Per-standard code M / MW / O** (Mandatory / Mandatory-Watchlist / Optional). Plus Notified Standards (mandatory) vs Guidelines (advisory). Individual requirements also graded MUST/SHOULD/MAY. | High (one portal-tier claim 2-1) |
| **Singapore** | Single unified "Standards and Best Practices" category = 11 named guidelines (IM8, GovZTA, Secure Coding, Responsible AI Playbook, etc.). IM8 control catalogue: ~27 domains / ~53 controls organised as catalogs + risk profiles. | GovTech. Published as an **open MIT-licensed GitHub repo**. Built on **NIST OSCAL** (machine-readable); feeds the 2024 Whole-of-Government IM8 portal. | **Three-tier Level 0 / 1 / 2** (Must / Should / Good-to-have), and the *same* control's status changes by **system risk category** (requirement for low-risk, guideline for sandbox-stage). Risk-and-system-dependent. | High |
| **UK** | **Technology Code of Practice: 13 numbered principles**. **GDS Service Standard: 14 numbered points** (flat, grouped loosely under 3 themes). Open standards is a distinct point (TCoP P4; Service Standard Point 13). | Government Digital Service (CDDO merged back into GDS within DSIT, Jan 2025). | Mixed mandatory/advisory, enforced via the **Cabinet Office spend-control gate**: align with mandatory points, follow the rest where practical, justify non-compliance to GDS Assurance for funding approval. (Note: "service assessment is itself mandatory" was **refuted**, 1-2.) | High |
| **Australia** | Digital Service Standard (DTA) plus the **Hosting Certification Framework**. | Digital Transformation Agency. | **Three fixed hosting tiers: Strategic / Assured / Uncertified.** Compact, transferable model for cloud/data-sovereignty policy. | High |
| **Estonia** | IT Interoperability Framework v3.0; X-Road / X-tee data-exchange layer (RIA). | Sources gathered (RIA, GovStack mirror) but **no claim entered the verified top-25**. | Not verified in this pass. | Gap |
| **Cambodia** | Digital Government Policy 2022-2035 (10 strategies, 83 actions); Digital Economy & Society Framework 2021-2035 (2 foundations + pillars). **CamDX (Cambodia Data Exchange) is built on X-Road** (Sub-Decree 164). | MPTC. Sources gathered but **not in verified top-25**. | Not verified in this pass. | Gap |
| **GovStack** | 9 building-block specs (identity, payments, registries, information mediator, consent, messaging, etc.); the Information Mediator block is X-Road-derived. | ITU / Estonia / Germany / DIAL. Sources gathered but **not in verified top-25**. | Not verified in this pass. | Gap |

---

## 3. Four cross-cutting patterns worth adopting

1. **Granular, risk-tiered enforceability.** Replace any flat mandatory/advisory label with a scheme that grades *each requirement* and lets the grade shift with system risk. India's M/MW/O and Singapore's Level 0/1/2 (where the same control is a requirement for low-risk systems but a guideline for sandbox systems) are the two reference models.

2. **Machine-readable authoritative source.** Singapore codifies its controls in NIST OSCAL to enable automated compliance monitoring. This is the single clearest upgrade over plain Markdown-in-Git. Sri Lanka can keep Markdown as the human-readable layer and add a machine-readable encoding for the enforceable controls.

3. **Enforcement through procurement, not new statute.** The UK ties compliance to the spend-control / budget-approval gate. Sri Lanka already has a Vendor Approval pillar and an RFP framework: wiring standards-compliance into procurement sign-off gives teeth without new legislation.

4. **Open standards as a named, first-class requirement.** India's 2010 Policy on Open Standards (explicitly to prevent vendor lock-in), UK TCoP Principle 4, and Service Standard Point 13 all make this a standalone, checkable item. Mirrors Sri Lanka's existing Extension Point philosophy.

---

## 4. Data classification

Sri Lanka's ICTA 5-level model (Unclassified, Public, Limited Sharing, Confidential, Secret) is **finer-grained** than the operational tiers peers use for hosting/security (Australia's 3 hosting levels; Singapore's risk profiles). That is a strength for policy expressiveness; the gap is the **data-element standardisation layer**. India pairs its classification with **MDDS** (Metadata and Data Standards: code directories, XML schemas for Person-Identification and common domains). Sri Lanka's Pillar 5 should reference an MDDS-style data-element standard so classification is matched by interoperable data definitions.

*Caveat:* no peer's data-classification scheme (as opposed to hosting/security risk tiers) was verified in detail for a like-for-like comparison. A targeted follow-up is needed to map level-for-level.

---

## 5. DPI and national-platform integration (NDX / GovPay / SL-UDI)

Strong sourced leads (gathered but not in the verified top-25, so treat as high-quality leads pending confirmation):

- **X-Road / X-tee** (Estonia RIA) is the canonical data-exchange layer and the direct analogue to **NDX**.
- **Cambodia's CamDX is X-Road-based** (Sub-Decree 164). As a near-peer emerging economy, it is the closest precedent for how Sri Lanka can govern NDX.
- **GovStack** publishes a 9-block spec set; its **Information Mediator** block is X-Road-derived, and it has dedicated **Identity** and **Payments** functional-requirement specs that map onto SL-UDI and GovPay.

Recommended structure: anchor the integration-standards layer (ARC-005) in an **IFEG-style technical-interoperability domain taxonomy** and a **TOGAF / IndEA-style reference model** (Pillar 4 / ARC-001), and cite the GovStack/X-Road specs as the recognised international standards behind each Extension Point.

---

## 6. Suggested 8-pillar mapping

| Sri Lanka pillar | Closest verified external model |
|---|---|
| Apex Master Governance Policy | India apex-body governance + UK TCoP ownership/spend-control |
| P1 Policy & Legal | India 2010 Open Standards Policy |
| P2 Vendor Approval | UK spend-control gate (compliance tied to procurement) |
| P3 Security & Compliance | Singapore IM8 / OSCAL controls + Australia Hosting Certification (3 tiers) |
| P4 Architecture | IndEA / TOGAF reference models + IFEG technical-interoperability domains |
| P5 Data Management | India MDDS (data elements + XML schemas); X-Road for exchange |
| P6 Development | UK Service Standard + Singapore Secure Coding guideline |
| P7 Digital Inclusion | UK TCoP P2 + Service Standard accessibility points (WCAG) |
| P8 2030 Blueprint alignment | Cambodia Digital Government Policy 2022-2035 (nearest-peer strategy) |

---

## 7. Concrete recommendations for Sri Lanka

1. **Keep Markdown-in-Git; add an open license** (validated by Singapore's MIT repo) and **layer a machine-readable control encoding** (OSCAL or equivalent) over the prose for the enforceable parts.
2. **Adopt a granular, risk-and-system-dependent enforcement classification** (combine India M/MW/O with Singapore Level 0/1/2), replacing any flat mandatory/advisory label.
3. **Enforce through the existing procurement gate** (Pillar 2 / RFP framework), UK-style, rather than waiting on statute.
4. **Add an MDDS-style data-element standard under Pillar 5** to back the ICTA classification model with interoperable definitions.
5. **Anchor NDX/GovPay/SL-UDI integration standards** in GovStack/X-Road building-block specs, framed as Extension Points against ARC-001's reference model.
6. **Use Australia's 3-tier hosting model** as the spine of the planned ARC-003 Cloud and Hosting Policy.

---

## 8. Confidence and caveats

- **High overall:** 23 of 24 surviving claims passed unanimous 3-0 verification against primary sources.
- **Refuted:** "Passing a UK service assessment is itself mandatory" (1-2). The spend-control gate is the real enforcement mechanism, not a standalone assessment mandate.
- **Coverage gap:** Estonia, Cambodia, and GovStack produced fetched sources but **no claim reached the verified top-25**. The verified findings are India / Singapore / UK / Australia heavy. The DPI guidance above rests on gathered-but-unverified sources.
- **Geo-throttling:** India's `egovstandards.gov.in` repeatedly blocked US-based tooling; some India facts rest on Internet-Archive / NIC mirrors and search-index captures of verbatim front matter (still corroborated across independent sources).
- **Currency:** Several India documents are dated (IFEG 2012, MDDS 2011, Open Standards Policy 2010); they remain on the live notified-standards portal but were not re-verified against newer IndEA 2.0 material. UK CDDO merged into GDS/DSIT in Jan 2025.

## 9. Open questions / next research

1. IndEA **2.0** specifics vs v1.0, and whether it supersedes the 2010-2012 IFEG/MDDS catalogue.
2. Structure and governance of **Estonia X-Road, Cambodia CamDX, and GovStack** building blocks (the most relevant DPI evidence for NDX/GovPay/SL-UDI, currently under-verified).
3. **Level-for-level data-classification** mapping of the ICTA 5-level model against peer schemes (Singapore Government Data Security; UK GSCP; Australia PSPF).

---

### Primary sources

- India IndEA: https://negd.gov.in/india-enterprise-architecture/
- India IFEG v1.0: https://egovstandards.gov.in/sites/default/files/2021-07/Technical%20Standards%20for%20IFEG%20Ver1.0.pdf
- India e-Gov standards portal: https://egovstandards.gov.in/
- India MDDS: https://www.nrces.in/standards/government-of-india-standards/mdds
- Singapore tech-standards (GitHub, MIT): https://github.com/GovTechSG/tech-standards
- Singapore control catalog (OSCAL): https://info.standards.tech.gov.sg/control-catalog/
- Singapore developer portal: https://www.developer.tech.gov.sg/guidelines/standards-and-best-practices/overview.html
- Singapore Government Data Security policies: https://file.go.gov.sg/government-data-security-policies.pdf
- UK Technology Code of Practice: https://www.gov.uk/guidance/the-technology-code-of-practice
- UK Service Standard: https://www.gov.uk/service-manual/service-standard
- Australia Hosting Certification Framework: https://www.hostingcertification.gov.au/framework
- Australia Digital Service Standard criteria: https://www.dta.gov.au/help-and-advice/digital-service-standard/digital-service-standard-criteria
- Estonia X-Road / X-tee (RIA): https://www.ria.ee/en/state-information-system/data-exchange-platforms/data-exchange-layer-x-tee
- GovStack interoperability architecture: https://specs.govstack.global/architecture/4-interoperability-architecture
- GovStack Information Mediator (X-Road): https://github.com/GovStackWorkingGroup/bb-information-mediator
- Cambodia Digital Government Policy 2022-2035: https://asset.cambodia.gov.kh/mptc/media/Cambodia_Digital_Government_Policy_2022_2035_English.pdf
- Cambodia CamDX: https://camdx.gov.kh/
