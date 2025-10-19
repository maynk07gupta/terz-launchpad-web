import * as React from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  FileCheck,
  Quote,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeService, setActiveService] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!isMobile) {
      setActiveService(null);
    }
  }, [isMobile]);

  const handleLeadFormSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/contact");
    },
    [navigate],
  );

  const services = [
    {
      title: "Medical Devices",
      description: "Smooth CDSCO registration for manufacturers and importers",
      icon: Shield,
    },
    {
      title: "In-Vitro Diagnostics",
      description: "Expert IVD compliance and regulatory support",
      icon: FileCheck,
    },
    {
      title: "Cosmetics",
      description: "Fast-track cosmetic product registration",
      icon: Zap,
    },
    {
      title: "Legal Metrology",
      description: "LMPC compliance made simple",
      icon: CheckCircle,
    },
    {
      title: "Import Export Code",
      description: "IEC registration and support",
      icon: TrendingUp,
    },
    {
      title: "EPR & Market Entry",
      description: "Comprehensive India market entry solutions",
      icon: Users,
    },
  ];

  const steps = [
    { number: 1, title: "Intake", description: "Initial consultation and requirement gathering" },
    { number: 2, title: "Gap Assessment", description: "Identify documentation and compliance gaps" },
    { number: 3, title: "Dossier & Labels", description: "Prepare complete documentation package" },
    { number: 4, title: "Filing", description: "Submit to regulatory authorities" },
    { number: 5, title: "Queries", description: "Handle all regulatory queries and responses" },
    { number: 6, title: "Approval & Post-Market", description: "Obtain approval and ongoing support" },
  ];

  const clients = ["NexGen MedTech", "BioSure Labs", "Dermavita", "Zenith Lifecare", "GlobalMed", "Orion Devices"];

  const testimonials = [
    {
      quote:
        "Terz translated complex CDSCO requirements into a step-by-step plan. We cleared approval on our first submission.",
      name: "Ankita Sharma",
      role: "Regulatory Lead",
      company: "NexGen MedTech",
    },
    {
      quote:
        "Their importer onboarding kit helped our team stay ahead of every deadline. Communication was proactive and clear.",
      name: "David Chen",
      role: "Operations Director",
      company: "GlobalMed Imports",
    },
    {
      quote:
        "From documentation to post-market surveillance, Terz felt like an internal compliance team we could depend on.",
      name: "Shreya Patel",
      role: "Founder",
      company: "Dermavita Labs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-primary/10" />
        <div className="absolute right-1/2 top-10 hidden h-80 w-80 translate-x-1/2 rounded-full bg-primary/20 blur-3xl lg:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Compliance without the guesswork
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                One-Stop Regulatory Compliance Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Bring products into India fast, compliant, and predictable. We turn complex regulations into regulator-ready dossiers
                and clear timelines so your launch team can stay focused on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Get Compliance Help <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-background/80 p-4 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Average approval time</p>
                  <p className="mt-2 text-3xl font-semibold text-primary">6-8 Weeks</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-background/80 p-4 backdrop-blur">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">Client satisfaction</p>
                  <p className="mt-2 text-3xl font-semibold text-primary">98%</p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-3xl bg-primary/10 blur-3xl" />
              <Card className="relative overflow-hidden border-none shadow-xl">
                <CardContent className="space-y-6 p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Building2 className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">Latest project</p>
                      <p className="text-lg font-semibold">Class C Medical Device</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="text-sm uppercase tracking-wide text-primary">Highlights</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>✔ Complete dossier prepared in 12 days</li>
                      <li>✔ Regulatory query resolved in 48 hours</li>
                      <li>✔ Importer onboarding playbook delivered</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-dashed border-primary/40 p-4 text-sm text-muted-foreground">
                    "Terz gives us confidence that every document is audit-ready before we file."
                    <div className="mt-3 font-medium text-foreground">Head of Regulatory, GlobalMed</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                <p className="text-muted-foreground">
                  Struggling to navigate complex regulatory processes? Facing delays and
                  uncertainty in bringing your products to India's market?
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                <p className="text-muted-foreground">
                  Terz steps in with expert guidance and a clear roadmap. We handle all
                  documentation, filings, and communications with regulatory authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">The Outcome</h3>
                <p className="text-muted-foreground">
                  Successfully launch your product in India's market with full compliance,
                  predictable timelines, and peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive regulatory services for life science industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                role="button"
                tabIndex={0}
                aria-expanded={isMobile ? activeService === index : undefined}
                onClick={() => {
                  if (isMobile) {
                    setActiveService((current) => (current === index ? null : index));
                  }
                }}
                onKeyDown={(event) => {
                  if (!isMobile) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveService((current) => (current === index ? null : index));
                  }
                }}
                className={cn(
                  "group cursor-pointer border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  isMobile && activeService === index
                    ? "border-primary bg-background/80"
                    : "hover:-translate-y-1 hover:border-primary"
                )}
              >
                <CardContent className="pt-6">
                  <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm text-muted-foreground transition-all duration-300 ease-in-out",
                      "overflow-hidden",
                      isMobile
                        ? activeService === index
                          ? "mt-3 max-h-32 opacity-100"
                          : "mt-0 max-h-0 opacity-0"
                        : "md:mt-3 md:max-h-0 md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:translate-y-2"
                    )}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Trusted by market leaders</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground">Partners count on Terz for compliant launches</h2>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-6 rounded-3xl border border-primary/20 bg-background/60 p-6 backdrop-blur">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center rounded-xl border border-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  {client}
                </div>
              ))}
            </div>
            <div className="grid w-full gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full border-primary/20 bg-background/80 shadow-sm">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="text-left text-sm text-muted-foreground">“{testimonial.quote}”</p>
                    <div className="mt-auto text-left">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our 6-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to compliance success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why teams choose Terz</h2>
            <p className="text-lg text-muted-foreground">
              A responsive partner dedicated to predictable approvals, transparent communication, and long-term compliance support.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Documentation Quality", description: "Purpose-built dossiers reviewed by ex-regulators for first-pass approval." },
              { title: "Predictable Timelines", description: "Milestone plans with weekly progress check-ins so you always know the status." },
              { title: "Transparent Pricing", description: "Scope-backed proposals with all government fees itemised upfront." },
              { title: "Dedicated Lead", description: "A single compliance specialist orchestrates filings, queries, and stakeholder updates." },
              { title: "Regulation Monitoring", description: "Automatic alerts when India regulations change so your labels stay compliant." },
              { title: "Post-Market Support", description: "Ongoing vigilance for renewals, variations, and surveillance obligations." },
            ].map((item) => (
              <Card key={item.title} className="border-primary/20 bg-background/80 shadow-sm">
                <CardContent className="space-y-3 p-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Inline Form */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-background/90 p-8 shadow-lg backdrop-blur lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Start your compliance roadmap
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
                  Book a 30-minute assessment with a regulatory specialist
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Share your product category and launch goals. We’ll assess requirements, outline documentation, and send a custom timeline
                  within one business day.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>• No obligation discovery call</li>
                  <li>• Tailored checklist for your regulatory pathway</li>
                  <li>• Transparent pricing and next steps</li>
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
                  <Button type="submit" size="lg" className="w-full">
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
    </div>
  );
};

export default Home;
