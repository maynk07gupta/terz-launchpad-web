import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<{ [key: string]: string }>({});

  const services = [
    {
      id: "medical-devices",
      title: "Medical Devices (CDSCO)",
      tagline: "Smooth CDSCO registration for manufacturers and importers",
      description:
        "End-to-end registration for medical devices in India. We ensure ISO 13485 compliance and timely CDSCO approval with comprehensive documentation support.",
      manufacturer: {
        process: [
          "Device classification determination",
          "Technical file preparation",
          "ISO 13485 certification support",
          "CDSCO portal submission",
          "Clinical evaluation assistance",
          "Registration certificate obtainment",
        ],
      },
      importer: {
        process: [
          "Indian authorized agent appointment",
          "Import license documentation",
          "Quality management system verification",
          "CDSCO application filing",
          "Post-market surveillance setup",
          "Renewal management",
        ],
      },
    },
    {
      id: "ivd",
      title: "In-Vitro Diagnostics (CDSCO)",
      tagline: "Expert IVD compliance and regulatory support",
      description:
        "Specialized regulatory assistance for in-vitro diagnostic medical devices. Navigate CDSCO requirements with confidence.",
      manufacturer: {
        process: [
          "IVD classification analysis",
          "Performance evaluation documentation",
          "Quality system compliance",
          "Technical dossier compilation",
          "CDSCO submission and tracking",
        ],
      },
      importer: {
        process: [
          "Import authorization",
          "Product registration",
          "Label compliance review",
          "Distribution license support",
          "Post-import compliance",
        ],
      },
    },
    {
      id: "cosmetics",
      title: "Cosmetics (CDSCO)",
      tagline: "Fast-track cosmetic product registration",
      description:
        "Complete cosmetics registration services for domestic and imported products. Ensure compliance with BIS and CDSCO standards.",
      manufacturer: {
        process: [
          "Product formulation review",
          "Safety assessment coordination",
          "Manufacturing license assistance",
          "Product registration filing",
          "Label compliance verification",
        ],
      },
      importer: {
        process: [
          "Import permit acquisition",
          "Foreign manufacturer documentation",
          "Product testing coordination",
          "Registration with CDSCO",
          "Customs clearance support",
        ],
      },
    },
    {
      id: "lmpc",
      title: "Legal Metrology (LMPC)",
      tagline: "LMPC compliance made simple",
      description:
        "Legal metrology compliance for packaged commodities. Ensure your products meet all labeling and packaging requirements.",
      manufacturer: {
        process: [
          "Packaging compliance audit",
          "Label design review",
          "LMPC registration filing",
          "Declaration verification",
          "Ongoing compliance monitoring",
        ],
      },
      importer: {
        process: [
          "Import compliance assessment",
          "Package modification guidance",
          "Registration for importers",
          "Custom label requirements",
          "Import documentation",
        ],
      },
    },
    {
      id: "iec",
      title: "Import Export Code (IEC)",
      tagline: "IEC registration and comprehensive support",
      description:
        "Streamlined Import Export Code registration. Essential for any business engaged in international trade.",
      manufacturer: {
        process: [
          "IEC application preparation",
          "Documentation compilation",
          "DGFT portal filing",
          "Certificate obtainment",
          "Modification support",
        ],
      },
      importer: {
        process: [
          "IEC code registration",
          "Import eligibility verification",
          "Customs documentation",
          "License activation",
          "Annual compliance",
        ],
      },
    },
    {
      id: "epr",
      title: "Extended Producer Responsibility (EPR)",
      tagline: "EPR compliance and sustainability solutions",
      description:
        "Meet your Extended Producer Responsibility obligations. Comprehensive support for plastic waste management compliance.",
      manufacturer: {
        process: [
          "EPR assessment and planning",
          "Registration with CPCB",
          "Annual return filing",
          "Target compliance tracking",
          "Certificate management",
        ],
      },
      importer: {
        process: [
          "Import EPR obligations",
          "Producer responsibility setup",
          "Waste management planning",
          "CPCB compliance",
          "Reporting and renewals",
        ],
      },
    },
    {
      id: "market-entry",
      title: "India Market Entry",
      tagline: "Comprehensive India market entry solutions",
      description:
        "Complete market entry support combining all necessary regulatory clearances. Your single partner for entering India's market.",
      manufacturer: {
        process: [
          "Market entry strategy",
          "Multi-license coordination",
          "Distribution network setup",
          "Regulatory roadmap",
          "Launch support",
        ],
      },
      importer: {
        process: [
          "Import feasibility analysis",
          "All regulatory clearances",
          "Logistics coordination",
          "Market compliance",
          "Ongoing support",
        ],
      },
    },
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
    if (!selectedRole[serviceId]) {
      setSelectedRole({ ...selectedRole, [serviceId]: "manufacturer" });
    }
  };

  const toggleRole = (serviceId: string, role: string) => {
    setSelectedRole({ ...selectedRole, [serviceId]: role });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
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

      {/* Services List */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="scroll-mt-20">
              <CardContent className="p-0">
                {/* Service Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-left">
                    <h2 className="text-2xl font-semibold text-foreground mb-1">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">{service.tagline}</p>
                  </div>
                  {expandedService === service.id ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div className="px-6 pb-6 border-t border-border animate-in slide-in-from-top-2">
                    <div className="pt-6">
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Role Toggle */}
                      <div className="flex space-x-2 mb-6">
                        <Button
                          variant={
                            selectedRole[service.id] === "manufacturer"
                              ? "default"
                              : "outline"
                          }
                          onClick={() => toggleRole(service.id, "manufacturer")}
                          className="flex-1"
                        >
                          Manufacturer
                        </Button>
                        <Button
                          variant={
                            selectedRole[service.id] === "importer"
                              ? "default"
                              : "outline"
                          }
                          onClick={() => toggleRole(service.id, "importer")}
                          className="flex-1"
                        >
                          Importer
                        </Button>
                      </div>

                      {/* Role-Specific Content */}
                      <div className="bg-secondary/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          {selectedRole[service.id] === "manufacturer"
                            ? "For Manufacturers"
                            : "For Importers"}
                        </h3>
                        <ul className="space-y-2">
                          {(selectedRole[service.id] === "manufacturer"
                            ? service.manufacturer.process
                            : service.importer.process
                          ).map((step, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Button asChild>
                          <Link to="/contact">Get Started with This Service</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us for a free consultation. We'll help you identify the right
              regulatory pathway for your product.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
