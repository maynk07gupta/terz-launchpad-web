import * as React from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Earth3D } from "./Earth3D";
import { ArcOrbitSystem } from "./ArcOrbitSystem";
import { useIsMobile } from "@/hooks/use-mobile";

// Fallback while 3D loads
const GlobeFallback = ({ size }: { size: number }) => (
  <div 
    className="rounded-full animate-pulse"
    style={{ 
      width: size, 
      height: size,
      background: "radial-gradient(circle at 60% 40%, hsl(200, 70%, 35%), hsl(220, 60%, 15%))",
      boxShadow: "0 0 100px hsla(200, 80%, 50%, 0.3)",
    }}
  />
);

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Globe size based on viewport
  const globeSize = isMobile ? 500 : 900;
  
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Dark space background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(180deg, 
            hsl(225, 35%, 8%) 0%, 
            hsl(225, 40%, 6%) 30%,
            hsl(228, 45%, 4%) 60%,
            hsl(230, 50%, 2%) 100%
          )`,
        }}
      />
      
      {/* Subtle star field */}
      <div 
        className="absolute inset-0 -z-5"
        style={{
          background: `
            radial-gradient(1px 1px at 10% 15%, hsla(0, 0%, 100%, 0.6) 50%, transparent),
            radial-gradient(1.5px 1.5px at 25% 8%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1px 1px at 40% 20%, hsla(0, 0%, 100%, 0.7) 50%, transparent),
            radial-gradient(1px 1px at 55% 5%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1.5px 1.5px at 70% 18%, hsla(0, 0%, 100%, 0.6) 50%, transparent),
            radial-gradient(1px 1px at 85% 12%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1px 1px at 15% 35%, hsla(0, 0%, 100%, 0.45) 50%, transparent),
            radial-gradient(1.5px 1.5px at 30% 45%, hsla(0, 0%, 100%, 0.55) 50%, transparent),
            radial-gradient(1px 1px at 60% 32%, hsla(0, 0%, 100%, 0.6) 50%, transparent),
            radial-gradient(1px 1px at 80% 42%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1.5px 1.5px at 92% 28%, hsla(0, 0%, 100%, 0.45) 50%, transparent),
            radial-gradient(1px 1px at 5% 55%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1px 1px at 45% 58%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1.5px 1.5px at 75% 62%, hsla(0, 0%, 100%, 0.55) 50%, transparent)
          `,
          opacity: 0.8,
        }}
      />
      
      {/* Deep space nebula glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] -z-5" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-5" />

      {/* Arc Orbit System - planets follow Earth's curve */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-0"
        style={{ zIndex: 40 }}
      >
        <ArcOrbitSystem earthSize={globeSize} />
      </motion.div>

      {/* Large 3D Earth at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute left-1/2"
        style={{
          bottom: 0,
          transform: `translateX(-50%) translateY(${isMobile ? "50%" : "38%"})`,
          zIndex: 30,
        }}
      >
        <Suspense fallback={<GlobeFallback size={globeSize} />}>
          <Earth3D size={globeSize} />
        </Suspense>
      </motion.div>
      
      {/* Bottom gradient fade for smooth transition */}
      <div 
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            hsl(230, 50%, 2%) 0%, 
            transparent 100%
          )`,
          zIndex: 60,
        }}
      />
    </section>
  );
};
