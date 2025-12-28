import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle, ClipboardCheck, Factory, Globe2, Leaf, Quote, Scale, Shield, Ship, Sparkles, TestTube, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import BioSureLogo from "@/assets/clients/biosure.svg";
import DermavitaLogo from "@/assets/clients/dermavita.svg";
import GlobalMedLogo from "@/assets/clients/globalmed.svg";
import NexGenLogo from "@/assets/clients/nexgen.svg";
import OrionLogo from "@/assets/clients/orion.svg";
import ZenithLogo from "@/assets/clients/zenith.svg";
import CosmeticsImage from "@/assets/cosmetics.jpg";
import EprImage from "@/assets/epr.jpg";
import IecImage from "@/assets/iec.jpg";
import IvdImage from "@/assets/ivd.jpg";
import LmpcImage from "@/assets/lmpc.jpg";
import MedicalDevicesImage from "@/assets/medical-devices.jpg";
import HeroRegulatoryImage from "@/assets/hero-regulatory.jpg";
type HeroService = {
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  highlights: string[];
  accent: string;
};
type AudienceKey = "importers" | "manufacturers";
type AudienceService = {
  title: string;
  description: string;
  icon: LucideIcon;
};
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
type Client = {
  name: string;
  logo: string;
};
const heroServices: HeroService[] = [{
  title: "Medical Devices",
  headline: "Launch Class C & D devices without roadblocks",
  description: "We assemble regulator-ready dossiers, coordinate lab testing, and manage CDSCO queries for predictable approvals.",
  icon: Shield,
  image: MedicalDevicesImage,
  highlights: ["CDSCO submissions prepared end-to-end", "Risk-based documentation reviews", "Dedicated post-market vigilance"],
  accent: "from-brand-200/60 via-brand-300/55 to-brand-500/45"
}, {
  title: "In-Vitro Diagnostics",
  headline: "IVD compliance that keeps labs and regulators aligned",
  description: "Terz harmonises clinical evidence, labeling, and technical files so your diagnostics clear approvals on the first pass.",
  icon: TestTube,
  image: IvdImage,
  highlights: ["Performance evaluation study oversight", "Labeling localisation guidance", "IVD import licensing support"],
  accent: "from-brand-100/60 via-brand-200/55 to-accent-200/50"
}, {
  title: "Cosmetics",
  headline: "Fast-track cosmetic launches across India",
  description: "Simplify ingredient reviews, safety dossiers, and post-approval notifications with a team that understands BIS nuances.",
  icon: Sparkles,
  image: CosmeticsImage,
  highlights: ["BIS registration & documentation", "Adverse event reporting playbooks", "Artwork & labelling compliance"],
  accent: "from-accent-100/70 via-accent-200/60 to-accent-500/45"
}, {
  title: "Legal Metrology",
  headline: "Packaging declarations that withstand inspections",
  description: "We audit packaging, manage model approvals, and brief your distribution teams on every LMPC requirement.",
  icon: Scale,
  image: LmpcImage,
  highlights: ["Model approval & registration", "Packaging artwork validation", "Audit-ready compliance reports"],
  accent: "from-brand-100/55 via-brand-200/50 to-accent-300/45"
}, {
  title: "Market Entry & IEC",
  headline: "Confident expansion plans for new importers",
  description: "Secure IEC licences, map import routes, and stay aligned with customs and CDSCO checkpoints from day one.",
  icon: Globe2,
  image: IecImage,
  highlights: ["IEC registration & renewals", "Supply chain partner onboarding", "Importer compliance training"],
  accent: "from-brand-50/70 via-brand-200/50 to-brand-400/45"
}, {
  title: "EPR & Sustainability",
  headline: "Stay ahead of EPR obligations without the scramble",
  description: "Design collection plans, manage portal filings, and gather evidence to meet every Extended Producer Responsibility rule.",
  icon: Leaf,
  image: EprImage,
  highlights: ["Annual return preparation", "Recycling partner management", "Evidence documentation tracking"],
  accent: "from-accent-100/70 via-accent-200/60 to-accent-600/45"
}];
const heroStats = [{
  label: "Average approval time",
  value: "6-8 weeks"
}, {
  label: "Client satisfaction",
  value: "98%"
}];
const journeyColumns = [{
  title: "The Challenge",
  description: "Importers and manufacturers lose momentum deciphering India's evolving regulations, risking delays and costly rework."
}, {
  title: "Our Solution",
  description: "Terz steps in with an actionable roadmap: we unpack requirements, build every dossier, and coordinate with authorities."
}, {
  title: "The Outcome",
  description: "Teams launch on schedule with audit-ready documentation and a compliance partner safeguarding post-market obligations."
}];
const audienceServices: Record<AudienceKey, AudienceService[]> = {
  importers: [{
    title: "Importer onboarding kit",
    description: "IEC, customs, and CDSCO alignment in one accelerated playbook.",
    icon: Globe2
  }, {
    title: "Licences & registrations",
    description: "File for device, cosmetic, and LMPC approvals with guided support.",
    icon: ClipboardCheck
  }, {
    title: "Supply chain compliance",
    description: "Ensure packaging, labelling, and documentation stay inspection-ready.",
    icon: Ship
  }],
  manufacturers: [{
    title: "Technical dossier builds",
    description: "Purpose-built documentation reviewed by ex-regulators for first-pass approvals.",
    icon: Shield
  }, {
    title: "Local authorised representation",
    description: "A dedicated Terz specialist manages stakeholder updates and regulator queries.",
    icon: Users
  }, {
    title: "Lifecycle monitoring",
    description: "Variation filings, renewals, and vigilance programmes handled end-to-end.",
    icon: Factory
  }]
};
const processSteps = [{
  number: 1,
  title: "Intake",
  description: "Align on product goals, timelines, and regulatory pathways."
}, {
  number: 2,
  title: "Gap assessment",
  description: "Audit documentation, testing, and labelling to surface gaps early."
}, {
  number: 3,
  title: "Dossier build",
  description: "Assemble regulator-ready files with technical, legal, and quality inputs."
}, {
  number: 4,
  title: "Filing",
  description: "Submit applications and respond to authority interactions on your behalf."
}, {
  number: 5,
  title: "Queries",
  description: "Manage clarifications, hearings, and supplemental evidence confidently."
}, {
  number: 6,
  title: "Approval & beyond",
  description: "Onboard operations teams and monitor obligations post-approval."
}];
const differentiators = [{
  title: "Documentation quality",
  description: "Every dossier is peer-reviewed by former regulators before submission."
}, {
  title: "Predictable timelines",
  description: "Transparent milestone plans with weekly updates and risk signals."
}, {
  title: "Transparent pricing",
  description: "Scope-backed proposals with government fees itemised upfront."
}, {
  title: "Dedicated lead",
  description: "A single specialist orchestrates filings, meetings, and stakeholder comms."
}, {
  title: "Regulation monitoring",
  description: "Automated alerts keep your labelling and documentation compliant."
}, {
  title: "Post-market support",
  description: "Renewals, variations, and surveillance handled without disrupting teams."
}];
const testimonials: Testimonial[] = [{
  quote: "Mr. Batra brought remarkable professionalism, expertise, and strategic insight from day one. He understood our business requirements quickly and delivered effective solutions ahead of schedule. His clear communication and ability to demystify complex compliance requirements made him a trusted advisor to our team.",
  name: "Hemendra Dave, PGDBM, MBA",
  role: "Regulatory Head",
  company: "Envision Scientific, Concept Medical"
}, {
  quote: "I highly recommend Vasu Batra for his outstanding expertise in medical device registration with Indian authorities. His deep knowledge, proactive approach, and ability to navigate complex processes were instrumental in securing timely clearance. His strong relationships with authorities ensured a smooth approval process.",
  name: "Andrew Tang",
  role: "Chief Executive Officer",
  company: "Mobilab, USA"
}, {
  quote: "As a consultant who handles the medical devices regulatory approvals, Vasu is meticulous and conscientious while preparing and vetting documents, leaving little room for errors, saving time and money for his clients. Calm and courteous, he is also a pleasure to deal with.",
  name: "Anil Kumar Nair",
  role: "Managing Director",
  company: "Geuder Asia Pacific Pvt. Ltd, Singapore"
}, {
  quote: "Had worked with Vasu on medical device registration in India, a person with strong work ethics, extremely responsive and knows his field of work well. His inputs had been a guiding light in getting medical devices registered in India.",
  name: "Steven Choy",
  role: "Business Consultant",
  company: "SEED, Japan"
}, {
  quote: "Vasu is super efficient in registration work. He helped with urgent paperwork ahead of deadlines and is ever ready to help even at odd hours. Truly appreciate his effort in going the extra mile for his clients.",
  name: "Toinali Chophi",
  role: "CEO",
  company: "Beautybarnindia"
}];
const clients: Client[] = [{
  name: "NexGen MedTech",
  logo: NexGenLogo
}, {
  name: "BioSure Labs",
  logo: BioSureLogo
}, {
  name: "Dermavita",
  logo: DermavitaLogo
}, {
  name: "Zenith Lifecare",
  logo: ZenithLogo
}, {
  name: "GlobalMed Imports",
  logo: GlobalMedLogo
}, {
  name: "Orion Devices",
  logo: OrionLogo
}];
const glassPanel = "border border-border/70 bg-card/80 backdrop-blur shadow-surface-sm";
const Home = () => {
  const navigate = useNavigate();
  const [activeAudience, setActiveAudience] = React.useState<AudienceKey>("importers");
  const processRef = React.useRef<HTMLDivElement | null>(null);
  const [processInView, setProcessInView] = React.useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;
    let isHovered = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;

          if (currentScroll >= maxScroll) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 420, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  const handleLeadFormSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/contact");
  }, [navigate]);
  
  React.useEffect(() => {
    if (!processRef.current) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProcessInView(true);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(processRef.current);
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center py-12 lg:py-0">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-brand-900/20" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.2fr_1fr]">
            {/* Left Column - Text Content (55-60%) */}
            <div className="order-2 lg:order-1 max-w-2xl">
              {/* Section Label */}
              <span className="mb-4 lg:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs lg:text-sm font-semibold uppercase tracking-widest text-primary">
                Regulatory Approvals Simplified
              </span>
              
              {/* Main Heading */}
              <h1 className="mb-4 lg:mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Accelerate India's regulatory approvals.
              </h1>
              
              {/* Sub-heading */}
              <h2 className="mb-4 text-lg lg:text-xl font-medium text-primary/90">
                Your end-to-end partner for BIS, CDSCO, Legal Metrology, EPR & other Indian compliance.
              </h2>
              
              {/* Supporting Line */}
              <p className="text-base lg:text-lg text-muted-foreground/90 leading-relaxed">
                We guide manufacturers and importers across medical devices, IVD, cosmetics and more through India's regulatory maze so you can launch faster with confidence.
              </p>
              
              {/* CTAs */}
              <div className="mt-8 lg:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-primary text-lg px-8 py-6 shadow-[0_20px_40px_-20px_hsla(209,53%,23%,0.55)] hover:bg-primary/90">
                  <Link to="/contact">
                    Book a free consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="link" className="text-foreground/80 hover:text-primary group">
                  <Link to="/services" className="flex items-center gap-1">
                    Explore services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              {/* Trust Signals */}
              <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-6 lg:gap-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>ISO 13485 aligned</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe2 className="h-5 w-5 text-primary" />
                  <span>Pan-India regulatory experts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>24-hour response</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image (40-45%) */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-[0_60px_140px_-70px_hsla(209,53%,23%,0.75)]">
                <img 
                  src={HeroRegulatoryImage} 
                  alt="Regulatory compliance specialist reviewing documents with India map overlay" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Cards - Moved from Hero */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Core Services</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive regulatory support across India's key compliance frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {heroServices.map((service, index) => (
              <Link 
                key={service.title} 
                to="/services"
                className={cn(
                  "group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/60 backdrop-blur p-5 text-center transition-all duration-300",
                  "hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_hsla(209,53%,23%,0.5)]"
                )}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-foreground">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Story */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {journeyColumns.map(column => <Card key={column.title} className={cn("transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-60px_hsla(209,53%,23%,0.65)]", glassPanel)}>
                <CardContent className="pt-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-lg font-bold text-primary">
                    {column.title === "The Challenge" && "01"}
                    {column.title === "Our Solution" && "02"}
                    {column.title === "The Outcome" && "03"}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{column.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{column.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 lg:py-[10px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsla(209,53%,23%,0.16),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">How we support every team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Toggle between importer and manufacturer journeys to see the story that fits you best.
            </p>
          </div>

          <div className="mx-auto flex max-w-lg items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-sm">
            {(["importers", "manufacturers"] as AudienceKey[]).map(audience => <button key={audience} type="button" onClick={() => setActiveAudience(audience)} className={cn("flex-1 rounded-full px-4 py-2 font-semibold capitalize transition", activeAudience === audience ? "bg-primary text-primary-foreground shadow-[0_12px_35px_-18px_hsla(209,53%,23%,0.65)]" : "text-foreground/70 hover:text-foreground")} aria-pressed={activeAudience === audience}>
                {audience}
              </button>)}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audienceServices[activeAudience].map(service => <Card key={service.title} className={cn("h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_100px_-60px_hsla(209,53%,23%,0.7)]", glassPanel)}>
                <CardContent className="pt-6">
                  <service.icon className="mb-4 h-12 w-12 text-primary transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Need support across both tracks? We orchestrate importer and manufacturer workflows together.
            </p>
            <Button asChild size="lg" className="bg-primary shadow-[0_20px_45px_-25px_hsla(209,53%,23%,0.75)] hover:bg-primary/90">
              <Link to="/services">
                View detailed services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsla(162,66%,32%,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Trusted by market leaders</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">Partners count on Terz for compliant launches</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Over a decade of approvals for manufacturers, importers, and innovators expanding into India's regulated markets.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              {clients.map(client => <div key={client.name} className="flex h-24 w-40 items-center justify-center rounded-2xl bg-background/60 p-4 transition hover:scale-[1.02] hover:bg-background">
                  <img src={client.logo} alt={client.name} className="max-h-full w-full object-contain" />
                </div>)}
            </div>
            <div className="relative w-full">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40"
              >
                <div className="flex gap-6 min-w-max px-2">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className={cn("w-[450px] flex-shrink-0 overflow-hidden border-primary/20 shadow-[0_35px_120px_-60px_hsla(209,53%,35%,0.6)]", glassPanel)}>
                      <CardContent className="flex flex-col gap-6 p-8 text-left h-full">
                        <Quote className="h-10 w-10 text-primary flex-shrink-0" />
                        <p className="text-base leading-relaxed text-muted-foreground flex-grow italic">"{testimonial.quote}"</p>
                        <div className="mt-auto border-t border-border pt-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-primary font-medium mt-1">{testimonial.role}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-6">
                Scroll horizontally to read more testimonials →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section ref={processRef} className="relative py-20 lg:py-[10px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,hsla(209,53%,35%,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our 6-step compliance timeline</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Follow the interactive timeline to see how we steward every launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => <div key={step.number} className={cn("relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-500", glassPanel, processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")} style={{
            transitionDelay: processInView ? `${index * 80}ms` : "0ms"
          }}>
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/25 text-lg font-semibold text-primary">
                    {step.number.toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsla(162,66%,32%,0.1),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Why teams choose Terz</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Predictable approvals, transparent communication, and a partner that safeguards compliance long after launch.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(item => <Card key={item.title} className={cn("h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-70px_hsla(209,53%,28%,0.55)]", glassPanel)}>
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section with Inline Form */}
      <section className="relative py-24 lg:py-[12px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsla(209,53%,35%,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn("relative overflow-hidden rounded-3xl p-8 shadow-[0_60px_140px_-70px_hsla(209,53%,23%,0.75)] lg:p-12", glassPanel)}>
            <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Start your compliance roadmap
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
                  Book a 30-minute assessment with a regulatory specialist
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Share your product category and launch goals. We'll assess requirements, outline documentation, and send a custom timeline within one business day.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> No obligation discovery call
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Tailored checklist for your regulatory pathway
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Transparent pricing and next steps
                  </li>
                </ul>
              </div>
              <div>
                <form onSubmit={handleLeadFormSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="lead-name">Full name</Label>
                    <Input id="lead-name" name="name" placeholder="Priya Mehta" required autoComplete="name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-email">Work email</Label>
                    <Input id="lead-email" type="email" name="email" placeholder="you@company.com" required autoComplete="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-company">Company</Label>
                    <Input id="lead-company" name="company" placeholder="Your organisation" autoComplete="organization" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-notes">Product or compliance goals</Label>
                    <Textarea id="lead-notes" name="notes" placeholder="Tell us about your device, cosmetic line, or expansion plans." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary shadow-[0_20px_45px_-25px_hsla(209,53%,23%,0.75)] hover:bg-primary/90">
                    Schedule my assessment
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;