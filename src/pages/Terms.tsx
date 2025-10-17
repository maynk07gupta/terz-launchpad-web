const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the services of Terz Compliance, you agree to be bound by these Terms and 
                  Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                <p>
                  Terz Compliance provides regulatory compliance consulting services for medical devices, in-vitro 
                  diagnostics, cosmetics, and other products entering the Indian market. Our services include but are 
                  not limited to documentation preparation, filing assistance, and regulatory guidance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
                <p>
                  Clients are responsible for providing accurate and complete information about their products. 
                  Clients must also ensure their products comply with all applicable safety and quality standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Fees and Payment</h2>
                <p>
                  Fees for our services are outlined in individual service agreements. Payment terms will be specified 
                  in the agreement, and clients are expected to make payments as per the agreed schedule.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p>
                  While we strive for excellence in all our services, Terz Compliance is not liable for regulatory 
                  decisions made by government authorities or for delays beyond our control. Our liability is limited 
                  to the fees paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
                <p>
                  We maintain strict confidentiality of all client information and documents. We do not disclose 
                  client information to third parties except as required by law or with explicit client consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p>
                  All materials, documentation, and deliverables prepared by Terz Compliance remain our intellectual 
                  property until full payment is received. Upon payment, clients receive license to use these 
                  materials for their regulatory submissions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p>
                  Either party may terminate a service agreement with written notice. Termination terms and any 
                  applicable refunds will be governed by the specific service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the 
                  exclusive jurisdiction of courts in [City], India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
                <p>
                  For questions regarding these Terms and Conditions, please contact us at:
                </p>
                <ul className="list-none pl-0 space-y-2 mt-4">
                  <li>Email: info@terzcompliance.com</li>
                  <li>Phone: +91 98765 43210</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
