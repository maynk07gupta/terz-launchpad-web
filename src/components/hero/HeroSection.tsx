import * as React from "react";
import { motion } from "framer-motion";
import { ArcOrbitSystem } from "./ArcOrbitSystem";
import { useIsMobile } from "@/hooks/use-mobile";
import earthHeroImg from "@/assets/earth-hero.png";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = React.useState(false);
  
  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);
  
  // Earth image sizing - much wider to span full viewport
  const earthSize = isMobile ? "250vw" : isTablet ? "200vw" : "180vw";
  // How far below viewport bottom to push the Earth (shows only top curve)
  const earthOffset = isMobile ? "60%" : isTablet ? "55%" : "50%";
  // How much to show (top visible portion)
  const earthVisibleHeight = isMobile ? "40vh" : isTablet ? "45vh" : "50vh";
  
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
            radial-gradient(1.5px 1.5px at 30% 28%, hsla(0, 0%, 100%, 0.55) 50%, transparent),
            radial-gradient(1px 1px at 60% 32%, hsla(0, 0%, 100%, 0.6) 50%, transparent),
            radial-gradient(1px 1px at 80% 25%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1.5px 1.5px at 92% 20%, hsla(0, 0%, 100%, 0.45) 50%, transparent),
            radial-gradient(1px 1px at 5% 40%, hsla(0, 0%, 100%, 0.4) 50%, transparent),
            radial-gradient(1px 1px at 45% 38%, hsla(0, 0%, 100%, 0.5) 50%, transparent),
            radial-gradient(1.5px 1.5px at 75% 42%, hsla(0, 0%, 100%, 0.55) 50%, transparent)
          `,
          opacity: 0.8,
        }}
      />
      
      {/* Deep space nebula glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] -z-5" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[100px] -z-5" />

      {/* Arc Orbit System - planets orbit above Earth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-0"
        style={{ zIndex: 40 }}
      >
        <ArcOrbitSystem earthVisibleHeight={earthVisibleHeight} />
      </motion.div>

      {/* Large Earth image at bottom - spans full width centered */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2"
        style={{
          zIndex: 30,
          width: earthSize,
          height: earthSize,
          transform: "translateX(-50%)",
          bottom: `-${earthOffset}`,
        }}
      >
        <img 
          src={earthHeroImg} 
          alt="Earth" 
          className="w-full h-full rounded-full"
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>
      
      {/* Bottom gradient fade for smooth transition */}
      <div 
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
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
