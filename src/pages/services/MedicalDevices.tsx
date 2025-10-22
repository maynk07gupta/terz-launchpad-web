import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import medicalDevicesImg from "@/assets/medical-devices.jpg";

const MedicalDevices = () => {
  const [selectedRole, setSelectedRole] = useState<string>("manufacturer");

  const serviceData = {
    title: "Medical Devices (CDSCO)",
    tagline: "Smooth CDSCO registration for manufacturers and importers",
    description:
      "End-to-end registration for medical devices in India. We ensure ISO 13485 compliance and timely CDSCO approval with comprehensive documentation support.",
    image: medicalDevicesImg,
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
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
            <Card className="overflow-hidden">
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
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
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

export default MedicalDevices;
