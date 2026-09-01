---
type: source
title: "SOTF training & operating documents — the launched-with record (May-July 2026)"
url: "internal://dischem/sotf-training-pack-2026"
author: "SOTF programme / Dis-Chem training team"
publisher: "Dis-Chem — SOTF training"
published: "2026-07-06"
retrieved: "2026-09-01"
source_kind: company
reliability: A
tags: [domain/dischem, domain/ux, project/sotf, journey/submit, journey/dispense, journey/collect, journey/pay, topic/automation, region/za]
---

# Summary

The training pack documenting the Store of the Future **as launched and
operated**, not as planned: the Health Hub playbook/workshop deck (dated 6 Jul
2026; filename 13 May, so revised through launch), the Clinic Learner Guide v6
and Pharmacy Learner Guide v7 (both 30 Jun 2026), the grouped-scripts
collection process, and the interim online-collections process (final 3 Jul
2026). Together these are the ground truth for how the live journeys work,
what was deferred, and where operational workarounds already exist.
Reliability A — official operating procedure. Note: a "Delivery Process
Training" file supplied in the same intake duplicated the online-collections
content; no delivery-specific process document is held. The interim
online-collections doc names **Melrose and Irene** as the stores it supports —
evidence of a second SOTF site by mid-2026.

# Key claims

## Live journey spines
- Pharmacy (9 steps): submit script → get a ticket at the Hub → roam until
  called → drop-off counter → (cover call-back option) → roam until called →
  order prepared (pick-and-pack dashboard) → collection at pharmacy collection
  counter → payment at front-shop POS. Payment at the dispensary is NOT live —
  Magna bag + POS if payment is due, brown bag if not.
- Clinic (11 steps): book (app/web/call centre/Hub) → ticket → waiting room →
  pre-consult with Clinic Care Assistant (vitals, consent, POC tests) →
  waiting room → nurse consultation (virtual GP if required) → pre-filled
  e-script sent to dispensary queue → medication packed with priority →
  collect at dispensary → pay (clinic services at Hub or POS; clinic consult
  and medication are two separate payments).
- Cover: Life & Funeral = book → ticket → wait/browse → called → cover room →
  schedule health check. Health & Gap = explore at Hub → request a call back.

## Queue mechanics as launched
- Qmatic runs ticketing; identification Better Rewards-first (old and new
  cards work), SA ID/passport fallback; digital (in-app/WhatsApp/SMS) or
  printed tickets; estimated wait pulled live.
- Pharmacy missed-call rule: three call-outs — miss one, drop one place; miss
  two, bottom of queue; miss three, ticket closed and the customer must go to
  the Hub to be re-queued. Notifications at each step.
- Clinic/Cover late rule: called at start time, again shortly after, final
  call at +10 minutes; no-show within 1 minute of final call = missed;
  customer rebooks via Hub. If the CCA hasn't called by +10, the clinic is
  running late and the booking is NOT missed. True emergencies pause the
  queue (counter close protocol) with notifications to affected customers.
- "Walk-in" is banned language: "customer without an appointment". H-tickets
  exist as the Hub fallback queue for failed journeys (target state: H-code
  identifies which unhappy journey occurred).

## Roles and service model
- Hub Advisor (7-star concierge: never leave a customer alone, walk them to
  the service, approved lexicon, personalised greeting) and Hub Administrator
  (reception, payments, calls, clinic/cover admin, C4C case capture).
  13 Hub use cases from booking/check-in to cover lead generation.
- Store calls route to the Hub first; pharmacy calls centralised to the
  Adherence Centre via IVR; clinic calls to a clinic call centre.

## Deferred at MVP (per the playbook)
- No digital self-scan script submission; app collection goes to the "Return
  and online collection counter", not the Hub; omnichannel ordering
  browser-based, delivery-only for the first release; retail media
  non-personalised; Hub staff cannot create clinic/cover appointments in
  Qmatic Concierge (kiosk/SAP only); no ticket resend/reprint.

## Workarounds already accreted (evolution targets)
- **Interim online collections (3 Jul 2026):** non-integrated pharmacy online
  orders need a manual VIP "A-ticket" created by the Hub Advisor in Qmatic
  Concierge, the number handwritten for the customer, manually transferred to
  Collections, and manually closed after V-Sign — "until the final online
  collection journey and automated queue flow are confirmed"; intended future
  flow is a QR scan straight into the right queue.
- **Grouped scripts (care facilities / one collector, many scripts):** manual
  suffix-linked tickets (P001.1, .2 …) tracked on the Vexall dashboard —
  "an operational workaround until we have a system solve".
- Unhappy-journey catalogues run long: 12+ Hub queue/booking failures, 15
  pharmacy, 11 clinic — CRM duplicate profiles, Qmatic/dashboard/V-Sign/
  Healthforce outages, wrong-queue arrivals, post-service queries all have
  manual solves via the Hub.

## Systems glossary (live stack)
- Qmatic (ticketing: Counter, Concierge, Calendar 2.0 portals), V-Sign
  (signatures; 4 pharma + 1 customer per script), Vexall pick-and-pack
  dashboard, Unisolv (dispensing), Healthforce (clinic PMS), SAP CRM/CDC +
  Fiori (profiles, C4C cases), GKPOS (payment), Braze (notifications).

# Verbatim excerpts

> "Refer to customers who arrive without a booking as a 'customer without an
> appointment', not a 'walk-in'" (Health Hub playbook, lexicon guidance)

> "If they miss the third call-out, the ticket will be closed and the customer
> will no longer be called." (Pharmacy learner guide, missed queue call)

> "This remains an interim manual process until the final online collection
> journey and automated queue flow are confirmed." (Interim online
> collections, 3 Jul 2026)

> "Important: This is an operational workaround until we have a system solve
> for this process." (Grouped scripts collection)

> "The interim process supports Melrose and Irene until this is automated."
> (Interim online collections)

> "Better health starts here - at your Health Hub." (SOTF lexicon)

# Used in
- [[wiki/dischem/store-of-the-future-programme]]
