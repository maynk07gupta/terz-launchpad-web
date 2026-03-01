

# Enrich All Remaining Service Pages with Regulatory Content

## Overview

Populate the 5 remaining services (IVD, Cosmetics, LMPC, IEC, EPR, and Wholesale License) in `serviceCatalog` with detailed `keyDocuments`, `typicalTimeline`, `deliverables`, and `tips` for every step -- matching the pattern already done for Medical Devices. Also update each service's `description` with richer regulatory context.

## Single File Modified

**`src/pages/Services.tsx`** -- update the `serviceCatalog` array entries for all 5 remaining services (IVD, Cosmetics, LMPC, IEC, EPR) plus Wholesale License.

---

## Content Per Service

### 1. In-Vitro Diagnostics (IVD)

**Updated Description:**
"In-vitro diagnostic (IVD) devices are regulated under the Medical Devices Rules, 2017 (effective January 2018). CDSCO classifies IVDs into four risk-based categories (A through D) -- from simple glucose strips to high-risk HIV/cancer test kits. We provide end-to-end IVD registration support for both domestic manufacturers and importers, covering classification, performance evaluation, technical dossier compilation, and CDSCO approval."

**Manufacturer Steps (5 steps) -- add detail fields:**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| IVD Classification Analysis | IVD intended use statement, Risk analysis report, Device description per MDR 2017 | 1-2 weeks | Classification determination (A/B/C/D), Regulatory pathway recommendation | Class D includes HIV, HCV, blood grouping kits; Class A covers specimen containers and general lab equipment |
| Performance Evaluation Documentation | Analytical performance data, Clinical performance evaluation, Sensitivity/specificity reports | 4-8 weeks | Performance evaluation report, Clinical evidence summary | For Class C/D IVDs, clinical performance evaluation on Indian population samples may be required by CDSCO |
| Quality System Compliance | ISO 13485 certificate, QMS manual, Process validation records | 8-12 weeks (if not certified) | ISO 13485 certificate, QMS compliance report | Mandatory for Class B, C, and D IVDs; Class A may use self-declaration of conformity |
| Technical Dossier Compilation | Device Master File (DMF), Manufacturing process details, Stability data, Labeling artwork | 4-6 weeks | Complete technical dossier, Common Submission Dossier Template (CSDT) | Follow the CSDT format specified in MDR 2017 Schedule 5 for organized submissions |
| CDSCO Submission and Tracking | Form MD-7/MD-9 (Manufacturer), Form MD-3/MD-5 (Class A/B), Fee payment challan | 2-4 weeks for filing | Submission acknowledgement, Application tracking number | Manufacturing license for Class A/B is granted by State Licensing Authority; Class C/D requires Central License from CDSCO |

**Importer Steps (5 steps) -- add detail fields:**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Import Authorization | Authorization letter from foreign manufacturer, Indian Authorized Agent appointment deed, Power of attorney | 1-2 weeks | IAA agreement, Authorization confirmation | The Indian Authorized Agent acts as the local license holder; multiple importers can now import the same IVD product |
| Product Registration | Form MD-14 (Application), Free Sale Certificate from country of origin, Device Master File, Performance evaluation data | 4-8 weeks | Complete import license application dossier | Ensure FSC is notarized/apostilled; each IVD product requires a separate application |
| Label Compliance Review | Product labels per MDR 2017 Chapter VI, Instructions for use (IFU), Package insert | 2-3 weeks | Compliant label artwork, IFU document | Labels must include IVD symbol, storage conditions, lot number, expiry date, and manufacturer details in English |
| Distribution License Support | Import license (Form MD-15), State wholesale license, Distribution agreement | 3-6 weeks | Distribution license, Wholesale license (20B/21B or MD42) | A wholesale drug license is often a prerequisite for commercial distribution of imported IVDs |
| Post-Import Compliance | Vigilance reporting SOP, Adverse event monitoring plan, Annual compliance reports | Ongoing | PMS framework, Annual compliance filings | Submit periodic safety update reports to CDSCO; adverse events must be reported within prescribed timelines |

---

### 2. Cosmetics (CDSCO)

**Updated Description:**
"Cosmetic products imported into India must be registered with CDSCO under the Cosmetics Rules, 2020. The process involves submitting Form COS-1 for product and manufacturing site registration, leading to the grant of an Import Registration Certificate in Form COS-2. We handle the entire registration journey -- from formulation compliance and safety assessment to SUGAM portal filing and label verification."

