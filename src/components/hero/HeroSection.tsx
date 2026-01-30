import * as React from "react";
import { motion } from "framer-motion";
import { PlanetaryOrbitHero } from "./PlanetaryOrbitHero";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-12 lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/40 to-brand-100" />
      
      {/* Decorative background blurs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-accent/5 blur-3xl" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_20%,hsla(0,0%,100%,0.02)_100%)]" />

      {/* Centered Planetary Orbit Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <PlanetaryOrbitHero />
      </motion.div>
    </section>
  );
};
