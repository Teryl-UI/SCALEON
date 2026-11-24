import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter_Tight, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scaleon — The Gulf’s outbound growth system",
  description:
    "Scaleon connects positioning, research, outreach and follow-up into one system that learns from the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${display.variable} ${clashDisplay.variable}`}>
      <body className="bg-white font-sans text-[#111] antialiased">{children}</body>
    </html>
  );
}
