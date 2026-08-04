---
type: journey
title: "To-be journey - the acute script, in moments"
state: to-be
variant: aspirational
persona: "[[design-kit/personas/time-poor-urban-professional|Aisha Patel]] (insured) / [[design-kit/personas/cash-pay-acute-customer|Thabo Mokoena]] (cash)"
status: draft
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, journey/submit, journey/validate, journey/dispense, journey/pay, journey/collect, journey/deliver, journey/adhere, topic/acute, topic/e-prescription, region/za]
sources: [src-dc-complaints-jan2025, src-dc-social-media-research-2025, src-dc-store-future-interviews-2026, src-dc-script-journey-interviews-2025]
created: "2026-07-26"
updated: "2026-07-26"
---

# To-be journey - the acute script, in moments

Content spec and build source for `deliverables/10-tobe-acute-moments.html`
(not yet built). Deliverable #07 stays untouched as the previous acute
treatment; this is a new moments journey built to the
[[design-kit/templates/moments-journey-template]] canon, including the full
v3.1 first-person activity register whose worked rule set lives in
[[design-kit/journeys/to-be-household-repeat-moments]]. **Approved copy will
live in the deliverable's `DATA` object, mirrored from here - edit here
first.** This spec records the decisions agreed with Tamsin on 2026-07-26;
activity copy is drafted phase by phase and reviewed before entering the
build.

## The story (the experience, agreed 2026-07-26)

**One line: you shouldn't have to be well to get your medicine.** Today's
journey is designed for a healthy person to navigate; this one is designed
for a sick one.

- **The burden moves.** The moment the doctor decides what you need, the
  getting-better has already started - everything between you and the first
  dose is Dis-Chem's job, not yours. Less about speed, more about care;
  speed is evidence of the care, not the point.
- **Register: today, not someday.** Urgency in the needs and the verbs. The
  emotional charge scales with how sick the person is - when you are unwell
  you just want to start getting better; everything else is just effort.
- **Trust is earned in one pass.** Unlike #09's standing relationship, this
  is a single audition at the customer's weakest. The arc: depleted and
  braced for effort -> surprised the hard parts are already handled ->
  better, and remembering who made it easy.
- **The human anchor (P3/P4):** the SA doctor's-trip ritual - "Saw doc.
  Getting meds on the way back. See you soon." The future state either
  **deletes the stop** (insured: the medicine races you home) or **makes it
  express** (cash: scan the QR, it is waiting at the counter, a pharmacist
  ready to explain, no queue).
- **Care beyond the counter (P5):** adherence as experience - check-ins,
  course-length reminders, plain-words side effects, a pharmacist on
  standby. Where Dis-Chem proves the relationship.
- **The dignity thread (cash):** implicit, never announced - surfacing
  especially around cost and generics. The price is offered before he has
  to ask; the generic is the smart choice, not the poor man's one; paying
  cash is a completely normal way to buy medicine; it speaks his language.
- **The integrated order, acute-flavoured:** suggested symptom-relief
  add-ons (OTC, vitamins, a Med-Lemon) that help while the script does its
  work - clinical companionship, not "while we're delivering" (#09's
  Standing Order is logistics; this is "what else helps?"). Activities
  only, NOT a moment; suggested where the order confirms; never a gate on
  the medicine, never upselling a sick person.

## Cast (agreed)

- **Insured: Aisha Patel** ([[design-kit/personas/time-poor-urban-professional]]),
  her own acute illness (UTI flared overnight). Her GP is a portal partner.
- **Cash: Thabo Mokoena** ([[design-kit/personas/cash-pay-acute-customer]]),
  a one-off antibiotic + paediatric syrup for his sick 6-year-old, clinic
  doctor NOT on the portal - he enters by Snap-a-Script from the clinic
  gate. A new face after Sipho carried #07 and #09.

## Phase set (agreed; P2 renamed 2026-07-26 during the P1 pass)

P1 **At the doctor** · P2 **Choosing how I get it** · P3 **Checked and
filled** · P4 **In hand** · P5 **Taking it** · P6 **If it comes back**
(badged "later, only if it recurs") · ∥ **When something breaks** (parallel
band).

