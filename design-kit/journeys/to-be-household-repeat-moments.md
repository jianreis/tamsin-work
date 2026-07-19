---
type: journey
title: "To-be journey (v2, moments rework) - the household repeat, in moments"
state: to-be
variant: aspirational
persona: "[[design-kit/personas/insured-chronic-multimorbid|Nomvula Khumalo]] (insured) / [[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] (cash)"
status: reviewed
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, journey/refill, journey/submit, journey/dispense, journey/collect, journey/deliver, journey/adhere, topic/chronic, region/za]
sources: []
created: "2026-07-17"
updated: "2026-07-17"
---

# To-be journey (v2) - the household repeat, in moments

This is the **content spec and build source** for deliverable
`09-tobe-household-repeat-moments.html` - the reworked future-state household
repeat journey. It supersedes nothing: deliverable 05 stays untouched as the
previous treatment and the deep blueprint reference. This version restructures
the same journey around a **phase spine with pulled-out moments**, using the
framing lens canonised in [[design-kit/templates/concept-card-template]].

All structure, titles, phase content and moment cards below were agreed with
Tamsin (2026-07-17 working session). Do not redraft them casually; they are the
approved copy.

## The taxonomy (agreed)

- A **journey** is the end-to-end. It decomposes into **phases** (the
  mechanical, linear spine people already understand).
- Each phase has **activities** - the mechanics, written as plain-language
  story paragraphs from the customer's side of the line of interaction only.
- A **moment** is not a structural unit. It is a strong emotional response to
  an activity or phase - the thing someone retells long after the mechanics
  are forgotten. **Moments of truth** (⭐) are the higher-stakes subset.
- **Each moment must earn its keep**: a genuine source of friction or delight,
  anchored on a real current-state Dis-Chem gap, staging a stark contrast
  between today and the future state. Hygiene steps never become moments.
- Moments map onto the **concepts** in `deliverables/08-concepts.html`
  wherever one exists; the moment card carries concept pills that link there.

## The phase band schema (agreed, revised 2026-07-17)

> Revision note: the original schema carried a "customer need" line and a
> snappy "gist" line per phase. In review these read as two stacked aphorisms
> that pre-spoiled the moment cards below them (the wrapper competing with
> the content). The schema now merges them into ONE functional orienting
> sentence, and moves ALL snap out of the phase layer. Contrast needs a quiet
> ground for a loud figure.

Each phase carries five bands, in order:

1. **Number + title** - strictly mechanical, a signpost ("Signing up", "The
   order assembles", "Prepared"). Never a slogan or a claim; all the poetry
   lives in the moments. Once-off phases are badged "once, not per cycle"; a
   cross-cutting failure track is a **parallel band** (∥, "any phase").
2. **Orienting sentence** - one sentence, ~25 words or fewer, functional and
   hardworking: it tells a cold reader where they are in the journey and
   what this phase covers, and deliberately says nothing quotable. No
   metaphor, no inversion, no aphorism. Title + orienting sentence together
   set the scene; that is their whole job.
3. **Activities** - the customer's actions only, written as an unhurried
   plain-language story: one or two short paragraphs per economy, mechanics
   only (what arrives, what it contains, what the person does, what their
   options are). Sequence is told honestly (pricing resolves backstage
   BEFORE the notice). **No payoff lines**: every emotional landing belongs
   to a moment card, and any story sentence that lands one is cut. The
   cover test: hide the moments and the phases read as a clean, calm
   process description; hide the phases and the moments still hit at full
   force.
4. **Economies** - one journey structure, two full renderings behind a
   toggle (insured / cash), never an interleaved merge. Title and orienting
   sentence are shared; the story is written per economy in that economy's
   channel reality, with honest constraints stated plainly.
5. **Pinned moments + emotion** - which moment cards hang off the phase,
   plus one emotion value per economy for the curve.

**No prelude into the moment.** The orienting sentence plus a mechanics-only
story walk the reader to the moment's doorstep; the moment's own tag row is
the handoff. The moment shines brightest stepping out of plain prose.

**Behind the line:** unchanged - each phase has a collapsed panel with
frontstage and backstage lanes, capability chips whose tooltips hold the
vault citations (🔮 reform, ⚠️ assumption), and a regulatory line only where
a non-negotiable genuinely constrains the phase. Metrics deliberately
dropped.

## The moment card schema (agreed register)

The concept-card harness, re-aimed at before/after contrast, with the weight
on the human condition, not the machinery:

1. **Memory-line title** - first person, the sentence retold a month later.
2. **Today** - the current-state friction as lived, 2-3 sentences, carrying a
   verbatim quoted complaint where a genuine one exists (never manufactured).
3. **The future state** - the memory as it will be retold, emotion in the
   prose, with the first-order payoff highlighted (the `.why` device).
4. **Behind it** - a thin chip strip of capability names pointing at the
   parent phase's panel. Nothing more.
5. **Tags** - concept pills (linking to 08-concepts), phase, ⭐ where earned.

Style rule (the "M1 correction"): the moment card is dominated by the felt
contrast. If capability copy outweighs the human beat, the card is wrong.

---

## Journey metadata

- **Title:** Script Re-imagined - the household repeat, in moments
- **Use case:** the household medicine manager - one person, one account,
  managing her own chronic meds, her mother Grace's, and a child's needs.
  (Never "Gogo" - the mother is **Grace Khumalo**; see
  [[design-kit/personas/insured-chronic-multimorbid]].)
- **Philosophy:** Trust > Convenience > Speed (unchanged from 05).
- **Economies:** insured (Nomvula) / cash (Sipho), toggled.
- **Out of scope, signposted:** script-expiry renewal (the renewal journey /
  Script Renew concept); after-hours acute (deliverable 07's world).

## Phases

### P0 · Signing up *(once, not per cycle)*

- **Orienting line:** The one-time setup: who is in the household, which day suits, how to pay, and in which language - everything after runs on these answers.
- **Nomvula:** She signs the household up for the repeat service from the app.
  Her own chronic scripts and Grace's go in together, under the proxy consent
  already recorded on her profile. Then the preferences, each with a sensible
  default: delivery on Fridays after five, to home; the branded medicines she
  knows, so no generic substitution; Discovery first, with a card on file for
  anything the scheme declines; English for her messages, isiZulu for Grace's
  pack. She reviews the summary and confirms.
- **Sipho:** He signs up in a WhatsApp conversation, in isiZulu, on the phone
  he already has - no app, no download. His blood-pressure tablets go in, and
  his mother's chronic medicine comes across from the public CCMDD programme
  onto the same arrangement. He sets collection to the locker at the Capitec
  branch by the taxi rank, on payday Friday; cheaper generics by default;
  cash at the bank counter when he collects.
- **Behind the line:** repeat-service enrolment onto one household profile
  [[wiki/concepts/identity-and-consent]]; preference store (day, time-of-day,
  payment order, language per member, collection point); recorded POPIA-grade
  proxy consent [[wiki/concepts/identity-and-consent]],
  [[wiki/sa-regulatory/e-prescription-telehealth-popia]]; CCMDD-to-retail
  bridge 🔮 [[wiki/medical-schemes/courier-chronic-pharmacy-models]];
  partner-bank locker network ⚠️ UNVERIFIED (design assumption - logged in
  meta/punchlist.md).
- **Moments:** M0. **Emotion:** N 4 · S 4 (trigger -> calm).

### P1 · The order assembles

- **Orienting line:** A week before run-out, the order is assembled, priced and funded backstage - only then does the household hear about it.
- **Nomvula:** A WhatsApp message arrives: what has been prepared for her and
  Grace, what Discovery has covered, what (if anything) she pays, and the
  Friday it arrives. No reply is needed. Amend, snooze or swap-a-line sit
  behind one tap, for the months something changes.
- **Sipho:** The same message lands in isiZulu, small enough to open on any
  signal: his tablets and his mother's repeat, the cash price itemised in
  rand - tablets, dispensing fee, total - her CCMDD line at R0, and the
  payday Friday it will be ready at the bank. No reply is needed; one reply
  moves the date if it clashes.
- **Behind the line:** refill prediction from dispensing history
  [[wiki/digital-transformation/adherence-tech-and-digital-therapeutics]];
  auto-assembly of eligible repeats (BRIX)
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; funding
  resolved BEFORE the notice - scheme pre-adjudication
  [[wiki/medical-schemes/realtime-claims-switching]] / itemised SEP + fee cash
  price [[wiki/sa-regulatory/sep-dispensing-fee]]; one consented, opt-out-able
  household notice [[wiki/sa-regulatory/e-prescription-telehealth-popia]],
  [[wiki/consumer-context/digital-access-and-whatsapp]].
- **Moments:** M1 ⭐ · M2 ⭐. **Emotion:** N 5 · S 4 (calm).

### P2 · The order window

- **Orienting line:** Between the notice and the evening before delivery, the pending order stays open for the rest of the household's Dis-Chem shopping.
- **Nomvula:** Until 18:00 on Thursday, the pending order accepts additions
  from the shop side of Dis-Chem - toiletries, vitamins, baby, cosmetics.
  Suggestions are drawn from her own purchase history, specials first, and
  each added item shows its price as it goes in. Everything arrives in the
  same parcel, on the same delivery, with no separate fee.
- **Sipho:** A bank locker carries medication only, so the window does not
  open on his route - the message states this plainly and offers nothing it
  cannot deliver. His order remains the family's medicine, priced upfront,
  ready on payday.
- **Behind the line:** open-order basket with a stated cutoff; suggestions
  drawn from the customer's own purchase history (specials-aware) ⚠️
  UNVERIFIED (retail-attach mechanics - design assumption, logged);
  consolidation into one parcel and one route
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; channel
  constraint rule - locker/bank routes are medication-only, stated upfront.
- **Moments:** M3. **Emotion:** N 4 · S 3 (calm).

### P3 · Prepared

- **Orienting line:** The order is now checked, picked and packed at the pharmacy - clinical checks first, then assembly into the household's pack.
- **Nomvula:** The order's status moves on its own: being prepared, checked,
  packed. The check is openable - interactions across the family's medicines,
  allergies, doses, duplicates, script validity - reviewed and signed off by
  the pharmacist on duty. The medicine is then machine-picked, verified by
  camera against each script, and packed by person, day and time, with the
  shop items in the same box.
- **Sipho:** The same preparation, to the same standard: robotic pick, camera
  verification, pharmacist sign-off. His status arrives in isiZulu, short
  enough for any phone, with the same list of what was checked. His mother's
  tablets are packed so that mornings and evenings stay separate.
- **Behind the line:** AI clinical co-pilot drafts the household-wide check
  stack 🔮 [[wiki/digital-transformation/ai-in-pharmacy]]; **non-negotiable:**
  a registered pharmacist's sign-off remains the clinical gate
  [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]]; ROWA automated picking
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; vision
  verification against the script
  [[wiki/digital-transformation/pharmacy-automation-and-robotics]]; adherence
  dose-pack per person/day/time
  [[wiki/dispensing-practice/adherence-packaging]]; end-to-end workflow
  tracking [[wiki/digital-transformation/dischem-scripting-tech-roadmap]].
- **Moments:** M4. **Emotion:** N 4 · S 4 (calm, trust building).

### P4 · In hand

- **Orienting line:** Delivery day: the parcel travels to the household by courier, or waits at the collection point near home.
- **Nomvula:** On Friday morning the delivery window firms up and she
  confirms it with a tap. The parcel is trackable through each stage -
  packed, dispatched, stops remaining - until the driver scans the QR on her
  phone at the door, which closes the order as proof of delivery. If the day
  changes, pausing or switching to a locker is a tap in the same thread.
- **Sipho:** The PIN arrives on WhatsApp on payday Friday. At the Capitec
  counter he pays the quoted amount in cash, and the payment releases the
  locker - collection and payment in one visit, with no street address
  involved. If the locker is out of service, the reroute arrives before he
  travels, and the staffed pharmacy counter stays available as the fallback.
- **Behind the line:** consolidation and routing with proof-of-delivery
  (VC -> PICCUP + POD)
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; closed-loop
  tracking to actual handover (QR)
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; near-home
  locker with one-time PIN (Pelebox pattern)
  [[wiki/consumer-context/last-mile-addressing-logistics]]; scheduled-medicine
  locker release 🔮 [[wiki/sa-regulatory/courier-online-pharmacy-rules]];
  cash-payment-releases-locker at a partner bank ⚠️ UNVERIFIED (design
  assumption, logged); courier licensing + cold chain
  [[wiki/sa-regulatory/courier-online-pharmacy-rules]].
- **Moments:** M5 ⭐. **Emotion:** N 5 · S 5 (calm).

### P5 · Taking it

- **Orienting line:** The medicine is home; what remains is the everyday routine of taking it - three people, three different schedules, week after week.
- **Nomvula:** The household's medicine arrives as one pack, organised by
  person, day and time. Each dose is grouped and labelled - Grace's in
  isiZulu, hers in English - and the full directions are printed in the pack
  and available on her phone. Reminders are set per person and tied to
  routine; any of them switches off in one tap. When a script eventually
  nears its expiry, the renewal journey takes over - nothing here lapses on
  its own.
- **Sipho:** His and his mother's tablets arrive pre-sorted into labelled
  doses, directions printed in the pack. Each medicine also has a short usage
  guide he can open on WhatsApp, in isiZulu, whenever a question comes up.
  Reminders arrive as brief texts or voice notes timed to his routine, and
  stop the moment he replies stop.
- **Behind the line:** adherence dose-pack + hybrid print/digital
  instructions [[wiki/dispensing-practice/adherence-packaging]]; consented,
  opt-out-able reminders tied to routine
  [[wiki/digital-transformation/adherence-tech-and-digital-therapeutics]];
  per-medicine WhatsApp usage guide
  [[wiki/consumer-context/digital-access-and-whatsapp]]; **non-negotiable:**
  GPP counselling at handover [[wiki/sa-regulatory/pharmacy-act-sapc-gpp]];
  renewal signposted to the renewal journey (Script Renew concept), out of
  scope here.
- **Moments:** M6. **Emotion:** N 5 · S 4 (calm).

### ∥ · When it goes wrong *(parallel - any phase)*

- **Orienting line:** A claim declines, an item runs short, a locker goes down - this track is how the service responds, whatever the phase.
- **Nomvula:** If Discovery declines a line, a message sets out what was
  declined, why, and the choices: charge the card on file, take the funded
  generic this once, or talk to a pharmacist. One tap resolves it and the
  order keeps its place. A stock-out offers the same structure: take the
  generic, split the delivery so the rest arrives now, or hold the order -
  decided in the same thread.
- **Sipho:** A shortage offers the generic he already prefers, or splits the
  order so his mother's medicine arrives on time regardless; his place is
  kept either way. A locker outage is flagged before he travels, with the
  reroute arranged. A pharmacist is reachable in the same WhatsApp thread,
  in isiZulu, at any point.
- **Behind the line:** real-time decline detection at pre-adjudication
  [[wiki/medical-schemes/realtime-claims-switching]]; in-flow recovery options
  with one named owner per exception (Virtual Manager)
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; split
  delivery on stock-out ⚠️ UNVERIFIED (design assumption, logged); reroute on
  locker failure [[wiki/digital-transformation/dischem-scripting-tech-roadmap]];
  the recovery principle [[wiki/concepts/graceful-failure]].
- **Moments:** M7 ⭐. **Emotion:** N 3 -> 4 · S 3 -> 4 (agitation -> loyalty).

## Moment cards (approved copy)

> Quotes are verbatim from cited vault sources. M3 carries no quote by design
> (its "today" is an errand pattern, not a complaint); M6 carries a cite chip
> instead of a quote (preference signal, not quotable complaint).

### M0 · "I told them once how I want it"

*Phase 0 · Concepts: CarerConsent · Auto-Refill · The Household Medicine Cabinet*

**Today** every interaction starts from zero. She carries Grace's ID to the
counter, explains again that yes, she is allowed to collect her mother's
medicine, and types her details into forms that already hold them. *"Let me
manage all of them in one place, and don't make me prove every single time
that I'm allowed to collect Mama's medicine."*
[[design-kit/personas/caregiver-proxy-collector]]

**In the future state** the service asks her everything exactly once - whose
medicine she manages, which day suits the household, how she wants to pay and
what happens if the scheme baulks - and then never asks again. **Being
believed the first time is the whole experience**: her authority over Grace's
care is recorded, not re-litigated. Sipho does the same from a WhatsApp chat,
in isiZulu, pointing his collections at the Capitec branch he already visits
on payday. Ten minutes, once, and the service knows the household better than
the counter ever did.

*Behind it:* recorded proxy consent (POPIA-grade) · repeat-service enrolment ·
preference store -> phase 0

### M1 · "My medicine ordered itself" ⭐

*Phase 1 · Concepts: Auto-Refill · Script Sync*

**Today** this is a chore she owns. She has to notice the pills running low,
reopen an app flow that loops back on itself, and confirm each family member
separately - every month, forever, with a hard break when the script expires.
*"I have been pulling at my hair trying to order my medication via the App or
even using the WhatsApp service."*
[[wiki/dischem/pharmacy-complaints-pain-points]]

**In the future state** the message arrives before she thought of it: hers
and Grace's medicine, assembled, funded, arriving Friday as always. She reads
it, puts the phone down, and gets on with her day. **The chore she has
carried for years simply isn't hers anymore** - not made easier, made *gone*.
The only feeling left is the mild surprise of noticing its absence. For Sipho
the same relief lands in isiZulu, on the phone he already has, with nothing
to install and nothing to spend.

*Behind it:* refill prediction · auto-assembly (BRIX) · priced-before-it-speaks ·
one synced household date -> phase 1

### M2 · "The only thing I ever bought blind - not anymore" ⭐

*Phase 1 · Concepts: Real-Time Transparency*

**Today** medicine is the one purchase where the price is a secret until the
end. She queues, hands over the script, and learns what she owes when it is
too late to plan around it; he travels first and discovers at the till
whether the trip was affordable. *"I am horrified that the pricing of
scheduled medication differs so dramatically from one Dis-Chem pharmacy to
another."* [[wiki/dischem/pharmacy-complaints-pain-points]]

**In the future state** the number is in the message, before anything is
committed. Nomvula sees what Discovery covers and the R42 that it doesn't,
while the order is still hers to change. Sipho sees the itemised rand amount -
tablets, dispensing fee, total - and his mother's line at R0 on CCMDD,
*before* he decides to travel. **Medicine finally behaves like everything
else they buy: the price up front, the decision theirs.** The till stops
being a place where things are revealed.

*Behind it:* pre-adjudication before notice · SEP + fee price engine ·
itemised in-language quote -> phase 1

### M3 · "While we're here... - without going anywhere"

*Phase 2 · Concepts: The Standing Order*

**Today** the pharmacy trip did double duty - collect the script, grab the
sunscreen, the toothpaste, whatever winter demands. When the medicine starts
arriving by itself, that errand logic has nowhere to live: the delivery
solves the trip and quietly un-solves the shopping.

**In the future state** Friday's medicine is an open order until Thursday
evening, and the household treats it the way it treats anyone already going
to the shops: *while you're there, grab...* A special on the vitamin C
effervescents she's bought before surfaces as winter sets in; she taps it
into the parcel next to Lethabo's toothpaste. **The trip she no longer makes
still does double duty.** One parcel, one handover, the week's small
logistics quietly absorbed. For Sipho the window stays shut - a bank locker
carries medication only - and the card says so plainly rather than
pretending otherwise.

*Behind it:* open-order window with cutoff · history-based suggestions
(specials) · one consolidated parcel -> phase 2

### M4 · "Every check ran before it left the building"

*Phase 3 · Concepts: The Named Check*

**Today** the safety work is invisible, so the customer only ever meets its
failures. Nothing tells her whether anyone looked at the interactions between
her tablets and Grace's; the first sign that something slipped is an empty
space in the packet at home. *"On opening the packet a few days later, I
discovered my blood pressure tablets were missing."*
[[wiki/dischem/pharmacy-complaints-pain-points]]

**In the future state** the due diligence is shown, not assumed. Her status
expands into the actual list: interactions across the family's medicines ✓,
allergies ✓, dose ✓, no duplicates ✓, script valid ✓ - signed by Naledi M.,
pharmacist. **Someone qualified did the worrying, and she can see exactly
what they worried about.** Sipho reads the same list in isiZulu and knows his
family's parcel passed the same checks as anyone's, however he pays. The fear
that rides along with medicine - *did anyone actually check this?* - has an
answer with a name on it.

*Behind it:* household-wide clinical check stack (AI-drafted,
pharmacist-signed) · vision verification on pick · itemised check status ->
phase 3

### M5 · "I could track it from Dis-Chem's door to mine" ⭐

*Phase 4 · Concepts: Real-Time Transparency*

**Today** the promise breaks at the worst point - after the money, before the
medicine. An order goes "out for delivery" and then simply doesn't arrive,
and chasing it means a phone that rings unanswered. *"I received a
notification that it has been processed on my medical aid and was out for
delivery. I did not receive it."*
[[wiki/dischem/pharmacy-complaints-pain-points]]

**In the future state** the parcel is never out of sight between their door
and hers - packed, dispatched, six stops away, two, here - and the loop only
closes when it is physically in her hands. **Being stood up by a system ends
when the system can't quietly disappear.** For Sipho arrival looks different
and just as certain: a WhatsApp PIN, the Capitec counter on payday, cash paid
and the locker opens - payment and collection in one visit, near home, no
address required, nobody's delivery van hunting an unnumbered street.

*Behind it:* closed-loop tracking to handover · QR / proof-of-delivery ·
bank-locker release on cash payment -> phase 4

### M6 · "Medication you can't take wrong"

*Phase 5 · Concepts: Made-for-Me Packaging*

**Today** taking it right is the customer's problem. Someone sorts the week's
pills into a plastic organiser, squints at instructions written in a second
language, and hopes Grace doesn't mix up her mornings and evenings - because
the label was written for a regulator, not for her.
[[wiki/dischem/store-of-the-future-customer-voice]]

**In the future state** the pack arrives already sorted - by person, by day,
by dose - with the directions in the language the house actually speaks.
**Getting it wrong now requires effort; getting it right requires none.**
Grace's mornings tear off in order. Sipho's printed label survives
load-shedding, and a WhatsApp usage guide answers "how do I take this?"
whenever the question arises. The nervous ritual at the kitchen table -
pills, box, guesswork - just isn't part of having medicine anymore.

*Behind it:* adherence dose-pack (per person, date, time) · in-language
hybrid print + digital instructions · WhatsApp usage guide -> phase 5

### M7 · "Medical aid said no. Dis-Chem said 'let's make a plan.'" ⭐

*Parallel track · pays off the phase-0 preferences*

**Today** a rejected claim is a verdict delivered in public, at the till,
with a queue behind you and no path forward - the scheme blames the pharmacy,
the pharmacy blames the scheme, and the customer goes home without the
medicine. It is the failure that makes people leave: *"Move scripts to Clicks
or local independents, willing to pay significantly more for relationship
care."* [[wiki/dischem/dischem-social-sentiment-trust-journey]]

**In the future state** the problem arrives already accompanied by its
solutions. The moment Discovery declines a line, Nomvula gets a
plain-language message: what was declined, why, and three live options -
charge the card she saved at setup, take the funded generic this once, or
talk to a pharmacist now. One tap and the order carries on; nothing restarts,
nothing is surrendered at a counter. **A rejection stops being a dead end and
becomes a decision she gets to make.** A stock-out behaves the same way: take
the generic, or send the rest now and the missing item follows on its own -
her place in the queue is never the thing at risk.

*Behind it:* real-time decline detection · in-flow options (card on file /
generic / pharmacist) · split-delivery on stock-out · order holds its place
-> parallel track

## Open questions

- Partner-bank locker (Capitec) and cash-payment-releases-locker: plausible
  and strongly aligned with [[wiki/consumer-context/last-mile-addressing-logistics]],
  but no vault source yet - logged in meta/punchlist.md.
- The order window's retail-attach mechanics (history-based specials): design
  assumption, no vault source - logged.
- Split delivery on stock-out: operational feasibility unverified - logged.

## See also

- [[design-kit/templates/concept-card-template]] - the harness this adapts
- [[design-kit/templates/future-state-blueprint-board-style]] - visual language
- `deliverables/05-tobe-future-state-journey.html` - previous treatment, kept
  as the deep blueprint reference
- `deliverables/08-concepts.html` - the concept set the moments hang off
