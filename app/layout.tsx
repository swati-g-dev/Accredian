import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords: "enterprise learning, corporate training, IIT programs, IIM programs, upskilling",
  openGraph: {
    title: "Accredian Enterprise",
    description: "Upskill Your Workforce at Scale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 scroll-smooth">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
