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
updated: "2026-08-16"
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
  doctor NOT on the portal - he enters by photographing the script to the
  WhatsApp line from the clinic gate (the snap channel; its concept card,
  Snap-a-Script, was archived 2026-08-16). A new face after Sipho carried
  #07 and #09.

## Phase set (agreed; P2 renamed 2026-07-26 during the P1 pass)

P1 **At the doctor** · P2 **Choosing how I get it** · P3 **Checked and
filled** · P4 **In hand** · P5 **Taking it** · P6 **When I don't get
better** (badged "not part of every journey") · ∥ **When something breaks**
(parallel band - service failures only; the clinical
not-getting-better story lives in P5/P6).

(P6 renamed from "If it comes back", 2026-07-26: one phase, one truth - the
medicine was supposed to end with me better and didn't - told at each
economy's honest timescale: Aisha across a year (the pattern picked up at
the third script's final check), Thabo on day three-to-five (the check-in
escalating into action).)

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
| M2 | P1 | "I knew the price before I left the clinic gate" | ⭐ | cash only | Real-Time Transparency (was Snap-a-Script, archived 2026-08-16) |
| M3 | P3 | "Every check ran before it left the building" | | both | The Named Check |
| M4a | P4 | "Saw the doc. Went straight home." | ⭐ | insured | The 30/60 Fill |
| M4b | P4 | "The counter was expecting me" | ⭐ | cash | The 30/60 Fill |
| M4c | P4 | "In and out, and I never spoke to anyone" | | insured, COLLECTED route | Express Collect (+ The 30/60 Fill) |
| M5 | P5 | "Medication you can't take wrong" | | both | Made-for-Me Medicine |
| M6 | P5 | "The pharmacy didn't disappear after the handover" | ⭐ | both | The Pharmacist Who Stays |
| M7 | P6 | "They noticed it kept coming back - before I did" | | insured only | The Pharmacy That Notices |

(M6-cash absorbs the escalation, 2026-07-26: on the cash side the day-3
check-in's answer is "he isn't better" and the moment includes the
pharmacist's phone-back and the same-day/next-morning clinic booking - the
asking and the doing-something-about-it are one story. M7 is therefore
Aisha's alone; Thabo's P6 carries no moment - it is the quiet aftermath of a
moment that already happened.)

- ∥ carries **no moment** (agreed): its scenarios do the work, and they must
  be **acute-native, defined with Tamsin at that phase pass** - what actually
  goes wrong in an hours-long acute fill, not #09 hand-me-downs.
