---
type: catalogue
title: "Service feature catalogue - by concept"
status: draft
tags: [design-kit, domain/ux, project/fos]
sources: [src-reg-medicines-act-101-1965]
created: "2026-10-08"
updated: "2026-10-08"
---

# Service feature catalogue - by concept

Every customer-facing feature of the future-state scripting service, grouped
under the concept that makes it work. Each feature goes to one business unit
to run. Asked for by Tamsin's executive, 2026-10-08.

This is a different cut from the work-to-be-done catalogue
([[design-kit/templates/work-to-be-done-catalogue-template]]). That one lists
the business abilities and the work behind them. This one lists the service
itself, in pieces a customer could point at.

## Rules (agreed with Tamsin, 2026-10-08)

1. **Concepts first.** Features are listed under the concepts in
   [deliverables/08-concepts.html](../deliverables/08-concepts.html). The
   journeys are the check, not the source.
2. **One home per feature: the concept that makes it work.** Where the
   customer sees a feature somewhere else, that concept lists it under
   *Uses*, not as its own. So one business unit runs cover status
   everywhere, instead of two teams running two versions.
3. **Name the thing.** A feature name is what a product team would call it -
   something you could point at on a screen, in a store or in a parcel. Then
   one line: what the customer can do with it. No slogans.
4. **What, not how.** No technology or process in the name or the line,
   unless the route is obvious.
5. **Customer-visible only.** Backstage work (automated picking, the central
   script registry, the due-date calculation) belongs in the work-to-be-done
   catalogue.
6. **Channel is a column, not a feature.** SMS, USSD and paper fallbacks are
   channels on an existing feature, not new features.
7. **Business unit** is left blank for Tamsin to complete.

**Channel key:** App · WA (WhatsApp) · Store · Portal (the doctor's
prescribing screen) · Paper · Phone. **Flags:** 🔮 needs regulatory change ·
⚠️ open question.

## Structural decisions made in this pass

- **Made-for-Me Packaging is merged into Made-for-Me Medicine.** The two
  cards describe the same dose pack, labels and printed schedule. Made-for-Me
  Medicine is the newer, broader card.
- **All content about a medicine lives in Made-for-Me Medicine**: what it's
  for, how to take it, what to expect, pill photos. One content library feeds
  the cabinet, the pack, the check-ins and the collection notes.
- **Archived concepts (Snap-a-Script, E-Script Token) have no features of
  their own.** Their promises already moved to other concepts. Sending a
  photo of a script sits in Core service, because it already exists in the
  app.

---

## The Household Medicine Cabinet

*The whole family's medicine, in one place.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| HMC-01 | **Family member profiles** | Add each person (themselves, a partner, a child, a parent) under one account, without a separate login for each. | App, WA | |
| HMC-02 | **Household view** | See everyone's medicine together, or switch to one person. | App, WA | |
| HMC-03 | **Medicine list per person** | See every medicine each person is on, current and past. | App, WA | |
| HMC-04 | **Add medicine from elsewhere** | Add medicine bought somewhere else by scanning its barcode or taking a photo. | App | |
| HMC-05 | **Private medicines** | Mark a medicine private and choose who sees it. To everyone else it doesn't appear in any view, reminder or message. The pharmacist's safety check still sees it. | App | |
| HMC-06 | **Dose reminders** | Set a reminder for each dose, at times that fit their day. Reminders go to the person taking the medicine, or to the carer for a child, and stop when a course ends. | App, WA | |
| HMC-07 | **Dose check-off** | Tick a dose off as taken. | App, WA | |
| HMC-08 | **My week at a glance** | See how the week's doses are going. | App | |

**Uses:** cover status per medicine (RTT-01) · what's due, per person (AR-01) ·
reorder (SO-03) · sharing the week with a carer (CC-04) · what each medicine is
for and pill photos (MFM-04, MFM-05).

## Real-Time Transparency

