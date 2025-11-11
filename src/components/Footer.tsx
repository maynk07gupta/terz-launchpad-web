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
  { label: "Legal Metrology", to: "/procedure" },
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
    <footer className="relative overflow-hidden border-t border-[hsl(214,32%,91%)] bg-[hsl(210,40%,96%)] text-[hsl(215,28%,17%)]">
      <div className="absolute inset-x-0 top-0 hidden h-px bg-[hsl(214,32%,91%)]/70 md:block" />

      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-10">
            <div className="max-w-xl rounded-3xl border border-[hsl(214,32%,91%)] bg-white p-8 shadow-[0_25px_70px_-40px_hsla(211,96%,78%,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-40px_hsla(174,84%,32%,0.35)]">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)]">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[hsl(175,77%,26%)]">Terz Compliance</p>
                  <img src={logo} alt="Terz Compliance" className="mt-2 h-10" />
                </div>
              </div>
              <p className="mt-6 text-base text-muted-foreground">
                We combine regulatory expertise with market intelligence to help pioneering teams launch faster and stay compliant across India.
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#030712] via-[#060b24] to-[#02020f] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-primary/60 via-primary/10 to-transparent opacity-60 blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6 md:space-y-8">
            <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8 shadow-[0_20px_60px_-25px_rgba(59,130,246,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-white/[0.08]">
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
                  className="group inline-flex items-center gap-2 rounded-full bg-[hsl(174,84%,32%)] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[hsl(175,77%,26%)]"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/20 hover:text-primary-foreground"
                >
                  Explore our services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(214,32%,91%)] px-5 py-2 text-sm font-medium text-[hsl(215,28%,17%)] transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(174,84%,32%)] hover:text-[hsl(174,84%,32%)]"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(222,47%,11%)]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-[hsl(215,19%,35%)] transition-all duration-300 hover:text-[hsl(222,47%,11%)]"
                      >
                        <span className="h-px w-0 bg-[hsl(174,84%,32%)] transition-all duration-300 group-hover:w-4" />
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
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(222,47%,11%)]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-[hsl(215,19%,35%)] transition-all duration-300 hover:text-[hsl(222,47%,11%)]"
                      >
                        <span className="h-px w-0 bg-[hsl(174,84%,32%)] transition-all duration-300 group-hover:w-4" />
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
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(222,47%,11%)]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Insights
                </h3>
                <ul className="mt-4 space-y-3">
                  {insightLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-2 text-[hsl(215,19%,35%)] transition-all duration-300 hover:text-[hsl(222,47%,11%)]"
                      >
                        <span className="h-px w-0 bg-[hsl(174,84%,32%)] transition-all duration-300 group-hover:w-4" />
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
            <div className="rounded-3xl border border-[hsl(214,32%,91%)] bg-white p-8 shadow-[0_25px_70px_-45px_hsla(211,96%,78%,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-45px_hsla(174,84%,32%,0.3)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(175,77%,26%)]">
                Stay Informed
              </h3>
              <p className="mt-4 text-base text-muted-foreground">
                Monthly regulatory intel, deadline reminders, and market signals curated by our compliance desk.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-full border border-[hsl(213,27%,84%)] bg-white px-4 text-sm text-[hsl(215,28%,17%)] placeholder:text-[hsl(215,19%,35%)]/70 focus:border-[hsl(217,91%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsla(217,91%,60%,0.2)]"
                />
                <button
                  type="submit"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-[hsl(174,84%,32%)] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-[hsl(175,77%,26%)]"
                >
                  Join the circle
                </button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                By joining, you agree to our privacy policy and consent to receive updates from Terz Compliance.
              </p>
            </div>

            <div className="rounded-3xl border border-[hsl(214,32%,91%)] bg-[hsl(210,40%,98%)] p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(222,47%,11%)]">
          <div className="space-y-6 md:space-y-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 md:p-10 shadow-[0_20px_60px_-25px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_25px_70px_-25px_rgba(59,130,246,0.7)]">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/30 blur-3xl"
              />
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Our Promise
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                  At Terz Compliance, we don't just meet timelines —{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    we redefine them.
                  </span>
                </h3>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 md:p-8 backdrop-blur">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Contact
              </h3>
              <ul className="mt-4 space-y-5">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <li key={value} className="group flex items-start gap-3">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[hsl(167,85%,89%)] text-[hsl(175,77%,26%)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[hsl(215,19%,35%)]/70">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                        {label}
                      </p>
                      <a
                        href={href}
                        className="text-sm font-medium text-[hsl(215,19%,35%)] transition-all duration-300 hover:text-[hsl(174,84%,32%)]"
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

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-[hsl(214,32%,91%)] pt-10 text-sm text-[hsl(215,19%,35%)] lg:grid-cols-[1.1fr,1fr]">
        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 md:pt-8 text-sm text-white/60 lg:grid-cols-[1.1fr,1fr]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Terz Compliance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/privacy"
                className="transition-colors duration-300 hover:text-[hsl(174,84%,32%)]"
                className="transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="transition-colors duration-300 hover:text-[hsl(174,84%,32%)]"
                className="transition-colors duration-300 hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[hsl(214,32%,91%)] bg-white p-4 text-xs uppercase tracking-[0.25em] text-[hsl(215,19%,35%)] md:inline-grid">
              <div className="text-[hsl(215,28%,17%)]">ISO 13485 Ready</div>
              <div className="text-[hsl(215,28%,17%)]">Pan-India Experts</div>
              <div className="text-[hsl(215,28%,17%)]">24h Response</div>
              <div className="text-[hsl(215,28%,17%)]">Global Launchpad</div>
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs uppercase tracking-[0.25em] text-white/50 md:inline-grid">
              <div className="text-white/70">ISO 13485 Ready</div>
              <div className="text-white/70">Pan-India Experts</div>
              <div className="text-white/70">24h Response</div>
              <div className="text-white/70">Global Launchpad</div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-[hsl(214,32%,91%)] bg-white p-6 text-center text-sm text-[hsl(215,19%,35%)] shadow-[0_15px_45px_-25px_hsla(211,96%,78%,0.4)] md:hidden">
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-[hsl(175,77%,26%)]">
            Quick Connect
          </h4>
          <p className="mt-2 text-[hsl(215,19%,35%)]">
        <div className="mt-6 rounded-3xl border border-primary/30 bg-primary/10 p-5 text-center text-sm text-primary-foreground shadow-[0_15px_45px_-25px_rgba(59,130,246,0.6)] md:hidden">
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            Quick Connect
          </h4>
          <p className="mt-2 text-white/80">
            Save time on mobile—tap below to reach us instantly.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(210,40%,98%)] px-3 py-4 text-[hsl(215,19%,35%)] transition-transform duration-300 hover:-translate-y-1 hover:border-[hsl(174,84%,32%)]"
            >
              <Phone className="h-5 w-5 text-[hsl(174,84%,32%)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(174,84%,32%)]">
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/20 bg-black/30 px-3 py-4 text-white/80 transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
            >
              <Phone className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Call
              </span>
            </a>
            <a
              href="mailto:info@terzcompliance.com"
              className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(210,40%,98%)] px-3 py-4 text-[hsl(215,19%,35%)] transition-transform duration-300 hover:-translate-y-1 hover:border-[hsl(174,84%,32%)]"
            >
              <Mail className="h-5 w-5 text-[hsl(174,84%,32%)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(174,84%,32%)]">
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