- P1 carries **both stars, symmetrically**: each economy's price-certainty
  moment of truth, delivered the way its reality allows (Aisha's in the
  chair, Thabo's at the clinic gate). P2 carries **no moments at all**.
- **The Snap-a-Script concept was archived 2026-08-16** (agreed with Tamsin):
  photographing a script and sending it already exists in the Dis-Chem app, so it
  described a submission channel rather than a big move. The idea worth promising
  was the guarantee that a fast answer is never a wrong one, which moved to
  **Real-Time Transparency** as the read-back plus Tamsin's caveat - transparency
  is not "you always get an instant answer" but "you always know where you stand,
  immediately", so an unreadable script expresses the promise rather than
  excepting it. M2 therefore cites Real-Time Transparency, which fits the moment
  better anyway: Thabo's memory is the price arriving before he travelled, and his
  activity already shows the script being read back to him.
- **The E-Script Token concept was archived 2026-08-16** (agreed with Tamsin):
  it described infrastructure, not an experience - what the reader ever watches
  is a collection code. Its promises moved to The Pharmacy in the Room
  (received ✓; one record that cannot be lost, altered or filled twice), The
  30/60 Fill (send someone you trust) and Snap-a-Script (any phone - itself
  since archived, see below). M4b
  therefore cites The 30/60 Fill alone; the registry stays behind the line
  as a capability chip, which is where it always belonged.
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
  instructions push. The collection/order QR (the redemption face of the
  central e-script record) is issued at sealing on BOTH sides -
  collections-counter scan for cash, driver-handover proof and
  switch-to-collect key for insured. *(Naming updated 2026-08-16 - see the
  terminology table below.)*
- **Concepts are referenced inline only where the reader watches them work**
  (generalised from the E-Script Token rule above, which is what eventually
  retired that concept: nothing in the journey ever watches a token).

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
generic presented as the smart choice it is. That is Real-Time Transparency
(inline link) reaching him where he actually stands - one photo from the
phone he already has, read back to him before a single number was quoted.
*(Closing sentence reworded in the 2026-08-16 relink, when the read-back
moved into Real-Time Transparency - mirrored back from the deliverable.)*

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
at sign-off/go-ahead and the medicine is ready before they are (collection)
or arriving just after them (same-day delivery slot). No moments in
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
(dispatch or collection staging) is gated on the customer's confirmed
go-ahead (legal/operational); preparation runs ahead of it.

### Need (shared)

The script is already in; now the medicine has to reach us. I need Dis-Chem
to **run ahead of me** - **ready before I get there, or arriving just after
I do** - so my day stays about getting better.

### Activities - insured (Aisha)

**A1 · The question waits for me in the car** - By the time I'm in the car,
the message is there: my script is already being prepared - how would I like
it? Collect at the Dis-Chem on my way home, ready within 30 minutes, and I
choose how I take it: express collect, where I scan a code and the pack
comes out without my speaking to anyone, or the collections counter, where a
pharmacist hands it over and runs me through it. Either way the notes come
to me, on WhatsApp or printed. Or delivery, in a slot I choose, with the
instructions in the parcel and a pharmacist a message away if anything is
unclear. It doesn't expire while I think, and the preparing doesn't wait for
me either. *(Reworded 2026-08-16 with the P4 route fork - P2 names the fork
in one line; mirrored back from the deliverable.)*

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
at the collections counter, where the pharmacist hands it over and runs me
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
  with collections-counter readiness, hold-until-close and the after-hours
  pickup code · priced symptom add-on list (taps / numbered replies) ·
  counselling on both routes (pharmacist at handover; instructions +
  reachable pharmacist on delivery).
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
  Delivering an acute script is itself 🔮 requires-reform on the current
  rules (added 2026-08-16): SAPC rule 1.9.7(e) provides that "medicines
  which are prescribed for acute ailments or conditions (i.e. immediate
  need, not repeatable and non-chronic conditions) shall not be delivered
  to patients by mail/courier". Whether a pharmacy's own same-metro
  delivery is "mail/courier" within that rule is ⚠️ unresolved and needs a
  legal read - punchlist 10(k). The delivery route shown is drawn on the
  assumption it is distinguishable.
- Chips (cites): slot engine + DeliverD/TMS + stores-with-stock routing
  (wiki/digital-transformation/dischem-scripting-tech-roadmap) · acute
  script delivered 🔮 (SAPC rule 1.9.7(e) - punchlist 10(k)) · collections
  counter ⚠️ (wiki/dischem/store-of-the-future-customer-voice; punchlist
  10(a)) · after-hours external pickup 🔮
  (wiki/sa-regulatory/pharmacy-act-sapc-gpp) · OTC attach ⚠️
  (wiki/concepts/omnichannel-fulfilment) · WhatsApp numbered picks
  (wiki/consumer-context/digital-access-and-whatsapp) · tokenised saved
  card (wiki/concepts/identity-and-consent).

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
"Ready - collections counter, show this code." The same code works at the
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

## Approved copy - P4: In hand (signed off by Tamsin, 2026-07-26; insured route fork added 2026-08-16 - see the P4 route fork section below)

### Need (shared)

The medicine is ready; now it has to actually reach my hands. I need the
**promise kept as made** - **no chasing, no wondering, no wasted trip** -
because today I have nothing spare to absorb a let-down.

### Activities - insured (Aisha - delivered route, the spine)

**A1 · It's on its way** - Mid-afternoon the thread moves: "On its way -
arriving around 15:10", with a live map if I feel like watching. If the time
slips, I'm told early and given a new one. I never have to wonder, and I
never have to chase.

**A2 · The knock at the door** - The driver checks it against the order code
on my phone, and the parcel is in my hands - everything inside already
checked and signed for. If anything looks off, Naledi's line is still one
tap away in the same thread.

**M4a (under A2) ⭐ "Saw the doc. Went straight home."** - Every doctor's
trip in South Africa ends with the same message home: "Saw the doc. Getting
meds on the way back. See you soon." Aisha's message today had no second
clause - she saw the doctor, and she went straight home. [why] The errand
that has always been welded to being ill simply never happened [/why] - the
medicine made its own way to her couch, arriving inside the slot she chose,
while she did the one thing a sick person should be doing: resting. That is
The 30/60 Fill (inline link) with the stop deleted - and the live map
was just how she watched it come.

**A3 · I check it, and they check on me** - A message follows the knock:
here's what should be in your parcel - the antibiotic, the probiotic, the
rehydration sachets - is everything there and as you expected? One tap says
yes; anything wrong or missing, and a person takes it from there in the same
thread. My instructions are on the app and on the labels, and a pharmacist
is on call if any of it is unclear. Handing it over wasn't the end of their
job. *(Delivery-route counselling equivalence: the mechanism echoes #09's
photo-triggered callback, punchlist 9(e).)*

### Activities - insured (Aisha - collected route, added 2026-08-16)

*(Drafted and agreed in the 2026-08-16 concepts session, built straight into
the deliverable; back-filled here 2026-08-16 so the spec stays the source of
truth. The route toggle is scoped to P4 alone; P3 is identical on both
routes.)*

**A1 · I pull in on the way home** - The ready message came through while I
was still paying the doctor: thirty minutes, express collect, at the store I
drive past anyway. So I drive home the way I always do - past the Dis-Chem I
have stopped at a hundred times with a script in my hand and an hour to
spare. Tonight there is nothing in my hand and nothing to hand over.

**A2 · The wall hands it over** - Express collect sits on the outside wall,
before the doors. I hold my phone to the scanner, a door opens, and my pack
is there with my name on it. No queue, no counter, nobody to explain myself
to. I am back in the car in under a minute, and the dispensary is somebody
else's evening.

**M4c (under A2) "In and out, and I never spoke to anyone"** (unstarred) -
The dispensary queue is where being ill gets slowest - you stand among other
unwell people, at your own worst, waiting for a counter to call your name.
Aisha never went inside. [why] The stop she was always going to make cost
her a minute in the car park instead of an afternoon in the queue. [/why]
And the quiet was her choice, not the design's: the collections counter was
right there, with a pharmacist ready to talk her through it. She chose not
to speak to anyone, and nothing about her care got smaller for it. That is
Express Collect (inline link) - the stop made instant rather than deleted,
which is the half of The 30/60 Fill (inline link) the journey has never
shown.

**A3 · The notes come with it** - Before I have pulled out of the bay, the
counselling notes land on WhatsApp: with food, morning and evening, seven
days, and what to watch for. I could have had them printed at the machine
instead - the choice was on the screen. And if I would rather hear it from a
person, Naledi's line is one tap away in the same thread. I just did not
have to stand in a queue to be offered it.

### Activities - cash (Thabo)

**A1 · The collections counter, not the queue** - After my shift I stop at
my store. The collections counter is signposted right at the front - the
dispensary queue is somebody else's afternoon. I show my code, and the pack
comes out with my son's name on it. No forms, no retelling the story. (If my
shift had run late, the outside pickup point takes the same code.)

