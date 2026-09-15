import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "13+ Years of Experience",
      description: "Trusted security partner since 2013 with 1000+ successful installations",
    },
    {
      title: "Expert Technicians",
      description: "Certified professionals who ensure flawless installation and setup",
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock technical support whenever you need us",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Clear quotes with detailed service breakdowns",
    },
    {
      title: "Latest Technology",
      description: "We install HD/4K cameras, AI analytics, and cloud-enabled systems",
    },
    {
      title: "Fast Installation",
      description: "Most systems installed within 1-2 days with minimal disruption",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Eye Smart?</h2>
          <p className="text-lg text-muted-foreground">
            What makes us Delhi NCR's most trusted security provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
