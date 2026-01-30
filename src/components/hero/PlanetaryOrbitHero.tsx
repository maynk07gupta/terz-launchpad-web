import * as React from "react";
import { useEffect, useState } from "react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileCheck, Recycle } from "lucide-react";
import { EarthGlobe } from "./EarthGlobe";
import { OrbitingPlanet } from "./OrbitingPlanet";
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
    startAngle: 270, // Front-right
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    shortTitle: "IVD",
    image: ivdImg,
    icon: FlaskConical,
    borderColor: "#14B8A6",
    glowColor: "#14B8A6",
    startAngle: 90, // Front-left
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    shortTitle: "Cosmetics",
    image: cosmeticsImg,
    icon: Sparkles,
    borderColor: "#EC4899",
    glowColor: "#EC4899",
    startAngle: 330, // Back-right
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    shortTitle: "LMPC",
    image: lmpcImg,
    icon: Scale,
    borderColor: "#F59E0B",
    glowColor: "#F59E0B",
    startAngle: 150, // Back-left
  },
  {
    id: "iec",
    title: "Import Export Code",
    shortTitle: "IEC",
    image: iecImg,
    icon: FileCheck,
    borderColor: "#22C55E",
    glowColor: "#22C55E",
    startAngle: 30, // Side-right
  },
  {
    id: "epr",
    title: "EPR Compliance",
    shortTitle: "EPR",
    image: eprImg,
    icon: Recycle,
    borderColor: "#6366F1",
    glowColor: "#6366F1",
    startAngle: 210, // Side-left
  },
];

interface OrbitConfig {
  radiusX: number;
  radiusY: number;
  duration: number;
  globeSize: number;
  planetSize: number;
}

const getOrbitConfig = (isMobile: boolean, isTablet: boolean): OrbitConfig => {
  if (isMobile) {
    return {
      radiusX: 130,
      radiusY: 75,
      duration: 30,
      globeSize: 100,
      planetSize: 55,
    };
  }
  if (isTablet) {
    return {
      radiusX: 200,
      radiusY: 110,
      duration: 26,
      globeSize: 150,
      planetSize: 75,
    };
  }
  return {
    radiusX: 260,
    radiusY: 145,
    duration: 24,
    globeSize: 180,
    planetSize: 95,
  };
};

export const PlanetaryOrbitHero: React.FC = () => {
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
  
  const config = getOrbitConfig(isMobile, isTablet);
  
  // Animation loop
  useEffect(() => {
    let animationId: number;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds
      setTime(elapsed);
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  // Calculate planet positions
  const calculatePlanetProps = (startAngle: number) => {
    const { radiusX, radiusY, duration } = config;
    
    // Current angle based on time (clockwise)
    const currentAngle = startAngle - (time / duration) * 360;
    const angleRad = (currentAngle * Math.PI) / 180;
    
    // Position on ellipse
    const x = Math.cos(angleRad) * radiusX;
    const y = Math.sin(angleRad) * radiusY;
    
    // Scale based on Y position (front = larger, back = smaller)
    // Y ranges from -radiusY (top/back) to +radiusY (bottom/front)
    const normalizedY = y / radiusY; // -1 to 1
    const scale = 0.7 + (normalizedY + 1) * 0.3; // 0.7 to 1.3
    
    // Opacity based on position (back planets slightly faded)
    const opacity = 0.6 + (normalizedY + 1) * 0.2; // 0.6 to 1.0
    
    // Z-index based on Y position
    const zIndex = Math.round(50 + normalizedY * 40); // 10 to 90
    
    return { x, y, scale, opacity, zIndex };
  };
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{
        width: config.radiusX * 2 + config.planetSize * 1.5,
        height: config.radiusY * 2 + config.planetSize * 2,
        minHeight: 300,
      }}
    >
      {/* Central Earth Globe */}
      <div className="absolute" style={{ zIndex: 40 }}>
        <EarthGlobe size={config.globeSize} />
      </div>
      
      {/* Orbiting Service Planets */}
      {services.map((service) => {
        const props = calculatePlanetProps(service.startAngle);
        
        return (
          <OrbitingPlanet
            key={service.id}
            id={service.id}
            title={service.title}
            shortTitle={service.shortTitle}
            image={service.image}
            icon={service.icon}
            borderColor={service.borderColor}
            glowColor={service.glowColor}
            size={config.planetSize}
            {...props}
          />
        );
      })}
    </div>
  );
};
