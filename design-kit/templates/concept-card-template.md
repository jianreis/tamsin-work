---
type: template
title: "Concept card template - executive concept primers"
status: reviewed
tags: [design-kit, template, domain/ux, topic/trust-safety]
created: "2026-07-01"
updated: "2026-07-01"
---

# Concept card template - executive concept primers

How to write and build a **concept card**: the short, self-contained unit that
introduces one future-state customer-experience idea to a cold executive
audience, before they walk the journey it belongs to. The canonical set lives in
[deliverables/08-concepts.html](../../deliverables/08-concepts.html); this page
is the pattern behind it, so the same style, density and approach carry to
concepts for other journeys.

Read alongside the [[tamsins-voice]] skill (the research-to-exec-slide
transformation) and [[writing-style-guide]] (prose voice). This page owns the
concept-card *structure and process*. Where they touch, follow all three -
subject to the override in the next section.

## The override: the deliverable leads, the style guides serve

A concept card exists to make an idea land with a cold reader in one glance.
That job comes first. **Where a card's presentation needs conflict with a prose
rule in [[writing-style-guide]], the card wins** - the rules bend to the format,
never the format to the rules. This is deliberate, not a lapse, and it is true
of any deliverable with its own presentation requirements: the format's job
supersedes the general prose guidance.

Concretely, the concept-card format relaxes two writing-guide defaults on
purpose:

- **Bold lead-ins on feature bullets are allowed** (the guide otherwise treats
  bold-first bullet runs as a tell). Here the bold lead-in is a scanning aid the
  format depends on.
- **Listed proof points are the point** - the card is built to be scanned, so
  the guide's "prose over bullets" preference does not apply to the feature list.

What still holds, because it is voice not format: no em-dashes (use a spaced
hyphen ` - `), South African spelling, no banned vocabulary, and the one-inversion
budget. Relax a rule when the format needs it; note that you did and why. Do not
relax a rule for convenience.

## When to use this

Any time we need to introduce future-state concepts to a leadership or client
audience as a primer before the detailed journey. One card = one idea. The set
is a living document; add cards as new journeys generate new concepts.

## The card, part by part

Every card has five parts, in this order.

1. **Icon + number + title.** The title is the concept's name as a plain noun
   phrase (*The Household Medicine Cabinet*, *Auto-Refill*). Not clever, not
   teasing. No "Also:" subtitle - if the tagline works, a subtitle just repeats it.
2. **Tagline.** One plain, idiomatic line, roughly six to ten words, that *is*
   the whole idea. Lead with the most obvious framing; no mood words ("calm",
   "seamless"). Test: could someone repeat it back after one read? (*Your repeat
   should just repeat.* / *A pill organiser, done for you.*)
3. **Intro.** Three to five sentences, in this arc:
   - **Everyday anchor** - something the reader already does or owns, that this
     concept is the digital version of.
   - **Name it plainly** - "This is the digital version of that: [what it is]."
   - **The why, first-order first.** Lead with the obvious felt payoff, then draw
     the reader through to any deeper second-order payoff. Highlight the
     first-order line (the `.why` span in the build) so the eye lands on it.
4. **Feature list.** A labelled list of four to six discrete proof points. The
   label leans on the anchor where it can (*What's inside the cabinet*, *What's
   in the pack*). Each item is a bold lead-in naming the feature, then its payoff
   ("...so you know what everyone is taking and why"). One line each, scannable.
5. **Pillars.** The S1-S6 / U1-U7 pills at the foot. Internal orientation for the
   team; keep them on team-facing versions.

## Voice and approach

- **Lead with the obvious; never make the reader infer.** The idea lands in the
  first line. This is the [[tamsins-voice]] "self-contained, spell out every leap"
  rule applied to concepts.
- **One everyday anchor per concept.** It carries the explanation for free. This
  is the make-or-break move (see the process below).
- **First-order benefit leads, second-order follows.** State the plain payoff,
  then open the door to the deeper one. Do not force a second beat - only two of
  the first six concepts carry one (Cabinet -> ownership, Transparency -> trust).
- **Every feature states its own "so what."** Move -> outcome, always.
- **Unpack, don't preserve.** Dense "what it is / how it works" prose becomes one
  anchored intro plus a scannable list. Do not carry the old paragraphs over.

## Density (hold these across every card)

- Tagline: ~6-10 words.
- Intro: 3-5 sentences.
- Features: 4-6 items, one line each, bold lead-in + payoff.
- Whole card scannable in one glance; no paragraph longer than the intro.