**M4b (under A1) ⭐ "The counter was expecting me"** - Thabo knows the other
version of this stop: the month-end dispensary queue, twenty-five minutes
deep, after a full shift, with a sick boy waiting at home. This time the
counter was expecting him - the pack made up, named, waiting - and he was
through it in minutes. [why] The stop still happens; it just stopped costing
him an afternoon he didn't have. [/why] That is The 30/60 Fill (inline
link) shaped for collection - his son's whole order riding one code, handed
over exactly once, to him.

**A2 · The pharmacist walks me through his dose** - The pharmacist at the
counter opens the pack with me: the syringe marked at his line, the labels
in my language, finish all seven days even when he seems better. I ask what
I want to ask while I'm standing there. *(Named checker Sindi stays in the
thread; the counter handover is the duty pharmacist - agreed.)*

**A3 · I pay what I already knew** - One total - the script and the fever
syrup - the same number I've known since the clinic. Cash or card, at the
same counter, and done. The number I planned for is the number I pay.

### Current-state pain points

1. **The delivery promise that dies silently.** Notified, then nothing - no
   arrival, no update, no recovery. Quote: "I received a notification that
   it has been processed on my medical aid and was out for delivery. I did
   not receive it." - verbatim, [[wiki/dischem/pharmacy-complaints-pain-points]].
2. **Chasing it means phoning into a void.** When the handover goes wrong,
   there is no one to reach. Quote: "called 4 different dispensaries[…]
   nobody is picking up" - verbatim,
   [[wiki/dischem/dischem-social-sentiment-trust-journey]].
3. **Promises too precise to keep.** Customers distrust tight promises that
   break; a realistic window kept beats a tight one missed. -
   [[wiki/dischem/store-of-the-future-customer-voice]] (theme-level).

### Behind the line (P4 panel)

*(Rewritten 2026-08-16 with the route fork; mirrored back from the
deliverable so the spec stays the source of truth.)*

