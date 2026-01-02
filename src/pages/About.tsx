import { Users, Award, DollarSign, Target, Lightbulb, Building2, Boxes, ShieldCheck } from "lucide-react";
import aboutHeroImage from "@/assets/about-hero.png";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let scrollInterval: NodeJS.Timeout;
    let isHovered = false;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;
          if (currentScroll >= maxScroll) {
            container.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          } else {
            container.scrollBy({
              left: 420,
              behavior: "smooth"
            });
          }
        }
      }, 3000);
    };
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    startAutoScroll();
    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const values = [{
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering life science companies to bring products to market efficiently and ethically by simplifying regulatory compliance."
  }, {
    icon: Award,
    title: "Quality First",
    description: "We focus on first-pass approval with meticulous documentation that meets the highest regulatory standards."
  }, {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We provide dedicated support as your single point of contact throughout the journey."
  }, {
    icon: DollarSign,
    title: "Transparent & Fair",
    description: "Honest communication, predictable timelines, and cost-effective solutions with no hidden fees."
  }];
  return <div className="min-h-screen bg-background">
      {/* Header / Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[650px] lg:min-h-[80vh]">
            <div className="space-y-6 lg:space-y-8 max-w-3xl lg:pr-6">
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Regulatory approvals for India, done right the first time.
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Terz Compliance is a specialized regulatory partner for manufacturers, importers and innovators entering the Indian market.
                  We simplify approvals across medical devices, in-vitro diagnostics, cosmetics, food, EPR, Legal Metrology and more - so your team can launch faster with confidence.
                </p>
                <p className="text-base text-foreground/70 font-medium">
                  From first-time importers to global brands, we’ve helped teams navigate India’s regulations without surprises or guesswork.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/40">
                  Book a consultation
                </a>
                <a href="#services" className="inline-flex items-center justify-center text-base font-semibold text-primary underline-offset-4 hover:underline">
                  Explore our services
                </a>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                  <img 
                    src={aboutHeroImage} 
                    alt="Navigating India's Regulatory Maze - Your trusted partner in compliance strategy and solutions" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Band A */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center bg-secondary/30 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
            <div className="space-y-5 lg:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
                <span>Our Story</span>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Terz Compliance was born from a simple observation: getting products approved in India is often slower and more confusing than it should be.
                Our founders spent years inside the regulatory ecosystem, watching innovative products get stuck in paperwork and unclear rules.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Instead of accepting that as “just the way it is”, we decided to build a partner that does things differently.
                </p>
                <p>
                  We started by mapping every major Indian approval pathway - BIS, CDSCO, Legal Metrology, FSSAI, EPR and more - and breaking them into clear, repeatable steps. Then we combined this with proactive communication, transparent fees and a completely remote model so clients anywhere in the world could work with us easily.
                </p>
                <p>
                  Today, Terz Compliance supports manufacturers, importers and distributors of all sizes. Whether you’re launching a single SKU or an entire portfolio, our job is to make your regulatory journey predictable, documented and stress-free.
                </p>
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 bg-gradient-to-br from-background via-primary/5 to-primary/10 shadow-2xl">
                <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/5] flex items-center justify-center p-6">
                  <div className="w-full h-full rounded-2xl bg-white/80 ring-1 ring-primary/10 shadow-lg shadow-primary/20 flex items-center justify-center">
                    <div className="mx-auto max-w-sm text-center space-y-3 p-6">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mx-auto">
                        <Users className="h-7 w-7" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">Real people, real expertise</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A remote-first team collaborating with clients worldwide, reviewing documents, timelines and approvals together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Band B */}
          <div className="bg-secondary/40 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  <span>How we’ve grown</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">From Uttarakhand to a pan-India partner</h3>
                <p className="text-muted-foreground">
                  From a small specialist team in Uttarakhand to a pan-India regulatory partner.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[{
              year: "2019",
              title: "The Insight",
              description: "Working inside compliance and industry, we kept seeing good products delayed by unclear documentation and fragmented advice.",
              icon: Lightbulb
            }, {
              year: "2020",
              title: "Terz Compliance is founded",
              description: "We set up Terz Compliance with one goal: make India’s approval process clearer, faster and more predictable for manufacturers and importers.",
              icon: Building2
            }, {
              year: "2022",
              title: "Scaling across categories",
              description: "Our work expanded from medical devices and IVDs into cosmetics, food, EPR and Legal Metrology, supported by a fully remote model serving clients across India and abroad.",
              icon: Boxes
            }, {
              year: "Today",
              title: "A predictable regulatory partner",
              description: "Today, we act as an extended regulatory team for companies of all sizes - bringing structured processes, honest timelines and documentation that stands up to scrutiny.",
              icon: ShieldCheck
            }].map((item, index) => <div key={item.year} className="relative h-full rounded-2xl border border-primary/15 bg-background/70 p-6 shadow-md shadow-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">{item.year}</p>
                      <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  {index < 3 && <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-gradient-to-r from-primary/40 to-primary" aria-hidden />}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => <Card key={index}>
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
              Transparent Fee Structure
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Our Pricing Philosophy
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We believe in cost-effective solutions that deliver real value.
                      Our goal is to save you money by avoiding delays and errors,
                      ensuring first-pass approval whenever possible.
                    </p>
                    <p className="text-muted-foreground">
                      All quotes include a detailed breakdown of regulatory fees and
                      our service fees, so you know exactly where your investment goes.
                      No hidden costs, no surprises.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Real experiences from industry professionals who trust Terz Compliance
            </p>
            <div className="relative">
              <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
                <div className="flex gap-6 min-w-max px-2">
                  <Card className="w-[400px] flex-shrink-0">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "Mr. Batra brought remarkable professionalism, expertise, and strategic insight from day one. He understood our business requirements quickly and delivered effective solutions ahead of schedule. His clear communication and ability to demystify complex compliance requirements made him a trusted advisor to our team."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">Hemendra Dave, PGDBM, MBA</p>
                        <p className="text-sm text-primary font-medium mt-1">Regulatory Head</p>
                        <p className="text-sm text-muted-foreground">Envision Scientific, Concept Medical</p>
                        <p className="text-xs text-muted-foreground mt-2">April 6, 2025</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] flex-shrink-0">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "I highly recommend Vasu Batra for his outstanding expertise in medical device registration with Indian authorities. His deep knowledge, proactive approach, and ability to navigate complex processes were instrumental in securing timely clearance. His strong relationships with authorities ensured a smooth approval process."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">Andrew Tang</p>
                        <p className="text-sm text-primary font-medium mt-1">Chief Executive Officer</p>
                        <p className="text-sm text-muted-foreground">Mobilab, USA</p>
                        <p className="text-xs text-muted-foreground mt-2">February 11, 2025</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] flex-shrink-0">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "As a consultant who handles the medical devices regulatory approvals, Vasu is meticulous and conscientious while preparing and vetting documents, leaving little room for errors, saving time and money for his clients. Calm and courteous, he is also a pleasure to deal with."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">Anil Kumar Nair</p>
                        <p className="text-sm text-primary font-medium mt-1">Managing Director</p>
                        <p className="text-sm text-muted-foreground">Geuder Asia Pacific Pvt. Ltd, Singapore</p>
                        <p className="text-xs text-muted-foreground mt-2">November 20, 2024</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] flex-shrink-0">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "Had worked with Vasu on medical device registration in India, a person with strong work ethics, extremely responsive and knows his field of work well. His inputs had been a guiding light in getting medical devices registered in India."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">Steven Choy</p>
                        <p className="text-sm text-primary font-medium mt-1">Business Consultant</p>
                        <p className="text-sm text-muted-foreground">SEED, Japan</p>
                        <p className="text-xs text-muted-foreground mt-2">April 23, 2024</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="w-[400px] flex-shrink-0">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                        "Vasu is super efficient in registration work. He helped with urgent paperwork ahead of deadlines and is ever ready to help even at odd hours. Truly appreciate his effort in going the extra mile for his clients."
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">Toinali Chophi</p>
                        <p className="text-sm text-primary font-medium mt-1">CEO</p>
                        <p className="text-sm text-muted-foreground">Beautybarnindia</p>
                        <p className="text-xs text-muted-foreground mt-2">May 24, 2023</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-6">
                Scroll horizontally to read more testimonials →
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;