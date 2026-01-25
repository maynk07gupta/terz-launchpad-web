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
      "End-to-end registration for medical devices in India. We ensure ISO 13485 compliance and timely CDSCO approval with comprehensive documentation support.",
    image: medicalDevicesImg,
    badge: "CDSCO",
    manufacturerSteps: [
      {
        title: "Determine Device Classification",
        description:
          "Classify your device under CDSCO categories (Class A, B, C, or D) based on risk level and intended use.",
        icon: Layers,
        phase: "Assessment",
      },
      {
        title: "Technical File Preparation",
        description:
          "Compile comprehensive technical documentation including device description, quality certificates, and design specifications.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "ISO 13485 Certification Support",
        description:
          "Ensure quality management system compliance and obtain necessary ISO certifications for manufacturing.",
        icon: ShieldCheck,
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
        title: "Clinical Evaluation Assistance",
        description:
          "Provide clinical data and evaluation reports as required for higher-risk device classifications.",
        icon: Microscope,
        phase: "Review",
      },
      {
        title: "Registration Certificate Obtainment",
        description:
          "Upon approval, receive registration certificate valid for 5 years, enabling legal marketing in India.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
    importerSteps: [
      {
        title: "Appoint Indian Authorized Agent",
        description:
          "Foreign manufacturers must designate an authorized representative in India for liaison with CDSCO.",
        icon: UserCheck,
        phase: "Assessment",
      },
      {
        title: "Import License Documentation",
        description:
          "Prepare import-specific documentation including foreign manufacturer details and product certifications.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Quality Management System Verification",
        description:
          "Verify and document QMS compliance at the foreign manufacturing facility.",
        icon: ShieldCheck,
        phase: "Preparation",
      },
      {
        title: "CDSCO Application Filing",
        description:
          "Submit import registration application with complete documentation through regulatory portal.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Post-Market Surveillance Setup",
        description:
          "Establish vigilance reporting systems and adverse event monitoring procedures.",
        icon: Activity,
        phase: "Review",
      },
      {
        title: "Renewal Management",
        description:
          "Manage ongoing compliance, periodic safety updates, and timely registration renewal.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics (CDSCO)",
    tagline: "Expert IVD compliance and regulatory support",
    description:
      "Specialized regulatory assistance for in-vitro diagnostic medical devices. Navigate CDSCO requirements with confidence.",
    image: ivdImg,
    badge: "ISO 13485",
    manufacturerSteps: [
      {
        title: "IVD Classification Analysis",
        description:
          "Determine if your IVD falls under regulated categories per CDSCO guidelines.",
        icon: Layers,
        phase: "Assessment",
      },
      {
        title: "Performance Evaluation Documentation",
        description:
          "Compile analytical and clinical performance data for your diagnostic product.",
        icon: Activity,
        phase: "Preparation",
      },
      {
        title: "Quality System Compliance",
        description:
          "Prepare ISO 13485 certification and quality management system documentation.",
        icon: ShieldCheck,
        phase: "Preparation",
      },
      {
        title: "Technical Dossier Compilation",
        description:
          "Prepare comprehensive technical file including manufacturing details and validation studies.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "CDSCO Submission and Tracking",
        description:
          "Submit application through appropriate channels with all required documentation.",
        icon: UploadCloud,
        phase: "Submission",
      },
    ],
    importerSteps: [
      {
        title: "Import Authorization",
        description:
          "Obtain necessary authorizations for importing IVD products into India.",
        icon: UserCheck,
        phase: "Assessment",
      },
      {
        title: "Product Registration",
        description:
          "Register imported IVD products with complete documentation and test reports.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Label Compliance Review",
        description:
          "Ensure product labeling meets all Indian regulatory requirements.",
        icon: Package,
        phase: "Review",
      },
      {
        title: "Distribution License Support",
        description:
          "Obtain distribution licenses for commercial sale of IVD products.",
        icon: Truck,
        phase: "Review",
      },
      {
        title: "Post-Import Compliance",
        description:
          "Maintain ongoing compliance with post-market surveillance requirements.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "cosmetics",
    title: "Cosmetics (CDSCO)",
    tagline: "Fast-track cosmetic product registration",
    description:
      "Complete cosmetics registration services for domestic and imported products. Ensure compliance with BIS and CDSCO standards.",
    image: cosmeticsImg,
    badge: "BIS",
    manufacturerSteps: [
      {
        title: "Product Formulation Review",
        description:
          "Ensure formulation complies with BIS and CDSCO permitted ingredients list.",
        icon: Beaker,
        phase: "Assessment",
      },
      {
        title: "Safety Assessment Coordination",
        description:
          "Conduct toxicological assessment and compile safety data for all ingredients.",
        icon: ShieldCheck,
        phase: "Assessment",
      },
      {
        title: "Manufacturing License Assistance",
        description:
          "Obtain manufacturing license from State Drug Control Authority if manufacturing in India.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Product Registration Filing",
        description:
          "Submit online registration application with product details, formulation, and test reports.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Label Compliance Verification",
        description:
          "Ensure labels meet all regulatory requirements including ingredient declaration and warnings.",
        icon: Package,
        phase: "Review",
      },
    ],
    importerSteps: [
      {
        title: "Import Permit Acquisition",
        description:
          "Obtain import permits and authorizations for cosmetic products.",
        icon: UserCheck,
        phase: "Assessment",
      },
      {
        title: "Foreign Manufacturer Documentation",
        description:
          "Compile documentation from foreign manufacturers including GMP certificates.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "Product Testing Coordination",
        description:
          "Arrange product testing at approved laboratories in India.",
        icon: Beaker,
        phase: "Preparation",
      },
      {
        title: "Registration with CDSCO",
        description:
          "Submit import registration application with complete product dossier.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Customs Clearance Support",
        description:
          "Facilitate smooth customs clearance with proper documentation.",
        icon: Truck,
        phase: "Approval",
      },
    ],
  },
  {
    id: "lmpc",
    title: "Legal Metrology (LMPC)",
    tagline: "LMPC compliance made simple",
    description:
      "Legal metrology compliance for packaged commodities. Ensure your products meet all labeling and packaging requirements.",
    image: lmpcImg,
    badge: "State-Level",
    manufacturerSteps: [
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
        title: "Ongoing Compliance Monitoring",
        description:
          "Maintain accurate records and ensure continued compliance with metrology standards.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
    importerSteps: [
      {
        title: "Import Compliance Assessment",
        description:
          "Assess imported product packaging against Indian metrology requirements.",
        icon: Target,
        phase: "Assessment",
      },
      {
        title: "Package Modification Guidance",
        description:
          "Guide necessary packaging and labeling modifications for compliance.",
        icon: Package,
        phase: "Preparation",
      },
      {
        title: "Registration for Importers",
        description:
          "Complete importer-specific LMPC registration requirements.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Custom Label Requirements",
        description:
          "Ensure import labels meet all country of origin and importer declaration requirements.",
        icon: FileText,
        phase: "Review",
      },
      {
        title: "Import Documentation",
        description:
          "Prepare and maintain all required import documentation for metrology compliance.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
  },
  {
    id: "iec",
    title: "Import Export Code (IEC)",
    tagline: "IEC registration and comprehensive support",
    description:
      "Streamlined Import Export Code registration. Essential for any business engaged in international trade.",
    image: iecImg,
    badge: "Lifetime Valid",
    manufacturerSteps: [
      {
        title: "IEC Application Preparation",
        description:
          "Confirm business is registered and has PAN, Aadhaar, and bank account details ready.",
        icon: Target,
        phase: "Assessment",
      },
      {
        title: "Documentation Compilation",
        description:
          "Gather required documents: business registration, bank certificate, ID proofs of partners/directors.",
        icon: FileText,
        phase: "Preparation",
      },
      {
        title: "DGFT Portal Filing",
        description:
          "Create account on DGFT portal and file IEC application with accurate business details.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Certificate Obtainment",
        description:
          "Receive 10-digit IEC code, valid for lifetime with no renewal requirement.",
        icon: Globe2,
        phase: "Approval",
      },
      {
        title: "Modification Support",
        description:
          "Assistance with IEC modifications for address changes, director updates, etc.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
    importerSteps: [
      {
        title: "IEC Code Registration",
        description:
          "Register for Import Export Code essential for import activities.",
        icon: Target,
        phase: "Assessment",
      },
      {
        title: "Import Eligibility Verification",
        description:
          "Verify business eligibility and compliance requirements for importing goods.",
        icon: ShieldCheck,
        phase: "Preparation",
      },
      {
        title: "Customs Documentation",
        description:
          "Prepare customs-related documentation linked to IEC registration.",
        icon: FileText,
        phase: "Submission",
      },
      {
        title: "License Activation",
        description:
          "Activate IEC with customs authorities for smooth import operations.",
        icon: Globe2,
        phase: "Review",
      },
      {
        title: "Annual Compliance",
        description:
          "Maintain annual compliance and update IEC details as required.",
        icon: RefreshCcw,
        phase: "Approval",
      },
    ],
  },
  {
    id: "epr",
    title: "Extended Producer Responsibility (EPR)",
    tagline: "EPR compliance and sustainability solutions",
    description:
      "Meet your Extended Producer Responsibility obligations. Comprehensive support for plastic waste management compliance.",
    image: eprImg,
    badge: "CPCB",
    manufacturerSteps: [
      {
        title: "EPR Assessment and Planning",
        description:
          "Determine if your products fall under plastic packaging EPR regulations.",
        icon: Leaf,
        phase: "Assessment",
      },
      {
        title: "Registration with CPCB",
        description:
          "Register as producer on CPCB portal with business and product details.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Annual Return Filing",
        description:
          "Submit annual returns showing plastic waste collected and recycled/processed.",
        icon: FileText,
        phase: "Submission",
      },
      {
        title: "Target Compliance Tracking",
        description:
          "Establish and track collection and recycling targets as per CPCB guidelines.",
        icon: Target,
        phase: "Review",
      },
      {
        title: "Certificate Management",
        description:
          "Receive and manage EPR certificates confirming environmental compliance.",
        icon: Globe2,
        phase: "Approval",
      },
    ],
    importerSteps: [
      {
        title: "Import EPR Obligations",
        description:
          "Understand EPR obligations specific to imported products with plastic packaging.",
        icon: Leaf,
        phase: "Assessment",
      },
      {
        title: "Producer Responsibility Setup",
        description:
          "Establish producer responsibility mechanisms for imported goods.",
        icon: UserCheck,
        phase: "Preparation",
      },
      {
        title: "Waste Management Planning",
        description:
          "Develop waste collection and recycling plans for imported packaging.",
        icon: RefreshCcw,
        phase: "Preparation",
      },
      {
        title: "CPCB Compliance",
        description:
          "Register and comply with CPCB requirements as an importer.",
        icon: UploadCloud,
        phase: "Submission",
      },
      {
        title: "Reporting and Renewals",
        description:
          "Submit periodic reports and manage EPR certificate renewals.",
        icon: Globe2,
        phase: "Approval",
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

  const activeService = useMemo(
    () =>
      serviceCatalog.find((service) => service.id === activeServiceId) ??
      serviceCatalog[0],
    [activeServiceId]
  );

  const activeSteps =
    selectedRole === "manufacturer"
      ? activeService?.manufacturerSteps
      : activeService?.importerSteps;

  const activeStep = activeSteps?.[activeStepIndex] ?? activeSteps?.[0];

  const handleServiceChange = (value: string) => {
    setActiveServiceId(value);
    setActiveStepIndex(0);
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