P2 was "The script lands" until the P1 pass established (Tamsin) that BOTH
economies leave the clinic with the price known and the script already in
Dis-Chem's hands - Thabo's snap and his ⭐ moved into P1, and P2 became the
routing phase: the how-do-you-want-it ask, the two care-shaped options
(collect on the way home with the pharmacist explaining at handover, or
delivery with usage instructions and a reachable pharmacist), and the
symptom-relief add-on suggestions where the order confirms. P2 carries no
moments - a deliberately quiet phase.

Signposted out: repeats -> #09; script-expiry renewal -> Script Renew;
after-hours emergency -> footer scope note. #07's acute->chronic CCMDD
machinery stays behind the line in P6 (🔮 where applicable).

## The moment set (locked with Tamsin, 2026-07-26)

| # | Phase | Title (memory line) | ⭐ | Economies | Concept(s) inline |
|---|---|---|---|---|---|
| M1 | P1 | "My pharmacist was busy before I'd even left the doctor's" | ⭐ | insured only | The Pharmacy in the Room |
| M2 | P1 | "I knew the price before I left the clinic gate" | ⭐ | cash only | Snap-a-Script |
| M3 | P3 | "Every check ran before it left the building" | | both | The Named Check |
| M4a | P4 | "Saw the doc. Went straight home." | ⭐ | insured | The 60-Minute Fill |
| M4b | P4 | "The counter was expecting me" | ⭐ | cash | The 60-Minute Fill + The E-Script Token |
| M5 | P5 | "Medication you can't take wrong" | | both | Made-for-Me Medicine |
| M6 | P5 | "The pharmacy didn't disappear after the handover" | ⭐ | both | The Pharmacist Who Stays |
| M7 | P6 | "They noticed it kept coming back - before I did" | | both | The Pharmacy That Notices |

- ∥ carries **no moment** (agreed): its scenarios do the work, and they must
  be **acute-native, defined with Tamsin at that phase pass** - what actually
  goes wrong in an hours-long acute fill, not #09 hand-me-downs.
- P1 carries **both stars, symmetrically**: each economy's price-certainty
  moment of truth, delivered the way its reality allows (Aisha's in the
  chair, Thabo's at the clinic gate). P2 carries **no moments at all**.
- **The E-Script Token is referenced inline only where the reader watches it
  being used** - M4b's QR scan at the express counter (agreed after Tamsin
  caught it cited in P1 blocks whose activities never show a token). Its P1
  surface is the received-notifications; the registry stays behind the line.
- "Every check ran before it left the building" and "Medication you can't
  take wrong" are **signature lines reused from #09 deliberately** - the
  same promise landing in a second journey.
- M4a demotes the live driver-map from being the moment to being evidence
  inside it (the tracking is how she watches the race home, not the memory).
- The moment whys carry: M1 - treatment orchestration felt (job done in the
  room, nothing left to organise, pharmacist already working); M2 - price
  before travel + the dignity thread; M3 - the drive home is the building's
  clock, fast never means unchecked, a named human signs; M4a - the deleted
  stop; M4b - the express stop (no queue with a sick child, pharmacist
  explains at handover); M5 - understanding arrives with the medicine (the
  meal kit; child's dose in his language, icons, marked syringe); M6 - the
  day-3 "you should be feeling better - are you?", standby pharmacist,
  reminders to the last dose, cash side hears a human by phone; M7 - the
  gentle noticing, suggested never pushed, coda from transaction to
  relationship.

## Moment-selection notes (from #07, for the record)

From #07's nine stage cards: m1+m2 merged into M1 (record/consent demoted to
activity copy); m3 token demoted to P2 activities; m8 off-portal recast from
failure to Thabo's honest entry (M2); m5 dispense robotics demoted to P3
activities; m6 became the split M4a/M4b under the deleted-stop / express-stop
reframe; m7 adherence expanded into P5's two moments; m9 softened into M7
with CCMDD backstage. #07 itself is preserved untouched.

## Register rules added in the P1 pass (2026-07-26, agreed with Tamsin; apply to all phases)

On top of the full v3.1 rule set from #09:

- **No benefit line where Dis-Chem isn't actively adding value.** Context
  activities (the clinic visit, the paper script) stay plain - a benefit
  line only exists where the service earns it.
