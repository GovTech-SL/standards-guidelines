# UX and Service Design Guidelines

**Document ID:** UI-001<br>
**Status:** Draft<br>
**Version:** 1.0<br>
**Last Updated:** 2026-10-19

## Whole-of-government guidance for designing, building and assuring public digital services

Status: Draft for review (Jun 8th, 2026\) 

Audience: Service teams, designers, researchers, content designers, developers, product and programme leads, policy owners and senior sponsors across Sri Lankan government agencies.

---

## How to read these guidelines

This document uses three levels of obligation. Treat them consistently.

- **MUST** means the rule is mandatory. A service that breaks a MUST should not pass assurance.  
- **SHOULD** means strongly recommended. Deviating requires a recorded, defensible reason.  
- **MAY** means optional and context dependent.

Where this document says "**service**" it means any public-facing digital product, transaction, form, portal or app delivered by a government agency, including services delivered through the Sewa platform.

---

## Part 0\. Purpose and scope

These guidelines exist to make Sri Lankan government services usable, inclusive, trustworthy and consistent for every person on the island, in their own language, on the devices and connections they actually have.

**Scope rules**

- These guidelines MUST apply to all new government digital services and all significant redesigns of existing ones.  
- Agencies MUST treat these as the whole-of-government baseline. An agency MAY add stricter internal standards but MUST NOT fall below this baseline.  
- Where a service integrates with national platforms (digital identity, payments, interoperability), the relevant Part below takes precedence over local agency convention.

---

## Part 1\. Foundational principles: the Unified Civic Design Mandate

Every service MUST be designed against the following principles. They extend the original civic design mandate with the conditions specific to Sri Lanka.

1. **Start with real user needs.** Teams MUST base services on evidence from research with real users, not on stakeholder opinion or front-loaded requirements. Solve the whole problem a person has, not the slice that fits one agency.  
2. **Trilingual by default.** Services MUST treat Sinhala, Tamil and English as equal. Language parity is a principle, not a feature. See Part 5\.  
3. **Inclusive by default.** Services MUST be designed for the full range of human ability, age, literacy, language, location and economic circumstance. Inclusion is the starting assumption, not an add-on for a minority. See Part 4 and Part 6\.  
4. **Once only.** A person SHOULD give the government a piece of information once. Services SHOULD reuse data the person has already provided, with consent, rather than asking again. This mirrors the Estonian once-only principle and Singapore data pre-fill.  
5. **Privacy and consent by design.** Services MUST build in data protection from the first sketch, in line with the Personal Data Protection Act. Consent MUST be meaningful and legible to the person. See Part 7\.  
6. **Channel choice and assisted routes.** Digital MUST NOT be the only door. Every essential service MUST have an assisted or non-digital route for people who cannot use it independently. See Part 6\.  
7. **Earn trust.** Services MUST be clearly identifiable as official, secure and reliable. Trust is designed, not assumed. See Part 9\.  
8. **Consistency through a shared system.** Teams MUST build from shared, accessible components and patterns rather than reinventing them. See Part 8\.  
9. **Continuity across channels.** Visual, content and behavioural consistency MUST hold across devices, languages and offline touchpoints.  
10. **Listen and improve.** Teams MUST run services as living products: collect feedback, publish performance and iterate. See Part 11\.

---

## Part 2\. The maturity model and how agencies move up it

The five-level maturity model from the original note remains the assessment spine. It is restated here in brief and given an operating mechanism so that levels mean something.

- **Level 1 Reactive.** User issues handled in silos, decisions driven by stakeholder opinion, no dedicated design roles.  
- **Level 2 Tactical.** Occasional design research attached to isolated IT projects, no formal funding or career path for designers.  
- **Level 3 Strategic.** A coordinated design strategy, design roles formally established, shared toolkits used across teams.  
- **Level 4 Foundational.** Customer experience institutionalised, regular research with users, funding shifting toward cross-functional citizen journeys.  
- **Level 5 Customer-centric.** Services organised around measurable user satisfaction, human-centred practice ubiquitous, performance metrics in continuous use.

**Operating rules**

- Each agency MUST self-assess against this model annually and record a target level for the next cycle.  
- An agency at Level 1 or 2 MUST, as its next milestone, recruit or assign at least one dedicated design or research role and adopt the shared design system in Part 8\.  
- Maturity claims MUST be evidenced through the assurance mechanism in Part 11, not self-declared.

