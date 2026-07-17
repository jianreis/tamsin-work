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

## The phase band schema (agreed)

Each phase carries six bands, in order:

1. **Number + title** - plain and mechanical; the poetry lives in the moments.
2. **Customer need** - one line from the customer's side, true today AND in
   the future state; only the fulfilment changes.
3. **The gist** - one sentence for the cold reader; this is where the snappy
   line lands.
4. **Activities** - the customer's actions only, written as an unhurried
   plain-language story (one or more paragraphs, not bullets, not forced-snappy).
   Behind-the-line machinery never leaks into the story.
5. **Economies** - the deliverable renders ONE economy at a time behind a
   toggle (as in 05). Title/need/gist are shared; the story is written per
   economy in that economy's channel reality. No inline economy markers.
   (When mockups come, each economy is effectively its own journey on its own
   channels, so content stays cleanly separable.)
6. **Pinned moments + emotion** - which moment cards hang off the phase, plus
   an emotion value per economy for the curve (the felt prose lives in the
   moment cards, not here).

**Behind the line:** each phase has a collapsed panel - the service blueprint
behind the story, as in 05 but relocated from moments to phases and trimmed.
It carries frontstage/backstage actions, the capabilities with vault citations
and 🔮 reform flags, and a regulatory line only where a non-negotiable
genuinely constrains the phase. Metrics are deliberately dropped (blueprint
material, not journey material).

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

### P0 · Set it and forget it *(once, not per cycle)*

- **Need:** "Tell them how our household works - once - and have it stick."
- **Gist:** Ten minutes, once: after this, the service knows the household
  better than the counter ever did.
- **Nomvula:** She signs the household up for the repeat service from the app.
  Her own chronic scripts and Grace's go in together - her authority over
  Grace's medicine is already on record, so nothing has to be proved again.
  Then the preferences, each with a sensible default she can simply accept:
  delivery on Fridays after five, to home. She stays on the branded medicines
  she knows, so no generic substitution by default. Discovery pays first, and
  she saves a card for anything the scheme ever declines. Labels and messages
  in English for her, isiZulu for Grace's pack. She reads the summary back,
  agrees, and that is the last time the service asks her any of it.
- **Sipho:** He signs up in a WhatsApp conversation, in isiZulu, on the phone
  he already has - no app, no download. His blood-pressure tablets go in, and
  his mother's chronic medicine comes across from the public CCMDD programme
  onto the same near-home arrangement. He picks the Capitec branch by the taxi
  rank as his collection point - he is there most paydays anyway - and sets
  collection for payday Friday. Cheaper generics by default, cash at the bank
  counter when he collects. The whole conversation takes a few minutes, and
  none of it ever has to be repeated at a counter.
- **Behind the line:** repeat-service enrolment onto one household profile
  [[wiki/concepts/identity-and-consent]]; preference store (day, time-of-day,
  payment order, language per member, collection point); recorded POPIA-grade
  proxy consent [[wiki/concepts/identity-and-consent]],
  [[wiki/sa-regulatory/e-prescription-telehealth-popia]]; CCMDD-to-retail
  bridge 🔮 [[wiki/medical-schemes/courier-chronic-pharmacy-models]];
  partner-bank locker network ⚠️ UNVERIFIED (design assumption - logged in
  meta/punchlist.md).
- **Moments:** M0. **Emotion:** N 4 · S 4 (trigger -> calm).

### P1 · The repeat runs itself

- **Need:** "Keep the household's medicine flowing without it being a job I
  own."
- **Gist:** Before anyone hears anything, the order has already been
  assembled, priced and funded - the notice is a statement of fact, not a
  request.
- **Nomvula:** A week before her medicine runs out, a WhatsApp message
  arrives. It tells her what has been prepared - her medicine and Grace's -
  what Discovery has covered, and that the parcel will arrive on Friday, the
  day she chose at setup. There is nothing she needs to confirm or fill in.
  If something needs to change that month - skip an item, move the date -
  she taps the message and adjusts it. Most months she reads it and puts the
  phone away.
- **Sipho:** The same week-out message lands in isiZulu, small enough to open
  on any signal. It lists his tablets and his mother's repeat, the cash price
  itemised in rand - tablets, dispensing fee, total - and her CCMDD line at
  R0, all ready for the Capitec locker on payday Friday. He does not need to
  reply. If the date clashes, one reply moves it.
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

- **Need:** "Let the delivery do what the trip used to do."
- **Gist:** Until Thursday evening, Friday's parcel is an open order - the
  household hands it the rest of the list.
- **Nomvula:** The notice she received is also an open order. Until six on
  Thursday evening, anything the house needs from Dis-Chem's shelves can ride
  along with Friday's medicine. A few suggestions come with it, drawn from
  what she actually buys - it is winter, so the effervescent vitamin C she
  bought last year is on special and top of the list. She adds it, and
  Lethabo's toothpaste, seeing each price as it goes in. No separate delivery
  fee, no second parcel - it is all one order arriving on the day she already
  chose.