- **Where the person is suffering, the activity carries how they feel**
  (sore, tired and fed up; hot, tired and quiet, which isn't like him). The
  emotional charge scales with how sick the person is.
- **Activity anatomy is fixed:** name -> functional what (what I do, what
  the screen or thread shows, what my options are - concrete, honest
  sequence) -> closing FELT benefit line (where earned). The activities are
  the quiet ground; crafted, performing lines belong only in moment blocks
  (the "ten minutes go on my body, not my admin" failure mode - copywriting
  in an activity - is the thing to catch).
- **Context lines open a phase's first activity** ("My son's cough went to
  his chest last night") - personal ("my son's", never "his"), scene-setting
  in one or two sentences, booking and diagnosis as separate sentences, no
  compression for its own sake.
- **The portal becomes relevant only when a script needs generating** -
  before that it is diagnosis, no screens.
- **Consent refinement:** the standing relationship with Dis-Chem is the
  already-granted fact; per-consult record access is granted by an OTP the
  patient receives and the doctor enters - lightweight, logged, expiring.
  Not a consent ceremony.
- **Price is native to choosing, never a receipt afterwards** - cover and
  cash price appear in the conversation where the medicine is chosen.
  Dis-Chem provides the transparency; it never guarantees the cover.
- **"Counter", never "till"** - in SA the price reveal happens when the
  pharmacist processes the script at the dispensary counter.
- **Received-confirmations are explicit beats**: insured - "Dis-Chem has
  received your script from Dr [name]" before she is up from the chair, then
  "Your pharmacist is checking your script" while paying; cash - an
  immediate "we have it, someone will come back to you shortly" on the snap,
  then the full read-back + price + generic reply inside 15 minutes.
- **The pharmacist is named only at the final check** (P3's sign-off status:
  "Checked by Naledi ✓" / "Checked by Sindi ✓", with the checks listed);
  earlier statuses say "your pharmacist", unnamed. The dispensing process
  holds as: PBQ/pharmacist capture-and-first-check -> pick (scan-verified
  per item) -> pharmacist's FINAL check of the picked pack against the
  original script (the sign-off gate) -> seal, code issue, digital
  instructions push. The collection/order QR (the e-token's redemption
  face) is issued at sealing on BOTH sides - express-zone scan for cash,
  driver-handover proof and switch-to-collect key for insured.
- **Concepts are referenced inline only where the reader watches them work**
  (the E-Script Token rule above generalised).

**Process rules for every phase pass (encoded after the P1 retrospective,
2026-07-26 - P2 onwards):**

1. **Walk the service logic first.** Each phase pass STARTS with a short
   "how it actually works" sequence - system and human, in true order -
   presented to Tamsin for correction BEFORE any activities are written.
   Activities are then derived from the corrected walkthrough.
2. **The transcription test.** Every activity sentence must survive: "could
   this person have said this to a friend, tired, that evening?" If it
   sounds written, rewrite it. Crafted, performing lines live in moment
   blocks only ("Two options, both real" / "One word; it's set." are the
   failure modes to catch).
3. **The message thread is reconstructable.** Every notification is named,
   worded and placed exactly where it fires - a reader could rebuild the
   phone screen from the copy.
4. **Commit where the service can commit; stay general where detail invites
   nitpicking.** Concrete times, holds and read-backs build credibility
   (inside 15 minutes, held until closing); internal mechanics stay vague.
5. **Possessives and pacing.** Personal ("my son's", never "his"),
   unhurried context lines, one thought per sentence when the person is
   unwell.
6. **Self-audit before serving.** Before any draft reaches Tamsin, check:
   no crafted lines in activities · no benefit line without value added ·
   concrete what-I-see/do throughout · needs include "I need" · counter
   never till · concepts only where watched · money in one activity per
   phase · sequence honest · possessives personal · suffering texture where
   the person is sick.

## Pain-point sources (hard rule: research only)

Titles + descriptions + verbatim quotes ONLY from:
- [[wiki/dischem/pharmacy-complaints-pain-points]] (C4C resolved complaints, Jan 2025)
- [[wiki/dischem/dischem-social-sentiment-trust-journey]] (public social sentiment, Dec 2025)
- [[wiki/dischem/store-of-the-future-customer-voice]] (SOTF interviews, Jan 2026)
- [[wiki/consumer-context/voice-of-customer-script-journey]] (script-journey IDIs, Oct 2025)
- acute/after-hours pages where relevant (e.g. [[wiki/dispensing-practice/after-hours-emergency-acute-access]])

Never inferred from personas, never manufactured; honest no-complaint note
where the research is silent.

**Documented exception (Tamsin, 2026-07-26, P1 pass):** a pain evidenced in
**practice literature** rather than customer voice may stand as its own card
when it is clearly and honestly attributed (e.g. "dispensing-practice safety
literature - no customer-voice record"). Precedent: P1's clarification-call
card, anchored on [[wiki/dispensing-practice/error-prevention-and-safety]]
(illegible/ambiguous prescriptions as a named error root cause). Cards with
customer quotes remain the default; the exception is never a licence to
infer.

## Concept-set changes made for this journey (done, 2026-07-26)

- `08-concepts.html` extended to 16: **Made-for-Me Medicine** (15, "Made to
  be taken right.", meal-kit anchor, the can't-take-wrong ladder) supersedes
  **Made-for-Me Packaging** (06, archived in place); **The Pharmacist Who
  Stays** (16, "Your pharmacist stays until you are better.",
  doctor-who-phones-the-next-day anchor). Boundary: made-before-it-reaches-
  you vs happens-over-the-days-after. #09's P5 links repointed.

## Approved copy - P1: At the doctor (signed off by Tamsin, 2026-07-26)

### Need (shared)

One of us is sick **today**, and I have exactly one job: **start getting
better**. I need everything between the doctor's decision and the first dose
to happen with **as little effort from me as possible** - I don't have much
to spare.

### Activities - insured (Aisha)

**A1 · I see the doctor** - What I suspect is a UTI has been building for
two days, and overnight it got bad enough that I can't push through. I book
an appointment at my usual doctor for later that morning. The doctor
examines me and confirms it - a urinary tract infection. I'm sore, tired and
fed up; all I want is to get home and start getting better. *(context - no
benefit line)*

**A2 · "Shall I send it to Dis-Chem?"** - When it's time for the script, the
doctor asks if he can send it to Dis-Chem. I nod; an OTP arrives on my phone
and he enters it. Now my medication record is open in front of him - what I
take, what I'm allergic to - for this consult only. I've used the service
before, so that's all it takes: one code, and he's prescribing with my
history in view instead of my memory of it.

**A3 · We choose the medicine together** - He wants to prescribe a
particular UTI antibiotic. As he looks it up, the system shows it's in stock
at my closest Dis-Chem - but my medical aid won't cover it. A generic that
is covered comes up alongside, and we talk it through: same active
ingredient, fully funded against a co-pay on the brand, cash prices visible
too. We decide together, and I choose the generic. By the time it's on the
script I know exactly what it will cost me - and before I'm up from the
chair, my phone buzzes: "Dis-Chem has received your script from Dr Naidoo."

**A4 · It's with my pharmacist before I reach reception** - The doctor
signs, and we're done - there's no paper to take and nothing for me to send
anywhere; Dis-Chem already has it. While I'm paying for the consult, the
status moves: "Your pharmacist is checking your script." The only decision
left is how I want to receive it, and that can wait until I'm in the car.
*(Name ripple, 2026-07-26: the pharmacist is named only at the P3 final
check - P1 statuses stay unnamed.)*

**M1 (under A4) ⭐ "My pharmacist was busy before I'd even left the
doctor's"** - Every doctor's visit Aisha has ever made ended the same way:
with homework. Carry the slip, find a pharmacy, hope about stock, brace at
the counter. This one ends with the work already moving - a pharmacist has
her script and is checking it while she is still paying the doctor. [why]
She is one minute out of the consult, and getting better is already someone
else's job. [/why] That is The Pharmacy in the Room (inline link) doing what
it was built for - doctor, record, price and pharmacy in one conversation.

### Activities - cash (Thabo)

**A1 · The clinic sees my son** - My son's cough went to his chest last
night, and neither of us slept much. I take the morning off shift and we
wait our turn at the clinic - he's hot, tired and quiet, which isn't like
him. After examining and weighing him, the doctor diagnoses a chest
infection and suggests an antibiotic. *(context - no benefit line)*

**A2 · The script is written on paper** - The clinic isn't on Dis-Chem's
system, so the doctor writes the script by hand - an antibiotic and a syrup
for the cough - and explains it to me once: how much, how often, for how
many days. The paper goes into my jacket pocket. *(context - no benefit
line)*

**A3 · I send the script through while I wait to pay** - While I'm waiting
to pay for the consult, I photograph the script and send it through to
Dis-Chem on WhatsApp. The reply is immediate: they have it, and someone will
come back to me shortly. One photo, almost no data - and the job is already
out of my hands.

**A4 · The answer comes back before we reach the gate** - The reply comes
inside 15 minutes, while my boy and I are walking to the gate: they've read
the script back to me so I can see they have it right, the price is there in
rands - and there's a cheaper generic the doctor would approve, with the
exact saving shown. I pick it right there. Nothing is riding on the paper in
my pocket anymore, and I know the number before we've spent a cent on a
taxi.

**M2 (under A4) ⭐ "I knew the price before I left the clinic gate"** -
Thabo has done this trip before, the old way: the taxi to a pharmacy with
the week's money in his pocket and no idea if it's enough, the queue with a
sick child, the counter where the number is finally said out loud - and the
walk away, in front of everyone, if it's too much. This time the number came
to him, standing at the clinic, before anything was spent. [why] He knows
the price - and that he can afford it - before his son takes another step.
[/why] Nobody made him ask; the price was simply offered, with the cheaper
generic presented as the smart choice it is. That is Snap-a-Script (inline
link) meeting him exactly where he stands - one photo, on the phone he
already has.

### Current-state pain points (shared per phase)

1. **The price is a mystery until the counter.** Cost is discovered only
   when the pharmacist processes the script in the system at the counter -
   after the travel and the queue - and identical scheduled medicine is
   priced differently store to store. Quote: "I am horrified that the
   pricing of scheduled medication differs so dramatically from one Dis-Chem
   pharmacy to another." - verbatim, [[wiki/dischem/pharmacy-complaints-pain-points]].
2. **The script is yours to carry - with no proof it arrived.** The consult
   ends and the hand-off becomes the patient's problem: nearly everyone
   still leaves with paper, and even a digital hand-over gives no
   confirmation. Quote: "When doctors email/fax a script, customers can't
   tell if Dis-Chem received it, causing double trips and calls, and there
   is no confirmation system for digital hand-overs." - verbatim,
   [[wiki/consumer-context/voice-of-customer-script-journey]].
3. **Re-typed at the counter.** Even when the information is already on the
   system, the counter asks again - profile hunts, surname variants, forms.
   Quote: "Type essays even though your information is on the system." -
   verbatim, [[wiki/dischem/dischem-social-sentiment-trust-journey]].
4. **The unclear script stalls behind the counter.** A handwritten script
   that's ambiguous or illegible can't legally be dispensed until the
   pharmacy reaches the prescriber to confirm it - the patient waits on a
   phone call between professionals. No customer-voice quote exists;
   attributed honestly to dispensing-practice safety literature
   ([[wiki/dispensing-practice/error-prevention-and-safety]]) under the
   documented exception above.

### Behind the line (P1 panel)

- Frontstage: the doctor's Dis-Chem e-scripting portal (authenticated
  partner access) · the OTP access prompt on the patient's phone
  (per-consult, expiring) · live stock, cover and price panel in the
  prescribing screen · received + "pharmacist checking" statuses · the
  WhatsApp snap line with read-back, price and generic offer (cash).
- Backstage: identity matched on SA ID (EMPI) · standing service consent on
  record; per-consult record access granted by OTP, logged and expiring ·
  real-time claim pre-adjudication (dry-run) · SEP + capped-fee cash price
  engine · live dispensary inventory exposed to the prescriber 🔮 · digitally
  signed e-script lodged in the Dis-Chem registry (the token is the key) ·
  photo-captured script read, standardised and priced; pharmacist
  verification before dispense (cash).
- Regulatory: POPIA consent for record access (explicit, specific,
  in-language); AES-signed e-scripts carry full legal force (ECTA + Medicines
  Act General Regulations); a photographed paper script requires pharmacist
  verification before dispensing; SEP + capped dispensing fee.
- Chips (cites): EMPI (wiki/digital-transformation/interoperability-identity-records) ·
  consent & audit (wiki/concepts/identity-and-consent) · pre-adjudication
  (wiki/medical-schemes/realtime-claims-switching) · price engine
  (wiki/sa-regulatory/sep-dispensing-fee) · live stock to prescriber
  (wiki/digital-transformation/dischem-scripting-tech-roadmap 🔮) · ubiquitous
  prescriber AES (wiki/sa-regulatory/e-prescription-telehealth-popia 🔮) ·
  e-script registry (wiki/concepts/e-prescription-token) · OCR capture +
  pharmacist verification (wiki/digital-transformation/dischem-scripting-tech-roadmap).

## Approved copy - P2: Choosing how I get it (signed off by Tamsin, 2026-07-26)

**Phase principle:** Dis-Chem runs ahead of the customer - preparation starts
at sign-off/go-ahead and the medicine is ready before they are (express
pickup) or arriving just after them (same-day delivery slot). No moments in
this phase.

**The stock/price logic (spec note):** the regulated cash price (SEP +
capped fee) is national, so a price can be quoted from a photo before any
store is chosen; stock is local, so the routing ask and the stock answer are
the same step. Cash routing returns nearest stores *with stock* (own store
flagged), never a yes/no on one store. Sharing a location finds stores near
where the customer is standing; delivery needs an address - the two are
never conflated. Insured/portal stock draws from a radius around the
patient's profile anchors (home, usual store), which is what P1's "in stock
at my closest Dis-Chem" honestly means. Release of made-up medicine
(dispatch or express-zone staging) is gated on the customer's confirmed
go-ahead (legal/operational); preparation runs ahead of it.

### Need (shared)

The script is already in; now the medicine has to reach us. I need Dis-Chem
to **run ahead of me** - **ready before I get there, or arriving just after
I do** - so my day stays about getting better.

### Activities - insured (Aisha)

**A1 · The question waits for me in the car** - By the time I'm in the car,
the message is there: my script is already being prepared - how would I like
it? Collect at the Dis-Chem on my way home - ready within 30 minutes, handed
over by a pharmacist who'll run me through it. Or delivery, in a slot I
choose, with the instructions in the parcel and a pharmacist a message away
if anything is unclear. It doesn't expire while I think, and the preparing
doesn't wait for me either.

**A2 · I choose a delivery slot** - I want my couch more than anything, so I
pick delivery and take the early-afternoon slot. The confirmation shows the
slot and the address it already knows. I can change either of them up until
packing starts - it says so right there.

**A3 · "These can help while it works"** - Under the confirmation there's a
short list: things that help the symptoms while the antibiotic does its job
- a urinary alkaliniser, a probiotic for during the course, rehydration
sachets - each with its price. I add the probiotic and the sachets; they
ride in the same parcel and go onto my saved card when it's packed. If I
skip the list, nothing about my medicine changes.

### Activities - cash (Thabo)

**A1 · The same thread asks me how** - Right after I pick the generic, the
chat asks how I'd like it. I can name my Dis-Chem, share my location to see
stores close to where I'm standing, or give an address to see what delivery
would cost. I name my store - the one near home - and the reply confirms
they have his medicine. Collection costs nothing, and it's on my way after
work. Easy.

**A2 · I say go ahead** - I reply "1 - go ahead". That's the yes they need
from me before medicine can be made up in my son's name, and everything was
standing ready for it. The confirmation tells me: ready from this afternoon
in the express pickup zone, where the pharmacist hands it over and runs me
through his dose. It's held until closing - and if my shift runs late,
there's an after-hours pickup point outside the store where my code still
works.

**A3 · What I'll pay, and what else helps** - The chat offers a short
numbered list for a chest like his - paracetamol syrup for the fever, saline
drops for his nose - each with a price. I reply "2"; the syrup is added and
the new total comes straight back. Everything is one amount - the price I
saw at the clinic plus what I've added - paid once, at the counter, when I
collect. If I say nothing, nothing is added.

### Current-state pain points

1. **Today's delivery can't reach a sick person in time.** Delivery exists,
   but for medicine on a script it's next-day only - the ~60-minute service
   carries front-shop products, not scripts. No help when you're ill now. So
   the realistic option is the store, and you queue however you feel:
   month-end surges push dispensary waits to 25-30 minutes, felt acutely
   "when you're not feeling well". Service facts:
   [[wiki/dischem/dischem-dispensary-services]] + stakeholder confirmation
   (Tamsin, 2026-07-26); queue + quote:
   [[wiki/consumer-context/voice-of-customer-script-journey]].
2. **The digital alternative that should exist is broken.** Where a digital
   route is offered at all, it fails at the basics - logins, uploads,
   reliability - so people fall back to the queue. Quote: "Dis-Chem App is
   dysfunctional." - verbatim,
   [[wiki/dischem/pharmacy-complaints-pain-points]].

### Behind the line (P2 panel)

- Frontstage: the how-would-you-like-it message (collect: named store,
  ready-within-30 · delivery: slot picker) · store choice by name / shared
  location (stores near where I stand) / address for delivery cost, with
  stores-with-stock returned (cash) · go-ahead reply gate · confirmation
  with express-zone readiness, hold-until-close and the after-hours pickup
  code · priced symptom add-on list (taps / numbered replies) · counselling
  on both routes (pharmacist at handover; instructions + reachable
  pharmacist on delivery).
- Backstage: dispensing starts at sign-off - clinical check first, staging
  on the routing choice · preparation runs ahead of the go-ahead; release
  gated on the confirmed yes · stock model per the spec note above · slot
  capacity engine keeps delivery slots honest · add-ons attach until packing
  starts, never gating the medicine ⚠️ · saved card charged at packing
  (insured); one pay-at-counter total (cash) · after-hours external pickup
  point 🔮.
- Regulatory: dispensing in a patient's name proceeds on their confirmed
  instruction; couriered scheduled medicine stays under pharmacy
  accountability with proof of handover; counselling access preserved on
  every route; unattended after-hours release of scheduled medicine from an
  external point requires a pharmacist-oversight model - 🔮 requires-reform.
- Chips (cites): slot engine + DeliverD/TMS + stores-with-stock routing
  (wiki/digital-transformation/dischem-scripting-tech-roadmap) · express
  pickup zone ⚠️ (wiki/dischem/store-of-the-future-customer-voice) ·
  after-hours external pickup 🔮 (wiki/sa-regulatory/pharmacy-act-sapc-gpp) ·
  OTC attach ⚠️ (wiki/concepts/omnichannel-fulfilment) · WhatsApp numbered
  picks (wiki/consumer-context/digital-access-and-whatsapp) · tokenised
  saved card (wiki/concepts/identity-and-consent).

## Approved copy - P3: Checked and filled (signed off by Tamsin, 2026-07-26)

### Need (shared)

I need to **trust that what we get is exactly what the doctor ordered** -
right medicine, right dose, **safe for us** - and I need to **see that it
was checked**, not just hope it was.

### Activities - insured (Aisha)

**A1 · Picked against my script** - By the time I'm home and on the couch,
the status has moved: my medicine and the add-ons are being picked at the
store doing my delivery, and every item is scanned against the script
itself. I don't do anything - I can just see it moving.

**A2 · The final check, with a name** - Then: "Checked by Naledi ✓ - dose,
interactions, against your record." A pharmacist looked at exactly what was
picked, checked it against the original script, and put her name to it
before anything was sealed. If I have a question, her line is one tap away
in the same thread.

**M3-insured (under A2) "Every check ran before it left the building"** -
The checking used to be the invisible part - a silent backstage wait, with
mistakes surfacing only at home when the packet was opened. Now it runs in
the time Aisha spends driving home, and it shows its work: picked, scanned
against the script, and a named pharmacist's sign-off on the finished pack
before anything sealed. [why] Fast never means unchecked - the speed came
from removing the waiting, not the care. [/why] That is The Named Check
(inline link): the moment that matters most in a pharmacy, carried out by a
person with a name, one tap away.

**A3 · Sealed, and I already know how to take it** - The parcel seals and
the confirmation lands: on track for my 2-4pm slot, with my order's QR code
attached - if my afternoon changes, that same code fetches it at the counter
instead. The when-and-how guide is already on my app - with food, morning
and evening, all seven days - and the same plain instructions are on the
pack labels. By the time it reaches me, I'll already know what to do with
it.

### Activities - cash (Thabo)

**A1 · Picked at my store** - The thread tells me his medicine is being made
up at my store - the antibiotic, the cough syrup, the fever syrup I added -
each one scanned against the script the doctor wrote. I'm at work; I don't
have to watch it, but it's there when I look.

**A2 · The final check, named, for his weight** - Then, in my language:
"Checked by Sindi ✓ - the dose is right for his weight, checked against the
script." A pharmacist I can name looked at my son's medicine after it was
picked, and signed for it. If something worries me, I ask her in the chat -
no phoning a dispensary that doesn't pick up.

**M3-cash (under A2) "Every check ran before it left the building"** - For a
child's medicine, a mistake isn't an inconvenience - it's the thing a parent
lies awake about. Today that safety runs invisibly, and any gap shows up at
home, too late. Here it runs while Thabo works his shift, and it shows
itself: picked at his store, scanned against the doctor's script, and a
named pharmacist confirming the dose against his son's weight before
signing. [why] Someone with a name stood behind his boy's medicine - and he
watched it happen. [/why] That is The Named Check (inline link), made for
the person with the most to lose from an anonymous mistake.

**A3 · Ready, with my code** - The ready message comes before my shift ends:
"Ready - express pickup zone, show this code." The same code works at the
after-hours point outside the store if I'm late. His dosing guide is already
in the WhatsApp thread, in my language, and the same instructions are on the
labels.

### Current-state pain points

1. **The mistake you find at home.** Accuracy gaps surface only when the
   packet is opened - after the trip, past the point of easy return. Quote:
   "On opening the packet a few days later, I discovered my blood pressure
   tablets were missing." - verbatim,
   [[wiki/dischem/pharmacy-complaints-pain-points]].
2. **Errors read as safety threats, not service slips.** In the public
   sentiment, dispensing mistakes and near-misses are talked about as danger
   - the fear is about what the system didn't catch. -
   [[wiki/dischem/dischem-social-sentiment-trust-journey]] (no single
   verbatim; theme-level).
3. **Nobody's name on it.** When something goes wrong there is no
   accountable person anywhere in the experience - and the anonymous service
   can turn hostile at exactly the wrong moment. Quote: "Rudeness of
   pharmacy manager and pharmacist." - verbatim,
   [[wiki/dischem/pharmacy-complaints-pain-points]].

### Behind the line (P3 panel)

- Frontstage: live statuses (being picked -> "Checked by [name] ✓" with the
  checks listed -> sealed/ready) · one-tap question line to the named
  pharmacist (app / WhatsApp) · digital when-and-how guide pushed at sealing
  (app / WhatsApp, in-language) · order/collection QR issued at sealing on
  both sides.
- Backstage: script captured and first-checked by PBQ/pharmacist (started at
  P1) · picking at the fulfilling store, automation where fitted ·
  independent barcode/NAPPI scan-verify per item · pharmacist's FINAL check
  of the picked pack against the original script - the sign-off gate;
  nothing releases without it · paediatric dose-for-weight verification
  (weight carried on the script; the pharmacist asks in-thread only if
  unclear) · seal, code issue, digital-instructions push · printed
  instructions available for whoever wants paper.
- Regulatory: dispensing under the personal supervision of a registered
  pharmacist, with the pharmacist's final sign-off gating release; fully
  autonomous dispensing of scheduled medicine remains 🔮 requires-reform.
- Chips (cites): BRIX dispensing + ROWA picking
  (wiki/digital-transformation/dischem-scripting-tech-roadmap) ·
  scan-verified accuracy (wiki/dispensing-practice/error-prevention-and-safety) ·
  workflow manager (wiki/digital-transformation/dischem-scripting-tech-roadmap) ·
  named-check status (wiki/dischem/store-of-the-future-customer-voice) ·
  paediatric dose check (wiki/dispensing-practice/clinical-checks-and-mtm) ·
  in-language guides (wiki/consumer-context/language-literacy-and-trust).

## Open items

- ∥ scenarios: to be defined with Tamsin at that phase pass (acute-native;
  includes "I'm worried about a side effect" - reactive, needs a decision -
  distinct from M6's proactive check-in).
- Express pickup counter (scan QR, priority handover, no dispensary queue):
  design assumption - ⚠️ + `meta/punchlist.md` entry when P4 is drafted.
- Emotion curves: values set at build time.
- P2-P6 and ∥ copy: drafted phase by phase, reviewed by Tamsin before
  entering the spec (P1 above is the approved pattern; M1 and M2 blocks are
  the style proofs).

## See also

- [[design-kit/templates/moments-journey-template]] - the canon
- [[design-kit/journeys/to-be-household-repeat-moments]] - the v3.1 register rule set
- `deliverables/08-concepts.html` - the concept set (now 16)
- `deliverables/07-tobe-acute-escripting-journey.html` - the previous acute treatment (preserved)
