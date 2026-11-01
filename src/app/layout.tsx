import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Naime | Digital Marketing, Freelancing & AI Instructor",
  description:
    "NSDA Level-3 Certified Digital Marketer with 100+ international accounts managed, 5+ years of mathematics pedagogy, and practical AI workflow integration for modern marketing education.",
  keywords: [
    "Digital Marketing Instructor",
    "Freelancing Instructor",
    "AI Marketing Trainer",
    "NSDA Level-3 Certified Marketer",
    "Meta Ads Trainer",
    "Google Ads Training",
    "Corporate Marketing Trainer Bangladesh",
    "Digital Marketing Pedagogy",
    "Naime Digital Marketer",
  ],
  authors: [{ name: "Naime" }],
  openGraph: {
    title: "Naime | Digital Marketing, Freelancing & AI Instructor",
    description:
      "I turn real-world digital marketing experience into practical learning, helping individuals and businesses develop modern, career-ready skills.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white antialiased flex flex-col">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
