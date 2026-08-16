---
type: source
title: "WhatsApp Business Platform - message templates (categories, components, window rules)"
url: "https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates"
author: "Meta"
publisher: "Meta for Developers"
published: "n.d."
retrieved: "2026-08-16"
source_kind: company
reliability: A
tags: [domain/digital, domain/ux, journey/submit, journey/refill, region/global]
---

# Summary

Meta's reference for message templates - the pre-approved message shapes that
are the only way a business may open a conversation or message a customer
outside the 24-hour customer service window. Templates come in three
categories with different rules and prices (utility, marketing,
authentication), and are built from a fixed anatomy: optional header, body,
optional footer, optional buttons. For the #11 mock this is the doc that makes
the payday reminder and every business-initiated status message a **utility
template**, and that gives the footer its role as the quiet small-print line.

**Retrieval note:** direct fetch of developers.facebook.com was blocked by
this environment's egress policy on 2026-08-16. Claims were captured from
search-result extracts of the Meta docs (including the template-categorization
page) corroborated across BSP mirrors (8x8, Klaviyo, Webex Connect, Twilio,
respond.io). Re-verify against the live Meta pages when access allows.

# Key claims

- A business may send free-form (session) messages only inside the **24-hour
  customer service window** opened by the user's most recent message. Outside
  that window, only **pre-approved templates** may be sent.
- Templates have three **categories**: **utility** (transactional follow-ups
  tied to a specific customer action or agreed service: order confirmations,
  shipping and status updates, appointment reminders, account alerts),
  **marketing** (promotions, offers, re-engagement, and anything that does not
  fit the other two), and **authentication** (one-time passcodes and
  verification). Meta reviews and can recategorise templates.
- Template anatomy: optional **header** (text capped at **60 characters**, or
  media), **body** capped at **1,024 characters**, optional **footer** capped
  at **60 characters**, optional buttons.
- Template buttons: up to **10 button components** in total on one template,
  mixing quick-reply and call-to-action types (URL, call), with per-type
  limits; only the first three buttons show inline before a "see all options"
  affordance.
- Since 2025-07-01 Meta bills **per delivered template message** rather than
  per conversation; rates differ by category and destination country, with
  marketing templates the most expensive. Utility templates delivered inside
  an open customer service window are free.
- Meta assigns each business number a **quality rating** driven by user
  response (blocks, reports, read behaviour); low quality throttles the
  number's messaging limits. Low-value or too-frequent business-initiated
  messages are a rating risk, not just a UX one.

# Verbatim excerpts

Captured from search-result extracts and BSP mirrors (see retrieval note):

> "Utility templates are transactional follow-ups tied to a specific customer
> action: order confirmations, shipping updates, appointment reminders,
> account activity alerts."

> "Templates are the only way to send business-initiated messages after the
> 24-hour customer service window ends."

> "Text headers can be up to 60 characters ... The message body has a limit of
> 1024 characters ... The footer only supports text and can be up to 60
> characters."

> "Since July 1, 2025, Meta bills per delivered template message, not per
> conversation, and the rate depends on the message category and the
> recipient's country code."

# Used in

- [[conversational-design-whatsapp]]
