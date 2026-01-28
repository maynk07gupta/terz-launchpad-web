import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BioSureLogo from "@/assets/clients/biosure.svg";
import DermavitaLogo from "@/assets/clients/dermavita.svg";
import GlobalMedLogo from "@/assets/clients/globalmed.svg";
import NexGenLogo from "@/assets/clients/nexgen.svg";
import OrionLogo from "@/assets/clients/orion.svg";
import ZenithLogo from "@/assets/clients/zenith.svg";

const testimonials = [
  {
    quote: "Terz Compliance brought remarkable professionalism, expertise, and strategic insight from day one. They understood our business requirements quickly and delivered effective solutions ahead of schedule.",
    name: "Hemendra Dave",
    role: "Regulatory Head",
    company: "Envision Scientific",
  },
  {
    quote: "I highly recommend Terz Compliance for their outstanding expertise in medical device registration with Indian authorities. Their deep knowledge and proactive approach were instrumental in securing timely clearance.",
    name: "Andrew Tang",
    role: "Chief Executive Officer",
    company: "Mobilab, USA",
  },
  {
    quote: "Terz is meticulous and conscientious while preparing and vetting documents, leaving little room for errors, saving time and money for their clients. Professional and courteous, they are also a pleasure to deal with.",
    name: "Anil Kumar Nair",
    role: "Managing Director",
    company: "Geuder Asia Pacific",
  },
  {
    quote: "Had worked with Terz Compliance on medical device registration in India, a team with strong work ethics, extremely responsive and knows their field of work well. Their inputs had been a guiding light.",
    name: "Steven Choy",
    role: "Business Consultant",
    company: "SEED, Japan",
  },
  {
    quote: "Terz Compliance is super efficient in registration work. They helped with urgent paperwork ahead of deadlines and are ever ready to help even at odd hours. Truly appreciate their effort in going the extra mile.",
    name: "Toinali Chophi",
    role: "CEO",
    company: "Beautybarnindia",
  },
];

const clients = [
  { name: "NexGen MedTech", logo: NexGenLogo },
  { name: "BioSure Labs", logo: BioSureLogo },
  { name: "Dermavita", logo: DermavitaLogo },
  { name: "Zenith Lifecare", logo: ZenithLogo },
  { name: "GlobalMed Imports", logo: GlobalMedLogo },
  { name: "Orion Devices", logo: OrionLogo },
];

const ROTATION_INTERVAL = 5000;

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(goToNext, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent-100/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            Trusted by market leaders
          </p>
          <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
            Partners Count on Terz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Over a decade of approvals for manufacturers, importers, and innovators expanding into India's regulated markets.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex h-16 w-28 items-center justify-center rounded-lg bg-card/50 p-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 lg:p-12"
              >
                <Quote className="h-10 w-10 text-primary/60 mb-6" />
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
