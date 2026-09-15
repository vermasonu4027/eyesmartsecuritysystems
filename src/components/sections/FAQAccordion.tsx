import { faqs } from "@/data/faqs";

export function FAQAccordion() {
  return (
    <section className="py-20 bg-surface">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our security systems
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.slug} className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold flex items-center justify-between">
                {faq.question}
                <span className="text-primary group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-muted-foreground mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
