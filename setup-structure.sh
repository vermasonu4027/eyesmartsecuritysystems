#!/bin/bash

# Create all necessary directories
mkdir -p src/components/{layout,sections,forms,products,blog,ui,seo}
mkdir -p src/lib
mkdir -p src/data
mkdir -p src/i18n
mkdir -p src/app/api/contact
mkdir -p src/app/\[locale\]/{about,products/{__archive,\[category\]/\[slug\]},blog/\[slug\],contact,privacy-policy,terms-of-service}
mkdir -p content/blog/{en,hi}
mkdir -p public/images

# Create placeholder stub files for components
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/components/layout/FloatingActions.tsx
touch src/components/layout/MobileNav.tsx
touch src/components/layout/LocaleSwitcher.tsx
touch src/components/layout/ThemeToggle.tsx
touch src/components/layout/Logo.tsx
touch src/components/layout/ScrollToTop.tsx
touch src/components/layout/SkipLink.tsx

touch src/components/sections/Hero.tsx
touch src/components/sections/TrustBar.tsx
touch src/components/sections/ServicesGrid.tsx
touch src/components/sections/WhyChooseUs.tsx
touch src/components/sections/Process.tsx
touch src/components/sections/Testimonials.tsx
touch src/components/sections/CoverageMap.tsx
touch src/components/sections/CTABanner.tsx
touch src/components/sections/FAQAccordion.tsx

touch src/components/forms/ContactForm.tsx
touch src/components/forms/QuoteForm.tsx

touch src/components/products/CategoryCard.tsx
touch src/components/products/ProductCard.tsx
touch src/components/products/ProductGrid.tsx

touch src/components/blog/PostCard.tsx
touch src/components/blog/PostGrid.tsx
touch src/components/blog/TableOfContents.tsx
touch src/components/blog/MDXComponents.tsx

touch src/components/seo/JsonLd.tsx
touch src/components/seo/BreadcrumbSchema.tsx

touch src/lib/seo.ts
touch src/lib/blog.ts
touch src/lib/mailer.ts
touch src/lib/recaptcha.ts
touch src/lib/constants.ts

touch src/app/api/contact/route.ts
touch src/app/\[locale\]/page.tsx
touch src/app/\[locale\]/about/page.tsx
touch src/app/\[locale\]/products/page.tsx
touch src/app/\[locale\]/products/\[category\]/\[slug\]/page.tsx
touch src/app/\[locale\]/blog/page.tsx
touch src/app/\[locale\]/blog/\[slug\]/page.tsx
touch src/app/\[locale\]/contact/page.tsx
touch src/app/\[locale\]/privacy-policy/page.tsx
touch src/app/\[locale\]/terms-of-service/page.tsx
touch src/app/\[locale\]/not-found.tsx
touch src/app/sitemap.ts
touch src/app/robots.ts

echo "Directory structure created successfully"
