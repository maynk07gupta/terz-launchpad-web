import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Layers,
  Microscope,
  ShieldCheck,
  Target,
  UploadCloud,
  UserCheck,
} from "lucide-react";

const gradients = [
  "from-sky-500 via-cyan-500 to-blue-600",
  "from-emerald-500 via-teal-500 to-green-600",
  "from-violet-500 via-purple-500 to-indigo-600",
  "from-amber-500 via-orange-500 to-rose-500",
  "from-pink-500 via-rose-500 to-purple-500",
  "from-blue-500 via-indigo-500 to-slate-600",
];

const icons: LucideIcon[] = [
  Layers,
  UserCheck,
  FileText,
  UploadCloud,
  ClipboardCheck,
  ShieldCheck,
  Globe2,
  Microscope,
  Target,
];

type StepVisual = {
  gradient: string;
  icon: LucideIcon;
  caption: string;
};

type ProcedureStep = {
  title: string;
  description: string;
  visual: StepVisual;
};

type ProcedureType = {
  id: string;
  title: string;
  steps: ProcedureStep[];
};

const baseProcedures: Array<{
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
        description: "Prepare comprehensive technical file including manufacturing details and validation studies.",
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
        description:
          "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
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
        description: "Obtain import registration for foreign-manufactured products with Indian agent details.",
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
        description: "Create account on DGFT portal and fill IEC application form with accurate business details.",
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
        description: "Submit Extended Producer Responsibility plan detailing plastic waste management approach.",
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
        description: "Establish Indian legal entity or appoint authorized agents as required by regulations.",
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

const procedures: ProcedureType[] = baseProcedures.map((procedure) => ({
  ...procedure,
  steps: procedure.steps.map((step, index) => ({
    ...step,
    visual: {
      gradient: gradients[index % gradients.length],
      icon: icons[index % icons.length],
      caption: step.title,
    },
  })),
}));

type StepPreviewProps = {
  visual: StepVisual;
  animate?: boolean;
};

const StepPreview = ({ visual, animate = false }: StepPreviewProps) => {
  const Icon = visual.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-lg transition-transform duration-500",
        visual.gradient,
        animate ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-95",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-6">
        <span className="inline-flex max-w-xs items-center justify-start rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          <span className="line-clamp-1">{visual.caption}</span>
        </span>
        <Icon className="h-16 w-16 text-white drop-shadow-[0_18px_30px_rgba(15,23,42,0.35)]" />
        <p className="text-sm text-white/80">
          Hover or tap different steps to see what the process looks like at each milestone.
        </p>
      </div>
    </div>
  );
};

const Procedure = () => {
  const [activeTab, setActiveTab] = useState<string>(procedures[0]?.id ?? "");
  const [activeStepByProcedure, setActiveStepByProcedure] = useState<Record<string, number>>(() =>
    Object.fromEntries(procedures.map((procedure) => [procedure.id, 0])),
  );

  const activeProcedure = useMemo(
    () => procedures.find((procedure) => procedure.id === activeTab) ?? procedures[0],
    [activeTab],
  );

  const activeStepIndex = activeStepByProcedure[activeProcedure.id] ?? 0;
  const activeStep = activeProcedure.steps[activeStepIndex];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setActiveStepByProcedure((previous) => ({
      ...previous,
      [value]: 0,
    }));
  };

  const handleStepFocus = (procedureId: string, index: number) => {
    setActiveStepByProcedure((previous) => ({
      ...previous,
      [procedureId]: index,
    }));
  };

  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pb-16 pt-20 lg:pb-24 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">Regulatory Procedures</h1>
            <p className="text-xl text-muted-foreground">
              Choose the regulatory pathway you are exploring to see the high-level milestones, supporting documentation, and
              how our team keeps your launch on track.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-10 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent lg:justify-center">
            {procedures.map((procedure) => (
              <TabsTrigger
                key={procedure.id}
                value={procedure.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {procedure.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {procedures.map((procedure) => {
            const selectedIndex = activeStepByProcedure[procedure.id] ?? 0;
            const selectedStep = procedure.steps[selectedIndex];

            return (
              <TabsContent key={procedure.id} value={procedure.id}>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-foreground">{procedure.title} Process</h2>
                    <div className="space-y-5">
                      {procedure.steps.map((step, index) => {
                        const isActive = selectedIndex === index;

                        return (
                          <Card
                            key={step.title}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isActive}
                            onFocus={() => handleStepFocus(procedure.id, index)}
                            onMouseEnter={() => handleStepFocus(procedure.id, index)}
                            onTouchStart={() => handleStepFocus(procedure.id, index)}
                            className={cn(
                              "group border border-border/60 bg-background/80 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                              isActive ? "border-primary shadow-lg shadow-primary/10" : "hover:-translate-y-1 hover:border-primary/60",
                            )}
                          >
                            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6">
                              <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                {index + 1}
                                {isActive ? (
                                  <CheckCircle2 className="absolute -right-2 -top-2 h-5 w-5 text-primary" />
                                ) : null}
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{step.title}</h3>
                                <p className="text-sm text-muted-foreground sm:text-base">{step.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                  <span className="rounded-full bg-primary/10 px-3 py-1 uppercase tracking-wide text-primary">
                                    {procedure.title.split(" ")[0]} stage
                                  </span>
                                  <span className="rounded-full bg-secondary/20 px-3 py-1 uppercase tracking-wide text-secondary-foreground/80">
                                    {index + 1} of {procedure.steps.length}
                                  </span>
                                </div>
                                <div className="mt-3 rounded-2xl border border-dashed border-primary/30 p-3 text-xs text-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                  Stay organised with shared checklists, reminders, and owner assignments for this milestone.
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-inner">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Preview</p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {selectedStep.title} · {procedure.title}
                      </p>
                    </div>
                    <StepPreview key={selectedStep.title} visual={selectedStep.visual} animate />
                    <div className="rounded-3xl border border-border/50 bg-background/80 p-6 text-sm leading-relaxed text-muted-foreground">
                      We align teams with a living playbook that highlights dependencies, keeps documents audit-ready, and
                      surfaces risks early. Each stage is backed by templated deliverables and regulatory intelligence.
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Need help with the process?</h2>
            <p className="mb-6 text-muted-foreground">
              Partner with Terz for a guided, accountable path to approvals. We orchestrate the paperwork, regulator
              conversations, and follow-ups so you can focus on your launch strategy.
            </p>
            <Button size="lg">Contact Us for Assistance</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procedure;
