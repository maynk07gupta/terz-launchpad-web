import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanetServiceCardProps {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  size: "xl" | "md" | "sm";
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  index: number;
}

const sizeConfig = {
  xl: {
    planet: "w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52",
    orbit: "w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64",
    glow: "60px",
    glowHover: "80px",
  },
  md: {
    planet: "w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40",
    orbit: "w-40 h-40 md:w-44 md:h-44 lg:w-52 lg:h-52",
    glow: "50px",
    glowHover: "70px",
  },
  sm: {
    planet: "w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36",
    orbit: "w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48",
    glow: "40px",
    glowHover: "60px",
  },
};

const PlanetServiceCard = ({
  id,
  title,
  tagline,
  badge,
  size,
  gradientFrom,
  gradientTo,
  glowColor,
  index,
}: PlanetServiceCardProps) => {
  const config = sizeConfig[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group flex flex-col items-center text-center"
    >
      {/* Planet Container */}
      <div className="relative mb-6">
        {/* Orbit Ring */}
        <motion.div
          className={`absolute inset-0 ${config.orbit} -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
          style={{
            border: `1px dashed rgba(${glowColor}, 0.3)`,
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Outer Glow */}
        <motion.div
          className={`absolute inset-0 ${config.planet} rounded-full blur-2xl`}
          style={{
            background: `radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />

        {/* Planet Sphere */}
        <motion.div
          className={`relative ${config.planet} rounded-full cursor-pointer overflow-hidden`}
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            boxShadow: `
              0 0 ${config.glow} rgba(${glowColor}, 0.4),
              0 0 ${parseInt(config.glow) * 2}px rgba(${glowColor}, 0.2),
              inset -20px -20px 40px rgba(0, 0, 0, 0.3),
              inset 10px 10px 30px rgba(255, 255, 255, 0.2)
            `,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: `
              0 0 ${config.glowHover} rgba(${glowColor}, 0.6),
              0 0 ${parseInt(config.glowHover) * 2}px rgba(${glowColor}, 0.3),
              inset -20px -20px 40px rgba(0, 0, 0, 0.3),
              inset 10px 10px 30px rgba(255, 255, 255, 0.2)
            `,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Surface Texture - Dot Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "12px 12px",
            }}
          />

          {/* Inner Highlight (3D Effect) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
            }}
          />

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/60"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [-3, 3, -3],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          className="absolute -top-2 -right-2 z-10 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/20"
        >
          {badge}
        </motion.span>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
        className="space-y-3"
      >
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-white/60 max-w-[200px] mx-auto line-clamp-2 group-hover:text-white/70 transition-colors">
          {tagline}
        </p>
        <Button
          asChild
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all"
        >
          <Link to={`/services#${id}`} className="flex items-center gap-2">
            Explore
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default PlanetServiceCard;
