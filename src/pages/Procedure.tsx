import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
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

type ProcedureStep = {
  title: string;
  description: string;
};

type ProcedureCategory = {
  id: string;
  title: string;
  steps: ProcedureStep[];
};

const procedureCatalog: ProcedureCategory[] = [
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
        description: "Determine if your IVD falls under regulated categories per CDSCO guidelines.",
      },
      {
        title: "Quality System Documentation",
        description: "Prepare ISO 13485 certification and quality management system documentation.",
      },
      {
        title: "Performance Evaluation",
        description: "Compile analytical and clinical performance data for your diagnostic product.",
      },
      {
        title: "Technical Dossier Preparation",
        description:
          "Prepare comprehensive technical file including manufacturing details and validation studies.",
      },
      {
        title: "CDSCO Submission",
        description: "Submit application through appropriate channels with all required documentation.",
      },
      {
        title: "Regulatory Assessment",
        description: "Respond to queries and provide additional information as requested by CDSCO.",
      },
      {
        title: "Certificate Issuance",
        description: "Receive approval certificate enabling commercial distribution of IVD products.",
      },
    ],
  },
  {
    id: "cosmetics",
    title: "Cosmetics Registration",
    steps: [
      {
        title: "Product Formulation Review",
        description: "Ensure formulation complies with BIS and CDSCO permitted ingredients list.",
      },
      {
        title: "Safety Assessment",
        description: "Conduct toxicological assessment and compile safety data for all ingredients.",
      },
      {
        title: "Manufacturing License",
        description: "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
      },
      {
        title: "Product Registration",
        description: "Submit online registration application with product details, formulation, and test reports.",
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
        description: "Receive registration certificate and commence commercial distribution.",
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
        description: "File registration application with concerned State Legal Metrology Department.",
      },
      {
        title: "Declaration Verification",
        description: "Submit declarations regarding net quantity, MRP, and consumer information compliance.",
      },
      {
        title: "Certificate Obtainment",
        description: "Receive LMPC registration certificate authorizing packaged commodity sale.",
      },
      {
        title: "Ongoing Compliance",
        description: "Maintain accurate records and ensure continued compliance with metrology standards.",
      },
    ],
  },
  {
    id: "iec",
    title: "Import Export Code (IEC)",
    steps: [
      {
        title: "Eligibility Verification",
        description: "Confirm business is registered and has PAN, Aadhaar, and bank account details.",
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
        description: "Pay applicable IEC registration fee through online payment gateway.",
      },
      {
        title: "Application Submission",
        description: "Submit completed application with all supporting documents for processing.",
      },
      {
        title: "IEC Code Issuance",
        description: "Receive 10-digit IEC code, valid for lifetime with no renewal requirement.",
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
        description: "Determine if your products fall under plastic packaging EPR regulations.",
      },
      {
        title: "Registration with CPCB",
        description: "Register as producer/importer on CPCB portal with business and product details.",
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
        description: "Submit annual returns showing plastic waste collected and recycled/processed.",
      },
      {
        title: "Certificate Obtainment",
        description: "Receive EPR certificates confirming compliance with environmental obligations.",
      },
    ],
  },
];

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

type StepPreviewProps = {
  step: ProcedureStep;
  index: number;
};

const StepPreview = ({ step, index }: StepPreviewProps) => {
  const Icon = iconSequence[index % iconSequence.length];
  const gradient = gradientPalette[index % gradientPalette.length];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-xl",
        gradient,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-6">
        <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          Step Preview
        </span>
        <Icon className="h-14 w-14 text-white drop-shadow-[0_18px_30px_hsla(209,53%,20%,0.35)]" />
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-snug">{step.title}</h3>
          <p className="text-sm leading-relaxed text-white/90">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

const glassPanel = "border border-white/10 bg-background/70 backdrop-blur";

const Procedure = () => {
  const [activeTab, setActiveTab] = useState(procedureCatalog[0]?.id ?? "");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isMobile = useIsMobile();

  const activeProcedure = useMemo(
    () => procedureCatalog.find((procedure) => procedure.id === activeTab) ?? procedureCatalog[0],
    [activeTab],
  );

  const activeStep = activeProcedure?.steps[activeStepIndex] ?? activeProcedure?.steps[0];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setActiveStepIndex(0);
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Process navigator
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">Regulatory Procedures</h1>
            <p className="text-xl text-muted-foreground">
              Understand the step-by-step procedures for compliance in various domains. Select a category below to see the detailed
              process and requirements for that regulatory pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-10 flex h-auto w-full flex-wrap justify-start gap-3 bg-transparent lg:justify-center">
            {procedureCatalog.map((proc) => (
              <TabsTrigger
                key={proc.id}
                value={proc.id}
                className={cn(
                  "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary",
                  "data-[state=active]:border-primary data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_20px_45px_-25px_hsla(209,53%,23%,0.6)]",
                )}
              >
                {proc.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {procedureCatalog.map((proc) => (
            <TabsContent key={proc.id} value={proc.id} className="focus:outline-none">
              <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="space-y-6">
                  <h2 className="text-center text-3xl font-bold text-foreground lg:text-left">{proc.title} Process</h2>
                  {proc.steps.map((step, index) => {
                    const isActive = activeProcedure?.id === proc.id && activeStepIndex === index;

                    return (
                      <Card
                        key={step.title}
                        onMouseEnter={() => setActiveStepIndex(index)}
                        onFocus={() => setActiveStepIndex(index)}
                        onClick={() => setActiveStepIndex(index)}
                        tabIndex={0}
                        className={cn(
                          "group relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
                          glassPanel,
                          isActive
                            ? "border-primary/70 shadow-[0_35px_120px_-60px_hsla(209,53%,23%,0.75)]"
                            : "hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_35px_120px_-70px_hsla(209,53%,23%,0.6)]",
                        )}
                      >
                        <CardContent className="space-y-5 p-6">
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-lg font-semibold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                              {index + 1}
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground lg:text-xl">{step.title}</h3>
                                  <p className="text-sm text-muted-foreground lg:text-base">{step.description}</p>
                                </div>
                                <CheckCircle
                                  className={cn(
                                    "mt-1 hidden h-5 w-5 flex-shrink-0 transition-opacity duration-300 lg:block",
                                    isActive ? "text-primary opacity-100" : "text-primary/30 opacity-0 group-hover:opacity-70",
                                  )}
                                />
                              </div>
                              {isMobile && isActive ? (
                                <div className="pt-4">
                                  <StepPreview step={step} index={index} />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="hidden lg:block">
                  <div className="sticky top-24 space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Step visualiser</p>
                    {activeStep ? (
                      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <StepPreview step={activeStep} index={activeStepIndex} />
                      </div>
                    ) : null}
                    <div className={cn("rounded-3xl p-6 shadow-inner", glassPanel)}>
                      <h3 className="text-lg font-semibold text-foreground">How it works</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Hover or tap on each card to highlight the milestone and reveal contextual guidance. On mobile, the preview expands inside the active step for a focused reading experience.
                      </p>
                    </div>
                  </div>
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
