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
import { useIsMobile } from "@/hooks/use-mobile";
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
  accent: "from-[hsla(167,85%,89%,0.9)] to-[hsla(174,84%,32%,0.25)]"
}, {
  title: "In-Vitro Diagnostics",
  headline: "IVD compliance that keeps labs and regulators aligned",
  description: "Terz harmonises clinical evidence, labeling, and technical files so your diagnostics clear approvals on the first pass.",
  icon: TestTube,
  image: IvdImage,
  highlights: ["Performance evaluation study oversight", "Labeling localisation guidance", "IVD import licensing support"],
  accent: "from-[hsla(211,96%,78%,0.75)] to-[hsla(221,83%,53%,0.25)]"
}, {
  title: "Cosmetics",
  headline: "Fast-track cosmetic launches across India",
  description: "Simplify ingredient reviews, safety dossiers, and post-approval notifications with a team that understands BIS nuances.",
  icon: Sparkles,
  image: CosmeticsImage,
  highlights: ["BIS registration & documentation", "Adverse event reporting playbooks", "Artwork & labelling compliance"],
  accent: "from-[hsla(214,94%,92%,0.85)] to-[hsla(211,96%,78%,0.25)]"
}, {
  title: "Legal Metrology",
  headline: "Packaging declarations that withstand inspections",
  description: "We audit packaging, manage model approvals, and brief your distribution teams on every LMPC requirement.",
  icon: Scale,
  image: LmpcImage,
  highlights: ["Model approval & registration", "Packaging artwork validation", "Audit-ready compliance reports"],
  accent: "from-[hsla(166,76%,97%,0.85)] to-[hsla(174,84%,32%,0.25)]"
}, {
  title: "Market Entry & IEC",
  headline: "Confident expansion plans for new importers",
  description: "Secure IEC licences, map import routes, and stay aligned with customs and CDSCO checkpoints from day one.",
  icon: Globe2,
  image: IecImage,
  highlights: ["IEC registration & renewals", "Supply chain partner onboarding", "Importer compliance training"],
  accent: "from-[hsla(214,94%,92%,0.85)] to-[hsla(174,84%,32%,0.2)]"
}, {
  title: "EPR & Sustainability",
  headline: "Stay ahead of EPR obligations without the scramble",
  description: "Design collection plans, manage portal filings, and gather evidence to meet every Extended Producer Responsibility rule.",
  icon: Leaf,
  image: EprImage,
  highlights: ["Annual return preparation", "Recycling partner management", "Evidence documentation tracking"],
  accent: "from-[hsla(167,85%,89%,0.9)] to-[hsla(174,84%,32%,0.3)]"
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
const glassPanel = "border border-[hsl(214,32%,91%)] bg-white/90 backdrop-blur";
const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeHeroService, setActiveHeroService] = React.useState(0);
  const heroIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
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
    if (!isMobile) {
      heroIntervalRef.current = setInterval(() => {
        setActiveHeroService(previous => (previous + 1) % heroServices.length);
      }, 7000);
    }
    return () => {
      if (heroIntervalRef.current) {
        clearInterval(heroIntervalRef.current);
        heroIntervalRef.current = null;
      }
    };
  }, [isMobile]);
  const handleHeroSelect = React.useCallback((index: number) => {
    setActiveHeroService(index);
    if (heroIntervalRef.current) {
      clearInterval(heroIntervalRef.current);
      heroIntervalRef.current = null;
    }
  }, []);
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
  const activeHero = heroServices[activeHeroService];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center py-12 lg:py-20">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(166,76%,97%)] via-[hsl(210,40%,98%)] to-white" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsla(174,84%,32%,0.14),transparent_55%)]" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[hsla(211,96%,78%,0.25)] blur-3xl" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[hsla(167,85%,89%,0.8)] blur-3xl" />

        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsla(167,55%,72%,0.6)] bg-[hsl(167,85%,89%)] px-4 py-1.5 text-xs font-medium text-[hsl(175,77%,26%)] lg:mb-6 lg:text-sm">
                <span className="h-2 w-2 rounded-full bg-[hsl(174,84%,32%)]" />
                Compliance for importers & manufacturers
              </span>
              <h1 className="mb-4 lg:mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Regulatory compliance, retold as your launch story
              </h1>
              <p className="text-base text-muted-foreground lg:text-lg">
                Navigate CDSCO, CDSCO (IVD), BIS, LMPC, and EPR frameworks with a partner that choreographs every step—from dossier builds to post-market vigilance.
              </p>
              <div className="mt-6 lg:mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground shadow-[0_18px_40px_-18px_hsla(174,84%,32%,0.55)] transition hover:bg-[hsl(175,77%,26%)]"
                >
                  <Link to="/contact">
                    Schedule a strategy call <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[hsl(214,32%,91%)] text-foreground transition hover:bg-[hsl(210,40%,96%)]"
                >
                  <Link to="/services">Explore full service lineup</Link>
                </Button>
              </div>
              <div className="mt-6 lg:mt-10 grid gap-3 sm:grid-cols-2">
                {heroStats.map(stat => (
                  <div
                    key={stat.label}
                    className={cn(
                      "rounded-2xl p-4 lg:p-5 shadow-[0_20px_55px_-35px_hsla(211,96%,78%,0.6)]",
                      glassPanel
                    )}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold capitalize text-[hsl(222,47%,11%)] lg:mt-3 lg:text-3xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full">
              <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-[hsla(167,85%,89%,0.9)] blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[hsla(174,84%,32%,0.16)] blur-3xl" />
              <Card
                className={cn(
                  "relative overflow-hidden shadow-[0_55px_130px_-70px_hsla(211,96%,78%,0.65)] transition",
                  glassPanel
                )}
              >
                <div className={cn("absolute inset-0 -z-10 bg-gradient-to-br", activeHero.accent)} />
                <CardContent className="relative space-y-4 p-0 lg:space-y-6">
                  {/* Service Image */}
                  <div className="relative h-48 lg:h-64 overflow-hidden">
                    <img src={activeHero.image} alt={activeHero.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-[hsla(210,40%,98%,0.7)] to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(214,32%,91%)] bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)]">
                          <activeHero.icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">Focus area</p>
                          <p className="text-lg font-semibold text-[hsl(222,47%,11%)]">{activeHero.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4 px-6 pb-6 lg:space-y-5 lg:px-8 lg:pb-8">
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold leading-tight text-[hsl(222,47%,11%)] lg:text-2xl">
                        {activeHero.headline}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">{activeHero.description}</p>
                    </div>
                    <div className="rounded-2xl border border-[hsl(214,32%,91%)] bg-white/90 p-4 lg:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(175,77%,26%)]">
                        How we help
                      </p>
                      <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground lg:mt-4 lg:space-y-3">
                        {activeHero.highlights.map(highlight => (
                          <li key={highlight} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(174,84%,32%)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      asChild
                      variant="secondary"
                      className="group inline-flex w-full items-center justify-center gap-2 border-[hsl(214,32%,91%)] bg-white text-sm font-semibold text-[hsl(215,28%,17%)] transition hover:bg-[hsl(210,40%,96%)]"
                    >
                      <Link to="/services">
                        Explore this service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {heroServices.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleHeroSelect(index)}
                    onMouseEnter={() => !isMobile && handleHeroSelect(index)}
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl border border-[hsl(214,32%,91%)] bg-white/80 p-3 text-left transition",
                      activeHeroService === index
                        ? "border-[hsl(174,84%,32%)] bg-[hsl(166,76%,97%)] text-[hsl(222,47%,11%)] shadow-[0_20px_45px_-25px_hsla(174,84%,32%,0.4)]"
                        : "hover:border-[hsl(174,84%,32%)] hover:bg-[hsl(210,40%,96%)]"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(214,32%,91%)] bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)] transition-transform",
                        activeHeroService === index ? "scale-105" : "group-hover:scale-105"
                      )}
                    >
                      <service.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-[hsl(215,28%,17%)]">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Story */}
      <section className="relative bg-[hsl(210,40%,98%)] py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsla(211,96%,78%,0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {journeyColumns.map(column => (
              <Card
                key={column.title}
                className={cn(
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-60px_hsla(174,84%,32%,0.35)]",
                  glassPanel
                )}
              >
                <CardContent className="pt-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(214,32%,91%)] bg-[hsl(167,85%,89%)] text-lg font-bold text-[hsl(175,77%,26%)]">
                    {column.title === "The Challenge" && "01"}
                    {column.title === "Our Solution" && "02"}
                    {column.title === "The Outcome" && "03"}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{column.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{column.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative bg-[hsl(210,40%,98%)] py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsla(211,96%,78%,0.18),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">How we support every team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Toggle between importer and manufacturer journeys to see the story that fits you best.
            </p>
          </div>

          <div className="mx-auto flex max-w-lg items-center justify-center rounded-full border border-[hsl(214,32%,91%)] bg-white p-2 text-sm shadow-sm">
            {(["importers", "manufacturers"] as AudienceKey[]).map(audience => (
              <button
                key={audience}
                type="button"
                onClick={() => setActiveAudience(audience)}
                className={cn(
                  "flex-1 rounded-full px-4 py-2 font-semibold capitalize transition",
                  activeAudience === audience
                    ? "bg-[hsl(174,84%,32%)] text-white shadow-[0_12px_30px_-18px_hsla(174,84%,32%,0.5)]"
                    : "text-muted-foreground hover:text-[hsl(222,47%,11%)]"
                )}
                aria-pressed={activeAudience === audience}
              >
                {audience}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audienceServices[activeAudience].map(service => (
              <Card
                key={service.title}
                className={cn(
                  "h-full transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(174,84%,32%)] hover:shadow-[0_30px_100px_-60px_hsla(174,84%,32%,0.3)]",
                  glassPanel
                )}
              >
                <CardContent className="pt-6">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)]">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)]">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Need support across both tracks? We orchestrate importer and manufacturer workflows together.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-[0_18px_40px_-20px_hsla(174,84%,32%,0.55)] hover:bg-[hsl(175,77%,26%)]"
            >
              <Link to="/services">
                View detailed services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsla(167,85%,89%,0.4),transparent_75%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[hsl(175,77%,26%)]">Trusted by market leaders</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">Partners count on Terz for compliant launches</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Over a decade of approvals for manufacturers, importers, and innovators expanding into India's regulated markets.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-[hsl(214,32%,91%)] bg-white p-6 shadow-sm">
              {clients.map(client => (
                <div
                  key={client.name}
                  className="flex h-24 w-40 items-center justify-center rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(210,40%,98%)] p-4 transition hover:scale-[1.02] hover:border-[hsl(174,84%,32%)]"
                >
                  <img src={client.logo} alt={client.name} className="max-h-full w-full object-contain" />
                </div>
              ))}
            </div>
            <div className="relative w-full">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[hsl(214,32%,91%)] scrollbar-track-transparent hover:scrollbar-thumb-[hsla(174,84%,32%,0.4)]"
              >
                <div className="flex gap-6 min-w-max px-2">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className={cn(
                        "w-[450px] flex-shrink-0 overflow-hidden border-[hsl(214,32%,91%)] shadow-[0_35px_120px_-60px_hsla(211,96%,78%,0.5)]",
                        "bg-white"
                      )}
                    >
                      <CardContent className="flex h-full flex-col gap-6 p-8 text-left">
                        <Quote className="h-10 w-10 flex-shrink-0 text-[hsl(211,96%,78%)]" />
                        <p className="flex-grow text-base italic leading-relaxed text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="mt-auto border-t border-[hsl(214,32%,91%)] pt-4">
                          <p className="font-semibold text-[hsl(222,47%,11%)]">{testimonial.name}</p>
                          <p className="mt-1 text-sm font-medium text-[hsl(175,77%,26%)]">{testimonial.role}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Scroll horizontally to read more testimonials →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section ref={processRef} className="relative bg-[hsl(210,40%,98%)] py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,hsla(211,96%,78%,0.2),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our 6-step compliance timeline</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Follow the interactive timeline to see how we steward every launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-500",
                  glassPanel,
                  processInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: processInView ? `${index * 80}ms` : "0ms" }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[hsla(211,96%,78%,0.2)] blur-2xl" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(214,32%,91%)] bg-[hsl(167,85%,89%)] text-lg font-semibold text-[hsl(175,77%,26%)]">
                    {step.number.toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsla(167,85%,89%,0.35),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Why teams choose Terz</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Predictable approvals, transparent communication, and a partner that safeguards compliance long after launch.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(item => (
              <Card
                key={item.title}
                className={cn(
                  "h-full transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(174,84%,32%)] hover:shadow-[0_35px_120px_-70px_hsla(174,84%,32%,0.3)]",
                  glassPanel
                )}
              >
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)]">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(222,47%,11%)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Inline Form */}
      <section className="relative bg-[hsl(210,40%,98%)] py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsla(211,96%,78%,0.18),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_60px_140px_-70px_hsla(211,96%,78%,0.55)] lg:p-12",
              "border border-[hsl(214,32%,91%)]"
            )}
          >
            <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-[hsla(167,85%,89%,0.8)] blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-[hsla(174,84%,32%,0.2)] blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsla(167,55%,72%,0.6)] bg-[hsl(167,85%,89%)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(175,77%,26%)]">
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
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground shadow-[0_20px_45px_-25px_hsla(174,84%,32%,0.55)] hover:bg-[hsl(175,77%,26%)]"
                  >
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