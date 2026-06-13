---
type: wiki
title: "Adjacent digital expectations — what SA consumers already benchmark against"
domain: consumer-context
status: draft
confidence: high
tags: [domain/consumer, domain/digital, region/za, topic/last-mile, journey/pay, journey/collect]
sources: [src-con-adjacent-digital-benchmarks, src-con-datareportal-digital-2024, src-con-finscope-inclusion, src-con-pargo-pudo-lastmile, src-con-pelebox]
created: "2026-06-13"
updated: "2026-06-13"
---

# Adjacent digital expectations — what SA consumers already benchmark against

South African consumers do **not** judge a pharmacy app against other pharmacy
apps. They judge it against the **best digital experiences they already use daily**
— **Checkers Sixty60** for delivery, **Takealot/Mr D** for e-commerce,
**Capitec/TymeBank** for banking, **Uber/Bolt** for on-demand, and **Xtra
Savings/Vitality** for loyalty. These set a high, concrete bar: **fast, transparent,
low/no-fee, WhatsApp-light, instantly rewarding**. A future scripting experience
inherits these expectations whether or not it can meet them, and the gap between
them and the current Dis-Chem app (per its own reviews) is the opportunity.

## Rapid delivery & e-commerce: Sixty60, Takealot, Mr D

**Checkers Sixty60** is the reference point for delivery: SA's **#1 delivery app,
>5 million downloads**, **60-minute** delivery, a clear **R35 fee**, **58.1% sales
growth** (FY to Jun 2024), and 2024 FNB App of the Year [[src-con-adjacent-digital-benchmarks]].
It normalised **real-time order tracking, a visible flat fee, and same-hour
fulfilment**. **Takealot** (marketplace) and **Mr D / PnP asap!** (food + parcels;
PnP online +42.5%) established **search-find-order-track** as the e-commerce baseline
[[src-con-adjacent-digital-benchmarks]]. Consumers now expect: live status, an
honest ETA, a transparent fee, easy reorder, and frictionless checkout.

**Implication for scripting:** users will expect to **photograph/upload a script,
see a clear price and ETA, track preparation, and reorder a repeat in two taps** —
and will be unforgiving of opaque status, surprise costs, or failed deliveries
(exactly the pain points flagged in Dis-Chem's own app reviews — orders reversed
pre-delivery, confusing address entry [[src-dc-app-reviews]]).

## Banking: Capitec & TymeBank

Low-cost digital banking reset expectations for **money, identity, and trust** at
the low end. **Capitec** is SA's **largest retail bank by customers — ~24.1m
clients (38% of the population, Sep 2025)** — built on **low/transparent fees and a
simple app + USSD** [[src-con-adjacent-digital-benchmarks]]. **TymeBank** reached
**10.7m customers by Dec 2024**, branchless, onboarding via kiosk + app in minutes,
banking many previously **unbanked** people [[src-con-adjacent-digital-benchmarks]],
[[src-con-finscope-inclusion]]. They normalised **instant EFT, in-app everything,
USSD for the low end, and fee transparency**.

**Implication for scripting:** payment must be **instant, transparent, and
multi-rail** (card, instant EFT, wallet, cash-on-collection — not card-only; see
[[wiki/consumer-context/two-economy-affordability]]). Onboarding should be **minutes,
not forms**. USSD/low-end parity is expected, not exotic.

## On-demand & loyalty: Uber/Bolt, Xtra Savings, Vitality, ClubCard

**Uber/Bolt** taught users to expect **a named provider, live location, an upfront
price, and a rating loop**. Loyalty programmes — Shoprite **Xtra Savings**, Clicks
**ClubCard**, Dis-Chem **Benefit/Better Rewards** (see [[src-dc-better-rewards]]),
Discovery **Vitality** — made **instant, in-app, personalised discounts** a baseline
expectation [[src-con-adjacent-digital-benchmarks]]. Rewards are not a loyalty
nicety in SA; for price-sensitive shoppers they are a **primary reason to choose a
retailer**.

