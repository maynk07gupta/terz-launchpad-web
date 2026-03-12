import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { ComplianceJourney } from "./ComplianceJourney";
import { MagneticButton } from "./MagneticButton";
import { FloatingServicePills } from "./FloatingServicePills";
import { useCountUp } from "@/hooks/useCountUp";

// Animated word-by-word headline
const headlineWords = ["Simplifying", "India's"];
const highlightWords = ["Regulatory", "Compliance"];

const WordReveal = ({ words, highlight, className }: { words: string[]; highlight: string[]; className?: string }) => (
  <span className={className}>
    {words.map((word, i) => (
      <motion.span
        key={i}
        className="inline-block mr-[0.3em]"
        initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    ))}
    {highlight.map((word, i) => (
      <motion.span
        key={`h-${i}`}
        className="inline-block mr-[0.3em] text-primary hero-shimmer-text"
        initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.6, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    ))}
  </span>
);

// Letter-by-letter subtitle
const LetterReveal = ({ text, delay = 0.8 }: { text: string; delay?: number }) => (
  <span>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.03, delay: delay + i * 0.018 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

// Stat counter component
const AnimatedStat = ({ icon: Icon, value, suffix, label, delay }: {
  icon: React.ElementType; value: number; suffix: string; label: string; delay: number;
}) => {
  const { ref, count } = useCountUp({ end: value, duration: 2000, suffix });
  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 border border-primary/20"
        whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--primary) / 0.2)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon className="h-5 w-5 text-primary" />
      </motion.div>
      <div>
        <p className="text-sm font-bold text-foreground">{count}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "clamp(50px, 7vw, 100px)", paddingBottom: "clamp(20px, 3vw, 40px)" }}
    >
      <AnimatedBackground mouseX={mousePos.x} mouseY={mousePos.y} containerRef={containerRef as React.RefObject<HTMLElement>} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[50%_50%] gap-8 lg:gap-12 items-center">

          {/* Left Column – Animated Text + CTAs */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.span
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.15)" }}
              >
                India's Trusted Regulatory Partner
              </motion.span>
            </motion.div>

            {/* Headline with word reveal */}
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-tight leading-tight text-foreground">
              <WordReveal words={headlineWords} highlight={highlightWords} />
            </h1>

            {/* Subtitle with letter-by-letter reveal */}
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-foreground">
              <LetterReveal text="Expert guidance for medical devices, IVDs, cosmetics & more" />
            </p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              From product classification and documentation through government approvals, our regulatory experts handle the complexity so you can focus on innovation.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton variant="primary" onClick={() => navigate("/contact")}>
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton variant="outline" onClick={() => navigate("/services")}>
                Explore Services
              </MagneticButton>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-10 flex flex-wrap items-start gap-6 sm:gap-8"
            >
              <AnimatedStat icon={Shield} value={100} suffix="%" label="Transparency" delay={1.7} />
              <AnimatedStat icon={Users} value={200} suffix="+" label="Clients served" delay={1.8} />
              <AnimatedStat icon={Award} value={15} suffix="+" label="Years experience" delay={1.9} />
            </motion.div>
          </div>

          {/* Right Column – Interactive Compliance Journey */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              className="w-full max-w-md lg:max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ComplianceJourney />
            </motion.div>
          </div>
        </div>

        {/* Floating Service Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-8"
        >
          <FloatingServicePills />
        </motion.div>
      </div>
    </section>
  );
};
