import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickLinkPills } from "./QuickLinkPills";
import { GlobeAnimation } from "./GlobeAnimation";

const trustBadges = [
  { icon: Shield, label: "ISO 13485 aligned" },
  { icon: CheckCircle, label: "CDSCO compliant" },
  { icon: Globe2, label: "Pan-India experts" },
  { icon: Clock, label: "24-hour response" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-12 lg:py-0 bg-slate-950 text-white">
      {/* Deep space background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px, 60px 60px",
          backgroundPosition: "0 0, 15px 20px",
        }}
      />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-3xl" />
    <section className="relative overflow-hidden min-h-screen flex items-center py-12 lg:py-0">
      {/* Enhanced Background Elements - Higher contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/60 to-brand-100" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/12 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
      
      {/* Enhanced decorative dots - more visible */}
      <div className="absolute top-20 left-[15%] h-3 w-3 rounded-full bg-emerald-300/60 animate-pulse" />
      <div className="absolute top-32 left-[25%] h-2 w-2 rounded-full bg-cyan-300/70" />
      <div className="absolute bottom-40 left-[10%] h-4 w-4 rounded-full bg-emerald-300/50" />
      <div className="absolute top-40 right-[20%] h-3 w-3 rounded-full bg-cyan-300/60" />
      <div className="absolute bottom-20 right-[15%] h-2 w-2 rounded-full bg-emerald-300/50 animate-pulse" />
      
      {/* Radial gradient overlay - enhanced */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_45%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[55%_45%]">
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
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
              </span>
              Your Regulatory Partner
            </motion.span>

            {/* Main Headline - Enhanced contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] text-white"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.35)" }}
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
                Regulatory & Compliance
              </span>{" "}
              Solutions in India
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl lg:text-2xl font-medium text-white/80"
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
                className="text-base border-border hover:border-primary/50 hover:bg-primary/5"
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
                  className="inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1.5 text-xs text-foreground/80 border border-border/60 hover:bg-card hover:border-primary/30 transition-all shadow-sm"
                >
                  <badge.icon className="h-3.5 w-3.5 text-primary" />
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Globe Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <GlobeAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
