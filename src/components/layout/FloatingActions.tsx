"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/business";

export function FloatingActions() {
  const pathname = usePathname();

  const isContactPage = pathname?.includes("/contact");

  if (isContactPage) return null;

  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your security systems. Please contact me.");
  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${business.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Call"
        title="Call now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
