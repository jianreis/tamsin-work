---
type: source
title: "WhatsApp Cloud API - interactive reply buttons and list messages (limits)"
url: "https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-reply-buttons-messages"
author: "Meta"
publisher: "Meta for Developers"
published: "n.d."
retrieved: "2026-08-16"
source_kind: company
reliability: A
tags: [domain/digital, domain/ux, journey/submit, region/global]
---

# Summary

Meta's Cloud API reference for the two in-chat interactive message types the
#11 WhatsApp mock leans on: reply-button messages (tap-to-answer chips) and
list messages (a tap-to-open menu sheet). Both are session messages - they can
only be sent inside an open 24-hour customer service window, and only the most
recent interactive message in a thread stays tappable in practice. The hard
limits below are the platform numbers that shape every #11 message: three
buttons maximum, ten list rows maximum, and short character budgets on every
label.

**Retrieval note:** direct fetch of developers.facebook.com was blocked by
this environment's network egress policy on 2026-08-16. Limits were captured
from search-result extracts of the Meta doc and corroborated across multiple
Business Solution Provider mirrors of the same reference (CM.com, 8x8, Picky
Assist, Wati, SleekFlow). Numbers agreed across all of them. Re-verify against
the live Meta pages when access allows (see punchlist item 11).

Companion Meta doc for list messages:
<https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-list-messages>

# Key claims

- Reply-button messages carry a maximum of **3 buttons** per message.
- Each reply-button **title is capped at 20 characters**.
- Interactive message **body text is capped at 1,024 characters**; the
  optional **footer at 60 characters**. An optional header (text, image,
  video, or document) sits above the body.
- List messages present a menu opened by one button (button text capped at
  **20 characters**); the sheet holds up to **10 sections** and a maximum of
  **10 rows in total** across all sections.
- Each list **row title is capped at 24 characters**, with an optional **row
  description capped at 72 characters**; section titles are capped at 24
  characters.
- The user's tap comes back to the business as a structured reply (the row or
  button ID plus its title), so a tapped choice can be handled exactly like a
  typed one.
- Interactive messages are session (free-form) messages: they can only be sent
  within the 24-hour customer service window opened by the user's last message
  (window rules sourced in [[src-wa-message-templates]]).

# Verbatim excerpts

Captured from search-result extracts of the Meta reference and its BSP
mirrors, not from the rendered primary page (see retrieval note):

> "Only 3 buttons allowed for reply buttons, and the maximum length for button
> title text is 20 characters."

> "Interactive list messages support up to 10 rows total, grouped into up to
> 10 sections, with each row's title limited to 24 characters and description
> limited to 72 characters."

> "The message body has a limit of 1024 characters. The footer only supports
> text and can be up to 60 characters."

# Used in

- [[conversational-design-whatsapp]]
