## **SLA Parameters and Minimum Acceptance Criteria**

Document ID: SVC-001<br>
Status: Active<br>
Version: 1.0<br>
Last Updated: 2026-09-25

This document defines the Service Level Agreement (SLA) parameters and acceptance criteria applicable to technology services procured by GovTech Sri Lanka.

The service provider shall propose detailed SLA targets for the warranty and post-warranty Annual Maintenance Contract periods. These shall include, at minimum:

\*\*The SLA values provided herein are subject to negotiation with GovTech Sri Lanka (where applicable), prior to the signing of contract agreements.

| Area | Parameter | Target SLA | Acceptance Criteria / Measurement |
| ----- | ----- | ----- | ----- |
| **System availability**  | Production System Uptime | ≥ 99.5% monthly availability | Measured 24/7 monthly excluding pre-approved planned maintenance windows. |
|  | Planned Maintenance Window | ≤ 4 hours per month , No more than 2 windows | Scheduled during off-peak hours with at least 48 hours prior notification and formal approval. |
|  | Unplanned Downtime Cap | ≤ 3.6 hours per month | Total accumulated unscheduled downtime must not exceed 3.6 hours in any calendar month. |
|  | Maximum Continuous Outage | ≤ 2 hours single occurrence on the Primary site. If not DR site to be live ≤ 4 hours | No single unscheduled outage event shall exceed 4 hours duration, unless agreed otherwise in the contracts. |
| **Performance & Capacity** | Single Transaction Response Time | p95 ≤ 750ms seconds at defined peak concurrency, p99 ≤ 2 seconds  | Measured server-side at the application tier under production load, excluding client network latency. Peak concurrency figure to be inserted from the Client’s capacity baseline.  |
|  | Search and Query Response | p95 ≤ 5 seconds | Standard search operations across the production dataset at peak volume. |
|  | Report and Batch Processing | Standard reports ≤ 45 seconds, Scheduled batch and if end-of-day processing complete within the agreed nightly window | Standard batch processing time are included, unless otherwise as agreed in the contract. |
| **Critical incident response**  | Response Time | ≤ 15 minutes | Acknowledged 24/7 by a named technical lead with automated ticket creation. |
|  | Workaround / Temporary Fix | ≤ 2 hours | Restoration of core service capabilities or deployment of an approved interim mitigation. |
|  | Permanent Resolution | ≤ 4 hours | Full root-cause remediation, verified by system tests and formal incident sign-off. |
|  | Root Cause Analysis | Preliminary report ≤ 24 hours, Full Analysis report ≤ 5 business days | Formal RCA with contributing factors, corrective and preventive actions, owners and target dates. Client sign-off required. |
| **High incident response**  | Response Time | ≤ 30 minutes | Acknowledged within operational support hours with assigned technical resources. |
|  | Workaround / Temporary Fix | ≤ 4 hours | Interim operational workaround provided to affected offices or user groups. |
|  | Permanent Resolution | ≤ 8 hours | Complete resolution and deployment of tested hotfix or configuration patch. |
|  | Root Cause Analysis |  Full Analysis report ≤ 5 business days | Formal RCA with contributing factors, corrective and preventive actions, owners and target dates. Client sign-off required. |
| **Medium and low incident response**  | Medium Severity Response & Resolution | Response: ≤ 2 hours; Resolution: ≤ 24 hours | Non-critical functional issues addressed without disruption to core operations. |
|  | Low Severity Response & Resolution | Response: ≤ 4 hours; Resolution: ≤ 5 business days | Minor cosmetic, documentation, or minor usability enhancements included in scheduled release. |
| **Security patching** | Critical Security Vulnerabilities | ≤ 24 hours | Emergency patch deployment following disclosure of Zero-Day or CVSS 9.0+ vulnerability. |
|  | High / Medium Security Patches | High: ≤ 7 calendar days; Medium: ≤ 14 calendar days | Tested and deployed via structured release pipeline with vulnerability rescanning verification. |
| **Backup** | Backup Frequency & Integrity | DB transaction logs: continuous (15-min sync); Full backup: daily; Success rate: 100% | Automated daily execution with AES-256 encryption, immutable offsite storage, and daily verification reports. |
| **Restore** | Recovery Objectives (RTO / RPO) | RTO ≤ 4 hours; RPO ≤ 15 minutes | Validated via quarterly automated disaster recovery restoration drills and data-loss audit checks. |
| **Monitoring** | System & API Observability | 24/7 automated real-time monitoring; Alert notification latency ≤ 1 minute | Continuous monitoring of infrastructure health, API response times, database loads, transaction queues, and security audit logs. |
| **Support** | Helpdesk Availability & First Contact Resolution | 24/7 for Critical issues; 8x5 for standard user support; First Contact Resolution ≥ 75% | Trilingual (Sinhala, Tamil, English) ticketing system with SLA tracking and monthly satisfaction score ≥ 85%. |
| **Reporting** | SLA & Incident Reporting Delivery | Monthly SLA report due by 5th of following month; Major Incident RCA report within 24 hours | Comprehensive reporting covering uptime metrics, incident response times, backup audit logs, security patching status, and root-cause analysis. |

### **Severity Classifications**

