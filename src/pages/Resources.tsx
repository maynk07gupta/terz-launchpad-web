import { useState } from "react";
import { Calendar, FileText, Download, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("all");

  const resources = [
    {
      type: "news",
      title: "New Medical Device Rules Introduced – 2025 Update",
      description:
        "CDSCO announces revised guidelines for Class B and C medical devices effective Q2 2025.",
      date: "January 15, 2025",
      category: "Medical Devices",
    },
    {
      type: "blog",
      title: "Top 5 Common Mistakes in IVD Registration",
      description:
        "Learn from the most frequent errors we see in IVD applications and how to avoid them.",
      date: "January 10, 2025",
      category: "IVD",
    },
    {
      type: "guide",
      title: "Step-by-Step Guide to Cosmetic Registration",
      description:
        "Comprehensive guide covering the complete process from documentation to approval.",
      date: "December 20, 2024",
      category: "Cosmetics",
      downloadable: true,
    },
    {
      type: "news",
      title: "EPR Compliance Deadlines Extended",
      description:
        "CPCB extends Extended Producer Responsibility registration deadline to March 2025.",
      date: "January 5, 2025",
      category: "EPR",
    },
    {
      type: "blog",
      title: "Understanding Legal Metrology Requirements",
      description:
        "A comprehensive look at LMPC compliance for packaged commodities in 2025.",
      date: "December 15, 2024",
      category: "Legal Metrology",
    },
    {
      type: "guide",
      title: "Import Export Code: Complete Checklist",
      description:
        "Everything you need to successfully register for your IEC with DGFT.",
      date: "December 1, 2024",
      category: "IEC",
      downloadable: true,
    },
    {
      type: "blog",
      title: "India Market Entry: 2025 Regulatory Landscape",
      description:
        "Navigate the changing regulatory environment for international businesses entering India.",
      date: "November 25, 2024",
      category: "Market Entry",
    },
    {
      type: "guide",
      title: "Medical Device Classification Framework",
      description:
        "Understand device classification under CDSCO guidelines with practical examples.",
      date: "November 10, 2024",
      category: "Medical Devices",
      downloadable: true,
    },
  ];

  const filteredResources =
    activeTab === "all"
      ? resources
      : resources.filter((r) => r.type === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case "news":
        return <Calendar className="h-5 w-5 text-primary" />;
      case "blog":
        return <FileText className="h-5 w-5 text-primary" />;
      case "guide":
        return <Download className="h-5 w-5 text-primary" />;
      default:
        return <FileText className="h-5 w-5 text-primary" />;
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Knowledge Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our latest insights, news, and guides on regulatory
              compliance. Stay informed with expert articles and tools to aid your
              compliance journey.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
            >
              All Resources
            </Button>
            <Button
              variant={activeTab === "news" ? "default" : "outline"}
              onClick={() => setActiveTab("news")}
            >
              News
            </Button>
            <Button
              variant={activeTab === "blog" ? "default" : "outline"}
              onClick={() => setActiveTab("blog")}
            >
              Blog
            </Button>
            <Button
              variant={activeTab === "guide" ? "default" : "outline"}
              onClick={() => setActiveTab("guide")}
            >
              Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getIcon(resource.type)}
                    <span className="text-sm font-medium text-primary">
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>
                  {resource.downloadable && (
                    <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{resource.date}</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                    {resource.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No resources found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest regulatory updates and
              compliance insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
