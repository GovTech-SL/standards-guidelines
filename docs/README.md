# GovTech Sri Lanka (Pvt) Ltd.: Standards and Guidelines Repository

**Maintained by:** Standards and Policy Division  
**Aligned With:** Sri Lanka's Digital Economy Blueprint  

---

## Repository Structure

All GovTech Standards and Guidelines documents are held in this repository under the `/docs` root. The master governance policy sits at the root level. All pillar-specific documents are organised into subfolders by pillar.

```
docs/
├── README.md                                  ← This file: repository index
├── Master_Governance_Policy.md  ← Apex document
│
├── architecture/                              ← Pillar 4: Architecture Standards
│   ├── ARC-001_Enterprise_Architecture_Reference_Model.md
│   ├── ARC-002_API_Design_Integration_Standard.md
│   ├── ARC-003_Cloud_Hosting_Policy.md
│   ├── ARC-004_Microservices_Platform_Design_Guidelines.md
│   ├── ARC-005_NDX_GovPay_Integration_Standards.md
│   └── ARC-006_Disaster_Recovery_Business_Continuity.md
│
├── policy-legal/                              ← Pillar 1: Policy and Legal Framework
│   ├── POL-001_Software_Governance_Policy.md
│   ├── POL-002_Data_Sovereignty_PDPA_Compliance.md
│   ├── POL-003_Open_Standards_Vendor_Neutrality_Policy.md
│   ├── POL-004_Government_Procurement_Rules_Software.md
│   └── POL-005_IP_Licensing_Policy.md
│
├── vendor-approval/                           ← Pillar 2: Vendor Approval Process
│   ├── VAP-001_Vendor_Registration_Eligibility_Criteria.md
│   ├── VAP-002_RFP_Evaluation_Framework.md
│   ├── VAP-003_Technical_Due_Diligence_Checklist.md
│   ├── VAP-004_Proof_of_Concept_Guidelines.md
│   ├── VAP-005_Approval_Signoff_Workflow.md
│   └── VAP-006_Vendor_Performance_SLA_Standards.md
│
├── security/                                  ← Pillar 3: Security and Compliance
│   ├── SEC-001_Information_Security_Policy.md
│   ├── SEC-002_Application_Security_Standard.md
│   ├── SEC-003_Penetration_Testing_Requirements.md
│   ├── SEC-004_Incident_Response_Breach_Notification.md
│   ├── SEC-005_Identity_Access_Management_SLUDI.md
│   └── SEC-006_Cryptography_Key_Management_Standard.md
│
├── data/                                      ← Pillar 5: Data Management
│   ├── DAT-001_Data_Classification_Handling_Policy.md
│   ├── DAT-002_Master_Data_Management_Standard.md
│   ├── DAT-003_Data_Interoperability_Exchange_NDX.md
│   ├── DAT-004_Data_Retention_Disposal_Policy.md
│   └── DAT-005_Open_Data_Transparency_Guidelines.md
│
├── development/                               ← Pillar 6: Development Standards
│   ├── DEV-001_SDLC_Policy.md
│   ├── DEV-002_Coding_Standards_Code_Review_Guidelines.md
│   ├── DEV-003_Testing_QA_Requirements.md
│   ├── DEV-004_DevSecOps_CICD_Pipeline_Standards.md
│   ├── DEV-005_Open_Source_Usage_Policy.md
│   └── DEV-006_Release_Deployment_Management.md
│
├── inclusion/                                 ← Pillar 7: Digital Inclusion
│   ├── INC-001_Accessibility_Standard_WCAG.md
│   ├── INC-002_Multilingual_Requirements.md
│   ├── INC-003_Mobile_First_Low_Bandwidth_Guidelines.md
│   └── INC-004_Digital_Literacy_User_Onboarding_Standards.md
│
└── blueprint/                                 ← Pillar 8: Digital Economy Blueprint Alignment
    ├── BLU-001_Digital_Transformation_Readiness_Assessment.md
    ├── BLU-002_Shared_Platform_Common_Building_Blocks_Policy.md
    ├── BLU-003_Legacy_System_Sunset_Migration_Guidelines.md
    ├── BLU-004_Innovation_Emerging_Technology_Adoption_Framework.md
    └── BLU-005_Digital_KPI_Maturity_Measurement_Standard.md
```

---

## Document Status Key

