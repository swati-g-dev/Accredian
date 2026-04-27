import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Accredian",
  description: "Partner with Accredian to build a future-ready workforce. World-class AI, Data Science & Management programs for enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="bg-white text-gray-900 scroll-smooth">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