- Frontstage: dispatch status + live map + honest ETA, early re-time on
  slip · driver handover verified against the order QR (proof of delivery) ·
  post-delivery contents confirmation with escalation to a person · two
  collection routes offered at P2: express collect (scan, unattended, no
  counter) or the collections counter (pharmacist handover) · express-collect
  unit sited on the outside wall - code scan, named pack, works after hours ·
  counselling notes delivered on the express route: WhatsApp or printed at
  the unit, named pharmacist one tap away · counter counselling on the
  staffed route (show-and-tell: marked syringe, in-language labels) · one
  pay-at-counter total · after-hours pickup point on the same code.
- Backstage: slot-run dispatch and routing · POD capture against the token ·
  staging under name + code for both collection routes, single-redemption
  enforced · route choice recorded at P2 and carried to staging - express
  bay vs counter · counselling pack generated at sealing and released to the
  chosen channel; declining the conversation never suppresses the notes ·
  pay-at-counter reconciliation against the quoted total · counselling
  logged as given or as offered-and-declined; reachable-pharmacist line
  stays open on every route.
- Regulatory: scheduled-medicine delivery under pharmacy accountability with
  recorded proof of handover; counselling *access* preserved on every route,
  with GPP putting physical presence for counselling as *preferred* rather
  than required (rule 2.7.1.3.1(a)). Express collect as shown is 🔮
  requires-reform, and the rule is now known exactly: GPP 1.9.3(b) bars a
  patient receiving directly from an in-pharmacy automated unit;
  patient-facing units live under SAPC rule 1.11 (RADU), which permits
  precisely this for chronic medicine in institutional public pharmacy with
  a pharmacist on the audio-visual interface at dispensing (1.11.5(a)). The
  silent version needs two extensions of rule 1.11: to community pharmacy,
  and to release without a live pharmacist. Unattended after-hours release
  compounds this. Whether a patient may decline face-to-face counselling
  remains ⚠️ unsourced (punchlist 10(j)).
- Chips (cites): DeliverD / last-mile TMS + POD
  (wiki/digital-transformation/dischem-scripting-tech-roadmap) · live
  tracking (wiki/global-benchmarks/patterns-deep-dive) · collections counter
  (staffed) ⚠️ (punchlist 10(a)) · express collect (unattended unit) 🔮
  (SAPC rules 1.9.3(b) + 1.11 - wiki/concepts/remote-collection-points) ·
  counselling opt-out with notes ⚠️ (punchlist 10(j)) · token
  single-redemption (wiki/concepts/e-prescription-token) ·
  realistic-windows principle (wiki/dischem/store-of-the-future-customer-voice) ·
  counselling at handover (wiki/dispensing-practice/counselling-and-health-literacy) ·
  contents-confirmation callback (punchlist 9(e) mechanism).

## Approved copy - P5: Taking it (signed off by Tamsin, 2026-07-26)

**Phase decisions (Tamsin):** no pushed reminders on either economy (business
cost + annoyance) - the day-3 check-in is the single touch; on the app,
reminders exist only as something the customer sets themselves. No
course-end message. The "not better / something feels wrong" reply shows
the door in P5 (a pharmacist picks it up); the full recovery fork (stop /
switch / back to the doctor) is the ∥ band's scenario. The Pharmacist Who
Stays concept card keeps course-length reminders as a capability; this
journey stages the check-in only.

### Need (shared)

The medicine is in the house; now it has to work. I need to **give it
right, every time, to the last day** - and I need to know **someone is
still there** if something doesn't look right.

### Activities - insured (Aisha)

**A1 · The first dose, without the leaflet** - That afternoon I take the
first tablet - with food, morning and evening, seven days, exactly as the
label and the guide on my app say. The what-to-expect is written like a
person would say it: what's normal in the first days, what isn't, when to
say something. If I want reminding, the app lets me set my own - my phone,
my choice. I never unfold the scroll in the box.

**M5-insured (under A1) "Medication you can't take wrong"** - New medicine
has always come with homework at the worst time: tissue-paper leaflets in
legal language, decoded at the kitchen table while you feel terrible.
Aisha's came ready to take - the label says what it is and why she's taking
it, the guide says how and what to expect, in plain words. [why] Taking it
right needed no figuring out - the understanding arrived with the medicine.
[/why] That is Made-for-Me Medicine (inline link): made to be taken right,
before it ever reached her hands.

**A2 · Day three: they ask about me** - A message: "You should be starting
to feel better around now - are you?" One tap answers it. Mine says yes -
and the reply is glad, and clear about the part that matters: finish all
seven days, because stopping early is how infections come back harder. If
my answer had been "no", or "something feels wrong", a pharmacist would
have picked it up right there in the thread.

