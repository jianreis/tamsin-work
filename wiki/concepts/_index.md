---
type: index
title: "Concepts — index"
domain: concept
updated: "2026-06-13"
tags: [index, concept]
status: draft
---

# Concepts — cross-cutting

Short hub notes that crisply define a recurring idea, state the **design stance**
for this project, and link OUT to the domain pages that treat it in depth. They
synthesise and point — they do not duplicate domain detail. Each ends with
`## In this vault` (the links out) and `## Design stance`.

## Pages

### Journey concepts
- [[wiki/concepts/moment-of-truth|Moment of truth]] — the make-or-break interactions in the Rx journey (first submit, funding result, fulfilment hand-over, first dose).
- [[wiki/concepts/medication-adherence|Medication adherence]] — the core outcome; non-adherence as system friction + stigma, not apathy.
- [[wiki/concepts/omnichannel-fulfilment|Omnichannel fulfilment]] — in-store / click-collect / locker / courier / on-demand as one fabric, with stores as fulfilment nodes.
- [[wiki/concepts/e-prescription-token|E-prescription token]] — the QR/token e-script model: issue → SMS/email → scan at any pharmacy → new token per repeat.
- [[wiki/concepts/chronic-medicine-flywheel|Chronic-medicine flywheel]] — register once → auto-dispense → proactive refill → deliver/collect; the retention engine.
- [[wiki/concepts/graceful-failure|Graceful failure]] — designing the unhappy paths (rejected, out-of-stock, invalid script, delivery failed, power out) as the real test.

### Trust & access
- [[wiki/concepts/trust-and-dignity|Trust & dignity]] — trust is channel-specific, stigma matters, the pharmacist is the trust anchor, privacy by default.
- [[wiki/concepts/channel-ladder|Channel ladder]] — WhatsApp → USSD → SMS → app → assisted/human; never app-only; data-frugal, resumable, offline-tolerant.

### Commercial & legal
- [[wiki/concepts/identity-and-consent|Identity & consent]] — verifying the patient and lawful consent for health data (POPIA), incl. proxy/caregiver authority.
- [[wiki/concepts/price-transparency|Price transparency]] — SEP means no price competition on the medicine; compete on service and show cost (SEP + dispensing fee + co-pay) before commit.
