import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "East African Statistics Institute (EASI)",
  description: "Excellence in Statistical Research & Training - The East African Statistics Institute provides comprehensive research in statistical methodology and high-quality training to enhance the quality of national statistics.",
  keywords: "statistics, research, training, East Africa, EASI, data analysis, statistical methodology",
  authors: [{ name: "East African Statistics Institute" }],
  openGraph: {
    title: "East African Statistics Institute (EASI)",
    description: "Excellence in Statistical Research & Training",
    url: "https://easi.ac.ug",
    siteName: "EASI",
    images: [
      {
        url: "/EASI-Logo.png",
        width: 800,
        height: 600,
        alt: "EASI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East African Statistics Institute (EASI)",
    description: "Excellence in Statistical Research & Training",
    images: ["/EASI-Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
