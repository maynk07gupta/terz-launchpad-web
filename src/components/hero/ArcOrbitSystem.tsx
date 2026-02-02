import * as React from "react";
import { useEffect, useState } from "react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileCheck, Recycle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import service images
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";

const services = [
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

interface ArcOrbitConfig {
  orbitRadius: number;
  arcStartAngle: number;
  arcEndAngle: number;
  rotationSpeed: number;
  planetSize: number;
  earthCenterY: number;
}

const getArcConfig = (isMobile: boolean, isTablet: boolean): ArcOrbitConfig => {
  if (isMobile) {
    return {
      orbitRadius: 280,
      arcStartAngle: 155,
      arcEndAngle: 25,
      rotationSpeed: 8,
      planetSize: 55,
      earthCenterY: 320,
    };
  }
  if (isTablet) {
    return {
      orbitRadius: 380,
      arcStartAngle: 155,
      arcEndAngle: 25,
      rotationSpeed: 6,
      planetSize: 70,
      earthCenterY: 420,
    };
  }
  return {
    orbitRadius: 520,
    arcStartAngle: 155,
    arcEndAngle: 25,
    rotationSpeed: 5,
    planetSize: 85,
    earthCenterY: 520,
  };
};

interface ArcOrbitSystemProps {
  earthSize: number;
}

export const ArcOrbitSystem: React.FC<ArcOrbitSystemProps> = ({ earthSize }) => {
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  const config = getArcConfig(isMobile, isTablet);
  
  // Update orbit radius based on actual Earth size
  const earthRadius = earthSize / 2;
  const orbitHeight = isMobile ? 60 : isTablet ? 80 : 100;
  const actualOrbitRadius = earthRadius + orbitHeight;

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

  // Calculate planet position and visibility
  const calculatePlanetProps = (index: number) => {
    const totalPlanets = services.length;
    const arcSpan = 360; // Full circle for continuous loop
    const spacing = arcSpan / totalPlanets;
    
    // Base angle for this planet
    const baseAngle = config.arcStartAngle - (index * (config.arcStartAngle - config.arcEndAngle) / (totalPlanets - 1));
    
    // Animate with continuous movement
    const animatedAngle = baseAngle - (time * config.rotationSpeed);
    
    // Normalize angle to 0-360
    const normalizedAngle = ((animatedAngle % 360) + 360) % 360;
    
    // Convert to radians
    const angleRad = (normalizedAngle * Math.PI) / 180;
    
    // Calculate position relative to center
    const x = Math.cos(angleRad) * actualOrbitRadius;
    const y = -Math.sin(angleRad) * actualOrbitRadius;
    
    // Visibility: only show planets in the visible arc (top portion)
    const visibleStart = config.arcStartAngle + 15;
    const visibleEnd = config.arcEndAngle - 15;
    const fadeZone = 20;
    
    let opacity = 1;
    let zIndex = 50;
    
    // Check if in visible zone (angles between ~25° and ~155°)
    const isInVisibleZone = normalizedAngle <= visibleStart && normalizedAngle >= visibleEnd;
    
    if (!isInVisibleZone) {
      opacity = 0;
      zIndex = 20;
    } else if (normalizedAngle > config.arcStartAngle) {
      // Fading out on left side
      const fadeProgress = (normalizedAngle - config.arcStartAngle) / fadeZone;
      opacity = Math.max(0, 1 - fadeProgress);
      zIndex = 25;
    } else if (normalizedAngle < config.arcEndAngle) {
      // Fading out on right side
      const fadeProgress = (config.arcEndAngle - normalizedAngle) / fadeZone;
      opacity = Math.max(0, 1 - fadeProgress);
      zIndex = 25;
    }
    
    return { x, y, opacity, zIndex, angle: normalizedAngle };
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 40 }}
    >
      {/* Orbit path indicator (subtle) */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: isMobile ? "50%" : "38%",
          width: actualOrbitRadius * 2 + config.planetSize,
          height: actualOrbitRadius + config.planetSize,
          opacity: 0.15,
        }}
      >
        <path
          d={`M ${config.planetSize / 2} ${actualOrbitRadius + config.planetSize / 2} 
              A ${actualOrbitRadius} ${actualOrbitRadius} 0 0 1 ${actualOrbitRadius * 2 + config.planetSize / 2} ${actualOrbitRadius + config.planetSize / 2}`}
          fill="none"
          stroke="hsla(200, 80%, 60%, 0.5)"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
      </svg>

      {/* Orbiting planets */}
      {services.map((service, index) => {
        const props = calculatePlanetProps(index);
        const Icon = service.icon;
        const scaledSize = config.planetSize;

        return (
          <div
            key={service.id}
            className="absolute left-1/2 pointer-events-auto cursor-pointer group"
            style={{
              bottom: isMobile ? "50%" : "38%",
              transform: `translate(calc(-50% + ${props.x}px), ${-props.y}px)`,
              width: scaledSize,
              height: scaledSize,
              opacity: props.opacity,
              zIndex: props.zIndex,
              transition: "opacity 0.3s ease-out",
            }}
          >
            {/* Planet sphere */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
              style={{
                boxShadow: `0 0 20px ${service.glowColor}40, 0 0 40px ${service.glowColor}20`,
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
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }}
              />

              {/* Icon at top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <Icon
                  className="text-white drop-shadow-lg"
                  style={{
                    width: scaledSize * 0.22,
                    height: scaledSize * 0.22,
                    minWidth: 16,
                    minHeight: 16,
                  }}
                />
              </div>

              {/* Text at bottom */}
              <div className="absolute bottom-2 left-0 right-0 text-center px-1">
                <p
                  className="text-white font-semibold leading-tight drop-shadow-lg"
                  style={{
                    fontSize: Math.max(10, scaledSize * 0.13),
                  }}
                >
                  {service.shortTitle}
                </p>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 50% 30% at 30% 20%, rgba(255,255,255,0.3), transparent 60%)",
                }}
              />
            </div>

            {/* Title tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              <span className="text-xs font-medium text-foreground/80 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50">
                {service.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
