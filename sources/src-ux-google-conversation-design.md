---
type: source
title: "Google Conversation Design guidelines (Cooperative Principle, confirmations, errors)"
url: "https://developers.google.com/assistant/conversation-design/learn-about-conversation"
author: "Google (conversation design team, incl. James Giongola)"
publisher: "Google for Developers"
published: "n.d."
retrieved: "2026-08-16"
source_kind: company
reliability: B
tags: [domain/ux, domain/digital, topic/accessibility, region/global]
---

# Summary

Google's conversation design guidelines, written for Assistant actions but
channel-agnostic in their core: people bring the rules of human conversation
to any interface that talks, so a designed conversation must follow those
rules or feel broken. The foundation is Grice's Cooperative Principle and its
four maxims; the practical layers are turn-taking, confirmations (implicit vs
explicit), and error handling by quick repair rather than blame. The most
transferable ideas for a WhatsApp channel: give exactly as much information as
the turn needs and no more, confirm by reading back what you understood, and
treat a misunderstood reply as the system's problem to repair in one short
turn.

**Retrieval note:** direct fetch of developers.google.com was blocked by this
environment's egress policy on 2026-08-16. Claims captured from search-result
extracts of the guideline pages and coverage of the Google approach
(Fast Company interview with Giongola; practitioner summaries). Re-verify
against the live pages when access allows.

# Key claims

- People respond to conversational technology as they would to another human,
  and carry over the **Cooperative Principle** (Grice): contributions should
  be as informative as required and no more (**quantity**), truthful
  (**quality**), relevant to the moment (**relevance**), and clear, brief,
  orderly (**manner**).
- The quantity maxim is the anti-stuffing rule: a turn that answers more than
  was asked, or asks more than one thing, breaks the conversation contract.
- **Turn-taking**: a conversation is a series of turns; each system turn
  should hand the floor back clearly, which in chat means ending on the one
  question or instruction the user is expected to act on.
- **Confirmations** give users feedback on how their input was understood, so
  they can correct mistakes immediately. **Implicit confirmation** (repeat the
  key information back inside the next step) suits high-confidence input;
  **explicit confirmation** (ask "is this right?" before acting) is reserved
  for actions that are costly or hard to undo.
- **Error handling**: errors are repaired, not announced. A misrecognised or
  unexpected reply usually needs only a short, specific reprompt (a "rapid
  reprompt"), with more help added only on repeated failure.

# Verbatim excerpts

Captured from search-result extracts and secondary coverage (see retrieval
note):

> "Users rely on their existing model of human-to-human conversation and
> follow the Cooperative Principle even when interacting with the persona of a
> conversational user interface."

> "Confirmations give users feedback on how their input was understood, which
> empowers users to correct mistakes immediately."

> "Errors can be hidden by designing conversation repairs or creating rapid
> reprompts."

# Used in

- [[conversational-design-whatsapp]]