---

## Part 3\. The design lifecycle

The operational model unifies the Double Diamond, the agile delivery phases and the 18F research categories. It alternates between divergent exploration and convergent synthesis. This is retained from the original note and extended with local co-design requirements.

**1\. Discover (divergent, Discovery phase).** Explore the problem space and map the existing service without proposing solutions. Conduct foundational research, map the current state and uncover the workarounds people already use.

- Teams MUST recruit research participants who reflect Sri Lanka's diversity: Sinhala, Tamil and English speakers, rural and urban, a range of ages, people with disabilities and people with low digital literacy.  
- Interviews SHOULD follow a structured arc that builds trust before it asks for stories, and SHOULD happen in the participant's own environment and language.

**2\. Define (convergent, transition to Alpha).** Synthesise findings into a clear, evidence-based problem statement, defined personas including personas representing users with disabilities and prioritised user stories.

**3\. Develop (divergent, Alpha phase).** Explore alternative solutions through rapid low-cost experimentation: card sorting, co-design workshops and low-fidelity prototypes. Fail fast and cheaply before writing production code.

- Prototypes that will be tested with the public SHOULD be tested in all three languages, not only English.

**4\. Deliver (convergent, Beta and Live phases).** Build the chosen solution to scale as a secure, transaction-ready service. Run moderated usability testing, manual and automated accessibility audits and live analytics on task success, error and satisfaction. Publish performance and iterate continuously.

---

## Part 4\. Accessibility: the standard and how to meet it

The original note refers to WCAG in general terms. This Part sets a hard, enforceable target, because every leading government has one.

**The standard**

- All government services MUST conform to **WCAG 2.2 Level AA** as the baseline. This aligns Sri Lanka ahead of a 2.0 or 2.1 floor.  
- Teams SHOULD adopt as many AAA criteria as are practical, especially for high-stress, high-volume services.  
- The four WCAG principles are non-negotiable: content MUST be perceivable, operable, understandable and robust.

**Building accessibly**

- Teams MUST use progressive enhancement: start with semantic HTML, ensure core content works without CSS and build an experience that works without JavaScript, then enhance.  
- Components MUST be keyboard operable, screen-reader compatible and tested with assistive technology, not only with automated checkers.  
- Colour or sensory characteristics MUST NOT be the sole way meaning is conveyed.

**Proving it**

- Every service MUST publish an **accessibility statement** describing its conformance, known issues and how to report problems. This creates accountability.  
- Teams MUST run both automated and manual accessibility testing.  
- Accessibility MUST be tested separately in Sinhala, Tamil and English. Passing in English does not prove the other languages pass, because screen-reader support and text behaviour differ by script.

---

## Part 5\. Language and content design (Sinhala, Tamil and English)

This is the largest gap in the original note and the most important section for Sri Lanka. Most internet users prefer their first language, and a single-language service excludes a large share of the population.

**Language parity**

- Services MUST offer Sinhala, Tamil and English with a comparable experience in each. A translated version MUST NOT be a thinner or delayed version of the primary one.  
- Content MUST reach parity before launch. A service MUST NOT ship in one language with the others promised later.  
- Each language version SHOULD live under its own clear path (for example /si/, /ta/ and /en/) so people and search engines can identify it.

**The language selector**

- A language toggle MUST appear in a consistent position in the global navigation, in the upper corner of the screen.  
- The selector MUST label each language in its own script (සිංහල, தமிழ், English), never with a flag.  
- The selected language MUST persist across the journey and SHOULD be remembered for return visits.

**Script and typography**

- Sinhala and Tamil are complex scripts with their own height, spacing and rendering behaviour. Layouts MUST be tested for these scripts, not just adapted from a Latin layout.  
- Teams MUST specify and bundle reliable Unicode Sinhala and Tamil web fonts and MUST NOT assume the user's device has them. Provide a fallback for low-capability devices.  
- Line height, letter spacing and font size MUST be validated per script. The WCAG text-spacing requirement MUST hold without breaking the layout in any language.  
- Layouts MUST accommodate text expansion. Tamil and Sinhala strings are often longer than the English equivalent.

**Plain language and cognitive accessibility (retained and extended)**

