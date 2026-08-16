---
type: source
title: "Hick's law and progressive disclosure applied to choice load in conversational UI"
url: "https://lawsofux.com/hicks-law/"
author: "Jon Yablonski (Laws of UX); Jakob Nielsen; LogRocket UX blog"
publisher: "Laws of UX / Nielsen (Substack) / LogRocket"
published: "n.d."
retrieved: "2026-08-16"
source_kind: blog
reliability: C
tags: [domain/ux, domain/digital, region/global]
---

# Summary

A bundled note (same pattern as [[src-ux-sa-whatsapp-conversational-commerce]])
on the choice-load evidence behind small option sets in chat. Hick's law:
decision time grows with the logarithm of the number of options, so trimming a
choice from many to few cuts decision load sharply. Progressive disclosure is
the standard remedy - show the few options that matter now, reveal the rest on
request - and Nielsen applies it directly to conversational AI: answer first
in one short layer, put depth behind a disclosure step. Two sequential small
decisions cost less than one large simultaneous one, which is the theoretical
case for splitting a stuffed message into two turns. Tier C: practitioner
reference sites, but the underlying law is peer-reviewed (Hick 1952) and the
progressive-disclosure guidance is Nielsen's.

# Key claims

- **Hick's law** (Hick, 1952): time to choose among n equally likely options
  grows with log2(n+1); cutting a choice set from 30 to 3 drops decision load
  by roughly 60%.
- Because the relationship is logarithmic, the damage is worst at the low
  end: going from 2 options to 5 in one message costs proportionally more
  than it looks.
- **Progressive disclosure**: show only the most essential options first and
  reveal more as the user narrows intent; the total decision time of two
  sequential small decisions is lower than one large simultaneous decision.
- Nielsen on conversational AI: the besetting sin is the long reply to a
  short question; layer the answer - verdict in one short paragraph, depth
  behind a disclosure control (in chat: a follow-up turn or a "more options"
  list).
- Applied to chat UI, the same logic supports one question per message and a
  small quick-reply set per turn, with a list sheet as the disclosure step
  for longer menus.

# Verbatim excerpts

Captured from search-result extracts:

> "Hick's Law ... says that the time to choose among n equally likely options
> grows with log2(n+1)."

> "Conversational AI's besetting sin is the 800-word reply to a yes/no
> question; the fix is to layer the answer like we layer a screen." (Nielsen,
> Progressive Disclosure, Substack)

# Used in

- [[conversational-design-whatsapp]]
