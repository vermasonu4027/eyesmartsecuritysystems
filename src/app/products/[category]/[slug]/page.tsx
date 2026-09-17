import { notFound } from "next/navigation";
import { productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug,
    }))
  );
}

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { category, slug } = await params;
  const productCategory = productCategories.find((c) => c.slug === category);
  const product = productCategory?.products.find((p) => p.slug === slug);

  if (!product || !productCategory) {
    notFound();
  }

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          {product.brand && (
            <div className="text-sm font-medium text-primary mb-2">
              {product.brand}
            </div>
          )}
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
        </div>

        <p className="text-lg text-muted-foreground mb-10">
          {product.shortDescription}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {product.specifications && product.specifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
            <dl className="divide-y divide-border border-t border-b border-border">
              {product.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-3"
                >
                  <dt className="font-medium sm:col-span-1">{spec.label}</dt>
                  <dd className="text-muted-foreground sm:col-span-2 whitespace-pre-line">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>
    </div>
  );
}
