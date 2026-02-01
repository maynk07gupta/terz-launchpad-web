import * as React from "react";
import { motion } from "framer-motion";
import { EarthGlobe } from "./EarthGlobe";
import { PlanetaryOrbitHero } from "./PlanetaryOrbitHero";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Globe size based on viewport
  const globeSize = isMobile ? 450 : 800;
  
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Dark space background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, 
            hsl(225, 35%, 8%) 0%, 
            hsl(225, 40%, 6%) 30%,
            hsl(228, 45%, 5%) 60%,
            hsl(230, 50%, 3%) 100%
          )`,
        }}
      />
      
      {/* Subtle star field */}
      <div 
        className="absolute inset-0 -z-5"
        style={{
          background: `
            radial-gradient(1px 1px at 10% 20%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1px 1px at 25% 15%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1.5px 1.5px at 40% 25%, hsla(0, 0%, 100%, 0.6) 50%, transparent),
            radial-gradient(1px 1px at 55% 10%, hsla(0, 0%, 100%, 0.3) 50%, transparent),
            radial-gradient(1px 1px at 70% 22%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1.5px 1.5px at 85% 18%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1px 1px at 15% 45%, hsla(0, 0%, 100%, 0.35) 50%, transparent),
            radial-gradient(1px 1px at 30% 55%, hsla(0, 0%, 100%, 0.45) 50%, transparent),
            radial-gradient(1.5px 1.5px at 60% 40%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1px 1px at 80% 50%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1px 1px at 90% 35%, hsla(0, 0%, 100%, 0.35) 50%, transparent),
            radial-gradient(1px 1px at 5% 60%, hsla(0, 0%, 100%, 0.3) 50%, transparent),
            radial-gradient(1.5px 1.5px at 45% 65%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1px 1px at 75% 70%, hsla(0, 0%, 100%, 0.5) 50%, transparent)
          `,
          opacity: 0.7,
        }}
      />
      
      {/* Deep space nebula glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] -z-5" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-5" />

      {/* Orbiting planets - positioned in upper portion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-x-0 flex items-center justify-center"
        style={{
          top: isMobile ? "15%" : "20%",
          zIndex: 40,
        }}
      >
        <PlanetaryOrbitHero />
      </motion.div>

      {/* Large Earth at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 0,
          transform: `translateX(-50%) translateY(${isMobile ? "45%" : "35%"})`,
          zIndex: 30,
        }}
      >
        <EarthGlobe size={globeSize} />
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            hsl(230, 50%, 3%) 0%, 
            transparent 100%
          )`,
          zIndex: 60,
        }}
      />
    </section>
  );
};