**Manufacturer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Product Formulation Review | Ingredient list with concentrations and CAS numbers, BIS specification compliance (Ninth Schedule), Non-animal testing undertaking | 2-3 weeks | Formulation compliance report, Ingredient safety assessment | Verify all ingredients are on the CDSCO permitted list; check BIS standards in the Ninth Schedule of Cosmetics Rules 2020 |
| Safety Assessment Coordination | Toxicological assessment report, Heavy metal testing report, Stability data | 3-6 weeks | Complete safety dossier, BIS compliance certificate for perfumes | Submit undertaking for non-animal testing and heavy metal testing as mandated by Cosmetics Rules 2020 |
| Manufacturing License Assistance | GMP certificate, Manufacturing license from State Drug Authority, Site layout and facility documents | 4-8 weeks | Manufacturing license, GMP compliance report | Required only for domestic manufacturing; imported cosmetics go through the COS-1/COS-2 route instead |
| Product Registration Filing | Form COS-1 application, Fee challan (USD 1,000 per category + USD 500 per site + USD 50 per variant), Product description and brand details | 2-4 weeks for submission | SUGAM portal submission receipt, Application reference number | Fee is USD 1,000 per category, USD 500 per manufacturing site, and USD 50 per variant; submit via CDSCO SUGAM portal |
| Label Compliance Verification | Label artwork per Chapter VI of Cosmetics Rules 2020, Pack inserts, Ingredient declaration | 1-2 weeks | Compliant label approval, Final packaging artwork | Ensure product names, manufacturer/importer details, and addresses are consistent across all documents; any spelling discrepancy can cause rejection |

**Importer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Import Permit Acquisition | Authorization from manufacturer (First Schedule, Cosmetics Rules 2020), Apostilled/notarized foreign documents | 2-3 weeks | Authenticated authorization letter, Importer eligibility confirmation | Authorization must be authenticated by Indian Embassy or Magistrate of First Class or via apostille in the country of origin |
| Foreign Manufacturer Documentation | Manufacturing license from country of origin, Free Sale Certificate (FSC) from National Regulatory Authority, GMP certificate | 3-6 weeks | Complete manufacturer dossier, Authenticated FSC | If FSC is from a chamber of commerce (not regulatory authority), it requires additional attestation from Indian Embassy or apostillation |
| Product Testing Coordination | Product test reports from approved Indian labs, BIS compliance reports, Stability data | 4-6 weeks | Test certificates, Compliance verification report | Testing must be conducted at CDSCO-approved laboratories in India for certain categories |
| Registration with CDSCO | Form COS-1 (complete), Fee payment receipt, All supporting documents per Second Schedule | 2-4 weeks for submission | Form COS-2 (Import Registration Certificate), SUGAM portal approval | Timeline to receive COS-2 approval is approximately 90 days from complete submission |
| Customs Clearance Support | Valid Form COS-2, Bill of entry, Import documentation | 1-2 weeks per shipment | Customs clearance certificate, Port release order | With a valid COS-2, cosmetics can be imported through any designated port in India; certificate is valid for 5 years |

---

### 3. Legal Metrology (LMPC)

**Updated Description:**
"The Legal Metrology Department, functioning under the Department of Consumer Affairs, regulates the manufacturing and import of weighing/measuring instruments and packaged commodities under the Legal Metrology Act, 2009 and Rules 2011, 2017, 2020, 2021, 2022. We provide full-spectrum services including registration, licensing, product model approval, stamping, verification, and label compliance."

**Manufacturer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Packaging Compliance Audit | Current packaging samples, Legal Metrology (Packaged Commodities) Rules 2011, Product specifications | 1-2 weeks | Compliance gap report, Remediation checklist | Review against both central and state-level requirements as state departments regulate affairs of their respective jurisdictions |
| Label Design Review | Label artwork drafts, MRP declaration, Net quantity details, Manufacturer/importer address, Country of origin | 2-3 weeks | Compliant label design, Declaration verification report | Labels must include: product name, net quantity, MRP (inclusive of all taxes), manufacturer/packer details, month/year of manufacture, and consumer care details |
| LMPC Registration Filing | Application Form LM-1 (Manufacturer License), Company registration documents, Proof of premises (lease/ownership), Trade license | 2-4 weeks | Application acknowledgement, Registration reference number | Each state has its own Legal Metrology portal; registration requirements may vary by state |
| Declaration Verification | Net quantity declarations, MRP compliance documents, Consumer information labels, OIML standard compliance (for instruments) | 2-3 weeks | Verified declaration certificate, Compliance confirmation | For weighing/measuring instruments, ensure model/pattern approval complies with OIML (International Organization of Legal Metrology) standards |
| Ongoing Compliance Monitoring | License renewal application (Form LM-2), Updated compliance records, Stamping and verification certificates | Ongoing; renew 3 months before expiry | Renewed license (Form LM-3), Compliance audit report | License renewal must be filed at least 3 months before expiry; stamping and verification by State Legal Metrology Office is mandatory for all approved instruments |

