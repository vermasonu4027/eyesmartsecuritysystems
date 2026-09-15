import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Looks like this page went off-camera.</h1>
      <p className="text-lg text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded">Back to Home</Link>
        <Link href="/products" className="border border-border px-6 py-3 rounded">Browse Products</Link>
      </div>
    </div>
  );
}
