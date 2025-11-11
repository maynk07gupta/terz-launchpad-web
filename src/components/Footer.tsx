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
  { label: "Legal Metrology", to: "/services#lmpc" },
];

const insightLinks = [
  { label: "Newsroom", to: "/resources#news" },
  { label: "Knowledge Base", to: "/resources#guides" },
  { label: "Success Stories", to: "/resources#success" },
  { label: "Careers", to: "/careers" },
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#030712] via-[#060b24] to-[#02020f] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-primary/60 via-primary/10 to-transparent opacity-60 blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-10">
            <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_-25px_rgba(59,130,246,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-white/[0.08]">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary/80">
                    Terz Compliance
                  </p>
                  <img src={logo} alt="Terz Compliance" className="mt-2 h-10" />
                </div>
              </div>
              <p className="mt-6 text-base text-white/70">
                We combine regulatory expertise with market intelligence to help
                pioneering teams launch faster and stay compliant across India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/20 hover:text-primary-foreground"
                >
                  Explore our services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:text-primary"
                      >
                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Insights
                </h3>
                <ul className="mt-4 space-y-3">
                  {insightLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-white/70 transition-all duration-300 hover:text-primary"
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

          <div className="space-y-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/[0.1]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Stay Informed
              </h3>
              <p className="mt-4 text-base text-white/70">
                Monthly regulatory intel, deadline reminders, and market signals
                curated by our compliance desk.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-full border border-white/20 bg-black/20 px-4 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-15px_rgba(59,130,246,0.7)]"
                >
                  Join the circle
                </button>
              </form>
              <p className="mt-3 text-xs text-white/50">
                By joining, you agree to our privacy policy and consent to receive
                updates from Terz Compliance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Contact
              </h3>
              <ul className="mt-4 space-y-5">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <li key={value} className="group flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                        {label}
                      </p>
                      <a
                        href={href}
                        className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-primary"
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

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 text-sm text-white/60 lg:grid-cols-[1.1fr,1fr]">
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
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs uppercase tracking-[0.25em] text-white/50 md:inline-grid">
              <div className="text-white/70">ISO 13485 Ready</div>
              <div className="text-white/70">Pan-India Experts</div>
              <div className="text-white/70">24h Response</div>
              <div className="text-white/70">Global Launchpad</div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-primary/30 bg-primary/10 p-6 text-center text-sm text-primary-foreground shadow-[0_15px_45px_-25px_rgba(59,130,246,0.6)] md:hidden">
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            Quick Connect
          </h4>
          <p className="mt-2 text-white/80">
            Save time on mobile—tap below to reach us instantly.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/20 bg-black/30 px-3 py-4 text-white/80 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
            >
              <Phone className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Call
              </span>
            </a>
            <a
              href="mailto:info@terzcompliance.com"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/20 bg-black/30 px-3 py-4 text-white/80 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
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
