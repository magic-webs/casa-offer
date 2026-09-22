import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif-luxury",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Casa Corbett | 50% OFF* Exclusive 500–1000 Sq. Yards Plot Scheme",
  description:
    "600+ Acre resort-style holiday home township near Jim Corbett, Ramnagar. Special Event Offer: 50% OFF* on 11 October 2026 at Holiday Inn, Mayur Vihar, Delhi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