| Status | Meaning |
|---|---|
| **Active** | Approved and in force |
| **Draft** | Under internal review; not yet approved |
| **Planned** | Scheduled for authoring; not yet started |
| **Deprecated** | Superseded; retained for reference only |

---

## Governance

All documents in this repository are governed by [GOV-001: GovTech Master Governance Policy](Master_Governance_Policy.md).

Changes to any document shall be submitted as a pull request and reviewed by the Standards and Policy Division before merging. The Git commit history is the authoritative change record for all documents.

---

## Document Index

### Active

| Doc ID | Title | Pillar | Path |
|---|---|---|---|
| GOV-001 | GovTech Master Governance Policy | Apex | [/docs/Master_Governance_Policy.md](Master_Governance_Policy.md) |
| ARC-001 | Enterprise Architecture Reference Model | Architecture | [/docs/architecture/ARC-001...](architecture/ARC-001_Enterprise_Architecture_Reference_Model.md) |
| DAT-001 | Data Classification and Handling Policy | Data | [/docs/data/DAT-001...](data/DAT-001_Data_Classification_Handling_Policy.md) |
| SEC-001 | Information Security Policy | Security | [/docs/security/SEC-001...](security/SEC-001_Information_Security_Policy.md) |
| POL-001 | Software Governance Policy | Policy and Legal | [/docs/policy-legal/POL-001...](policy-legal/POL-001_Software_Governance_Policy.md) |

### Planned

| Doc ID | Title | Pillar |
|---|---|---|
| ARC-002 | API Design and Integration Standard | Architecture |
| ARC-003 | Cloud and Hosting Policy | Architecture |
| ARC-004 | Microservices and Platform Design Guidelines | Architecture |
| ARC-005 | NDX and GovPay Integration Standards | Architecture |
| ARC-006 | Disaster Recovery and Business Continuity | Architecture |
| POL-002 | Data Sovereignty and PDPA Compliance | Policy and Legal |
| POL-003 | Open Standards and Vendor Neutrality Policy | Policy and Legal |
| POL-004 | Government Procurement Rules for Software | Policy and Legal |
| POL-005 | IP and Licensing Policy | Policy and Legal |
| VAP-001 | Vendor Registration and Eligibility Criteria | Vendor Approval |
| VAP-002 | RFP Evaluation Framework | Vendor Approval |
| VAP-003 | Technical Due Diligence Checklist | Vendor Approval |
| VAP-004 | Proof of Concept Guidelines | Vendor Approval |
| VAP-005 | Approval and Sign-off Workflow | Vendor Approval |
| VAP-006 | Vendor Performance and SLA Standards | Vendor Approval |
| SEC-002 | Application Security Standard | Security |
| SEC-003 | Penetration Testing Requirements | Security |
| SEC-004 | Incident Response and Breach Notification | Security |
| SEC-005 | Identity and Access Management (SL-UDI) | Security |
| SEC-006 | Cryptography and Key Management Standard | Security |
| DAT-002 | Master Data Management Standard | Data |
| DAT-003 | Data Interoperability and Exchange (NDX) | Data |
| DAT-004 | Data Retention and Disposal Policy | Data |
| DAT-005 | Open Data and Transparency Guidelines | Data |
| DEV-001 | SDLC Policy | Development |
| DEV-002 | Coding Standards and Code Review Guidelines | Development |
| DEV-003 | Testing and QA Requirements | Development |
| DEV-004 | DevSecOps and CI/CD Pipeline Standards | Development |
| DEV-005 | Open Source Usage Policy | Development |
| DEV-006 | Release and Deployment Management | Development |
| INC-001 | Accessibility Standard (WCAG 2.1 AA) | Inclusion |
| INC-002 | Multilingual Requirements | Inclusion |
| INC-003 | Mobile-First and Low-Bandwidth Guidelines | Inclusion |
| INC-004 | Digital Literacy and User Onboarding Standards | Inclusion |
| BLU-001 | Digital Transformation Readiness Assessment | Blueprint |
| BLU-002 | Shared Platform and Common Building Blocks Policy | Blueprint |
| BLU-003 | Legacy System Sunset and Migration Guidelines | Blueprint |
| BLU-004 | Innovation and Emerging Technology Adoption Framework | Blueprint |
| BLU-005 | Digital KPI and Maturity Measurement Standard | Blueprint |

---

*GovTech Sri Lanka (Pvt) Ltd., Standards and Policy Division, Colombo, Sri Lanka*
