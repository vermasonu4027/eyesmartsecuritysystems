export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn("reCAPTCHA secret key not configured");
    return { success: false };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json() as { success: boolean; score?: number };
    return { success: data.success, score: data.score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false };
  }
}