**Importer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Import Compliance Assessment | Foreign product packaging details, Indian labeling requirements checklist, Bill of entry samples | 1-2 weeks | Compliance assessment report, Required modifications list | Importer registration under Rule 19 of Legal Metrology (General) Rules 2011 requires a valid Trade License |
| Package Modification Guidance | Current foreign packaging, Required Indian declarations, Translation documents | 2-4 weeks | Modified packaging specifications, Compliant label templates | All declarations must be in Hindi and English as specified; sticker labels are acceptable for imported goods with prior approval |
| Registration for Importers | Importer registration application, Address proof (lease agreement, electricity bill, NOC from property owner), ID proof of directors | 2-4 weeks | Importer registration certificate, Portal login credentials | Address proof documents include lease agreement, sales deed, electricity bill, and NOC from property owner |
| Custom Label Requirements | Country of origin declaration, Importer name and address, MRP in Indian Rupees, Net quantity in metric units | 1-2 weeks | Final approved import labels, Customs-ready documentation | Imported packaged goods must display the importer's name, address, and country of origin prominently; MRP must include all duties and taxes |
| Import Documentation | Registration certificate copy, Import invoices, Bill of entry, Packer registration (if applicable) | Ongoing | Complete import compliance file, Periodic audit reports | Wholesalers/distributors do not require Packer registration, but manufacturers, packers, importers, and marketers of pre-packaged commodities do |

---

### 4. Import Export Code (IEC)

**Updated Description:**
"The Import Export Code (IEC) is a 10-digit registration issued by the Directorate General of Foreign Trade (DGFT) -- mandatory for any business engaged in importing or exporting goods from India. The IEC is valid for a lifetime with no renewal requirement, though annual updates on the DGFT portal are required. We provide end-to-end IEC registration, modification, and compliance support."

**Manufacturer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| IEC Application Preparation | PAN card of entity, Aadhaar of applicant, Business registration certificate (GST/CIN), Bank account details | 1 week | Eligibility confirmation, Application readiness checklist | Proprietorships, partnerships, LLPs, and companies are all eligible; ensure PAN is linked to the business entity |
| Documentation Compilation | Bank certificate or cancelled cheque, Address proof of business premises, ID and address proof of all directors/partners, Digital signature certificate | 1-2 weeks | Complete document set, Digitally signed authorization | Bank certificate must be on the bank's letterhead with account details; passport-size photographs of the applicant are also required |
| DGFT Portal Filing | Online application form (ANF 2A), DSC-signed submission, Payment receipt (INR 500 government fee) | 1-2 weeks | DGFT portal submission confirmation, Application reference number | Register on the DGFT portal (dgft.gov.in); the application fee is INR 500 payable online |
| Certificate Obtainment | IEC certificate (10-digit code), DGFT approval letter | 3-7 working days after filing | IEC certificate (lifetime validity), DGFT registration confirmation | IEC is allotted within 3-7 working days; no renewal needed but annual update of details on DGFT portal is mandatory |
| Modification Support | Amendment application, Updated business documents, Board resolution (for company changes) | 1-2 weeks | Updated IEC certificate, DGFT amendment confirmation | Modifications needed for: change of address, addition/removal of directors/partners, change of bank details, or change of business constitution |

**Importer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| IEC Code Registration | PAN card, Business registration, Aadhaar, Bank account details | 1 week | IEC eligibility assessment, Registration roadmap | IEC is mandatory before clearing any import consignment through Indian customs |
| Import Eligibility Verification | Product classification (HS code), DGFT ITC (HS) classification, Restricted/prohibited item check | 1-2 weeks | Import eligibility report, HS code classification | Restricted items require additional DGFT approval; prohibited items cannot be imported regardless of IEC |
| Customs Documentation | Bill of entry, Commercial invoice, Packing list, Certificate of origin, IEC reference | 2-3 weeks | Complete customs documentation package, Import compliance checklist | Link IEC to ICEGATE (Indian Customs Electronic Gateway) for smooth electronic filing of bills of entry |
| License Activation | ICEGATE registration, Customs broker appointment, Bank authorization for duty payment | 1-2 weeks | Active IEC with customs, ICEGATE registration confirmation | First-time importers should register on ICEGATE and appoint a licensed customs broker for clearance |
| Annual Compliance | Annual update on DGFT portal, Updated KYC documents, Export obligation discharge (if applicable) | Annual; update by June 30 each year | Updated IEC status, Compliance certificate | Failure to file annual update may result in IEC deactivation; update is mandatory even if no import/export activity occurred |

