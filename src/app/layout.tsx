import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wear | Premium Streetwear & Fashion",
  description: "Premium streetwear, fitness gear, and modest fashion — printed on demand, designed with purpose. A fashion brand by SJA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`\${geistSans.variable} \${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
