import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import StepDetailCard from "@/components/StepDetailCard";
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
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProcedureStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  phase: string;
  // Placeholder content to be filled later
  keyDocuments?: string[];
  typicalTimeline?: string;
  deliverables?: string[];
  tips?: string[];
};

type ProcedureCategory = {
  id: string;
  title: string;
  serviceLink: string;
  badge?: string;
  steps: ProcedureStep[];
};

const procedureCatalog: ProcedureCategory[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    serviceLink: "/services/medical-devices",
    badge: "CDSCO",
    steps: [
      {
        title: "Determine Device Classification",
        description:
          "Classify your device under CDSCO categories (Class A, B, C, or D) based on risk level and intended use.",
        icon: Layers,
        phase: "Assessment",
      },
      {
        title: "Appoint Indian Authorized Agent",
        description:
          "Foreign manufacturers must designate an authorized representative in India for liaison with CDSCO.",
        icon: UserCheck,
        phase: "Preparation",
      },
      {
        title: "Prepare Documentation",
        description:
          "Compile technical file including device description, quality certificates, clinical data, and labeling information.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Submit Application via OSMD Portal",
        description:
          "File application through Online Submission of Medical Devices portal with all required documents and fees.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Regulatory Review and Clinical Evaluation",
        description:
          "CDSCO reviews submission, may request additional data or clinical evaluation for higher-risk devices.",
        icon: Microscope,
        phase: "Review",
      },
      {
        title: "Facility Inspection",
        description:
          "Manufacturing facility inspection may be conducted for certain device classes to verify quality systems.",
        icon: ShieldCheck,
        phase: "Review",
      },
      {
        title: "Obtain Registration Certificate",
        description:
          "Upon approval, receive registration certificate valid for 5 years, enabling legal marketing in India.",
        icon: Globe2,
        phase: "Approval",
      },
      {
        title: "Post-Market Surveillance and Renewal",
        description:
          "Maintain vigilance reporting, submit periodic safety updates, and renew registration before expiry.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    serviceLink: "/services/ivd",
    badge: "ISO 13485",
    steps: [
      {
        title: "IVD Classification",
        description:
          "Determine if your IVD falls under regulated categories per CDSCO guidelines.",
        icon: Layers,
        phase: "Assessment",
      },
      {
        title: "Quality System Documentation",
        description:
          "Prepare ISO 13485 certification and quality management system documentation.",
        icon: ShieldCheck,
        phase: "Preparation",
      },
      {
        title: "Performance Evaluation",
        description:
          "Compile analytical and clinical performance data for your diagnostic product.",
        icon: Activity,
        phase: "Preparation",
      },
      {
        title: "Technical Dossier Preparation",
        description:
          "Prepare comprehensive technical file including manufacturing details and validation studies.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "CDSCO Submission",
        description:
          "Submit application through appropriate channels with all required documentation.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Regulatory Assessment",
        description:
          "Respond to queries and provide additional information as requested by CDSCO.",
        icon: Microscope,
        phase: "Review",
      },
      {
        title: "Certificate Issuance",
        description:
          "Receive approval certificate enabling commercial distribution of IVD products.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    serviceLink: "/services/cosmetics",
    badge: "BIS",
    steps: [
      {
        title: "Product Formulation Review",
        description:
          "Ensure formulation complies with BIS and CDSCO permitted ingredients list.",
        icon: Beaker,
        phase: "Assessment",
      },
      {
        title: "Safety Assessment",
        description:
          "Conduct toxicological assessment and compile safety data for all ingredients.",
        icon: ShieldCheck,
        phase: "Assessment",
      },
      {
        title: "Manufacturing License",
        description:
          "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Product Registration",
        description:
          "Submit online registration application with product details, formulation, and test reports.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Label Compliance",
        description:
          "Ensure labels meet all regulatory requirements including ingredient declaration and warnings.",
        icon: Package,
        phase: "Review",
      },
      {
        title: "Import License (if applicable)",
        description:
          "Obtain import registration for foreign-manufactured products with Indian agent details.",
        icon: Truck,
        phase: "Review",
      },
      {
        title: "Approval and Market Launch",
        description:
          "Receive registration certificate and commence commercial distribution.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
  },
  {
    id: "lmpc",
    title: "Legal Metrology (LMPC)",
    serviceLink: "/services/lmpc",
    badge: "State-Level",
    steps: [
      {
        title: "Packaging Compliance Audit",
        description:
          "Review existing packaging against Legal Metrology (Packaged Commodities) Rules requirements.",
        icon: Package,
        phase: "Assessment",
      },
      {
        title: "Label Design Review",
        description:
          "Ensure labels include all mandatory declarations: quantity, price, manufacturer details, country of origin.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "LMPC Registration Filing",
        description:
          "File registration application with concerned State Legal Metrology Department.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Declaration Verification",
        description:
          "Submit declarations regarding net quantity, MRP, and consumer information compliance.",
        icon: Scale,
        phase: "Review",
      },
      {
        title: "Certificate Obtainment",
        description:
          "Receive LMPC registration certificate authorizing packaged commodity sale.",
        icon: Globe2,
        phase: "Approval",
      },
      {
        title: "Ongoing Compliance",
        description:
          "Maintain accurate records and ensure continued compliance with metrology standards.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "iec",
    title: "Import Export Code (IEC)",
    serviceLink: "/services/iec",
    badge: "Lifetime Valid",
    steps: [
      {
        title: "Eligibility Verification",
        description:
          "Confirm business is registered and has PAN, Aadhaar, and bank account details.",
        icon: Target,
        phase: "Assessment",
      },
      {
        title: "Document Compilation",
        description:
          "Gather required documents: business registration, bank certificate, ID proofs of partners/directors.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "DGFT Portal Registration",
        description:
          "Create account on DGFT portal and fill IEC application form with accurate business details.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Fee Payment",
        description:
          "Pay applicable IEC registration fee through online payment gateway.",
        icon: Scale,
        phase: "Submission",
      },
      {
        title: "Application Submission",
        description:
          "Submit completed application with all supporting documents for processing.",
        icon: ShieldCheck,
        phase: "Review",
      },
      {
        title: "IEC Code Issuance",
        description:
          "Receive 10-digit IEC code, valid for lifetime with no renewal requirement.",
        icon: Globe2,
        phase: "Approval",
      },
      {
        title: "Customs and Bank Registration",
        description:
          "Update IEC details with customs authorities and bank for smooth import/export transactions.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "epr",
    title: "Extended Producer Responsibility",
    serviceLink: "/services/epr",
    badge: "CPCB",
    steps: [
      {
        title: "EPR Obligation Assessment",
        description:
          "Determine if your products fall under plastic packaging EPR regulations.",
        icon: Leaf,
        phase: "Assessment",
      },
      {
        title: "Registration with CPCB",
        description:
          "Register as producer/importer on CPCB portal with business and product details.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "EPR Plan Submission",
        description:
          "Submit Extended Producer Responsibility plan detailing plastic waste management approach.",
        icon: FileText,
        phase: "Submission",
      },
      {
        title: "Target Setting",
        description:
          "Establish collection and recycling targets as per CPCB guidelines for your product category.",
        icon: Target,
        phase: "Review",
      },
      {
        title: "Implementation",
        description:
          "Execute EPR plan through collection mechanisms, PRO partnerships, or own recycling systems.",
        icon: RefreshCcw,
        phase: "Review",
      },
      {
        title: "Annual Return Filing",
        description:
          "Submit annual returns showing plastic waste collected and recycled/processed.",
        icon: Scale,
        phase: "Approval",
      },
      {
        title: "Certificate Obtainment",
        description:
          "Receive EPR certificates confirming compliance with environmental obligations.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
  },
];

const Procedure = () => {
  const [activeTab, setActiveTab] = useState(procedureCatalog[0]?.id ?? "");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isMobile = useIsMobile();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const activeProcedure = useMemo(
    () =>
      procedureCatalog.find((procedure) => procedure.id === activeTab) ??
      procedureCatalog[0],
    [activeTab]
  );

  const activeStep =
    activeProcedure?.steps[activeStepIndex] ?? activeProcedure?.steps[0];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
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
    if (activeProcedure && activeStepIndex < activeProcedure.steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pb-12 pt-20 lg:pb-16 lg:pt-28"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "mx-auto max-w-3xl text-center transition-all duration-700",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Step-by-Step Guide
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
              Regulatory Procedures
            </h1>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Navigate the compliance journey with our visual roadmaps. Select a
              service to explore the complete regulatory pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Pill tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
          {procedureCatalog.map((proc) => (
            <button
              key={proc.id}
              onClick={() => handleTabChange(proc.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeTab === proc.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground border border-border hover:border-primary/40 hover:text-primary"
              )}
            >
              {proc.title}
              {proc.badge && (
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    activeTab === proc.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  {proc.badge}
                </span>
              )}
              <span
                className={cn(
                  "text-xs",
                  activeTab === proc.id
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                )}
              >
                ({proc.steps.length} steps)
              </span>
            </button>
          ))}
        </div>

        {/* Mobile: Dropdown */}
        <div className="md:hidden mb-8">
          <Select value={activeTab} onValueChange={handleTabChange}>
            <SelectTrigger className="w-full bg-background border-primary/20">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              {procedureCatalog.map((proc) => (
                <SelectItem key={proc.id} value={proc.id}>
                  <div className="flex items-center gap-2">
                    {proc.title}
                    <span className="text-xs text-muted-foreground">
                      ({proc.steps.length} steps)
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Roadmap Content */}
      <section
        ref={contentRef}
        className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div
          className={cn(
            "mx-auto max-w-4xl transition-all duration-700 delay-200",
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {/* Service Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              {activeProcedure?.title} Process
            </h2>
            {activeProcedure?.badge && (
              <span className="mt-2 inline-block text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                {activeProcedure.badge}
              </span>
            )}
          </div>

          {/* Timeline */}
          <div className="mb-8">
            <RoadmapTimeline
              totalSteps={activeProcedure?.steps.length ?? 0}
              activeStep={activeStepIndex}
              onStepClick={handleStepClick}
              stepTitles={activeProcedure?.steps.map((s) => s.title) ?? []}
            />
          </div>

          {/* Step Detail Card */}
          {activeStep && activeProcedure && (
            <StepDetailCard
              stepNumber={activeStepIndex + 1}
              totalSteps={activeProcedure.steps.length}
              title={activeStep.title}
              description={activeStep.description}
              icon={activeStep.icon}
              serviceName={activeProcedure.title}
              serviceLink={activeProcedure.serviceLink}
              keyDocuments={activeStep.keyDocuments}
              typicalTimeline={activeStep.typicalTimeline}
              deliverables={activeStep.deliverables}
              tips={activeStep.tips}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Procedure;