**M6-insured (under A2) ⭐ "The pharmacy didn't disappear after the
handover"** - Every pharmacy Aisha has ever used went silent the moment the
medicine left the counter - recovery was hers to manage alone, with Google
at midnight for company. On day three, Dis-Chem asked how she was doing.
One question, perfectly timed. [why] Someone who knows medicine is watching
her recovery with her - she is not doing this alone. [/why] That is The
Pharmacist Who Stays (inline link): the doctor who phones the day after,
built into every script - check-ins that know the course, plain answers
about what's normal, and a pharmacist on standby the moment something feels
wrong.

### Activities - cash (Thabo)

**A1 · His dose, in my language** - That evening I give him the first dose
- the syringe marked at his line, the label and the guide in my language,
the fever syrup with its own plain line: only if the fever is up. Seven
days, morning and evening, even when he seems better - it says so where I
can't miss it. Nothing at my kitchen table needs decoding.

**M5-cash (under A1) "Medication you can't take wrong"** - Dosing a sick
child from instructions in your second language is a quiet, common danger -
and tonight it isn't one. The syringe is marked, the words are his father's
own language, the pictures carry what words might miss. [why] Getting it
right required nothing from Thabo except being there. [/why] That is
Made-for-Me Medicine (inline link) at its free floor - the can't-take-wrong
ladder that comes with every script, no matter who is paying.

**A2 · Day three: they ask about him - and my answer changes things**
*(amended 2026-07-26: the cash render's truth is that the boy is NOT
better - the check-in escalates)* - A message, in my language: "He should
be coughing less by now - is he?" He isn't. I say so, and ask if someone
can call me. The pharmacist phones after six - a voice, not a chatbot -
asks about the cough, the fever, how he's sleeping. Then she says it
straight: three days on the antibiotic without improvement means a doctor
should see him, and the Dis-Chem clinic near home can do it tomorrow
morning - she books it while we talk, and tells me the price before I say
yes.

**M6-cash (under A2) ⭐ "The pharmacy didn't disappear after the handover"**
- Nobody has ever asked Thabo whether his child's medicine is working -
day three is where every parent is alone with their judgement. This time
day three brought a question in his own language, and when his answer was
"no", it didn't bounce off a chatbot: a pharmacist phoned, listened, and
turned his worry into a booked appointment with a price he knew first.
[why] Someone asked if his boy was getting better - and when he wasn't,
they did something about it. [/why] That is The Pharmacist Who Stays
(inline link) earning its name: the check-in that becomes a plan the
moment the answer is wrong.

### Current-state pain points

1. **Help flips into harassment.** Unconsented, unstoppable comms are a
   named trust-breaker - the line between care and spam is consent and
   timing. - [[wiki/dischem/dischem-social-sentiment-trust-journey]]
   (theme-level).
2. **Digital-only instructions worry people.** Customers want the paper and
   the person available, not replaced - instructions that live only on a
   screen feel fragile. - [[wiki/dischem/store-of-the-future-customer-voice]]
   (theme-level).

### Behind the line (P5 panel)

