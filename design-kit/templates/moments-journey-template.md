---
type: template
title: "Moments-journey template - phase spine + pulled-out moments"
status: reviewed
tags: [design-kit, template, domain/ux, journey/refill, topic/trust-safety]
created: "2026-07-17"
updated: "2026-07-17"
---

# Moments-journey template - phase spine + pulled-out moments

How to build a **moments journey**: a future-state customer journey told as a
familiar spine of phases with the emotionally significant **moments pulled
out**, each staging a stark contrast between today's Dis-Chem and the future
state. The worked exemplar is
[deliverables/09-tobe-household-repeat-moments.html](../../deliverables/09-tobe-household-repeat-moments.html)
(content spec: [[design-kit/journeys/to-be-household-repeat-moments]]); this
page is the pattern behind it, so the same structure, register and process
carry to other journeys (acute e-scripting next).

Read alongside [[design-kit/templates/concept-card-template]] (the harness the
moment card adapts), [[tamsins-voice]] and [[writing-style-guide]]. The
concept-card template's override principle applies here too: **the
deliverable's presentation needs supersede the general prose rules where they
conflict** - relax a rule when the format needs it, note that you did, and
never for convenience. Voice rules that always hold: no em-dashes (spaced
hyphen ` - `), South African spelling, no banned vocabulary, straight quotes.

## When to use this

Any time a future-state journey needs to land with an executive audience as a
story of felt inflection points rather than a process walkthrough or a
blueprint. It complements, not replaces, the board treatment
([[design-kit/templates/future-state-blueprint-board-style]]): the board
deliverable stays intact as the deep blueprint reference; the moments journey
is a **new deliverable file** built beside it. Never rework the old one in
place - preserving the previous treatment is part of the pattern.

## The taxonomy (align on this first)

