import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import StepDetailCard from "@/components/StepDetailCard";
import FloatingElements from "@/components/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Beaker,
  ChevronDown,
  FileText,
  Globe2,
  Layers,
  Leaf,
  Microscope,
  Package,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Target,
  Truck,
  UploadCloud,
  UserCheck,
  Factory,
  Building2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Image imports
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import wholesaleLicenseImg from "@/assets/wholesale-license.jpg";

type ProcedureStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  phase: string;
  keyDocuments?: string[];
  typicalTimeline?: string;
  deliverables?: string[];
  tips?: string[];
};

type ServiceProcedure = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  manufacturerSteps: ProcedureStep[];
  importerSteps: ProcedureStep[];
};

const serviceCatalog: ServiceProcedure[] = [
  {
    id: "medical-devices",
    title: "Medical Devices (CDSCO)",
    tagline: "Smooth CDSCO registration for manufacturers and importers",
    description:
      "Navigate India's medical device regulatory landscape with confidence. The Central Drugs Standard Control Organisation (CDSCO) governs the manufacturing, import, sale, and distribution of medical devices under the Drugs & Cosmetics Act, 1940 and Rules, 1945. We provide end-to-end registration support — from device classification and technical file preparation to CDSCO approval and post-market compliance — for all risk classes (A through D).",
    image: medicalDevicesImg,
    badge: "CDSCO",
    manufacturerSteps: [
      {
        title: "Determine Device Classification",
        description:
          "Classify your device under CDSCO categories (Class A, B, C, or D) based on risk level and intended use.",
        icon: Layers,
        phase: "Assessment",
        keyDocuments: ["Risk analysis report", "Intended use statement", "Device description"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Classification determination letter", "Risk class assignment (A/B/C/D)"],
        tips: ["Class A devices are low-risk (e.g., thermometers); Class D are high-risk (e.g., heart valves, implantable devices)"],
      },
      {
        title: "Technical File Preparation",
        description:
          "Compile comprehensive technical documentation including device description, quality certificates, and design specifications.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Device Master File (DMF)", "Plant Master File (PMF)", "Design specifications", "Quality testing reports"],
        typicalTimeline: "4–8 weeks",
        deliverables: ["Complete DMF dossier", "PMF documentation"],
        tips: ["Include all manufacturing details, materials used, clinical trial data, and target audience in the DMF"],
      },
      {
        title: "ISO 13485 Certification Support",
        description:
          "Ensure quality management system compliance and obtain necessary ISO certifications for manufacturing.",
        icon: ShieldCheck,
        phase: "Preparation",
        keyDocuments: ["QMS manual", "Process validation records", "Internal audit reports"],
        typicalTimeline: "8–12 weeks (if not already certified)",
        deliverables: ["ISO 13485 certificate", "QMS compliance report"],
        tips: ["ISO 13485 is mandatory for Class B, C, and D devices; start early as this is often the longest step"],
      },
      {
        title: "Submit Application via OSMD Portal",
        description:
          "File application through Online Submission of Medical Devices portal with all required documents and fees.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Form 40 (Registration Certificate)", "Form 10 (Import License)", "Fee payment challan (TR-6)"],
        typicalTimeline: "2–4 weeks for submission",
        deliverables: ["Application acknowledgement", "Submission receipt with reference number"],
        tips: ["Registration fee is approximately USD 1,500 per manufacturing site plus USD 1,000 per device; submit at CDSCO HQ, New Delhi"],
      },
      {
        title: "Clinical Evaluation Assistance",
        description:
          "Provide clinical data and evaluation reports as required for higher-risk device classifications.",
        icon: Microscope,
        phase: "Review",
        keyDocuments: ["Clinical evaluation report", "Literature review", "Clinical investigation data (for Class C/D)"],
        typicalTimeline: "4–12 weeks depending on risk class",
        deliverables: ["Clinical evaluation report", "DCGI response to enquiry letter"],
        tips: ["DCGI may request a technical presentation; be prepared with comprehensive clinical data summaries"],
      },
      {
        title: "Registration Certificate Obtainment",
        description:
          "Upon approval, receive registration certificate valid for 5 years, enabling legal marketing in India.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["Approval letter from DCGI", "Registration certificate"],
        typicalTimeline: "2–6 months (total process end)",
        deliverables: ["CDSCO Registration Certificate (valid 5 years)", "Market authorization"],
        tips: ["Certificate is valid for 5 years; plan renewal at least 6 months before expiry"],
      },
    ],
    importerSteps: [
      {
        title: "Appoint Indian Authorized Agent",
        description:
          "Foreign manufacturers must designate an authorized representative in India for liaison with CDSCO.",
        icon: UserCheck,
        phase: "Assessment",
        keyDocuments: ["Authorization letter", "Agent appointment deed", "Power of attorney"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Signed agent agreement", "IAA appointment confirmation"],
        tips: ["The authorized agent acts as your local representative and license holder with CDSCO"],
      },
      {
        title: "Import License Documentation",
        description:
          "Prepare import-specific documentation including foreign manufacturer details and product certifications.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Form MD 14 / MD 15", "Free Sale Certificate (FSC) from country of origin", "Certificate of conformance"],
        typicalTimeline: "3–6 weeks",
        deliverables: ["Complete import license application dossier"],
        tips: ["Ensure all foreign documents are notarized and apostilled"],
      },
      {
        title: "Quality Management System Verification",
        description:
          "Verify and document QMS compliance at the foreign manufacturing facility.",
        icon: ShieldCheck,
        phase: "Preparation",
        keyDocuments: ["ISO 13485 certificate", "Factory inspection report", "Quality manual"],
        typicalTimeline: "4–8 weeks",
        deliverables: ["QMS compliance verification report"],
        tips: ["CDSCO may conduct a virtual or physical site audit of the foreign manufacturing facility"],
      },
      {
        title: "CDSCO Application Filing",
        description:
          "Submit import registration application with complete documentation through regulatory portal.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Completed application forms", "Technical documentation", "Fee payment proof"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Application reference number", "Filing confirmation"],
        tips: ["Submit through the OSMD portal; ensure all documents are in English or officially translated"],
      },
      {
        title: "Post-Market Surveillance Setup",
        description:
          "Establish vigilance reporting systems and adverse event monitoring procedures.",
        icon: Activity,
        phase: "Review",
        keyDocuments: ["Vigilance reporting SOP", "Adverse event monitoring plan", "Periodic safety update reports"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["PMS framework document", "Reporting procedures manual"],
        tips: ["Establish adverse event reporting systems before receiving the import license"],
      },
      {
        title: "Renewal Management",
        description:
          "Manage ongoing compliance, periodic safety updates, and timely registration renewal.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["Renewal application", "Updated compliance records", "Post-market surveillance reports"],
        typicalTimeline: "Begin 6 months before expiry",
        deliverables: ["Renewed registration/import license"],
        tips: ["Licenses are valid for 5 years; late renewal may result in import suspension"],
      },
    ],
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics (CDSCO)",
    tagline: "Expert IVD compliance and regulatory support",
    description:
      "In-vitro diagnostic (IVD) devices are regulated under the Medical Devices Rules, 2017 (effective January 2018). CDSCO classifies IVDs into four risk-based categories (A through D) — from simple glucose strips to high-risk HIV/cancer test kits. We provide end-to-end IVD registration support for both domestic manufacturers and importers, covering classification, performance evaluation, technical dossier compilation, and CDSCO approval.",
    image: ivdImg,
    badge: "CDSCO",
    manufacturerSteps: [
      {
        title: "IVD Classification Analysis",
        description:
          "Determine if your IVD falls under regulated categories per CDSCO guidelines.",
        icon: Layers,
        phase: "Assessment",
        keyDocuments: ["IVD intended use statement", "Risk analysis report", "Device description per MDR 2017"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Classification determination (A/B/C/D)", "Regulatory pathway recommendation"],
        tips: ["Class D includes HIV, HCV, blood grouping kits; Class A covers specimen containers and general lab equipment"],
      },
      {
        title: "Performance Evaluation Documentation",
        description:
          "Compile analytical and clinical performance data for your diagnostic product.",
        icon: Activity,
        phase: "Preparation",
        keyDocuments: ["Analytical performance data", "Clinical performance evaluation", "Sensitivity/specificity reports"],
        typicalTimeline: "4–8 weeks",
        deliverables: ["Performance evaluation report", "Clinical evidence summary"],
        tips: ["For Class C/D IVDs, clinical performance evaluation on Indian population samples may be required by CDSCO"],
      },
      {
        title: "Quality System Compliance",
        description:
          "Prepare ISO 13485 certification and quality management system documentation.",
        icon: ShieldCheck,
        phase: "Preparation",
        keyDocuments: ["ISO 13485 certificate", "QMS manual", "Process validation records"],
        typicalTimeline: "8–12 weeks (if not certified)",
        deliverables: ["ISO 13485 certificate", "QMS compliance report"],
        tips: ["Mandatory for Class B, C, and D IVDs; Class A may use self-declaration of conformity"],
      },
      {
        title: "Technical Dossier Compilation",
        description:
          "Prepare comprehensive technical file including manufacturing details and validation studies.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Device Master File (DMF)", "Manufacturing process details", "Stability data", "Labeling artwork"],
        typicalTimeline: "4–6 weeks",
        deliverables: ["Complete technical dossier", "Common Submission Dossier Template (CSDT)"],
        tips: ["Follow the CSDT format specified in MDR 2017 Schedule 5 for organized submissions"],
      },
      {
        title: "CDSCO Submission and Tracking",
        description:
          "Submit application through appropriate channels with all required documentation.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Form MD-7/MD-9 (Manufacturer)", "Form MD-3/MD-5 (Class A/B)", "Fee payment challan"],
        typicalTimeline: "2–4 weeks for filing",
        deliverables: ["Submission acknowledgement", "Application tracking number"],
        tips: ["Manufacturing license for Class A/B is granted by State Licensing Authority; Class C/D requires Central License from CDSCO"],
      },
    ],
    importerSteps: [
      {
        title: "Import Authorization",
        description:
          "Obtain necessary authorizations for importing IVD products into India.",
        icon: UserCheck,
        phase: "Assessment",
        keyDocuments: ["Authorization letter from foreign manufacturer", "Indian Authorized Agent appointment deed", "Power of attorney"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["IAA agreement", "Authorization confirmation"],
        tips: ["The Indian Authorized Agent acts as the local license holder; multiple importers can now import the same IVD product"],
      },
      {
        title: "Product Registration",
        description:
          "Register imported IVD products with complete documentation and test reports.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Form MD-14 (Application)", "Free Sale Certificate from country of origin", "Device Master File", "Performance evaluation data"],
        typicalTimeline: "4–8 weeks",
        deliverables: ["Complete import license application dossier"],
        tips: ["Ensure FSC is notarized/apostilled; each IVD product requires a separate application"],
      },
      {
        title: "Label Compliance Review",
        description:
          "Ensure product labeling meets all Indian regulatory requirements.",
        icon: Package,
        phase: "Review",
        keyDocuments: ["Product labels per MDR 2017 Chapter VI", "Instructions for use (IFU)", "Package insert"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Compliant label artwork", "IFU document"],
        tips: ["Labels must include IVD symbol, storage conditions, lot number, expiry date, and manufacturer details in English"],
      },
      {
        title: "Distribution License Support",
        description:
          "Obtain distribution licenses for commercial sale of IVD products.",
        icon: Truck,
        phase: "Review",
        keyDocuments: ["Import license (Form MD-15)", "State wholesale license", "Distribution agreement"],
        typicalTimeline: "3–6 weeks",
        deliverables: ["Distribution license", "Wholesale license (20B/21B or MD42)"],
        tips: ["A wholesale drug license is often a prerequisite for commercial distribution of imported IVDs"],
      },
      {
        title: "Post-Import Compliance",
        description:
          "Maintain ongoing compliance with post-market surveillance requirements.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["Vigilance reporting SOP", "Adverse event monitoring plan", "Annual compliance reports"],
        typicalTimeline: "Ongoing",
        deliverables: ["PMS framework", "Annual compliance filings"],
        tips: ["Submit periodic safety update reports to CDSCO; adverse events must be reported within prescribed timelines"],
      },
    ],
  },
  {
    id: "cosmetics",
    title: "Cosmetics (CDSCO)",
    tagline: "Fast-track cosmetic product registration",
    description:
      "Cosmetic products imported into India must be registered with CDSCO under the Cosmetics Rules, 2020. The process involves submitting Form COS-1 for product and manufacturing site registration, leading to the grant of an Import Registration Certificate in Form COS-2. We handle the entire registration journey — from formulation compliance and safety assessment to SUGAM portal filing and label verification.",
    image: cosmeticsImg,
    badge: "CDSCO",
    manufacturerSteps: [
      {
        title: "Product Formulation Review",
        description:
          "Ensure formulation complies with CDSCO permitted ingredients list.",
        icon: Beaker,
        phase: "Assessment",
        keyDocuments: ["Ingredient list with concentrations and CAS numbers", "BIS specification compliance (Ninth Schedule)", "Non-animal testing undertaking"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Formulation compliance report", "Ingredient safety assessment"],
        tips: ["Verify all ingredients are on the CDSCO permitted list; check BIS standards in the Ninth Schedule of Cosmetics Rules 2020"],
      },
      {
        title: "Safety Assessment Coordination",
        description:
          "Conduct toxicological assessment and compile safety data for all ingredients.",
        icon: ShieldCheck,
        phase: "Assessment",
        keyDocuments: ["Toxicological assessment report", "Heavy metal testing report", "Stability data"],
        typicalTimeline: "3–6 weeks",
        deliverables: ["Complete safety dossier", "BIS compliance certificate for perfumes"],
        tips: ["Submit undertaking for non-animal testing and heavy metal testing as mandated by Cosmetics Rules 2020"],
      },
      {
        title: "Manufacturing License Assistance",
        description:
          "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["GMP certificate", "Manufacturing license from State Drug Authority", "Site layout and facility documents"],
        typicalTimeline: "4–8 weeks",
        deliverables: ["Manufacturing license", "GMP compliance report"],
        tips: ["Required only for domestic manufacturing; imported cosmetics go through the COS-1/COS-2 route instead"],
      },
      {
        title: "Product Registration Filing",
        description:
          "Submit online registration application with product details, formulation, and test reports.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Form COS-1 application", "Fee challan (USD 1,000 per category + USD 500 per site + USD 50 per variant)", "Product description and brand details"],
        typicalTimeline: "2–4 weeks for submission",
        deliverables: ["SUGAM portal submission receipt", "Application reference number"],
        tips: ["Fee is USD 1,000 per category, USD 500 per manufacturing site, and USD 50 per variant; submit via CDSCO SUGAM portal"],
      },
      {
        title: "Label Compliance Verification",
        description:
          "Ensure labels meet all regulatory requirements including ingredient declaration and warnings.",
        icon: Package,
        phase: "Review",
        keyDocuments: ["Label artwork per Chapter VI of Cosmetics Rules 2020", "Pack inserts", "Ingredient declaration"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Compliant label approval", "Final packaging artwork"],
        tips: ["Ensure product names, manufacturer/importer details, and addresses are consistent across all documents; any spelling discrepancy can cause rejection"],
      },
    ],
    importerSteps: [
      {
        title: "Import Permit Acquisition",
        description:
          "Obtain import permits and authorizations for cosmetic products.",
        icon: UserCheck,
        phase: "Assessment",
        keyDocuments: ["Authorization from manufacturer (First Schedule, Cosmetics Rules 2020)", "Apostilled/notarized foreign documents"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Authenticated authorization letter", "Importer eligibility confirmation"],
        tips: ["Authorization must be authenticated by Indian Embassy or Magistrate of First Class or via apostille in the country of origin"],
      },
      {
        title: "Foreign Manufacturer Documentation",
        description:
          "Compile documentation from foreign manufacturers including GMP certificates.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Manufacturing license from country of origin", "Free Sale Certificate (FSC) from National Regulatory Authority", "GMP certificate"],
        typicalTimeline: "3–6 weeks",
        deliverables: ["Complete manufacturer dossier", "Authenticated FSC"],
        tips: ["If FSC is from a chamber of commerce (not regulatory authority), it requires additional attestation from Indian Embassy or apostillation"],
      },
      {
        title: "Product Testing Coordination",
        description:
          "Arrange product testing at approved laboratories in India.",
        icon: Beaker,
        phase: "Preparation",
        keyDocuments: ["Product test reports from approved Indian labs", "BIS compliance reports", "Stability data"],
        typicalTimeline: "4–6 weeks",
        deliverables: ["Test certificates", "Compliance verification report"],
        tips: ["Testing must be conducted at CDSCO-approved laboratories in India for certain categories"],
      },
      {
        title: "Registration with CDSCO",
        description:
          "Submit import registration application with complete product dossier.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Form COS-1 (complete)", "Fee payment receipt", "All supporting documents per Second Schedule"],
        typicalTimeline: "2–4 weeks for submission",
        deliverables: ["Form COS-2 (Import Registration Certificate)", "SUGAM portal approval"],
        tips: ["Timeline to receive COS-2 approval is approximately 90 days from complete submission"],
      },
      {
        title: "Customs Clearance Support",
        description:
          "Facilitate smooth customs clearance with proper documentation.",
        icon: Truck,
        phase: "Approval",
        keyDocuments: ["Valid Form COS-2", "Bill of entry", "Import documentation"],
        typicalTimeline: "1–2 weeks per shipment",
        deliverables: ["Customs clearance certificate", "Port release order"],
        tips: ["With a valid COS-2, cosmetics can be imported through any designated port in India; certificate is valid for 5 years"],
      },
    ],
  },
  {
    id: "lmpc",
    title: "Legal Metrology (LMPC)",
    tagline: "LMPC compliance made simple",
    description:
      "The Legal Metrology Department, functioning under the Department of Consumer Affairs, regulates the manufacturing and import of weighing/measuring instruments and packaged commodities under the Legal Metrology Act, 2009 and Rules 2011, 2017, 2020, 2021, 2022. We provide full-spectrum services including registration, licensing, product model approval, stamping, verification, and label compliance.",
    image: lmpcImg,
    badge: "Central-Level",
    manufacturerSteps: [
      {
        title: "Packaging Compliance Audit",
        description:
          "Review existing packaging against Legal Metrology (Packaged Commodities) Rules requirements.",
        icon: Package,
        phase: "Assessment",
        keyDocuments: ["Current packaging samples", "Legal Metrology (Packaged Commodities) Rules 2011", "Product specifications"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Compliance gap report", "Remediation checklist"],
        tips: ["Review against both central and state-level requirements as state departments regulate affairs of their respective jurisdictions"],
      },
      {
        title: "Label Design Review",
        description:
          "Ensure labels include all mandatory declarations: quantity, price, manufacturer details, country of origin.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Label artwork drafts", "MRP declaration", "Net quantity details", "Manufacturer/importer address", "Country of origin"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Compliant label design", "Declaration verification report"],
        tips: ["Labels must include: product name, net quantity, MRP (inclusive of all taxes), manufacturer/packer details, month/year of manufacture, and consumer care details"],
      },
      {
        title: "LMPC Registration Filing",
        description:
          "File registration application with concerned State Legal Metrology Department.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Application Form LM-1 (Manufacturer License)", "Company registration documents", "Proof of premises (lease/ownership)", "Trade license"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Application acknowledgement", "Registration reference number"],
        tips: ["Each state has its own Legal Metrology portal; registration requirements may vary by state"],
      },
      {
        title: "Declaration Verification",
        description:
          "Submit declarations regarding net quantity, MRP, and consumer information compliance.",
        icon: Scale,
        phase: "Review",
        keyDocuments: ["Net quantity declarations", "MRP compliance documents", "Consumer information labels", "OIML standard compliance (for instruments)"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Verified declaration certificate", "Compliance confirmation"],
        tips: ["For weighing/measuring instruments, ensure model/pattern approval complies with OIML (International Organization of Legal Metrology) standards"],
      },
      {
        title: "Ongoing Compliance Monitoring",
        description:
          "Maintain accurate records and ensure continued compliance with metrology standards.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["License renewal application (Form LM-2)", "Updated compliance records", "Stamping and verification certificates"],
        typicalTimeline: "Ongoing; renew 3 months before expiry",
        deliverables: ["Renewed license (Form LM-3)", "Compliance audit report"],
        tips: ["License renewal must be filed at least 3 months before expiry; stamping and verification by State Legal Metrology Office is mandatory for all approved instruments"],
      },
    ],
    importerSteps: [
      {
        title: "Import Compliance Assessment",
        description:
          "Assess imported product packaging against Indian metrology requirements.",
        icon: Target,
        phase: "Assessment",
        keyDocuments: ["Foreign product packaging details", "Indian labeling requirements checklist", "Bill of entry samples"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Compliance assessment report", "Required modifications list"],
        tips: ["Importer registration under Rule 19 of Legal Metrology (General) Rules 2011 requires a valid Trade License"],
      },
      {
        title: "Package Modification Guidance",
        description:
          "Guide necessary packaging and labeling modifications for compliance.",
        icon: Package,
        phase: "Preparation",
        keyDocuments: ["Current foreign packaging", "Required Indian declarations", "Translation documents"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Modified packaging specifications", "Compliant label templates"],
        tips: ["All declarations must be in Hindi and English as specified; sticker labels are acceptable for imported goods with prior approval"],
      },
      {
        title: "Registration for Importers",
        description:
          "Complete importer-specific LMPC registration requirements.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Importer registration application", "Address proof (lease agreement, electricity bill, NOC from property owner)", "ID proof of directors"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Importer registration certificate", "Portal login credentials"],
        tips: ["Address proof documents include lease agreement, sales deed, electricity bill, and NOC from property owner"],
      },
      {
        title: "Custom Label Requirements",
        description:
          "Ensure import labels meet all country of origin and importer declaration requirements.",
        icon: FileText,
        phase: "Review",
        keyDocuments: ["Country of origin declaration", "Importer name and address", "MRP in Indian Rupees", "Net quantity in metric units"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Final approved import labels", "Customs-ready documentation"],
        tips: ["Imported packaged goods must display the importer's name, address, and country of origin prominently; MRP must include all duties and taxes"],
      },
      {
        title: "Import Documentation",
        description:
          "Prepare and maintain all required import documentation for metrology compliance.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["Registration certificate copy", "Import invoices", "Bill of entry", "Packer registration (if applicable)"],
        typicalTimeline: "Ongoing",
        deliverables: ["Complete import compliance file", "Periodic audit reports"],
        tips: ["Wholesalers/distributors do not require Packer registration, but manufacturers, packers, importers, and marketers of pre-packaged commodities do"],
      },
    ],
  },
  {
    id: "iec",
    title: "Import Export Code (IEC)",
    tagline: "IEC registration and comprehensive support",
    description:
      "The Import Export Code (IEC) is a 10-digit registration issued by the Directorate General of Foreign Trade (DGFT) — mandatory for any business engaged in importing or exporting goods from India. The IEC is valid for a lifetime with no renewal requirement, though annual updates on the DGFT portal are required. We provide end-to-end IEC registration, modification, and compliance support.",
    image: iecImg,
    badge: "Lifetime Valid",
    manufacturerSteps: [
      {
        title: "IEC Application Preparation",
        description:
          "Confirm business is registered and has PAN, Aadhaar, and bank account details ready.",
        icon: Target,
        phase: "Assessment",
        keyDocuments: ["PAN card of entity", "Aadhaar of applicant", "Business registration certificate (GST/CIN)", "Bank account details"],
        typicalTimeline: "1 week",
        deliverables: ["Eligibility confirmation", "Application readiness checklist"],
        tips: ["Proprietorships, partnerships, LLPs, and companies are all eligible; ensure PAN is linked to the business entity"],
      },
      {
        title: "Documentation Compilation",
        description:
          "Gather required documents: business registration, bank certificate, ID proofs of partners/directors.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Bank certificate or cancelled cheque", "Address proof of business premises", "ID and address proof of all directors/partners", "Digital signature certificate"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Complete document set", "Digitally signed authorization"],
        tips: ["Bank certificate must be on the bank's letterhead with account details; passport-size photographs of the applicant are also required"],
      },
      {
        title: "DGFT Portal Filing",
        description:
          "Create account on DGFT portal and file IEC application with accurate business details.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Online application form (ANF 2A)", "DSC-signed submission", "Payment receipt (INR 500 government fee)"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["DGFT portal submission confirmation", "Application reference number"],
        tips: ["Register on the DGFT portal (dgft.gov.in); the application fee is INR 500 payable online"],
      },
      {
        title: "Certificate Obtainment",
        description:
          "Receive 10-digit IEC code, valid for lifetime with no renewal requirement.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["IEC certificate (10-digit code)", "DGFT approval letter"],
        typicalTimeline: "3–7 working days after filing",
        deliverables: ["IEC certificate (lifetime validity)", "DGFT registration confirmation"],
        tips: ["IEC is allotted within 3–7 working days; no renewal needed but annual update of details on DGFT portal is mandatory"],
      },
      {
        title: "Modification Support",
        description:
          "Assistance with IEC modifications for address changes, director updates, etc.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["Amendment application", "Updated business documents", "Board resolution (for company changes)"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Updated IEC certificate", "DGFT amendment confirmation"],
        tips: ["Modifications needed for: change of address, addition/removal of directors/partners, change of bank details, or change of business constitution"],
      },
    ],
    importerSteps: [
      {
        title: "IEC Code Registration",
        description:
          "Register for Import Export Code essential for import activities.",
        icon: Target,
        phase: "Assessment",
        keyDocuments: ["PAN card", "Business registration", "Aadhaar", "Bank account details"],
        typicalTimeline: "1 week",
        deliverables: ["IEC eligibility assessment", "Registration roadmap"],
        tips: ["IEC is mandatory before clearing any import consignment through Indian customs"],
      },
      {
        title: "Import Eligibility Verification",
        description:
          "Verify business eligibility and compliance requirements for importing goods.",
        icon: ShieldCheck,
        phase: "Preparation",
        keyDocuments: ["Product classification (HS code)", "DGFT ITC (HS) classification", "Restricted/prohibited item check"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Import eligibility report", "HS code classification"],
        tips: ["Restricted items require additional DGFT approval; prohibited items cannot be imported regardless of IEC"],
      },
      {
        title: "Customs Documentation",
        description:
          "Prepare customs-related documentation linked to IEC registration.",
        icon: FileText,
        phase: "Submission",
        keyDocuments: ["Bill of entry", "Commercial invoice", "Packing list", "Certificate of origin", "IEC reference"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Complete customs documentation package", "Import compliance checklist"],
        tips: ["Link IEC to ICEGATE (Indian Customs Electronic Gateway) for smooth electronic filing of bills of entry"],
      },
      {
        title: "License Activation",
        description:
          "Activate IEC with customs authorities for smooth import operations.",
        icon: Globe2,
        phase: "Review",
        keyDocuments: ["ICEGATE registration", "Customs broker appointment", "Bank authorization for duty payment"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Active IEC with customs", "ICEGATE registration confirmation"],
        tips: ["First-time importers should register on ICEGATE and appoint a licensed customs broker for clearance"],
      },
      {
        title: "Annual Compliance",
        description:
          "Maintain annual compliance and update IEC details as required.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["Annual update on DGFT portal", "Updated KYC documents", "Export obligation discharge (if applicable)"],
        typicalTimeline: "Annual; update by June 30 each year",
        deliverables: ["Updated IEC status", "Compliance certificate"],
        tips: ["Failure to file annual update may result in IEC deactivation; update is mandatory even if no import/export activity occurred"],
      },
    ],
  },
  {
    id: "epr",
    title: "Extended Producer Responsibility (EPR)",
    tagline: "EPR compliance and sustainability solutions",
    description:
      "The Central Pollution Control Board (CPCB) mandates Extended Producer Responsibility (EPR) authorization for all producers, importers, and brand owners dealing in plastic packaging, e-waste, or batteries. EPR authorization ensures responsible end-of-life management of products and packaging. We handle the complete EPR registration process — from applicability assessment and CPCB portal filing to target compliance tracking and annual return submissions.",
    image: eprImg,
    badge: "CPCB",
    manufacturerSteps: [
      {
        title: "EPR Assessment and Planning",
        description:
          "Determine if your products fall under plastic packaging EPR regulations.",
        icon: Leaf,
        phase: "Assessment",
        keyDocuments: ["Product/packaging details", "Plastic waste category identification", "Business registration (PAN, GST, CIN)"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["EPR applicability report", "Waste category classification"],
        tips: ["EPR applies to three categories: plastic packaging waste, e-waste (electrical/electronic equipment), and battery waste — each has different rules and forms"],
      },
      {
        title: "Registration with CPCB",
        description:
          "Register as producer on CPCB portal with business and product details.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["EPR application form (Form I/V/VI/VII depending on category)", "Environmental Protection Plan", "Proof of legal entity", "IEC certificate (for importers)"],
        typicalTimeline: "4–6 weeks",
        deliverables: ["CPCB application acknowledgement", "Application reference number"],
        tips: ["Submit through the CPCB online portal; plastic waste EPR uses Form I, e-waste uses Form V, battery waste uses Form VI/VII"],
      },
      {
        title: "Annual Return Filing",
        description:
          "Submit annual returns showing plastic waste collected and recycled/processed.",
        icon: FileText,
        phase: "Submission",
        keyDocuments: ["Annual return form", "Collection and recycling data", "Waste processing certificates", "Producer/brand owner details"],
        typicalTimeline: "2–4 weeks per filing",
        deliverables: ["Filed annual return", "CPCB acknowledgement"],
        tips: ["Annual returns must be submitted before the CPCB deadline to avoid penalties; PIBOs (Producers, Importers, Brand Owners) face action for late filing"],
      },
      {
        title: "Target Compliance Tracking",
        description:
          "Establish and track collection and recycling targets as per CPCB guidelines.",
        icon: Target,
        phase: "Review",
        keyDocuments: ["Collection target data", "Recycling/processing certificates", "Waste management agreements with recyclers"],
        typicalTimeline: "Ongoing",
        deliverables: ["Target achievement report", "Compliance dashboard"],
        tips: ["Collection and recycling targets increase year-on-year as per CPCB guidelines; maintain agreements with registered recyclers and waste processors"],
      },
      {
        title: "Certificate Management",
        description:
          "Receive and manage EPR certificates confirming environmental compliance.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["EPR authorization certificate", "Renewal application (for e-waste and battery categories)", "Updated compliance records"],
        typicalTimeline: "Plastic: lifetime; E-waste/Battery: renew every 5 years",
        deliverables: ["EPR authorization certificate", "Renewal confirmation"],
        tips: ["Plastic waste EPR is lifetime valid; e-waste and battery EPR certificates are valid for 5 years and must be renewed before expiry"],
      },
    ],
    importerSteps: [
      {
        title: "Import EPR Obligations",
        description:
          "Understand EPR obligations specific to imported products with plastic packaging.",
        icon: Leaf,
        phase: "Assessment",
        keyDocuments: ["Import product details", "Packaging material analysis", "IEC certificate", "Bill of materials"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["EPR obligation assessment", "Applicable waste categories"],
        tips: ["Importers of any product with plastic packaging, or of electronic/electrical equipment or batteries, are required to obtain EPR authorization"],
      },
      {
        title: "Producer Responsibility Setup",
        description:
          "Establish producer responsibility mechanisms for imported goods.",
        icon: UserCheck,
        phase: "Preparation",
        keyDocuments: ["Authorized person details (Aadhaar, PAN)", "Company documents (CIN, GST)", "Partnership deed (if applicable)"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["PRO (Producer Responsibility Organization) agreement", "Collection mechanism plan"],
        tips: ["Consider engaging a registered PRO to manage collection and channelization of waste on your behalf"],
      },
      {
        title: "Waste Management Planning",
        description:
          "Develop waste collection and recycling plans for imported packaging.",
        icon: RefreshCcw,
        phase: "Preparation",
        keyDocuments: ["Waste collection plan", "Recycler/dismantler agreements", "Processing targets", "Environmental impact assessment"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Comprehensive waste management plan", "Recycler network documentation"],
        tips: ["Establish agreements with CPCB/SPCB-registered recyclers before applying; this strengthens your application"],
      },
      {
        title: "CPCB Compliance",
        description:
          "Register and comply with CPCB requirements as an importer.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Completed application form", "All supporting documents", "DIC registration (if applicable)", "Covering letter"],
        typicalTimeline: "2–3 months for approval",
        deliverables: ["EPR authorization certificate from CPCB"],
        tips: ["Government charges vary by case; typical timeline is 2–3 months from complete submission"],
      },
      {
        title: "Reporting and Renewals",
        description:
          "Submit periodic reports and manage EPR certificate renewals.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["Annual compliance reports", "Updated collection/recycling data", "Renewal application (for e-waste/battery)"],
        typicalTimeline: "Annual reporting; renewal 6 months before expiry",
        deliverables: ["Annual compliance certificate", "Renewed EPR authorization"],
        tips: ["CPCB has strict timelines for annual reporting; late submissions can result in suspension of EPR authorization"],
      },
    ],
  },
  {
    id: "wholesale-license",
    title: "Wholesale License (20B/21B & MD42)",
    tagline: "Wholesale drug license for pharma & medical device businesses",
    description:
      "A wholesale drug license is issued by the State Licensing Authority (SLA) under the Drugs and Cosmetics Rules, permitting the sale, stocking, and distribution of drugs, biologicals, medical devices, and IVDs at wholesale level. Form 20B/21B covers drugs and medical devices, while Form MD42 is for medical devices only. The license is valid for lifetime with a retention fee every 5 years. We provide end-to-end support from premises setup to license obtainment and renewal management.",
    image: wholesaleLicenseImg,
    badge: "State Drug License",
    manufacturerSteps: [
      {
        title: "Determine License Type",
        description:
          "Identify whether you need Form 20B/21B (for pharmaceuticals/drugs and medical devices) or Form MD42 (for medical devices only) based on your product portfolio.",
        icon: Layers,
        phase: "Assessment",
        keyDocuments: ["Product portfolio assessment", "Form 20B/21B vs MD42 comparison", "Business registration documents"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["License type recommendation", "Regulatory pathway document"],
        tips: ["Form 20B/21B covers pharmaceuticals, drugs, biologicals, and medical devices; Form MD42 is exclusively for medical devices"],
      },
      {
        title: "Premises & Infrastructure Setup",
        description:
          "Ensure your storage premises meet the prescribed conditions including adequate space, ventilation, temperature control, and qualified pharmacist availability.",
        icon: Building2,
        phase: "Preparation",
        keyDocuments: ["Premises layout plan (minimum 10 sq. meters)", "Ventilation and temperature control records", "Refrigerator/AC invoices", "Ownership/lease documents"],
        typicalTimeline: "2–4 weeks",
        deliverables: ["Premises compliance report", "Infrastructure readiness certificate"],
        tips: ["Facility must meet State Master Development Plan criteria; minimum 10 sq. meters area with proper ventilation and temperature control"],
      },
      {
        title: "Documentation Compilation",
        description:
          "Prepare all required documents including proof of premises, pharmacist qualification certificates, site layout plans, and business registration details.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Director ID proofs (Aadhaar, PAN, passport)", "Registered pharmacist qualification certificate (B.Pharm + 1 year experience)", "Proof of premises ownership", "Electricity bill", "System-generated forms and affidavits"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Complete application dossier", "Pharmacist appointment letter"],
        tips: ["The registered pharmacist must have a graduate degree (B.Pharm) and minimum 1 year experience in dealing with drugs; alternatively, SSLC with 4 years experience"],
      },
      {
        title: "Application Filing with State Drug Authority",
        description:
          "Submit the wholesale license application to the State Drug Licensing Authority with prescribed fees and complete documentation.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Completed application form (Form 20B/21B or MD42)", "Government fee (INR 1,500 per license)", "Hard copy submission to SLA"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Application reference number", "Fee receipt", "Filing confirmation"],
        tips: ["Each state has its own portal (e.g., xlnIndia for Delhi, NiveshMitra for UP, InvestHaryana for Haryana); submit both online and hard copy"],
      },
      {
        title: "Premises Inspection",
        description:
          "Cooperate with the Drug Inspector's site inspection to verify premises compliance with storage and safety requirements.",
        icon: ShieldCheck,
        phase: "Review",
        keyDocuments: ["Site prepared for Drug Inspector visit", "Storage compliance documentation", "Temperature/cold chain records"],
        typicalTimeline: "2–4 weeks after filing",
        deliverables: ["Inspection report", "Compliance verification"],
        tips: ["Drug Inspector will verify premises for adequate storage, ventilation, temperature control, and availability of qualified pharmacist on-site"],
      },
      {
        title: "License Grant & Renewal Management",
        description:
          "Receive your wholesale license and set up timely renewal processes. Licenses are typically valid for 5 years.",
        icon: RefreshCcw,
        phase: "Approval",
        keyDocuments: ["Inspection clearance", "Approval letter from SLA"],
        typicalTimeline: "21 working days (Form 19)",
        deliverables: ["Wholesale drug license (lifetime validity)", "Retention fee schedule"],
        tips: ["License is valid for lifetime but retention fee of INR 1,500 must be submitted every 5 years; any change in constitution or premises requires a new application"],
      },
    ],
    importerSteps: [
      {
        title: "Assess Wholesale License Requirement",
        description:
          "Determine if your import license mandates a wholesale license (20B/21B for drugs & devices, MD42 for devices only) as a prerequisite.",
        icon: Target,
        phase: "Assessment",
        keyDocuments: ["Import license details", "Product classification (drugs vs devices)", "CDSCO registration certificate"],
        typicalTimeline: "1–2 weeks",
        deliverables: ["Requirement assessment report", "License type recommendation"],
        tips: ["Wholesale license is a mandatory prerequisite for most import license holders; same license covers drugs, biologicals, and medical devices"],
      },
      {
        title: "Appoint Qualified Person",
        description:
          "Engage a registered pharmacist or competent person as required by the State Drug Authority for wholesale operations.",
        icon: UserCheck,
        phase: "Preparation",
        keyDocuments: ["Registered pharmacist certificate", "B.Pharm degree + 1 year experience", "Employment agreement"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Pharmacist appointment confirmation", "Qualification verification"],
        tips: ["If no B.Pharm graduate available, a person with SSLC + 4 years drug dealing experience can serve as competent person"],
      },
      {
        title: "Prepare Premises Documentation",
        description:
          "Document storage facility details, cold chain capabilities (if needed), and compliance with Good Storage Practices.",
        icon: FileText,
        phase: "Preparation",
        keyDocuments: ["Lease agreement/ownership proof", "Facility layout (min. 10 sq. meters)", "Cold chain capability proof (if applicable)", "Electricity bill"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Complete premises dossier", "Good Storage Practices compliance report"],
        tips: ["Electric bill of the premises is mandatory; for DDA-allotted premises in Delhi, MCD conversion charge receipt is required"],
      },
      {
        title: "Submit Application to State Authority",
        description:
          "File the wholesale license application with the concerned State Drug Licensing Authority along with import license details.",
        icon: UploadCloud,
        phase: "Submission",
        keyDocuments: ["Application form", "Import license copy", "Government fee (INR 1,500)", "Hard copy submission"],
        typicalTimeline: "2–3 weeks",
        deliverables: ["Filing confirmation", "Application tracking number"],
        tips: ["Submit on the respective state portal and as hard copy to the State Licensing Authority simultaneously"],
      },
      {
        title: "Inspection & Compliance Verification",
        description:
          "Facilitate the Drug Inspector's visit for premises verification and ensure all conditions of the license are met.",
        icon: ShieldCheck,
        phase: "Review",
        keyDocuments: ["Premises ready for inspection", "Storage conditions documentation", "Pharmacist availability confirmation"],
        typicalTimeline: "2–4 weeks after filing",
        deliverables: ["Drug Inspector's inspection report", "Compliance clearance"],
        tips: ["Ensure the qualified person/pharmacist is present during inspection; all storage conditions must be demonstrably maintained"],
      },
      {
        title: "License Issuance & Ongoing Compliance",
        description:
          "Obtain the wholesale license, maintain records of all transactions, and ensure timely renewals before expiry.",
        icon: Globe2,
        phase: "Approval",
        keyDocuments: ["Approval from SLA", "Transaction record-keeping system"],
        typicalTimeline: "21 working days for Form 19",
        deliverables: ["Wholesale license (lifetime)", "Transaction record template"],
        tips: ["Maintain records of all wholesale transactions; wholesale license holders cannot sell drugs at retail level; retention fee due every 5 years"],
      },
    ],
  },
];

import ServicesOverview from "@/components/ServicesOverview";

const Services = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");

  // If no hash, show overview page
  if (!hash) {
    return <ServicesOverview />;
  }

  // If hash present, render the detail view
  return <ServiceDetail initialServiceId={hash} />;
};

type ServiceDetailProps = {
  initialServiceId: string;
};

const ServiceDetail = ({ initialServiceId }: ServiceDetailProps) => {
  const location = useLocation();
  const [activeServiceId, setActiveServiceId] = useState(
    serviceCatalog.some((s) => s.id === initialServiceId)
      ? initialServiceId
      : serviceCatalog[0]?.id ?? ""
  );
  const [selectedRole, setSelectedRole] = useState<"manufacturer" | "importer">("manufacturer");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isMobile = useIsMobile();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  // Handle URL hash changes for direct service linking
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && serviceCatalog.some((s) => s.id === hash)) {
      setActiveServiceId(hash);
      setActiveStepIndex(0);
    }
  }, [location.hash]);

  // Services that support both manufacturer and importer roles
  const dualRoleServices = ["medical-devices", "ivd", "wholesale-license"];

  const activeService = useMemo(
    () =>
      serviceCatalog.find((service) => service.id === activeServiceId) ??
      serviceCatalog[0],
    [activeServiceId]
  );

  // Check if current service supports both roles
  const hasDualRoles = dualRoleServices.includes(activeServiceId);

  // For non-dual-role services, always use manufacturer steps
  const effectiveRole = hasDualRoles ? selectedRole : "manufacturer";

  const activeSteps =
    effectiveRole === "manufacturer"
      ? activeService?.manufacturerSteps
      : activeService?.importerSteps;

  const activeStep = activeSteps?.[activeStepIndex] ?? activeSteps?.[0];

  const handleServiceChange = (value: string) => {
    setActiveServiceId(value);
    setActiveStepIndex(0);
    // Reset to manufacturer when switching to a single-role service
    if (!dualRoleServices.includes(value)) {
      setSelectedRole("manufacturer");
    }
    // Update URL hash for shareability
    window.history.replaceState(null, "", `#${value}`);
  };

  const handleRoleChange = (role: "manufacturer" | "importer") => {
    setSelectedRole(role);
    setActiveStepIndex(0);
  };

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
  };

  const handlePrevious = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeSteps && activeStepIndex < activeSteps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 lg:py-32"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService?.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={activeService?.image}
              alt={activeService?.title}
              className="w-full h-full object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>
        
        {/* Floating Elements */}
        <FloatingElements variant="services" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {activeService?.badge && (
                <motion.span
                  key={activeService.badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-white/80"
                  />
                  {activeService.badge}
                </motion.span>
              )}
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeService?.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="mb-6 text-4xl font-bold text-white lg:text-6xl"
              >
                {activeService?.title}
              </motion.h1>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={activeService?.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-xl lg:text-2xl text-white/90 mb-4"
              >
                {activeService?.tagline}
              </motion.p>
            </AnimatePresence>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80"
            >
              {activeService?.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop: Pill tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
          {serviceCatalog.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceChange(service.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeServiceId === service.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground border border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {service.title.split(" (")[0]}
              {service.badge && (
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    activeServiceId === service.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  {service.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown */}
        <div className="md:hidden mb-8">
          <Select value={activeServiceId} onValueChange={handleServiceChange}>
            <SelectTrigger className="w-full bg-card border-border">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {serviceCatalog.map((service) => (
                <SelectItem
                  key={service.id}
                  value={service.id}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {service.title}
                    {service.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Role Toggle */}
        <div
          ref={contentRef}
          className={cn(
            "transition-all duration-700",
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {hasDualRoles ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Choose Your Role
                </h2>
                <p className="text-muted-foreground">
                  Select whether you're a manufacturer or importer to see the specific process
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-10">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    variant={selectedRole === "manufacturer" ? "default" : "outline"}
                    onClick={() => handleRoleChange("manufacturer")}
                    size="lg"
                    className={cn(
                      "min-w-[160px] gap-2 transition-all duration-300",
                      selectedRole === "manufacturer" && "shadow-lg shadow-primary/25"
                    )}
                  >
                    <motion.span
                      animate={selectedRole === "manufacturer" ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Factory className="h-4 w-4" />
                    </motion.span>
                    Manufacturer
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    variant={selectedRole === "importer" ? "default" : "outline"}
                    onClick={() => handleRoleChange("importer")}
                    size="lg"
                    className={cn(
                      "min-w-[160px] gap-2 transition-all duration-300",
                      selectedRole === "importer" && "shadow-lg shadow-primary/25"
                    )}
                  >
                    <motion.span
                      animate={selectedRole === "importer" ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building2 className="h-4 w-4" />
                    </motion.span>
                    Importer
                  </Button>
                </motion.div>
              </div>
            </>
          ) : (
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Manufacturer Process
              </h2>
              <p className="text-muted-foreground">
                Follow the step-by-step registration process below
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Roadmap Timeline */}
      {activeSteps && activeStep && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <RoadmapTimeline
              totalSteps={activeSteps.length}
              activeStep={activeStepIndex}
              onStepClick={handleStepClick}
              stepTitles={activeSteps.map((s) => s.title)}
            />

            {/* Step Detail Card */}
            <div className="mt-10">
              <StepDetailCard
                stepNumber={activeStepIndex + 1}
                totalSteps={activeSteps.length}
                title={activeStep.title}
                description={activeStep.description}
                icon={activeStep.icon}
                serviceName={activeService?.title.split(" (")[0] ?? ""}
                serviceLink="/contact"
                keyDocuments={activeStep.keyDocuments}
                typicalTimeline={activeStep.typicalTimeline}
                deliverables={activeStep.deliverables}
                tips={activeStep.tips}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for a free consultation. Our experts will guide you through
              the {activeService?.title.split(" (")[0]} registration process.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
