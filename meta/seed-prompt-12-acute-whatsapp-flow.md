---
type: meta
title: "Seed prompt - deliverable #12: Thabo's acute script as a WhatsApp conversation"
created: "2026-08-07"
updated: "2026-08-07"
tags: [meta, seed-prompt]
---

# Seed prompt - #12: Thabo's acute script as a WhatsApp conversation

A self-contained brief for a fresh workspace. The job: give the **cash track
of the approved #10 acute journey** the same channel-mock treatment #11 gave
the #09 repeat journey - the literal WhatsApp threads on Thabo's phone, one
interactive phone frame per phase, each with an annotation rail naming the
WhatsApp Business Platform mechanic and the persona constraint it honours.
#11 is the pattern exemplar; this brief records what transfers, what is
different about acute, and the decisions that need Tamsin before or during
the build.

## Read first, in this order

1. `CLAUDE.md` and `meta/writing-style-guide.md` - the schema and the prose rules.
2. `design-kit/journeys/sipho-whatsapp-flow.md` + `deliverables/11-sipho-whatsapp-flow.html` -
   the pattern to follow: ground rules, spec format, page chrome, and the
   script engine (step types: sys, date, inm, outm, undim, tap, photoTap,
   list, qr). Reuse the engine as-is; it already handles button-echo labels
   and the anyMain gate that keeps scenario threads in chat order.
3. `design-kit/journeys/to-be-acute-moments.md` + `deliverables/10-tobe-acute-moments.html` -
   the approved journey being dramatised. The copy in the deliverable's DATA
   object is the approved copy; the spec holds the rule canon from the #10
   passes. **Cash track only** (Thabo).
4. `design-kit/personas/cash-pay-acute-customer.md` - Thabo Mokoena, 31,
   Tembisa, uninsured, prepaid WhatsApp is his whole internet; today his
   6-year-old's chest infection and a paper script from the clinic.
5. `wiki/consumer-context/digital-access-and-whatsapp.md` - the channel
   constraints the annotations lean on.
6. `meta/punchlist.md` items 10 and 11 - the acute design assumptions and the
   #11 flags (Meta platform docs unsourced; prices illustrative) that carry
   straight into #12.

## The agreed process (confirmed by Tamsin on #11 - repeat it)

- Feature mapping for all phases is **proposed in the build and reviewed in
  situ** - do not ask for mapping sign-off up front.
- **One phase is mocked copy-complete first**; the other phases render as
  mapped stubs until Tamsin approves the pass. Only then build the full set.
- Register is **annotated**: phone frame plus rail. Threads render in
  **English for the executive audience**, with the standing note that
  production renders them in the customer's chosen language.
- Copy fidelity: the mock invents **no new service behaviour**. Where #10
  says "the chat asks me how", #12 decides only what that message literally
  looks like.
- Silence is the golden path; buttons offer change, never demand
  confirmation. Rand amounts are illustrative ⚠️. Platform-capability chips
  stay ⚠️ until the Meta docs are ingested.
- Walkthrough conventions: highlighted ▶ rows and dashed "tap to send" pills
  mark the scripted path; every phone has its own reset; every interaction is
  walked in headless Chromium before commit (zero console errors), with
  screenshots sent for review. Style-guide greps run on the spec before any
  handoff. Commit per pass, `vault:` prefix. #05-#11 are untouched.

## What is different about acute - design to these, don't copy #11

1. **The channel entry is a photo, not a subscription.** Thabo's journey
   starts with a paper script from the clinic, photographed INTO the thread -
   an outgoing media message from him, the one place the data cost runs his
   way. The 15-minute snap-to-price reply (punchlist 10(f)) is the answering
   beat, and ⭐ "I knew the price before I left the clinic gate" lands on it.
2. **Hours, not a monthly cycle.** One sick day: script sent from the clinic
   queue, price back before the gate, go-ahead, checked and filled, collected
   that afternoon - then the day-3 check-in, and P6 weeks later. Date pills
   and timestamps must carry that compression.