- A **journey** is the end-to-end. It decomposes into **phases** - the
  mechanical, linear spine people already understand ("people understand
  mechanically the step-by-step process of getting a repeat script").
- Each phase contains **activities**: the mechanics, told from the customer's
  side of the line of interaction.
- A **moment** is not a structural unit. It is a strong emotional response to
  an activity or a phase - the thing someone retells long after the mechanics
  are forgotten ("logging in to pay was a really shitty experience / was
  seamless because I used FaceID"). **Moments of truth** (⭐) are the
  canonical higher-stakes subset; most moments are just significant.
- **The earn-its-keep rule:** a moment only makes the cut if it is a genuine
  potential source of friction or delight, anchored on a real current-state
  gap in Dis-Chem and its environment. Hygiene steps, and anything a reader
  can trivially infer between moments, never become moments. Expect an uneven
  distribution - some phases carry two moments, some none. The unevenness is
  the point: it shows where the experience is won or lost.
- **Moments map onto concepts** (the [[design-kit/templates/concept-card-template|concept set]],
  `deliverables/08-concepts.html`). If a surviving moment has no parent
  concept, that is usually a sign a **new concept card is needed** - draft it
  via the concept-card template's own process and append it to the set (this
  is how Concept 14, The Standing Order, was born from the order-window
  moment).

## The phase band schema

**The two-register principle governs this layer:** the phases are the quiet
ground, the moments the loud figure. The wrapper must never compete with the
content - the first build's mistake was a "customer need" aphorism plus a
snappy "gist" per phase, which pre-spoiled the moment cards below in weaker
words. The cover test for the whole page: hide the moments and the phases
read as a clean, calm process description; hide the phases and the moments
still hit at full force.

Each phase carries five bands, in order:

1. **Number + title** - strictly mechanical, a signpost ("Signing up", "The
   order assembles", "Prepared"). Never a slogan or a claim - if a title is
   quotable it is a moment title in the wrong place. Once-off phases are
   badged "once, not per cycle"; a cross-cutting failure track is a
   **parallel band** (∥, "any phase"), not a phase.
2. **Orienting sentence** - ONE sentence, ~25 words or fewer, functional and
   hardworking: it tells a cold reader where they are in the journey and
   what this phase covers, and deliberately says nothing quotable. No
   metaphor, no inversion, no aphorism. Title + orienting sentence together
   set the scene; that is their whole job. (This replaces the earlier
   need + gist pair - do not reintroduce them.)
3. **Activities** - the customer's actions only, written as an unhurried
   plain-language story: one or two short paragraphs per economy, mechanics
   only - what arrives, what it contains, what the person does, what their
   options are. Sequence is told honestly (e.g. pricing resolves backstage
   BEFORE the notice is sent). Behind-the-line machinery never leaks in; the
   customer taps a message, she does not "use BRIX". **No payoff lines:**
   every emotional landing belongs to a moment card, and any story sentence
   that lands one is cut ("she puts the phone away", "the pack does the
   thinking" - those are moment material).
4. **Economies** - one journey structure, two full renderings behind a
   toggle (insured / cash), never an interleaved merge. Title and orienting
   sentence are shared; the story is written per economy in that economy's
   channel reality. State an honest constraint plainly rather than mirroring
   (the cash locker route carries medication only - say so). Downstream,
   each economy is effectively its own journey on its own channels for
   mockups.
5. **Pinned moments + emotion** - which moment cards hang off the phase,
   plus one emotion value per economy for the curve. The felt prose lives in
   the moment cards, not here.

**No prelude into the moment.** The orienting sentence plus a mechanics-only
story walk the reader to the moment's doorstep; the moment's own tag row
(phase · ⭐ · concept pills) is the handoff. The moment shines brightest
stepping out of plain prose, not out of an introduction.

**Behind the line:** each phase has a collapsed panel - the service blueprint
under the story, as in the board treatment but relocated from moments to
phases and trimmed. It carries frontstage and backstage lanes, capability
chips whose tooltips hold the vault citations (🔮 = requires reform, ⚠️ =
design assumption logged in `meta/punchlist.md`), and a regulatory line only
where a non-negotiable genuinely constrains the phase. **Metrics are
deliberately dropped** - blueprint material, not journey material; the old
board deliverable keeps that depth.

## The moment card schema

The concept-card harness re-aimed at before/after contrast:

1. **Memory-line title** - first person, the sentence retold a month later.
   Same test as a concept tagline: repeatable after one read.
2. **Today** - the current-state friction as lived, 2-3 sentences, carrying a
   **verbatim quoted complaint** with its source where a genuine one exists.
   Never manufacture a quote: a delight-moment's "today" can be a loss or an
   errand pattern rather than a complaint (M3), and a preference signal gets
   a cite chip instead of a quote (M6).
3. **The future state** - the memory as it will be retold, 3-5 sentences,
   emotion in the prose, with the first-order payoff highlighted (the `.why`
   device). Both economies appear on the one card; where they diverge, the
   divergence is part of the story.
4. **Behind it** - a thin chip strip of capability names pointing at the
   parent phase's panel. Nothing more.
5. **Tags** - concept pills linking to `08-concepts.html`, the phase, and ⭐
   only where earned.

**The weight rule (the "M1 correction" - the make-or-break of the register):**
the moment card is dominated by the felt contrast. The emotional response
lives in the sentences, not in a score line; the machinery is demoted to the
chip strip. If the capability copy outweighs the human beat, the card is
wrong - a well-formatted capability card wearing a moment's title. Test each
card against the definition: is this the thing the person would retell after
the mechanics are forgotten?

## The process (in order, with the human lead)

Content first, in text, reviewed band by band - design only at the end.

1. **Re-select the moments** against the earn-its-keep rule. Expect to demote
   stage cards from the previous treatment to phase activities (in #09,
   dispense and the reminder machinery didn't survive as moments). Map each
   surviving moment to its concept; flag orphans as candidate new concepts.
2. **Agree the phase set** - including which phases are once-off, what is
   parallel, and what is signposted out of scope to another journey (renewal,
   after-hours acute). Tightly scope: adjacent journeys get a signpost, not
   a walk-through.
3. **Lock the moment titles.** Propose a title (plus alternates) per moment
   and put them to the human lead - this is the concept-template
   propose-then-ask anchor step, and the human's replacements are what make
   the set land (in #09: "Set it and forget it", "Medical aid said no.
   Dis-Chem said 'let's make a plan.'"). Expect principle-level pushback, not
   just word choice - offer options built on the stated principle when a
   proposal misses.
4. **Agree the phase band schema** with one worked phase before writing all
   of them.
5. **Draft ONE moment card as a style proof**, get the weight check, then
   draft the rest in the approved register.
6. **Draft all phase bands**; review; fold in corrections (real ones from
   #09: persona details written back to the persona file, named family
   members - never "Gogo", use Grace - honest channel constraints, payment
   folded into collection).
7. **Draft any new concept card** the moments surfaced, via the concept-card
   template process, and commit it to the concept set.
8. **Commit the content spec** to `design-kit/journeys/<journey>-moments.md`
   (taxonomy, schemas, approved copy) as the canonical build source.
9. **Build the deliverable**, render-check both economies and both panel
   states with headless Chromium, wire it into `deliverables/index.html`,
   log the build in `meta/research-log.md`, and log every ⚠️ assumption in
   `meta/punchlist.md`.

## Build notes (HTML deliverable)

Single self-contained file, board palette per
[[design-kit/templates/future-state-blueprint-board-style]], all CSS/JS/SVG
inline, no external requests. One `DATA` object mirrors the content spec
(edit the spec first, then mirror). Page anatomy, top to bottom:

- **Brand band + revision ribbon** (names the content spec) + intro + the
  Trust > Convenience > Speed pill.
- **Sticky toolbar**: economy toggle (`#cash` hash pre-selects), an
  open/close-all for the behind-the-line panels, and the ⭐/🔮/⚠️ legend.
- **Persona strip** for the active economy (eyebrow, name, bio, the need).
- **Spine overview**: one node per phase (moment count + stars, click scrolls
  to the phase) over an SVG emotion curve for the active economy.
- **Phase sections**: mint header band (number, title, once/parallel badge),
  the orienting sentence, the story paragraphs for the active economy, the collapsed
  `details.behind` panel (frontstage / backstage / regulatory flag /
  capability chips with cite tooltips), then the phase's moment cards.
- **Moment cards**: quoted title, tag row (phase · ⭐ · concept pills linking
  to `08-concepts.html`), a two-column Today (pain tint, quote + source) /
  In-the-future-state (green tint, `.why` highlight) block, and the behind-it
  strip linking to the parent phase's panel.
- **Scope-notes footer**: what is signposted elsewhere, what #05-style
  deliverable holds the deep blueprint, where assumptions are logged.

Straight quotes only in source (typographic quote chrome via CSS `\201C`
escapes). Content strings are author-trusted HTML only where the schema says
so (`future`, lane items, reg lines); titles, stories, needs and gists are
escaped.

## Self-check before handoff

1. Does every moment pass the earn-its-keep test, and does the set distribute
   unevenly across phases for honest reasons?
2. Is every moment title a first-person memory line the human lead confirmed
   or replaced?
3. On each card, does the human beat outweigh the machinery? Is the emotion
   in the prose rather than a score?
4. Are all quotes verbatim and cited - none manufactured?
5. Do the phase stories stay on the customer's side of the line, in the
   plain register, with no payoff lines - and does the page pass the cover
   test in both directions (phases calm alone, moments full-force alone)?
6. Does each phase's behind-the-line panel defend the phase (lanes, cited
   capability chips, regulatory non-negotiables) without metrics creep?
7. Do concept pills resolve to real cards in `08-concepts.html`, and has any
   orphan moment's new concept been drafted and committed?
8. Are the economies clean full renderings (no interleaving), with honest
   divergence?
9. Is the previous journey deliverable untouched, the content spec committed,
   the index/research-log/punchlist updated, and the page render-checked in
   both economies?

## See also

- [[design-kit/journeys/to-be-household-repeat-moments]] - the worked content spec
- [[design-kit/templates/concept-card-template]] - the harness the moment card adapts
- [[design-kit/templates/future-state-blueprint-board-style]] - the board treatment this complements
- [[writing-style-guide]] / [[tamsins-voice]] - prose voice (with the override principle)
