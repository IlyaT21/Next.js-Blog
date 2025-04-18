import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site global metadata
export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "Blog using Next.js and Shadcn/ui",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4`}
      >
        <Header />
        <main className="flex flex-col items-center w-full gap-8 min-h-[65vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
