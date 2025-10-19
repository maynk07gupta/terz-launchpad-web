import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import marketEntryImg from "@/assets/market-entry.jpg";

const ProcedureStep = ({ step, index }: { step: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">
                  {index + 1}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
            <CheckCircle className="h-6 w-6 text-primary/30 flex-shrink-0 group-hover:text-primary group-hover:scale-125 transition-all duration-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Procedure = () => {
  const procedures = [
    {
      id: "medical-devices",
      title: "Medical Devices Registration",
      image: medicalDevicesImg,
      steps: [
        {
          title: "Determine Device Classification",
          description:
            "Classify your device under CDSCO categories (Class A, B, C, or D) based on risk level and intended use.",
        },
        {
          title: "Appoint Indian Authorized Agent",
          description:
            "Foreign manufacturers must designate an authorized representative in India for liaison with CDSCO.",
        },
        {
          title: "Prepare Documentation",
          description:
            "Compile technical file including device description, quality certificates, clinical data, and labeling information.",
        },
        {
          title: "Submit Application via OSMD Portal",
          description:
            "File application through Online Submission of Medical Devices portal with all required documents and fees.",
        },
        {
          title: "Regulatory Review and Clinical Evaluation",
          description:
            "CDSCO reviews submission, may request additional data or clinical evaluation for higher-risk devices.",
        },
        {
          title: "Facility Inspection",
          description:
            "Manufacturing facility inspection may be conducted for certain device classes to verify quality systems.",
        },
        {
          title: "Obtain Registration Certificate",
          description:
            "Upon approval, receive registration certificate valid for 5 years, enabling legal marketing in India.",
        },
        {
          title: "Post-Market Surveillance and Renewal",
          description:
            "Maintain vigilance reporting, submit periodic safety updates, and renew registration before expiry.",
        },
      ],
    },
    {
      id: "ivd",
      title: "In-Vitro Diagnostics",
      image: ivdImg,
      steps: [
        {
          title: "IVD Classification",
          description:
            "Determine if your IVD falls under regulated categories per CDSCO guidelines.",
        },
        {
          title: "Quality System Documentation",
          description:
            "Prepare ISO 13485 certification and quality management system documentation.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Compile analytical and clinical performance data for your diagnostic product.",
        },
        {
          title: "Technical Dossier Preparation",
          description:
            "Prepare comprehensive technical file including manufacturing details and validation studies.",
        },
        {
          title: "CDSCO Submission",
          description:
            "Submit application through appropriate channels with all required documentation.",
        },
        {
          title: "Regulatory Assessment",
          description:
            "Respond to queries and provide additional information as requested by CDSCO.",
        },
        {
          title: "Certificate Issuance",
          description:
            "Receive approval certificate enabling commercial distribution of IVD products.",
        },
      ],
    },
    {
      id: "cosmetics",
      title: "Cosmetics Registration",
      image: cosmeticsImg,
      steps: [
        {
          title: "Product Formulation Review",
          description:
            "Ensure formulation complies with BIS and CDSCO permitted ingredients list.",
        },
        {
          title: "Safety Assessment",
          description:
            "Conduct toxicological assessment and compile safety data for all ingredients.",
        },
        {
          title: "Manufacturing License",
          description:
            "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
        },
        {
          title: "Product Registration",
          description:
            "Submit online registration application with product details, formulation, and test reports.",
        },
        {
          title: "Label Compliance",
          description:
            "Ensure labels meet all regulatory requirements including ingredient declaration and warnings.",
        },
        {
          title: "Import License (if applicable)",
          description:
            "Obtain import registration for foreign-manufactured products with Indian agent details.",
        },
        {
          title: "Approval and Market Launch",
          description:
            "Receive registration certificate and commence commercial distribution.",
        },
      ],
    },
    {
      id: "lmpc",
      title: "Legal Metrology (LMPC)",
      image: lmpcImg,
      steps: [
        {
          title: "Packaging Compliance Audit",
          description:
            "Review existing packaging against Legal Metrology (Packaged Commodities) Rules requirements.",
        },
        {
          title: "Label Design Review",
          description:
            "Ensure labels include all mandatory declarations: quantity, price, manufacturer details, country of origin.",
        },
        {
          title: "LMPC Registration Filing",
          description:
            "File registration application with concerned State Legal Metrology Department.",
        },
        {
          title: "Declaration Verification",
          description:
            "Submit declarations regarding net quantity, MRP, and consumer information compliance.",
        },
        {
          title: "Certificate Obtainment",
          description:
            "Receive LMPC registration certificate authorizing packaged commodity sale.",
        },
        {
          title: "Ongoing Compliance",
          description:
            "Maintain accurate records and ensure continued compliance with metrology standards.",
        },
      ],
    },
    {
      id: "iec",
      title: "Import Export Code (IEC)",
      image: iecImg,
      steps: [
        {
          title: "Eligibility Verification",
          description:
            "Confirm business is registered and has PAN, Aadhaar, and bank account details.",
        },
        {
          title: "Document Compilation",
          description:
            "Gather required documents: business registration, bank certificate, ID proofs of partners/directors.",
        },
        {
          title: "DGFT Portal Registration",
          description:
            "Create account on DGFT portal and fill IEC application form with accurate business details.",
        },
        {
          title: "Fee Payment",
          description:
            "Pay applicable IEC registration fee through online payment gateway.",
        },
        {
          title: "Application Submission",
          description:
            "Submit completed application with all supporting documents for processing.",
        },
        {
          title: "IEC Code Issuance",
          description:
            "Receive 10-digit IEC code, valid for lifetime with no renewal requirement.",
        },
        {
          title: "Customs and Bank Registration",
          description:
            "Update IEC details with customs authorities and bank for smooth import/export transactions.",
        },
      ],
    },
    {
      id: "epr",
      title: "Extended Producer Responsibility (EPR)",
      image: eprImg,
      steps: [
        {
          title: "EPR Obligation Assessment",
          description:
            "Determine if your products fall under plastic packaging EPR regulations.",
        },
        {
          title: "Registration with CPCB",
          description:
            "Register as producer/importer on CPCB portal with business and product details.",
        },
        {
          title: "EPR Plan Submission",
          description:
            "Submit Extended Producer Responsibility plan detailing plastic waste management approach.",
        },
        {
          title: "Target Setting",
          description:
            "Establish collection and recycling targets as per CPCB guidelines for your product category.",
        },
        {
          title: "Implementation",
          description:
            "Execute EPR plan through collection mechanisms, PRO partnerships, or own recycling systems.",
        },
        {
          title: "Annual Return Filing",
          description:
            "Submit annual returns showing plastic waste collected and recycled/processed.",
        },
        {
          title: "Certificate Obtainment",
          description:
            "Receive EPR certificates confirming compliance with environmental obligations.",
        },
      ],
    },
    {
      id: "market-entry",
      title: "India Market Entry",
      image: marketEntryImg,
      steps: [
        {
          title: "Market Feasibility Study",
          description:
            "Assess regulatory requirements, market potential, and compliance costs for your product category.",
        },
        {
          title: "Regulatory Roadmap Development",
          description:
            "Create comprehensive strategy identifying all licenses and approvals needed for market entry.",
        },
        {
          title: "Multi-License Coordination",
          description:
            "Simultaneously process multiple applications (IEC, product registration, EPR, etc.) for efficient timeline.",
        },
        {
          title: "Authorized Representative Setup",
          description:
            "Establish Indian legal entity or appoint authorized agents as required by regulations.",
        },
        {
          title: "Product Registration",
          description:
            "Complete all product-specific registrations with relevant authorities (CDSCO, FSSAI, etc.).",
        },
        {
          title: "Import Clearance Support",
          description:
            "Facilitate first import with customs documentation, duty calculation, and clearance coordination.",
        },
        {
          title: "Distribution Network Setup",
          description:
            "Establish compliant distribution channels and ensure dealer/distributor licensing if required.",
        },
        {
          title: "Launch and Ongoing Compliance",
          description:
            "Support commercial launch and provide continuous compliance monitoring and regulatory updates.",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(procedures[0].id);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const activeProcedure = procedures.find((proc) => proc.id === activeTab) || procedures[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
              Regulatory Procedures
            </h1>
            <p className="text-xl text-muted-foreground">
              Understand the step-by-step procedures for compliance in various domains. 
              Select a category below to see the detailed process and requirements for that regulatory pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Content */}
      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-10 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent lg:justify-center">
            {procedures.map((proc) => (
              <TabsTrigger
                key={proc.id}
                value={proc.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {proc.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {procedures.map((proc) => (
            <TabsContent key={proc.id} value={proc.id}>
              <div className="mx-auto max-w-6xl">
                {/* Hero Image */}
                <div
                  ref={heroRef}
                  className={`mb-12 overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${
                    heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden group">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {proc.title}
                      </h2>
                      <p className="text-white/90 text-lg">
                        {proc.steps.length} steps to compliance
                      </p>
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                  {proc.steps.map((step, index) => (
                    <ProcedureStep key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default Procedure;
