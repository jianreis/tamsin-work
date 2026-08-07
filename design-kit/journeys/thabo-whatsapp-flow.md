---
type: journey
title: "Thabo's acute script as a WhatsApp conversation - channel mock spec"
state: to-be
variant: channel-mock
persona: "[[design-kit/personas/cash-pay-acute-customer|Thabo Mokoena]] (cash)"
status: draft
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, domain/consumer, topic/acute, topic/e-prescription, journey/submit, journey/validate, journey/collect, region/za]
sources: [src-dc-complaints-jan2025, src-dc-script-journey-interviews-2025, src-con-datareportal-digital-2024, src-con-ramp-data-prices]
created: "2026-08-07"
updated: "2026-08-07"
---

# Thabo's acute script as a WhatsApp conversation - channel mock spec

Content spec and build source for `deliverables/12-thabo-whatsapp-flow.html`.
This deliverable dramatises the **cash track of the approved #10 acute
journey** ([[to-be-acute-moments]]) as literal WhatsApp screens: every message
Thabo sends or receives on the day his son's script gets filled, rendered in
the channel's real UI mechanics, with an annotation rail explaining which
WhatsApp Business Platform feature carries each beat and which persona
constraint it honours. It invents no new service behaviour: where #10 says
"the chat asks me how", this spec decides what that message literally looks
like, and nothing more. #11 ([[sipho-whatsapp-flow]]) is the pattern
exemplar; the engine, chrome and walkthrough conventions carry over intact.