## The process: anchor first, and always ask

The everyday anchor is what cracks a concept. Getting it right is a
collaboration with the human lead, not a solo drafting call. **Do not skip
this.**

1. **Take a first stab at the anchor for every concept**, then **ask the human
   lead to confirm or refine each one before drafting the cards.** Use the
   `AskUserQuestion` tool, one question per concept (or a tight batch), each
   proposing your anchor and inviting a better one. Frame it as "here is the
   everyday parallel I would use - is this the right human insight, or do you
   have a sharper one?"
   - This mirrors how the first set was built: the agent proposed anchors, the
     human replaced most of them with sharper human-insight lines ("Repeats
     should just repeat", "I already manage my mom's medicine - let me manage
     it"), and *that refinement is what made the set land.* Expect the human's
     anchor to beat yours, and leave room for it.
2. **Also confirm the first-order payoff** (and any second-order draw-through)
   per concept, since the "why" hangs off the anchor.
3. Only once the anchors are agreed, draft the taglines, intros and feature lists.
4. Render a preview of the full set (not just single cards) so the human can
   judge coherence across the deck, then iterate.

## Build notes (HTML deliverable)

The page renders every card from one `CONCEPTS` array so the set extends
cleanly - append a new object and it appears. Keep a `CONCEPTS_APPEND_MARKER`
comment at the end of the array. Each object:

```js
{
  icon: "refill",              // key into the inline ICONS map (24x24 SVG, no external requests)
  title: "Auto-Refill",        // plain noun phrase
  tagline: "Your repeat should just repeat.",
  intro: '... <span class="why">first-order why</span> ... second-order draw-through',
                               // trusted author HTML: anchor -> "digital version" -> why
  featuresLabel: "How the repeat repeats",   // anchor-led list heading
  features: [                  // 4-6 HTML strings: <b>lead-in</b> + " ... so <payoff>."
    '<b>It works out when you are due</b> from your dispensing history, so nobody has to watch the calendar.'
  ],
  pillars: ["S4","S5","U6","U7"]             // S1-S6 strategic, U1-U7 experience
}
```

`intro` and `features` entries are author-trusted HTML (they carry the `.why`
highlight and bold lead-ins); the `title`, `tagline` and `featuresLabel` are
escaped. Palette and card chrome match the board style in
[[design-kit/templates/future-state-blueprint-board-style]]. Self-contained: all
CSS and icons inline, no external requests.

## Reference set (the first six)

Built for the household-repeat journey, in `08-concepts.html`. Use these as the
worked exemplar of the pattern, and note how each anchor is an everyday thing:

| # | Concept | Tagline | Everyday anchor |
|---|---|---|---|
| 1 | Auto-Refill | Your repeat should just repeat. | taking the same medicine every month, tired of the re-order dance |
| 2 | The Household Medicine Cabinet | The whole family's medicine, in one place. | the medicine cabinet at home everyone knows to check |
| 3 | Real-Time Transparency | Buying your medicine, as clear as buying your groceries. | shopping online: see the price, see the stock, track it |
| 4 | CarerConsent | You already manage their medicine. This makes it official. | already running a parent's or child's medication |
| 5 | Script Sync | One date, one pickup - the whole family's repeats together. | one shop with everything in the basket, not five trips |
| 6 | Made-for-Me Packaging | A pill organiser, done for you. | the plastic pillbox you sort yourself each week |

## Self-check before handoff

1. Does each card carry exactly one idea, with a plain noun-phrase title?
2. Is there an everyday anchor, confirmed with the human lead, that makes the
   idea obvious in the first line?
3. Does the intro run anchor -> "the digital version" -> first-order why -> any
   second-order draw-through?
4. Is every feature a bold lead-in plus its "so what", one line, scannable?
5. Are the density limits held (tagline 6-10 words, intro 3-5 sentences, 4-6
   features)?
6. Format overrides noted: bold lead-ins and lists are intended here; voice rules
   (no em-dashes, SA spelling, banned vocabulary, one inversion) still hold.
7. Read it aloud: does a cold reader get an "oh, I get it" from the tagline and
   first line alone?

## See also

- [[tamsins-voice]] - the executive-presentation register this builds on
- [[writing-style-guide]] - prose voice (with the override above)
- [[design-kit/templates/future-state-principles]] - the S/U pillars concepts express
- [[design-kit/templates/future-state-blueprint-board-style]] - the visual language
