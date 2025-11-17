import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 1 business day.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-6 lg:py-8 min-h-[10vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to simplify your compliance journey? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 lg:py-12 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="medical-devices">Medical Devices</option>
                        <option value="ivd">In-Vitro Diagnostics</option>
                        <option value="cosmetics">Cosmetics</option>
                        <option value="lmpc">Legal Metrology</option>
                        <option value="iec">Import Export Code</option>
                        <option value="epr">EPR</option>
                        <option value="market-entry">India Market Entry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* New inquiry type selection */}
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <select
                        id="inquiryType"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="general">General Enquiry</option>
                        <option value="support">Support</option>
                        <option value="sales">Sales/Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* New attachments field */}
                    <div className="space-y-2">
                      <Label htmlFor="attachments">Attachments</Label>
                      <Input
                        id="attachments"
                        type="file"
                        className="w-full"
                        multiple
                      />
                      <p className="text-sm text-muted-foreground">
                        You can upload relevant documents (PDF, DOCX, etc.).
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your compliance needs..."
                        required
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll get back to you within 1 business day.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in Terz Compliance. We are just a phone call or email away and ready to assist you with your regulatory needs.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                        <a
                          href="mailto:info@terzcompliance.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@terzcompliance.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          For general inquiries and quotes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                        <a
                          href="tel:+919876543210"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 98765 43210
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Monday - Friday, 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Remote Support</h3>
                        <p className="text-muted-foreground">
                          Completely remote – reach us from anywhere in India
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We serve clients nationwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* New Chat Card */}
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Chat with Us</h3>
                        <a
                          href="https://wa.me/919876543210"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Start WhatsApp Chat
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available Mon - Fri, 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* New Schedule Card */}
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Schedule a Meeting</h3>
                        <a
                          href="https://calendly.com/terzcompliance/consultation"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Now
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Choose a convenient time for your consultation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">Free Initial Consultation</h3>
                  <p className="text-muted-foreground text-sm">
                    Not sure where to start? Schedule a free 30-minute consultation with our regulatory experts. We'll assess your needs and provide initial guidance at no cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does the registration process typically take?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Timeline varies by product category and complexity. Medical devices typically take 3–6 months, while cosmetics can be faster at 2–4 months. We provide detailed timelines during consultation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do you offer support after product approval?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes! We provide comprehensive post-market support including renewal management, compliance monitoring, and assistance with regulatory updates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can you help with multiple product registrations?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Absolutely. We specialize in managing multiple registrations simultaneously, optimizing timelines and costs for portfolio launches.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
