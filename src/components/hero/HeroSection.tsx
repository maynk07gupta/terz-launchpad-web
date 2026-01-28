import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroServiceCard } from "./HeroServiceCard";
import { QuickLinkPills } from "./QuickLinkPills";
import { HeroServiceCarousel } from "@/components/HeroServiceCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Import service images
import MedicalDevicesImage from "@/assets/medical-devices.jpg";
import IvdImage from "@/assets/ivd.jpg";
import CosmeticsImage from "@/assets/cosmetics.jpg";
import LmpcImage from "@/assets/lmpc.jpg";
import IecImage from "@/assets/iec.jpg";
import EprImage from "@/assets/epr.jpg";

// Service data with hierarchy
const heroServices = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    description: "End-to-end CDSCO registration for Class A-D devices",
    image: MedicalDevicesImage,
    badge: "CDSCO",
    isPrimary: true,
    size: "large" as const,
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    description: "Performance evaluation & IVD import licensing",
    image: IvdImage,
    badge: "CDSCO",
    isPrimary: true,
    size: "large" as const,
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    description: "Product registration & safety dossiers",
    image: CosmeticsImage,
    badge: "CDSCO",
    isPrimary: false,
    size: "medium" as const,
  },
  {
    id: "legal-metrology",
    title: "Legal Metrology",
    description: "Model approval & packaging validation",
    image: LmpcImage,
    badge: "Central-Level",
    isPrimary: false,
    size: "medium" as const,
  },
  {
    id: "iec",
    title: "Import Export Code",
    description: "IEC registration & renewals",
    image: IecImage,
    badge: "Lifetime Valid",
    isPrimary: false,
    size: "standard" as const,
  },
  {
    id: "epr",
    title: "EPR Compliance",
    description: "Annual returns & recycling management",
    image: EprImage,
    badge: "CPCB",
    isPrimary: false,
    size: "standard" as const,
  },
];

const trustBadges = [
  { icon: Shield, label: "ISO 13485 aligned" },
  { icon: CheckCircle, label: "CDSCO compliant" },
  { icon: Globe2, label: "Pan-India experts" },
  { icon: Clock, label: "24-hour response" },
];

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = React.useState({ x: 0.5, y: 0.5 });

  // Track mouse position for parallax effect
  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] lg:min-h-screen flex items-center py-12 lg:py-0"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/50 to-brand-50" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/6 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
      
      {/* Decorative dots */}
      <div className="absolute top-20 left-[15%] h-2 w-2 rounded-full bg-primary/40" />
      <div className="absolute top-32 left-[25%] h-1.5 w-1.5 rounded-full bg-accent/50" />
      <div className="absolute bottom-40 left-[10%] h-3 w-3 rounded-full bg-primary/30" />
      <div className="absolute top-40 right-[20%] h-2 w-2 rounded-full bg-accent/40" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,hsla(217,91%,60%,0.05),transparent_40%),radial-gradient(circle_at_70%_80%,hsla(162,66%,32%,0.06),transparent_45%)]" />

      {/* Left vignette for text contrast */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-r from-background/90 via-background/50 to-transparent lg:w-[60%]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-10 lg:gap-8 lg:grid-cols-[55%_45%]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 max-w-2xl space-y-5"
          >
            {/* Animated Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-primary animate-pulse-ring"
            >
              Your Regulatory Partner
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] text-heading"
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Regulatory & Compliance
              </span>{" "}
              Solutions in India
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground/80"
            >
              End-to-End Solutions for Medical Devices, IVDs, Cosmetics, and Beyond
            </motion.h2>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-base sm:text-lg px-7 py-5 lg:py-6 shadow-[0_20px_40px_-20px_hsla(217,91%,60%,0.5)] hover:bg-primary/90 transition-all hover:shadow-[0_25px_50px_-20px_hsla(217,91%,60%,0.6)] hover:-translate-y-0.5"
              >
                <Link to="/contact">
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base border-border/60 hover:border-primary/50 hover:bg-primary/5"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick Link Pills */}
            <div className="pt-4">
              <QuickLinkPills />
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-2 lg:gap-3"
            >
              {trustBadges.map((badge, index) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground border border-border/40 hover:bg-muted/70 transition-colors"
                >
                  <badge.icon className="h-3.5 w-3.5 text-primary" />
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            {/* Glow effects behind cards */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-accent/12 blur-3xl" />

            {/* Mobile: Show carousel */}
            {isMobile ? (
              <HeroServiceCarousel />
            ) : (
              /* Desktop: Show floating card grid */
              <div className="grid grid-cols-2 gap-4">
                {/* Top row - Large cards (Primary expertise) */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {heroServices.slice(0, 2).map((service, index) => (
                    <HeroServiceCard
                      key={service.id}
                      {...service}
                      index={index}
                      mousePosition={mousePosition}
                    />
                  ))}
                </div>
                
                {/* Middle row - Medium cards */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {heroServices.slice(2, 4).map((service, index) => (
                    <HeroServiceCard
                      key={service.id}
                      {...service}
                      index={index + 2}
                      mousePosition={mousePosition}
                    />
                  ))}
                </div>
                
                {/* Bottom row - Standard cards */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {heroServices.slice(4, 6).map((service, index) => (
                    <HeroServiceCard
                      key={service.id}
                      {...service}
                      index={index + 4}
                      mousePosition={mousePosition}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
