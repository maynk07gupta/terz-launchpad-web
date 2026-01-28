import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const authorities = [
  { name: "CDSCO", fullName: "Central Drugs Standard Control Organization" },
  { name: "BIS", fullName: "Bureau of Indian Standards" },
  { name: "WPC", fullName: "Wireless Planning & Coordination" },
  { name: "Legal Metrology", fullName: "Legal Metrology Division" },
  { name: "CPCB", fullName: "Central Pollution Control Board" },
  { name: "FSSAI", fullName: "Food Safety & Standards Authority" },
];

export const AuthoritiesBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full py-8 border-t border-b border-border/40 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          Regulatory authorities we work with
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          {authorities.map((authority, index) => (
            <motion.div
              key={authority.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
            >
              <Shield className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {authority.name}
              </span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {authority.fullName}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
