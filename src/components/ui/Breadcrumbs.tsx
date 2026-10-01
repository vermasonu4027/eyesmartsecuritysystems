import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Build breadcrumb schema
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <nav aria-label="Breadcrumbs" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                  {index < items.length - 1 && <span className="text-white/60">›</span>}
                </>
              ) : (
                <>
                  <span className="text-white">{item.label}</span>
                  {index < items.length - 1 && <span className="text-white/60">›</span>}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
