export function TrustBar() {
  return (
    <section className="py-12 bg-surface border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-sm text-muted-foreground">Installations</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">13+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-sm text-muted-foreground">Delhi NCR Cities</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Emergency Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
