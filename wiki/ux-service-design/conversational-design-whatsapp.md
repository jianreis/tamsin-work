---
type: wiki
title: "Conversational design for WhatsApp scripting flows"
domain: ux-service-design
status: draft
confidence: medium
tags: [domain/ux, domain/digital, journey/submit, journey/refill, topic/accessibility]
sources: [src-ux-google-conversation-design, src-ux-nng-chatbot-ux, src-ux-hall-conversational-design, src-ux-deibel-evanhoe-conversations-with-things, src-ux-hicks-law-choice-load, src-wa-cloud-api-interactive, src-wa-message-templates, src-wa-flows, src-wa-click-to-chat, src-wa-business-messaging-best-practices]
created: "2026-08-16"
updated: "2026-08-16"
---

# Conversational design for WhatsApp scripting flows

A WhatsApp pharmacy channel succeeds or fails at the level of the single
message: one bubble, up to three buttons, a person deciding in seconds whether
this is helping them or working them. The conversation-design literature is
unusually consistent about what makes that go well. People carry the rules of
human conversation into any interface that talks [[src-ux-google-conversation-design]],
so each turn should do one job, say only what that job needs, and hand the
floor back with a single clear question. This page synthesises those rules,
records the WhatsApp Business Platform limits that make them physical, and
ends with the working checklist for the [[sipho-whatsapp-flow|#11 message scripts]].

## One turn, one job

Grice's Cooperative Principle is the foundation Google builds its guidelines
on: a contribution should be as informative as required and no more
(quantity), truthful (quality), relevant to this moment (relevance), and
brief, clear, orderly (manner) [[src-ux-google-conversation-design]]. Hall
compresses the same idea into her principles for conversational systems -
turn-based, quick and clear, cooperative [[src-ux-hall-conversational-design]].
The practical reading for chat: a message that makes an offer, explains its
maths, and asks a question about something else has taken three turns in one
bubble. Split it. Deibel and Evanhoe treat each prompt as writing craft with
one job in one place in the flow [[src-ux-deibel-evanhoe-conversations-with-things]],
and Hall's method - write the human conversation first, as if there were no
interface - is a working test: if a pharmacist at the counter would not say
it in one breath, it is not one message [[src-ux-hall-conversational-design]].

Turn structure follows from turn-taking. A turn ends by yielding the floor,
so the question or instruction belongs at the end of the message, after the
context that motivates it, never buried mid-bubble with detail piled on top
of it [[src-ux-google-conversation-design]] [[src-ux-hall-conversational-design]].

## How many choices per turn

Hick's law says decision time grows with the logarithm of the option count,
and the damage is proportionally worst at the low end: a jump from two
options to five costs more than it looks [[src-ux-hicks-law-choice-load]].
Two sequential small decisions cost less in total than one large simultaneous
one, which is the theoretical case for progressive disclosure across turns:
offer the likely path now, keep the alternatives one tap away, reveal depth
only when the user asks for it [[src-ux-hicks-law-choice-load]]. NN/g's
chatbot study lands on the same guidance from observation - reduce steps and
cognitive load per step, introduce complexity gradually rather than all at
once [[src-ux-nng-chatbot-ux]].

The platform enforces a version of this: three reply buttons is the hard
ceiling on a session message [[src-wa-cloud-api-interactive]]. But three
buttons is a maximum, not a target. A binary decision deserves two buttons.
And three buttons attached to a message that contains two separate offers is
still an overloaded turn, because the user must first work out which offer
each button belongs to. The choice count that matters is decisions per
message, and the budget there is one.

## Exploration is not commitment

Button labels are the user's next words - a tapped button comes back to the
business as the reply, exactly as if typed [[src-wa-cloud-api-interactive]].
So labels should be words the user would actually say, and their register
should match where the conversation is. While the user is still finding out
what an offer means, labels should sound like exploration ("How would that
work?", "See dates"); a commitment-sounding label ("Accept plan") on an
exploring turn asks for a signature before the terms have been read. NN/g
found users iterate in multiple steps precisely because systems guess intent
[[src-ux-nng-chatbot-ux]] - a premature commit button turns a wrong guess
into a wrong transaction. Commitment language belongs on the confirmation
turn, after a read-back, where it is doing its real job.

## Read-backs, repair, and free text

Confirmations give users feedback on how their input was understood so they
can correct it immediately: implicit confirmation (repeat the key detail
inside the next step) for low-stakes input, explicit confirmation (read back
and ask before acting) for anything costly or hard to undo
[[src-ux-google-conversation-design]]. Changing a medicine collection date is
explicit-confirmation territory: read the new date back in full and let the
user approve it as its own turn.

Errors are repaired, not announced. A misunderstood reply usually needs one
short, specific reprompt, with fuller help only on repeated failure
[[src-ux-google-conversation-design]]. Repair is a normal part of human
dialogue and needs designed moves, not error messages
[[src-ux-deibel-evanhoe-conversations-with-things]]. NN/g's core finding
makes this non-optional: linear bot flows break the moment users deviate, and
users always deviate [[src-ux-nng-chatbot-ux]]. Buttons are an offer of a
fast path, never a wall - typed replies ("the 28th", "call me") must work
alongside every button set, and a route to a person stays reachable
throughout. That is also Hall's error-tolerance principle
[[src-ux-hall-conversational-design]], and for this persona it carries real
weight: see [[digital-access-and-whatsapp]] on why the channel's users type,
voice-note, and share phones.

The platform adds its own pressure toward restraint. WhatsApp is a personal
channel: Meta's per-number quality rating is driven by blocks and reports,
and senders of long or too-frequent messages lose sending capacity
[[src-wa-business-messaging-best-practices]]. Over-stuffed bubbles are a
sender risk before they are a style problem.

## When a form beats chat turns

Chat turns are the wrong tool for collecting several related fields - name,
ID number, medicines, addresses - because each field costs a full turn and a
mistake means scrolling back. WhatsApp Flows exist for exactly this: a
button opens a native full-screen, multi-screen form (text fields, dropdowns,
date pickers) inside the chat, and the completed answers return to the thread
as structured data [[src-wa-flows]]. The working boundary: chat for
decisions and confirmations (few options, one at a time), a Flow for data
entry of three or more fields, and a list message for a single pick from a
menu longer than three options [[src-wa-cloud-api-interactive]]. Entry into
the whole channel can pre-fill the user's first message via a wa.me
click-to-chat link, so the first turn costs the user one tap and no typing
[[src-wa-click-to-chat]].

## Platform limits that shape copy

All numbers from the Meta platform documentation; retrieval caveat recorded
in the source notes (primary pages egress-blocked at ingest, numbers
corroborated across multiple BSP mirrors).

| Element | Limit | Source |
|---|---|---|
| Reply buttons per session message | 3 max | [[src-wa-cloud-api-interactive]] |
| Reply button title | 20 characters | [[src-wa-cloud-api-interactive]] |
| Interactive message body | 1,024 characters | [[src-wa-cloud-api-interactive]] |
| Interactive message footer | 60 characters | [[src-wa-cloud-api-interactive]] |
| List message rows | 10 max (across up to 10 sections) | [[src-wa-cloud-api-interactive]] |
| List row title / description | 24 / 72 characters | [[src-wa-cloud-api-interactive]] |
| List open-button text / section title | 20 / 24 characters | [[src-wa-cloud-api-interactive]] |
| Template header (text) | 60 characters | [[src-wa-message-templates]] |
| Template body | 1,024 characters | [[src-wa-message-templates]] |
| Template footer | 60 characters | [[src-wa-message-templates]] |
| Template buttons | up to 10 components; first 3 show inline | [[src-wa-message-templates]] |
| Template categories | utility / marketing / authentication | [[src-wa-message-templates]] |
| Business-initiated messaging | approved templates only outside the 24-hour window | [[src-wa-message-templates]] |
| Click-to-chat | wa.me/<number>?text=<url-encoded pre-fill> | [[src-wa-click-to-chat]] |

Two of these limits do copy work on their own. The 20-character button title
is a register constraint: labels must be short spoken phrases, which is what
good labels are anyway. The 60-character footer is the natural home for small print
(the STOP line, "prices include dispensing fee"), keeping the body clean for
the one thing the message is about.

## Applied: rules for the #11 message scripts

The working checklist for every scripted bubble. A message that fails any
line gets split or cut, not defended.

1. One decision per message. Two offers means two messages, sent in
   sequence, the second only after the first is answered.
2. Question or instruction last. Context above, ask below, nothing after
   the ask.
3. Three buttons is the ceiling, not the norm. Binary choices get two.
   Four or more options move to a list sheet.
4. Buttons are the user's words: short spoken phrases within 20 characters,
   never system labels.
5. Exploration language while exploring ("How would it work?"), commitment
   language only on the confirmation turn ("Yes, move it to the 28th").
6. Prices and dates sit in the body on their own line, stated once; the
   maths of an offer arrives only when the user asks or accepts.
7. Read back any change to money, medicine, or dates in full, and get a yes
   before acting on it.
8. Free text always works: a typed date, "call me", or a voice note must
   land somewhere designed, whatever buttons are showing.
9. Repair in one short turn: name what was understood, ask the one thing
   needed to continue. No dead-end error messages.
10. Three or more fields to collect = a WhatsApp Flow, not a chain of chat
    turns.
11. Small print lives in the footer (60 characters), not the body.
12. Every recurring stream keeps its STOP path, and a person is always
    reachable.

## Open questions

- The interactive-message limits were corroborated across BSP mirrors but not
  read off the live Meta pages (egress-blocked at ingest). Re-verify body,
  footer, and section-title numbers against developers.facebook.com before
  this page is used as feasibility evidence. Tracked in punchlist item 11.
- Whether utility-template approval would hold for the #11 payday reminder
  copy as scripted (category rules are policed by Meta review and templates
  can be recategorised as marketing) [[src-wa-message-templates]].
- WhatsApp Flows on low-end devices and old app versions: no evidence
  captured on fallback behaviour where a Flow cannot render - relevant for
  Sipho's device context [[digital-access-and-whatsapp]].
- Nielsen's conversational-AI progressive-disclosure guidance is
  assistant-era writing applied here to a scripted flow; a usability pass on
  the actual #11 scripts with low-data users would carry more weight than
  any of the citations on this page.

## See also

- [[digital-access-and-whatsapp]] - why WhatsApp is the channel and what its
  users' data, device, and language reality is.
- [[sipho-whatsapp-flow]] - the #11 spec these rules exist to serve.
- [[inclusive-low-bandwidth-design]] - the wider channel ladder (USSD, SMS)
  around the WhatsApp choice.
- [[pharmacy-ux-patterns]] - the scripting interaction patterns these
  conversations implement.
