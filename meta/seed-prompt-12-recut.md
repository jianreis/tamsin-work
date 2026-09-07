---
type: meta
title: "Seed prompt - #12 re-cut: bring Thabo's WhatsApp flow up to the #11 conversational practice"
created: "2026-09-07"
updated: "2026-09-07"
tags: [meta, seed-prompt]
---

# Seed prompt - #12 re-cut to the #11 practice

A self-contained brief for a fresh workspace. The job: deliverable #12
(`deliverables/12-thabo-whatsapp-flow.html`, spec
`design-kit/journeys/thabo-whatsapp-flow.md`) dramatises the #10 acute cash
journey as literal WhatsApp threads - and it was built on 2026-08-07,
**before** the practice the #11 re-sync session set on 2026-08-16: the
sourced conversational-design canon, the visual ladder with cart mechanics,
the ever-present-change rule, and the rest. #12's copy was aligned to the
2026-08-16 *renames* on 2026-08-18, but its conversation design is
pre-canon throughout - no product cards, no one-decision turns, no footers,
platform chips still marked unsourced. Tamsin has asked for the learnings to
be applied to Thabo's journey. This brief records what to hold #12 against
and the process rules. Tamsin may bring further comments into the session -
the checklist below is the floor, not the ceiling, and her comments take
priority where they conflict.

## Read first, in this order

1. `CLAUDE.md` and `meta/writing-style-guide.md` - the schema and the prose rules.
2. `wiki/ux-service-design/conversational-design-whatsapp.md` - the sourced
   canon and WhatsApp platform limits (ingested 2026-08-16, punchlist 11).
   The applied checklist at its end is the per-message gate for this re-cut.
3. `design-kit/journeys/sipho-whatsapp-flow.md` +
   `deliverables/11-sipho-whatsapp-flow.html` - the worked example of the
   practice: ground rules 2-7 (canon, visual ladder, ever-present change,
   illustrative names, sourced chips) and the process log of the 2026-08-16
   session. The #11 engine now carries the **cards** step type (product
   cards with 🛒 add-to-order echoes), the FOOT footer constant, the shared
   change-menu builder, and the sheet-close fix - port these into #12's
   engine rather than re-inventing them.
4. `design-kit/journeys/thabo-whatsapp-flow.md` +
   `deliverables/12-thabo-whatsapp-flow.html` - the artefact being re-cut:
   ground rules, message tables, script engine, walkthrough conventions.
5. `design-kit/journeys/to-be-acute-moments.md` - the approved #10 journey,
   **as of 2026-09-07**: the route and unit are renamed **counterless
   collection** (2026-09-07 sweep), the concept behind the named check is
   **The Pharmacist Beyond the Counter** (formerly The Named Check), and
   the QR-first code convention is in (punchlist 10(l)). Cash track (Thabo)
   only.
6. `meta/punchlist.md` items 10 (especially (j) counselling opt-out, (k) the
   acute-delivery legal question, (l) QR-first codes), 11 (platform sourcing
   + the pending commerce verify; prices AND product names illustrative),
   16 (cross-supplier screening boundary) and 18 (the 2026-09-07 renames and
   which links were already repointed).

## The audit - hold every #12 message against these

The house rules earned message by message with Tamsin on #11 (2026-08-16).
For each, audit #12, propose the re-cut wording in chat, and get her
approval before writing it into the spec.

1. **One turn, one job; one decision per message.** Split any bubble holding
   two offers, or an explanation plus a question. Sequential small choices
   beat one big one.
2. **The question sits last**, then the floor is yielded.
3. **Buttons are the user's next words** - max 3 and 20 characters (sourced),
   3 a ceiling not a norm, binary choices get 2, no emoji or icons in labels
   or questions, exploration labels while exploring, commitment labels only
   on a confirmation turn. Acute's **go-ahead gate is the one commitment
   turn** - the release button belongs there and nowhere else.
4. **Read back any change to money, medicine or dates for an explicit yes**
   before it takes effect - the go-ahead itself, and any mid-day change
   after it.
