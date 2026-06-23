---
name: tamsins-voice
description: Rewrite vault research or source content into "Tamsin's voice" — the Bigly executive-presentation register. Use whenever asked to produce a summary, slide, standfirst, or deck section "in Tamsin's voice", or to adapt research-report / wiki content for a Bigly or Dis-Chem executive audience. Governs the research-to-presentation transformation; defer to meta/writing-style-guide.md for anti-AI-slop prose rules.
---

# Tamsin's voice — research-to-presentation transformation

## What this is

A method for turning vault material (research reports, wiki synthesis, source
notes) into the register Tamsin uses to present to Bigly executives. It was
reverse-engineered from her rework of §2 of `deliverables/01-research-report.html`
into presentation sections. Use it when someone asks for a summary, slide,
section, or standfirst "in Tamsin's voice", or to pitch vault findings to a
Dis-Chem / Bigly exec audience.

This skill owns the *transformation* (audience reframe, structure, what to drop,
what to add). It does **not** restate the prose-voice rules — those live in
[[writing-style-guide]] (`meta/writing-style-guide.md`) and still apply in full:
banned vocabulary, em-dash ban, the one-inversion-per-page budget, no bold-first
bullets, South African spelling. Read both. Where they touch, follow both.

## The core move

The vault is written for the team: cited, hedged, pillar-tagged, evidence-first.
Tamsin's voice is written to *persuade and orient a room of executives*. The
deck carries the conclusion, not the scaffolding that earned it. Every rule below
follows from that one shift.

The whole method in one line: **lead with the idea in plain executive English,
ground it in one real-world exemplar, flip any liability into an asset, and stand
a single hard fact beside it in a callout — drop the citations, pillars and
hedges.**

## Section structure (the four beats)

Each idea becomes its own short section. Most use some of these beats, in order:

