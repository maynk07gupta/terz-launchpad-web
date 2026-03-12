import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle, Store,
  ShieldCheck, Globe, BadgeCheck, Microscope, Pill, Factory, Landmark,
} from "lucide-react";

/* ── Service orbit nodes ── */
const orbitNodes = [
  { icon: Stethoscope, label: "Medical Devices", color: "217 91% 60%", angle: 0 },
  { icon: FlaskConical, label: "IVD", color: "162 66% 40%", angle: 51 },
  { icon: Sparkles, label: "Cosmetics", color: "280 65% 55%", angle: 103 },
  { icon: Scale, label: "Legal Metrology", color: "37 94% 48%", angle: 154 },
  { icon: FileText, label: "IEC", color: "217 91% 45%", angle: 206 },
  { icon: Recycle, label: "EPR", color: "162 66% 32%", angle: 257 },
  { icon: Store, label: "Wholesale", color: "356 78% 50%", angle: 309 },
];

/* ── Floating background icons (scattered, decorative) ── */
const bgIcons = [
  { icon: ShieldCheck, x: 6, y: 18, size: 28, delay: 0 },
  { icon: Globe, x: 90, y: 12, size: 32, delay: 1 },
  { icon: BadgeCheck, x: 14, y: 75, size: 24, delay: 2 },
  { icon: Microscope, x: 88, y: 70, size: 26, delay: 0.5 },
  { icon: Pill, x: 4, y: 45, size: 22, delay: 1.5 },
  { icon: Factory, x: 94, y: 42, size: 24, delay: 3 },
  { icon: Landmark, x: 50, y: 6, size: 26, delay: 2.5 },
  { icon: ShieldCheck, x: 48, y: 90, size: 22, delay: 1.2 },
];

/* ── Particle dots ── */
const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
}));

export const HeroSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => setIsMounted(true), []);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  // Orbit radius responsive
  const orbitRadius = typeof window !== "undefined" && window.innerWidth < 640 ? 130 : typeof window !== "undefined" && window.innerWidth < 1024 ? 180 : 240;
  const nodeSize = typeof window !== "undefined" && window.innerWidth < 640 ? 44 : 56;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(217, 89%, 97%) 30%, hsl(162, 55%, 97%) 60%, hsl(217, 89%, 97%) 80%, hsl(var(--background)) 100%)",
        }} />

        {/* Mouse spotlight */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            x: useTransform(smoothX, v => v - 350),
            y: useTransform(smoothY, v => v - 350),
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        {/* Particle dots */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/10"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -30, 15, -20, 0], opacity: [0.3, 0.7, 0.4, 0.8, 0.3] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Floating background icons ── */}
      {bgIcons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none text-primary/[0.06]"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{ y: [0, -15, 8, -10, 0], rotate: [0, 5, -3, 4, 0] }}
            transition={{ duration: 14 + i * 2, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          >
            <Icon style={{ width: item.size, height: item.size }} />
          </motion.div>
        );
      })}

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Orbit system */}
        <div className="relative" style={{ width: orbitRadius * 2 + nodeSize + 40, height: orbitRadius * 2 + nodeSize + 40 }}>

          {/* Orbit ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${orbitRadius * 2 + nodeSize + 40} ${orbitRadius * 2 + nodeSize + 40}`}>
            <motion.circle
              cx={(orbitRadius * 2 + nodeSize + 40) / 2}
              cy={(orbitRadius * 2 + nodeSize + 40) / 2}
              r={orbitRadius}
              fill="none"
              stroke="hsl(var(--primary) / 0.08)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Second subtle ring */}
            <motion.circle
              cx={(orbitRadius * 2 + nodeSize + 40) / 2}
              cy={(orbitRadius * 2 + nodeSize + 40) / 2}
              r={orbitRadius * 0.6}
              fill="none"
              stroke="hsl(var(--accent) / 0.05)"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>

          {/* Center headline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center px-4" style={{ maxWidth: orbitRadius * 1.5 }}>
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  className="block text-foreground"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Simplifying India's
                </motion.span>
                <motion.span
                  className="block hero-shimmer-text mt-1"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Regulatory Compliance
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Orbit service nodes */}
          {orbitNodes.map((node, i) => {
            const Icon = node.icon;
            const center = (orbitRadius * 2 + nodeSize + 40) / 2;
            const angleRad = ((node.angle - 90) * Math.PI) / 180;
            const x = center + orbitRadius * Math.cos(angleRad) - nodeSize / 2;
            const y = center + orbitRadius * Math.sin(angleRad) - nodeSize / 2;
            const isHovered = hoveredNode === i;

            return (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{ left: x, top: y, width: nodeSize, height: nodeSize }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.12, type: "spring", stiffness: 200, damping: 15 }}
                onMouseEnter={() => setHoveredNode(i)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    inset: -6,
                    border: `2px solid hsl(${node.color} / 0.25)`,
                  }}
                  animate={
                    isHovered
                      ? { scale: 1.8, opacity: 0 }
                      : { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }
                  }
                  transition={
                    isHovered
                      ? { duration: 0.5 }
                      : { duration: 3, repeat: Infinity, delay: i * 0.4 }
                  }
                />

                {/* Node */}
                <motion.div
                  className="w-full h-full rounded-full bg-card border-2 flex items-center justify-center cursor-pointer shadow-lg"
                  style={{
                    borderColor: `hsl(${node.color})`,
                    boxShadow: isHovered
                      ? `0 0 30px hsl(${node.color} / 0.35), 0 4px 16px hsl(${node.color} / 0.2)`
                      : "var(--shadow-md)",
                  }}
                  animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Icon
                    className="transition-colors duration-200"
                    style={{
                      color: `hsl(${node.color})`,
                      width: nodeSize * 0.45,
                      height: nodeSize * 0.45,
                    }}
                  />
                </motion.div>

                {/* Tooltip label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute left-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg text-xs font-semibold text-foreground pointer-events-none"
                      style={{
                        bottom: node.angle > 90 && node.angle < 270 ? "auto" : "calc(100% + 10px)",
                        top: node.angle > 90 && node.angle < 270 ? "calc(100% + 10px)" : "auto",
                        x: "-50%",
                      }}
                      initial={{ opacity: 0, y: node.angle > 90 && node.angle < 270 ? -8 : 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: node.angle > 90 && node.angle < 270 ? -8 : 8, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {node.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-muted-foreground/50"
              animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
