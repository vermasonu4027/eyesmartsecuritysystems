import type { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductGridProps {
  products: Product[];
  categorySlug: string;
}

export function ProductGrid({ products, categorySlug }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          categorySlug={categorySlug}
        />
      ))}
    </div>
  );
}
