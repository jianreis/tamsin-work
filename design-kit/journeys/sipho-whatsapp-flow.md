---
type: journey
title: "Sipho's repeat as a WhatsApp conversation - channel mock spec"
state: to-be
variant: channel-mock
persona: "[[design-kit/personas/low-data-whatsapp-first-peri-urban|Sipho]] (cash)"
status: draft
confidence: medium
tags: [design-kit, journey, to-be, domain/ux, domain/consumer, topic/e-prescription, journey/refill, journey/collect, region/za]
sources: [src-dc-complaints-jan2025, src-con-datareportal-digital-2024, src-con-ramp-data-prices, src-con-pelebox, src-wa-cloud-api-interactive, src-wa-message-templates, src-wa-flows, src-wa-click-to-chat, src-wa-business-messaging-best-practices, src-ux-google-conversation-design, src-ux-nng-chatbot-ux, src-ux-hall-conversational-design, src-ux-hicks-law-choice-load]
created: "2026-08-07"
updated: "2026-08-18"
---

# Sipho's repeat as a WhatsApp conversation - channel mock spec

Content spec and build source for `deliverables/11-sipho-whatsapp-flow.html`.
This deliverable dramatises the **cash track of the approved #09 journey**
([[to-be-household-repeat-moments]], v3.8) as literal WhatsApp screens: every
message Sipho sends or receives, rendered in the channel's real UI mechanics,
with an annotation rail explaining which WhatsApp Business Platform feature
carries each beat and which persona constraint it honours. It invents no new
service behaviour: where #09 says "the chat shows me the plan", this spec
decides what that chat message literally looks like, and nothing more.

Process: feature mapping proposed and reviewed in situ; P1 mocked
copy-complete first (pass approved by Tamsin 2026-08-07, "proceed with the
full journey"); all seven phases scripted and built to the same rules.
2026-08-16 (agreed with Tamsin message by message): re-synced to
#09 v3.4-v3.8, and the whole script re-cut against the sourced
conversational-design canon ([[conversational-design-whatsapp]]) - see the
process log at the end. 2026-08-18 (v3.1, Tamsin's instruction): locker
credential aligned to #09 v3.9 and the 2026-08-17 cross-journey convention -
the in-locker message carries a QR with the backup PIN beneath it (failed
scans, SMS delivery); pay-then-activate unchanged; the pickup is a scan at
the locker with the PIN as the typable fallback. The QR is the service's
one deliberate download on this thread; the rail annotates the trade, and
data frugality stands everywhere else. Register is **annotated** - a phone frame per phase
plus a side-rail of feature callouts - and the chat renders in **English for
the executive audience**, with a standing annotation that production renders
it in the language Sipho chose at sign-up. Previous deliverables stay
untouched.

## Ground rules

1. **Copy fidelity.** Chat copy derives from the approved #09 cash activities.
   The #09 spec's first-person register rules apply to any connective copy;
   the messages themselves are service UI copy and follow the persona's
   constraints instead: short, plain, no jargon, price in rand, nothing that
   assumes app fluency.
2. **Conversation design canon.** Every message obeys the sourced rules in
   [[conversational-design-whatsapp]]: one turn, one job; one decision per
   message (sequential beats simultaneous); the question sits last; buttons
   are the user's next words (max 3, 20 characters, and 3 is a ceiling, not a
   norm - binary choices get 2); exploration language while exploring,
   commitment language only on a confirmation turn; any change to money,
   medicine or dates is read back for an explicit yes before it takes effect;
   free text always lands somewhere designed.
3. **The visual ladder.** Data frugality stays visible, by rung:
   - *Rung 1 - costs nothing, used everywhere:* emoji as functional anchors
     (roughly one per line, marking what a line is about - never in questions
     or button labels) and WhatsApp's native text formatting (bold,
     monospace for codes). Zero data.
   - *Rung 2 - small, meaningful pixels:* catalogue **product cards**
     (thumbnail, name, price, add-to-cart) where the picture does real work -
     recognising a physical product beats reading its name at every literacy
     level. Compressed thumbnails, tens of KB, and browsing is data he
     chooses to spend.
   - *Rung 3 - declined, and the rail says why:* decorative image headers on
     statuses, PDFs, video - pixels that carry no meaning he'd miss
     [[wiki/consumer-context/digital-access-and-whatsapp]].