---

### 5. Extended Producer Responsibility (EPR)

**Updated Description:**
"The Central Pollution Control Board (CPCB) mandates Extended Producer Responsibility (EPR) authorization for all producers, importers, and brand owners dealing in plastic packaging, e-waste, or batteries. EPR authorization ensures responsible end-of-life management of products and packaging. We handle the complete EPR registration process -- from applicability assessment and CPCB portal filing to target compliance tracking and annual return submissions."

**Manufacturer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| EPR Assessment and Planning | Product/packaging details, Plastic waste category identification, Business registration (PAN, GST, CIN) | 1-2 weeks | EPR applicability report, Waste category classification | EPR applies to three categories: plastic packaging waste, e-waste (electrical/electronic equipment), and battery waste -- each has different rules and forms |
| Registration with CPCB | EPR application form (Form I/V/VI/VII depending on category), Environmental Protection Plan, Proof of legal entity, IEC certificate (for importers) | 4-6 weeks | CPCB application acknowledgement, Application reference number | Submit through the CPCB online portal; plastic waste EPR uses Form I, e-waste uses Form V, battery waste uses Form VI/VII |
| Annual Return Filing | Annual return form, Collection and recycling data, Waste processing certificates, Producer/brand owner details | 2-4 weeks per filing | Filed annual return, CPCB acknowledgement | Annual returns must be submitted before the CPCB deadline to avoid penalties; PIBOs (Producers, Importers, Brand Owners) face action for late filing |
| Target Compliance Tracking | Collection target data, Recycling/processing certificates, Waste management agreements with recyclers | Ongoing | Target achievement report, Compliance dashboard | Collection and recycling targets increase year-on-year as per CPCB guidelines; maintain agreements with registered recyclers and waste processors |
| Certificate Management | EPR authorization certificate, Renewal application (for e-waste and battery categories), Updated compliance records | Plastic: lifetime; E-waste/Battery: renew every 5 years | EPR authorization certificate, Renewal confirmation | Plastic waste EPR is lifetime valid; e-waste and battery EPR certificates are valid for 5 years and must be renewed before expiry |