*Buying your medicine, as clear as buying your groceries.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| RTT-01 | **Scheme cover and co-pay quote** | See what the medical scheme will pay and what they will pay, before they commit. | App, WA, Portal | |
| RTT-02 | **Itemised cash price** | See the cash price up front: the medicine plus the set dispensing fee. | App, WA, Portal | |
| RTT-03 | **Generic alternative offer** | Be offered a cheaper or funded generic whenever one exists. | App, WA, Portal | |
| RTT-04 | **Live stock by store** | See which nearby stores have the medicine in stock before they order, not a yes or no for one store. | App, WA, Portal | |
| RTT-05 | **Script read-back** | See what was read from a photographed script, in plain words, before any price is quoted. | App, WA | |
| RTT-06 | **Can't-read alert** | Hear straight away when a script can't be read, with what happens next and who is looking at it. | App, WA | |
| RTT-07 | **Order status tracking** | Follow each step (received, checked, ready, on the way), with a "received ✓" the moment the pharmacy has the script. | App, WA, SMS | |
| RTT-08 | **Running order total** | See the total update each time an item is added. | App, WA | |

## The Pharmacy in the Room

*Your doctor and your pharmacy, finally in the same room.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| PIR-01 | **Send script from the consult** | Have the doctor send the script straight to Dis-Chem from the consulting room, with no paper to carry. | Portal | |
| PIR-02 | **Record shared with the doctor** | Let the doctor see their allergies, current medicine and cover for this consult only, by approving a one-time code. | Portal, SMS | |

**Uses:** cover, cash price, generic and stock shown on the doctor's screen
(RTT-01 to RTT-04) · received ✓ (RTT-07).

## CarerConsent

*You already manage their medicine. This makes it official.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| CC-01 | **Carer permission** | Give someone recorded permission to manage their medicine, so the carer acts for them without re-proving their authority. | App, WA, Store | |
| CC-02 | **Permission settings** | Choose what the permission covers (ordering, paying, collecting), and narrow or withdraw it at any time. | App, WA, Store | |
| CC-03 | **Collect-for-me code** | Send a code to someone they trust, who collects with only a parcel name and the code, never the medicines or history. | App, WA | |
| CC-04 | **Share my week with a carer** | Let a carer see how the week's doses went, only if they choose to. | App | |
| CC-05 | **Activity log** | See who did what on their account, and when. | App | |

**Uses:** the pharmacist's check on each person's script (NC-01).

## Auto-Refill

*Your repeat should just repeat.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| AR-01 | **Refill-due message** | Get a message a week before they run out, and confirm "same as last month" in one tap. | App, WA, SMS | |
| AR-02 | **Change, skip or snooze** | Change, skip or snooze any month's refill. | App, WA | |

**Uses:** order status tracking (RTT-07) · collect or deliver choice (F30-01).

## Script Sync

*One date, one pickup - the whole family's repeats together.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| SS-01 | **Family refill date** | Have every repeat in the household lined up to one date, in one order, through a plan a pharmacist signs off. Medicines that can't move (fixed cycles, month-by-month scheduled medicine, clinic programmes) stay put. | App, WA | |
| SS-02 | **Top-up fill** | Receive a short top-up of any out-of-step medicine to bring it into line. | App, WA, Store | |
| SS-03 | **Join the family date** | Be offered the family date for a new medicine once its dose has settled. | App, WA | |

**Uses:** refill-due message, one per household (AR-01).

## Script Renew

*When your script expires, we deal with the doctor.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| SR-01 | **Script expiry alert** | Be told before a script or its last repeat runs out. | App, WA, SMS | |
| SR-02 | **Renewal request to my doctor** | Agree once, and Dis-Chem asks their doctor for the new script, with recent history attached. | App, WA | |
| SR-03 | **Partner doctor** | Have a partner doctor review and re-issue the script when they don't have a doctor to hand. | App, WA | |
| SR-04 | **Bridging supply** ⚠️ | Receive a short supply from the pharmacist if the script lapses while the renewal is sorted. | Store | |

