import * as React from "react";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

interface EarthGlobeProps {
  size?: number;
}

export const EarthGlobe: React.FC<EarthGlobeProps> = ({ size = 200 }) => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Outer glow ring */}
      <div 
        className="absolute inset-0 rounded-full animate-globe-glow"
        style={{
          background: "radial-gradient(circle, transparent 40%, hsl(var(--primary) / 0.1) 70%, transparent 100%)",
        }}
      />
      
      {/* Main globe */}
      <motion.div
        className="relative rounded-full overflow-hidden animate-globe-spin"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Base gradient - Ocean */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(217, 91%, 65%), hsl(217, 91%, 45%) 50%, hsl(217, 91%, 30%) 100%)",
          }}
        />
        
        {/* Continent patterns - Teal accents */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          {/* Continent-like shapes */}
          <ellipse cx="35" cy="35" rx="15" ry="12" fill="hsl(162, 66%, 32%)" opacity="0.8" />
          <ellipse cx="65" cy="45" rx="18" ry="14" fill="hsl(162, 66%, 35%)" opacity="0.7" />
          <ellipse cx="45" cy="70" rx="12" ry="10" fill="hsl(162, 66%, 30%)" opacity="0.75" />
          <ellipse cx="75" cy="65" rx="10" ry="8" fill="hsl(162, 66%, 38%)" opacity="0.65" />
          <ellipse cx="25" cy="55" rx="8" ry="12" fill="hsl(162, 66%, 33%)" opacity="0.7" />
        </svg>
        
        {/* Latitude/Longitude grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 100 100"
        >
          {/* Horizontal latitude lines */}
          <ellipse cx="50" cy="25" rx="45" ry="8" fill="none" stroke="white" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="12" fill="none" stroke="white" strokeWidth="0.5" />
          <ellipse cx="50" cy="75" rx="45" ry="8" fill="none" stroke="white" strokeWidth="0.5" />
          
          {/* Vertical longitude lines */}
          <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(45 50 50)" />
          <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(135 50 50)" />
        </svg>
        
        {/* 3D highlight - top left shine */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 30% 25%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />
        
        {/* Shadow - bottom right */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 75% 80%, rgba(0,0,0,0.3), transparent 50%)",
          }}
        />
      </motion.div>
      
      {/* Center logo overlay */}
      <div 
        className="absolute flex items-center justify-center rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg"
        style={{
          width: size * 0.35,
          height: size * 0.35,
        }}
      >
        <img 
          src={logoImage} 
          alt="Terz" 
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
      
      {/* Orbit path indicator (subtle) */}
      <svg
        className="absolute pointer-events-none opacity-20"
        style={{
          width: size * 2.8,
          height: size * 1.6,
        }}
        viewBox="0 0 280 160"
      >
        <ellipse
          cx="140"
          cy="80"
          rx="138"
          ry="78"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="animate-orbit-dash"
        />
      </svg>
    </div>
  );
};
