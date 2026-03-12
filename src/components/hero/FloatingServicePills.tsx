import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle, Store,
} from "lucide-react";

const pills = [
  { id: "medical-devices", label: "Medical Devices", icon: Stethoscope },
  { id: "ivd", label: "IVD Registration", icon: FlaskConical },
  { id: "cosmetics", label: "Cosmetics", icon: Sparkles },
  { id: "lmpc", label: "Legal Metrology", icon: Scale },
  { id: "iec", label: "Import Export Code", icon: FileText },
  { id: "epr", label: "EPR Compliance", icon: Recycle },
  { id: "wholesale-license", label: "Wholesale License", icon: Store },
];

// Duplicate for seamless scroll
const allPills = [...pills, ...pills];

export const FloatingServicePills = () => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {allPills.map((pill, i) => {
          const Icon = pill.icon;
          return (
            <Link
              key={`${pill.id}-${i}`}
              to={`/services#${pill.id}`}
              className="block"
              style={{ perspective: "600px" }}
            >
              <motion.div
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-border shadow-sm cursor-pointer select-none whitespace-nowrap"
                whileHover={{
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 8,
                  boxShadow: "0 8px 24px hsl(var(--primary) / 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{pill.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};
