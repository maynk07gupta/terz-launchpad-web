import { Users, Award, DollarSign, Target } from "lucide-react";
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
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 420, behavior: "smooth" });
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


  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering life science companies to bring products to market efficiently and ethically by simplifying regulatory compliance.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We focus on first-pass approval with meticulous documentation that meets the highest regulatory standards.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "Your success is our success. We provide dedicated support as your single point of contact throughout the journey.",
    },
    {
      icon: DollarSign,
      title: "Transparent & Fair",
      description:
        "Honest communication, predictable timelines, and cost-effective solutions with no hidden fees.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Terz Compliance
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in navigating India's regulatory landscape
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Terz Compliance was founded with a clear vision: to transform the
                complex world of regulatory compliance into a streamlined, predictable
                process for life science companies entering the Indian market.
              </p>
              <p>
                Our founders recognized that manufacturers, importers, and distributors
                often struggle with India's intricate regulatory requirements, leading
                to costly delays and uncertain timelines. With decades of combined
                experience in regulatory affairs, they set out to create a consultancy
                that would serve as a true partner—not just a service provider.
              </p>
              <p>
                Today, Terz Compliance stands as a one-stop solution for regulatory
                needs across medical devices, in-vitro diagnostics, cosmetics, and
                more. We pride ourselves on our commitment to quality documentation,
                transparent communication, and unwavering dedication to our clients'
                success.
              </p>
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
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <value.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
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
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40"
              >
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
    </div>
  );
};

export default About;