- Frontstage: in-language labels, marked dosing syringe, plain
  what-to-expect with the guide (app / WhatsApp; paper on request) ·
  self-set reminders in the app (customer's own, never pushed) · the single
  day-3 check-in with one-tap / one-word replies · pharmacist pickup on a
  worried reply (thread for insured; phone-back for cash) - the full
  recovery fork lives in the ∥ band.
- Backstage: check-in timed from the course profile (day 3 of 7 for this
  antibiotic) · reply triage: "better" -> finish-the-course line; "worse /
  something wrong" -> routed to a pharmacist with the record in view · AMR
  stewardship framing on the finish-it line · no pushed reminder machinery -
  one check-in per course by design.
- Regulatory: the check-in and any follow-up are consented within the
  service's granted scope (POPIA); counselling remains a pharmacist act,
  never automated away.
- Chips (cites): course-profile check-in
  (wiki/digital-transformation/adherence-tech-and-digital-therapeutics) ·
  in-language + pictogram dosing
  (wiki/consumer-context/language-literacy-and-trust) · AMR stewardship
  (wiki/dispensing-practice/counselling-and-health-literacy) · pharmacist
  triage line (wiki/digital-transformation/telepharmacy-and-omnichannel) ·
  what-to-expect plain-words sheet (Made-for-Me Medicine, concept 15).

## Approved copy - P6: When I don't get better (signed off by Tamsin, 2026-07-26)

**Badge:** "not part of every journey". One phase, one truth - the medicine
was supposed to end with me better and didn't - at two timescales: Aisha
across the year, Thabo this week. The cash side carries NO moment (his
moment happened in P5); the clinical fork lives here and in P5 - the ∥ band
is service failures only.

### Need (shared)

The medicine was supposed to end with me **better**. If it doesn't - **this
week, or across the year** - I need someone to **notice, and help me find
out why**, not just hand me another round.

### Activities - insured (Aisha)

**A1 · It comes back** - Months later, the same thing - a different doctor
this time, as it happens. The journey is the same short story it was in
March: seen, scripted, delivered to the couch. Then, near the end of
winter, a third script for the same thing. *(context - no benefit line)*

**A2 · This time, the pharmacist checking it worries** - The third script
is being prepared like the others - but at the final check, the pharmacist
is looking at the year, not just the script. That evening my phone rings,
and she introduces herself: she's the pharmacist who checked my
prescription today, and she's calling to ask how I'm doing - because this
is the third one this year, and that's worth more attention than a fourth
script one day. Nothing about the call is trying to sell me anything; it's
the kind of call you'd want and never get.

**M7 (under A2) "They noticed it kept coming back - before I did"**
(insured only) - Aisha never connected the three episodes - different
months, different doctors, each just another bad week she got through. But
the pharmacist checking her third script saw the year in one view, and did
what a person does with a whole history in front of them: worried, and then
called - courteously, at a time that suited Aisha, about her health and
nothing else. [why] Someone connected the dots she was too busy living to
see, and told her like a human being, not a notification. [/why] That is
The Pharmacy That Notices (inline link): it noticed, a person said so, and
she decides what happens next.

**A3 · What "getting ahead of it" actually means** - She's plain about the
medicine of it: recurring UTIs usually have a reason, and finding it means
tests, not another antibiotic. It may be worth going back to my own doctor,
she says - or, if it's easier, the Dis-Chem clinic can take the urine
sample and draw the bloods, and one of their virtual doctors reviews the
results with me. She can book either for me while we're talking, or just
leave it with me. I take the clinic slot for Saturday; with my say-so, the
year's history goes along. If ongoing medicine ever comes out of it, the
repeat service picks it up from there.

### Activities - cash (Thabo)

**A1 · The clinic sees him the next morning** - No 5am queue, no lost shift
- the appointment is the appointment. The clinic sister examines him with
the week's story already on screen: the script, the check-in, what I told
the pharmacist. A virtual doctor joins on the screen for the decision I
couldn't afford to chase across town: a different antibiotic, and a test to
see what's actually going on.

**A2 · The new script rides the same rails** - The new script goes from the
clinic straight into the same journey we already know - checked, made up at
my store, ready before the afternoon is out. Nothing starts over; everyone
already knows us. By the weekend, he's chasing his sister again.

### Current-state pain points

*The research records no complaint for this phase - nobody has ever
expected a pharmacy to notice a pattern across months, or to act on a
mid-course "he isn't better", so the absence is never reported as a pain.
The honest no-complaint note renders instead of cards.*

### Behind the line (P6 panel)

- Frontstage: the pharmacist's courtesy call (health check-in first;
  doctor-first advice; clinic/virtual-doctor as the convenient route to the
  same tests; she can book it or leave it) · same-day/next-morning clinic
  appointments off a pharmacist escalation · clinic consult with the
  episode's history on screen; virtual doctor joins for the clinical
  decision · prices stated before booking on the cash side · new scripts
  flow back into the same fulfilment rails.
- Backstage: recurrence flag surfaces at the FINAL CHECK of the recurring
  script (clinically set thresholds - e.g. third same-indication script in
  a year - flag for the pharmacist; a person decides to call) · check-in
  escalation path: worried reply -> pharmacist phone-back -> clinic slot
  hold · outcome routing on the customer's say-so only; repeat-service
  handover if ongoing medicine follows · one courtesy call per pattern -
  never repeated on a no.
- Regulatory: pattern review within the service's granted POPIA scope -
  pharmacist-initiated clinical courtesy, suggest-only; virtual-doctor
  consults lawful where assessment matches face-to-face standards; clinic
  sister's scope of practice respected (virtual doctor/referral beyond it).
- Chips (cites): recurrence flag at final check
  (wiki/concepts/chronic-medicine-flywheel +
  wiki/dispensing-practice/clinical-checks-and-mtm) · Dis-Chem clinics
  (wiki/dischem/dischem-dispensary-services) · virtual doctors
  (wiki/sa-regulatory/e-prescription-telehealth-popia) · in-language call
  (wiki/consumer-context/language-literacy-and-trust) · repeat-service
  handover (design-kit/journeys/to-be-household-repeat-moments).

## Approved copy - ∥: When something breaks (signed off by Tamsin, 2026-07-26)

