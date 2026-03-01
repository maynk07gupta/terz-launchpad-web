

# Enrich Medical Devices Service Page with Regulatory Content

## Overview

Populate the medical devices service section (`/services#medical-devices`) with detailed, authoritative content drawn from CliniExperts' medical device registration guide, adapted and rewritten for Terz Compliance's voice.

## Content to Add

### 1. Enhanced Service Description

Update the `description` field in `serviceCatalog` for the "medical-devices" entry with richer context:

> "Navigate India's medical device regulatory landscape with confidence. The Central Drugs Standard Control Organisation (CDSCO) governs the manufacturing, import, sale, and distribution of medical devices under the Drugs & Cosmetics Act, 1940 and Rules, 1945. We provide end-to-end registration support -- from device classification and technical file preparation to CDSCO approval and post-market compliance -- for all risk classes (A through D)."

### 2. Populate Step Detail Cards (Manufacturer Steps)

Fill in `keyDocuments`, `typicalTimeline`, `deliverables`, and `tips` for each of the 6 manufacturer steps:

**Step 1 - Determine Device Classification**
- Key Documents: Risk analysis report, Intended use statement, Device description
- Timeline: 1-2 weeks
- Deliverables: Classification determination letter, Risk class assignment (A/B/C/D)
- Tips: Class A devices are low-risk (e.g., thermometers); Class D are high-risk (e.g., heart valves, implantable devices)

**Step 2 - Technical File Preparation**
- Key Documents: Device Master File (DMF), Plant Master File (PMF), Design specifications, Quality testing reports
- Timeline: 4-8 weeks
- Deliverables: Complete DMF dossier, PMF documentation
- Tips: Include all manufacturing details, materials used, clinical trial data, and target audience in the DMF

**Step 3 - ISO 13485 Certification Support**
- Key Documents: QMS manual, Process validation records, Internal audit reports
- Timeline: 8-12 weeks (if not already certified)
- Deliverables: ISO 13485 certificate, QMS compliance report
- Tips: ISO 13485 is mandatory for Class B, C, and D devices; start early as this is often the longest step

**Step 4 - Submit Application via OSMD Portal**
- Key Documents: Form 40 (Registration Certificate), Form 10 (Import License), Fee payment challan (TR-6)
- Timeline: 2-4 weeks for submission
- Deliverables: Application acknowledgement, Submission receipt with reference number
- Tips: Registration fee is approximately USD 1,500 per manufacturing site plus USD 1,000 per device; submit at CDSCO HQ, New Delhi

**Step 5 - Clinical Evaluation Assistance**
- Key Documents: Clinical evaluation report, Literature review, Clinical investigation data (for Class C/D)
- Timeline: 4-12 weeks depending on risk class
- Deliverables: Clinical evaluation report, DCGI response to enquiry letter
- Tips: DCGI may request a technical presentation; be prepared with comprehensive clinical data summaries

**Step 6 - Registration Certificate Obtainment**
- Key Documents: Approval letter from DCGI, Registration certificate
- Timeline: 2-6 months (total process end)
- Deliverables: CDSCO Registration Certificate (valid 5 years), Market authorization
- Tips: Certificate is valid for 5 years; plan renewal at least 6 months before expiry

### 3. Populate Importer Steps

Fill in the same detail fields for all 6 importer steps:

**Step 1 - Appoint Indian Authorized Agent**
- Key Documents: Authorization letter, Agent appointment deed, Power of attorney
- Timeline: 1-2 weeks
- Deliverables: Signed agent agreement, IAA appointment confirmation
- Tips: The authorized agent acts as your local representative and license holder with CDSCO

**Step 2 - Import License Documentation**
- Key Documents: Form MD 14 / MD 15, Free Sale Certificate (FSC) from country of origin, Certificate of conformance
- Timeline: 3-6 weeks
- Deliverables: Complete import license application dossier
- Tips: Ensure all foreign documents are notarized and apostilled

**Step 3 - QMS Verification**
- Key Documents: ISO 13485 certificate, Factory inspection report, Quality manual
- Timeline: 4-8 weeks
- Deliverables: QMS compliance verification report
- Tips: CDSCO may conduct a virtual or physical site audit of the foreign manufacturing facility

**Step 4 - CDSCO Application Filing**
- Key Documents: Completed application forms, Technical documentation, Fee payment proof
- Timeline: 2-4 weeks
- Deliverables: Application reference number, Filing confirmation
- Tips: Submit through the OSMD portal; ensure all documents are in English or officially translated

**Step 5 - Post-Market Surveillance Setup**
- Key Documents: Vigilance reporting SOP, Adverse event monitoring plan, Periodic safety update reports
- Timeline: 2-4 weeks
- Deliverables: PMS framework document, Reporting procedures manual
- Tips: Establish adverse event reporting systems before receiving the import license

**Step 6 - Renewal Management**
- Key Documents: Renewal application, Updated compliance records, Post-market surveillance reports
- Timeline: Begin 6 months before expiry
- Deliverables: Renewed registration/import license
- Tips: Licenses are valid for 5 years; late renewal may result in import suspension

## Technical Changes

**Single file modified:** `src/pages/Services.tsx`

- Update the `description` field of the `medical-devices` entry in `serviceCatalog`
- Add `keyDocuments`, `typicalTimeline`, `deliverables`, and `tips` arrays to all 12 steps (6 manufacturer + 6 importer)

No new components, dependencies, or structural changes needed -- the `StepDetailCard` component already renders these fields when present.

