---
type: source
title: "OTC SOTF solution brainstorm — internal workshop transcript"
url: "internal://bigly/sotf-otc-brainstorm-2026-09-02"
author: "Tamsin Madden (facilitator); Gillian Winterton, Clint Payne, Keagan Naidu, Jaco Pieterse, Lizette Spangenberg"
publisher: "Bigly Labs / Dis-Chem — SOTF internal team (Teams recording transcript)"
published: "2026-09-02"
retrieved: "2026-09-07"
source_kind: company
reliability: A
tags: [domain/dischem, domain/ux, project/sotf, journey/submit, journey/dispense, journey/collect, topic/automation, region/za]
---

# Summary

Transcript of the internal 1h41m brainstorm (2 Sep 2026) on the OTC-in-
decoupling problem, run off the pre-seeded options canvas. No business or
McKinsey in the room. The session sharpened the problem definition, surfaced
new field evidence from both stores, evolved every option, added three new
ones (pre-ticket OTC ordering, an OTC vending kiosk, and deliberate
non-intervention with measurement), and converged on a way forward: treat
Melrose Arch and Irene as a running two-process experiment, gather data
actively for ~3 months, define guardrails, and rerun the session with
frontline staff before presenting trade-off options to business.

**Reliability:** A as a record of what the team said and decided. Store facts
relayed inside it (sales splits, sentiment) are second-hand from store staff —
treat as B/C signals until pulled from systems, flagged per claim below.

# Key claims

## New evidence from the stores
- **Irene's sales mix is 60% OTC / 40% script** — from the Irene dispensary
  manager via Lizette/Gillian (⚠️ relayed figure, retrievable). Melrose Arch's
  split not yet requested. Confirms the OTC-led store archetype.
- **The friction has been surfaced at BOTH stores** — Firaz raised it at
  Melrose Arch too, "much less so"; suspected volume effect (Melrose = weekday
  office-park lunch traffic; Irene "absolutely slammed" on weekends).
- **Melrose Arch follows the process rigidly** (Gillian mystery-shopped: sent
  to the collections queue for a single OTC item). Clint mystery-shopped
  Irene and confirmed the workaround first-hand.
- **Refined reading of the Irene workaround (Gillian):** staff run the same
  system but skip the script-only signature steps not legally required for
  OTC; a picker watches the OTC label printer as a visual cue, picks
  immediately, and walks it to the serving pharmacist. "They're not really
  breaking the system. They're just skipping the regulatory part."
- **The workaround fails at peak** (Terrence, via Gillian/Jaco): on Saturdays
  two long scripts "drown the system", OTC still waits, customers cluster
  around the Health Hub (only 4 seats, filled even on quiet days), Hub
  advisors take strain steering people; and the longer dispense-counter dwell
  (OTC handled at the counter) slows the whole submission queue.
- **Firaz suspects OTC sales are down at Melrose Arch** vs pharmacies he has
  worked in before — no data; "people shop with their eyes" (⚠️ anecdote, and
  both stores are new, so no baseline exists anywhere).
- **Anecdotes of walk-outs**: a Melrose customer raged at ticketing and
  stormed out — then did the same at Clicks (Clint followed him); another
  saw the kiosks and left saying "this is exactly why I don't go to Clicks
  anymore". Signals cut both ways: ticket rage is not unique to SOTF.

## Market precedent (changes the competitive frame)
- **Medirite and Clicks (both observed at Cresta) already run the hybrid:**
  single queue with ticket types split OTC / script / collections at the
  kiosk; back-end routing sends OTC tickets to PBQs (fewer signatures) and
  scripts to pharmacists; scheduled stock hidden, **OTC stock visible behind
  the counter**. "The market has set a precedent" (Clint, Keagan).
- **There is no OTC standard across existing Dis-Chem stores** (Clint):
  the same basket is sometimes handed over the counter, sometimes fully
  dispensed; every store does it its own way. Medical-aid claims force the
  dispense path. Regulatory floor (Jaco, in-session lookup): Schedule 1-2
  must be captured in a dispensing programme but needs no pharmacist
  sign-off (PBQ can dispense); Schedule 0 needs no capture; the full
  signature chain is a script-flow requirement, not an OTC one.

## Sharpened problem understanding
- Baseline the decoupling was solving: ~15 minutes end-to-end for a ~5-item
  dispense with the customer waiting at the counter (Jaco).
- Space rationale rediscovered: in legacy stores the whole "T" was pharmacy +
  OTC + scripting; SOTF shrinks pharmacy frontage by pushing stock back.
- Counter-arguments for the unified flow, said in the room: one counter means
  customers ask for everything in one place (less "I forgot my alcohol swabs"),
  and Faraz reports **more OTC upsell** because staff must ask "anything else?".
- **Health authority (Clint):** the pharmacy's authority is built from
  visible cues — white coats, visible supervision, barriers between public
  and medication, even dull scheduled-med packaging. SOTF dismantled several
  cues at once. The task is not to recouple but to "engineer the health
  authority back into" the decoupled journey.
- **Sick vs not-sick is the segmentation that matters** (whole room):
  a patient in urgent need will not roam, will not tolerate kiosks, and is
  the customer the store can actually lose. Guardrail: never trade off the
  urgently sick person. The critical metric is the walk-out.
- Need-states frame for the future state (Tamsin): advice-seeker /
  prefer-the-pharmacist / pure self-service; meds-now vs meds-later
  ("queue on demand"). Even in the future state, OTC needs its own solve —
  decoupling remains right for scripts.

