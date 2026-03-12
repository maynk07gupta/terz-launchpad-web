import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle, Store,
} from "lucide-react";

import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import wholesaleLicenseImg from "@/assets/wholesale-license.jpg";

const services = [
  { id: "medical-devices", title: "Medical Devices", tagline: "CDSCO registration & licensing", icon: Stethoscope, color: "217 91% 60%", image: medicalDevicesImg },
  { id: "ivd", title: "IVD", tagline: "In-vitro diagnostic licensing", icon: FlaskConical, color: "162 66% 40%", image: ivdImg },
  { id: "cosmetics", title: "Cosmetics", tagline: "Product registration & safety", icon: Sparkles, color: "280 65% 55%", image: cosmeticsImg },
  { id: "lmpc", title: "Legal Metrology", tagline: "Model approval & validation", icon: Scale, color: "37 94% 48%", image: lmpcImg },
  { id: "iec", title: "IEC", tagline: "Import export code registration", icon: FileText, color: "217 91% 45%", image: iecImg },
  { id: "epr", title: "EPR", tagline: "Extended producer responsibility", icon: Recycle, color: "162 66% 32%", image: eprImg },
  { id: "wholesale-license", title: "Wholesale License", tagline: "Drug wholesale licensing", icon: Store, color: "356 78% 50%", image: wholesaleLicenseImg },
];

// Desktop S-curve node positions (percentage based)
const nodePositions = [
  { x: 15, y: 8 },
  { x: 75, y: 12 },
  { x: 25, y: 32 },
  { x: 80, y: 38 },
  { x: 15, y: 58 },
  { x: 72, y: 62 },
  { x: 45, y: 85 },
];

export const ComplianceJourney = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Build SVG path through nodes
  const svgWidth = 400;
  const svgHeight = 500;
  const pathPoints = nodePositions.map((p) => ({
    x: (p.x / 100) * svgWidth,
    y: (p.y / 100) * svgHeight,
  }));

  let pathD = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
  for (let i = 1; i < pathPoints.length; i++) {
    const prev = pathPoints[i - 1];
    const curr = pathPoints[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cpx2 = curr.x - (curr.x - prev.x) * 0.5;
    pathD += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  if (isMobile) {
    // Mobile: vertical list with connecting line
    return (
      <div className="relative w-full py-4">
        {/* Vertical line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="flex flex-col gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              >
                <Link
                  to={`/services#${service.id}`}
                  className="flex items-center gap-4 pl-2 group"
                >
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 bg-card shadow-md"
                    style={{ borderColor: `hsl(${service.color})` }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: `hsl(${service.color})` }} />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{service.title}</p>
                    <p className="text-xs text-muted-foreground">{service.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ height: svgHeight }}>
      {/* SVG connecting path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="hsl(var(--primary) / 0.15)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Animated glow path on top */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="hsl(var(--primary) / 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>

      {/* Service Nodes */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const pos = nodePositions[i];
        const isHovered = hoveredIndex === i;

        return (
          <React.Fragment key={service.id}>
            {/* Node */}
            <motion.div
              className="absolute z-10"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/services#${service.id}`} className="block">
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `2px solid hsl(${service.color} / 0.3)`,
                    margin: "-6px",
                  }}
                  animate={isHovered ? { scale: 1.6, opacity: 0 } : { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                  transition={isHovered ? { duration: 0.4 } : { duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                />

                {/* Node circle */}
                <motion.div
                  className="relative flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 shadow-lg cursor-pointer"
                  style={{
                    borderColor: `hsl(${service.color})`,
                    boxShadow: isHovered ? `0 0 24px hsl(${service.color} / 0.4)` : "var(--shadow-md)",
                  }}
                  animate={isHovered ? { scale: 1.25 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon className="w-6 h-6" style={{ color: `hsl(${service.color})` }} />
                </motion.div>
              </Link>

              {/* Hover detail card */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute z-20 w-56 rounded-xl overflow-hidden bg-card border border-border shadow-lg"
                    style={{
                      left: pos.x > 50 ? "auto" : "calc(100% + 12px)",
                      right: pos.x > 50 ? "calc(100% + 12px)" : "auto",
                      top: "50%",
                      y: "-50%",
                    }}
                    initial={{ opacity: 0, scale: 0.85, x: pos.x > 50 ? 10 : -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.85, x: pos.x > 50 ? 10 : -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="relative h-24 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-3">
                      <p className="font-bold text-sm text-foreground">{service.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{service.tagline}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 font-medium">
                        Learn more →
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
