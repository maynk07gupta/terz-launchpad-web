import { motion } from "framer-motion";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  { icon: Stethoscope, label: "Medical Devices", orbit: 1, angle: 0, isPrimary: true },
  { icon: FlaskConical, label: "IVD", orbit: 1, angle: 180, isPrimary: true },
  { icon: Sparkles, label: "Cosmetics", orbit: 2, angle: 60, isPrimary: false },
  { icon: Scale, label: "Legal Metrology", orbit: 2, angle: 240, isPrimary: false },
  { icon: FileText, label: "IEC", orbit: 3, angle: 120, isPrimary: false },
  { icon: Recycle, label: "EPR", orbit: 3, angle: 300, isPrimary: false },
];

const orbitSizes = {
  1: { rx: 100, ry: 45 },   // Inner orbit - primary services
  2: { rx: 155, ry: 70 },   // Middle orbit
  3: { rx: 210, ry: 95 },   // Outer orbit
};

const orbitDurations = {
  1: 14,  // Fastest
  2: 20,  // Medium
  3: 28,  // Slowest
};

export const GlobeAnimation = () => {
  const isMobile = useIsMobile();
  const size = isMobile ? 320 : 480;
  const centerX = size / 2;
  const centerY = size / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background glow - enhanced */}
      <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-primary/25 via-primary/15 to-accent/20 blur-3xl" />
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-primary/20 to-accent/15 blur-2xl" />
      <div className="absolute inset-[30%] rounded-full bg-primary/10 blur-xl animate-pulse" />
      
      {/* Main SVG */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10"
        style={{ width: size, height: size }}
      >
        {/* 3D perspective orbit rings */}
        {[1, 2, 3].map((orbit) => {
          const { rx, ry } = orbitSizes[orbit as keyof typeof orbitSizes];
          const scale = isMobile ? 0.65 : 1;
          
          return (
            <g key={orbit}>
              {/* Orbit path - dashed line */}
              <motion.ellipse
                cx={centerX}
                cy={centerY}
                rx={rx * scale}
                ry={ry * scale}
                fill="none"
                stroke={orbit === 1 ? "hsl(217, 91%, 60%)" : orbit === 2 ? "hsl(162, 66%, 40%)" : "hsl(var(--border))"}
                strokeWidth={orbit === 1 ? 2.5 : orbit === 2 ? 1.5 : 1}
                strokeDasharray={orbit === 1 ? "8 4" : "5 5"}
                opacity={orbit === 1 ? 0.7 : orbit === 2 ? 0.5 : 0.35}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: orbit === 1 ? 0.7 : orbit === 2 ? 0.5 : 0.35 }}
                transition={{ duration: 1.5, delay: orbit * 0.2 }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative">
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div 
            className="flex items-center justify-center rounded-full bg-card border-2 border-primary/50 shadow-xl shadow-primary/40"
            style={{ 
              width: isMobile ? 70 : 95, 
              height: isMobile ? 70 : 95 
            }}
          >
            <img 
              src={logo} 
              alt="Terz" 
              className="object-contain"
              style={{ width: isMobile ? 44 : 58, height: isMobile ? 44 : 58 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Orbiting service icons */}
      {services.map((service, index) => {
        const { rx, ry } = orbitSizes[service.orbit as keyof typeof orbitSizes];
        const duration = orbitDurations[service.orbit as keyof typeof orbitDurations];
        const scale = isMobile ? 0.65 : 1;
        const iconSize = service.isPrimary ? (isMobile ? 52 : 64) : (isMobile ? 42 : 52);
        
        return (
          <motion.div
            key={service.label}
            className="absolute z-30"
            style={{
              left: centerX,
              top: centerY,
              marginLeft: -iconSize / 2,
              marginTop: -iconSize / 2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [
                Math.cos((service.angle * Math.PI) / 180) * rx * scale,
                Math.cos(((service.angle + 360) * Math.PI) / 180) * rx * scale,
              ],
              y: [
                Math.sin((service.angle * Math.PI) / 180) * ry * scale,
                Math.sin(((service.angle + 360) * Math.PI) / 180) * ry * scale,
              ],
            }}
            transition={{
              opacity: { delay: 0.5 + index * 0.1, duration: 0.4 },
              scale: { delay: 0.5 + index * 0.1, duration: 0.4, type: "spring" },
              x: {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              },
              y: {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              },
            }}
          >
          <motion.div
            className={`flex items-center justify-center rounded-full bg-card border-2 shadow-lg cursor-pointer transition-colors ${
              service.isPrimary
                ? "border-primary/70 shadow-primary/35 hover:border-primary hover:shadow-primary/50"
                : "border-border shadow-muted/25 hover:border-accent/60 hover:shadow-accent/25"
            }`}
            style={{ width: iconSize, height: iconSize }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <service.icon
              className={`${service.isPrimary ? "text-primary" : "text-muted-foreground"}`}
              style={{ 
                width: service.isPrimary ? (isMobile ? 26 : 32) : (isMobile ? 20 : 26),
                height: service.isPrimary ? (isMobile ? 26 : 32) : (isMobile ? 20 : 26),
              }}
            />
          </motion.div>
            
            {/* Label - only show on desktop */}
            {!isMobile && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium ${
                  service.isPrimary ? "text-foreground" : "text-muted-foreground"
                }`}
                style={{ top: iconSize + 4 }}
              >
                {service.label}
              </motion.span>
            )}
          </motion.div>
        );
      })}

      {/* Decorative floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
