---
type: template
title: "Moments-journey template - phase spine + pulled-out moments"
status: reviewed
tags: [design-kit, template, domain/ux, journey/refill, topic/trust-safety]
created: "2026-07-17"
updated: "2026-07-19"
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

## The phase structure (v3 - Need / Activities / Pain points)

**The two-register principle still governs:** the structural copy is the quiet
ground, the key moments the loud figure. The cover test: hide the key-moment
blocks and the page reads as a clean, calm process description; hide the
structure and the moments still hit at full force.

Each phase is one section, in this order:

1. **Phase name (H1-level).** Strictly mechanical, a signpost ("Signing up",
   "The order assembles", "Prepared"). Never a slogan or a claim - a quotable
   phase title is a moment title in the wrong place. Once-off phases are
   badged "once, not per cycle"; a cross-cutting failure track is a
   **parallel band** (∥, "any phase"), not a phase.
2. **Need (H2).** The customer's stake in this phase: first person, one or
   two spare sentences, key phrases bolded. Together with the title it does
   all the scene-setting for a cold reader. It is a need, not an aphorism -
   true today and in the future state; only the fulfilment changes.
3. **Activities (H2).** Discrete, **named** activities, each a short
   functional description one level more concrete than narrative - what the
   person does, what the screen or thread shows, what their options are.
   Sequence told honestly (pricing resolves backstage BEFORE the notice).
   Behind-the-line machinery never leaks in. Written per economy behind the
   toggle; honest constraints stated plainly rather than mirrored.
   - **The v3.1 first-person register (canon from the #09 editing pass,
     2026-07-19; the full worked rule set lives in
     [[design-kit/journeys/to-be-household-repeat-moments]]).** Activities are
     written in the customer's first person to the formula *what I see or do,
     in my words, closing on the benefit for me*. The essentials: customer
     language only (service vocabulary belongs on mockup buttons); the
     benefit line is the customer's FELT payoff, never the business view of
     it; one job per activity, with all money behaviour in one activity per
     phase; each persona's motivation is their own researched constraint,
     bridged to the action; channel texture shows in the verbs (app: I
     select, one screen · WhatsApp: the chat asks, I reply); nothing implies
     settings are locked ("remembered", never "never asked again") and the
     service never stops on silence; sign-up fixes channels, never times -
     time is proposed per cycle; consent is an already-granted fact with a
     stated scope, never an in-flow ceremony; language and content choices
     attach to the content, never a carrier (labels, packs, boxes - the
     designers own the artefact); relevant detail lives in its relevant
     activity; statuses carry their detail inline; premium mechanics are a
     paid opt-in with money implied, never priced; failure-band activities
     are scenarios needing a decision (detection-only failures live in their
     phases), with the human reachable by phone where the persona would
     want a call; economies mirror structure while content diverges
     honestly; and run the **concept-visibility check** - a concept the
     journey depends on must visibly happen in an activity somewhere, or a
     step is missing.
   - **Key moments embed in the activities.** An activity that carries a
     moment gets a callout block directly beneath it: the memory-line title,
     ⭐ where it is a moment of truth, and a short prose "why this is a key
     moment" with the first-order payoff highlighted (the `.why` device) and
     **the underlying concepts referenced inline in the copy** as links to
     the concept set - woven into sentences, never detached pills or visible
     citation slugs.
   - Each activity's own "why" is woven into its prose. A moment that spans
     the whole phase attaches to the activity where it lands (usually the
     confirm/close step).
4. **Current-state pain points (H2).** The today-contrast, consolidated per
   phase. **Hard rules:**
   - Every pain point carries a **title**, a **description**, and a
     **verbatim quote from the research where one exists**.
   - Pains come ONLY from research sources (complaints analyses, sentiment
     studies, customer interviews) - **never inferred from personas, never
     manufactured**. Attribution renders human-readable ("verbatim, Dis-Chem
     resolved-complaints analysis, Jan 2025") with the vault path in a
     tooltip.
   - **Where the research records no complaint for a phase, say so honestly**
     in a single note instead of inventing a pain.
5. **Behind the line.** A collapsed panel per phase - the service blueprint
   under the story: frontstage and backstage lanes, capability chips whose
   tooltips hold the vault citations (🔮 = requires reform, ⚠️ = design
   assumption logged in `meta/punchlist.md`), and a regulatory line only
   where a non-negotiable genuinely constrains the phase. Metrics
   deliberately dropped - blueprint material lives in the board deliverable.

**Economies:** one journey structure, two full renderings behind a toggle,
never an interleaved merge. Needs are shared; activities, moments and their
whys are written per economy. Spine moment counts follow the active economy.

**No prelude into a key moment.** The named activity walks the reader to the
moment's doorstep; the callout's own label is the handoff.

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
4. **Agree the phase structure** with one worked phase before writing all
   of them (in #09 this happened twice - the structure earned a v3 mid-build
   when review showed the wrappers competing with the moments; expect the
   structure itself to be challengeable, and mock ONE phase copy-complete
   before regenerating the set).
5. **Draft ONE key-moment block as a style proof**, get the weight check
   (the "M1 correction": the human beat must outweigh the machinery), then
   draft the rest in the approved register.
6. **Draft all phases** - needs, named activities, embedded key moments,
   research-sourced pain points; review; fold in corrections (real ones from
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
  then the section stack - Need (serif, bolded key phrases), Activities
  (named blocks for the active economy, key-moment callouts embedded beneath
  their activities), Current-state pain points (cards: title, description,
  verbatim quote with human-readable source attribution + tooltip path; or
  the honest no-complaint note), and the collapsed `details.behind` panel
  (frontstage / backstage / regulatory flag / capability chips with cite
  tooltips).
- **Key-moment callout**: label + ⭐ where earned, the memory line in quote
  chrome, and the prose why with the `.why` highlight and inline concept
  links into `08-concepts.html`.
- **Scope-notes footer**: what is signposted elsewhere, which deliverable
  holds the deep blueprint, the pain-point sourcing rule, where assumptions
  are logged.

Straight quotes only in source (typographic quote chrome via CSS `\201C`
escapes). Content strings are author-trusted HTML only where the schema says
so (needs, key-moment whys, lane items, reg lines); titles, activity text,
pain titles/descriptions/quotes are escaped.

## Self-check before handoff

1. Does every moment pass the earn-its-keep test, and does the set distribute
   unevenly across phases for honest reasons?
2. Is every moment title a first-person memory line the human lead confirmed
   or replaced?
3. In each key-moment block, does the human beat outweigh the machinery? Is
   the emotion in the prose rather than a score?
4. Does every pain point trace to a research source with title + description
   + verbatim quote where one exists - none inferred from personas, none
   manufactured, and an honest no-complaint note where the research is
   silent?
5. Do the activities stay on the customer's side of the line, named and
   functional, with no payoff lines - and does the page pass the cover test
   in both directions (structure calm alone, moments full-force alone)?
6. Does each phase's behind-the-line panel defend the phase (lanes, cited
   capability chips, regulatory non-negotiables) without metrics creep?
7. Are concepts referenced inline in the key-moment copy with working links
   to `08-concepts.html`, and has any orphan moment's new concept been
   drafted and committed?
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
