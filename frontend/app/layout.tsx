import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import SchemaScript from "@/components/seo/SchemaScript";
import { generateOrganizationSchema } from "@/lib/schema";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.growtrucking.com"

export const metadata: Metadata = {
  title: "Grow Trucking | Professional Truck Dispatch Services",
  description: "Professional truck dispatch services for owner-operators, small fleets, and independent truck drivers across the USA. We handle load finding, rate negotiation, trip planning, and broker relationships.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Grow Trucking | Professional Truck Dispatch Services",
    description: "Professional truck dispatch services for owner-operators, small fleets, and independent truck drivers across the USA.",
    url: baseUrl,
    siteName: "Grow Trucking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Trucking | Professional Truck Dispatch Services",
    description: "Professional truck dispatch services for owner-operators, small fleets, and independent truck drivers across the USA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema - appears on all pages
  const organizationSchema = generateOrganizationSchema({
    name: "Grow Trucking",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.growtrucking.com",
    description: "Professional truck dispatch services for owner-operators, small fleets, and independent truck drivers across the USA. We handle load finding, rate negotiation, trip planning, and broker relationships.",
    logo: process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/logo.webp`
      : "https://www.growtrucking.com/logo.webp",
    contactPoint: {
      telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER,
      contactType: "Customer Service",
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL_ADDRESS || "info@growtrucking.com",
      areaServed: "US",
    },
    sameAs: [
      // social media URLs here when available
      // "https://www.facebook.com/growtrucking",
      // "https://www.linkedin.com/company/growtrucking",
      // "https://www.youtube.com/@growtrucking",
    ],
    address: process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS ? {
      streetAddress: `${process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS}${process.env.NEXT_PUBLIC_COMPANY_SUITE_NUMBER ? `, ${process.env.NEXT_PUBLIC_COMPANY_SUITE_NUMBER}` : ''}`,
      addressLocality: process.env.NEXT_PUBLIC_COMPANY_CITY || "",
      addressRegion: process.env.NEXT_PUBLIC_COMPANY_STATE || "",
      postalCode: process.env.NEXT_PUBLIC_COMPANY_ZIP_CODE || "",
      addressCountry: "US",
    } : undefined,
  });

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${ibmPlexSans.variable} font-primary antialiased overflow-x-hidden`}
      >
        <SchemaScript schema={organizationSchema} />
        <Preloader />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
