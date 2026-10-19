# GovTech Sri Lanka Technology Standards / Guidelines

This repository contains the organisation-wide technology standards and guidelines adopted by GovTech Sri Lanka.

These documents provide common technical direction to be followed across GovTech projects and initiatives.

Project-specific standards, designs, implementation documents and other project deliverables should be maintained within the respective project repositories or document spaces.

## Repository Structure

```text
standards-guidelines/
│
├── README.md
├── docs/
│   ├── architecture/
│   ├── security/
│   ├── data/
│   ├── engineering/
│   ├── service-management/
│   └── ui-ux/
```

Folders will be added as new areas of organisation-wide technology standards and guidelines emerge.

## Standards and Guidelines

Documents in this repository define the approved technology standards and guidelines for GovTech.

All GovTech projects and initiatives should follow the applicable standards and guidelines in this repository.

The standards and guidelines are mandatory and should be applied without deviation unless an approved exception has been granted through the appropriate governance process.

Project-specific implementation details may vary, but they must remain compliant with the applicable GovTech standards / guidelines.

## What Belongs Here

Documents should be included when they provide reusable, organisation-wide technical direction.

Examples include:

* Architecture standards and guidelines
* Security standards
* Data standards
* Engineering standards
* SLA guidelines
* UI / UX and service design guidelines
* Organisation-wide technology practices

## What Does Not Belong Here

The repository is not intended for:

* Project-specific documents
* Project architecture designs
* Project implementation documents
* Project-specific standards or guidelines
* Temporary project drafts
* Project deliverables

These should be maintained in the appropriate project repository or document space.

## Document Naming

Each document must use a domain prefix and a unique sequential number.

The format is:

```text
PREFIX-NNN-document-name.md
```

Examples:

```text
ARC-001-architecture-guidelines.md
SEC-001-security-guidelines.md
DAT-001-data-management-guidelines.md
ENG-001-development-guidelines.md
UI-001-ux-and-service-design-guidelines.md
```

### Document Prefixes

| Prefix | Domain             |
| ------ | ------------------ |
| `ARC`  | Architecture       |
| `SEC`  | Security           |
| `DAT`  | Data               |
| `ENG`  | Engineering        |
| `SVC`  | Service Management |
| `UI`   | UI / UX            |

New prefixes may be introduced when a new domain is established.

Document filenames should not contain version numbers.

Git history is used to track document changes.

## Document Versioning

Each document must display its current version on the first page.

The first page should include, at minimum:

| Field | Value |
|---|---|
| Document ID | ARC-001 |
| Status | Draft |
| Version | 0.1 |
| Last Updated | 2026-09-25 |

### Version Rules

| Version | Use                             |
| ------- | ------------------------------- |
| `0.x`   | Draft or pre-approval versions  |
| `1.0`   | First approved version          |
| `1.x`   | Minor changes or clarifications |
| `2.0`   | Significant changes             |

Minor editorial corrections do not necessarily require a version change.

## Document Status

| Status         | Meaning                                         |
| -------------- | ----------------------------------------------- |
| **Draft**      | Under development or review                     |
| **Active**     | Approved and currently applicable               |
| **Deprecated** | No longer applicable but retained for reference |

## Governance

Documents are maintained through GitHub version control and pull requests.

Changes should be reviewed by the relevant technical owner before being merged.

Git history provides the record of changes to the documents.

Any approved exception to a standard should be formally recorded and linked to the relevant standard.

## Evolving the Repository

This repository is intentionally kept simple and will evolve as GovTech's technology standards mature.

New categories, document types and governance processes should be introduced only when there is a clear need.

The objective is to maintain a trusted, reusable and accessible source of organisation-wide technology standards / guidelines for GovTech Sri Lanka.
