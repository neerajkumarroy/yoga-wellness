import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Replace with your domain

  title: {
    default: "Yoga Wellness | Discover Inner Peace Through Yoga",
    template: "%s | Yoga Wellness",
  },

  description:
    "Transform your body, calm your mind, and improve your lifestyle with personalized yoga sessions, meditation, therapeutic yoga, and expert-led online & offline classes.",

  keywords: [
    "Yoga",
    "Meditation",
    "Yoga Classes",
    "Online Yoga",
    "Wellness",
    "Fitness",
    "Therapeutic Yoga",
    "Yoga Wellness",
    "Mindfulness",
    "Health",
  ],

  authors: [{ name: "Yoga Wellness" }],
  creator: "Yoga Wellness",
  publisher: "Yoga Wellness",

  openGraph: {
    title: "Yoga Wellness | Discover Inner Peace Through Yoga",
    description:
      "Transform your body, calm your mind, and improve your lifestyle with expert-led yoga and meditation classes.",
    url: "https://yourdomain.com", // Replace with your domain
    siteName: "Yoga Wellness",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yoga Wellness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yoga Wellness",
    description:
      "Discover expert yoga, meditation, and wellness programs.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>{children}</AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}