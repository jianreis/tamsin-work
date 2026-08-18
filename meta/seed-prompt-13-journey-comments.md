---
type: meta
title: "Seed prompt - journey feedback session, following the 2026-08-16 concepts pass"
created: "2026-08-16"
updated: "2026-08-16"
tags: [meta, seed-prompt]
---

# Seed prompt - journey comments, after the 2026-08-16 concepts pass

A self-contained brief for a fresh workspace. The job: work through Tamsin's
comments on the **journey deliverables**, principally
[[design-kit/journeys/to-be-acute-moments|#10, the acute script in moments]].
The comments are hers to bring; this brief exists so the session does not spend
its first hour re-deriving what a long concepts pass already settled.

**Everything below is on `main` as of 2026-08-16.** Nothing here is pending.

## Read first, in this order

1. `CLAUDE.md` and `meta/writing-style-guide.md` - the schema and the prose rules.
2. `design-kit/templates/moments-journey-template.md` - the canon for journey
   structure. Non-negotiable.
3. `design-kit/journeys/to-be-acute-moments.md` - the #10 content spec and the
   source of truth. **Edit here first, then mirror into the deliverable's `DATA`
   object.** The moment table and the 2026-08-16 sections near the end carry the
   current truth.
4. `deliverables/10-tobe-acute-moments.html` - the artefact.
5. `deliverables/08-concepts.html` - the concept set the journey links into.
6. `meta/research-log.md`, rows dated 2026-08-16 - the full audit trail of the
   concepts pass, in order, with the reasoning for each decision.
7. `meta/punchlist.md` items 9 and 10 - the design assumptions both journeys rest
   on, including 10(j) and 10(k) raised on 2026-08-16.

## What changed on 2026-08-16, and what the journey now depends on

### The concept set: 14 live, 3 archived

**Never renumber.** Card ids are derived from array position (`#c1`…`#c17`), and
the journeys link into them. Retiring a concept means **archiving in place**
(`archived: true` plus an `archiveNote`), never deleting - the c06 pattern.

| Change | Detail |
|---|---|
| **c09 The E-Script Token - ARCHIVED** | Described infrastructure, not an experience. Promises went to c08 (received ✓; one record that cannot be lost, altered or filled twice), c11 (forward the code to someone you trust), c12 (any phone). |
| **c12 Snap-a-Script - ARCHIVED** | Photographing a script already exists in the app, so it was a submission channel. Its one real idea, the read-back, went to **c03 Real-Time Transparency**. |
| **c11 → The 30/60 Fill** | Renamed and re-anchored from Sixty60 groceries to **the stop at Dis-Chem on the way home from the doctor**. Two promises, two routes: ready in 30 at a counter, delivered inside 60. The net-new claim, stated in the copy: **the clock starts at the script, not at the order.** |
| **c17 Express Collect - NEW** | Anchored on self-checkout. Carries a "Where this stands" note on its regulatory position. |
| **c03 Real-Time Transparency** | Gained the read-back and Tamsin's caveat: transparency is not "you always get an instant answer" but **"you always know where you stand, immediately"** - so an unreadable script expresses the promise rather than excepting it. Never speed before accuracy. |
| **c16 The Pharmacist Who Stays** | Gained seamless clinic booking - a teleconsult or clinic slot booked inside the same conversation, price said before agreeing. |

### #10 itself

- **P4 carries a route toggle for Aisha only**: *Delivered* (the existing spine,
  keeps ⭐ M4a) / *Collected* (new, carries unstarred **M4c "In and out, and I
  never spoke to anyone"**). Scoped to P4 alone; P2 names the fork in one line;
  P3 is identical on both routes; the cash side is untoggled.
- **Engine change**: a phase's activities may now be a flat array **or** a
  route-keyed object, normalised by `routesFor()` / `actsFor()`. A delegated
  click handler re-renders spine and board and restores the behind-the-line open
  state. Anything that iterates activities must go through `actsFor()`.
- **Naming resolved.** Staffed handover is **the collections counter**;
  unattended is **express collect**. Thabo uses the collections counter, which
  keeps his M4b pharmacist-counselling moment intact. Renamed through P2-cash,
  P4-cash and ∥-cash.
- **M2 relinked**: Thabo's ⭐ "I knew the price before I left the clinic gate"
  now cites **Real-Time Transparency**, not the archived Snap-a-Script. It fits
  better - his memory is the price arriving before he travelled, and his activity
  already shows the script read back to him.

### Two 🔮 requires-reform flags, with the rules now known exactly

Both are in #10's behind-the-line and both are **verified against primary SAPC
documents**, archived at `sources/pdfs/`:

- **P4, express collect.** GPP 1.9.3(b) bars a patient receiving directly from an
  in-pharmacy automated unit. Patient-facing units live under **SAPC Rule 1.11
  (RADU)**, which already permits the pattern - for chronic medicine, in
  institutional public pharmacy, with a pharmacist performing phases 1 and 3
  "through the audio-visual interface, at the time of dispensing" (1.11.5(a)).
  Tamsin chose (2026-08-16) to **keep the silent version and flag it** rather
  than redesign to the lawful shape. The lawful-today alternative is recorded in
  the spec and deliberately not built.
- **P2, the delivery route.** **Rule 1.9.7(e)** bars mail/courier delivery of
  medicines prescribed for acute conditions. This reaches Aisha's delivered
  antibiotic and the whole delivery half of The 30/60 Fill. Whether a pharmacy's
  own same-metro service is "mail/courier" is unresolved - punchlist 10(k), and
  it needs a legal read.

Full analysis: [[wiki/concepts/unmanned-collection-points]] (can a unit stand
alone) and [[wiki/concepts/remote-collection-points]] (where should it stand, and
for whom).

## Evidence reliability - two tiers, do not conflate

- **The regulatory position is verified.** Six primary documents were read
  directly and are in `sources/pdfs/` with a README mapping each to its source
  note. Rule numbers and wording are quotable.
- **The market, footprint and cold-chain figures are search-extracted.** They
  were gathered under an egress policy that blocked publisher and company hosts.
  Each note names what still needs verifying. Directional, not deck-ready.

## Process rules (house canon, plus what this session confirmed)

1. **Spec first, then mirror.** Approved copy lives in the deliverable's `DATA`
   object, but it is written in the spec first.
2. **Propose, then ask** on every anchor, concept title, tagline and moment
   memory-line. These are Tamsin's calls, without exception.
3. **Pain points are research-sourced only** - title, description, verbatim quote
   where one exists, never inferred from personas. Where the research is silent,
   say so honestly (see P6's `painNote`). A plausible insight that is not in the
   record is a **design hypothesis**: it goes to `meta/punchlist.md`, never into a
   pain card. Precedent set 2026-08-16 with "nobody wants to queue among sick
   people", which the research does not support and partly contradicts.
4. **The archive test.** A card that describes *how something works* rather than
   *what it promises* is infrastructure, not a concept. Two were retired on that
   test in one session. Before adding a card, check whether three of its features
   already belong to other concepts - if so, it is a principle, not a concept.
5. **Concepts are referenced inline only where the reader watches them work.**
6. **Render-check every change** in headless Chromium before committing:
   toggles, links, console errors. Playwright is available at
   `/opt/pw-browsers/chromium`.
7. **Correct in place when evidence overturns a claim** - date the correction and
   say what it supersedes, rather than quietly rewriting.
8. **#07 is preserved** as the previous acute treatment and is never reworked.
   Previous journey deliverables are added to, not rewritten.
9. **Commit messages**: `vault: <area> — <what changed>`. Log every substantive
   pass to `meta/research-log.md`.

## Open threads this session may inherit

- **The locker / reach concept.** Researched but not drafted - Tamsin is taking
  the two-phase recommendation to her manager. The recommendation: build phase
  one on Dis-Chem's own TLC franchises and serviced independents, where a
  pharmacist is already on site and no ruling is needed; add Capitec in phase two
  once SAPC extends Rule 1.11. Do not draft the card until she returns.
- **The acute-courier legal read** (Rule 1.9.7(e), punchlist 10(k)).
- **Capitec versus TLC as the node** - the open strategic question.
- **Sipho is peri-urban, not rural.** "No address" and "no pharmacy" are two
  different problems; the journeys demonstrate the first and not the second. Do
  not make Sipho rural to fix this - he is grounded in specific research.
- **The counselling opt-out** (punchlist 10(j)) - notes-plus-reachable-pharmacist
  is a defensible reading of GPP, but nothing in the vault says a patient may
  decline face-to-face counselling on a first-time acute antibiotic.

## What this session should not do

- Renumber, reorder or delete concept cards.
- Rework #07, or rewrite a previous journey deliverable in place.
- Put an unsourced insight into a pain card.
- Treat CCMDD as legal precedent - it confers operability, not authority, and its
  no-sale limb fails in private retail.
