---
type: journey
title: "To-be journey - the acute script, in moments"
state: to-be
variant: aspirational
persona: "[[design-kit/personas/time-poor-urban-professional|Aisha Patel]] (insured) / [[design-kit/personas/cash-pay-acute-customer|Thabo Mokoena]] (cash)"
status: draft
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, journey/submit, journey/validate, journey/dispense, journey/pay, journey/collect, journey/deliver, journey/adhere, topic/acute, topic/e-prescription, region/za]
sources: [src-dc-complaints-jan2025, src-dc-social-media-research-2025, src-dc-store-future-interviews-2026, src-dc-script-journey-interviews-2025]
created: "2026-07-26"
updated: "2026-07-26"
---

# To-be journey - the acute script, in moments

Content spec and build source for `deliverables/10-tobe-acute-moments.html`
(not yet built). Deliverable #07 stays untouched as the previous acute
treatment; this is a new moments journey built to the
[[design-kit/templates/moments-journey-template]] canon, including the full
v3.1 first-person activity register whose worked rule set lives in
[[design-kit/journeys/to-be-household-repeat-moments]]. **Approved copy will
live in the deliverable's `DATA` object, mirrored from here - edit here
first.** This spec records the decisions agreed with Tamsin on 2026-07-26;
activity copy is drafted phase by phase and reviewed before entering the
build.

## The story (the experience, agreed 2026-07-26)

**One line: you shouldn't have to be well to get your medicine.** Today's
journey is designed for a healthy person to navigate; this one is designed
for a sick one.

- **The burden moves.** The moment the doctor decides what you need, the
  getting-better has already started - everything between you and the first
  dose is Dis-Chem's job, not yours. Less about speed, more about care;
  speed is evidence of the care, not the point.
- **Register: today, not someday.** Urgency in the needs and the verbs. The
  emotional charge scales with how sick the person is - when you are unwell
  you just want to start getting better; everything else is just effort.
- **Trust is earned in one pass.** Unlike #09's standing relationship, this
  is a single audition at the customer's weakest. The arc: depleted and
  braced for effort -> surprised the hard parts are already handled ->
  better, and remembering who made it easy.
- **The human anchor (P3/P4):** the SA doctor's-trip ritual - "Saw doc.
  Getting meds on the way back. See you soon." The future state either
  **deletes the stop** (insured: the medicine races you home) or **makes it
  express** (cash: scan the QR, it is waiting at the counter, a pharmacist
  ready to explain, no queue).
- **Care beyond the counter (P5):** adherence as experience - check-ins,
  course-length reminders, plain-words side effects, a pharmacist on
  standby. Where Dis-Chem proves the relationship.
- **The dignity thread (cash):** implicit, never announced - surfacing
  especially around cost and generics. The price is offered before he has
  to ask; the generic is the smart choice, not the poor man's one; paying
  cash is a completely normal way to buy medicine; it speaks his language.
- **The integrated order, acute-flavoured:** suggested symptom-relief
  add-ons (OTC, vitamins, a Med-Lemon) that help while the script does its
  work - clinical companionship, not "while we're delivering" (#09's
  Standing Order is logistics; this is "what else helps?"). Activities
  only, NOT a moment; suggested where the order confirms; never a gate on
  the medicine, never upselling a sick person.

## Cast (agreed)

- **Insured: Aisha Patel** ([[design-kit/personas/time-poor-urban-professional]]),
  her own acute illness (UTI flared overnight). Her GP is a portal partner.
- **Cash: Thabo Mokoena** ([[design-kit/personas/cash-pay-acute-customer]]),
  a one-off antibiotic + paediatric syrup for his sick 6-year-old, clinic
  doctor NOT on the portal - he enters by Snap-a-Script from the clinic
  gate. A new face after Sipho carried #07 and #09.

## Phase set (agreed)

