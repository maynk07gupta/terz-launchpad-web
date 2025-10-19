import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Layers,
  Microscope,
  RefreshCcw,
  ShieldCheck,
  Target,
  UploadCloud,
  UserCheck,
} from "lucide-react";

type StepMedia = {
  gradient: string;
  icon: LucideIcon;
  label: string;
};

type ProcedureStep = {
  title: string;
  description: string;
  media: StepMedia;
};

type ProcedureType = {
  id: string;
  title: string;
  steps: ProcedureStep[];
};

const gradientPalette = [
  "from-sky-500 via-cyan-500 to-blue-600",
  "from-emerald-500 via-teal-500 to-green-600",
  "from-violet-500 via-purple-500 to-indigo-600",
  "from-amber-500 via-orange-500 to-rose-500",
  "from-pink-500 via-rose-500 to-purple-500",
  "from-blue-500 via-indigo-500 to-slate-600",
  "from-lime-500 via-emerald-500 to-green-600",
  "from-fuchsia-500 via-purple-500 to-blue-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-slate-500 via-blue-500 to-emerald-500",
];

const iconSequence: LucideIcon[] = [
  Layers,
  UserCheck,
  FileText,
  UploadCloud,
  ClipboardCheck,
  ShieldCheck,
  Globe2,
  RefreshCcw,
  Microscope,
  Target,
];

