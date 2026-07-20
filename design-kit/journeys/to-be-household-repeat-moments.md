---
type: journey
title: "To-be journey (v3) - the household repeat, in moments"
state: to-be
variant: aspirational
persona: "[[design-kit/personas/insured-chronic-multimorbid|Nomvula Khumalo]] (insured) / [[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] (cash)"
status: reviewed
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, journey/refill, journey/submit, journey/dispense, journey/collect, journey/deliver, journey/adhere, topic/chronic, region/za]
sources: [src-dc-complaints-jan2025, src-dc-social-media-research-2025, src-dc-store-future-interviews-2026]
created: "2026-07-17"
updated: "2026-07-19"
---

# To-be journey (v3) - the household repeat, in moments

Content spec and build source for `deliverables/09-tobe-household-repeat-moments.html`.
Deliverable 05 stays untouched as the deep blueprint reference. **The approved
copy lives in the deliverable's `DATA` object and is mirrored from here - edit
here first.** Structure v3 (2026-07-19, agreed with Tamsin) replaced the
phase-story + pulled-out-moment-cards layout with the reference structure
below; v2's copy is preserved in git history.

## The phase structure (v3)

Each phase is one section, modelled on the Need / Activity / pain reference
layout:

1. **H1 - phase name.** Strictly mechanical (Signing up · Repeats are due ·
   Adding to the order · Checked and packed · In hand · Taking it · ∥ When it goes wrong).
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
     packs; the two economies mirror structure (five sign-up steps each)
     while their content diverges honestly.
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
| P0 Signing up (once) | Set up once, on my terms, remembered every month after | I add my household · I add their medicines · I choose how it reaches us (channel only - time is proposed in each month's notice) · I choose how I pay (incl. the rejection rule: check first or charge-and-continue) · I check it once, and confirm (v3.1) | I start the conversation · I add my household · I choose how it reaches us (locker at Capitec - no Dis-Chem nearby; instruction language per member) · I choose how I pay (cash on collection opens the locker) · I confirm (v3.1) | "I told them once how I want it" (both, on confirm) | You type it again (verbatim, sentiment) · The digital front door is broken (verbatim, complaints) |
| P1 Repeats are due | Everyone's medicine keeps flowing on its own; complete clarity on the cost | The message arrives · I see the costs, clearly broken down · It keeps going - unless I say otherwise (first-person register, v3.1) | The message arrives · I see the price before I travel · It keeps going - unless I say otherwise, with the person-in-my-language fallback on its own line (v3.1) | "My medicine ordered itself" ⭐ · "The only thing I ever bought blind - not anymore" ⭐ (both economies) | The re-order dance (verbatim, complaints) · Money is a mystery until the end (verbatim, complaints) |
| P2 Adding to the order | The delivery carries the rest of the list | My order stays open · I add the household's shop (v3.1) | I can add other medicine (medicine incl. OTC only - no general retail; honest constraint) · I add what we need, in the chat (chat-commerce demo: numbered picks, free entry, clarifying question, priced options; v3.1) | "While we're here... - without going anywhere" (insured only; the cash addition agreed to carry no moment) | none in the research - honest note instead |
| P3 Checked and packed | Certainty it's exactly right, for everyone | Picked and checked (status lists the checks itself, named pharmacist; moment here) · Packed and sealed (QR issued at sealing; v3.1) | Picked and checked (mirrors insured; moment here) · Packed and sealed (locker PIN issued at sealing; v3.1 - P4 opener becomes a payday reminder) | "Every check ran before it left the building" (both) | The short pack, discovered at home (verbatim, complaints) · Errors read as safety threats (sentiment) |
| P4 In hand | In hand when promised, or told early | The morning message (informational, reply only to change) · I track it to my door ⭐ · I check it, with help one tap away (contents list; photo -> immediate human callback) · If the day doesn't suit me (one rule: changeable until the day before delivery - shared with the P2 additions cutoff) (v3.1) | The payday reminder · I pay, and the locker opens ⭐ (pay at counter, then PIN opens locker) · I check it before I go home (photo -> human callback, in language; locker outage lives in the ∥ band, fallback activity dropped) (v3.1) | "I could track it from Dis-Chem's door to mine" ⭐ (both) | Out for delivery - then nothing (verbatim, complaints) · Nobody picks up (verbatim, sentiment) · Too-precise promises (verbatim, SOTF) |
| P5 Taking it | Taking it right is the easy part | Unpack · Reminders on their terms (+ renewal signpost note) | Use the pack and the label · Ask WhatsApp, not the counter · Reminders that stop when told | "Medication you can't take wrong" (both) | Help flips into harassment (sentiment) · Digital-only instructions worry people (SOTF) |
| ∥ When it goes wrong | A way through, not a dead end | A claim declines · A stock-out | A shortage · A locker outage · A person, in the thread | "Medical aid said no. Dis-Chem said 'let's make a plan.'" ⭐ (insured only - the cash economy has no medical aid; its recovery paths carry no separate moment) | An exception kills the order (verbatim, complaints) · No fallback, no way through (sentiment) · A generic no one explained (sentiment) · After a failure, they leave (sentiment, R460) |

Concepts referenced inline in the key-moment copy: CarerConsent, Household
Medicine Cabinet (P0); Auto-Refill, Script Sync, Real-Time Transparency (P1);
The Standing Order (P2); The Named Check (P3); Real-Time Transparency (P4);
Made-for-Me Packaging (P5); the ∥ moment pays off the P0 payment preferences.

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
