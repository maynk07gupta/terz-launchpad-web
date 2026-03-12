import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheck, CheckCircle, FileCheck, Lock, Award, BadgeCheck,
} from "lucide-react";

/* ── Floating trust icons ── */
const trustIcons = [
  { icon: ShieldCheck, x: 8, y: 20, size: 30, delay: 0, dur: 16 },
  { icon: CheckCircle, x: 88, y: 15, size: 26, delay: 1.2, dur: 18 },
  { icon: FileCheck, x: 12, y: 72, size: 24, delay: 2, dur: 15 },
  { icon: Lock, x: 90, y: 68, size: 28, delay: 0.8, dur: 17 },
  { icon: Award, x: 5, y: 45, size: 22, delay: 3, dur: 19 },
  { icon: BadgeCheck, x: 93, y: 44, size: 24, delay: 1.5, dur: 14 },
  { icon: ShieldCheck, x: 50, y: 5, size: 22, delay: 2.5, dur: 20 },
  { icon: CheckCircle, x: 48, y: 92, size: 20, delay: 0.5, dur: 16 },
  { icon: Lock, x: 25, y: 8, size: 20, delay: 3.5, dur: 18 },
  { icon: Award, x: 75, y: 88, size: 22, delay: 1.8, dur: 15 },
];

/* ── Particles ── */
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.5 + Math.random() * 3,
  duration: 8 + Math.random() * 14,
  delay: Math.random() * 6,
}));

/* ── Concentric ring data ── */
const rings = [
  { radius: 120, dash: "6 8", width: 1.5, opacity: 0.08, speed: 60, dir: 1 },
  { radius: 190, dash: "3 10", width: 1, opacity: 0.05, speed: 80, dir: -1 },
  { radius: 260, dash: "8 5", width: 1.5, opacity: 0.06, speed: 100, dir: 1 },
  { radius: 330, dash: "4 12", width: 1, opacity: 0.04, speed: 120, dir: -1 },
];

/* ── Checkmark stamps that animate in ── */
const stamps = [
  { x: 18, y: 28, delay: 2, rot: -12 },
  { x: 78, y: 22, delay: 2.8, rot: 8 },
  { x: 22, y: 65, delay: 3.5, rot: -6 },
  { x: 82, y: 70, delay: 4.2, rot: 10 },
];

export const HeroSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 80 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 80 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const center = 350;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(217, 89%, 97%) 30%, hsl(162, 55%, 97%) 55%, hsl(217, 89%, 97%) 80%, hsl(var(--background)) 100%)",
        }} />

        {/* Mouse spotlight */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            x: useTransform(smoothX, v => v - 400),
            y: useTransform(smoothY, v => v - 400),
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 65%)",
          }}
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.012]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/10"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -25, 12, -18, 0], opacity: [0.2, 0.6, 0.3, 0.7, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Floating trust icons ── */}
      {trustIcons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none text-primary/[0.07]"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{ y: [0, -12, 8, -10, 0], rotate: [0, 4, -3, 5, 0] }}
            transition={{ duration: item.dur, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          >
            <Icon style={{ width: item.size, height: item.size }} />
          </motion.div>
        );
      })}

      {/* ── Animated compliance stamps ── */}
      {stamps.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: s.rot }}
          animate={{ opacity: [0, 0.12, 0.08], scale: [0, 1.2, 1], rotate: s.rot }}
          transition={{ duration: 0.8, delay: s.delay, ease: "easeOut" }}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/15 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 sm:w-9 sm:h-9 text-primary/20" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/10"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
            />
          </div>
        </motion.div>
      ))}

      {/* ── Center composition ── */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative" style={{ width: center * 2, height: center * 2 }}>

          {/* Concentric rotating rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${center * 2} ${center * 2}`}>
            {rings.map((ring, i) => (
              <motion.circle
                key={i}
                cx={center}
                cy={center}
                r={ring.radius}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={ring.width}
                strokeDasharray={ring.dash}
                opacity={ring.opacity}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 * ring.dir }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  rotate: { duration: ring.speed, repeat: Infinity, ease: "linear" },
                }}
                style={{ transformOrigin: "center" }}
              />
            ))}

            {/* Center shield glow */}
            <motion.circle
              cx={center}
              cy={center}
              r={60}
              fill="hsl(var(--primary) / 0.04)"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Central shield icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 15 }}
            >
              {/* Shield glow ring */}
              <motion.div
                className="absolute -inset-5 rounded-full"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-lg"
                style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.15), 0 0 80px hsl(var(--primary) / 0.08)" }}
                whileHover={{ scale: 1.15, borderColor: "hsl(var(--primary) / 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>

          {/* Headline overlaid on rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center mt-40 sm:mt-44">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-tight leading-tight"
              >
                <motion.span
                  className="block text-foreground"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Simplifying India's
                </motion.span>
                <motion.span
                  className="block hero-shimmer-text mt-1"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                >
                  Regulatory Compliance
                </motion.span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-4 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/25 flex justify-center pt-1.5"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-muted-foreground/40"
              animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
