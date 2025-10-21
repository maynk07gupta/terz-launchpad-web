import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "Medical Devices", path: "/services/medical-devices" },
    { name: "In-Vitro Diagnostics", path: "/services/ivd" },
    { name: "Cosmetics", path: "/services/cosmetics" },
    { name: "Legal Metrology", path: "/services/lmpc" },
    { name: "Import Export Code", path: "/services/iec" },
    { name: "EPR", path: "/services/epr" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Terz Compliance" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/resources"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/resources") ? "text-primary" : "text-foreground"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/procedure"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/procedure") ? "text-primary" : "text-foreground"
              }`}
            >
              Procedure
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-foreground"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/resources"
                className={`text-base font-medium ${
                  isActive("/resources") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/procedure"
                className={`text-base font-medium ${
                  isActive("/procedure") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Procedure
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
