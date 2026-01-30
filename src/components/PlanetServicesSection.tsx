import { motion } from "framer-motion";
import PlanetServiceCard from "./PlanetServiceCard";

const planetServices = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "CDSCO submissions prepared end-to-end with risk-based documentation reviews.",
    badge: "CDSCO",
    size: "xl" as const,
    gradientFrom: "#3B82F6",
    gradientTo: "#06B6D4",
    glowColor: "59, 130, 246",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Performance evaluation oversight and IVD import licensing support.",
    badge: "CDSCO",
    size: "xl" as const,
    gradientFrom: "#14B8A6",
    gradientTo: "#10B981",
    glowColor: "20, 184, 166",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Product registration, safety dossiers, and artwork compliance.",
    badge: "CDSCO",
    size: "md" as const,
    gradientFrom: "#EC4899",
    gradientTo: "#A855F7",
    glowColor: "236, 72, 153",
  },
  {
    id: "legal-metrology",
    title: "Legal Metrology",
    tagline: "Model approval, packaging validation, and audit-ready reports.",
    badge: "Central-Level",
    size: "md" as const,
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
    glowColor: "245, 158, 11",
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration, renewals, and supply chain partner onboarding.",
    badge: "Lifetime Valid",
    size: "sm" as const,
    gradientFrom: "#22C55E",
    gradientTo: "#84CC16",
    glowColor: "34, 197, 94",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "Annual returns, recycling partner management, and evidence tracking.",
    badge: "CPCB",
    size: "sm" as const,
    gradientFrom: "#6366F1",
    gradientTo: "#8B5CF6",
    glowColor: "99, 102, 241",
  },
];

// Generate random star positions
const generateStars = (count: number) => {
  return [...Array(count)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));
};

const stars = generateStars(60);

const PlanetServicesSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Dark Space Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(to bottom, #0a0e1a 0%, #060a14 50%, #0a0e1a 100%)`,
        }}
      />

      {/* Starfield */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Nebula Accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96 -z-10 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)`,
          filter: "blur(60px)",
          transform: "translate(-50%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 -z-10 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)`,
          filter: "blur(60px)",
          transform: "translate(30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -z-10 opacity-10"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%)`,
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
            Our Regulatory Universe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            End-to-end compliance solutions across India's key regulatory frameworks.
          </p>
        </motion.div>

        {/* Planet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {planetServices.map((service, index) => (
            <PlanetServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              tagline={service.tagline}
              badge={service.badge}
              size={service.size}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              glowColor={service.glowColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetServicesSection;
