import { z } from "zod";
import { sendEmail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { business } from "@/data/business";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().optional(),
  recaptchaToken: z.string().optional(),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return Response.json({ error: "Invalid submission" }, { status: 400 });
    }

    const validated = contactSchema.parse(body);

    if (validated.recaptchaToken) {
      const captchaResult = await verifyRecaptcha(validated.recaptchaToken);
      if (!captchaResult.success) {
        return Response.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
      }
    }

    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">New Quote Request from ${validated.name}</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Phone:</strong> +91${validated.phone}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Service:</strong> ${validated.service}</p>
        ${validated.message ? `<p><strong>Message:</strong><br/>${validated.message}</p>` : ""}
        <hr/>
        <p style="font-size: 12px; color: #64748b;">This is an automated email. Reply to ${validated.email} to contact the customer.</p>
      </div>
    `;

    const textEmail = `
New Quote Request from ${validated.name}

Name: ${validated.name}
Phone: +91${validated.phone}
Email: ${validated.email}
Service: ${validated.service}
${validated.message ? `Message: ${validated.message}` : ""}

This is an automated email. Reply to ${validated.email} to contact the customer.
    `;

    const result = await sendEmail(
      process.env.MAIL_TO || "info@eyesmartsecuritysystems.com",
      `New Quote Request: ${validated.name}`,
      htmlEmail,
      textEmail
    );

    if (!result.success) {
      return Response.json(
        { error: "Failed to send email. Please try again or call us directly." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: "Quote request sent successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    if (error instanceof z.ZodError) {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
