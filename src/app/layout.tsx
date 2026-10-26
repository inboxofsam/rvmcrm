import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsAndClients } from "@/components/sections/TestimonialsAndClients";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RVM CRM Software",
  description: "Modern, professional, and reliable CRM platform for businesses across multiple industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 pt-[144px]">
          {children}
        </main>
        <TestimonialsAndClients />
        <Footer />
      </body>
    </html>
  );
}
