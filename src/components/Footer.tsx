import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Procedure", to: "/procedure" },
  { label: "Resources", to: "/resources" },
];

const serviceLinks = [
  { label: "Medical Devices", to: "/services#medical-devices" },
  { label: "In-Vitro Diagnostics", to: "/services#ivd" },
  { label: "Cosmetics", to: "/services#cosmetics" },
  { label: "Legal Metrology", to: "/procedure" },
];

const insightLinks = [
  { label: "Newsroom", to: "/resources#news" },
  { label: "Knowledge Base", to: "/resources#guides" },
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
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-br from-background via-card to-secondary/80 text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-primary/25 via-accent/12 to-transparent opacity-70 blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6 md:space-y-8">
            <div className="max-w-xl rounded-3xl border border-border bg-card p-5 md:p-8 shadow-surface-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-surface-brand">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
                    Terz Compliance
                  </p>
                  <img src={logo} alt="Terz Compliance" className="mt-2 h-10" />
                </div>
              </div>
              <p className="mt-6 text-base text-muted-foreground">
                We combine regulatory expertise with market intelligence to help
                pioneering teams launch faster and stay compliant across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/20 hover:text-primary-foreground"
                >
                  Explore our services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Insights
                </h3>
                <ul className="mt-4 space-y-3">
                  {insightLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/18 via-primary/10 to-secondary/60 p-8 md:p-10 shadow-surface-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-surface-brand">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/25 blur-3xl"
              />
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Our Promise
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-heading">
                  At Terz Compliance, we don't just meet timelines —{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    we redefine them.
                  </span>
                </h3>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/80 p-5 md:p-8 shadow-surface-lg backdrop-blur">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Contact
              </h3>
              <ul className="mt-4 space-y-5">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <li key={value} className="group flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        {label}
                      </p>
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground transition-all duration-300 hover:text-primary"
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 border-t border-border pt-6 md:pt-8 text-sm text-muted-foreground lg:grid-cols-[1.1fr,1fr]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Terz Compliance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/privacy"
                className="transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="transition-colors duration-300 hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-secondary/70 p-4 text-xs uppercase tracking-[0.25em] text-muted-foreground md:inline-grid">
              <div className="text-foreground">ISO 13485 Ready</div>
              <div className="text-foreground">Pan-India Experts</div>
              <div className="text-foreground">24h Response</div>
              <div className="text-foreground">Global Launchpad</div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-primary/30 bg-primary/10 p-5 text-center text-sm text-primary-foreground shadow-surface-lg md:hidden">
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            Quick Connect
          </h4>
          <p className="mt-2 text-foreground">
            Save time on mobile—tap below to reach us instantly.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-secondary/80 px-3 py-4 text-foreground transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <Phone className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Call
              </span>
            </a>
            <a
              href="mailto:info@terzcompliance.com"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-secondary/80 px-3 py-4 text-foreground transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <Mail className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