| Severity Level | Definition | Criteria & Impact |
| ----- | ----- | ----- |
| **Critical (Severity 1\)** | Catastrophic business impact or complete system outage with no immediate workaround available. | Core application/service is down or inaccessible to all users; severe risk of data loss or security breach. |
| **High (Severity 2\)** | Significant business impact where major system functionality is impaired or unavailable. | Key feature/module unavailable or severely degraded; affects a large subset of users, though temporary workarounds may exist. |
| **Medium (Severity 3\)** | Moderate business impact with partial non-critical system degradation or functional issues. | Non-critical operation or secondary feature fails; operational workaround is readily available with minimal user disruption. |
| **Low  (Severity 4\)** | Minor business impact involving minor operational, UI, or administrative issues. | Cosmetic flaws, minor bugs, documentation errors, or enhancement requests that do not impact system functionality. |

### 

### **ITIL-Based Tiered Support Escalation Model and Service Levels**

Staffing and operational capabilities are organized into three technical support tiers to manage incidents and service requests systematically:

| Support Tier | Severity Level | Target First Response | Target Resolution / Workaround | Escalation Trigger (if blocked) | Scope & Responsibilities |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Level 1 (L1) Service Desk** | **Critical** | ≤ 30 minutes | ≤ 2 hours | 30 minutes if unresolved | Initial point of contact (24/7 for critical issues). Incident logging, classification, prioritization, basic troubleshooting, and applying standard knowledge-base resolutions. |
|  | **High** | ≤ 15 minutes | ≤ 4 hours | 1 hour if unresolved |  |
|  | **Medium** | ≤ 2 hours | ≤ 24 hours | 4 hours if unresolved |  |
|  | **Low** | ≤ 4 hours | ≤ 5 business days | 1 business day if unresolved |  |
| **Level 2 (L2) Technical Support** | **Critical** | ≤ 15 minutes | ≤ 2 hours | 30 minutes if unresolved | Staffed by systems administrators, database administrators, and network specialists. Deeper technical diagnostics, infrastructure configuration, and specialized support. |
|  | **High** | ≤ 1 hour | ≤ 4 hours | 2 hours if unresolved |  |
|  | **Medium** | ≤ 4 hours | ≤ 24 hours | 1 business day if unresolved |  |
|  | **Low** | ≤ 8 hours | ≤ 5 business days | 2 business days if unresolved |  |
| **Level 3 (L3) Product/OEM Support** | **Critical** | ≤ 1 hour | ≤ 4 hours (Workaround/Fix)  | N/A | Staffed by core software developers, product engineering teams, and Original Equipment Manufacturers (OEMs). Bug fixes, security hotfixes, major system changes, and vendor-level escalations. |
|  | **High** | ≤ 2 hours | ≤ 8 hours (Workaround/ Fix) | N/A |  |
|  | **Medium** | ≤ 1 business day | ≤ 5 business days | N/A |  |
|  | **Low** | ≤ 2 business days | Scheduled release | N/A |  |

### **Incident Flow of Events**

The operational flow for managing incidents across the support tiers is structured as follows:

1. **Detection & Logging (L1):**

   * Incidents are captured via the service portal, email, or telephone.

   * L1 registers the ticket, classifies/verifies the severity level (Severity 1 to 4), and logs all primary diagnostics.

2. **Initial Triage & Resolution Attempt (L1):**

   * L1 searches the Knowledge Management System (KMS) for known errors and standard workarounds.

   * If a solution is found, the fix is applied, verified with the user, and the ticket is closed (First Contact Resolution).

3. **Escalation to L2:**

   * If L1 cannot start on working on a solution for the issue within the **specified escalation threshold for the issue severity**, or if the issue requires advanced database/infrastructure permissions, the ticket is formally escalated to L2.

4. **Advanced Diagnostic & Workaround (L2):**

   * L2 takes ownership, performs advanced troubleshooting, and reviews system logs.

   * L2 applies temporary workarounds to restore core operations as quickly as possible.

   * If the root cause is identified as an application bug or an underlying platform/infrastructure failure requiring product engineering, the ticket is escalated to L3 within the **specified escalation threshold for the issue severity**.

5. **Engineering & OEM Resolution (L3):**

   * L3 engineers conduct deep code-level reviews, develop configuration patches, or coordinate with hardware/cloud providers.

   * Once a hotfix or permanent resolution is engineered, it is tested in the staging environment and scheduled for production deployment.

     

6. **Verification & Closure (L1/L2):**

   * The resolution is deployed to production.

   * L1/L2 verifies the fix with the end-user.

   * The ticket is updated with resolution details and closed, and the KMS is updated with any new troubleshooting procedures.

### 

### **Acronyms and Definitions**

| Acronym | Definition |  Context |
| ----- | ----- | ----- |
| **SLA** | Service Level Agreement | Defines performance expectations and targets between the service provider and client. |
| **DR** | Disaster Recovery | Secondary site/infrastructure setup to restore operations during major outages. |
| **RCA** | Root Cause Analysis | Formal investigation and report into the underlying reasons behind an incident. |
| **CVSS** | Common Vulnerability Scoring System | Standardized framework for assessing the severity of computer system security vulnerabilities. |
| **DB** | Database | Data storage layer requiring ongoing logging, maintenance, and backups. |
| **RTO** | Recovery Time Objective | Maximum acceptable duration of downtime following a disaster or outage. |
| **RPO** | Recovery Point Objective | Maximum acceptable amount of data loss before the incident occurrence time, measured in time. |
| **API** | Application Programming Interface | System interface measured for response performance and observability. |
| **UI** | User Interface | Front-end visual application interface interacted with by system users. |
| **ITIL** | Information Technology Infrastructure Library | A framework of best practices for delivering IT services. |

