import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileCheck, Recycle, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import service images
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  icon: LucideIcon;
  borderColor: string;
  glowColor: string;
}

const services: Service[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    shortTitle: "MD",
    image: medicalDevicesImg,
    icon: Stethoscope,
    borderColor: "#3B82F6",
    glowColor: "#3B82F6",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    shortTitle: "IVD",
    image: ivdImg,
    icon: FlaskConical,
    borderColor: "#14B8A6",
    glowColor: "#14B8A6",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    shortTitle: "Cosmetics",
    image: cosmeticsImg,
    icon: Sparkles,
    borderColor: "#EC4899",
    glowColor: "#EC4899",
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    shortTitle: "LMPC",
    image: lmpcImg,
    icon: Scale,
    borderColor: "#F59E0B",
    glowColor: "#F59E0B",
  },
  {
    id: "iec",
    title: "Import Export Code",
    shortTitle: "IEC",
    image: iecImg,
    icon: FileCheck,
    borderColor: "#22C55E",
    glowColor: "#22C55E",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    shortTitle: "EPR",
    image: eprImg,
    icon: Recycle,
    borderColor: "#6366F1",
    glowColor: "#6366F1",
  },
];

interface ArcOrbitSystemProps {
  earthSize: number;
  earthBottomOffset: number; // How much Earth extends below viewport (percentage)
}

export const ArcOrbitSystem: React.FC<ArcOrbitSystemProps> = ({ 
  earthSize, 
  earthBottomOffset 
}) => {
  const isMobile = useIsMobile();
  const [time, setTime] = useState(0);

  // Configuration based on viewport
  const config = useMemo(() => {
    const earthRadius = earthSize / 2;
    // Orbit sits above the visible part of Earth - higher orbit for better visibility
    const orbitHeight = isMobile ? 50 : 90;
    const orbitRadius = earthRadius + orbitHeight;
    
    return {
      earthRadius,
      orbitRadius,
      planetSize: isMobile ? 55 : 85,
      // Arc spans the top portion - wider arc for more visibility
      arcStartAngle: 160, // left edge (further left)
      arcEndAngle: 20,    // right edge (further right)
      rotationSpeed: 8,   // degrees per second (slightly faster)
    };
  }, [earthSize, isMobile]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      setTime(elapsed);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Calculate Earth center position (from bottom of viewport)
  const earthCenterFromBottom = earthSize * (1 - earthBottomOffset / 100);
  
  // Calculate planet positions - moving LEFT to RIGHT along the arc
  const getPlanetPosition = (index: number) => {
    const totalPlanets = services.length;
    
    // Full arc span in degrees
    const arcSpan = config.arcStartAngle - config.arcEndAngle; // 140 degrees (160 - 20)
    
    // Spacing between planets (they should be spread out evenly for smooth loop)
    const planetSpacing = 50; // degrees between each planet
    
    // Total animation cycle = when all planets have moved through the full arc
    const fullCycleAngle = totalPlanets * planetSpacing;
    
    // Each planet starts at a different offset
    const startOffset = index * planetSpacing;
    
    // Animated position - moves from LEFT (high angle) to RIGHT (low angle)
    // time * rotationSpeed gives us how many degrees we've moved
    const animatedProgress = (time * config.rotationSpeed) % fullCycleAngle;
    
    // Calculate current angle on the arc
    // Start from left (arcStartAngle=160°), move towards right (arcEndAngle=20°)
    // As time increases, angle decreases (moving right)
    const rawAngle = config.arcStartAngle - ((startOffset + animatedProgress) % fullCycleAngle);
    
    // Normalize angle to handle wrapping - planets loop continuously
    let positionAngle = rawAngle;
    if (positionAngle < config.arcEndAngle - 30) {
      // Wrap around to the left side
      positionAngle += fullCycleAngle;
    }
    
    // Calculate x, y relative to Earth center
    const angleRad = (positionAngle * Math.PI) / 180;
    const x = Math.cos(angleRad) * config.orbitRadius;
    const y = -Math.sin(angleRad) * config.orbitRadius;
    
    // Visibility: fade in from left edge, fade out at right edge
    let opacity = 1;
    let visible = true;
    const fadeZone = 20;
    
    if (positionAngle > config.arcStartAngle) {
      // Entering from left - fade in
      const overshoot = positionAngle - config.arcStartAngle;
      opacity = Math.max(0, 1 - overshoot / fadeZone);
      if (opacity <= 0) visible = false;
    } else if (positionAngle < config.arcEndAngle) {
      // Exiting on right - fade out
      const overshoot = config.arcEndAngle - positionAngle;
      opacity = Math.max(0, 1 - overshoot / fadeZone);
      if (opacity <= 0) visible = false;
    }
    
    // Z-index: planets at center of arc (90°) are in front
    const distanceFromCenter = Math.abs(positionAngle - 90);
    const zIndex = visible ? Math.round(50 - distanceFromCenter / 3) : 20;
    
    return { x, y, opacity, zIndex, visible, angle: positionAngle };
  };

  return (
    <div 
      className="absolute inset-x-0 bottom-0 pointer-events-none overflow-visible"
      style={{ 
        height: earthCenterFromBottom + config.orbitRadius + config.planetSize,
        zIndex: 40,
      }}
    >
      {/* Orbit path indicator (subtle dashed line) */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: earthCenterFromBottom - config.orbitRadius,
          width: config.orbitRadius * 2 + 40,
          height: config.orbitRadius + 40,
          opacity: 0.2,
        }}
        viewBox={`0 0 ${config.orbitRadius * 2 + 40} ${config.orbitRadius + 40}`}
      >
        <path
          d={`M 20 ${config.orbitRadius + 20} 
              A ${config.orbitRadius} ${config.orbitRadius} 0 0 1 ${config.orbitRadius * 2 + 20} ${config.orbitRadius + 20}`}
          fill="none"
          stroke="hsla(200, 80%, 60%, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="10 5"
        />
      </svg>

      {/* Orbiting service planets */}
      {services.map((service, index) => {
        const pos = getPlanetPosition(index);
        const Icon = service.icon;
        
        if (!pos.visible && pos.opacity <= 0) return null;

        return (
          <div
            key={service.id}
            className="absolute left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              bottom: earthCenterFromBottom + pos.y - config.planetSize / 2,
              left: `calc(50% + ${pos.x}px - ${config.planetSize / 2}px)`,
              width: config.planetSize,
              height: config.planetSize,
              opacity: pos.opacity,
              zIndex: pos.zIndex,
              transition: "opacity 0.2s ease-out",
            }}
          >
            {/* Planet sphere */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
              style={{
                boxShadow: `0 0 20px ${service.glowColor}50, 0 0 40px ${service.glowColor}30`,
                border: `3px solid ${service.borderColor}`,
              }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />

              {/* Icon at top */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2">
                <Icon
                  className="text-white drop-shadow-lg"
                  style={{
                    width: config.planetSize * 0.24,
                    height: config.planetSize * 0.24,
                    minWidth: 14,
                    minHeight: 14,
                  }}
                />
              </div>

              {/* Text at bottom */}
              <div className="absolute bottom-1.5 left-0 right-0 text-center px-1">
                <p
                  className="text-white font-semibold leading-tight drop-shadow-lg"
                  style={{
                    fontSize: Math.max(9, config.planetSize * 0.14),
                  }}
                >
                  {service.shortTitle}
                </p>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 50% 30% at 30% 20%, rgba(255,255,255,0.35), transparent 60%)",
                }}
              />
            </div>

            {/* Title tooltip on hover */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              <span className="text-xs font-medium text-white bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg">
                {service.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