Cognitive capacity drops when people are in a hurry, distracted, tired or anxious, which describes many high-stress public interactions. The following spatial and typographic rules from the original note are retained.

- Body copy MUST be left-justified to give a consistent visual starting point, with generous white space and minimal distraction.  
- Italics SHOULD be used sparingly. Underlining MUST be reserved for interactive links.  
- All-caps styling MUST NOT be used for body text, headings or emphasis. Reserve capitalisation for acronyms and initialisms.  
- Filenames MUST use CamelCase rather than blank spaces to avoid broken characters in system URLs.  
- Heading levels MUST be visually and programmatically distinct, forming a logical outline (WCAG 1.3.1, 2.4.6).  
- Data tables MUST use repeating header rows, MUST NOT split cells across page breaks and MUST be built with real table features rather than manual spaces or tabs.  
- Complex graphs MUST be paired with a data table. Alt text MUST be concise and accurate and MUST avoid redundant phrasing such as "image of".  
- Decorative elements MUST be marked as decorative (WCAG 1.1.1) so screen readers skip them.

**Translation governance (new)**

- Translation MUST be done or reviewed by qualified human translators who understand the local context. Machine translation alone MUST NOT be the published version.  
- Plain-language and reading-level targets MUST be set for each language against local literacy, not against English norms.  
- Tone, examples, date formats and imagery SHOULD be localised, not only translated.

---

## Part 6\. Inclusion and reaching everyone

Accessibility for people with disabilities is necessary but not sufficient. Inclusion in Sri Lanka also means rural and urban users, older people, low literacy, low digital literacy and the cost of devices and data.

**Assisted digital and channel choice**

- Every essential service MUST have a supported route for people who cannot complete it on their own: an agent, a kiosk, a counter or a phone line.  
- Teams MUST design the assisted route deliberately, not leave it as an afterthought. An agent completing a service on a person's behalf is a designed journey.  
- As a principle Sri Lanka SHOULD need alternative modes of access other than a digital identity for people who do not use the app.

**Connectivity and devices**

- Services MUST be usable on low-end smartphones and slow or intermittent connections. Set a performance budget and test on representative devices, not on a developer's high-end phone.  
- Pages MUST be optimised for size and speed: compressed images, efficient code and content that loads progressively.  
- Where a script cannot render on a low-capability device, teams SHOULD provide an image-based or simplified fallback so the content is never lost.  
- Services SHOULD tolerate dropped connections gracefully, saving progress where possible so a person does not lose a half-finished form.

**Literacy and confidence**

- Content MUST be written for the lowest reasonable reading level in each language.  
- Services SHOULD use clear, predictable layouts and consistent navigation, which help people with low digital literacy and people with cognitive disabilities alike.  
- Teams SHOULD co-design with seniors, people with disabilities and rural users and validate with them before launch, following the Singapore practice of engaging these communities directly.

**Proactive and life-event design**

- Where the law and data sharing allow, services SHOULD move from reactive forms toward proactive delivery organised around life events, in the manner of Estonia and Finland. A person SHOULD be offered a benefit they are entitled to rather than having to discover and apply for it.

---

## Part 7\. Identity, data and interoperability

This Part covers the national platform layer the original note did not address. It is critical as the Sri Lanka Unique Digital Identity (SLUDI) and related infrastructure come online.

**Designing for digital identity**

- Services that authenticate people MUST design the sign-in journey for clarity and recovery, and MUST handle the case of a person who does not yet have a digital identity. Lack of an identity MUST NOT block access to an essential service. Provide a fallback route.  
- Authentication patterns SHOULD be consistent across government so people learn one model, in the manner of app interoperability.  
- Biometric and high-assurance flows MUST be explained in plain language so people understand what is being captured and why.

**Consent and data protection by design**

- Services MUST comply with the Personal Data Protection Act and MUST design for it from the start, not retrofit it. Privacy by design and security by design are the SLUDI operating principles and MUST be the default for all services.  
- Consent screens MUST be specific, legible and honest. A person MUST be able to understand what data is shared, with whom and why, and MUST be able to decline non-essential sharing.  
- Services MUST practise data minimisation: collect only what the service needs.  
- Personal or sensitive data MUST NOT be placed in URLs or query strings.

**Once only and interoperability**

