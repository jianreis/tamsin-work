---
type: source
title: "WhatsApp click-to-chat (wa.me) links with pre-filled messages"
url: "https://faq.whatsapp.com/5913398998672934"
author: "WhatsApp (Meta)"
publisher: "WhatsApp Help Center"
published: "n.d."
retrieved: "2026-08-16"
source_kind: company
reliability: A
tags: [domain/digital, domain/ux, journey/submit, region/global]
---

# Summary

WhatsApp's own mechanism for starting a chat from outside WhatsApp: a
`https://wa.me/<number>` link opens a conversation with that number, and an
optional `?text=` parameter pre-fills the customer's first message. The
customer still has to press send, so the pre-filled text is a suggestion, not
an auto-sent message. This is the entry mechanic behind the #11 P0 sign-up
(poster or till-slip QR that opens the pharmacy chat with the first message
already typed).

**Retrieval note:** direct fetch of faq.whatsapp.com was blocked by this
environment's egress policy on 2026-08-16. Format captured from search-result
extracts of the WhatsApp FAQ corroborated across implementation guides
(BusinessChat, Wati, Dotdigital). Re-verify against the live FAQ when access
allows.

# Key claims

- Format without a message: `https://wa.me/<number>`, where the number is the
  full phone number in international format with no zeroes, brackets, or
  dashes.
- Format with a pre-filled message:
  `https://wa.me/<number>?text=<url-encoded text>` - spaces become `%20`,
  special characters are URL-encoded.
- The link opens the chat with the text sitting in the compose box; the
  customer sends it themselves. The business gets a recognisable first message
  it can route on (useful for language or intent detection at entry).
- Click-to-chat links work from any surface that can carry a URL or QR code:
  posters, till slips, SMS, web pages.

# Verbatim excerpts

Captured from search-result extracts of the FAQ and implementation guides
(see retrieval note):

> "Use https://wa.me/whatsappphonenumber?text=urlencodedtext where the
> WhatsApp phone number is a total phone number in the international format,
> and URL-encoded text is the URL-encoded pre-filled message."

> "When adding the phone number in the international format, omit any zeroes,
> brackets, or dashes."

# Used in

- [[conversational-design-whatsapp]]
