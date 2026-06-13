---
type: wiki
title: "Omnichannel fulfilment"
domain: concept
status: draft
confidence: high
tags: [concept, journey/collect, journey/deliver, topic/last-mile, domain/digital, domain/dischem]
created: "2026-06-13"
updated: "2026-06-13"
---

# Omnichannel fulfilment

**Omnichannel fulfilment** treats every way a patient can receive a medicine —
**in-store counter, click-and-collect, smart locker, scheduled courier,
on-demand delivery** — as one continuous fabric rather than separate products.
The customer chooses (and re-chooses) the channel that fits *this* script, *this*
day, *this* place, against a single order, profile and payment. "Omnichannel" is
the opposite of "multichannel": not many siloed channels, but one journey that
can switch lanes mid-flow without re-starting.

The structural insight that makes this work for a retail pharmacy is that the
**store estate becomes a network of fulfilment nodes** — points of dispensing,
pickup, locker hosting and last-mile launch — not just shopfronts. A script
submitted on WhatsApp can be picked from the nearest store, held in a locker,
couriered, or collected, decided after submission. This is exactly the model that
the best-fitting global benchmarks (Australia, India, China) assume, and it is
how SA's last-mile constraints (addressing gaps, pickup networks, load-shedding,
cold chain) are absorbed rather than fought.

Done well, the channel is a runtime choice the patient controls; done badly, it
fragments into apps that don't know about the counter and couriers that don't
know about stock.

## In this vault
- [[wiki/dischem/dischem-dispensary-services|Dis-Chem dispensary services]] — PackMyMeds, DeliverD, click-and-collect, courier today.
- [[wiki/digital-transformation/telepharmacy-and-omnichannel|Telepharmacy & omnichannel]] — the unified patient profile and node model.
- [[wiki/global-benchmarks/patterns-to-borrow-and-cautions|Patterns to borrow & cautions]] — stores-as-nodes, why AU/IN/CN transfer to SA.
- [[wiki/consumer-context/last-mile-addressing-logistics|Last-mile: addressing, pickup & load-shedding]] — the SA fulfilment reality.

## Design stance
One order, one profile, one price — many fulfilment doors, chosen and changed by
the patient at runtime. Use the store estate as the node network. Make every
channel state-aware (it knows stock, funding, and the counter) and design the
default around the patient's last-mile reality, not the courier's convenience.