⚠️ SR-04: an emergency supply is lawful only within limits. Schedules 2-4 on
a non-recurring basis; Schedules 5-6 up to a 48-hour quantity
[[src-reg-medicines-act-101-1965]]
([[wiki/sa-regulatory/prescription-requirements-repeats]]). "Bridging" a
monthly repeat may exceed that.

**Uses:** doctor appointment booking, when the doctor wants a review (PWS-04).

## The Named Check

*Every script checked by a pharmacist with a name.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| NC-01 | **Named pharmacist sign-off** | See the name of the pharmacist who checked their script ("Checked by Naledi ✓"). | App, WA, Paper | |
| NC-02 | **Child dose check by weight** | Know a child's dose was checked against the child's weight. | App, WA | |

**Uses:** message a pharmacist (PWS-01).

## The 30/60 Fill

*Ready before you get there. Or home before you are.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| F30-01 | **Collect or deliver choice** | Choose collection or delivery, and how the pack is handed over (pharmacist at the counter, or express collect). | App, WA | |
| F30-02 | **Ready in 30 minutes** | Collect from a store within 30 minutes of the script arriving. | Store | |
| F30-03 | **Delivery within the hour** 🔮 | Have the script delivered to their door within the hour. | App, WA | |
| F30-04 | **Live delivery map** | Watch the driver on a map, with a real arrival time and proof of delivery. | App, WA | |
| F30-05 | **Service area and hours shown** | See where and when the 30- and 60-minute promises apply, before they choose. | App, WA | |

🔮 F30-03: delivering an acute script is restricted by SAPC rule 1.9.7(e).
Whether Dis-Chem's own same-metro delivery counts as "mail/courier" needs a
legal read (punchlist 10(k)).

**Uses:** order status tracking (RTT-07) · live stock by store (RTT-04).

## Express Collect

*The counter is there if you want it. Most days you won't.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| EC-01 | **Express collect unit** | Scan a code and take their pack, already waiting under their name, without queuing or speaking to anyone. | Store | |
| EC-02 | **After-hours collection** 🔮 | Collect from the unit on the store's outside wall after the store has closed. | Store | |
| EC-03 | **Notes printed at the unit** | Print the counselling notes at the unit, or have them sent instead. | Store, WA | |

🔮 EC-02: unattended after-hours release of scheduled medicine needs a
pharmacist-oversight model ([[wiki/concepts/unmanned-collection-points]]).

**Uses:** collect-for-me code (CC-03) · message a pharmacist and call-back
(PWS-01, PWS-02) · when-and-how guide (MFM-03).

## Made-for-Me Medicine

*Made to be taken right.* Absorbs Made-for-Me Packaging.

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| MFM-01 | **Dose sachets** | Opt in to medicine packed into sachets by day and time, ready to open and take. A paid extra. | Store, delivery | |
| MFM-02 | **Plain-language labels** | Read every label at a glance: icons and large plain text, in their own language. Free on every script. | Paper | |
| MFM-03 | **When-and-how guide** | Know when and how to take each medicine: with food or without, morning or evening, what to do if they miss one. | App, WA, Paper | |
| MFM-04 | **What it's for, and what to expect** | Read what each medicine is for, the side effects worth knowing and the leaflet's need-to-knows, in plain words. | App, WA, Paper | |
| MFM-05 | **Pill photos** | See a picture of each pill or pack, so it's recognisable at a glance. | App, WA | |
| MFM-06 | **Printed schedule** | Get the schedule and guide on paper, with no screen or data needed. | Paper | |

## The Pharmacist Who Stays

*Your pharmacist stays until you are better.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| PWS-01 | **Message a pharmacist** | Message a pharmacist at any point, ideally the one who checked their medicine, and get an answer. | App, WA | |
| PWS-02 | **Pharmacist call-back** | Ask for a pharmacist to phone them, including after hours. | Phone | |
| PWS-03 | **Course check-ins** | Get check-ins that follow their course ("day three: you should be feeling better - tell us if not"), ending when the course does. | App, WA, SMS | |
| PWS-04 | **Doctor appointment booking** | Book a teleconsult or a Dis-Chem clinic slot inside the same conversation, with the price shown before they agree. | App, WA | |
| PWS-05 | **Not-better follow-up** | Be helped back to a doctor if they aren't better by the day they should be. | App, WA, Phone | |

