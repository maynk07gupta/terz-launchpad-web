import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Procedure", to: "/procedure" },
  { label: "Resources", to: "/resources" },
  { label: "Careers", to: "/contact" },
];

const serviceLinks = [
  { label: "Medical Devices (CDSCO)", to: "/services/medical-devices" },
  { label: "In-Vitro Diagnostics", to: "/services/ivd" },
  { label: "Cosmetics", to: "/services/cosmetics" },
  { label: "Legal Metrology", to: "/services/lmpc" },
  { label: "BIS Certification", to: "/services" },
  { label: "WPC / ETA", to: "/services" },
  { label: "EPR & Waste Management", to: "/services/epr" },
];

const insightLinks = [
  { label: "Knowledge Base", to: "/resources" },
  { label: "Newsroom", to: "/resources" },
  { label: "Case Studies", to: "/resources" },
];

const contactMethods = [
  {
    icon: Mail,
    label: "Write to us",
    value: "info@terzcompliance.com",
    href: "mailto:info@terzcompliance.com",
  },
  {
    icon: Phone,
    label: "Call our experts",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-primary/95 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-10">
          {/* Brand + CTA Card */}
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-heading mb-3">
              Regulatory approvals for India, done right the first time.
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              We help manufacturers, importers and innovators secure BIS, CDSCO, Legal Metrology and other approvals faster across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="default">
                <a href="https://cal.com" target="_blank" rel="noreferrer">
                  Book a consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link to="/services">
                  Explore our services
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <div key={value} className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <a
                      href={href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pb-8 border-b border-border/50">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Insights
            </h3>
            <ul className="space-y-2.5">
              {insightLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Terz Compliance. All rights reserved. ·{" "}
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </p>

          {/* Trust Line */}
          <p className="text-xs text-muted-foreground/70">
            ISO 13485 aligned • Pan-India regulatory experts • 24-hour response
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
