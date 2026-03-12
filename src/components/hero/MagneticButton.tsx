import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

export const MagneticButton = ({ children, className, onClick, variant = "primary" }: MagneticButtonProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [ripple, setRipple] = React.useState<{ x: number; y: number } | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setRipple(null);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl font-semibold text-base px-8 py-4 transition-shadow duration-300 cursor-pointer",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-md hover:shadow-xl"
          : "border-2 border-primary text-primary bg-transparent hover:shadow-lg",
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Ripple effect */}
      {ripple && isHovered && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            background: variant === "primary"
              ? "radial-gradient(circle, hsl(0 0% 100% / 0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
          initial={{ width: 0, height: 0, x: 0, y: 0 }}
          animate={{ width: 300, height: 300, x: -150, y: -150 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
