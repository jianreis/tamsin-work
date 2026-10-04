---
type: source
title: "Dis-Chem Integrated Health - Customer-Facing Capability Model (L0-L4, MECE) - WIP"
url: "n/a (internal spreadsheet, 260713_Health_Capability_Map_WIP_NL.xlsx)"
author: "Dis-Chem App Health Squad"
publisher: "Dis-Chem (internal)"
published: "2026-07-13"
retrieved: "2026-10-04"
source_kind: company
reliability: B
tags: [domain/dischem, domain/digital, journey/submit, journey/pay, journey/refill, journey/adhere, region/za]
---

## Summary

The App Health Squad's working capability map for the **customer-facing** side of
Dis-Chem Integrated Health. It runs from L0 to L4 and says it is MECE (no
overlaps, no gaps). It describes "what each capability is and its boundary - not
how it's delivered". Two tiers:

- **Tier 0 - Platform Spine:** capabilities every domain depends on (Identity,
  Access & Consent; Episode & Care Continuity).
- **Tier 1 - Job-Based Domains:** Health Records & Insight; Care Access; Care
  Delivery - Customer-Facing Edge; **Medicines & Pharmacy**; Financial &
  Funding; Engagement & Wellbeing; Support & Navigation.

Each L4 row carries a definition, a **status per channel** (App, Web, WhatsApp,
In-store: Live / Planned / Gap / N/A), the enterprise dependency it relies on, and
an ownership note (squad-owned, squad-built clinically co-owned, and so on).

Code in the work-to-be-done catalogue: **HSQ**.

**Reliability B (justified):** company-primary working document, authoritative
for what the squad has mapped and how it rates current status. It is marked WIP,
so statuses can move. Customer-facing only: it does not cover staff tools,
dispensary operations, regulation or content production.

Full text extract: `sources/extracts/hsq-health-capability-map-2026-07-13.txt`.

## Key claims

- The map is customer-facing only and defines capabilities by boundary, not delivery.
- Script submission/upload: Live in App, Planned on Web, Live on WhatsApp (photo
  upload via chat), Live in-store (staff-assisted). Depends on the PMS (Unisolv/Vexall).
- Script status tracking: Live in App and WhatsApp; Gap in-store (no in-store status display).
- Repeat script request: Live in App, WhatsApp and in-store (staff-assisted).
- Medication-specific refill reminder: Live in App, Gap on WhatsApp. Depends on the nudge engine.
- **Proactive renewal (provider-initiated, ~6 weeks ahead): Gap** on every channel.
- **Adherence packaging subscription (multi-med, dated packets): Gap.**
- **Two-way pharmacist messaging: Gap** on App, Web and WhatsApp (in person only).
- **Customer-initiated generic/price comparison: Gap.** **Upfront cost estimate: Gap.**
- Prospective eligibility check at booking/script: Live in App, Gap on WhatsApp.
- In-app payment and split payment (medical aid + card): Planned.
- **Pause/resume a medication subscription: Gap.**
- **OCR extraction of prescription details from an uploaded photo: Gap** ("today's upload is manual entry only").
- **Pre-dispensing safety questionnaire: Gap** on digital channels (verbal in-store only).
- Medication list view: Live in App, Gap on WhatsApp and in-store.
- Dependant/family member profiles: Planned (App/Web), Gap (WhatsApp/in-store).
- Guardian/proxy authority assignment: Planned. **"Acting for a dependant" mode: Gap** - "permission exists (proxy assignment) but doesn't yet propagate".
- Sensitivity-graded consent (e.g. mental health, HIV): Gap - "current model is single-tier consent".
- **Content tied to an active script or diagnosis: Gap** ("printed leaflet only today").
- **Language & accessibility preference: Gap** (in-store "informal, staff-dependent").
- **Contact/communication preference settings: Gap.**
- **Context-carrying handoff to call centre: Gap** on every channel.
- WhatsApp profile: "Gap (no profile, phone number only)".

## Verbatim excerpts

> "Definitions describe what each capability is and its boundary - not how it's delivered" (sheet header)

> "Tier 0 - Platform Spine | Capabilities that no job-based domain owns individually because every domain depends on them" (Tier 0 row)

> "'Acting for a dependant' mode ... Identity governance - permission exists (proxy assignment) but doesn't yet propagate" (L4 row, Delegated Access)

> "OCR/document processing service - not yet built; today's upload is manual entry only" (L4 row, Script Lifecycle)

## Used in

- [[design-kit/templates/work-to-be-done-catalogue-template]]
- `deliverables/14-work-to-be-done-catalogue.data.js` (Seen-in code HSQ)