Parallel band, any phase. Service failures ONLY (the clinical story lives in
P5/P6). No moment - the scenarios carry the band. Every scenario ends with
the customer holding the decision; bad news always arrives with the plan
attached.

### Need (shared)

Things go wrong - stock runs out, deliveries fail, weeks cost more than
they should. I need to **hear it early, with a way through already
attached** - **never silence, never a dead end** - because today I don't
have the strength to fight a system.

### Scenarios - insured (Aisha)

**S1 · Out of stock, after everything was promised** - The store filling my
order hits a gap the stock check didn't catch. The message that tells me
carries the plan with it: another store nearby has it and my slot moves out
by an hour - or the covered generic is on their shelf right now, same
active ingredient, and a pharmacist has already confirmed the swap is
clinically sound. I pick one, in one tap. The order never quietly dies; I
was never the one who had to discover it.

**S2 · The delivery fails** - The driver can't find the complex, or the
slot collapses on their side. Before I've even noticed the window sliding,
a person phones - not a status update, a voice with options: re-deliver
this evening in a window they can actually keep, or I collect at the
counter tonight on the same code from my phone. The failure was theirs, so
the fixing is theirs; all I supply is a preference.

**S3 · My medical aid's answer changes** - The consult said R0; the final
claim comes back different - a benefit that ran dry that same week, a limit
the dry-run couldn't see. I'm told before the parcel moves: what changed,
in plain words, and the exact rand difference. My choices are real ones -
pay the difference; switch to the fully covered generic, a pharmacist
confirming it does the same job; or let a pharmacist take it up with the
scheme while my medicine waits, held for me. What never happens is
discovering it at my door.

### Scenarios - cash (Thabo)

**S1 · Out of stock - told before the taxi, never after** - If my store's
stock fails after the go-ahead, the message reaches me before I've spent a
rand travelling: the next-nearest store with his medicine, on the same code
and the same price - or delivery this once, with its cost shown, if the
distance isn't worth it. The wasted trip is the one thing they never let
happen.

**S2 · My phone is dead at the counter** - A twelve-hour shift and the
battery didn't make it. At the collections counter my ID is enough - the
pack is under his name, and the order is mine, not my phone's. The code was
for speed, never a lock.

**S3 · The money isn't there today** - The total hasn't changed - the week
did. One reply: "hold it for me." It's held at the counter, price
unchanged, no questions asked when I come on Friday - and no one at that
counter knows anything except that a pack is waiting for its person. The
medicine doesn't get cancelled because payday moved; it waits, the way a
neighbour would hold something for you.

### Current-state pain points

1. **An exception kills the order.** Today a single snag - stock, a claim,
   an address - ends the whole attempt, silently. Verbatim category,
   [[wiki/dischem/pharmacy-complaints-pain-points]].
2. **No fallback, no way through.** Quote: "Digital breakdowns (app/online
   failures) become hard blockers when no alternative path exists." -
   verbatim, [[wiki/dischem/dischem-social-sentiment-trust-journey]].
3. **After a failure, they leave.** A single unrecovered failure is where
   customers defect. -
   [[wiki/dischem/dischem-social-sentiment-trust-journey]] (theme-level).

### Behind the line (∥ panel)

- Frontstage: failure messages that carry the recovery options inside them
  (never bare bad news) · a person phones on delivery failure (insured) and
  on anything touching money or the child (cash) · one-tap / one-reply
  decisions · ID fallback at the collections counter · hold-at-counter reply.
- Backstage: stock-gap detection at pick time with reroute options computed
  before the customer is told · claim-delta detection between dry-run and
  final adjudication, gating dispatch ⚠️ · pharmacist-confirmed generic
  swaps (lawful substitution) · same-token redemption across stores and
  routes · held-order shelf with price lock ⚠️ · failure-triggered outbound
  calls, not inbound queues.
- Regulatory: generic substitution lawful with prescriber primacy and
  patient choice; identity verification for scheduled handover satisfied by
  ID where the code fails; scheme disputes handled pharmacy-to-scheme with
  the patient's consent.
- Chips (cites): graceful-failure patterns (wiki/concepts/graceful-failure) ·
  reroute + stores-with-stock
  (wiki/digital-transformation/dischem-scripting-tech-roadmap) · claim
  delta detection (wiki/medical-schemes/realtime-claims-switching ⚠️) ·
  substitution rules (wiki/medical-schemes/dsp-formularies-copayments) ·
  token cross-redemption (wiki/concepts/e-prescription-token) ·
  hold-at-counter ⚠️ (punchlist 10g) · outbound-call recovery
  (wiki/dischem/dischem-social-sentiment-trust-journey).

