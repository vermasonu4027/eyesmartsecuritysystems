import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((requestLocale as unknown) as string) || "en";

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch {
    const messages = (await import(`../../messages/en.json`)).default;
    return {
      locale: "en",
      messages,
    };
  }
});
