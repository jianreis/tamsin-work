---
type: wiki
title: "Digital access & WhatsApp as the default channel"
domain: consumer-context
status: draft
confidence: high
tags: [domain/consumer, domain/digital, region/za, topic/accessibility, topic/last-mile]
sources: [src-con-icasa-ict-2025, src-con-datareportal-digital-2024, src-con-ramp-data-prices, src-con-zero-rating-ussd, src-con-loadshedding]
created: "2026-06-13"
updated: "2026-06-17"
---

# Digital access & WhatsApp as the default channel

South Africa is **highly connected by signal but unevenly connected by
affordability**. Mobile coverage is near-universal, smartphones are the norm, and
WhatsApp is effectively the country's operating system for communication. Yet the
**cost of mobile data**, prepaid rationing, device limits, and digital-literacy
gradients mean a scripting experience must be **lightweight, data-frugal, and
WhatsApp-first**, with USSD/SMS fallbacks for the low end. This page sets the
channel constraints any future-state experience must fit.

## Coverage is near-universal; the gap is affordability and devices

Network reach is not the bottleneck. ICASA reports **3G population coverage of
99.79%, 4G/LTE 99.07%, and 5G 46.64%** for 2024 [[src-con-icasa-ict-2025]].
**Smartphone subscriptions reached 82.74 million in 2024** (up 10.36%), exceeding
the population because multi-SIM use is common [[src-con-icasa-ict-2025]]. Yet
**internet penetration was 74.7%** at the start of 2024, so roughly **one in four
South Africans is not meaningfully online** [[src-con-datareportal-digital-2024]].
The barrier is overwhelmingly **the cost of data and devices, plus digital
literacy**, not the absence of signal [[src-con-zero-rating-ussd]].

Fixed/home broadband remains a minority: fibre-to-the-home rose to **2.47m in
2024** (from 1.49m), and total fixed broadband to **2.7m** [[src-con-icasa-ict-2025]].
For most people, **the internet is a mobile phone on a prepaid plan**, not a Wi-Fi
home connection.

## The cost of mobile data - a rationed household resource

Data is a real, recurring, rationed cost for low-income households. Research ICT
Africa's RAMP index shows median price-per-GB **fell ~88%** over the tracked
period to Dec 2023, but warns SA may be **entering a fourth cycle of price
increases** [[src-con-ramp-data-prices]]. SA still **pays more for data than 27
other African countries** [[src-con-ramp-data-prices]]. The **per-GB
price of small bundles is far higher** than large ones, a "poverty premium": those
who can only afford to buy data in small daily increments pay the most per
megabyte. Average 1GB sits around **R20.50 (2025)** at scale, but prepaid 1GB was
still **~R79 (2025)** [[src-con-ramp-data-prices]].

**Design consequence:** every screen, image, and PDF a user must download has a
real rand cost to them. A heavy app that re-downloads catalogues or large
prescription images burns data the user paid for. Favour text, cached content,
small payloads, and **zero-rated** entry points.

## Prepaid dominance

The SA mobile market is **overwhelmingly prepaid** [[src-con-icasa-ict-2025]].
Prepaid users top up airtime/data in small amounts and frequently run to **zero
balance**. An experience that assumes an always-on connection, or that fails
ungracefully when data runs out mid-flow, will lose exactly the price-sensitive
majority it most needs to serve. Persisting state server-side and supporting
**resume-after-reconnect** matters.

## WhatsApp is the default channel

WhatsApp is the single most-used app in South Africa and the de-facto channel for
both personal and business communication. DataReportal/Meltwater 2024 rank
**WhatsApp #1**, the favourite app of **~34% of users** (ahead of TikTok 23.8% and
Facebook 18.1%) [[src-con-datareportal-digital-2024]]. Independent surveys put
WhatsApp penetration **above 93–96%** of connected users. South Africans already
**order, query, and transact over WhatsApp**, and SA courier pharmacies such as
Medipost already offer **WhatsApp ordering** (see [[src-courier-pharmacies-sa]]).

