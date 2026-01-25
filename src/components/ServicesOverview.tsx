import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react";

// Image imports
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import heroRegulatoryImg from "@/assets/hero-regulatory.jpg";

type ServiceCardData = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  badge?: string;
};

const servicesData: ServiceCardData[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "Smooth CDSCO registration for manufacturers and importers",
    image: medicalDevicesImg,
    badge: "CDSCO",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Expert IVD compliance and regulatory support",
    image: ivdImg,
    badge: "ISO 13485",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Fast-track cosmetic product registration",
    image: cosmeticsImg,
    badge: "BIS",
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    tagline: "LMPC compliance made simple",
    image: lmpcImg,
    badge: "State-Level",
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration and comprehensive support",
    image: iecImg,
    badge: "Lifetime Valid",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "EPR compliance and sustainability solutions",
    image: eprImg,
    badge: "CPCB",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Seasoned regulatory professionals with deep domain expertise",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined processes to minimize your time-to-market",
  },
  {
    icon: Users,
    title: "Complete Support",
    description: "End-to-end assistance from application to approval",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees",
  },
];

const ServiceCard = ({ service }: { service: ServiceCardData }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        {service.badge && (
          <span className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
            {service.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {service.tagline}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Link to={`/services#${service.id}`}>
            Explore Process
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ServicesOverview = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroRegulatoryImg}
            alt="Regulatory Services"
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={cn(
              "max-w-3xl transition-all duration-700",
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              Regulatory Excellence
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
              Our Regulatory Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-4">
              Comprehensive compliance solutions for your business
            </p>
            <p className="text-lg text-white/80">
              From medical devices to cosmetics, we provide end-to-end regulatory support
              to help you navigate India's compliance landscape with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a service to view the complete regulatory roadmap, including step-by-step
            processes for both manufacturers and importers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700",
              whyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Terz Compliance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine deep regulatory expertise with a client-first approach
              to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-500",
                  whyVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "max-w-2xl mx-auto text-center transition-all duration-700",
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation. Our regulatory experts
              are ready to guide you through the process.
            </p>
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
