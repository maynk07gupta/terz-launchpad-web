import { motion } from "framer-motion";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle } from "lucide-react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle, BookOpenCheck } from "lucide-react";
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
  1: { rx: 150, ry: 70 },   // Inner orbit - primary services
  2: { rx: 215, ry: 100 },  // Middle orbit
  3: { rx: 280, ry: 130 },  // Outer orbit
};

const orbitDurations = {
  1: 14,  // Fastest
  2: 20,  // Medium
  3: 28,  // Slowest
};

export const GlobeAnimation = () => {
  const isMobile = useIsMobile();
  const size = isMobile ? 360 : 620;
  const centerX = size / 2;
  const centerY = size / 2;
  const globeSize = isMobile ? 250 : 380;
  const globeInnerSize = isMobile ? 190 : 290;

  return (
    <div
      className="relative mx-auto w-[min(94vw,620px)] h-[min(94vw,620px)] lg:w-[min(90vw,620px)] lg:h-[min(90vw,620px)]"
  const size = isMobile ? 340 : 560;
  const centerX = size / 2;
  const centerY = size / 2;
  const globeSize = isMobile ? 200 : 320;
  const globeInnerSize = isMobile ? 150 : 250;

  return (
    <div
      className="relative mx-auto w-[min(92vw,560px)] h-[min(92vw,560px)] lg:w-[min(90vw,560px)] lg:h-[min(90vw,560px)]"
      style={{ width: size, height: size }}
    >
      {/* Starfield background */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "26px 26px, 42px 42px",
          backgroundPosition: "0 0, 10px 15px",
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 45px 45px",
          backgroundPosition: "0 0, 10px 15px",
          opacity: 0.35,
        }}
      />

      {/* Background glow */}
      <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-emerald-400/25 via-emerald-500/20 to-cyan-400/25 blur-3xl" />
      <div className="absolute inset-[4%] rounded-full bg-gradient-to-tr from-emerald-400/25 to-cyan-400/20 blur-2xl" />
      <div className="absolute inset-[20%] rounded-full bg-emerald-400/15 blur-xl animate-pulse" />

      {/* Globe core */}
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-500 to-cyan-500 shadow-[0_0_120px_rgba(16,185,129,0.5)]"
      <div className="absolute inset-[-18%] rounded-full bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-cyan-400/30 blur-3xl" />
      <div className="absolute inset-[5%] rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl" />
      <div className="absolute inset-[22%] rounded-full bg-emerald-400/15 blur-xl animate-pulse" />

      {/* Globe core */}
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-500 to-cyan-500 shadow-[0_0_80px_rgba(16,185,129,0.45)]"
        style={{
          width: globeSize,
          height: globeSize,
          marginLeft: -globeSize / 2,
          marginTop: -globeSize / 2,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-[8%] rounded-full opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)",
            backgroundSize: "7px 7px",
          }}
        />
        <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-emerald-200/70 via-emerald-400/45 to-cyan-400/45 blur-sm" />
        <div
          className="absolute inset-[10%] rounded-full opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(16,185,129,0.9) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
            mixBlendMode: "screen",
          }}
        />
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-[8%] rounded-full opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />
        <div className="absolute inset-[14%] rounded-full bg-gradient-to-br from-emerald-200/60 via-emerald-400/40 to-cyan-400/40 blur-sm" />
      </motion.div>

      {/* Inner glow core */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,224,71,0.65),transparent_65%)]"
        style={{
          width: globeInnerSize,
          height: globeInnerSize,
          marginLeft: -globeInnerSize / 2,
          marginTop: -globeInnerSize / 2,
        }}
      />

      {/* Light spikes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <div className="relative h-full w-full">
          {[...Array(32)].map((_, i) => (
            <div
              key={`spike-${i}`}
              className="absolute left-1/2 top-1/2 h-[18%] w-[2px] origin-bottom rounded-full bg-emerald-300/50"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 11.25}deg)`,
                filter: "blur(0.4px)",
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          {[...Array(24)].map((_, i) => (
            <div
              key={`spike-${i}`}
              className="absolute left-1/2 top-1/2 h-[22%] w-[2px] origin-bottom rounded-full bg-emerald-300/40"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>
      </div>
      
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
                stroke={orbit === 1 ? "rgba(16,185,129,0.65)" : orbit === 2 ? "rgba(34,211,238,0.55)" : "rgba(148,163,184,0.35)"}
                strokeWidth={orbit === 1 ? 2 : orbit === 2 ? 1.5 : 1}
                strokeDasharray={orbit === 1 ? "10 6" : "6 6"}
                opacity={orbit === 1 ? 0.65 : orbit === 2 ? 0.5 : 0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: orbit === 1 ? 0.65 : orbit === 2 ? 0.5 : 0.3 }}
                transition={{ duration: 1.5, delay: orbit * 0.2 }}
              />
            </g>
          );
        })}
      </svg>

      {/* Dotted continent overlay */}
      <motion.svg
        className="absolute left-1/2 top-1/2 z-20"
        width={globeSize}
        height={globeSize}
        viewBox="0 0 400 400"
        style={{ marginLeft: -globeSize / 2, marginTop: -globeSize / 2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="globe-highlight" cx="35%" cy="40%" r="55%">
            <stop offset="0%" stopColor="rgba(253,224,71,0.7)" />
            <stop offset="55%" stopColor="rgba(16,185,129,0.35)" />
            <stop offset="100%" stopColor="rgba(6,95,70,0.2)" />
          </radialGradient>
          <mask id="globe-mask">
            <circle cx="200" cy="200" r="185" fill="white" />
          </mask>
        </defs>
        <g mask="url(#globe-mask)">
          <circle cx="200" cy="200" r="185" fill="url(#globe-highlight)" />
          <path
            d="M70 160 L95 140 L120 150 L140 135 L165 140 L190 155 L210 150 L230 165 L240 190 L225 215 L200 225 L175 235 L150 230 L130 215 L115 200 L95 185 Z"
            stroke="rgba(34,211,238,0.7)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M210 110 L240 105 L275 120 L300 145 L320 170 L330 195 L315 215 L290 220 L265 210 L245 190 L230 170 L215 150 Z"
            stroke="rgba(34,211,238,0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M240 235 L270 240 L300 255 L315 280 L305 305 L275 315 L250 305 L230 285 L225 260 Z"
            stroke="rgba(34,211,238,0.6)"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </motion.svg>
      {/* Center Consultant Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-400/40"
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
            className="flex items-center justify-center rounded-full bg-card/90 border-2 border-emerald-400/60 shadow-xl shadow-emerald-400/40"
            style={{ 
              width: isMobile ? 64 : 88, 
              height: isMobile ? 64 : 88 
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 text-emerald-700">
              <BookOpenCheck className="h-6 w-6" />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Consult</span>
            </div>
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
            className={`flex items-center justify-center rounded-full bg-card/90 border-2 shadow-lg cursor-pointer transition-colors ${
              service.isPrimary
                ? "border-emerald-400/70 shadow-emerald-400/40 hover:border-emerald-400 hover:shadow-emerald-400/60"
                : "border-border shadow-muted/25 hover:border-cyan-300/60 hover:shadow-cyan-300/25"
            }`}
            style={{ width: iconSize, height: iconSize }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <service.icon
              className={`${service.isPrimary ? "text-emerald-500" : "text-muted-foreground"}`}
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
          className="absolute rounded-full bg-emerald-300/40"
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
