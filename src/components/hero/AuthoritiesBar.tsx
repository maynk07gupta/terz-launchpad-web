import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const AuthoritiesBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full py-10 border-t border-b border-primary/20 bg-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium"
        >
          Registered with
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary/10 border-2 border-primary/40 shadow-md hover:shadow-lg hover:border-primary/60 transition-all cursor-default"
        >
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary tracking-wide">
            CDSCO
          </span>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            Central Drugs Standard Control Organization
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