1. **A descriptive noun-phrase title** that names the idea, reusing the vault's
   own coinages where they exist ("Pharmacy as the Healthcare Front Door", "The
   Store as a Fulfilment Node", "Pharmacist at Top-of-Licence + Automation of
   Toil"). Not clever, not teasing — it says what the section is.
2. **An optional "before" setup** — the status quo or old-world framing — so the
   shift has something to push against ("Historically, pharmacies have been
   viewed as the end of the process. A doctor writes a prescription and pharmacy
   fills it.").
3. **The body: one idea, one or two short paragraphs.** State the shift plainly,
   then ground it in a concrete, named exemplar (a place, a company, a number
   that actually happened).
4. **A pulled-out callout / sidebar carrying the single hardest fact** — the one
   stat or marquee example that stands behind the body (the McKinsey survey, the
   Apollo case, EY's 70% / 81%). The body argues; the callout proves.

Beat 4 is the most consistent move. Lift the strongest evidence *out* of the
running prose into a callout so the body can argue in plain language and the
proof stands on its own.

## What to drop (vault scaffolding)

- `[[src-...]]` citations and `wiki/...` paths.
- Pillar pills (`S2`, `U6`) and pillar cross-references.
- `⚠️ gap` / `⚠️ UNVERIFIED` / `🔮 requires-reform` tags and honesty-note sections.
- Most firm-name attribution. The source bolds a consultancy on nearly every
  clause; collapse the crowd into "consultancies" / "global consultancies" and
  keep only the marquee names that carry authority — and move those into the
  callout, not the sentence subject.
- Hedged or soft numbers that clutter the flow. Keep the punchy ones (~$5.6bn,
  ~90%, ~70%, 81%) and isolate them in callouts; drop the weak ones.

## What to add

- **A concrete, named exemplar per idea**, even if it is not in the matching
  source paragraph — pulled from elsewhere in the vault. Where the consultancies
  stay abstract, anchor with something real: England's Pharmacy First, PharmEasy's
  collapse, Apollo's store-as-dark-store network. Only use exemplars that trace
  to a real vault source; do not invent cases or numbers.
- **The liability-to-asset flip.** Reframe a perceived weakness as the strategic
  asset: "not as legacy cost but as a distributed fulfilment grid"; "turns the
  speed-and-reliability problem into an asset rather than a cost centre."
- **A light advisory register.** Shift from pure reportage ("Deloitte forecasts")
  toward what the room should take from it ("pharmacies should expand their
  healthcare services"). Suggest, don't lecture.

## Voice characteristics

- Plain, slightly informal executive English. Contractions and plain verbs:
  "do more clinical care work", "freeing pharmacists up", "burned venture
  subsidy". Keep the vault's crisp coinages ("top-of-licence", "automation of
  toil", "front door") as headline phrases.
- One longer thesis sentence carrying the strategic claim, then a short
  punch-line to land it ("The store network turns the speed-and-reliability
  problem into an asset rather than a cost centre.").
- At most one "not X but Y" inversion per section, spent on the thesis. At most
  one dramatic intensifier ("precisely"). These are the writing-style-guide
  budgets — they still bind.
- Use a spaced hyphen ( - ) for asides, never an em-dash, per the vault
  convention. (One of Tamsin's source examples kept an em-dash carried over from
  the original; standardise to the spaced hyphen unless told otherwise.)
- South African spelling throughout (organise, behaviour, centre).

## Worked example (real before / after)

**Source — `01-research-report.html` §2.2** (vault register):

> Omnichannel lets a patient start, pay for and receive a script across any mix
> of channels — in-store, app/web, click-and-collect, locker, courier,
> on-demand — against **one continuous profile**. The discipline that makes it
> "omni" rather than "multi" is a **unified patient profile**... Globally,
> **Apollo (India)** fulfils online orders from Asia's largest pharmacy network
> for metro delivery — the store estate *is* the dark-store network. The
> pragmatic target the vault lands on: match channel to script type... Dis-Chem
> and Clicks already own dense store + clinic footprints...
> `U6` `wiki/digital-transformation/telepharmacy-and-omnichannel`

**After — Tamsin's voice:**

> **The Store as a Fulfilment Node**
>
> Global consultancies see winning legacy pharmacies treating an existing dense
> physical-pharmacy network not as legacy cost but as a distributed fulfilment
> grid, with every store doubling as a dark store / last-mile node for online
> orders.
>
> Pure-play e-pharmacy economics did not hold: PharmEasy burned venture subsidy
> to a ~$5.6bn peak then collapsed ~90%, while the omnichannel /
> conglomerate-backed players won precisely because they fulfilled from physical
> estate they already owned. The store network turns the speed-and-reliability
> problem into an asset rather than a cost centre.
>
> > *Callout:* Globally, Apollo (India) fulfils online orders from Asia's largest
> > pharmacy network for metro delivery - the store estate is the dark-store network.

What changed: title reuses a vault concept and drops "omnichannel" jargon; the
unified-profile UX detail is cut as off-audience; the abstract definition becomes
a strategic framing with a liability-to-asset flip; a concrete contrast
(PharmEasy failed, omnichannel won) is added from elsewhere in the vault; the
Apollo marquee case is lifted into a callout; the pillar pill and citation are
dropped.

## Self-check before handoff

1. Does each section carry exactly one idea, with a descriptive title?
2. Is the single hardest fact in a callout, not buried in the prose?
3. Is there a concrete, named exemplar grounding the idea — and does it trace to
   a real vault source?
4. Have the citations, pillar pills, wiki paths and hedge tags been dropped?
5. Has firm-name attribution been thinned to the marquee names only?
6. Run the [[writing-style-guide]] checks: banned vocabulary, em-dashes (0),
   one inversion max, no bold-first bullets, SA spelling. A clean transformation
   that fails the slop budget is not done.
7. Read it aloud: does it sound like Tamsin briefing an exec on what the research
   means and what to do about it?
