import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

export function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="block group"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden h-full group-hover:border-primary/50 transition">
        {product.image && (
          <div className="relative w-full aspect-video bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="p-6">
          {product.brand && (
            <div className="text-xs font-medium text-primary mb-1">
              {product.brand}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {product.shortDescription}
          </p>
          <div className="text-xs text-primary font-medium group-hover:translate-x-1 transition">
            View Details →
          </div>
        </div>
      </div>
    </Link>
  );
}
