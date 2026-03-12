import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "circle" | "hexagon" | "ring";
  duration: number;
  delay: number;
  opacity: number;
}

const shapes: FloatingShape[] = [
  { id: 1, x: 8, y: 15, size: 80, type: "circle", duration: 18, delay: 0, opacity: 0.06 },
  { id: 2, x: 85, y: 10, size: 60, type: "hexagon", duration: 22, delay: 2, opacity: 0.05 },
  { id: 3, x: 70, y: 75, size: 100, type: "ring", duration: 20, delay: 1, opacity: 0.04 },
  { id: 4, x: 20, y: 80, size: 50, type: "hexagon", duration: 25, delay: 3, opacity: 0.06 },
  { id: 5, x: 50, y: 30, size: 70, type: "circle", duration: 16, delay: 0.5, opacity: 0.04 },
  { id: 6, x: 35, y: 60, size: 40, type: "ring", duration: 19, delay: 1.5, opacity: 0.05 },
  { id: 7, x: 92, y: 50, size: 55, type: "circle", duration: 21, delay: 2.5, opacity: 0.05 },
  { id: 8, x: 15, y: 45, size: 45, type: "hexagon", duration: 23, delay: 4, opacity: 0.04 },
];

const HexagonShape = ({ size, opacity }: { size: number; opacity: number }) => {
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${size / 2 + (size / 2) * Math.cos(angle)},${size / 2 + (size / 2) * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        opacity={opacity}
      />
    </svg>
  );
};

interface AnimatedBackgroundProps {
  mouseX: number;
  mouseY: number;
  containerRef: React.RefObject<HTMLElement>;
}

export const AnimatedBackground = ({ mouseX, mouseY, containerRef }: AnimatedBackgroundProps) => {
  const springConfig = { damping: 25, stiffness: 80 };
  const spotlightX = useSpring(useMotionValue(mouseX), springConfig);
  const spotlightY = useSpring(useMotionValue(mouseY), springConfig);

  React.useEffect(() => {
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  }, [mouseX, mouseY, spotlightX, spotlightY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(217, 89%, 97%) 40%, hsl(162, 55%, 96%) 70%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Mouse-tracking spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: useTransform(spotlightX, (v) => v - 300),
          y: useTransform(spotlightY, (v) => v - 300),
          background: "radial-gradient(circle, hsl(var(--primary) / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute pointer-events-none"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -20, 10, -15, 0],
            x: [0, 10, -8, 5, 0],
            rotate: [0, 5, -3, 8, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full border border-primary"
              style={{
                width: shape.size,
                height: shape.size,
                opacity: shape.opacity,
              }}
            />
          )}
          {shape.type === "hexagon" && (
            <HexagonShape size={shape.size} opacity={shape.opacity} />
          )}
          {shape.type === "ring" && (
            <div
              className="rounded-full border-2 border-accent"
              style={{
                width: shape.size,
                height: shape.size,
                opacity: shape.opacity,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};
