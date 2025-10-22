import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background/60 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src={logo} alt="Terz Compliance" className="h-12" />
            <p className="text-sm text-muted-foreground">
              One-stop regulatory compliance partner for bringing products to
              India's market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/procedure"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Procedure
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#medical-devices"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Medical Devices
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ivd"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  In-Vitro Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  to="/services#cosmetics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cosmetics
                </Link>
              </li>
              <li>
                <Link
                  to="/services#lmpc"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Legal Metrology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@terzcompliance.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@terzcompliance.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-center text-muted-foreground sm:flex-row sm:space-y-0 sm:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Terz Compliance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