P1 **At the doctor** · P2 **The script lands** · P3 **Checked and filled** ·
P4 **In hand** · P5 **Taking it** · P6 **If it comes back** (badged "later,
only if it recurs") · ∥ **When something breaks** (parallel band).

Signposted out: repeats -> #09; script-expiry renewal -> Script Renew;
after-hours emergency -> footer scope note. #07's acute->chronic CCMDD
machinery stays behind the line in P6 (🔮 where applicable).

## The moment set (locked with Tamsin, 2026-07-26)

| # | Phase | Title (memory line) | ⭐ | Economies | Concept(s) inline |
|---|---|---|---|---|---|
| M1 | P1 | "My pharmacist was busy before I'd even left the doctor's" | ⭐ | insured only | The Pharmacy in the Room (+ The E-Script Token where natural) |
| M2 | P2 | "I knew the price before I left the clinic gate" | ⭐ | cash only | Snap-a-Script + The E-Script Token |
| M3 | P3 | "Every check ran before it left the building" | | both | The Named Check |
| M4a | P4 | "Saw the doc. Went straight home." | ⭐ | insured | The 60-Minute Fill |
| M4b | P4 | "The counter was expecting me" | ⭐ | cash | The 60-Minute Fill |
| M5 | P5 | "Medication you can't take wrong" | | both | Made-for-Me Medicine |
| M6 | P5 | "The pharmacy didn't disappear after the handover" | ⭐ | both | The Pharmacist Who Stays |
| M7 | P6 | "They noticed it kept coming back - before I did" | | both | The Pharmacy That Notices |

- ∥ carries **no moment** (agreed): its scenarios do the work, and they must
  be **acute-native, defined with Tamsin at that phase pass** - what actually
  goes wrong in an hours-long acute fill, not #09 hand-me-downs.
- P2 has **no insured moment** (the token-received + how-do-you-want-it beat
  was deliberately demoted to activities in both economies): Aisha's
  experience is won in the room, Thabo's at the clinic gate. Uneven on
  purpose.
- "Every check ran before it left the building" and "Medication you can't
  take wrong" are **signature lines reused from #09 deliberately** - the
  same promise landing in a second journey.
- M4a demotes the live driver-map from being the moment to being evidence
  inside it (the tracking is how she watches the race home, not the memory).
- The moment whys carry: M1 - treatment orchestration felt (job done in the
  room, nothing left to organise, pharmacist already working); M2 - price
  before travel + the dignity thread; M3 - the drive home is the building's
  clock, fast never means unchecked, a named human signs; M4a - the deleted
  stop; M4b - the express stop (no queue with a sick child, pharmacist
  explains at handover); M5 - understanding arrives with the medicine (the
  meal kit; child's dose in his language, icons, marked syringe); M6 - the
  day-3 "you should be feeling better - are you?", standby pharmacist,
  reminders to the last dose, cash side hears a human by phone; M7 - the
  gentle noticing, suggested never pushed, coda from transaction to
  relationship.

## Moment-selection notes (from #07, for the record)

From #07's nine stage cards: m1+m2 merged into M1 (record/consent demoted to
activity copy); m3 token demoted to P2 activities; m8 off-portal recast from
failure to Thabo's honest entry (M2); m5 dispense robotics demoted to P3
activities; m6 became the split M4a/M4b under the deleted-stop / express-stop
reframe; m7 adherence expanded into P5's two moments; m9 softened into M7
with CCMDD backstage. #07 itself is preserved untouched.

## Pain-point sources (hard rule: research only)

Titles + descriptions + verbatim quotes ONLY from:
- [[wiki/dischem/pharmacy-complaints-pain-points]] (C4C resolved complaints, Jan 2025)
- [[wiki/dischem/dischem-social-sentiment-trust-journey]] (public social sentiment, Dec 2025)
- [[wiki/dischem/store-of-the-future-customer-voice]] (SOTF interviews, Jan 2026)
- [[wiki/consumer-context/voice-of-customer-script-journey]] (script-journey IDIs, Oct 2025)
- acute/after-hours pages where relevant (e.g. [[wiki/dispensing-practice/after-hours-emergency-acute-access]])

Never inferred from personas, never manufactured; honest no-complaint note
where the research is silent. **P1 additions requested by Tamsin:** (a) the
unclear-script clarification call (pharmacy phones the doctor while the
patient waits) and (b) the counter re-key / profile hunt - both to be
anchored to the research pages at the P1 draft; if a pain is evidenced
without a verbatim quote, the card carries title + description + source and
no quote.

## Concept-set changes made for this journey (done, 2026-07-26)

- `08-concepts.html` extended to 16: **Made-for-Me Medicine** (15, "Made to
  be taken right.", meal-kit anchor, the can't-take-wrong ladder) supersedes
  **Made-for-Me Packaging** (06, archived in place); **The Pharmacist Who
  Stays** (16, "Your pharmacist stays until you are better.",
  doctor-who-phones-the-next-day anchor). Boundary: made-before-it-reaches-
  you vs happens-over-the-days-after. #09's P5 links repointed.

## Open items

- ∥ scenarios: to be defined with Tamsin at that phase pass (acute-native;
  includes "I'm worried about a side effect" - reactive, needs a decision -
  distinct from M6's proactive check-in).
- Express pickup counter (scan QR, priority handover, no dispensary queue):
  design assumption - ⚠️ + `meta/punchlist.md` entry when P4 is drafted.
- P1 clarification-call pain: verify research anchor at the P1 draft.
- Emotion curves, needs, and all activity copy: drafted phase by phase,
  reviewed by Tamsin before entering spec or build (P1 mocked copy-complete
  first; one key-moment block style-proofed before the rest).

## See also

- [[design-kit/templates/moments-journey-template]] - the canon
- [[design-kit/journeys/to-be-household-repeat-moments]] - the v3.1 register rule set
- `deliverables/08-concepts.html` - the concept set (now 16)
- `deliverables/07-tobe-acute-escripting-journey.html` - the previous acute treatment (preserved)