## How the options evolved
- **A. Express lane → invisible back-of-house split.** Not a customer-facing
  ticket class: same front experience, two queues in the back (like the two
  label printers), a dedicated OTC picker, priority SLA. Open question:
  Unisolv may not support the routing — may need Bricks. Variant per the
  Medirite pattern: allocate specific counters/PBQs to OTC. Trade-off named:
  third-in-queue gets served first ("why did their food come first?").
- **B. Counter delivery → pass-through hatch.** Formalised not as runners but
  as ROWA-style windows under the digital-wall screens (as in the existing
  ROWA stores): picker slips the item through, pharmacist hands it over. Keeps
  the calm, no-chaos front-of-house Tanya Ponter values; conveyor/pneumatic
  tube as a later upgrade; hatch position should anticipate ROWA retrofit.
  Tamsin's own challenge: if you accept counter delivery, the Pareto shelf
  does the same job with less running — "people running up and down is silly".
- **C. Pareto shelf** — keep 1-2 units of each fast-mover SKU behind the
  counter (where the digital shelf sits). Historical objections recorded: old
  OTC walls looked messy and carried stock unsold for 2-3 years; sensitivity
  (the queue can see your piles medication); Anne expected to resist.
- **Digital OTC shelf**: confirmed in-session that displaying OTC products
  (not advertising) **was the original intent of the dispensary digital wall
  and was never implemented**. Solves visibility + explanation, not handover.
  V-Sign counter tablets as a show-me aid judged fiddly; laminated dummy
  packs kept as an option with its "but it's empty" friction.
- **New option: pre-ticket OTC ordering** (Gillian + Jaco convergent):
  customer selects OTC items on a Hub tablet or phone BEFORE ticketing;
  picking starts before the customer is even in the queue; doubles as a
  digital OTC browse window. (Also: in-store online shopping on the tablets
  today called out as absurd — repurpose them.)
- **New option: OTC vending kiosk** — a SA telehealth/OTC dispensing machine
  Jaco met at the TLC conference (deck available from him); auto-dispenses
  OTC; unresearched.
- **New option: deliberate non-intervention** (Gillian, Clint agreeing): do
  not plaster; let the two stores keep running their two processes as a
  natural experiment, let frontline staff keep adapting ("the people living
  in the experience are changing it to suit the day"), observe, and spend
  the team's capacity on the strategic future state.

## Future-state constraints reaffirmed
- ROWA: ~100-107 stores earmarked (about a third of the estate), first store
  next year, "maybe 2" — versus ~20 new stores opening before then. The
  interim solve is unavoidable (Jaco).
- Bricks will initially SLOW dispensing (Unisolv muscle memory lost); OCR
  won't be trusted for dosages initially (Keagan).
- Integrated Orders and the scripting future-state work may invalidate any
  interim fix — "sit with intentional pain" is a legitimate strategy
  (Gillian), and the walk-back framing is not for the executive audience
  (Tamsin).

## Decisions and next steps
1. Tamsin synthesises; define **guardrails/principles** for the decision
   (health authority; never trade off the urgently sick; retail-vs-health
   experience tension; effort-now vs future-state value; customer-visible
   vs invisible changes).
2. **Data plan**: Melrose mission mix + OTC sales vs Tanya Ponter's original
   projections; Irene split already obtainable from the dispensary manager;
   Lizette to run Saturday intercept studies at both stores; Terrence
   voice-note transcript to be pulled from Dovetail (Lizette).
3. **Treat the two stores as a running A/B experiment (~3 months)** with an
   explicit measurement plan and hypotheses, including possibly pulling
   forward the digital OTC shelf as a cheap experiment ("really not a hard
   thing to do").
4. **Next workshop includes frontline staff** (Firaz, Terrence, Arna, Mona
   Lisa), with Anne present to hear ground truth — then play options +
   trade-offs (including "do nothing and measure") back to business/Steer
   Group.

# Verbatim excerpts

> "They're not really breaking the system. They're just skipping the
> regulatory part of the system." (Gillian, on Irene)

> "In Irene, your OTC [is] at 60% sales for OTC versus 40… which is your
> scripting." (Gillian, figures from the Irene dispensary manager)

> "It's not that Irene is the exception. It is a preview of what's to come."
> (Tamsin)

> "The market has set a precedent." (Clint, on Medirite/Clicks visible-OTC
> single-queue model)

> "You need to put barriers between the general public and medication…
> that creates an air of health authority… we've taken [those cues] apart,
> right or wrong." (Clint)

> "We don't have to recouple to decouple… engineer the health authority back
> into it." (Clint)

> "When a patient walks through the door, they are not a customer." (Clint)

> "Even though they've introduced [the workaround]… if you have 2 customers
> that come in with long scripts, it still absolutely drowns the system."
> (Gillian, relaying Terrence on Saturdays)

> "They are going to have chaos whether or not they're doing the OTC or not
> on high volume days." (Gillian)

> "Essentially what the team [in Irene] are doing is the manual version of
> the ROWA." (Tamsin)

> "Sometimes just not doing anything at all, watching what they do… is maybe
> the smartest decision we can make." (Gillian)

> "I don't have data. I would love to have more data… we don't know enough."
> (Lizette)

# Used in
- [[wiki/dischem/store-of-the-future-programme]]
