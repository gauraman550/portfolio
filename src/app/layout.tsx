import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Gaur | Software Developer",
  description:
    "Aman Gaur — Software Developer specializing in React.js and Next.js. Building scalable, performant, and modern web applications.",
  keywords: [
    "Aman Gaur",
    "Software Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aman Gaur" }],
  creator: "Aman Gaur",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aman Gaur | Software Developer",
    description:
      "Software Developer specializing in React.js & Next.js. Building scalable, modern web applications.",
    siteName: "Aman Gaur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Gaur | Software Developer",
    description:
      "Software Developer specializing in React.js & Next.js. Building scalable, modern web applications.",
    creator: "@amangaur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
