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

Process (agreed with Tamsin 2026-08-07): feature mapping is proposed in the
build and reviewed in situ; **one phase (P1, Repeats are due) is mocked
copy-complete first**; the remaining six phases are built only after the P1
pass is signed off. Register is **annotated** - the phone frame plus a
side-rail of feature callouts - and the chat renders in **English for the
executive audience**, with a standing annotation that production renders it in
the language Sipho chose at sign-up. Previous deliverables stay untouched.

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
4. **Prices are illustrative.** Rand amounts in the mock demonstrate the
   price-before-travel mechanic and are not sourced SEP calculations.
   Flagged ⚠️ in the build.
5. **Platform capability claims are unsourced for now.** The WhatsApp Business
   Platform feature inventory used here (interactive reply buttons, max three;
   list messages, max ten rows; WhatsApp Flows; catalogue and order messages)
   comes from platform documentation knowledge, not from a vault source note.
   Logged in `meta/punchlist.md` item 11; an INGEST of the Meta developer docs
   should follow before this deliverable is presented as feasibility evidence.

## Feature mapping - all seven phases (proposed, review in situ)

| Phase | Journey beats (#09 cash) | WhatsApp mechanics proposed |
|---|---|---|
| P0 Signing up (once) | Start in chat, language pick, add household, one date, locker choice, payment rule, confirm | Entry via click-to-chat / saved number; **list message** for language pick; **WhatsApp Flow** (native multi-screen form) for household + medicines + preferences; reply-button confirm ("reply 1" equivalent); consent read-back as plain text |
| P1 Repeats are due | Notice a week out; price before travel; keeps going unless he says otherwise | **Utility template** (business-initiated, text-only); itemised price in-bubble; **reply buttons** (max 3): change / pause / person; **list message** behind "Change something"; voice-note + call-me-back fallback |
| P2 Adding to the order | Order stays open; suggest from history, specials first; free-text request, clarifying question, priced options | Numbered picks in text (reply 1/2/3); free text in, one clarifying question back; **list message** of priced options; running total re-stated in-bubble |
| P3 Checked and packed | Picked-and-checked status with the checks listed and the pharmacist named; packed-and-sealed with the PIN | Two **status templates**; PIN as a copyable code line; no tracking link that costs data to open - the message carries its content inline |
| P4 In hand | Payday reminder with amount + PIN; pay at counter, PIN opens locker; contents check at the locker; photo escalation | **Reminder template** (amount + PIN restated); post-handover contents list; **photo reply** in-thread escalates to a person phoning back |
| P5 Taking it | Look up any medicine; ask the pharmacist in-thread; reminders that stop when told | **List message** as the medicine cabinet index; free-text Q&A; **voice notes** both directions (his mother's replies); STOP keyword honoured instantly |
| ∥ When something breaks | Out of stock; locker down; script runs out; a person phones me back | **Exception templates** carrying the plan and its choices as reply buttons; "call me" one-tap; nothing dead-ends in the thread |

Out of scope, same as #09: script-expiry renewal (Script Renew), after-hours
acute (#10's territory). In-chat payment is deliberately absent: WhatsApp
payments are not live in South Africa, and the journey's cash-at-the-Capitec-
counter step needs no channel payment anyway - the constraint and the design
agree.

## P1 script - copy-complete (the pass under review)

Scene: Friday 21 August 2026, 08:12. Payday and collection day is Friday
28 August. Thread header: "Dis-Chem Repeats", verified business account.
Sipho's phone, so business messages render as incoming bubbles; his taps and
replies render as outgoing with ticks. Production language: the one Sipho
chose at P0 (shown in English here - standing annotation A0).

### The spine (no reply needed)

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| M1 | in | Utility template, text-only | Hello Sipho. Your family's repeat medicine for August is being prepared: **your blood-pressure tablets** and **your mother's chronic medicine**. It will be ready at the **Capitec locker at the taxi rank** on **Friday 28 August** - payday. You don't need to do anything. If nothing changes, it will be waiting. |
| M2 | in | Itemised price, in-bubble text | Here is the price, so you know before you travel. *Your tablets:* Amlodipine 5 mg, 28 tablets (generic) R64.40 + dispensing fee R36.20 = **R100.60**. *Your mother's medicine:* CCMDD chronic parcel - **R0.00**. **Total to pay: R100.60**, cash or instant EFT at the Capitec counter. Paying is what opens the locker. |
| M3 | in | Interactive reply buttons (max 3) | Happy with this? Then there's nothing to do - your order carries on by itself, this month and every month. Buttons: **[Change something] [Pause this month] [Talk to a person]** |

Key moments (annotated beside their messages, #09 titles verbatim):
M1 carries ⭐ "My medicine ordered itself"; M2 carries ⭐ "The only thing I
ever bought blind - not anymore".

### Branch A - Change something

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| A1 | out | Button tap echoes as his message | Change something |
| A2 | in | List message (max 10 rows) | No problem. What would you like to change for August? Tap to choose: **Move the ready date** · **Change the pickup point** · **Add medicine to this order** · **Change my language** · **Skip my tablets this month** · **Cancel the repeat service** · **Something else - just type it** |

The list's last row keeps free text first-class: typing beats tapping for a
low-literacy range, and the flow must never trap him in menus
[[wiki/consumer-context/digital-access-and-whatsapp]]. "Add medicine to this
order" is P2's doorway, shown here only as a row.

### Branch B - Talk to a person

| # | Dir | Mechanic | Copy |
|---|---|---|---|
| B1 | out | Button tap echo | Talk to a person |
| B2 | in | Plain text + voice-note affordance | Of course. Reply **CALL ME** and a pharmacy team member will phone you back today, in your language, free of charge. Or send a voice note - we listen to those too. |
| B3 | out | Keyword reply | CALL ME |
| B4 | in | Confirmation | Thank you Sipho. Someone will phone you on this number before 17:00 today. You don't need to keep data on - the call comes to you. |

The phone-back, not chat-back, rule is #09's: when things need a human on the
cash side, the human comes by phone, one reply away.

### Annotation rail - P1 callouts

- **A0 (standing).** Language: production renders this thread in the language
  chosen at sign-up; English shown for this audience. Instruction language per
  household member is a P0 setting.
- **A1 -> M1.** Business-initiated utility template. Text-only by design:
  roughly a kilobyte against a prepaid balance, where an image header is a
  real cost [[wiki/consumer-context/digital-access-and-whatsapp]]. Names the
  day because this order's day is genuinely settled (#09 rule). Locker +
  payday: the Pelebox pattern near home
  [[wiki/consumer-context/last-mile-addressing-logistics]].
- **A2 -> M2.** The price lives in the message, not at the till. R0.00 line
  keeps his mother's CCMDD parcel visible in the same breakdown. Amounts
  illustrative ⚠️.
- **A3 -> M3.** Reply buttons: WhatsApp's hard maximum is three, and the mock
  designs to it - change, pause, person. No "confirm" button exists because
  silence is the golden path.
- **A4 -> A2.** List message: up to ten rows, rendered as a native sheet -
  menu depth without menu typing. Free-text row keeps the exit open.
- **A5 -> B2-B4.** Escalation ends in a phone call, not a chat queue; the
  final message tells him he can let his data lapse - the call comes to him.

## Build notes

- Page chrome sits in the #09/#10 family: brand band, ribbon, persona strip,
  phase spine. The spine shows all seven phases with their proposed mechanics;
  P1 is live, the other six render as stub cards marked "built after the P1
  pass".
- The phone frame is interactive: tapping M3's buttons plays the branch in the
  thread, with a reset. A "play the spine" default shows M1-M3 on load.
- Feature chips carry their basis in tooltips; platform-capability chips are
  ⚠️ until the Meta docs are ingested (punchlist 11).

## Open questions

- Does the P1 pass hold at seven phases of this density, or should P3+P4
  merge into one "ready and collected" episode on the WhatsApp surface?
  (The channel compresses what the journey page separates.)
- Whether the utility-template category (business-initiated, no 24-hour
  window) covers every business-initiated message in this flow under Meta's
  current template policy - part of the punchlist 11 ingest.

## See also

- [[to-be-household-repeat-moments]] - the approved journey this dramatises
- [[design-kit/personas/low-data-whatsapp-first-peri-urban]] - Sipho
- [[wiki/consumer-context/digital-access-and-whatsapp]] - the channel constraints
- `deliverables/09-tobe-household-repeat-moments.html` - the source journey
- `deliverables/08-concepts.html` - concepts referenced by the moments
