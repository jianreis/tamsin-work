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

1. **H1 - phase name.** Strictly mechanical (Signing up · The order assembles ·
   The order window · Prepared · In hand · Taking it · ∥ When it goes wrong).
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
| P0 Signing up (once) | Set up once, whole household, never asked again | Start with the people · Enrol the repeats · Set how the service runs · Review and confirm | Start the conversation · Add the household · Choose collection and payment · Confirm | "I told them once how I want it" (both, on confirm) | You type it again (verbatim, sentiment) · The digital front door is broken (verbatim, complaints) |
| P1 The order assembles | Medicine keeps itself going; cost known before commitment | Receive the notice · See the cost and the cover · Change something, if needed | Receive the message · See the price before travelling · Reply only to change | "My medicine ordered itself" ⭐ · "The only thing I ever bought blind - not anymore" ⭐ (both economies) | The re-order dance (verbatim, complaints) · Money is a mystery until the end (verbatim, complaints) |
| P2 The order window | The delivery carries the rest of the list | Open the pending order · Add the household's shop | Medication only on this route (honest constraint) | "While we're here... - without going anywhere" (insured only) | none in the research - honest note instead |
| P3 Prepared | Certainty it's exactly right, for everyone | Follow the status · Open the check · See it packed | Receive the checked status · Packed for the household | "Every check ran before it left the building" (both) | The short pack, discovered at home (verbatim, complaints) · Errors read as safety threats (sentiment) |
| P4 In hand | In hand when promised, or told early | Confirm the window · Track it to the door · If the day changes | Receive the PIN · Pay, and the locker opens · The fallback | "I could track it from Dis-Chem's door to mine" ⭐ (both) | Out for delivery - then nothing (verbatim, complaints) · Nobody picks up (verbatim, sentiment) · Too-precise promises (verbatim, SOTF) |
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
- **Philosophy:** Trust > Convenience > Speed.
- **Economies:** insured (Nomvula) / cash (Sipho), toggled.
- **Out of scope, signposted:** script-expiry renewal (Script Renew concept);
  after-hours acute (deliverable #07).

## Open questions

- Partner-bank locker (Capitec) with cash-payment release, the order window's
  retail-attach mechanics, split delivery on stock-out: design assumptions,
  ⚠️-flagged in the build, logged in `meta/punchlist.md` item 9.
- The cash economy's ∥ track carries no key moment (the moment's title is
  medical-aid-specific). If a cash recovery moment earns its keep later, it
  needs its own agreed memory line first.

## See also

- [[design-kit/templates/moments-journey-template]] - the canonised pattern
- [[design-kit/templates/concept-card-template]] - the harness the key-moment
  block descends from
- `deliverables/05-tobe-future-state-journey.html` - deep blueprint reference
- `deliverables/08-concepts.html` - the concept set referenced inline
