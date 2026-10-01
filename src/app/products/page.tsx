"use client";

import { useState } from "react";
import { productCategories } from "@/data/products";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? productCategories.filter((cat) => cat.slug === activeCategory)
    : productCategories;

  return (
    <>
      <PageHero
        title="Our Security Solutions"
        description="Comprehensive product range to protect homes, offices, and industries"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        primaryCta={{
          label: "Get Free Quote",
          href: "/contact",
        }}
      />

      <div className="container py-20">
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
    </>
  );
}
