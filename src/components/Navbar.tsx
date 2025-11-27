import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="relative border-b border-border/70 bg-gradient-to-b from-card/95 via-background/92 to-background/86 backdrop-blur-xl shadow-[0_18px_48px_-22px_hsla(209,53%,23%,0.3)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="group relative flex items-center rounded-full border border-border/80 bg-white px-4 py-2 shadow-[0_14px_34px_-18px_hsla(209,32%,22%,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-18px_hsla(209,32%,22%,0.35)]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/15 via-transparent to-primary/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img src={logo} alt="Terz Compliance" className="relative z-10 h-10 sm:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <NavItem to="/" label="Home" isActive={isActive("/")} />

              {/* Services Dropdown */}
              <div
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    servicesOpen ? "text-primary" : "text-muted-foreground"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-border/70 bg-gradient-to-b from-card/95 via-card/92 to-card/88 p-2 shadow-[0_24px_60px_-28px_hsla(209,38%,20%,0.22)] ring-1 ring-primary/10 animate-in fade-in zoom-in-95">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="group/link relative block overflow-hidden rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                        >
                          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavItem to="/resources" label="Resources" isActive={isActive("/resources")} />
              <NavItem to="/procedure" label="Procedure" isActive={isActive("/procedure")} />
              <NavItem to="/about" label="About" isActive={isActive("/about")} />
              <Button
                asChild
                className="group relative overflow-hidden rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_hsla(209,53%,23%,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_22px_48px_-18px_hsla(209,53%,23%,0.45)]"
              >
                <Link to="/contact">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-60 transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-card/80 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-[0_14px_34px_-18px_hsla(209,32%,22%,0.28)] lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="animate-in slide-in-from-top-4 py-6 lg:hidden">
              <div className="flex flex-col space-y-4 rounded-3xl border border-border/70 bg-gradient-to-b from-card/95 via-card/92 to-card/88 p-6 shadow-[0_22px_60px_-26px_hsla(209,38%,20%,0.24)]">
                <Link
                  to="/"
                  className={`text-base font-semibold transition-all duration-300 ${
                    isActive("/")
                      ? "text-primary"
                      : "text-muted-foreground hover:translate-x-1 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors duration-300 ${
                      servicesOpen ? "bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mt-3 ml-2 space-y-2 border-l border-primary/30 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block text-sm font-medium text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <LinkListItem
                  to="/resources"
                  label="Resources"
                  isActive={isActive("/resources")}
                  onClick={() => setIsOpen(false)}
                />
                <LinkListItem
                  to="/procedure"
                  label="Procedure"
                  isActive={isActive("/procedure")}
                  onClick={() => setIsOpen(false)}
                />
                <LinkListItem
                  to="/about"
                  label="About"
                  isActive={isActive("/about")}
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  asChild
                  className="group relative w-full overflow-hidden rounded-full bg-primary py-3 text-base font-semibold shadow-[0_18px_40px_-18px_hsla(209,53%,23%,0.35)] transition-all duration-300 hover:scale-[1.01] hover:bg-primary/90 hover:shadow-[0_22px_48px_-18px_hsla(209,53%,23%,0.45)]"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-60 transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

type NavItemProps = {
  to: string;
  label: string;
  isActive: boolean;
};

const NavItem = ({ to, label, isActive }: NavItemProps) => (
  <Link
    to={to}
    className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-primary hover:shadow-[0_10px_30px_-12px_hsla(209,53%,23%,0.3)]"
    }`}
  >
    <span
      className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    />
    <span className="relative z-10 flex items-center gap-2">
      {label}
      <span
        className={`h-1 w-1 rounded-full bg-primary transition-all duration-300 ${
          isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        }`}
      />
    </span>
    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 group-hover:w-3/4" />
  </Link>
);

type LinkListItemProps = NavItemProps & { onClick: () => void };

const LinkListItem = ({ to, label, isActive, onClick }: LinkListItemProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-base font-semibold transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:translate-x-1 hover:text-primary"
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