**Importer Steps (5 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Import EPR Obligations | Import product details, Packaging material analysis, IEC certificate, Bill of materials | 1-2 weeks | EPR obligation assessment, Applicable waste categories | Importers of any product with plastic packaging, or of electronic/electrical equipment or batteries, are required to obtain EPR authorization |
| Producer Responsibility Setup | Authorized person details (Aadhaar, PAN), Company documents (CIN, GST), Partnership deed (if applicable) | 2-3 weeks | PRO (Producer Responsibility Organization) agreement, Collection mechanism plan | Consider engaging a registered PRO to manage collection and channelization of waste on your behalf |
| Waste Management Planning | Waste collection plan, Recycler/dismantler agreements, Processing targets, Environmental impact assessment | 2-4 weeks | Comprehensive waste management plan, Recycler network documentation | Establish agreements with CPCB/SPCB-registered recyclers before applying; this strengthens your application |
| CPCB Compliance | Completed application form, All supporting documents, DIC registration (if applicable), Covering letter | 2-3 months for approval | EPR authorization certificate from CPCB | Government charges vary by case; typical timeline is 2-3 months from complete submission |
| Reporting and Renewals | Annual compliance reports, Updated collection/recycling data, Renewal application (for e-waste/battery) | Annual reporting; renewal 6 months before expiry | Annual compliance certificate, Renewed EPR authorization | CPCB has strict timelines for annual reporting; late submissions can result in suspension of EPR authorization |

---

### 6. Wholesale License (20B/21B and MD42)

**Updated Description:**
"A wholesale drug license is issued by the State Licensing Authority (SLA) under the Drugs and Cosmetics Rules, permitting the sale, stocking, and distribution of drugs, biologicals, medical devices, and IVDs at wholesale level. Form 20B/21B covers drugs and medical devices, while Form MD42 is for medical devices only. The license is valid for lifetime with a retention fee every 5 years. We provide end-to-end support from premises setup to license obtainment and renewal management."

**Manufacturer Steps (6 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Determine License Type | Product portfolio assessment, Form 20B/21B vs MD42 comparison, Business registration documents | 1-2 weeks | License type recommendation, Regulatory pathway document | Form 20B/21B covers pharmaceuticals, drugs, biologicals, and medical devices; Form MD42 is exclusively for medical devices |
| Premises and Infrastructure Setup | Premises layout plan (minimum 10 sq. meters), Ventilation and temperature control records, Refrigerator/AC invoices, Ownership/lease documents | 2-4 weeks | Premises compliance report, Infrastructure readiness certificate | Facility must meet State Master Development Plan criteria; minimum 10 sq. meters area with proper ventilation and temperature control |
| Documentation Compilation | Director ID proofs (Aadhaar, PAN, passport), Registered pharmacist qualification certificate (B.Pharm + 1 year experience), Proof of premises ownership, Electricity bill, System-generated forms and affidavits | 2-3 weeks | Complete application dossier, Pharmacist appointment letter | The registered pharmacist must have a graduate degree (B.Pharm) and minimum 1 year experience in dealing with drugs; alternatively, SSLC with 4 years experience |
| Application Filing with State Drug Authority | Completed application form (Form 20B/21B or MD42), Government fee (INR 1,500 per license), Hard copy submission to SLA | 2-3 weeks | Application reference number, Fee receipt, Filing confirmation | Each state has its own portal (e.g., xlnIndia for Delhi, NiveshMitra for UP, InvestHaryana for Haryana); submit both online and hard copy |
| Premises Inspection | Site prepared for Drug Inspector visit, Storage compliance documentation, Temperature/cold chain records | 2-4 weeks after filing | Inspection report, Compliance verification | Drug Inspector will verify premises for adequate storage, ventilation, temperature control, and availability of qualified pharmacist on-site |
| License Grant and Renewal Management | Inspection clearance, Approval letter from SLA | 21 working days (Form 19) | Wholesale drug license (lifetime validity), Retention fee schedule | License is valid for lifetime but retention fee of INR 1,500 must be submitted every 5 years; any change in constitution or premises requires a new application |

**Importer Steps (6 steps):**

| Step | Key Documents | Timeline | Deliverables | Tips |
|------|--------------|----------|-------------|------|
| Assess Wholesale License Requirement | Import license details, Product classification (drugs vs devices), CDSCO registration certificate | 1-2 weeks | Requirement assessment report, License type recommendation | Wholesale license is a mandatory prerequisite for most import license holders; same license covers drugs, biologicals, and medical devices |
| Appoint Qualified Person | Registered pharmacist certificate, B.Pharm degree + 1 year experience, Employment agreement | 2-3 weeks | Pharmacist appointment confirmation, Qualification verification | If no B.Pharm graduate available, a person with SSLC + 4 years drug dealing experience can serve as competent person |
| Prepare Premises Documentation | Lease agreement/ownership proof, Facility layout (min. 10 sq. meters), Cold chain capability proof (if applicable), Electricity bill | 2-3 weeks | Complete premises dossier, Good Storage Practices compliance report | Electric bill of the premises is mandatory; for DDA-allotted premises in Delhi, MCD conversion charge receipt is required |
| Submit Application to State Authority | Application form, Import license copy, Government fee (INR 1,500), Hard copy submission | 2-3 weeks | Filing confirmation, Application tracking number | Submit on the respective state portal and as hard copy to the State Licensing Authority simultaneously |
| Inspection and Compliance Verification | Premises ready for inspection, Storage conditions documentation, Pharmacist availability confirmation | 2-4 weeks after filing | Drug Inspector's inspection report, Compliance clearance | Ensure the qualified person/pharmacist is present during inspection; all storage conditions must be demonstrably maintained |
| License Issuance and Ongoing Compliance | Approval from SLA, Transaction record-keeping system | 21 working days for Form 19 | Wholesale license (lifetime), Transaction record template | Maintain records of all wholesale transactions; wholesale license holders cannot sell drugs at retail level; retention fee due every 5 years |

---

## Technical Details

- **File modified:** `src/pages/Services.tsx` only
- **Changes:** Update `description` field and add `keyDocuments`, `typicalTimeline`, `deliverables`, and `tips` to every step across all 6 remaining services (IVD: 10 steps, Cosmetics: 10 steps, LMPC: 10 steps, IEC: 10 steps, EPR: 10 steps, Wholesale: 12 steps = 62 steps total)
- **No new components, dependencies, or structural changes** -- the existing `StepDetailCard` component already renders these fields

