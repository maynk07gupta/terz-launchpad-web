import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import cosmeticsImg from "@/assets/cosmetics.jpg";

const Cosmetics = () => {
  const [selectedRole, setSelectedRole] = useState<string>("manufacturer");

  const serviceData = {
    title: "Cosmetics (CDSCO)",
    tagline: "Fast-track cosmetic product registration",
    description:
      "Complete cosmetics registration services for domestic and imported products. Ensure compliance with BIS and CDSCO standards.",
    image: cosmeticsImg,
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary to-brand-50/70">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              {serviceData.tagline}
            </p>
            <p className="text-lg text-white/80">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection & Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Choose Your Role
              </h2>
              <p className="text-lg text-muted-foreground">
                Select whether you're a manufacturer or importer to see the specific process
              </p>
            </div>

            {/* Role Toggle */}
            <div className="flex space-x-4 mb-12 justify-center">
              <Button
                variant={selectedRole === "manufacturer" ? "default" : "outline"}
                onClick={() => setSelectedRole("manufacturer")}
                size="lg"
                className="min-w-[180px]"
              >
                Manufacturer
              </Button>
              <Button
                variant={selectedRole === "importer" ? "default" : "outline"}
                onClick={() => setSelectedRole("importer")}
                size="lg"
                className="min-w-[180px]"
              >
                Importer
              </Button>
            </div>

            {/* Process Steps */}
            <Card className="overflow-hidden bg-card/95 border border-border/70 shadow-surface-lg">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  {selectedRole === "manufacturer"
                    ? "Process for Manufacturers"
                    : "Process for Importers"}
                </h3>
                <div className="space-y-6">
                  {(selectedRole === "manufacturer"
                    ? serviceData.manufacturer.process
                    : serviceData.importer.process
                  ).map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-surface group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-start justify-between">
                          <p className="text-lg text-foreground">{step}</p>
                          <CheckCircle className="h-6 w-6 text-primary/30 flex-shrink-0 ml-4 group-hover:text-primary transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Started with This Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cosmetics;
