import * as React from "react";
import { motion } from "framer-motion";

interface EarthGlobeProps {
  size?: number;
}

export const EarthGlobe: React.FC<EarthGlobeProps> = ({ size = 320 }) => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size, zIndex: 50 }}
    >
      {/* Atmosphere glow - outermost layer */}
      <div 
        className="absolute rounded-full animate-globe-glow"
        style={{
          width: size * 1.15,
          height: size * 1.15,
          background: "radial-gradient(circle, hsl(217, 91%, 60%, 0.3) 0%, hsl(217, 91%, 50%, 0.15) 40%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      
      {/* Main globe container with rotation */}
      <motion.div
        className="relative rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          animation: "globe-spin 80s linear infinite",
        }}
      >
        {/* Base gradient - Deep Ocean */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, 
                hsl(200, 85%, 55%) 0%, 
                hsl(210, 80%, 45%) 25%, 
                hsl(217, 75%, 35%) 50%, 
                hsl(220, 70%, 25%) 75%, 
                hsl(225, 65%, 18%) 100%
              )
            `,
          }}
        />
        
        {/* Detailed continent patterns */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ opacity: 0.9 }}
        >
          {/* North America */}
          <path
            d="M 20 25 Q 25 20 35 22 Q 40 25 38 35 Q 35 45 25 42 Q 18 38 20 25"
            fill="hsl(145, 50%, 35%)"
          />
          <path
            d="M 22 27 Q 26 23 32 24 Q 36 27 34 34 Q 32 40 25 38 Q 20 35 22 27"
            fill="hsl(150, 45%, 40%)"
          />
          
          {/* South America */}
          <path
            d="M 28 55 Q 35 50 38 58 Q 40 70 32 78 Q 26 75 25 65 Q 24 58 28 55"
            fill="hsl(140, 48%, 32%)"
          />
          
          {/* Europe */}
          <path
            d="M 48 22 Q 55 18 62 22 Q 65 28 60 32 Q 52 35 48 30 Q 45 26 48 22"
            fill="hsl(148, 45%, 38%)"
          />
          
          {/* Africa */}
          <path
            d="M 52 40 Q 60 35 68 42 Q 72 55 65 68 Q 55 75 50 62 Q 48 50 52 40"
            fill="hsl(142, 52%, 30%)"
          />
          <path
            d="M 54 44 Q 60 40 65 46 Q 68 55 62 64 Q 55 68 52 58 Q 50 50 54 44"
            fill="hsl(145, 48%, 35%)"
          />
          
          {/* Asia */}
          <path
            d="M 62 20 Q 75 15 85 22 Q 90 32 82 40 Q 72 45 65 38 Q 58 30 62 20"
            fill="hsl(138, 50%, 33%)"
          />
          <path
            d="M 70 28 Q 78 24 82 30 Q 85 38 78 42 Q 70 44 68 38 Q 66 32 70 28"
            fill="hsl(152, 45%, 40%)"
          />
          
          {/* Australia */}
          <path
            d="M 78 58 Q 88 55 92 62 Q 94 72 86 76 Q 76 74 75 66 Q 74 60 78 58"
            fill="hsl(144, 50%, 32%)"
          />
          
          {/* Additional land masses for realism */}
          <ellipse cx="15" cy="45" rx="5" ry="8" fill="hsl(146, 45%, 36%)" opacity="0.7" />
          <ellipse cx="88" cy="38" rx="6" ry="5" fill="hsl(150, 42%, 38%)" opacity="0.8" />
        </svg>
        
        {/* Latitude/Longitude grid - subtle */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ opacity: 0.15 }}
        >
          {/* Latitude lines */}
          <ellipse cx="50" cy="20" rx="45" ry="6" fill="none" stroke="white" strokeWidth="0.3" />
          <ellipse cx="50" cy="35" rx="48" ry="9" fill="none" stroke="white" strokeWidth="0.3" />
          <ellipse cx="50" cy="50" rx="50" ry="10" fill="none" stroke="white" strokeWidth="0.4" />
          <ellipse cx="50" cy="65" rx="48" ry="9" fill="none" stroke="white" strokeWidth="0.3" />
          <ellipse cx="50" cy="80" rx="45" ry="6" fill="none" stroke="white" strokeWidth="0.3" />
          
          {/* Longitude lines */}
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" />
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(120 50 50)" />
          <ellipse cx="50" cy="50" rx="10" ry="50" fill="none" stroke="white" strokeWidth="0.3" transform="rotate(150 50 50)" />
        </svg>
        
        {/* Cloud layer - subtle wisps */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ opacity: 0.2 }}
        >
          <ellipse cx="30" cy="30" rx="15" ry="5" fill="white" />
          <ellipse cx="70" cy="25" rx="12" ry="4" fill="white" />
          <ellipse cx="55" cy="55" rx="18" ry="6" fill="white" />
          <ellipse cx="25" cy="70" rx="10" ry="4" fill="white" />
          <ellipse cx="80" cy="65" rx="14" ry="5" fill="white" />
        </svg>
        
        {/* Specular highlight - top left shine */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 45% 35% at 28% 22%, 
                rgba(255,255,255,0.5) 0%, 
                rgba(255,255,255,0.2) 30%, 
                transparent 60%
              )
            `,
          }}
        />
        
        {/* Secondary highlight - subtle edge */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 30% 20% at 75% 15%, 
                rgba(255,255,255,0.15) 0%, 
                transparent 50%
              )
            `,
          }}
        />
        
        {/* Shadow - bottom right for 3D depth */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 78% 82%, 
                rgba(0,0,0,0.45) 0%, 
                rgba(0,0,0,0.2) 40%, 
                transparent 60%
              )
            `,
          }}
        />
        
        {/* Inner edge shadow for more depth */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: "inset -15px -15px 40px rgba(0,0,0,0.3), inset 10px 10px 30px rgba(255,255,255,0.1)",
          }}
        />
      </motion.div>
      
      {/* Outer rim glow */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          boxShadow: `
            0 0 30px hsl(217, 91%, 60%, 0.3),
            0 0 60px hsl(217, 91%, 50%, 0.2),
            0 0 90px hsl(200, 80%, 50%, 0.1)
          `,
        }}
      />
    </div>
  );
};
