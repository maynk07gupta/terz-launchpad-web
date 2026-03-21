export interface SearchEntry {
  title: string;
  content: string;
  path: string;
  section?: string;
}

export const searchIndex: SearchEntry[] = [
  // Home
  {
    title: "Home",
    content:
      "Terz Compliance regulatory compliance services India medical devices IVD cosmetics legal metrology import export EPR wholesale license CDSCO BIS FSSAI trusted by manufacturers importers",
    path: "/",
  },

  // Services overview
  {
    title: "Services Overview",
    content:
      "Regulatory compliance services medical devices IVD cosmetics legal metrology import export code EPR extended producer responsibility wholesale license registration certification",
    path: "/services",
  },

  // Medical Devices
  {
    title: "Medical Devices",
    content:
      "Medical device registration India CDSCO SLA Class A B C D risk classification MDR 2017 import license manufacturing license Form 40 Form 41 MD-9 MD-14 MD-15 clinical investigation notified body quality management system ISO 13485 regulatory approval",
    path: "/services#medical-devices",
    section: "Services",
  },

  // IVD
  {
    title: "In-Vitro Diagnostics (IVD)",
    content:
      "IVD in vitro diagnostics registration India CDSCO SLA Class A B C D risk classification IVDR 2017 import license manufacturing license notified IVD types blood grouping HIV HBsAg pregnancy test diagnostic kits reagents Form 40 Form 41 quality management",
    path: "/services#ivd",
    section: "Services",
  },

  // Cosmetics
  {
    title: "Cosmetics",
    content:
      "Cosmetics registration India CDSCO import license manufacturing license COS-2 cosmetic rules 2020 drug and cosmetic act labelling requirements product categories skin care hair care perfume soap toothpaste",
    path: "/services#cosmetics",
    section: "Services",
  },

  // Legal Metrology
  {
    title: "Legal Metrology (LMPC)",
    content:
      "Legal metrology packaged commodity LMPC model approval weights measures Act 2009 Rules 2011 declarations labelling net quantity MRP manufacturer packer importer controller legal metrology department",
    path: "/services#lmpc",
    section: "Services",
  },

  // IEC
  {
    title: "Import Export Code (IEC)",
    content:
      "Import export code IEC registration DGFT Directorate General Foreign Trade customs clearance international trade export promotion import documentation PAN based Aayaat Niryaat form",
    path: "/services#iec",
    section: "Services",
  },

  // EPR
  {
    title: "EPR - Extended Producer Responsibility",
    content:
      "EPR extended producer responsibility CPCB Central Pollution Control Board plastic waste e-waste battery waste registration compliance target collection recycling producer importer brand owner",
    path: "/services#epr",
    section: "Services",
  },

  // Wholesale License
  {
    title: "Wholesale License",
    content:
      "Wholesale drug license Form 20B Form 21B drug and cosmetic act state drug controller wholesale distribution pharmaceutical drugs storage conditions qualified person premises inspection",
    path: "/services#wholesale-license",
    section: "Services",
  },

  // Resources
  {
    title: "Resources",
    content:
      "Resources knowledge center news articles blog posts regulatory updates industry insights compliance guides latest developments medical device IVD cosmetics legal metrology",
    path: "/resources",
  },

  // About
  {
    title: "About Us",
    content:
      "About Terz Compliance regulatory consultancy team experts mission vision values experience compliance consulting India manufacturers importers trusted partner client testimonials",
    path: "/about",
  },

  // Contact
  {
    title: "Contact Us",
    content:
      "Contact Terz Compliance get in touch consultation regulatory services email phone WhatsApp schedule meeting enquiry support",
    path: "/contact",
  },

  // Privacy
  {
    title: "Privacy Policy",
    content:
      "Privacy policy data protection information collection personal data security rights cookies third party sharing GDPR compliance",
    path: "/privacy",
  },

  // Terms
  {
    title: "Terms & Conditions",
    content:
      "Terms conditions service agreement client responsibilities fees payment liability confidentiality intellectual property termination governing law",
    path: "/terms",
  },
];
