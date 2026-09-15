export default function PrivacyPage() {
  return (
    <div className="container py-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: September 15, 2026</p>
      <div className="space-y-6 text-foreground">
        <p>Eye Smart Security Systems is committed to protecting your privacy.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you request a quote or contact us.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, and improve our website.</p>
        </section>
      </div>
    </div>
  );
}