- Services SHOULD reuse data the person has already given the government, with consent, through the national interoperability framework rather than asking again.  
- Pre-filling known data SHOULD be used to reduce effort and error, in the manner of Singapore data pre-fill.  
- Acknowledgements SHOULD be sent through the channel the person expects (SMS, email, push or in-app), so they know an action succeeded.

---

## Part 8\. The government design system

Process guidance without shared building blocks means every agency rebuilds the same components and accessibility regresses each time. Every leading government runs a design system as its backbone. Sri Lanka MUST have one.

- A whole-of-government design system MUST provide accessible-by-default components, patterns and design tokens, conformant to the WCAG 2.2 AA target in Part 4\.  
- The system MUST support Sinhala, Tamil and English in every component, including correct script rendering, the language selector and right-sized typography per script.  
- Teams MUST build from the shared system rather than reinventing components. Building from scratch MUST be the recorded exception, not the norm.  
- The system MUST be maintained as a living product with versioning, documentation and a contribution route for teams, in the manner of the GOV.UK Design System and USWDS.  
- Components MUST follow progressive enhancement and MUST ship with usage guidance and accessibility notes.

---

## Part 9\. Trust, safety and security UX

Given the risk of fraud around government identity and payments, trust MUST be designed explicitly.

- Services MUST be clearly and consistently identifiable as official through domain, branding and visual signals, so people can tell a real service from a fake one.  
- Services SHOULD use a consistent, recognisable government domain convention so the address itself signals authenticity.  
- Interfaces MUST avoid patterns that train people into unsafe habits. For example, official messages MUST NOT ask people to follow links to enter credentials in ways that are indistinguishable from phishing.  
- Services MUST be built secure by design and SHOULD coordinate with the national computer emergency response team on threats and incident response.  
- Error, security and downtime states MUST be communicated in plain language in all three languages, so a problem does not become a trust failure.

---

## Part 10\. Communication and stakeholder engagement

A strong design process is wasted if its findings cannot move decision-makers. This Part retains the original communication pillar and is unchanged in intent.

**Translate design into administrative language**

- Frame interface problems as cost drivers. Quantify how high error rates raise call-centre volume, lengthen backlogs and force costly manual correction. Present design fixes as cost prevention.  
- Present early usability testing as risk reduction. Frame failing fast with a cheap prototype as a way to prevent public software failures and reputational damage.  
- Show how design helps the agency meet legal duties such as accessibility and data protection obligations.

**Presentation philosophy**

- Slides MUST be literal: real screenshots, journey maps or video of user sessions. Abstract stock imagery, clip art and visual metaphors MUST NOT be used.  
- Slides SHOULD carry a single short line of text and support images or statistics to keep focus on the speaker. Detailed charts and statistics included  SHOULD be shared after the presentation..  
- Teams SHOULD show working software or an interactive prototype rather than static decks during UI/UX reviews and any stakeholder meetings. 

**Tailor to the audience**

- Policy makers and agency directors: focus on compliance, public trust, legal risk and budget efficiency. Use short high-level sessions and video of real user struggles to build empathy.  
- Product and programme leads: focus on engagement metrics, roadmaps and delivery timelines. Use dashboards, case studies and a clear mapping to the backlog.  
- Developers and engineers: focus on technical constraints, clean code, accessibility requirements and bug resolution. Provide a prioritised list of issues with device and browser data, clear acceptance criteria and specific design-system references.

---

## Part 11\. Governance, assurance and measurement

This section establishes the operational mechanisms for the maturity model, focusing on governance, assurance, and measurement.

**Assurance**

- Significant services MUST pass a service assessment against these guidelines before public launch and at major milestones. An assessment checks user needs, accessibility, language parity, privacy and trust.  
- Government SHOULD run recurring usability and accessibility checks across services, in the manner of Singapore's annual mystery-shopper checks, and SHOULD publish scorecards across agencies to drive improvement.

**Roles and ownership**

- Each service MUST have a named owner accountable for its user experience, accessibility and language parity.  
- Policy owners, senior sponsors, technical teams and design teams MUST share responsibility, with accessibility considered from the earliest stage rather than at the end (a shift-left approach).

**Measurement**

- Services MUST track task success rate, error rate, completion time and user satisfaction, and SHOULD track these per language so a weaker language version is visible.  
- Performance data SHOULD be published to support transparency and continuous improvement.