- **Sipho:** His route runs through a bank locker, and a locker carries
  medication only - so for him there is no add-on window, and the message
  never pretends otherwise. Nothing is dangled that his channel cannot
  deliver. His order stays exactly what it is: the family's medicine, priced
  upfront, ready on payday.
- **Behind the line:** open-order basket with a stated cutoff; suggestions
  drawn from the customer's own purchase history (specials-aware) ⚠️
  UNVERIFIED (retail-attach mechanics - design assumption, logged);
  consolidation into one parcel and one route
  [[wiki/digital-transformation/dischem-scripting-tech-roadmap]]; channel
  constraint rule - locker/bank routes are medication-only, stated upfront.
- **Moments:** M3. **Emotion:** N 4 · S 3 (calm).

### P3 · Prepared

- **Need:** "Certainty that what's coming is exactly right - for everyone in
  the house."
- **Gist:** Nothing leaves the building unchecked - and the checking is
  shown, not asserted.
- **Nomvula:** While she gets on with her week, the order's status moves on
  its own: being prepared, checked, packed. The check is the part she can
  actually open: interactions across the family's medicines, allergies,
  doses, duplicates, script validity - each ticked, and signed at the bottom
  by Naledi M., the pharmacist who stands behind it. Then the household's
  medicine is picked and verified, packed into one pack organised by person,
  day and time, with the vitamin C and the toothpaste in the same box. She
  did nothing; she could have watched all of it.
- **Sipho:** The same preparation happens for his family's order, to the same
  standard - the robot picks, the cameras verify, a pharmacist signs. His
  status arrives in isiZulu, short enough for any phone: checked, by name,
  with the same list of what was looked at. His mother's tablets are packed
  so mornings and evenings cannot be confused. How he pays has no bearing on
  how carefully his family's medicine is handled - and now he can see that.
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

- **Need:** "The medicine actually in hand, when promised, without drama."
- **Gist:** A promise with a window, kept - visible from their door to yours.
- **Nomvula:** On Friday morning the day's window firms up and she confirms
  it with a tap. From there the parcel is never out of sight: packed,
  dispatched, a map with honest stops, two away, here. The driver scans the
  QR on her phone and the loop closes - proof of delivery, the whole
  household's medicine and the shopping in one box. If Friday had gone wrong,
  pausing or switching to a locker was a tap, not a phone call.
- **Sipho:** On payday Friday the PIN arrives on WhatsApp. At the Capitec
  branch he pays the amount from the quote - the same number he saw before he
  travelled - in cash at the counter, and the payment releases the locker.
  Under a minute, a plain parcel, no address needed, no delivery van hunting
  an unnumbered street. If the locker is ever down, the message reroutes him
  before he travels, and the staffed pharmacy counter remains the fallback.
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

- **Need:** "Taking it right, every day, without it being work."
- **Gist:** The pack, the label and the reminder are designed so the right
  dose is the path of least resistance.
- **Nomvula:** At home the pack does the thinking. Grace's mornings tear off
  in order, in isiZulu; Nomvula's twice-daily doses are grouped by day and
  time; the directions are large, plain and re-checkable on paper or on her
  phone. Reminders are tied to each person's routine - Grace's to mornings -
  and stop the moment anyone asks them to. When the scripts eventually near
  expiry, the renewal journey takes over; inside this journey, nothing ever
  simply lapses.
- **Sipho:** His printed label survives load-shedding, and for anything the
  label cannot carry there is a usage guide for each medicine on WhatsApp -
  short, in isiZulu, there when the question arises rather than only at the
  counter. Reminders come as brief texts or voice notes timed to his routine,
  and stop instantly if he says so. His mother's pack is organised so her
  tablets cannot be mixed up, whoever hands them to her.
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

- **Need:** "When something breaks, a way through - not a dead end."
- **Gist:** The problem arrives in the same message as its solutions - and
  the plan never dies at the counter.
- **Nomvula:** The month Discovery declines one line, the first she hears of
  it is a message that already contains the way out: what was declined, why,
  and three live choices - charge the card she saved at setup, take the
  funded generic this once, or talk to a pharmacist now. One tap, and the
  order carries on with its place in the flow intact. A stock-out behaves the
  same way: take the generic, have the rest delivered now with the missing
  item following on its own, or hold the order - her choice, made in the
  same thread.
- **Sipho:** When his tablets are short one month, the message offers the
  cheaper generic he already prefers, or splits the order so his mother's
  medicine is not held hostage to his - and his place is kept either way,
  so nothing costs him a wasted trip. If the locker is down on collection
  day he knows before he travels, with the reroute already arranged. And
  behind every message is a person: a pharmacist reachable on the same
  WhatsApp thread, in his language.
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
