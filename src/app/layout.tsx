import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Toaster } from "sonner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://eyesmartsecuritysystems.com"),
  title: {
    template: "%s | Eye Smart Security Systems",
    default: "Eye Smart Security Systems | CCTV & Security Solutions Delhi NCR",
  },
  description:
    "EYE SMART SECURITY SYSTEMS is a top-rated security system supplier and installer serving Noida, Greater Noida, and Ghaziabad since 2013. CCTV, biometric access control, alarms, video door phones, and cabling solutions.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Eye Smart Security",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