Process: feature mapping proposed and reviewed in situ; P1 mocked
copy-complete first (Tamsin picked P1 and the thread identity
"Dis-Chem Pharmacy", 2026-08-07); the other phases render as mapped stubs
until the P1 pass is approved. Register is **annotated** - a phone frame per
phase plus a side-rail of feature callouts - and the chat renders in
**English for the executive audience**, with a standing annotation that
production renders it in the customer's chosen language. Previous
deliverables (#05-#11) stay untouched.

## Ground rules

1. **Copy fidelity.** Chat copy derives from the approved #10 cash
   activities. The messages are service UI copy and follow the persona's
   constraints: short, plain, no jargon, price in rand, nothing that assumes
   app fluency.
2. **No screen without traffic.** A scene with no genuine WhatsApp traffic
   is told as page prose beside the phone, never manufactured as chat
   (Tamsin, 2026-08-07). The clinic consult, the express-counter handover
   and the dead-phone recovery all live off-channel; the mock shows only
   what the phone would really show.
3. **Data frugality is visible - and the entry runs the other way.** The
   service sends text only: no image headers, no PDFs, because every
   download costs Thabo real money
   [[wiki/consumer-context/digital-access-and-whatsapp]]. The one media
   message in the whole journey is his: the photo of the paper script,
   travelling in the direction he chose to spend.
4. **The go-ahead is a gate, not a courtesy.** Nothing is dispensed in his
   son's name until Thabo's "go ahead" lands (#10 P2 rule - the legal and
   operational release). It is this journey's one mid-flow confirmation,
   the acute counterpart of #11's sign-up read-back. Everywhere else,
   buttons offer change and nothing expires while he thinks.
5. **Unhurried pacing.** When the person is unwell the copy never sells
   (#10 register rule). One thought per sentence. No benefit line where
   Dis-Chem adds no value.
6. **Prices are illustrative.** Rand amounts demonstrate the
   price-before-travel mechanic and are not sourced SEP calculations.
   Flagged ⚠️ in the build.
7. **Platform capability claims are unsourced for now.** The WhatsApp
   Business Platform feature inventory (reply buttons, max three; list
   messages; template rules for business-initiated messages) comes from
   platform documentation knowledge, not a vault source note. Logged in
   `meta/punchlist.md` (item 11, extended by item 12); the Meta docs INGEST
   should precede any feasibility use.
8. **Walkthrough convention (build only).** Highlighted ▶ rows and dashed
   "tap to send" pills mark the scripted path; other rows are real UI,
   inert in the mock. Each phone has its own reset.

## Feature mapping - all seven phases (proposed; reviewed in situ)

| Phase | Journey beats (#10 cash) | WhatsApp mechanics used |
|---|---|---|
| P1 At the doctor | Paper script photographed in from the clinic queue; immediate "we have it"; read-back + price + generic saving inside 15 minutes; he picks the generic | **Outgoing media message** (the photo is the front door - no sign-up, no account); text ack; read-back with the weight off the script; itemised price in-bubble; **reply buttons** (max 3): use the generic / keep the branded / talk to a person |
| P2 Choosing how I get it | The same thread asks how; store by name, shared location or delivery-cost address; the go-ahead release; symptom add-ons attach (10(c)) | **Reply buttons** for the route ask; typed store name stays first-class; confirmation with express-zone readiness + hold-until-close; **keyword reply "1 - go ahead"** as the release gate; numbered add-on picks with the total restated |
| P3 Checked and filled | Being made up at his store; the named final check against his son's weight; ready before shift end, code + dosing guide | Two **status templates** with detail inline; "Checked by **Sindi** ✓ - the dose is right for his weight"; ready message carrying the **order code as a text line** and the in-language dosing guide; no link that costs data |
| P4 In hand | Express pickup zone, code at handover, counselling worked in, pay what he already knew | Almost entirely **off-channel by design** - the counter scene is told as page prose beside P3's ready message (ground rule 2). Candidate for P3+P4 compression on this surface - parked in open questions |
| P5 Taking it | First dose that evening; the single day-3 check-in; "he isn't better" escalates to a pharmacist phoning and a booked clinic visit, price first | **Check-in template** (day 3, one touch, no pushed reminders anywhere); **reply buttons**: better / not better / something feels wrong; phone-back handled off-channel; the booking + price land back as text |
| P6 When I don't get better | Badged "not part of every journey"; the clinic visit; the new script rides the same rails; no moment (cash) | A compressed echo of P1-P3's mechanics on the new script (read-back, price, ready) - no new mechanic, and the phase says so |
| ∥ When something breaks | Out of stock told before the taxi; the dead phone at the counter (10(i)); the money isn't there today (10(g)) | **Exception template** carrying the plan as **reply buttons** (next-nearest store on the same code / delivery with its cost shown); **keyword reply "hold it for me"** with the price-lock confirmation; the dead phone has no thread presence - ID fallback noted in the rail, not mocked |

Out of scope, same as #10: repeats (#09's territory), script-expiry renewal
beyond its signpost, after-hours emergency. In-chat payment is deliberately
absent: WhatsApp payments are not live in South Africa, and the
pay-once-at-the-counter step needs no channel payment - the constraint and
the design agree.

## The timeline

One sick day - Tuesday 8 September 2026 - then day 3, then the P6 morning.
Clinic visit from 08:00 · script photographed 09:41, in the queue to pay ·
ack 09:41 · read-back + price 09:53 (inside the 15-minute promise, 10(f)) ·
generic picked 09:55 · routing + go-ahead + add-on 09:56-10:04 · being made
up 12:10 · checked 14:26 · ready 15:05 · express counter after shift, about
17:40 (off-channel) · first dose that evening · day-3 check-in Friday 11
September 16:30, the pharmacist phones after 18:00, the clinic visit is
booked for Saturday morning · P6 clinic + new script Saturday 12 September.
Running cash total: R244.00 as written -> R176.40 with the generic ->
R208.90 with the paracetamol syrup added. All amounts illustrative ⚠️.

## P1 script - At the doctor · Tue 8 Sep, from 09:41

**Page prose above the phone (ground rule 2):** the clinic scene stays off
the screen. From the approved #10 context activities: his son's cough went
to his chest last night; the morning off shift; the clinic examines and
weighs the boy, diagnoses a chest infection, and the doctor writes the
script by hand - an antibiotic and a syrup for the cough - and explains it
once. The paper goes into his jacket pocket. The thread starts where the
channel genuinely enters: in the queue to pay, when Thabo photographs the
script. The number is on the clinic's poster; no sign-up, no account, no
app - the photo is the whole front door.

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| T0 | out | Outgoing media message (the entry) | [photo of the paper script] |
| T1 | in | Text ack, immediate | We have your script. A pharmacist is reading it now and will come back to you here - usually inside 15 minutes, with the price. You don't need to reply or stay online. |
| T2 | in (09:53) | Read-back, weight off the script | Your script, read back so you can check we have it right. For your son, age 6 - weight on the script: 21 kg. **Amoxicillin syrup** - the antibiotic. 5 ml three times a day, for 7 days. **Cough syrup** - 5 ml at night. A pharmacist checks his dose against his weight before anything is made up. |
| T3 | in (09:53) | Itemised price + generic saving, in-bubble | Here is the price, so you know before you travel. *As the doctor wrote it (branded antibiotic):* antibiotic syrup 100 ml R136.50 · cough syrup 100 ml R42.90 · dispensing fees R64.60 · **Total: R244.00**. *With the generic antibiotic:* same active ingredient, same strength - the script allows it. **Total: R176.40 - you save R67.60.** Nothing to pay now; you pay once, when you collect. |
| T4 | - | Reply buttons (max 3) | Buttons: **[Use the generic ▶] [Keep the branded] [☎ Talk to a person]** ("Keep the branded" plays: Also fine - the branded antibiotic, total R244.00. You can change your mind any time before it's made up. / "Talk to a person" plays: Reply **CALL ME** and a pharmacy team member phones you back, in your language, free. Or send a voice note - we listen to those too.) |
| T5 | out | Button echo | Use the generic |
| T6 | in (09:55) | Confirmation + the gate planted | Done - the generic antibiotic and the cough syrup. **Total: R176.40.** Nothing is made up in your son's name until you say go ahead - the next message asks how you want to get it. |

Key moment (rail, #10 verbatim): ⭐ "I knew the price before I left the
clinic gate" at T3 - Thabo has done this trip before, the old way: the taxi
to a pharmacy with the week's money in his pocket and no idea if it's
enough, the queue with a sick child, the counter where the number is
finally said out loud - and the walk away, in front of everyone, if it's
too much. This time the number came to him, standing at the clinic, before
anything was spent. He knows the price - and that he can afford it - before
his son takes another step. Nobody made him ask; the price was simply
offered, with the cheaper generic presented as the smart choice it is. That
is Snap-a-Script meeting him exactly where he stands - one photo, on the
phone he already has.

Rail callouts: the outgoing photo as the whole front door (no sign-up, no
account - and the journey's one media message travels in the direction he
chose to spend); the immediate ack as proof-of-arrival (the
no-confirmation-system pain, killed in one line) with "you don't need to
stay online" honouring a prepaid balance that can lapse; the read-back so
he can see they have it right, with the weight shown because a child's dose
is checked against it; the priced generic with the exact saving (dignity:
offered, never asked for; 15-minute reply is punchlist 10(f) ⚠️; amounts
illustrative ⚠️); reply buttons max three ⚠️, with the branded option kept
real and a person one reply away.

## P2-P6 and ∥ - mapped, scripted after the P1 verdict

Per-phase scripts follow the P1 pass, to the mapping table above and the
timeline. Structure already agreed: P2 carries the go-ahead gate and the
add-on attach (no moments, quiet by design); P3 carries "Every check ran
before it left the building" with Sindi's named weight-check; P4 carries
⭐ "The counter was expecting me" beside a mostly off-channel scene; P5
carries "Medication you can't take wrong" and ⭐ "The pharmacy didn't
disappear after the handover" (the check-in that escalates); P6 is badged
"not part of every journey" and carries no moment on the cash side; ∥
carries no moment and only its real-traffic scenarios.

## Build notes

- Page chrome and script engine are #11's, unchanged (step types: sys,
  date, inm, outm, undim, tap, photoTap, list, qr; the anyMain gate).
  The photoTap step gains a label + style variant so the script photo
  reads as paper, not a parcel.
- Persona strip is #10's cash strip verbatim (Thabo Mokoena).
- Spine carries #10's seven phases with their WhatsApp mechanics; the
  live/stub state is marked per phase until the full set ships.
- Feature chips carry their basis in tooltips; platform-capability chips
  stay ⚠️ until the Meta docs are ingested (punchlist 11/12).

## Open questions

- Where does the acute thread's language choice happen? No sign-up exists
  on this path, yet #10 shows in-language statuses from P3 on. The mock
  carries the standing English-for-this-audience note; the production
  mechanism (detect from the reply? ask once, after the ack?) needs a
  decision before this page is used as feasibility evidence.
- Do P3 and P4 compress into one phone on the WhatsApp surface? P4 is
  nearly all off-channel at the express counter (ground rule 2), so its
  honest thread content may be nothing beyond P3's ready message. Parked
  for Tamsin's read of the full set - the #11 P3+P4 precedent.
- P5's booking confirmation: the pharmacist gives the price by phone
  before Thabo says yes; proposed that a short written confirmation (time,
  place, price) also lands in the thread so the phone screen stays
  reconstructable. Confirm at the P5 pass.

## See also

- [[to-be-acute-moments]] - the approved journey this dramatises
- [[sipho-whatsapp-flow]] - the #11 pattern exemplar
- [[design-kit/personas/cash-pay-acute-customer]] - Thabo Mokoena
- [[wiki/consumer-context/digital-access-and-whatsapp]] - the channel constraints
- `deliverables/10-tobe-acute-moments.html` - the source journey
- `deliverables/08-concepts.html` - concepts referenced by the moments
