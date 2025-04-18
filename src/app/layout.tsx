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
  title: "Next Blog",
  description: "Blog created using Next.js and Shadcn/ui along with Tailwind",
  keywords: ["Next", "React", "Blog", "JavaScript", "Test"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Next Blog",
    description: "Blog created using Next.js and Shadcn/ui along with Tailwind",
    siteName: "Next Blog",
    type: "website",
    images: [
      {
        url: "socials-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Blog",
    description: "Blog created using Next.js and Shadcn/ui along with Tailwind",
    images: ["/socials-image.jpg"],
    creator: "@IlijaToskovic",
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
