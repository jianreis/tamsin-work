---
type: journey
title: "Sipho's repeat as a WhatsApp conversation - channel mock spec"
state: to-be
variant: channel-mock
persona: "[[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] (cash)"
status: draft
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, domain/consumer, topic/e-prescription, journey/refill, journey/collect, region/za]
sources: [src-dc-complaints-jan2025, src-con-datareportal-digital-2024, src-con-ramp-data-prices, src-con-pelebox]
created: "2026-08-07"
updated: "2026-08-07"
---

# Sipho's repeat as a WhatsApp conversation - channel mock spec

Content spec and build source for `deliverables/11-sipho-whatsapp-flow.html`.
This deliverable dramatises the **cash track of the approved #09 journey**
([[to-be-household-repeat-moments]]) as literal WhatsApp screens: every message
Sipho sends or receives, rendered in the channel's real UI mechanics, with an
annotation rail explaining which WhatsApp Business Platform feature carries
each beat and which persona constraint it honours. It invents no new service
behaviour: where #09 says "the chat shows me the plan", this spec decides what
that chat message literally looks like, and nothing more.

Process: feature mapping proposed and reviewed in situ; P1 mocked
copy-complete first (pass approved by Tamsin 2026-08-07, "proceed with the
full journey"); all seven phases now scripted and built to the same rules.
Register is **annotated** - a phone frame per phase plus a side-rail of
feature callouts - and the chat renders in **English for the executive
audience**, with a standing annotation that production renders it in the
language Sipho chose at sign-up. Previous deliverables stay untouched.

## Ground rules

1. **Copy fidelity.** Chat copy derives from the approved #09 cash activities.
   The #09 spec's first-person register rules apply to any connective copy;
   the messages themselves are service UI copy and follow the persona's
   constraints instead: short, plain, no jargon, price in rand, nothing that
   assumes app fluency.
2. **Data frugality is visible.** Business messages are text-only by default -
   no image headers, no PDFs - because every download costs Sipho real money
   [[wiki/consumer-context/digital-access-and-whatsapp]]. Where WhatsApp offers
   a heavier mechanic (media header, document), the annotation says why the
   mock declines it.
3. **Silence is the golden path.** The service never stops because Sipho does
   not reply (#09 P1 A3). Buttons offer change, never demand confirmation.
   The one exception is sign-up itself, where the read-back confirm is the
   consent gate.
4. **Prices are illustrative.** Rand amounts in the mock demonstrate the
   price-before-travel mechanic and are not sourced SEP calculations.
   Flagged ⚠️ in the build.
5. **Platform capability claims are unsourced for now.** The WhatsApp Business
   Platform feature inventory used here (interactive reply buttons, max three;
   list messages, max ten rows; WhatsApp Flows; catalogue and order messages)
   comes from platform documentation knowledge, not from a vault source note.
   Logged in `meta/punchlist.md` item 11; an INGEST of the Meta developer docs
   should follow before this deliverable is presented as feasibility evidence.
6. **Walkthrough convention (build only).** Where a sheet or button set has
   one scripted continuation, the walkthrough row is highlighted with ▶; other
   rows are real UI but inert in the mock. Interactive beats the viewer must
   tap are dashed pills ("tap to send: ..."). Each phone has its own reset.

## Feature mapping - all seven phases

| Phase | Journey beats (#09 cash) | WhatsApp mechanics used |
|---|---|---|
| P0 Signing up (once) | Start in chat, language pick, add household, one date, locker choice, payment rule, confirm | Entry via click-to-chat / saved number; **list message** for language pick; **WhatsApp Flow** (native multi-screen form) for the household + medicines; costed sync plan in text; **reply buttons** for channel choice; **list message** for pickup points; read-back + reply-1 confirm |
| P1 Repeats are due | Notice a week out; price before travel; keeps going unless he says otherwise | **Utility template** (business-initiated, text-only); itemised price in-bubble; **reply buttons** (max 3): change / pause / person; **list message** behind "Change something"; voice-note + call-me-back fallback |
| P2 Adding to the order | Order stays open; suggest from history, specials first; free-text request, clarifying question, priced options | Numbered picks in text (reply 1/2/3); free text in, one clarifying question back as **reply buttons**; priced options as numbered text; running total re-stated in-bubble |
| P3 Checked and packed | Picked-and-checked status with the checks listed and the pharmacist named; packed-and-sealed with the PIN | Two **status templates**; checks itemised inline; PIN as a code line, issued at sealing; no tracking link that costs data to open |
| P4 In hand | Payday reminder with amount + PIN; pay at counter, PIN opens locker; contents check at the locker; photo escalation | **Reminder template** (amount + PIN restated); the handover itself happens off-channel (counter + locker, by design); post-handover contents list; **photo reply** in-thread escalates to a person phoning back |
| P5 Taking it | Look up any medicine; ask the pharmacist in-thread; reminders that stop when told | **List message** as the medicine cabinet index; free-text and **voice-note** Q&A; reminder message with the STOP keyword honoured instantly |
| ∥ When something breaks | Out of stock; locker down; script runs out; a person phones me back | **Exception templates** carrying the plan and its choices as **reply buttons**; told before travelling; "call me" one reply away; nothing dead-ends in the thread |

Out of scope, same as #09: script-expiry renewal (Script Renew) beyond its
∥ signpost, after-hours acute (#10's territory). In-chat payment is
deliberately absent: WhatsApp payments are not live in South Africa, and the
journey's cash-at-the-Capitec-counter step needs no channel payment anyway -
the constraint and the design agree.

## The timeline

One August 2026 cycle, plus sign-up in July and the failure band "in the
months after". Sign-up Mon 13 Jul · notice Fri 21 Aug (a week out) · add-ons
Sat 22 Aug · picked Wed 26 Aug · sealed Thu 27 Aug · collected Fri 28 Aug
(payday) · taking it Sat 29 Aug. Running cash total: R100.60 (tablets + fee)
-> R150.50 (+ multivitamins R49.90) -> R189.00 (+ cough syrup R38.50). All
amounts illustrative ⚠️.

## P0 script - Signing up (once) · Mon 13 Jul, from 17:05

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| W0 | out | Click-to-chat entry (prefilled, zero typing) | Hi |
| W1 | in | Welcome + list message (language) | Welcome to Dis-Chem Repeats. We get your family's medicine ready every month, close to home - no app, no forms, no queue in store. First: which language should we speak? [Choose my language] -> sheet: **isiZulu ▶** · isiXhosa · Sesotho · English · Afrikaans · Setswana |
| W2 | out | Sheet pick echoes | isiZulu |
| W3 | in | Text + WhatsApp Flow CTA | Who is this service for? You can add family you care for - if they've given their consent for you to manage their medicine, it covers this service too: ordering, paying and collecting. [Set up my family] -> Flow sheet: Sipho (you) - blood-pressure tablets ☑ · Your mother - chronic medicine (CCMDD) ☑, consent on her profile - one tap confirms · [Continue] |
| W4 | in | Costed sync plan (Script Sync visible) | Both added. Two people's medicine is now one thing to manage. Your tablets run out around the 20th; your mother's at month-end. The plan to bring them together: one small top-up for her this first month - **R23.80** - and from September, both are ready together on payday. Reply **1** to accept the plan. |
| W5 | out | Keyword reply | 1 |
| W6 | in | Reply buttons (channel choice) | How should your medicine reach you each month? Buttons: **[Collect near me ▶] [Deliver to me]** ("Deliver" plays: We can deliver where couriers reach - though most people near you choose the locker: no street address needed. Tap "Collect near me" to see the points close to home.) |
| W7 | in | List message (pickup points) | Closest collection points to home: [Choose a point] -> sheet: **Capitec branch, taxi rank - locker ▶** · Dis-Chem store, 14 km away |
| W8 | out | Sheet pick echoes | Capitec locker, taxi rank |
| W9 | in | Language-of-content note | Done - the locker at the Capitec branch by the taxi rank. No street address needed. You'll get everything here in isiZulu, and your mother's medicine instructions come printed in her language. |
| W10 | in | Payment rule | Paying: cash or instant EFT at the Capitec counter when you collect - paying is what opens the locker. And we use cheaper generics unless you tell us otherwise, so the price stays one you can plan around. |
| W11 | in | Read-back + confirm gate | Here is everything, read back: you + your mother · ready together on payday, every month · collect at the Capitec locker, taxi rank · pay cash at the counter, generics by default · isiZulu here, her instructions in her language. Reply **1** to confirm - and from here, it's remembered. |
| W12 | out | Keyword reply | 1 |
| W13 | in | Confirmation | Done, Sipho. Your first order will be ready on Friday 28 August - payday. We'll message you a week before with the price. That's it - it just runs. |

Key moment (rail, #09 verbatim): "I told them once how I want it" - one
WhatsApp conversation, a few minutes - and it's remembered: not asked again at
a counter, not to a driver, not at the bank. The CarerConsent concept, on the
phone he already owns.

Rail callouts: click-to-chat entry (a poster QR or saved number; the first
message is prefilled - sign-up starts with zero typing); language list first,
before anything else is asked; the Flow is the one place a form beats chat
(native multi-screen sheet, no webview, no data-heavy page) ⚠️; consent is an
already-granted fact whose scope is read back, never an in-flow event (POPIA:
recorded once, in-language, auditable); the costed top-up is Script Sync made
visible - priced before he says yes.

## P1 script - Repeats are due · Fri 21 Aug, 08:12 (pass approved 2026-08-07)

Unchanged from the approved P1 pass:

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| M1 | in | Utility template, text-only | Hello Sipho. Your family's repeat medicine for August is being prepared: **your blood-pressure tablets** and **your mother's chronic medicine**. It will be ready at the **Capitec locker at the taxi rank** on **Friday 28 August** - payday. You don't need to do anything. If nothing changes, it will be waiting. |
| M2 | in | Itemised price, in-bubble text | Here is the price, so you know before you travel. *Your tablets:* Amlodipine 5 mg, 28 tablets (generic) R64.40 + dispensing fee R36.20. *Your mother's medicine:* CCMDD chronic parcel - R0.00. **Total to pay: R100.60**, cash or instant EFT at the Capitec counter. Paying is what opens the locker. |
| M3 | in | Interactive reply buttons (max 3) | Happy with this? Then there's nothing to do - your order carries on by itself, this month and every month. Buttons: **[Change something] [Pause this month] [Talk to a person]** |

Branches unchanged: Change something -> list sheet (move date · pickup point ·
add medicine · language · skip my tablets · cancel the service · something
else, just type it); Pause -> August paused for his tablets, his mother's
still arrives, RESUME restarts; Talk to a person -> CALL ME keyword -> phoned
back before 17:00, in his language, data can lapse.

Key moments (rail, #09 verbatim): ⭐ "My medicine ordered itself" at M1;
⭐ "The only thing I ever bought blind - not anymore" at M2.

## P2 script - Adding to the order · Sat 22 Aug, from 09:40

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| N1 | in | Numbered picks, specials first | Your August order is still open until Wednesday 26 August. This route carries medicine only - no groceries - but the everyday kind is covered: flu syrup, painkillers, vitamins. From what you usually buy: **1.** Multivitamins (your mother's) - ON SPECIAL R49.90 · **2.** Panado, 24 tablets - R24.50. Reply with a number, or type what you need. |
| N2 | out | Numbered reply | 1 |
| N3 | in | Running total | Added: multivitamins, R49.90. New total to pay: **R150.50**. |
| N4 | out | Free text, first-class | cough mixture |
| N5 | in | One clarifying question, reply buttons | For a child or an adult? Buttons: **[For an adult ▶] [For a child]** ("For a child" plays: For a child we ask their age and weight first - a pharmacist checks every children's medicine before it's added.) |
| N6 | in | Priced options, numbered | Three options, all in stock: **1.** Cough syrup (generic), 100 ml - R38.50 · **2.** Benylin wet cough, 100 ml - R62.95 · **3.** ACC 200 sachets, 10 - R89.00. Reply with a number. |
| N7 | out | Numbered reply | 1 |
| N8 | in | Total restated + close | Added: cough syrup, R38.50. Your total at the Capitec counter is now **R189.00**. Everything rides in the same locker on Friday - nothing else to arrange. |

No key moment: #09 agreed the cash addition carries no moment. Rail callouts:
numbered picks (typing a digit beats tapping - works on any handset and any
literacy level); free text stays first-class with exactly one clarifying
question back; the running total is restated after every change, so
price-before-travel survives the additions; the medicine-only constraint is
stated plainly, as #09 requires.

## P3 script - Checked and packed · Wed 26 + Thu 27 Aug

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| C1 | in (Wed 11:05) | Status template 1 | Picked and checked. Your family's order was checked today, all of it together: your tablets against your mother's medicine and everything else you both take · allergies and doses · the scripts themselves. Signed off by pharmacist **Nomsa Dlamini**. |
| C2 | in (Thu 15:48) | Status template 2 + PIN at sealing | Packed and sealed. One parcel: your tablets, your mother's medicine, the multivitamins and the cough syrup - waiting for the courier run to the locker. Your locker PIN: **4729**. Keep it - it opens the locker on Friday, after you've paid. |

Key moment (rail, #09 verbatim): "Every check ran before it left the
building" - the same checks, the same standard, the same named signature. How
he pays has no bearing on how carefully his family's medicine is handled - and
for the first time, he can see that. The Named Check, identical on the cash rail.

Rail callouts: statuses arrive without being asked and carry their detail
inline - never "open a link to see more", because a link is a download; the
pharmacist is named at the final check (the #10 name rule); the handover
credential (PIN) is issued at the moment of sealing, where #09 issues it.

## P4 script - In hand · Fri 28 Aug (payday)

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| H1 | in (06:45) | Reminder template | Payday - and your parcel is in the locker at Capitec, taxi rank. Ready now. To collect: **1.** Pay **R189.00** at the counter - cash or instant EFT · **2.** Enter PIN **4729** at the locker. The same amount you saw before. Nothing has changed. |
| - | - | Off-channel note (system pill in the mock) | At the bank: Sipho pays R189.00 at the counter, the locker opens on his PIN. Nothing happens in the chat - and nothing needs to. |
| H2 | in (10:32) | Contents list after handover | In your parcel: Amlodipine, 28 tablets (yours) · your mother's CCMDD parcel · multivitamins · cough syrup. Check it now, at the locker - before the taxi. If anything is missing or wrong, send a photo here and a person will phone you straight away, in your language. |
| H3 | out | Photo reply (optional branch) | [photo of the open parcel] |
| H4 | in | Escalation confirm | Thank you - a pharmacy team member is phoning you now, while you're still there. |

Key moment (rail, #09 verbatim): ⭐ "I could track it from Dis-Chem's door to
mine" - the same certainty, differently shaped: payment and collection in one
visit, near home, with no address required - and if the locker is ever down,
he knows before he travels, not after.

Rail callouts: the reminder restates amount and PIN in one message -
everything the trip needs, loaded onto the phone before he leaves signal;
pay-then-PIN is the Pelebox pattern
[[wiki/consumer-context/last-mile-addressing-logistics]], with the
cash-at-the-partner-counter release a punchlist 9(a) assumption ⚠️; the
photo-to-phone-back escalation is the punchlist 9(e) mechanism ⚠️, checked at
the locker so a mistake never rides the taxi home.

## P5 script - Taking it · Sat 29 Aug

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| T1 | in (09:15) | List message (the cabinet) | Your family's medicine, whenever you want to look something up: [My medicines] -> sheet: **Amlodipine - your tablets ▶** · Your mother's chronic parcel · Cough syrup · Multivitamins |
| T2 | out | Sheet pick echoes | Amlodipine - your tablets |
| T3 | in | Plain-language entry | Amlodipine 5 mg - your blood-pressure tablets. One tablet every morning · with or without food · keep taking them even when you feel fine - that's the medicine working. If reading isn't enough, just ask here - a pharmacist reads this thread. Or send a voice note; we listen to those too. |
| T4 | in (09:16) | Reminder routing + STOP | Reminders: yours comes here at 20:00. Your mother's go to her phone - a short voice note in her language, timed to her mornings. Her printed day-by-day sheet is in the parcel, for the fridge. Reply **STOP** to any reminder and it stops. |
| T5 | in (20:00) | The reminder itself | Time for your tablet, Sipho. |
| T6 | out | Keyword reply (optional branch) | STOP |
| T7 | in | Instant opt-out honoured | Done - no more daily reminders. Everything else stays exactly the same. |

Key moment (rail, #09 verbatim): "Medication you can't take wrong" - the
basics done properly: a clear label on every pack, icons that speak before
words do, a sheet on the fridge, a guide on the phone. Taking it right isn't
something money buys - it comes with the medicine.

Rail callouts: the free adherence floor (iconised labels, the fridge sheet,
in-language instructions) lives in the parcel - the chat carries only the
look-up and the pharmacist; the cabinet is a list message, one sheet away,
zero downloads; voice notes work in both directions - his mother's channel as
much as his; STOP is honoured instantly and completely, because the research
shows help flips into harassment the moment agency is lost.

## ∥ script - When something breaks · the months after

Scenarios, not steps (#09 rule) - three episodes, each a bad-news message
that arrives carrying its plan:

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| X1 | in | Exception template + reply buttons | (Out of stock) One of your tablets is out of stock this month. Here is the plan - you choose: **1.** The cheaper generic you already prefer - ready on payday, same price · **2.** Split the order: your mother's medicine ready on payday regardless, yours follows a few days later, same locker. Nothing is decided without you. Buttons: **[Use the generic ▶] [Split the order] [Call me]** |
| X2 | in | Branch responses | Generic: Done - the generic will be ready on payday. Same price, same locker. / Split: Done - your mother's parcel is ready on payday; yours follows, and we'll message the day it lands - before you travel. / Call me: A person will phone you back before 17:00 today, in your language. |
| X3 | in | Told before travelling | (The locker is down) Before you travel today: the locker at Capitec is out of order. Your parcel is already at the pickup point nearby - same amount, same PIN, and we'll tell you the moment the locker is fixed. Your taxi fare is never spent on a closed door. |
| X4 | in | Script Renew signpost | (The script runs out) Your mother's script has one repeat left after this month. We've already sent the renewal request to her clinic - you'll see it move here, and it costs you nothing to chase. If payday comes before the new script is back, we'll tell you before you travel - with a plan from the pharmacist, and a person on the phone if you want one. |

No key moment: #09's ∥ moment of truth is medical-aid-specific and
insured-only; the cash recovery paths carry no separate moment (spec'd there,
kept here). Rail callouts: bad news arrives already carrying its plan, with
the choices as buttons - never a dead end; the taxi-fare rule - every failure
that can be known before he travels is told before he travels; renewal is the
Script Renew handoff, started weeks early, visible in the same thread; and
when things truly break, the human comes by phone, one reply away - the
loud human-not-bot beat the sentiment research demands.

## Build notes

- Page chrome sits in the #09/#10 family: brand band, ribbon, persona strip,
  phase spine (now all seven live, each node jumps to its phase).
- One phone frame per phase, each with its own annotation rail, reset button
  and walkthrough interactions; a shared script engine renders all seven from
  step data mirrored off this spec.
- Feature chips carry their basis in tooltips; platform-capability chips are
  ⚠️ until the Meta docs are ingested (punchlist 11).

## Open questions

- On the WhatsApp surface, do P3 and P4 want to compress into one "ready and
  collected" episode? The channel collapses what the journey page separates -
  parked for Tamsin's read of the full set.
- Whether the utility-template category (business-initiated, no 24-hour
  window) covers every business-initiated message in this flow under Meta's
  current template policy - part of the punchlist 11 ingest.
- The pharmacist name used at the P3 final check (Nomsa Dlamini) is new -
  confirm or align with a name from the wider journey set.

## See also

- [[to-be-household-repeat-moments]] - the approved journey this dramatises
- [[design-kit/personas/low-data-whatsapp-first-peri-urban]] - Sipho
- [[wiki/consumer-context/digital-access-and-whatsapp]] - the channel constraints
- `deliverables/09-tobe-household-repeat-moments.html` - the source journey
- `deliverables/08-concepts.html` - concepts referenced by the moments