4. **Silence is the golden path.** The service never stops because Sipho does
   not reply (#09 P1 A3). Buttons offer change, never demand confirmation.
   The one exception is sign-up itself, where the read-back confirm is the
   consent gate.
5. **Change is ever-present, never offered.** Every business-initiated
   message carries the standing 60-character template **footer**: "Reply
   CHANGE any time - date, place, anything." Replying CHANGE anywhere opens
   the one change menu (see P1 branches). The capability is furniture, not a
   prompt: no inbound message body ever offers to change the plan - the v3.6
   fulfilment flexibility (shift the date, switch locker / store / costed
   delivery, until the day before) is exercised through the footer, and the
   mock demonstrates it once as an optional branch after C2.
6. **Prices and product names are illustrative.** Rand amounts demonstrate
   the price-before-travel mechanic and are not sourced SEP calculations;
   named products (Adco-Amlodipine, Biogen, Borstol, Panado, Benylin,
   ACC 200) are real SA products used illustratively - availability and
   pricing unverified. Flagged ⚠️ in the build.
7. **Platform capability claims are sourced** as of 2026-08-16:
   [[src-wa-cloud-api-interactive]] (reply buttons max 3, 20-char titles;
   list messages max 10 rows, 24-char row titles; body 1,024 / footer 60),
   [[src-wa-message-templates]] (utility / marketing / authentication; the
   24-hour service window), [[src-wa-flows]], [[src-wa-click-to-chat]].
   Caveat per punchlist 11: captured via corroborated extracts, re-verify on
   the live Meta pages; the catalogue / cart / product-card mechanics still
   need their own commerce-docs verify.
8. **Walkthrough convention (build only).** Where a sheet or button set has
   one scripted continuation, the walkthrough row is highlighted with ▶;
   other rows are real UI but inert in the mock. Interactive beats the viewer
   must tap are dashed pills ("tap to send: ..."). Optional demonstrative
   branches (the photo escalation, the CHANGE demo) play without rewriting
   downstream steps; each phone has its own reset.

## Feature mapping - all seven phases

| Phase | Journey beats (#09 cash, v3.8) | WhatsApp mechanics used |
|---|---|---|
| P0 Signing up (once) | Invited after an in-store collection; language pick; add household; two dates, one memory (sync offered and passed over, his day moved to the 28th via the costed top-up); locker choice; payment rule; confirm | Business-initiated **invite template** (VP headline, twin CTA); **list message** for language; **WhatsApp Flow** for the household + medicines; the sync / date-move exchange as four sequenced binary turns (offer -> costed sync -> own-day pick -> read-back confirm); **reply buttons** for channel; **list message** for pickup points; read-back + reply-1 confirm |
| P1 Repeats are due | Notice a week out (his order only, after her programme parcel); price before travel; keeps going unless he says otherwise | **Utility template** with the standing CHANGE **footer**; formatted price breakdown in-bubble (rung 1); **reply buttons**: add / change / person; the one change menu as a **list message** (9 rows) |
| P2 Adding to the order | He opens the door M3 left ajar; suggest from history, specials first; browse; free-text request, clarifying question, priced options | User-pulled session (his tap opens the 24-hour window - no marketing template); catalogue **product cards** with add-to-cart (rung 2); **[Browse medicines]** into the in-WhatsApp medicine-only catalogue; free text first-class, one clarifying question as **reply buttons**; running total re-stated in-bubble |
| P3 Checked and packed | Picked-and-checked with the checks listed plainly and the pharmacist named; packed-and-sealed (no PIN); change stays one reply away | Two **status templates** with footers; check list as rung-1 anchor lines with the concrete clash example; the CHANGE demo branch (date moved via the menu) |
| P4 In hand | QR + backup PIN issued when the parcel physically lands (v3.1, per #09 v3.9); pay at counter activates it; scan at the locker, PIN as the typable fallback; contents check at the locker; photo escalation | **Reminder template**: first issue of the credential - the QR with the backup PIN beneath it + the two retrieval steps; off-channel handover by design; post-handover contents list in real product names; **photo reply** escalates to a person phoning back |
| P5 Taking it | Look up any medicine by its real name; her shared clinic medicines visible under consent; ask the pharmacist; reminders that stop when told | **List message** cabinet: product-name rows, owner in parentheses, told-us provenance ("from her clinic script"); rung-1 iconised dose lines; free-text and **voice-note** Q&A; STOP honoured instantly |
| ∥ When something breaks | Out of stock (his order only); locker down; his script runs out; a person phones back | **Exception templates** carrying the plan and its choices as **reply buttons**; told before travelling; "call me" one reply away; nothing dead-ends in the thread |

Out of scope, same as #09: script-expiry renewal (Script Renew) beyond its
∥ signpost, after-hours acute (#10's territory). In-chat payment is
deliberately absent: WhatsApp payments are not live in South Africa, and the
journey's cash-at-the-Capitec-counter step needs no channel payment anyway -
the constraint and the design agree.

## The timeline

Sign-up in July, one August 2026 cycle, and the failure band "in the months
after". Invited + signed up Mon 13 Jul · first order (not dramatised, carries
the once-off top-up) Mon 20 Jul · her programme parcel Tue 18 Aug · notice
Fri 21 Aug (a week out) · add-ons Sat 22 Aug (his tap) · picked Wed 26 Aug ·
sealed Thu 27 Aug · in the locker + collected Fri 28 Aug · taking it Sat
29 Aug. Running cash total for August: R100.60 (tablets + fee) -> R150.50
(+ Biogen Multivitamin 30s R49.90) -> R189.00 (+ Borstol Cough Syrup R38.50).
The July top-up (R18.40) rode the July order, so August's arithmetic is a
normal month. All amounts illustrative ⚠️.

## P0 script - Signing up (once) · Mon 13 Jul, from 17:02

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| W0a | in | Invite template (business-initiated, after an in-store collection) | **Same medicine, every month, without the queue.** Dis-Chem Repeats prepares your medicine for you automatically, every month - delivered to your home, or ready to collect close by. No effort from you: we get it ready, tell you the price, and tell you when it's there. Free to use - you pay only for your medicine. Buttons: **[Set up my repeats ▶] [Tell me more]** ("Tell me more" plays: How it works: **1.** Set up once - who it's for, where it reaches you, how you pay. **2.** Each month we prepare your repeat and message you the price first. **3.** Collect close by, or have it delivered - you pay when you receive it. **4.** Change, pause or add family any month - their medicine comes in the same order. A pharmacist checks every order, and you can ask them anything here, any time.) |
| W0 | out | Button echo | Set up my repeats |
| W1 | in | List message (language first) | Let's set you up - a few minutes, right here. First: which language should we speak? [Choose my language] -> sheet: **isiZulu ▶** · isiXhosa · Sesotho · English · Afrikaans · Setswana |
| W2 | out | Sheet pick echoes | isiZulu |
| W3 | in | Text + WhatsApp Flow CTA | Who is this service for? You can add family you care for - if they've given their consent for you to manage their medicine, it covers this service too. [Set up my family] -> Flow sheet: ☑ **Sipho (you)** - Blood-pressure tablets - Amlodipine 5 mg - 28 tablets, one month at a time · ☑ **Your mother** - Chronic medicine parcel - packed by her clinic's programme (CCMDD) - collected monthly; the programme fills and labels it · *You manage her medicine - consent recorded: order, collect and manage on her behalf. Her medicine list is shared with you - her choice, and she can change it. One tap confirms.* · [Continue] |
| W4 | in | Chunked acknowledgement | Both added. |
| W5 | in | Sync offer, exploration buttons | Your tablets and your mother's medicine are ready at different times of the month. We could line them up - one trip instead of two. Want to see how that would work? Buttons: **[How would it work? ▶] [Keep them apart]** |
| W6 | out | Button echo | How would it work? |
| W7 | in | Costed sync plan, one decision | Your mother's date can't move - her parcel comes from her clinic's programme, around the 18th, at no cost to you. Yours can move to the 18th. That takes a once-off top-up of extra tablets: **R66.70**. Move your tablets to the 18th? Buttons: **[Move to the 18th] [Keep them apart ▶]** |
| W8 | out | Button echo | Keep them apart |
| W9 | in | Own-day offer, free-text answer | No problem - yours stays around the 20th, the day of your first fill. If another day suits you better, you can move it the same way, with a small once-off top-up. Which day should your tablets be ready? Reply with a day, like 25 - or KEEP. |
| W10 | out | Typed reply | 28 |
| W11 | in | Costed read-back, commitment buttons | The 28th: a once-off top-up of **R18.40**, in your first order. From August, your tablets are ready on the 28th of every month. Shall I move it? Buttons: **[Yes, the 28th ▶] [Keep the 20th]** |
| W12 | out | Button echo | Yes, the 28th |
| W13 | in | Two-dates confirmation | Done - two dates, one chat. Hers: around the 18th, nothing to pay. Yours: the 28th of every month. Your first order is ready **Monday 20 July**, with the once-off top-up included. We remember both dates, so you don't have to. |
| W14 | in | Reply buttons (channel choice) | How should your medicine reach you each month? Buttons: **[Collect near me ▶] [Deliver to me]** ("Deliver" plays: We can deliver where couriers reach - though most people near you choose the locker: no street address needed. Tap "Collect near me" to see the points close to home.) |
| W15 | in | List message (pickup points) | Closest collection points to home: [Choose a point] -> sheet: **Capitec branch, taxi rank - locker ▶** · Dis-Chem store, 14 km away |
| W16 | out | Sheet pick echoes | Capitec locker, taxi rank |
| W17 | in | Language-of-content note | Done - the locker at the Capitec branch by the taxi rank. No street address needed. You'll get everything here in isiZulu, and your mother's medicine instructions come printed in her language. |
| W18 | in | Payment rule | Paying: cash or instant EFT at the Capitec counter when you collect - paying is what opens the locker. And we use cheaper generics unless you tell us otherwise, so the price stays one you can plan around. |
| W19 | in | Read-back + confirm gate | Here is everything, read back: you + your mother · two dates - her parcel around the 18th (nothing to pay), yours on the 28th · collect at the Capitec locker, taxi rank · pay cash at the counter, generics by default · isiZulu here, her instructions in her language. Reply **1** to confirm - and from here, it's remembered. |
| W20 | out | Keyword reply | 1 |
| W21 | in | Confirmation | Done, Sipho. It just runs from here: your first order is ready Monday 20 July, and we message you a week before every order with the price. |

Key moment (rail, #09 verbatim): "I told them once how I want it" - one
WhatsApp conversation, a few minutes - and it's remembered: not asked again at
a counter, not to a driver, not at the bank. The CarerConsent concept, on the
phone he already owns.

Rail callouts: the invite entry (v3.6 origin story - a template after an
in-store collection; the VP headline is what the notification preview shows,
so the hook lands before the chat is opened; the pharmacist stays unnamed);
language list first, before anything else is asked; the Flow is the one place
a form beats chat (his row is a dispensing record - plain handle, molecule +
strength, monthly quantity; her row is described by origin because Dis-Chem
never opens the programme parcel; consent is an already-granted fact whose
scope is read back, POPIA-recorded, and her medicine-list share is her own
revocable grant); the sync / date-move exchange runs one decision per turn
with exploration labels until the single commitment turn (W11) - and the rail
carries what the chat never asks: he picks the 28th because it sits after
month-end payday; his reasoning, never the service's data. Script Sync made
visible, then repurposed - the same priced mechanic he declined for the 18th
buys him affordability on the 28th.

## P1 script - Repeats are due · Fri 21 Aug, 08:12

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| M1 | in | Utility template + standing footer | Hello Sipho. Your repeat order for August is being prepared: your blood-pressure tablets (Adco-Amlodipine 5 mg). It will be ready at the **Capitec locker at the taxi rank** on **Friday 28 August**. Your mother's parcel arrived from her programme on Tuesday - both dates, one thread. You don't need to do anything. If nothing changes, it will be waiting. *(footer: Reply CHANGE any time - date, place, anything.)* |
| M2 | in | Formatted price breakdown (rung 1) | Here is the price, so you know before you travel 🧾 *Your tablets:* Adco-Amlodipine 5 mg, 28 tablets (generic) - R64.40 · Dispensing fee - R36.20 · **Total to pay: R100.60** 💵 Cash or instant EFT at the Capitec counter - paying is what opens the locker 🔓 *(footer)* |
| M3 | in | Reply buttons (doors, not demands) | Happy with this? Then there's nothing to do - your order carries on by itself, this month and every month. Buttons: **[Add to my order] [Change something] [Talk to a person]** *(footer)* |

Branches: **Change something** (button or the CHANGE keyword, anywhere) ->
the one change menu, a list sheet of 9 rows, frequency-ordered, titles within
the 24-char row limit: **Change the date** (just this month, or every month -
the follow-up asks which) · **Skip this month** (your repeat waits; nothing is
cancelled) · **Add medicine** (rides in the same order) · **Collect or
deliver** (locker, store or delivery) · **How I pay** (at the counter, or
other ways) · **Generic or brand** (per medicine, either way) · **Personal
details** (language, my info, my family) · **Cancel the service** (stops
everything; a person will confirm) · **Something else** (just type it).
**Talk to a person** -> phoned back before 17:00, in his language, data can
lapse. Pause lives inside the menu now (Skip this month), not on a button.

Key moments (rail, #09 verbatim): ⭐ "My medicine ordered itself" at M1;
⭐ "The only thing I ever bought blind - not anymore" at M2. Rail callouts:
his order only - her programme parcel is tracked, never managed (v3.4); no
CCMDD price line - there is nothing to pay on hers (v3.4); dates, never
"payday" - what the 28th means is his business (v3.8); the footer is the
ever-present change surface (rule 5); the menu's honest hierarchy - money
moves first, destructive last, escape hatch always at the bottom.

## P2 script - Adding to the order · Sat 22 Aug, from 09:40

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| N0 | out | Button tap from M3, next morning - his moment, not a push | Add to my order |
| N1 | in | Product cards (rung 2) + browse + free text | What would you like to add? Anything in before **Wednesday 26 August** rides in the same parcel. This route carries medicine only - no groceries - but the everyday kind is covered 💊. From what you usually buy: [🖼 **Biogen Multivitamin 30s** · R49.90 · ON SPECIAL · Add to order] [🖼 **Panado, 24 tablets** · R24.50 · Add to order] Or browse, or just type what you need. Button: **[Browse medicines]** ("Browse medicines" plays a system pill: Opens Dis-Chem's in-WhatsApp medicine catalogue - browse, add to cart, and the cart lands back in this thread as an order.) |
| N2 | out | Card add-to-cart echoes | 🛒 Biogen Multivitamin 30s |
| N3 | in | Running total | Added: Biogen Multivitamin 30s - R49.90. New total to pay: **R150.50**. |
| N4 | out | Free text, first-class | cough mixture |
| N5 | in | One clarifying question, reply buttons | For a child or an adult? Buttons: **[For an adult ▶] [For a child]** ("For a child" plays: For a child we ask their age and weight first - the dose is checked against their weight by a pharmacist, so you collect with confidence.) |
| N6 | in | Priced options as product cards | Three options, all in stock - tap one to add: [🖼 **Borstol Cough Syrup**, 100 ml · R38.50 · Add to order] [🖼 **Benylin wet cough**, 100 ml · R62.95 · Add to order] [🖼 **ACC 200 sachets**, 10 · R89.00 · Add to order] |
| N7 | out | Card add-to-cart echoes | 🛒 Borstol Cough Syrup |
| N8 | in | Total restated + close | Added: Borstol Cough Syrup - R38.50. Your total at the Capitec counter is now **R189.00**. Everything comes in the same locker on Friday - nothing else to arrange. *(footer)* |

No key moment: #09 agreed the cash addition carries no moment. Rail
callouts: P2 is user-pulled - the suggestion message is an answer, not an
ambush, and his tap opens the 24-hour service window, so none of this needs a
marketing template; the product card's thumbnail is the shelf photo he
already recognises - an accessibility device at his literacy level, not
decoration; no owner is guessed - the suggestions say "from what you usually
buy", never whose they are (a till slip has no owner); the catalogue behind
[Browse medicines] is the locker-route catalogue, medicine and everyday OTC
only, so the browse view cannot un-say N1's honest constraint; free text
stays first-class with exactly one clarifying question back; the running
total is restated after every change, so price-before-travel survives the
additions.

## P3 script - Checked and packed · Wed 26 + Thu 27 Aug

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| C1 | in (Wed 11:05) | Status template 1 (rung-1 anchor lines) | ✅ **Picked and checked** A registered pharmacist checked your order today: 💊 The right medicine, at the right dose · 🔁 Nothing clashes - your cough syrup was checked against your blood-pressure tablets · 📋 Your script, and your history with us. Signed off by pharmacist **Nomsa Dlamini**. *(footer)* |
| C2 | in (Thu 15:48) | Status template 2 - no PIN at sealing (v3.6) | 📦 **Packed and sealed** One parcel: your tablets, the multivitamins and the cough syrup - waiting for the courier run to the locker. *(footer)* |
| C3 | out | Optional demo branch: the CHANGE keyword | CHANGE |
| C4 | in | The change menu + date move (demonstrative) | [the 9-row menu opens] -> **Change the date ▶** -> Just this month, or every month? **[This month ▶] [Every month]** -> Done - your parcel will be ready **Monday 31 August** instead. Same locker, same amount. |

Key moment (rail, #09 verbatim): "Every check ran before it left the
building" - the same checks, the same standard, the same named signature. How
he pays has no bearing on how carefully his family's medicine is handled - and
for the first time, he can see that. The Named Check, identical on the cash rail.

Rail callouts: statuses arrive without being asked and carry their detail
inline - never "open a link to see more", because a link is a download; the
check list answers "checked what?" in plain lines, with the clash example
doing the teaching (his August order really does contain the one interaction
a pharmacist watches for: decongestant syrups against blood-pressure
tablets); the pharmacist is named at the final check (the #10 name rule);
nothing is issued at sealing - the PIN belongs to P4, when the parcel is
physically in the locker (v3.6); the CHANGE demo shows fulfilment flexibility
being *used*, not offered - reply-shaped, until the day before (the demo
branch resets; downstream steps keep Friday). Boundary note: the pharmacist
checks what Dis-Chem dispenses plus what the household has shared - the
programme parcel is the programme's check.

## P4 script - In hand · Fri 28 Aug

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| H1 | in (06:45) | Reminder template - first issue of the credential: QR + backup PIN (v3.6 timing, v3.1 credential) | Your parcel is in the locker at Capitec, taxi rank - ready now. To collect: **1.** Pay **R189.00** at the counter - cash or instant EFT 💵 · **2.** Scan this at the locker 🔓 [QR code] If the scan won't read, enter PIN `4729` instead. The same amount you saw before. Nothing has changed. *(footer)* |
| - | - | Off-channel note (system pill in the mock) | At the bank: Sipho pays R189.00 at the counter, the locker opens on his scan - the PIN is the fallback. Nothing happens in the chat - and nothing needs to. |
| H2 | in (10:32) | Contents list after handover, real names | In your parcel: Adco-Amlodipine 5 mg, 28 tablets · Biogen Multivitamin 30s · Borstol Cough Syrup. Check it now, at the locker - before the taxi. If anything is missing or wrong, send a photo here and a person will phone you straight away, in your language. |
| H3 | out | Photo reply (optional branch) | [photo of the open parcel] |
| H4 | in | Escalation confirm | Thank you - a pharmacy team member is phoning you now, while you're still there. |

Key moment (rail, #09 verbatim): ⭐ "I could track it from Dis-Chem's door to
mine" - the same certainty, differently shaped: payment and collection in one
visit, near home, with no address required - and if the locker is ever down,
he knows before he travels, not after.

Rail callouts: the message comes the moment the parcel is physically in the
locker - the credential's first issue, not a restatement (v3.6), with the
two retrieval steps in order because payment is what activates the code;
QR-first with the PIN as the typable fallback (v3.1, per #09 v3.9 - a
failed scan or an SMS delivery never blocks the parcel); pay-then-scan on
the Pelebox pattern
[[wiki/consumer-context/last-mile-addressing-logistics]], with the
cash-at-the-partner-counter release a punchlist 9(a) assumption ⚠️; the
contents list uses the same product names as the cabinet and the shelf, so
the check at the locker is a match, not a translation; the
photo-to-phone-back escalation is the punchlist 9(e) mechanism ⚠️, checked at
the locker so a mistake never rides the taxi home.

## P5 script - Taking it · Sat 29 Aug

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| T1 | in (09:15) | List message (the cabinet) - real names, owners in parentheses | Your family's medicine, whenever you want to look something up: [My medicines] -> sheet: **Adco-Amlodipine 5 mg ▶** (Sipho) Blood pressure - 1 every morning · **Enalapril 10 mg** (Your mother) Blood pressure - from her clinic script · **Hydrochlorothiazide 12.5 mg** (Your mother) Blood pressure - from her clinic script · **Biogen Multivitamin 30s** (Household) · **Borstol Cough Syrup** (Household) Wet cough - 100 ml |
| T2 | out | Sheet pick echoes | Adco-Amlodipine 5 mg |
| T3 | in | Plain-language entry (rung-1 dose lines) | **Adco-Amlodipine 5 mg** (amlodipine) - your blood-pressure tablets. 🌅 One tablet, every morning · 🍽 With or without food · ✔ Keep taking them when you feel fine - that's the medicine working. If reading isn't enough, just ask here - a pharmacist reads this thread. Or send a voice note; we listen to those too. |
| T4 | in (09:16) | Reminder routing + STOP | Reminders: yours comes here at 20:00. Your mother's go to her phone - a short voice note in her language, timed to her mornings. Her printed day-by-day sheet is in the parcel, for the fridge. Reply **STOP** to any reminder and it stops. |
| T5 | in (20:00) | The reminder itself | Time for your tablet, Sipho. |
| T6 | out | Keyword reply (optional branch) | STOP |
| T7 | in | Instant opt-out honoured | Done - no more daily reminders. Everything else stays exactly the same. |

Key moment (rail, #09 verbatim): "Medication you can't take wrong" - the
basics done properly: a clear label on every pack, icons that speak before
words do, a sheet on the fridge, a guide on the phone. Taking it right isn't
something money buys - it comes with the medicine.

Rail callouts: the cabinet convention - dispensed medicine carries its owner
(the script-holder), shared medicine carries its consent-giver, OTC purchases
are (Household) unless someone assigns them - the service never guesses; her
clinic medicines appear because she granted the see-dial of CarerConsent,
and "from her clinic script" is the provenance label - a told-us record the
pharmacist can use but never vouches for (the v3.4 boundary, kept: the
knowledge layer can hold what the logistics layer never touches); entry
copy is brand-first with the molecule in brackets, so phone and pack match
word for word; the dose lines mirror the parcel's iconised labels
(Made-for-Me Medicine's free floor) - chat and pack speak the same visual
language; voice notes work in both directions; STOP is honoured instantly
and completely, because the research shows help flips into harassment the
moment agency is lost.

## ∥ script - When something breaks · the months after

Scenarios, not steps (#09 rule) - three episodes, each a bad-news message
that arrives carrying its plan:

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| X1 | in | Exception template + reply buttons | (Out of stock) One of your medicines - your blood-pressure tablets - is out of stock this month. Here is the plan, you choose: **1.** A different generic of the same medicine - ready on the 28th, same price · **2.** Split the order: the rest of your order is ready on the 28th, the tablets follow a few days later, same locker. Nothing is decided without you. Buttons: **[Use the generic ▶] [Split the order] [Call me]** *(footer)* |
| X2 | in | Branch responses | Generic: Done - the other generic will be ready on the 28th. Same medicine, same price, same locker. / Split: Done - the rest of your order is ready on the 28th; the tablets follow, and we'll message the day they land - before you travel. / Call me: A person will phone you back before 17:00 today, in your language. |
| X3 | in | Told before travelling | (The locker is down) Before you travel today: the locker at Capitec is out of order. Your parcel is already at the pickup point nearby - same amount, same code, and we'll tell you the moment the locker is fixed. Your taxi fare is never spent on a closed door. *(footer)* |
| X4 | in | Script Renew signpost - his own script (v3.4) | (The script runs out) Your script has one repeat left after this month. We've already sent the renewal request to your doctor - you'll see it move here, and it costs you nothing to chase. If your ready date comes before the new script is back, we'll tell you before you travel - with a plan from the pharmacist, and a person on the phone if you want one. *(footer)* |

No key moment: #09's ∥ moment of truth is medical-aid-specific and
insured-only; the cash recovery paths carry no separate moment (spec'd there,
kept here). Rail callouts: bad news arrives already carrying its plan, with
the choices as buttons - never a dead end; his order only - a stock-out
never touches the programme parcel, and the split offers "the rest of your
order", not her medicine (v3.4); the script that runs out is his own - hers
is the clinic's to renew (v3.4); the taxi-fare rule - every failure that can
be known before he travels is told before he travels; and when things truly
break, the human comes by phone, one reply away - the loud human-not-bot
beat the sentiment research demands.

## Build notes

- Page chrome sits in the #09/#10 family: brand band, ribbon, persona strip,
  phase spine (all seven live, each node jumps to its phase).
- One phone frame per phase, each with its own annotation rail, reset button
  and walkthrough interactions; a shared script engine renders all seven from
  step data mirrored off this spec.
- New render mechanics this pass: template footers (small grey line under the
  bubble), product cards (thumbnail block + name + price + add-to-cart row),
  monospace code line for the PIN, emoji anchor lines, the 9-row change menu
  sheet, and the Flow sheet's richer member rows.
- Feature chips carry their basis in tooltips; platform-capability chips cite
  the 2026-08-16 ingest ([[conversational-design-whatsapp]]); catalogue /
  cart chips stay ⚠️ pending the commerce-docs verify.

## Process log - 2026-08-16 pass (agreed with Tamsin message by message)

Re-sync to #09 v3.4-v3.7 plus the session's own decisions, each approved in
conversation before writing: the invite entry (VP headline, twin CTA, service
not channel, pharmacist unnamed); the sync exchange re-cut as one decision
per turn after the conversational-design ingest, with the date-move mechanic
generalised and priced (drove #09 v3.8); payday out of all service copy;
exploration vs commitment button language; the standing CHANGE footer with
the rebuilt 9-row menu (payment, generic-or-brand and personal-details rows
added, language folded into personal details, pause demoted from M3);
P2 re-hung off M3's [Add to my order] (user-pulled, no marketing template);
the visual ladder (emoji anchors, product cards, declined heavy media); C1's
explicit plain-lines check with the clash example; real product names
throughout with owners never guessed (Household for unassigned OTC); the
cabinet expanded with her shared clinic medicines under the CarerConsent
see-grant; X4 re-pointed at his own script.

## Open questions

- On the WhatsApp surface, do P3 and P4 want to compress into one "ready and
  collected" episode? The channel collapses what the journey page separates -
  parked for Tamsin's read of the full set.
- The 2026-08-16 ingest answered the template-category question in outline
  (utility for order statuses; the invite is the one marketing-category
  template in the script; P2 runs in the session window) - but the mapping
  of every business-initiated message to Meta's current category rules still
  wants the live-docs verify, with the catalogue / cart / product-card
  mechanics (punchlist 11).
- The pharmacist name at the P3 final check (Nomsa Dlamini) is still a
  placeholder - confirm or align with a name from the wider journey set.
- Cross-supplier screening: the household buys OTC (the multivitamins) that
  may be taken alongside programme medicine Dis-Chem never sees unless
  shared. The cabinet's told-us records narrow this; the honest limit of the
  pharmacist's check for unshared medicine is logged in the punchlist.

## See also

- [[to-be-household-repeat-moments]] - the approved journey this dramatises (v3.8)
- [[conversational-design-whatsapp]] - the sourced conversation-design canon
  and platform limits this script obeys
- [[design-kit/personas/low-data-whatsapp-first-peri-urban]] - Sipho
- [[wiki/consumer-context/digital-access-and-whatsapp]] - the channel constraints
- `deliverables/09-tobe-household-repeat-moments.html` - the source journey
- `deliverables/08-concepts.html` - concepts referenced by the moments
