import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

// Import service images
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";

interface ServiceCard {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "CDSCO registration for manufacturers & importers",
    badge: "CDSCO",
    image: medicalDevicesImg,
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Performance evaluation & IVD import licensing",
    badge: "CDSCO",
    image: ivdImg,
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Product registration & safety compliance",
    badge: "CDSCO",
    image: cosmeticsImg,
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    tagline: "Model approval & packaging validation",
    badge: "Central-Level",
    image: lmpcImg,
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration with lifetime validity",
    badge: "Lifetime Valid",
    image: iecImg,
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "Extended producer responsibility & recycling",
    badge: "CPCB",
    image: eprImg,
  },
];

export const ServiceCardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Auto-advance every 4 seconds
  React.useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Track selected slide
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full"
    >
      {/* Carousel Container */}
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex-[0_0_100%] min-w-0 px-1"
            >
              <Link
                to={`/services#${service.id}`}
                className="block"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "relative h-[280px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden",
                    "shadow-xl hover:shadow-2xl transition-shadow duration-300",
                    "group cursor-pointer"
                  )}
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                      {service.tagline}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-3 flex items-center gap-2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
