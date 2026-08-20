---
type: journey
title: "To-be journey (v3) - the household repeat, in moments"
state: to-be
variant: aspirational
persona: "[[design-kit/personas/insured-chronic-multimorbid|Nomvula Khumalo]] (insured) / [[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] (cash)"
status: reviewed
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, journey/refill, journey/submit, journey/dispense, journey/collect, journey/deliver, journey/adhere, topic/chronic, region/za]
sources: [src-dc-complaints-jan2025, src-dc-social-media-research-2025, src-dc-store-future-interviews-2026, src-dc-call-reminder-walkthrough-2026, src-dc-e2e-script-journey-friction-summary]
created: "2026-07-17"
updated: "2026-08-19"
---

# To-be journey (v3) - the household repeat, in moments

Content spec and build source for `deliverables/09-tobe-household-repeat-moments.html`.
Deliverable 05 stays untouched as the deep blueprint reference. **The approved
copy lives in the deliverable's `DATA` object and is mirrored from here - edit
here first.** Structure v3 (2026-07-19, agreed with Tamsin) replaced the
phase-story + pulled-out-moment-cards layout with the reference structure
below; v2's copy is preserved in git history. v3.2 (2026-08-12, agreed with
Tamsin): P5 reminder agency corrected to match the CarerConsent principle
that *it steps too far only if the carer drives it* - an adult under
CarerConsent (Grace; Sipho's mother) sets and stops her own reminders; the
carer's off-switch covers only his or her own and the children's. v3.3
(2026-08-12, agreed with Tamsin): P0 insured "One date for everyone" carries
the Script Sync anchor - the plan knows which medicine can't move; Zanele's
stays on its cycle (the pharmacist's call, no legal claim made in-journey)
and the top-up moves to Nomvula + Grace, fixing the earlier copy that
topped up Zanele herself. v3.4 (2026-08-12, agreed with Tamsin): cash P0
"One date for everyone" becomes "Two dates, one memory" - Script Sync is
offered and declined. The only shared date is the CCMDD programme's, which
sits in the week before payday, so Sipho keeps his tablets on payday for
affordability and the chat tracks both dates. Downstream the cash journey
follows his collection only, and the latent CCMDD bugs are fixed: Dis-Chem
no longer tops up, clinically checks or stock-manages the programme parcel
it never dispenses (P1 notice + price, P3 check and moment why, P5 labels
and moment why, ∥ stock-out, ∥ script-expiry now his own script). v3.5 (2026-08-12, agreed
with Tamsin, insured side): P2 "I add the household's shop" opens the whole
store (browse/search anything; history suggestions and specials are the
helper, not the boundary). Handover QR re-timed: nothing issued at sealing -
the QR arrives with P4's morning-of message, which explains the handover
(driver scans it; backup PIN if the scan fails; already paid, so scan and
handover is the whole exchange). P4's "If the day doesn't suit me" moves to
P3 as "Fulfilment flexibility" (until the day before: shift the day or
window, or switch to collection) - P4 stays about the delivery itself.
v3.6 (2026-08-12, agreed with Tamsin, cash side): P0 opener gets an origin
story (invited by message after an in-store collection; the pharmacist
points him to WhatsApp) and the bank-trip logic moves to "I choose how it
reaches us". P1 moment why carries the counter dignity (finding out at the
till, in front of a queue, that the money isn't enough). PIN re-timed to
match the insured QR fix: nothing at sealing - the PIN arrives when the
parcel is physically in the locker, with the retrieval steps; the counter
payment is what activates the PIN (pay-then-PIN, no pre-payment - unpaid
parcels are held then returned, per the ∥ money-isn't-there scenario). P3
gains cash Fulfilment flexibility (shift the date if payday moves, switch
locker / store / costed delivery, until the day before). P4 locker moment
why strengthened: he travels knowing it is there - transparency as
certainty, no taxi fare spent on hope. v3.7 (2026-08-12, agreed with
Tamsin, insured side): the Script Sync top-up cost threaded through the
money messaging - the P0 confirm read-back includes what the first month
costs with the one-off top-up next to the normal month, and the P1 cost
breakdown carries the first-month top-up as its own line item. Cash needs
nothing (declined sync, no top-up). v3.8 (2026-08-16, agreed with Tamsin,
cash side, driven by the #11 channel pass): the sync offer generalises to a
date-move mechanic - his own dispensed tablets can move to any day of the
month via a small once-off costed top-up that stretches his supply, priced
before he decides, never touching the programme parcel. He declines the
programme-date sync (it sits in the week before payday and costs more to
bridge) and uses the same mechanic to move his day from his first-fill date
to the 28th, after payday - buying affordability with the offer he was made.
Payday leaves all customer-facing service copy: the service works only in
days the customer chooses and is never told what the date means; payday
remains his own reasoning, in his voice and in the journey's conceptual
frame. v3.9 (2026-08-17, agreed with Tamsin, cash side, driven by the #10
feedback pass): the locker credential aligns to the QR-first convention set
in #10 (see punchlist 10(l)) - the in-locker message brings a QR code with
a short backup PIN beneath it, covering failed scans and delivery over SMS;
pay-then-activate is unchanged (the counter payment activates the code),
and the pickup is a scan at the locker with the PIN as the typable
fallback. The insured side already carried QR + backup PIN (v3.5) and needs
nothing. v3.10 (2026-08-19, agreed with Tamsin): a **current-friction
summary panel** added between the spine and the phases - the journey's
major friction themes consolidated in one view (see "Current-friction
summary panel" below). Themes 1-5 are Tamsin's own wording, supplied
2026-08-19 and sense-checked against the research; themes 6-7 added by
agreement in the same session.

## The phase structure (v3)

Each phase is one section, modelled on the Need / Activity / pain reference
layout:

1. **H1 - phase name.** Strictly mechanical (Signing up · Repeats are due ·
   Adding to the order · Checked and packed · In hand · Taking it · ∥ When something breaks).
   Badges: "once, not per cycle" (P0), "parallel - any phase" (∥).
2. **H2 Need.** The customer's stake in this phase, first person, one or two
   spare sentences with the key phrases bolded. This replaces v2's orienting
   sentence; H1 + Need do the scene-setting together.
3. **H2 Activities.** Discrete, **named** activities (H3-level), each a short
   functional description one level more concrete than a story paragraph -
   what the person does, what the screen or thread shows, what their options
   are. Written per economy (toggle; one economy rendered at a time). Honest
   constraints stated plainly (the locker route carries medication only).
   - **Key moments are embedded in the activities**: an activity that carries
     a moment gets a callout block directly beneath it - the memory-line
     title, ⭐ where it is a moment of truth, and a short prose "why this is a
     key moment" with the first-order payoff highlighted (`.why`) and **the
     underlying concepts referenced inline in the copy as links** to
     `08-concepts.html` (not as detached pills).
   - The activity copy carries its own "why" woven into the prose - no
     detached tags, no visible citation slugs.
   - **First-person register (v3.1, 2026-07-19, agreed with Tamsin, applied to
     P1 insured first and rolling out phase by phase):** each activity is
     written from the customer's POV in customer language - never service
     vocabulary ("swap a line" is a mockup button, not a sentence) - to the
     formula *what I see or do, then the benefit that has for me* as a closing
     line. Discreteness is hard: one job per activity (in P1, all money lives
     in the costs activity; the notice activity carries none). Day-level
     specificity is avoided where the service cannot promise it - the standing
     arrangement is a time-of-month window, not a weekday; a concrete day may
     appear only where a specific order's day is genuinely settled (the
     one-week-out notice). Language references in first-person copy are "my
     language" (the customer wouldn't name their own language; also avoids a
     vault-wide isiZulu/Zulu style call - scoped to this journey). A human
     fallback gets its own line, separate from the control sentence.
     Further rules distilled from the P0/P1 passes (apply to all phases):
     each persona's motivation is their own, researched constraint (Nomvula:
     overwhelm of managing many people's medicine; Sipho: no time or money
     for extra trips - medicine rides the payday bank trip), with a bridging
     line connecting need to action; the service is named on first mention
     ("Dis-Chem's repeat service"); consent is an already-granted fact whose
     scope is stated (order, pay, collect), never an in-flow event; sign-up
     fixes the channel, never the time - windows/days are proposed in each
     month's notice; nothing implies settings can't change ("remembered",
     never "never asked again"); the service doesn't stop if the customer
     doesn't reply; each activity closes on its benefit line; all money
     behaviour lives in one activity per phase; backstage concepts (e.g. the
     CCMDD bridge) stay behind the line, out of customer copy; channel
     texture shows in the verbs (app: I select, one screen; WhatsApp: the
     chat asks, I reply); language choices attach to the content ("medicine
     instructions in her language"), never to a carrier like labels or
     packs; the two economies mirror structure (six sign-up steps each)
     while their content diverges honestly.
     Rules added across the P2-P5 and ∥ passes: benefit lines state the
     customer's FELT payoff, never the business view of it ("the checking
     isn't invisible anymore" is a business line; the mother's relief is the
     benefit); relevant detail lives in its relevant activity (the handover
     credential is issued where the box seals, not re-introduced at the
     door); statuses carry their detail inline - never "open/reply to see
     more"; say "out of stock", never "short" (implies a half-supply); when
     something breaks the human comes by PHONE on the cash side (one reply:
     call me) and the loud human-not-bot beat is research-sourced;
     failure-band activities are scenarios, not steps, and failures needing
     only detection (short pack, late parcel) live in their phases - the ∥
     band is for failures needing a decision; premium mechanics (dose
     sachets) are a PAID opt-in chosen at sign-up while the adherence basics
     (iconised labels, printed fridge sheet, in-language) are free - money
     implied, never priced in copy; and the concept-visibility check: if a
     concept the journey depends on (Script Sync's one date) never visibly
     happens in an activity, that is a missing step, not backstage
     machinery.
4. **H2 Current-state pain points.** The today-contrast, consolidated per
   phase. **Hard rule:** every pain point has a **title**, a **description**,
   and a **verbatim quote from the research where one exists**. Pains come
   ONLY from the research pages - never inferred from personas, never
   manufactured:
   - [[wiki/dischem/pharmacy-complaints-pain-points]] (C4C resolved
     complaints, Jan 2025)
   - [[wiki/dischem/dischem-social-sentiment-trust-journey]] (public social
     sentiment, Dec 2025)
   - [[wiki/dischem/store-of-the-future-customer-voice]] (SOTF interviews,
     Jan 2026)
   Attribution renders human-readable ("verbatim, Dis-Chem resolved-complaints
   analysis, Jan 2025") with the vault path in the tooltip. **Where the
   research records no complaint for a phase, the page says so honestly**
   (P2 does this) instead of inventing one.
5. **Behind the line.** Unchanged from v2: collapsed blueprint panel -
   frontstage/backstage lanes, capability chips with vault citations (🔮
   reform, ⚠️ assumption), regulatory line only where a non-negotiable bites.

Spine, economy toggle, persona strip and emotion curve unchanged. Spine moment
counts derive from the active economy's embedded moments.

## Approved copy

The full approved copy (needs, named activities, key-moment blocks, pain
points with quotes) is maintained in the deliverable's `DATA` object -
`deliverables/09-tobe-household-repeat-moments.html` - which this spec
governs. Summary of the approved skeleton:

| Phase | Need (gist of) | Activities (insured) | Activities (cash) | Key moments | Pain points (source) |
|---|---|---|---|---|---|
| P0 Signing up (once) | Set up once, on my terms, remembered every month after | I add my household · I add their medicines · One date for everyone (Script Sync made visible: the plan anchors on Zanele's cycle - the pharmacist's call - and the costed first-month top-up moves to Nomvula + Grace, v3.3) · I choose how it reaches us (channel only - time is proposed in each month's notice; incl. the Made-for-Me dose-pack opt-in) · I choose how I pay (incl. the rejection rule: check first or charge-and-continue) · I check it once, and confirm (read-back includes the first month's cost with the one-off top-up, v3.7) (v3.1) | I start the conversation (origin story: invited by message after an in-store collection, pharmacist points to WhatsApp, v3.6) · I add my household · Two dates, one memory (sync offered, v3.4/v3.8: her CCMDD date can't move - the programme delivers around the 18th; his own dispensed medicine can move to any day via a small once-off costed top-up - never the programme parcel - priced before he decides, v3.8; he passes over the 18th and moves his day to the 28th, after payday, buying affordability with the same mechanic; the chat tracks both dates, and payday stays his logic, never a date the service is told, v3.8) · I choose how it reaches us (locker at Capitec - no Dis-Chem nearby; bank-trip logic moved here from the opener, v3.6; instruction language per member) · I choose how I pay (cash on collection opens the locker) · I confirm (v3.1) | "I told them once how I want it" (both, on confirm) | You type it again (verbatim, sentiment) · The digital front door is broken (verbatim, complaints) |
| P1 Repeats are due | Everyone's medicine keeps flowing on its own; complete clarity on the cost | The message arrives · I see the costs, clearly broken down (first-month top-up as its own line in the breakdown, v3.7) · It keeps going - unless I say otherwise (first-person register, v3.1) | The message arrives (opens a few days after her programme parcel; his order only, v3.4) · I see the price before I travel (his tablets only - no CCMDD line, v3.4; moment why carries the counter dignity, v3.6) · It keeps going - unless I say otherwise, with the person-in-my-language fallback on its own line (v3.1) | "My medicine ordered itself" ⭐ · "The only thing I ever bought blind - not anymore" ⭐ (both economies) | The re-order dance (verbatim, complaints) · Money is a mystery until the end (verbatim, complaints) |
| P2 Adding to the order | The delivery carries the rest of the list | My order stays open · I add the household's shop (whole store browsable/searchable; suggestions + specials as the helper, not the boundary, v3.5) | I can add other medicine (medicine incl. OTC only - no general retail; honest constraint) · I add what we need, in the chat (chat-commerce demo: numbered picks, free entry, clarifying question, priced options; v3.1) | "While we're here... - without going anywhere" (insured only; the cash addition agreed to carry no moment) | none in the research - honest note instead |
| P3 Checked and packed | Certainty it's exactly right, for everyone | Picked and checked (status lists the checks itself, named pharmacist; moment here) · Packed and sealed (no credential at sealing, v3.5) · Fulfilment flexibility (until the day before: shift day/window or switch to collection; moved from P4's "If the day doesn't suit me", v3.5) | Picked and checked (his order only - the programme packs hers, v3.4; moment here) · Packed and sealed (no PIN at sealing, v3.6) · Fulfilment flexibility (shift the date if payday moves, switch locker / store / costed delivery, until the day before, v3.6) | "Every check ran before it left the building" (both) | The short pack, discovered at home (verbatim, complaints) · Errors read as safety threats (sentiment) |
| P4 In hand | In hand when promised, or told early | The morning message (window on track + the handover QR with the how-to and a backup PIN, v3.5) · I track it to my door ⭐ · I check it, with help one tap away (contents list; photo -> immediate human callback) (v3.1; "If the day doesn't suit me" moved to P3 as Fulfilment flexibility, v3.5) | The parcel is in the locker (QR + backup PIN + retrieval steps issued when the parcel physically lands, v3.6 timing, v3.9 credential) · I pay, and the locker opens ⭐ (payment activates the code; scan at the locker, PIN as typable fallback, v3.9; moment why: he travels knowing it is there, v3.6) · I check it before I go home (photo -> human callback, in language; locker outage lives in the ∥ band, fallback activity dropped) (v3.1) | "I could track it from Dis-Chem's door to mine" ⭐ (both) | Out for delivery - then nothing (verbatim, complaints) · Nobody picks up (verbatim, sentiment) · Too-precise promises (verbatim, SOTF) |
| P5 Taking it | Taking it right is the easy part | I unpack (month of per-dose sachets - paid opt-in added to P0 A3; moment) · A question, whenever it comes up (household medicine cabinet + with-service pharmacist) · Reminders on my terms (routed to the dose-holder; children's to the carer; Grace's are hers to set and stop - the carer never drives an adult's reminders, v3.2) (+ renewal signpost note; v3.1) | Clear labels, and a sheet for the fridge (iconised labels on the packs Dis-Chem fills; the fridge sheet covers the programme parcel it doesn't, v3.4; adherence without the price tag; moment, why reworked - no sachets on cash) · I ask WhatsApp, not the counter (the cabinet, channel-shaped) · Reminders that stop when told (voice notes for his mother; fridge sheet primary; her stop is hers, his is his, v3.2) (v3.1) | "Medication you can't take wrong" (both) | Help flips into harassment (sentiment) · Digital-only instructions worry people (SOTF) |
| ∥ When something breaks | Things always go wrong; hear it early, make a plan together - never a dead end | My medical aid says no ⭐ · Out of stock · The delivery fails (new scenario: re-deliver tomorrow or collect at a STORE, same QR at the counter) · My script runs out (Script Renew handoff: renewal started weeks early; pharmacist's pending-renewal options deliberately unspecified - reg ⚠️ in open-questions) · A person, before I ask (v3.1) | Out of stock (never "short" - implies a half-supply; his order only, v3.4) · The locker is down · My script runs out (his own script - hers is the clinic's, v3.4; told before travelling) · A person phones me back (call-me-back, not chat - when things break, a human phones) (v3.1) | "Medical aid said no. Dis-Chem said 'let's make a plan.'" ⭐ (insured only - the cash economy has no medical aid; its recovery paths carry no separate moment) | An exception kills the order (verbatim, complaints) · No fallback, no way through (sentiment) · A generic no one explained (sentiment) · After a failure, they leave (sentiment, R460) |

Concepts referenced inline in the key-moment copy: CarerConsent, Household
Medicine Cabinet (P0); Auto-Refill, Script Sync, Real-Time Transparency (P1);
The Standing Order (P2); The Named Check (P3); Real-Time Transparency (P4);
Made-for-Me Medicine (P5); the ∥ moment pays off the P0 payment preferences.
(2026-07-26, agreed with Tamsin during the #10 concept pass: Made-for-Me
Packaging was archived in `08-concepts.html` and superseded by the broader
**Made-for-Me Medicine** - the ladder from free in-language labels/guides up
to paid dose sachets. This journey's P5 inline links repointed to the live
concept; the P5 copy itself is unchanged.)

## Current-friction summary panel (v3.10, agreed 2026-08-19)

A static panel between the spine and the phases: the journey-wide major
friction themes of the as-is repeat experience, consolidated from the
research. It renders once (not per economy). Each theme carries a title, a
short description, and a human-readable attribution with the vault paths in
the tooltip (same convention as the per-phase pain cards). Provenance:
**themes 1-5 are Tamsin's own summary wording** (supplied 2026-08-19,
sense-checked against the research in-session); **themes 6-7 were added by
agreement** in the same session, from the sense-check's gap findings. The
closing synthesis line is Tamsin's.

| # | Theme | Grounded in |
|---|---|---|
| 1 | **High, repetitive effort** - every month the customer re-confirms the same information (collection vs delivery, address or store, generic preferences, payment method); nothing is remembered as a standing instruction. | complaints (cluster A) · sentiment ("type essays…") · repeat-reminder walkthrough. The "generic preferences" item is evidenced by the monthly PackMyMeds submission form, which re-asks the generics choice each month - stakeholder confirmation (Tamsin, 2026-08-19), recorded in [[src-dc-packmymeds]]. |
| 2 | **Recurring counter and collection failures** - parcels not truly ready on arrival, incomplete or incorrect, rebuilt live at the counter; visible, time-consuming, confidence-eroding. | repeat-reminder walkthrough (packages not ready · incorrect items · package search) · complaints (cluster C) · sentiment (collections ~93% negative). |
| 3 | **Low customer autonomy** - repeated calls and reminders to prompt action or re-clarify what was already provided; administrative not clinical, intrusive not supportive; control sits with the system and call centre. And the flip side (added 2026-08-19, agreed): autonomy isn't only taken away - customers who try to self-manage digitally hit app and WhatsApp re-order flows that loop and dead-end, so control defaults to the call centre because the self-service alternative is broken. | repeat-reminder walkthrough (phone reminder experience) · sentiment (comms overload / harassment after opt-out) · complaints (cluster A: the self-service alternative loops and dead-ends). |
| 4 | **Opaque order status** - no clear capture confirmation (call orders), progress between submission, preparation and readiness invisible; customers can't confidently plan collection or delivery. | e2e friction synthesis (no-progress-visibility through-line) · repeat-reminder walkthrough (unreliable communication) · SOTF ("waiting is fine - being unsure isn't"). |
| 5 | **Inconsistent experience across channels** - confirmation and progress messages differ by channel; each repeat order can feel different even when nothing changed; customers fall back to calls and in-person checks. | e2e friction synthesis (stages 1-2) · complaints (no single owner across app/WhatsApp/store/call-centre) · repeat-reminder walkthrough (Adherence Centre vs store sync). |
| 6 | **Money is a mystery** *(added)* - unexpected levies, co-payments discovered at collection, funds depleted without warning, scheduled-medicine pricing that reads as arbitrary between stores; nobody explains the levy even after payment. | complaints (cluster E, Priority 5) · repeat-reminder walkthrough (co-payments card + Tamsin's after-payment sticky) · e2e friction synthesis. |
| 7 | **A failure ends the journey** *(added)* - an exception (stock, a claim, an address) kills the order silently rather than opening a resolution path; chasing it means phoning into a void; a single unrecovered failure is where customers defect. | complaints (cluster B: the returned-over-a-co-payment delivery) · sentiment ("called 4 different dispensaries… nobody is picking up"; defection at R460 more). |

Synthesis line (Tamsin's): **"Getting repeat medication feels like a
recurring task, with unreliable outputs - not a dependable service."**

## Journey metadata

- **Title:** Script Re-imagined - the household repeat, in moments
- **Use case:** the household medicine manager. Never "Gogo" - the mother is
  **Grace Khumalo** ([[design-kit/personas/insured-chronic-multimorbid]]).
- **Nomvula's household (updated 2026-07-19, agreed with Tamsin):** Grace
  Khumalo (76, chronic hypertension, **her own medical scheme with partial
  chronic cover** - Nomvula sees Grace's cover and shortfall in the same
  breakdown), daughter **Zanele** (12, ADHD, chronic Schedule 6 script) and
  son **Lethabo** (7, asthma, chronic). Two children on chronic medication,
  carried through the whole journey. Delivery preference: home delivery,
  chosen as a channel at sign-up; the two-hour morning window (09:00-11:00)
  is proposed in each month's notice, never fixed at sign-up - she can't
  know every future morning.
- **Philosophy:** Trust > Convenience > Speed.
- **Economies:** insured (Nomvula) / cash (Sipho), toggled.
- **Out of scope, signposted:** script-expiry renewal (Script Renew concept);
  after-hours acute (deliverable #07).

## Open questions

- Partner-bank locker (Capitec) with cash-payment release, the order window's
  retail-attach mechanics, split delivery on stock-out, and OTC add-ons on the
  locker route (with chat-commerce free entry and price-before-travel): design
  assumptions, ⚠️-flagged in the build, logged in `meta/punchlist.md` item 9.
- The cash economy's ∥ track carries no key moment (the moment's title is
  medical-aid-specific). If a cash recovery moment earns its keep later, it
  needs its own agreed memory line first.

## See also

- [[design-kit/templates/moments-journey-template]] - the canonised pattern
- [[design-kit/templates/concept-card-template]] - the harness the key-moment
  block descends from
- `deliverables/05-tobe-future-state-journey.html` - deep blueprint reference
- `deliverables/08-concepts.html` - the concept set referenced inline