**Design-to-development handoff**

- All design work MUST be handed over to development teams in accordance with the *UI Design-to-Development Handoff Reference Guide* (see Part 12 below). This ensures a clear, unambiguous contract between design and engineering, reducing rework and design debt.  
- Services MUST NOT pass the launch readiness checklist (Appendix A) unless all Required handoff criteria have been met and formally signed off by design, product and development leads.

---

## Part 12\. Design-to-development handoff standards

A gap between design intent and built implementation is a common source of project delay and design debt. These standards formalise the handoff process and define what constitutes a complete, acceptable transfer of design files to development teams. The full detail lives in the *UI Design-to-Development Handoff Reference Guide*, which is the binding handoff standard for the programme. This Part summarises it and sets the governance hooks.

**Purpose of the handoff reference guide**

The *UI Design-to-Development Handoff Reference Guide* establishes the acceptance criteria for transferring design files to development. It covers five areas plus a governance section:

1. **Flow coverage and architecture**: all screens, the prototyped happy path, edge cases and format constraints (such as identity documents kept in card format) documented end-to-end.  
2. **Component architecture and functional states**: complex components decomposed into named sub-components, with every interactive element documented across the nine-state matrix (default, hover, focus, active, disabled, loading, error, empty, success) and its aria-\* behaviour. This area also absorbs feedback, notification and navigation states.  
3. **Fluid scalability and responsive design**: macro and micro (container query) reflow, fluid typography and spacing, overflow and truncation rules, and a 44x44px minimum touch target. The 390px, 768px and 1440px breakpoints are retained as reference anchors, not as the only target sizes.  
4. **Accessibility**: WCAG 2.2 AA evidenced in the file through contrast, heading hierarchy, text alternatives and colour-independence.  
5. **Design tokens and delivery format**: all styling bound to published tokens with no hardcoded values, SVG asset export, a single structured Figma file and final, approved copy.

All items marked **Required** MUST be present and verified before a handoff is considered complete. Items marked **Recommended** SHOULD be included for production-quality delivery unless explicitly descoped in writing and agreed formally.

**How this integrates with the guidelines**

The handoff standards operationalise the design principles in Parts 4, 5, 6, 8 and 9 of this document:

- **Component architecture and functional states** enforce the error, loading and downtime states that Part 9 requires be communicated clearly, and the visible focus state that Part 4 requires for keyboard operability.  
- **Accessibility** ensures all design files evidence WCAG 2.2 AA compliance as required in Part 4\.  
- **Design tokens and delivery format** enforce consistency through the shared design system required in Part 8, and the content-finality and language-parity rules in Part 5\.  
- **Fluid scalability and responsive design** ensures all services work across the connectivity and device landscape described in Part 6, and accommodate text expansion in Sinhala and Tamil as required in Part 5\.

**Roles and responsibilities**

- **Design teams** MUST deliver all Required handoff items in the specified Figma structure before transferring to development. Design work that does not meet the Required criteria will be returned.  
- **Product owners** MUST sign off that all content is final, accurate and approved before development begins. Placeholder copy or content holding is a handoff blocker.  
- **Development leads** MUST verify that all Required criteria have been met and formally accept or reject the handoff. A rejection MUST include a specific list of gaps that block development start.  
- **Design and development leads together** MUST agree on any deviations from the requirements and log them as formal design debt tickets in the backlog before the development sprint begins. No exceptions are made verbally; all exceptions must be visible in the product backlog.

**Delivery format and sign-off**

- All designs MUST be delivered in a single Figma file with a clear page structure organised by user flow and journey, a dedicated component-matrix page and linked specifications.  
- Prototype links MUST be provided for all primary and alternative flows, with starting points set using native starting frames rather than visual arrows.  
- All design tokens MUST be published to the shared design library before submission.  
- A formal sign-off record MUST be completed and signed by the design lead, product owner and development lead, confirming that all Required criteria have been reviewed, accepted or agreed as deferred design debt.

**What happens if handoff criteria are not met**

If a design handoff does not meet the Required criteria:

1. The receiving (development) team MUST formally reject it with a dated list of missing items and the specific Part reference from the *UI Design-to-Development Handoff Reference Guide*.  
2. Design and development leads MUST meet to agree either to complete the missing items before development starts (with a revised handoff date) or to log the gaps as design debt tickets with agreed timeline impact.  
3. No development MUST commence until either outcome (1) or (2) has been documented and agreed in writing.  
4. Any agreed design debt tickets MUST be added to the product backlog and prioritised alongside ongoing development work.

**Vendor and contracted team expectations**

When design is contracted to external vendors or agencies, the same handoff standards apply. The contract scope and statement of work MUST reference the *UI Design-to-Development Handoff Reference Guide* as a binding deliverable specification. Any deviation from the Required criteria must be flagged as a contract change and priced accordingly.

---

## Appendix A. Launch-readiness checklist

A service SHOULD NOT go live until all of these are true.

* Built on evidence from research with representative users across languages, regions, ages and abilities.  
* Conforms to WCAG 2.2 AA, verified by automated and manual testing.  
* Tested with assistive technology, not only automated checkers.  
* Sinhala, Tamil and English at full parity, each tested separately.  
* Language selector consistent, persistent and labelled in each script.  
* Sinhala and Tamil typography and rendering validated on real low-end devices.  
* Usable on slow or intermittent connections within a set performance budget.  
* An assisted or non-digital route exists for people who cannot use it independently.  
* Authentication has a fallback for people without a digital identity.  
* PDPA-compliant: privacy by design, data minimisation and clear consent.  
* Clearly identifiable as official, secure by design.  
* Accessibility statement published with known issues and a way to report problems.  
* Passed a service assessment.  
* Passed design handoff: all Required criteria in the UI Design-to-Development Handoff Reference Guide met and signed off by design, product and development leads.  
* Metrics in place for task success, error, completion time and satisfaction, per language.

## Appendix B. Language and content quick check

* No language is a thinner or delayed version of another.  
* Content reviewed by qualified human translators, not machine translation alone.  
* Reading level set against local literacy in each language.  
* Layout accommodates text expansion in Sinhala and Tamil.  
* Plain-language and cognitive-accessibility rules applied in every language.

## Appendix C. Glossary

* **Assisted digital:** a supported route (agent, kiosk, counter or phone) for people who cannot use a service independently.  
* **DPI:** digital public infrastructure, the shared national platforms for identity, payments and data exchange.  
* **Life-event design:** organising services around moments in a person's life rather than around agency structures.  
* **Once-only principle:** a person gives the government a piece of information only once and it is reused with consent.  
* **Progressive enhancement:** building a resilient core that works everywhere, then layering on enhancements.  
* **Service assessment:** a review of a service against these guidelines before launch and at milestones.  
* **WCAG 2.2 AA:** the Web Content Accessibility Guidelines, version 2.2, conformance level AA. The accessibility baseline for these guidelines.

## Appendix D. Sources and reference frameworks

**Whole-of-government governance and standards**

* Sri Lanka Digital Government UX and Service Design Guidelines (this document).  
* UI Design-to-Development Handoff Reference Guide: the binding standard for design file delivery from design teams and vendors to development teams (referenced in Part 12).

**International practice**

* United Kingdom: the GOV.UK Service Standard, the Government Design Principles, the GOV.UK Design System with its accessibility strategy and the Digital Inclusion Action Plan pillars of skills, access, services and trust.  
* Estonia: X-Road, e-ID, the once-only principle, the CVI design system (WCAG 2.2 AA) and proactive life-event delivery.  
* Singapore: Digital Service Standards, the Singapore Government Design System, the Oobee accessibility tool, A11y Playground, annual usability checks and Singpass and MyInfo data reuse.  
* Finland: the Act on the Provision of Digital Services, the Suomi.fi national architecture, life-event based development and EU accessibility requirements.  
* United States: USWDS, Section 508, the 21st Century IDEA Act and WCAG 2.2 alignment.  
* India: multilingual and low-end-device practice for non-Latin scripts, a useful comparator for trilingual delivery.

**Sri Lankan context**

* Sri Lanka Unique Digital Identity (SLUDI), MOSIP-based, biometric, consent-based and built privacy by design.  
* Personal Data Protection Act No. 9 of 2022 (amended 2025\) and the Data Protection Authority.  
* Lanka Interoperability Framework and the National Digital Government Policy.  
* Electronic Transactions Act No. 19 of 2006 and the national computer emergency response team.
