import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface CTA {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  eyebrow?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  image?: {
    src: string;
    alt: string;
  };
  align?: "center" | "left";
  children?: ReactNode;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  eyebrow,
  primaryCta,
  secondaryCta,
  image,
  align = "center",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden py-16 md:py-24 min-h-[40svh]",
        image ? "bg-slate-950 text-white" : "bg-slate-950 text-white"
      )}
    >
      {/* Background */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </>
      ) : (
        <>
          <div className="hero-mesh absolute inset-0" />
          <div className="camera-grid absolute inset-0" />
        </>
      )}

      {/* Content */}
      <div
        className={cn(
          "container relative z-10 mx-auto max-w-4xl",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {/* Breadcrumbs */}
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-green-300 mb-4 border border-white/20">
            {eyebrow}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className={cn("flex gap-4 mb-8", align === "center" ? "justify-center" : "justify-start")}>
            {primaryCta && (
              <Link href={primaryCta.href} className="inline-block">
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  {primaryCta.label}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="inline-block">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Additional content */}
        {children}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}
