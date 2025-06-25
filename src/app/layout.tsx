import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: "KYC Demo - Gestion des données clients",
  description: "Application de démonstration pour la gestion des données KYC (Know Your Customer) avec génération de documents et dashboard analytique",
  keywords: "KYC, gestion clients, données financières, conformité, documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${openSans.variable} font-opensans antialiased min-h-screen bg-background`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