3. **The go-ahead reply is a gate, not a courtesy.** #10 rule: Thabo's
   "go ahead" is the legal and operational release - nothing is dispensed
   until it lands. This is the acute journey's one mid-flow confirmation,
   the counterpart of #11's sign-up read-back.
4. **Collection is the express counter, not a locker.** His store, express
   pickup zone, ready-within-30 (no slots on collection - slots are a
   delivery thing), order code at handover, counselling worked into the
   handover, pay what he already knew at the counter. No CCMDD, no Capitec.
5. **A child's medicine.** The paediatric weight check at the named final
   check, the dose in Thabo's language, and the unhurried pacing rule from
   the #10 passes: when the person is unwell, the copy never sells.
6. **No pushed reminders.** The day-3 check-in is the single touch, and his
   "no, he isn't better" answer escalates to a pharmacist phoning and a
   booked clinic visit with the price first - ⭐ "The pharmacy didn't
   disappear after the handover" is the moment that carries it.
7. **P6 "When I don't get better"** is badged "not part of every journey";
   on the cash side it is the visit plus the new script riding the same
   rails, with no moment of its own.
8. **∥ scenarios, cash side:** out of stock told before the taxi; the dead
   phone at the counter (ID fallback, punchlist 10(i)); the money isn't
   there today (hold-at-counter with price lock, dignity quiet, 10(g)).

Phases and moments to carry (cash track of #10): P1 At the doctor (⭐ price
before the gate) · P2 Choosing how I get it (go-ahead gate; symptom add-on
attach, 10(c)) · P3 Checked and filled ("Every check ran before it left the
building"; the named check is **Sindi** on the cash side - keep her) · P4 In
hand (⭐ "The counter was expecting me") · P5 Taking it ("Medication you
can't take wrong" + ⭐ day-3 check-in) · P6 When I don't get better (no
moment, cash) · ∥ When something breaks (no moment - #10 keeps failure
recovery momentless).

## Decisions for Tamsin (propose, then ask - do not decide alone)

1. **The thread identity.** #11 lives in "Dis-Chem Repeats". Acute is not
   the repeat service - propose a business-account name (suggest plain
   "Dis-Chem Pharmacy") and ask before building.
2. **Which phase mocks first.** Recommend P1 "At the doctor": it is the
   novel mechanic (photo-of-script in, snap-to-price out, much of the scene
   off-channel in the clinic - system pills will have to carry the room) and
   it holds the journey's marquee star. Confirm before scripting.
3. **Whether P1's off-channel weight** (the consult itself) reads better as
   system pills inside one phone or as a short framing paragraph above it.
4. Anything the P1 pass surfaces - the #11 precedent is that structural
   questions (there: P3+P4 compression) get parked in the spec's open
   questions for the full-set review, not resolved unilaterally.

## Files to create

- `design-kit/journeys/thabo-whatsapp-flow.md` - the content spec, same
  section order as the Sipho spec: ground rules · feature mapping table ·
  timeline · per-phase scripts · build notes · open questions.
- `deliverables/12-thabo-whatsapp-flow.html` - the build, #11's chrome and
  engine, persona strip swapped to Thabo (use #10's strip verbatim), spine
  of #10's seven phases with their mechanics.
- Bookkeeping on every pass: `meta/punchlist.md` (extend item 11 or add 12
  for anything new that is unsourced), `meta/research-log.md` one line per
  pass, `deliverables/index.html` card once live.

## Definition of done

One phase approved in situ, then all seven live and walked end-to-end in
headless Chromium with zero console errors; spec and build mirrored; style
greps clean; moments placed verbatim from #10 beside the messages that carry
them; honest no-moment notes where #10 assigns none; everything committed
and pushed to the session's designated branch - and nothing merged to main
without Tamsin's explicit say-so.
