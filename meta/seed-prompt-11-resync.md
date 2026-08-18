---
type: meta
title: "Seed prompt - #11 re-sync: bring Sipho's WhatsApp flow in line with #09 v3.4-v3.7"
created: "2026-08-12"
updated: "2026-08-12"
tags: [meta, seed-prompt]
---

# Seed prompt - #11 re-sync to #09 v3.4-v3.7

A self-contained brief for a fresh workspace. The job: deliverable #11
(`deliverables/11-sipho-whatsapp-flow.html`, spec
`design-kit/journeys/sipho-whatsapp-flow.md`) dramatises the #09 cash
journey as literal WhatsApp threads - and #09's cash side changed underneath
it in the 2026-08-12 feedback passes (v3.4-v3.7, agreed with Tamsin). About
a third of the message script, including the central P0 exchange, now
contradicts the approved journey. This brief records exactly what drifted,
what stands, and the process rules. Tamsin also has further comments and
changes to bring into this session - leave room for them; the drift list
below is the floor, not the ceiling.

## Read first, in this order

1. `CLAUDE.md` and `meta/writing-style-guide.md` - the schema and the prose rules.
2. `design-kit/journeys/to-be-household-repeat-moments.md` - the approved
   #09 spec. The v3.4-v3.7 changelog notes near the top are the changes
   being re-synced; the cash cells of the phase table carry the current
   truth. The deliverable `09-tobe-household-repeat-moments.html` DATA
   object holds the approved copy verbatim.
3. `design-kit/journeys/sipho-whatsapp-flow.md` +
   `deliverables/11-sipho-whatsapp-flow.html` - the artefact being re-synced:
   ground rules, message tables (W/M/A/C/H/T/X numbering), script engine.
4. `meta/punchlist.md` items 11 (the #11 channel-mock basis and flags) and
   15 (this drift, on record).

## What drifted (from the 2026-08-12 session, confirmed against the #11 spec)

Broken by v3.4 - the declined sync ("Two dates, one memory"):

- **W4** (costed sync plan): "one small top-up for her this first month -
  R23.80 - and from September, both are ready together on payday" is now
  wrong twice over. Dis-Chem cannot top up or re-time a CCMDD parcel it
  never dispenses (the latent bug v3.4 fixed), and in approved #09 the sync
  is offered and **declined**: her programme date can't move, it lands in
  the week before payday, so Sipho keeps his tablets on payday. W4 becomes
  the offer-and-decline exchange - a genuinely new conversational beat to
  design, not a patch. The chat keeps both dates; hers is free to collect
  (feet, not wallet).
- **W11/W13** (read-back + confirmation): "ready together on payday" becomes
  two dates, one thread, both remembered.
- **M1** (repeats-due notice): his order only, opening a few days after her
  programme parcel ("Dis-Chem is holding both dates - hers came when the
  programme sent it, mine comes when the money does").
- **M2** (price message): drop her "CCMDD chronic parcel - R0.00" line; his
  tablets + fee only.
- **H2** (contents list) and **X1/X2** (out-of-stock split branch): her
  parcel is no longer inside his order. The split branch re-words to "the
  rest of your order" framing.
- Check every "our order / your family's medicine" plural against the
  approved copy - the cash journey now follows **his** collection, with hers
  a light parallel line in the thread.

Broken by v3.6 - PIN re-timed:

- **C2** (packed and sealed): no PIN at sealing. The spec's own rail note
  "credential (PIN) is issued at the moment of sealing, where #09 issues it"
  now points at a #09 that no longer exists.
- **H1** slot: the PIN arrives when the parcel physically lands in the
  locker, with the retrieval steps (pay the exact amount at the counter
  first, then the PIN at the locker - payment is what activates the PIN).
  H1 was already right about pay-then-PIN; it now also carries first issue
  of the PIN, not a restatement.

Missing rather than wrong:

- **v3.6 origin story**: Sipho is invited by WhatsApp after an in-store
  collection; the pharmacist points him to the chat on his next visit. #11's
  click-to-chat zero-typing entry (W0) can absorb this - the invite message
  is a natural first inbound.
- **v3.5/v3.6 Fulfilment flexibility** (P3, both rails in #09): shift the
  date if payday moves, switch locker/store, or costed delivery, until the
  day before - one reply. Needs a home in the C-series or as a standing
  line in a status message.
- **v3.7** is insured-only (sync top-up in the money messaging) - no #11
  impact; the cash side has no top-up at all now.

Unaffected (do not churn): language-first entry, the WhatsApp Flow household
setup (W3 - CCMDD consent line still holds), chat commerce in P2 (A-series),
the named check, the counter payment mechanics, the cabinet lookups
(T-series), voice notes, photo escalation, and the recovery patterns other
than the split branch.

## Process rules (the house canon, plus what this session confirmed)

- Spec first, then the HTML mirrors it. Commit per approved pass,
  `vault:`-prefixed messages.
- Propose-then-approve with Tamsin on every message-script change; the
  declined-sync exchange (W4 and its read-back ripple) is the pass to mock
  first and get signed off before touching the rest.
- The mock invents no new service behaviour: everything traces to the
  approved #09 copy or an existing punchlist assumption.
- Style: `meta/writing-style-guide.md` greps before any handoff; spaced
  hyphens, straight quotes, no em dashes; SA spelling.
- Tamsin's additional comments take priority over this list where they
  conflict - re-confirm scope with her at session start.
