"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/validation";
import { toast } from "sonner";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().refine((val) => isValidIndianMobile(val), "Invalid Indian mobile number"),
  email: z.string().email("Valid email required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

type QuoteFormInputs = z.infer<typeof quoteFormSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormInputs>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormInputs) => {
    if (data.honeypot) {
      console.log("Honeypot field filled");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: normalizeIndianMobile(data.phone),
          email: data.email,
          service: data.service,
          message: data.message || "",
          recaptchaToken: "", // reCAPTCHA token would go here if needed
        }),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Quote request sent! We'll contact you within 24 hours.");
        reset();
      } else {
        toast.error(result.error || "Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number *</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Service Required *</label>
        <select
          {...register("service")}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        >
          <option value="">Select a service</option>
          {services.map((svc) => (
            <option key={svc.slug} value={svc.slug}>
              {svc.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-destructive text-sm mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          {...register("message")}
          placeholder="Any additional details or questions..."
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      </div>

      <input {...register("honeypot")} type="text" style={{ display: "none" }} />

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
