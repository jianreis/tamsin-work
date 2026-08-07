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
"Dis-Chem Pharmacy", 2026-08-07; pass approved same day); all seven phases
now scripted and built to the same rules. Register is **annotated** - a
phone frame per phase plus a side-rail of feature callouts - and the chat
renders in **English for the executive audience**, with a standing
annotation that production renders it in the customer's chosen language.
P4 carries no phone at all: the express counter has no WhatsApp traffic,
so the scene is told as page prose (ground rule 2). Previous deliverables
(#05-#11) stay untouched.

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

## P2 script - Choosing how I get it · Tue 8 Sep, 09:56-10:04

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| C1 | in (09:56) | Route ask, typed answer first-class | How would you like to get his medicine? You can name your Dis-Chem store · share your location 📍 to see stores close to where you're standing · or send an address to see what delivery would cost. Whatever is easiest. |
| C2 | out | Typed store name | Dis-Chem Tembisa |
| C3 | in (09:58) | Stock confirm + the gate named | Dis-Chem Tembisa has his medicine in stock, and collection costs nothing. When you're ready, reply **1 - go ahead**. That's the yes we need before anything is made up in your son's name - nothing starts without it, and nothing expires while you think. |
| C4 | out | Keyword reply - the release | 1 - go ahead |
| C5 | in (10:01) | Confirmation: express zone, hold, after-hours | Go-ahead received - his medicine is being made up now. Ready from this afternoon at the **express pickup zone**, Dis-Chem Tembisa, where the pharmacist hands it over and runs you through his dose. Held until closing - and if your shift runs late, the after-hours pickup point outside the store takes the same code. |
| C6 | in (10:03) | Numbered symptom add-ons (10(c)) | For a chest like his, these can help alongside the antibiotic - only if you want them: **1.** Saline nose drops - R24.90 · **2.** Paracetamol syrup, for the fever - R32.50. Reply with a number to add one. If you say nothing, nothing is added. |
| C7 | out | Numbered reply | 2 |
| C8 | in (10:04) | Total restated | Added: paracetamol syrup, R32.50. Your total is now **R208.90** - paid once, at the counter, when you collect. |

No moments: #10 keeps P2 deliberately quiet - Dis-Chem runs ahead of the
customer. Rail callouts: the route ask honours where he is standing (typed
store name first-class; location share; address only for a delivery cost -
the two never conflated; stores-with-stock routing ⚠️ 10(e)); the go-ahead
gate stated in the message itself (the legal and operational release, #10 P2
rule - the journey's one mid-flow confirmation); express zone ⚠️ 10(a),
after-hours point ⚠️ 10(b) 🔮; add-ons never gate the medicine and silence
adds nothing ⚠️ 10(c); amounts illustrative ⚠️.

## P3 script - Checked and filled · Tue 8 Sep, 12:10-15:05

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| D1 | in (12:10) | Status template, detail inline | His medicine is being made up at Dis-Chem Tembisa - the antibiotic, the cough syrup and the paracetamol syrup - each one scanned against the script the doctor wrote. Nothing for you to do - it's here when you look. |
| D2 | in (14:26) | The named final check | **Checked by Sindi ✓** The dose is right for his weight - 21 kg, checked against the script. A pharmacist looked at your son's medicine after it was picked, and signed for it. If something worries you, ask her here - no phoning a dispensary that doesn't pick up. |
| D3 | in (15:05) | Ready + order code as a text line | Ready - **express pickup zone**, Dis-Chem Tembisa. Show this code: **THB 4172**. The same code works at the after-hours point outside the store if you're late. Held until closing. |
| D4 | in (15:05) | Dosing guide ahead of the hands | His dosing guide, on your phone before it's in your hands: **Antibiotic** - 5 ml, morning, midday and night, all 7 days, even when he seems better · **Cough syrup** - 5 ml at night · **Paracetamol syrup** - only if the fever is up. The same instructions are on the labels, in your language. |

Key moment (rail, #10 verbatim, cash why): "Every check ran before it left
the building" at D2. Rail callouts: statuses arrive unasked with the detail
inline (a link is a download, a download is money); the pharmacist named
only at the final check, and the check named is the paediatric
dose-for-weight one (#10 name rule + register rule); the code is a text
line, not a barcode image to download - the counter can key or scan it in
production; the guide lands before the handover so the counter walkthrough
confirms rather than introduces.

## P4 - In hand · Tue 8 Sep, about 17:40 (no phone - ground rule 2)

The express counter has no WhatsApp traffic, so this phase carries no
phone. The scene is told as page prose, drawn from the approved #10 P4
cash activities: after his shift Thabo stops at his store; the express
pickup zone is signposted right at the front, the dispensary queue is
somebody else's afternoon; he shows his code and the pack comes out with
his son's name on it - no forms, no retelling the story. The pharmacist at
the counter opens the pack with him: the syringe marked at his line, the
labels in his language, finish all seven days even when he seems better;
he asks what he wants to ask while he's standing there. Then one total -
the script and the paracetamol syrup - the same number he's known since
the clinic: R208.90, cash or card, at the same counter, and done.

Key moment (rail, #10 verbatim): ⭐ "The counter was expecting me" - at the
code handover. Rail callouts: the code at handover is the E-Script Token's
redemption face, single-use, his; counselling worked into the handover (the
duty pharmacist at the counter; Sindi stays in the thread - the #10
agreement); the number planned is the number paid; and the empty thread is
the design working - nothing needed chasing, so nothing was sent.

## P5 script - Taking it · Tue evening, then Fri 11 Sep

Page prose for the first dose (off-channel, from #10 A1-cash): that
evening he gives the first dose - the syringe marked at his line, the
label and the guide in his language, the fever syrup with its own plain
line: only if the fever is up. Nothing at his kitchen table needs
decoding. The phone carries only the day-3 check-in.

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| F1 | in (Fri 16:30) | Check-in template - the single touch | He should be coughing less by now - is he? One tap answers, and a pharmacist sees your reply. Buttons: **[He's better] [He isn't better ▶] [Something feels wrong]** ("He's better" plays: That's good news. Keep going to the last day - all 7 days, even when he seems better; stopping early is how infections come back harder. / "Something feels wrong" plays: Tell us what you're seeing - or reply CALL ME and a pharmacist phones you straight away.) |
| F2 | out | Button echo (the walked truth: he isn't) | He isn't better |
| F3 | out | Tap-to-send ask | Can someone call me? |
| F4 | in (16:33) | Phone-back confirm | Yes - a pharmacist will phone you after 18:00 today, on this number, free. You don't need data for the call to reach you. |
| - | - | System pill (the call, off-channel) | After six, the pharmacist phones - a voice, not a chatbot. She asks about the cough, the fever, how he's sleeping - and says it straight: three days on the antibiotic without improvement means a doctor should see him. The Dis-Chem clinic near home can do it tomorrow morning; she books it while they talk, and gives the price before Thabo says yes. |
| F5 | in (18:41) | Written booking confirmation | Booked: **Dis-Chem clinic, Tembisa - tomorrow (Saturday) 09:00**, for your son. The visit costs **R150.00**, paid at the clinic - the price the pharmacist gave you on the phone. The week's story goes with him: the script, this check-in, what you told her. |

Key moments (rail, #10 verbatim, cash whys): "Medication you can't take
wrong" at the first-dose prose (off-channel by design); ⭐ "The pharmacy
didn't disappear after the handover" at F1-F5. Rail callouts: one check-in
per course by design - no pushed reminders anywhere on this journey (#10
phase decision); the escalation ends in a person by phone, in his
language, with data allowed to lapse; the written confirmation restates
the price he heard first (proposed at this pass so the thread stays
reconstructable - flagged in open questions); clinic price illustrative ⚠️.

## P6 script - When I don't get better · Sat 12 Sep (badge: not part of every journey)

Page prose for the clinic visit (off-channel, from #10 A1-cash): no 5am
queue, no lost shift - the appointment is the appointment. The clinic
sister examines him with the week's story already on screen: the script,
the check-in, what Thabo told the pharmacist. A virtual doctor joins on
the screen for the decision he couldn't afford to chase across town: a
different antibiotic, and a test to see what's actually going on. By the
weekend, he's chasing his sister again.

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| G1 | in (09:48) | The new script arrives on the rails | We have the new script from the clinic - a different antibiotic for your son. Nothing for you to send this time; it came straight through. Here is the price: **Total: R98.40** (the generic, as before). Reply **1 - go ahead** when you're ready. |
| G2 | out | Keyword reply - the same gate | 1 - go ahead |
| G3 | in (12:15) | Same rails, compressed | **Checked by Sindi ✓** - the dose is right for his weight, checked against the new script. Ready - express pickup zone, show this code: **THB 4718**. Held until closing. |

No moment on the cash side, by #10 design - the quiet aftermath of a
moment that already happened in P5. Rail callouts: the entry is different
this time (the clinic is on the rails, so no photo is needed) but the
gate is the same go-ahead; everything else is the machinery the reader
has already watched, compressed - and the phase says so.

## ∥ script - When something breaks (scenarios, not steps)

Two scenarios with real thread traffic; the third (the dead phone) has
none, and is honoured in the rail only.

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| H1 | in | Exception template + reply buttons | (Out of stock) Before you spend anything on a taxi: your store's stock of his antibiotic failed after the go-ahead. Two ways through - you choose: **1.** Dis-Chem Kempton Gate has it - same code, same price, ready now · **2.** Delivery this once - R35.00 on top, to where you are. Nothing is decided without you. Buttons: **[Nearest store ▶] [Deliver it - R35.00] [☎ Call me]** |
| H2 | in | Branch responses | Nearest store: Done - Dis-Chem Kempton Gate, express pickup zone, same code THB 4172, same total R208.90. / Deliver: Done - delivery today, R35.00 added: total R243.90. We'll message before the driver leaves. / Call me: A person will phone you back within the hour, in your language. |
| H3 | out | Tap-to-send (the money isn't there) | Hold it for me |
| H4 | in | Hold-at-counter, price locked | Done - held at the counter, price unchanged: **R208.90**. Come when it suits you, no questions. Nobody at that counter knows anything except that a pack is waiting for its person. |

No moment, by #10 design - the scenarios carry the band. Rail callouts:
bad news arrives already carrying its plan, before the taxi (the wasted
trip is the one thing never allowed to happen; stores-with-stock ⚠️
10(e); delivery cost illustrative ⚠️); hold-at-counter with the price
locked and the dignity quiet ⚠️ 10(g); and the dead phone at the counter
deliberately has no marker in the thread - a twelve-hour shift kills a
battery, his ID is enough, the pack is under his son's name and the order
is his, not his phone's ⚠️ 10(i). The code was for speed, never a lock.

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
  before Thabo says yes; the build includes a short written confirmation
  (time, place, price) in the thread so the phone screen stays
  reconstructable. Proposed at this pass - confirm at the full-set review.
- The order code renders as a text line (THB 4172), not a QR image, to
  keep the service's downloads at zero - while #10's M4b speaks of a QR
  scan at the express counter. The counter can key or scan a text code in
  production; if the QR is wanted visually, it costs a media download.
  Flag for the full-set review.

## See also

- [[to-be-acute-moments]] - the approved journey this dramatises
- [[sipho-whatsapp-flow]] - the #11 pattern exemplar
- [[design-kit/personas/cash-pay-acute-customer]] - Thabo Mokoena
- [[wiki/consumer-context/digital-access-and-whatsapp]] - the channel constraints
- `deliverables/10-tobe-acute-moments.html` - the source journey
- `deliverables/08-concepts.html` - concepts referenced by the moments