**Implication for scripting:** show the **named pharmacist/provider** and a live
status; surface **savings (generic substitution, loyalty, scheme co-pay)** in the
flow; close the loop with ratings/feedback.

## WhatsApp commerce

WhatsApp is the most-used app in SA (favourite of ~34% of users; #1 platform)
[[src-con-datareportal-digital-2024]] and South Africans already **buy and query
over WhatsApp**, with retailers and courier pharmacies (e.g. Medipost) running
WhatsApp ordering [[src-courier-pharmacies-sa]]. **Conversational commerce is a
familiar pattern**, not a novelty — a scripting experience that lives where people
already are (WhatsApp) starts with a trust and friction advantage (cross-ref
[[wiki/consumer-context/digital-access-and-whatsapp]]).

## The collection bar: Pelebox & pickup lockers

Even the **physical collection** experience has a local benchmark:
**Pelebox**'s SMS+PIN, no-app, **sub-minute** locker pickup and PUDO/Pargo lockers
have shown consumers that **self-service collection can be fast, private, and
24/7** [[src-con-pelebox]], [[src-con-pargo-pudo-lastmile]]. A pharmacy collection
flow will be measured against that, not against a clinic queue.

## Synthesised expectation bar

| Dimension | What SA consumers already expect | Set by |
|---|---|---|
| Speed | Same-hour delivery; sub-minute collection | Sixty60, Pelebox |
| Transparency | Upfront price, flat fee, live status/ETA | Sixty60, Uber/Bolt |
| Payment | Instant, multi-rail, low/no fee, USSD parity | Capitec, TymeBank |
| Channel | WhatsApp-first, conversational, light | WhatsApp commerce |
| Reward | Instant, in-app, personalised savings | Xtra Savings, Vitality |
| Collection | Fast, private, 24/7, no-app PIN | Pelebox, PUDO lockers |
| Trust | Named provider, rating loop, human backstop | Uber/Bolt, pharmacist |

## Design implications

- **Benchmark against Sixty60/Capitec, not against pharmacies.** The bar is
  same-hour, transparent, low-fee, app-light, instantly rewarding.
- **WhatsApp-first conversational flow** for submit/track/refill — meet users where
  they already transact.
- **Transparent, multi-rail, instant payment** with USSD/cash parity for the low end.
- **Live status + honest ETA + named provider** for both delivery and collection;
  close the loop with ratings.
- **Surface savings in-flow** (generics, loyalty, co-pay) — a primary purchase
  driver, not an afterthought.
- **Match the Pelebox collection bar** — fast, private, 24/7, no-app PIN.
- **Beat the current baseline:** Dis-Chem's own app reviews flag the exact failures
  (opaque status, reversed orders, confusing addresses) these benchmarks have
  solved [[src-dc-app-reviews]].

## Open questions

- Whether Dis-Chem can offer **Sixty60-class delivery economics** for medicine
  (regulated, lower-margin, cold-chain) — likely not at R35/60-min for all items.
  ⚠️ UNVERIFIED.
- Degree to which **scheme-claim and prescription-validation** friction (necessarily
  more than grocery checkout) can be hidden to match the expected smoothness —
  cross-ref [[wiki/medical-schemes/_index]], [[wiki/sa-regulatory/_index]].
- Real adoption of **WhatsApp commerce** for *health* specifically (vs retail), given
  privacy concerns (see [[wiki/consumer-context/language-literacy-and-trust]]).
  ⚠️ UNVERIFIED.

## See also
- [[wiki/consumer-context/digital-access-and-whatsapp]]
- [[wiki/consumer-context/two-economy-affordability]]
- [[wiki/consumer-context/last-mile-addressing-logistics]]
- [[wiki/consumer-context/health-seeking-behaviour]]
- [[wiki/dischem/_index]]
- [[wiki/consumer-context/_index]]
