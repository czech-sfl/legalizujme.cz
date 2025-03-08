import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const burra = localFont({
  src: "../fonts/burra.ttf",
  variable: "--font-burra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legalizujme",
  description: "Největší konference o legalizaci a válce proti drogám",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${outfit.variable} ${burra.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