5. **The visual ladder.** Rung 1 everywhere: emoji as functional anchors
   (about one per line), native formatting, monospace codes - the price
   reply, statuses (✅ 📦) and dose lines (🌅 🍽 ✔) all take it. Rung 2 where
   the choice is between physical products: **catalogue product cards** with
   add-to-order and 🛒 cart echoes - in #12 that is the symptom add-on
   attach (10(c)) and any priced OTC options. Rung 3 declined - and Thabo's
   photo of the paper script is the deliberate exception running the other
   way (his outgoing media, annotated as such).
6. **Real product names, owners never guessed.** The child's antibiotic is
   named (illustrative ⚠️, availability and pricing unverified) and owned by
   the child, with the dose entry speaking to the carer; OTC add-ons are
   (Household) unless someone says otherwise; phone, pack and shelf match
   word for word.
7. **Change is ever-present, never offered.** Transfer the principle, not
   #11's artefact: propose an acute-sized standing footer (what a one-day
   order can still change, and until when - packing is the natural cutoff)
   and the menu behind it, then demonstrate it once as an optional branch
   that resets. Footer wording and cutoff are Tamsin's call.
8. **User-pulled beats pushed - the answer-not-ambush test.** #10's symptom
   add-on attach is service-initiated by design; keep the behaviour but
   shape the message to pass: it rides the order he just placed, arrives
   once, reads as help with the diagnosis in front of them, products as
   cards he can ignore. If it still smells like an ambush, park it for
   Tamsin rather than deciding alone.
9. **Internal reasoning stays in the rail.** The service speaks only in
   facts the customer gave it. Sharp edges in #12: the money-isn't-there
   scenario (hold-at-counter, price lock - facts, never sympathy about his
   wallet) and the counselling opt-out register (10(j)).
10. **Checks explained in plain lines that answer "checked what?"** - the
    #11 C1 pattern, with the paediatric weight check carrying Tamsin's own
    wording: the dose is checked against the child's weight, so a parent
    collects with confidence. Sindi stays the named pharmacist; the concept
    link is The Pharmacist Beyond the Counter.
11. **Credentials are issued when the thing they open exists** - the order
    code arrives when the order is actually ready, not as an earlier
    promise. And per punchlist 10(l) the code is **QR-first with a short
    typable backup** - #12 predates that convention; check whether the
    08-18 alignment carried it and fix if not (that one is drift, not
    style).
12. **Platform chips upgrade.** #12 was built while the Meta docs were
    unsourced; its chips still say so. Re-point them at the 2026-08-16
    ingest ([[conversational-design-whatsapp]] and the src-wa-* notes),
    keeping ⚠️ only on the commerce surface (catalogue / cart / product
    cards) pending its docs verify (punchlist 11).

Also sweep vocabulary against current #10: **counterless collection** (the
2026-09-07 rename - punchlist 18 records that #12 was NOT swept), the
Pharmacist Beyond the Counter links (18 says #12's were repointed - verify),
and any other drift a diff of the current #10 spec against #12's beats
surfaces. What #12 already does well - the photo entry, the snap-to-price
beat, the compressed one-day timeline, the day-3 single touch, the ∥
scenarios - is approved work: re-cut its delivery, don't churn its
substance.

## Process rules (the house canon, plus what the #11 session confirmed)

- Spec first, then the HTML mirrors it. Commit per approved pass,
  `vault:`-prefixed messages.
- Propose-then-approve with Tamsin on every message-script change: serve
  each reworked exchange as the literal thread in chat and take her wording
  notes before touching the spec. Recommend starting with the **go-ahead
  exchange plus the add-on attach** (the commitment turn and the cards, the
  two biggest deltas) as the first pass to sign off.
- The mock invents no new service behaviour: everything traces to approved
  #10 copy or an existing punchlist assumption.
- Every walkthrough driven headless in Chromium before commit (zero console
  errors), phone screenshots sent for review; style-guide greps on every .md
  before handoff; spaced hyphens, straight quotes, no em dashes, SA
  spelling.
- Structural questions get parked in the spec's open questions for the
  full-set review, not resolved unilaterally.
- Nothing merged to main without Tamsin's explicit say-so.
