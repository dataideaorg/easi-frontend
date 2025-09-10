import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "East African Statistics Institute (EASI)",
  description: "Excellence in Statistical Research & Training - The East African Statistics Institute provides comprehensive research in statistical methodology and high-quality training to enhance the quality of national statistics.",
  keywords: "statistics, research, training, East Africa, EASI, data analysis, statistical methodology",
  authors: [{ name: "East African Statistics Institute" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/EASI-Logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/EASI-Logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
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
      <body className={`${gabarito.variable} font-sans antialiased`}>
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
