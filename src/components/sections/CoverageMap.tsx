import { business } from "@/data/business";

export function CoverageMap() {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Service Coverage Across Delhi NCR</h2>
          <p className="text-lg text-muted-foreground">
            We serve all major cities with fast response times
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {business.serviceAreas.map((city) => (
            <div
              key={city}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition"
            >
              <p className="font-semibold text-sm">{city}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Can't find your area? <strong>Call us at +91 63079 72402</strong> — we may service your location
          </p>
        </div>
      </div>
    </section>
  );
}