**Uses:** dose reminders that stop when the course ends (HMC-06) · what to
expect (MFM-04).

## The Pharmacy That Notices

*It notices when the same thing keeps coming back.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| PTN-01 | **Recurring-problem check-in** | Be told when the same problem keeps coming back, and be offered a check-in they can decline. | App, WA | |
| PTN-02 | **Public chronic medicine collection** 🔮 | Collect state-funded chronic medicine at a nearby Dis-Chem, where the family qualifies. | Store | |

**Uses:** doctor appointment booking (PWS-04) · script expiry alert (SR-01) ·
message preferences (CORE-08).

## The Standing Order

*The delivery is already coming. Add to it.*

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| SO-01 | **Open order window** | Add items to each repeat order until a stated cut-off. | App, WA | |
| SO-02 | **Suggestions from my shopping** | Be offered their usual buys, seasonal buys and current specials when the window opens. | App, WA | |
| SO-03 | **Add to my order** | Add any item to the order. Added items travel with the medicine and never hold it up. | App, WA | |
| SO-04 | **Symptom-relief suggestions** | Be offered priced products that ease the symptoms of an acute condition, alongside the medicine. *From 10: Acute; not on the concept card.* | App, WA | |

**Uses:** running order total (RTT-08).

## Core service

Features the journeys need that no concept owns. **First pass only**, from
10: Acute *Choosing how I get it* and 09: Repeat. The full journey walk will
add to this group.

| ID | Feature | The customer can… | Channel | Business unit |
|---|---|---|---|---|
| CORE-01 | **Send a photo of a script** | Send a photo of a paper script. Already live in the app. | App, WA | |
| CORE-02 | **Go-ahead to dispense** | Give an explicit yes before medicine is made up in a person's name. | App, WA | |
| CORE-03 | **Order confirmation** | Get one confirmation of method, store or slot, ready time, address and total. | App, WA, SMS | |
| CORE-04 | **Collections counter** | Collect from a separate counter where a pharmacist hands over and explains the medicine. | Store | |
| CORE-05 | **Delivery slots** | Choose a delivery slot from the times available. | App, WA | |
| CORE-06 | **Change until packing** | Change the slot or address until packing starts, and see when that cut-off is. | App, WA | |
| CORE-07 | **Collection point options** | Choose an off-site collection point. Told upfront what each point can carry (some take medicine only). | App, WA | |
| CORE-08 | **Message preferences** | Choose their channel and language, and switch any nudge off. | App, WA | |
| CORE-09 | **Saved addresses and stores** | Have their address and usual store filled in. | App, WA | |
| CORE-10 | **Pay with a saved card** | Pay with a saved card, charged when the order is packed. | App | |
| CORE-11 | **Pay once at collection** | Pay one total at the counter: the quoted price plus anything added. | Store | |

## Left out on purpose (backstage)

These appear on concept cards but no customer touches them. They belong in
the work-to-be-done catalogue: automated picking and counting · the central
script registry (fill once, at any store) · refill due-date calculation ·
the automated keying of scripts.

## Open questions

- SR-04: what exactly can a pharmacist supply while a renewal is sorted?
  Check against the emergency-supply limits.
- F30-03, EC-02, PTN-02: regulatory flags carried from the journeys.
- Core service is incomplete until all four journeys are walked.

## See also

- [deliverables/08-concepts.html](../deliverables/08-concepts.html)
- [[design-kit/templates/work-to-be-done-catalogue-template]]
- [[design-kit/journeys/to-be-acute-moments]]
- [[design-kit/journeys/to-be-household-repeat-moments]]
