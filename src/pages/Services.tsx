import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "medical-devices",
      title: "Medical Devices (CDSCO)",
      tagline: "Smooth CDSCO registration for manufacturers and importers",
      description:
        "End-to-end registration for medical devices in India. We ensure ISO 13485 compliance and timely CDSCO approval with comprehensive documentation support.",
      path: "/services/medical-devices",
    },
    {
      id: "ivd",
      title: "In-Vitro Diagnostics (CDSCO)",
      tagline: "Expert IVD compliance and regulatory support",
      description:
        "Specialized regulatory assistance for in-vitro diagnostic medical devices. Navigate CDSCO requirements with confidence.",
      path: "/services/ivd",
    },
    {
      id: "cosmetics",
      title: "Cosmetics (CDSCO)",
      tagline: "Fast-track cosmetic product registration",
      description:
        "Complete cosmetics registration services for domestic and imported products. Ensure compliance with BIS and CDSCO standards.",
      path: "/services/cosmetics",
    },
    {
      id: "lmpc",
      title: "Legal Metrology (LMPC)",
      tagline: "LMPC compliance made simple",
      description:
        "Legal metrology compliance for packaged commodities. Ensure your products meet all labeling and packaging requirements.",
      path: "/services/lmpc",
    },
    {
      id: "iec",
      title: "Import Export Code (IEC)",
      tagline: "IEC registration and comprehensive support",
      description:
        "Streamlined Import Export Code registration. Essential for any business engaged in international trade.",
      path: "/services/iec",
    },
    {
      id: "epr",
      title: "Extended Producer Responsibility (EPR)",
      tagline: "EPR compliance and sustainability solutions",
      description:
        "Meet your Extended Producer Responsibility obligations. Comprehensive support for plastic waste management compliance.",
      path: "/services/epr",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-[hsl(166,76%,97%)] via-[hsl(210,40%,98%)] to-[hsl(210,40%,96%)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive regulatory services tailored to your role and needs. Select
              a service below to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.id} to={service.path}>
              <Card className="group h-full border border-[hsl(214,32%,91%)] transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(174,84%,32%)] hover:shadow-[0_25px_60px_-35px_hsla(174,84%,32%,0.25)]">
                <CardContent className="p-6">
                  <h2 className="mb-2 text-2xl font-semibold text-[hsl(222,47%,11%)] transition-colors group-hover:text-[hsl(174,84%,32%)]">
                    {service.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground">{service.tagline}</p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex items-center font-medium text-[hsl(221,83%,53%)]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[hsl(210,40%,96%)] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for a free consultation. We'll help you identify the right
              regulatory pathway for your product.
            </p>
            <Link to="/contact" className="inline-block">
              <button className="rounded-lg bg-[hsl(174,84%,32%)] px-8 py-3 font-medium text-white transition-colors hover:bg-[hsl(175,77%,26%)]">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
