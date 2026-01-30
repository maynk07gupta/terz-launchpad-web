import * as React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/hero/HeroSection";
import { SubHeroSection } from "@/components/hero/SubHeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { ValuePropositionGrid } from "@/components/home/ValuePropositionGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import PlanetServicesSection from "@/components/PlanetServicesSection";
import { motion } from "framer-motion";

const glassPanel = "border border-border/60 bg-card shadow-surface";

const Home = () => {
  const navigate = useNavigate();

  const handleLeadFormSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/contact");
    },
    [navigate]
  );

  return (
    <div className="min-h-screen">
      {/* ========== SECTION 1: New Hero Section with Floating Cards ========== */}
      <HeroSection />

      {/* ========== SECTION 2: Sub-Hero with Circular Infographic ========== */}
      <SubHeroSection />

      {/* ========== SECTION 3: Animated Stats Bar ========== */}
      <StatsBar />

      {/* ========== SECTION 3: Planet Services Showcase ========== */}
      <PlanetServicesSection />

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
