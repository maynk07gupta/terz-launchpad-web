import * as React from "react";
import { ArrowRight, CheckCircle, Globe2, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { HeroServiceCarousel } from "@/components/HeroServiceCarousel";
import { StatsBar } from "@/components/home/StatsBar";
import { ValuePropositionGrid } from "@/components/home/ValuePropositionGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

// Service data for the showcase grid
import MedicalDevicesImage from "@/assets/medical-devices.jpg";
import IvdImage from "@/assets/ivd.jpg";
import CosmeticsImage from "@/assets/cosmetics.jpg";
import LmpcImage from "@/assets/lmpc.jpg";
import IecImage from "@/assets/iec.jpg";
import EprImage from "@/assets/epr.jpg";

const services = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "CDSCO submissions prepared end-to-end with risk-based documentation reviews.",
    image: MedicalDevicesImage,
    badge: "CDSCO",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Performance evaluation oversight and IVD import licensing support.",
    image: IvdImage,
    badge: "CDSCO",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Product registration, safety dossiers, and artwork compliance.",
    image: CosmeticsImage,
    badge: "CDSCO",
  },
  {
    id: "legal-metrology",
    title: "Legal Metrology",
    tagline: "Model approval, packaging validation, and audit-ready reports.",
    image: LmpcImage,
    badge: "Central-Level",
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration, renewals, and supply chain partner onboarding.",
    image: IecImage,
    badge: "Lifetime Valid",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "Annual returns, recycling partner management, and evidence tracking.",
    image: EprImage,
    badge: "CPCB",
  },
];

const glassPanel = "border border-border/60 bg-card shadow-surface";

const Home = () => {
  const navigate = useNavigate();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const handleLeadFormSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/contact");
    },
    [navigate]
  );

  return (
    <div className="min-h-screen">
      {/* ========== SECTION 1: Hero Section ========== */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center py-12 lg:py-0">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/50 to-brand-50" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/6 blur-3xl" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,hsla(209,53%,23%,0.04),transparent_40%),radial-gradient(circle_at_70%_80%,hsla(162,66%,32%,0.06),transparent_45%)]" />

        {/* Vignette overlay */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:w-[60%]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.6fr_1fr]">
            {/* Left Column - Text Content (60%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1 max-w-3xl space-y-4 lg:space-y-5"
            >
              {/* Section Label */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.25em] text-primary"
              >
                Regulatory approvals simplified
              </motion.span>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight text-heading"
              >
                Accelerate India's{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  regulatory approvals
                </span>
                .
              </motion.h1>

              {/* Sub-heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary/90"
              >
                Your end-to-end partner for CDSCO, Legal Metrology, EPR & more.
              </motion.h2>

              {/* Supporting Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed"
              >
                We help manufacturers and importers across medical devices, IVDs, cosmetics and beyond launch faster with confidence.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-base sm:text-lg px-7 py-5 lg:py-6 shadow-[0_20px_40px_-20px_hsla(217,91%,60%,0.5)] hover:bg-primary/90 transition-all hover:shadow-[0_25px_50px_-20px_hsla(217,91%,60%,0.6)]"
                >
                  <Link to="/contact">
                    Book a consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="text-base sm:text-lg text-foreground/80 hover:text-primary group underline underline-offset-6 decoration-foreground/30 hover:decoration-primary"
                >
                  <Link to="/services" className="flex items-center gap-1">
                    Explore all services{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="pt-3 lg:pt-4 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs sm:text-sm lg:text-base text-muted-foreground"
              >
                {[
                  { icon: Shield, label: "ISO 13485 aligned" },
                  { icon: CheckCircle, label: "CDSCO compliant" },
                  { icon: Globe2, label: "Pan-India experts" },
                  { icon: null, label: "24-hour response" },
                ].map((badge, index) => (
                  <React.Fragment key={badge.label}>
                    {index > 0 && <span className="text-muted-foreground/40">•</span>}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-3 py-1.5 border border-border/30 shadow-[0_10px_25px_-20px_rgba(0,0,0,0.45)] hover:bg-muted/60 transition-colors"
                    >
                      {badge.icon && <badge.icon className="h-3.5 w-3.5 text-primary" />}
                      {badge.label}
                    </motion.span>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Service Carousel (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="order-1 lg:order-2 relative group"
            >
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
              <HeroServiceCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Animated Stats Bar ========== */}
      <StatsBar />

      {/* ========== SECTION 3: Services Showcase ========== */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
              Comprehensive Regulatory Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              End-to-end compliance solutions across India's key regulatory frameworks.
            </p>
          </div>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <AnimatedServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                tagline={service.tagline}
                image={service.image}
                badge={service.badge}
                index={index}
                isVisible={servicesVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Value Proposition Grid ========== */}
      <ValuePropositionGrid />

      {/* ========== SECTION 5: Process Timeline ========== */}
      <ProcessTimeline />

      {/* ========== SECTION 6: Testimonials & Social Proof ========== */}
      <TestimonialCarousel />

      {/* ========== SECTION 7: Final CTA with Form ========== */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-50/40 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl p-8 shadow-lg lg:p-12",
              glassPanel
            )}
          >
            {/* Background elements */}
            <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-accent/6 blur-3xl" />
            
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Left Column - Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
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
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <form onSubmit={handleLeadFormSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="lead-name">Full name</Label>
                    <Input
                      id="lead-name"
                      name="name"
                      placeholder="Priya Mehta"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-email">Work email</Label>
                    <Input
                      id="lead-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-company">Company</Label>
                    <Input
                      id="lead-company"
                      name="company"
                      placeholder="Your organisation"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-notes">Product or compliance goals</Label>
                    <Textarea
                      id="lead-notes"
                      name="notes"
                      placeholder="Tell us about your device, cosmetic line, or expansion plans."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary shadow-lg hover:bg-primary/90 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Schedule my assessment</span>
                    {/* Pulse glow effect */}
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy" className="underline hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
