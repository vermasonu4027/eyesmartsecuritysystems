"use client";

import { useState } from "react";
import { productCategories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? productCategories.filter((cat) => cat.slug === activeCategory)
    : productCategories;

  return (
    <div className="container py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Security Solutions</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive product range to protect homes, offices, and industries
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap gap-3">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => setActiveCategory(null)}
        >
          All Categories
        </Button>
        {productCategories.map((cat) => (
          <Button
            key={cat.slug}
            variant={activeCategory === cat.slug ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.slug)}
          >
            {cat.title}
          </Button>
        ))}
      </div>

      {/* Categories & Products */}
      <div className="space-y-16">
        {filteredCategories.map((category) => (
          <section key={category.slug} id={category.slug}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <ProductGrid products={category.products} categorySlug={category.slug} />
          </section>
        ))}
      </div>
    </div>
  );
}
