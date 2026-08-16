---
type: source
title: "WhatsApp Flows - native multi-screen forms inside a chat"
url: "https://developers.facebook.com/docs/whatsapp/flows"
author: "Meta"
publisher: "Meta for Developers"
published: "n.d."
retrieved: "2026-08-16"
source_kind: company
reliability: A
tags: [domain/digital, domain/ux, journey/submit, topic/e-prescription, region/global]
---

# Summary

WhatsApp Flows is Meta's native forms layer: a business sends a message whose
button opens a full-screen, multi-screen form inside WhatsApp (text fields,
dropdowns, date pickers, checkboxes, navigation between screens), and the
completed answers come back into the chat as structured data. It exists for
exactly the job chat turns do badly - collecting several related fields at
once - without pushing the customer out to a website. The #11 P0 sign-up
(household members plus their medicines) is modelled on this capability.

**Retrieval note:** direct fetch of developers.facebook.com was blocked by
this environment's egress policy on 2026-08-16. Claims captured from
search-result extracts of the Meta docs corroborated across BSP documentation
(360dialog, Infobip, Truora) and practitioner guides. Re-verify against the
live Meta pages when access allows. Conversion and abandonment figures quoted
in vendor guides are vendor claims, not Meta numbers - treat as C-tier signal.

# Key claims

- A Flow opens as a **full-screen, multi-screen form inside the WhatsApp
  chat** - no browser handoff. Supported components include text inputs,
  dropdowns, radio/checkbox selections, date pickers, and multi-screen
  navigation.
- On completion, a **response message returns to the chat thread** and the
  business receives the answers as structured data (a response JSON via
  webhook), tied to the session by a flow token.
- Flows are sent like other interactive messages: as part of a template
  (business-initiated) or a session message (inside the 24-hour window).
- Typical published use cases: appointment booking (pick service, date, slot,
  confirm), sign-up and lead capture, address collection, support intake,
  surveys.
- Flows run on the **Cloud API** (and require Meta Business Manager); they are
  not available on the free WhatsApp Business app.
- Vendor guides claim faster completion and lower abandonment versus asking
  the same fields turn by turn in chat (C-tier signal; no Meta-published
  numbers captured).

# Verbatim excerpts

Captured from search-result extracts and BSP documentation (see retrieval
note):

> "WhatsApp Flows is a native Meta feature that lets businesses create
> interactive forms and multi-screen experiences inside WhatsApp, without
> redirecting customers to a website."

> "Upon flow completion a response message will be sent to the WhatsApp chat,
> received via message webhook, with the response_json field containing
> flow-specific data."

# Used in

- [[conversational-design-whatsapp]]
