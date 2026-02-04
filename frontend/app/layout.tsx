import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Preloader from "@/components/layout/Preloader";
import Footer from "@/components/layout/Footer/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Grow Trucking",
  description: "Truck Dispatch Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} font-primary antialiased`}
      >
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