WhatsApp's advantages for a scripting experience are structural:
- Familiar and trusted: no new app to learn, install, or log into.
- Light: works on modest devices and is sometimes bundled/cheaper by operators.
- Asynchronous: tolerates intermittent connectivity and load-shedding gaps.
- Conversational: suits photo-of-script submission, status updates, reminders.

## Zero-rating, USSD and the low-end fallback

For the bottom of the market, two mechanisms matter:
- **Zero-rating:** From **15 Jan 2024**, operators must zero-rate approved
  **public-benefit / `.gov.za`** content within 14 business days of approval, a
  precedent for **data-free access** to essential health information/flows
  [[src-con-zero-rating-ussd]]. A pharmacy could pursue zero-rated entry points.
- **USSD** (e.g. `*120#` menus): works on **any handset including feature phones**,
  needs **no data or app**, and accommodates **low digital literacy**, the proven
  backbone of low-end mobile banking and airtime [[src-con-zero-rating-ussd]].
  **SMS** (one-way notification, OTP/PIN) is the universal fallback and underpins
  the Pelebox collection model (see [[wiki/consumer-context/last-mile-addressing-logistics]]).

## Digital-literacy gradients

Connectivity does not equal capability. Price cuts alone don't redress digital
inequality: **device limitations and low digital literacy** persist once people
are online [[src-con-zero-rating-ussd]]. Older, rural, and lower-income users may
be fluent in **WhatsApp and USSD** but not in app stores, account creation, PDF
handling, or card-not-present payment. Designs should assume a **wide capability
range** and degrade gracefully to the most familiar primitives (a WhatsApp message,
a PIN, an SMS).

## Load-shedding as a connectivity risk

Even with 2024's reprieve (~83 load-shedding days vs ~335 in 2023), blackouts
remain a planning assumption: **tower batteries lose efficacy beyond ~Stage 4**, so
**mobile connectivity itself degrades during heavy load-shedding**, often when
people are home and trying to transact [[src-con-loadshedding]]. Flows must be
**offline-tolerant** and resumable. (See
[[wiki/consumer-context/last-mile-addressing-logistics]] for cold-chain impact.)

## Design implications

- Default to WhatsApp first, not app-first: support photo-of-script submission, status
  updates, refill reminders, and collection PINs over WhatsApp. Treat a native app
  as the power-user surface, not the entry point.
- Be data-frugal: small payloads, text over images, cache aggressively, never
  silently re-download. Show users you respect their data.
- Pursue zero-rated entry points for the essential health flow where feasible.
- Provide USSD/SMS fallbacks so feature-phone and out-of-data users can still
  check status, get an OTP/PIN, or trigger a refill.
- Assume prepaid, intermittent connectivity: persist state server-side, make
  every step resumable, and fail gracefully when data/airtime runs out mid-flow.
- Design for a literacy range: lean on familiar primitives (WhatsApp message,
  PIN, SMS) and avoid assuming app-store fluency, account juggling, or PDF handling.

## Open questions

- Exact **prepaid vs postpaid** subscriber split and the current **small-bundle
  per-GB premium**: directional here; firm figures need the ICASA PDF / RAMP
  dataset directly. ⚠️ UNVERIFIED (precise split/price).
- Whether a **commercial retail pharmacy** flow could qualify for **zero-rating**
  (the rule targets public-benefit/`.gov.za`): likely not as-is. 🔮 may need a
  PBO partner or regulatory path. ⚠️ UNVERIFIED.
- Current **WhatsApp penetration** figure for SA is reported in a wide band
  (93–96%); the central claim (WhatsApp = #1 channel) holds, the exact
  percentage is ⚠️ UNVERIFIED.
- How much of the price-sensitive segment would accept **WhatsApp Business** data
  handling given POPIA/privacy concerns (see
  [[wiki/consumer-context/language-literacy-and-trust]]).

## See also
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/language-literacy-and-trust]]
- [[wiki/consumer-context/adjacent-digital-expectations]]
- [[wiki/consumer-context/_index]]
