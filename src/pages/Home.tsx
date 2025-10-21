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
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Home = () => {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!isMobile) {
      setActiveService(null);
    }
  }, [isMobile]);

  const handleLeadFormSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = "/contact";
  }, []);

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

  const glassPanel = "border border-white/10 bg-background/70 backdrop-blur";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary/10 opacity-60 lg:block" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Compliance without the guesswork
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Trusted regulatory partners for ambitious market entries
              </h1>
              <p className="text-lg text-muted-foreground/90">
                Bring products into India fast, compliant, and predictable. We translate complex regulations into regulator-ready dossiers and confident launch plans for your leadership team.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary shadow-[0_20px_40px_-20px_rgba(37,99,235,0.55)] hover:bg-primary/90">
                  <Link to="/contact">
                    Get Compliance Help <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-foreground transition hover:border-primary/40 hover:bg-white/10"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className={cn("rounded-2xl p-5 shadow-[0_20px_50px_-35px_rgba(37,99,235,0.7)]", glassPanel)}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Average approval time</p>
                  <p className="mt-3 text-3xl font-semibold text-primary">6-8 Weeks</p>
                </div>
                <div className={cn("rounded-2xl p-5 shadow-[0_20px_50px_-35px_rgba(37,99,235,0.7)]", glassPanel)}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Client satisfaction</p>
                  <p className="mt-3 text-3xl font-semibold text-primary">98%</p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-12 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
              <Card className={cn("relative overflow-hidden shadow-[0_60px_140px_-70px_rgba(37,99,235,0.75)]", glassPanel)}>
                <CardContent className="space-y-6 p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                      <Building2 className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">Latest project</p>
                      <p className="text-lg font-semibold text-foreground">Class C Medical Device</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.04] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Highlights</p>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li>✔ Complete dossier prepared in 12 days</li>
                      <li>✔ Regulatory query resolved in 48 hours</li>
                      <li>✔ Importer onboarding playbook delivered</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-sm text-muted-foreground">
                    “Terz gives us confidence that every document is audit-ready before we file.”
                    <div className="mt-3 font-medium text-foreground">Head of Regulatory, GlobalMed</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Story */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {["The Challenge", "Our Solution", "The Outcome"].map((title, index) => (
              <Card
                key={title}
                className={cn(
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-60px_rgba(37,99,235,0.65)]",
                  glassPanel,
                )}
              >
                <CardContent className="pt-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-2xl font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {index === 0 &&
                      "Struggling to navigate complex regulatory processes? Facing delays and uncertainty in bringing your products to India's market?"}
                    {index === 1 &&
                      "Terz steps in with expert guidance and a clear roadmap. We handle documentation, filings, and regulator communications end to end."}
                    {index === 2 &&
                      "Launch with full compliance, predictable timelines, and confidence that every submission will satisfy authorities."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive regulatory services for life science innovators and ambitious importers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  "group cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  glassPanel,
                  isMobile && activeService === index
                    ? "border-primary/60 shadow-[0_30px_100px_-60px_rgba(37,99,235,0.8)]"
                    : "hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_100px_-60px_rgba(37,99,235,0.7)]"
                )}
              >
                <CardContent className="pt-6">
                  <service.icon className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
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
                        : "md:mt-3 md:max-h-0 md:translate-y-2 md:opacity-0 md:group-hover:max-h-32 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                    )}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary shadow-[0_20px_45px_-25px_rgba(37,99,235,0.75)] hover:bg-primary/90"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Trusted by market leaders</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">Partners count on Terz for compliant launches</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Over a decade of approvals for manufacturers, importers, and innovators expanding into India’s regulated markets.
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  {client}
                </div>
              ))}
            </div>
            <div className="grid w-full gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={cn(
                    "h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-60px_rgba(59,130,246,0.6)]",
                    glassPanel,
                  )}
                >
                  <CardContent className="flex h-full flex-col gap-4 p-6 text-left">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
                    <div className="mt-auto">
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
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Our 6-Step Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A systematic approach to compliance success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-70px_rgba(37,99,235,0.7)]",
                  glassPanel,
                )}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/25 text-lg font-semibold text-primary">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.1),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">Why teams choose Terz</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Predictable approvals, transparent communication, and a partner that safeguards compliance long after launch.
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
              <Card
                key={item.title}
                className={cn(
                  "h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_120px_-70px_rgba(14,165,233,0.55)]",
                  glassPanel,
                )}
              >
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/15">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Inline Form */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl p-8 shadow-[0_60px_140px_-70px_rgba(37,99,235,0.75)] lg:p-12",
              glassPanel,
            )}
          >
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
                  Share your product category and launch goals. We’ll assess requirements, outline documentation, and send a custom timeline within one business day.
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
                    className="w-full bg-primary shadow-[0_20px_45px_-25px_rgba(37,99,235,0.75)] hover:bg-primary/90"
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
    </div>
  );
};

export default Home;
