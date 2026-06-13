---
type: source
title: "HL7 FHIR MedicationRequest / MedicationDispense resources & Medication Prescription and Dispense (MPD) IG"
url: "https://www.hl7.org/fhir/medicationrequest.html"
author: "HL7 International; IHE; HL7 Europe"
publisher: "HL7 International (hl7.org/fhir)"
published: "2023-03-26"
retrieved: "2026-06-13"
source_kind: regulation
reliability: A
tags: [domain/digital, topic/e-prescription, region/global]
---

## Summary

HL7 FHIR is the modern, web/API-based interoperability standard for health data.
Its medication module models the prescription lifecycle as discrete REST resources:
**MedicationRequest** (the order/prescription — what the prescriber intends, with
dose, route, timing), **MedicationDispense** (the actual product supplied by the
pharmacy against a request), plus MedicationStatement and MedicationAdministration.
The resource is deliberately named "MedicationRequest" (not "Prescription") to
generalise across inpatient and outpatient/community settings. US Core and the
HL7 Europe **Medication Prescription and Dispense (MPD)** implementation guide and
IHE's MPD profile (e.g. PHARM-7 Retrieve Medication Orders) define how to represent
an e-prescription/dispense exchange using these resources.

## Key claims
- **MedicationRequest** = an order/request for supply + administration
  instructions; holds medication, dose, timing, route, prescriber intent.
- **MedicationDispense** = details of the dispensing event including the actual
  product provided and dosage; created against a MedicationRequest.
- Resource named "MedicationRequest" (not MedicationPrescription/Order) to
  generalise across inpatient and outpatient/care-plan settings.
- US Core profiles Medication, MedicationRequest, MedicationDispense; HL7 Europe
  **MPD IG** and IHE MPD profile (PHARM-7) standardise e-prescription/dispense
  exchange.

## Verbatim excerpts
> "MedicationRequest is an order or request for both supply of the medication and
> the instructions for administration of the medication to a patient."

> "The MedicationDispense resource represents the details of the dispensing event
> including the actual product provided to the patient and the dosage … It is used
> for dispensing a medication based on a Medication Request (aka Prescription or
> Order)."

## Used in
- [[wiki/digital-transformation/e-prescribing-systems-and-standards]]
- [[wiki/digital-transformation/interoperability-identity-records]]