## P4 route fork - insured (added 2026-08-16, agreed with Tamsin)

P4 carries a **route toggle for Aisha only**: *Delivered* (the existing spine,
keeping ⭐ M4a) and *Collected* (new, carrying unstarred M4c). Rationale: the
most common real-world acute path in SA - see the doctor, stop at Dis-Chem on
the way home - was not walked by either persona, so the 30-minute half of
[[The 30/60 Fill]] was never demonstrated. Delivery stays Aisha's main spine;
the toggle is scoped to P4 alone, with P2 naming the fork in one line. P3 is
identical on both routes and is not toggled.

**Terminology resolved (2026-08-16).** "Express pickup zone" previously meant a
*staffed* fast counter, which collided with the new unattended route. From now:

| | Staffed handover | Unattended handover |
|---|---|---|
| Name | **the collections counter** | **express collect** |
| Who | a pharmacist hands over and counsels | nobody - scan a code, the pack comes out |
| Hours | store hours | store hours + after-hours when sited on the outside wall |

Consequence: **Thabo uses the collections counter**, not express collect - his
M4b moment is the pharmacist walking him through his son's dose, and that stays.
Renamed through P2-cash, P4-cash and ∥-cash. The after-hours external point is
unchanged and still 🔮 requires-reform. *(2026-08-16, journey-comments sweep:
the first rename pass missed P3-cash's ready message, ∥-cash's dead-phone
scenario and the P2/∥ frontstage lanes in the built page, and had not been
mirrored into this spec's approved-copy sections at all - both completed
through spec and deliverable.)*

**Regulatory stance on express collect (decided with Tamsin 2026-08-16, option 2).**
The silent, nobody-present unit is **kept as drafted and flagged 🔮
requires-reform**, rather than redesigned to the lawful-today shape. The rule is
now known exactly: GPP 1.9.3(b) bars a patient receiving directly from an
in-pharmacy automated unit, and patient-facing units live under **SAPC rule 1.11
(RADU)** - which already permits this pattern, but for **chronic** medicine, in
**institutional public pharmacy**, with a pharmacist performing phases 1 and 3
"through the audio-visual interface, at the time of dispensing" (1.11.5(a))
[[src-reg-sapc-rules-s35a-radu-courier]]. The version shown therefore needs two
extensions of an existing standard - to community pharmacy, and to release
without a live pharmacist - which is a narrower ask than it appears. The
lawful-today alternative, recorded here and not built: the same unit, with a
pharmacist greeting the customer on screen before the door opens. M4c's memory
line ("In and out, and I never spoke to anyone") is the specific thing the reform
would unlock.

**A second 🔮 raised the same day, on the delivery route.** SAPC rule 1.9.7(e)
provides that medicines prescribed for acute conditions "shall not be delivered
to patients by mail/courier". Aisha's delivered antibiotic and The 30/60 Fill's
whole delivery half rest on whether a pharmacy's own same-metro service is
"mail/courier" within that rule - ⚠️ unresolved, punchlist 10(k), and it needs a
legal read before this journey travels to a regulator.

**Counselling on the express route.** Choosing express collect is choosing not
to *speak* to a pharmacist, never choosing to go without counselling: the notes
go to WhatsApp or print at the point of collection, and a named pharmacist stays
one tap away. GPP requires counselling *access* preserved, not face-to-face
delivered, so this is defensible - but whether a patient may decline
face-to-face counselling on a first-time acute antibiotic is **⚠️ not sourced in
the vault**; logged as punchlist item 10(j) and an open question.

## Open items

- ∥ scenarios: to be defined with Tamsin at that phase pass (acute-native;
  includes "I'm worried about a side effect" - reactive, needs a decision -
  distinct from M6's proactive check-in).
- ~~Express pickup counter (scan QR, priority handover, no dispensary queue):
  design assumption - ⚠️ + `meta/punchlist.md` entry when P4 is drafted.~~
  Done: logged as punchlist 10(a) and renamed **the collections counter**
  2026-08-16.
- Emotion curves: values set at build time.
- P2-P6 and ∥ copy: drafted phase by phase, reviewed by Tamsin before
  entering the spec (P1 above is the approved pattern; M1 and M2 blocks are
  the style proofs).

## See also

- [[design-kit/templates/moments-journey-template]] - the canon
- [[design-kit/journeys/to-be-household-repeat-moments]] - the v3.1 register rule set
- `deliverables/08-concepts.html` - the concept set (now 17: 14 live, 3
  archived in place - card ids are array positions, never renumber)
- `deliverables/07-tobe-acute-escripting-journey.html` - the previous acute treatment (preserved)