const rawProcedures: Array<{
  id: string;
  title: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}> = [
  {
    id: "medical-devices",
    title: "Medical Devices Registration",
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

const procedures: ProcedureType[] = rawProcedures.map((procedure) => ({
  ...procedure,
  steps: procedure.steps.map((step, index) => ({
    ...step,
    media: {
      label: step.title,
      gradient: gradientPalette[index % gradientPalette.length],
      icon: iconSequence[index % iconSequence.length],
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
  })),
}));

type StepPreviewProps = {
  media?: StepMedia;
  highlight?: boolean;
};

const StepPreview = ({ media, highlight = false }: StepPreviewProps) => {
  if (!media) {
    return null;
  }

  const Icon = media.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-lg transition-all duration-500 ease-out",
        "bg-gradient-to-br",
        media.gradient,
        highlight ? "scale-100 opacity-100" : "scale-[0.98] opacity-90",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-6">
        <span className="inline-flex max-w-xs items-center justify-start rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          <span className="line-clamp-1">{media.label}</span>
        </span>
        <Icon className="h-16 w-16 text-white drop-shadow-[0_18px_30px_rgba(15,23,42,0.35)]" />
        <p className="text-sm text-white/80">
          Explore each milestone visually—hover, focus, or scroll through the journey to uncover what happens next.
        </p>
      </div>
    </div>
  );
};

const Procedure = () => {
  const [activeTab, setActiveTab] = useState(procedures[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setActiveStepIndex(0);
    const viewport = scrollRefs.current[activeTab]?.querySelector<HTMLElement>(
      "[data-radix-scroll-area-viewport]",
    );
    viewport?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  useEffect(() => {
    const container = scrollRefs.current[activeTab];
    if (!container) {
      return;
    }

    const viewport = container.querySelector<HTMLElement>("[data-radix-scroll-area-viewport]");
    if (!viewport) {
      return;
    }

    const stepNodes = viewport.querySelectorAll<HTMLElement>(`[data-procedure-step="${activeTab}"]`);
    if (!stepNodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            index: Number(entry.target.getAttribute("data-step-index")),
            entry,
          }))
          .filter(({ index }) => !Number.isNaN(index))
          .sort((a, b) => a.index - b.index);

        if (visibleEntries.length > 0) {
          const topMostIndex = visibleEntries[0].index;
          setActiveStepIndex((current) => (current === topMostIndex ? current : topMostIndex));
        }
      },
      {
        root: viewport,
        threshold: 0.45,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    stepNodes.forEach((node) => observer.observe(node));

    return () => {
      stepNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, [activeTab]);

  const activeProcedure = procedures.find((procedure) => procedure.id === activeTab) ?? procedures[0];
  const safeStepIndex = Math.min(activeStepIndex, activeProcedure.steps.length - 1);
  const previewMedia = activeProcedure.steps[safeStepIndex]?.media;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">Regulatory Procedures</h1>
            <p className="text-xl text-muted-foreground">
              Understand the step-by-step procedures for compliance in various domains. Select a category below to see the
              detailed process and requirements for that regulatory pathway.
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
              <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div>
                  <h2 className="mb-6 text-center text-3xl font-bold text-foreground lg:text-left">
                    {proc.title} Process
                  </h2>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-12 bg-gradient-to-b from-background via-background/80 to-transparent lg:block" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-12 bg-gradient-to-t from-background via-background/80 to-transparent lg:block" />
                    <ScrollArea
                      ref={(node) => {
                        scrollRefs.current[proc.id] = node;
                      }}
                      className="lg:max-h-[70vh]"
                    >
                      <div className="relative space-y-6 pr-1 lg:pr-8">
                        <span className="pointer-events-none absolute left-10 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent lg:block" />
                        {proc.steps.map((step, index) => {
                          const isActive = proc.id === activeTab && index === safeStepIndex;
                          const isLast = index === proc.steps.length - 1;

                          return (
                            <Card
                              key={step.title}
                              data-procedure-step={proc.id}
                              data-step-index={index}
                              onMouseEnter={() => setActiveStepIndex(index)}
                              onFocus={() => setActiveStepIndex(index)}
                              onClick={() => setActiveStepIndex(index)}
                              tabIndex={0}
                              className={cn(
                                "group relative overflow-hidden border border-border/50 bg-background/80 backdrop-blur transition-all duration-300",
                                isActive
                                  ? "border-primary shadow-lg shadow-primary/10"
                                  : "hover:border-primary/60 hover:bg-background",
                              )}
                            >
                              {!isLast && (
                                <span className="pointer-events-none absolute left-10 top-full hidden h-8 w-px bg-gradient-to-b from-primary/30 to-transparent lg:block" />
                              )}
                              <CardContent className="space-y-5 p-6">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
                                  <div className="relative">
                                    <div
                                      className={cn(
                                        "flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold transition-all duration-300",
                                        isActive
                                          ? "bg-primary text-primary-foreground shadow-[0_18px_36px_rgba(59,130,246,0.35)]"
                                          : "bg-primary/10 text-primary",
                                      )}
                                    >
                                      {index + 1}
                                    </div>
                                  </div>
                                  <div className="flex-1 space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                      <div>
                                        <h3 className="text-lg font-semibold text-foreground lg:text-xl">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground lg:text-base">{step.description}</p>
                                      </div>
                                      <CheckCircle2
                                        className={cn(
                                          "mt-1 hidden h-5 w-5 flex-shrink-0 transition-opacity duration-300 lg:block",
                                          isActive
                                            ? "text-primary opacity-100"
                                            : "text-primary/30 opacity-0 group-hover:opacity-80",
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="lg:hidden">
                                  <StepPreview media={step.media} />
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="sticky top-24 space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Interactive Visual</p>
                    <StepPreview media={previewMedia} highlight />
                    <div className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-inner">
                      <h3 className="text-lg font-semibold text-foreground">Scroll the journey</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Use the animated timeline to align teams on responsibilities and unlock a richer understanding of
                        every milestone across the compliance lifecycle.
                      </p>
                    </div>
                  </div>
              <div className="max-w-5xl mx-auto">
                {/* Hero Image Section */}
                <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl group">
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                      <div className="p-8 w-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
                          {proc.title} Process
                        </h2>
                        <p className="text-white/90 text-lg">
                          Step-by-step guide to ensure compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Steps Section */}
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

      {/* CTA */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Need Help with the Process?</h2>
            <p className="mb-6 text-muted-foreground">
              Let our experts guide you through each step. We handle the complexity so you can focus on your business.
            </p>
            <Button size="lg">Contact Us for Assistance</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procedure;
