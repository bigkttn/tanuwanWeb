import type { Metadata, Viewport } from "next";
import { Anuphan, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { siteData } from "../data/site";
import { servicesData } from "../data/services";

const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
});

const ibmPlex = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-sans-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: `ช่างไฟฟ้า กล้องวงจรปิด รามอินทรา บางเขน | ${siteData.name} โทร ${siteData.phone}`,
  description: `ช่างไฟฟ้าและกล้องวงจรปิด รับงานย่าน${siteData.area} ${siteData.tagline} โทร ${siteData.phone}`,
  keywords: [
    ...siteData.areas.flatMap((a) => [`ช่างไฟ ${a}`, `ติดกล้องวงจรปิด ${a}`]),
    "ติดตั้ง EV Charger รามอินทรา",
    "เดินสาย LAN",
    "ตู้สาขา PABX",
    "ทีวีดิจิตอล",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: siteData.brand,
    images: ["/images/work/ev-aion-2.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: `${siteData.brand} (${siteData.name})`,
  description: siteData.tagline,
  telephone: "+66842696913",
  url: siteData.siteUrl,
  image: `${siteData.siteUrl}/images/work/ev-aion-2.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "บางเขน",
    addressRegion: "กรุงเทพมหานคร",
    addressCountry: "TH",
  },
  areaServed: siteData.areas.map((a) => ({ "@type": "Place", name: `${a} กรุงเทพมหานคร` })),
  knowsAbout: servicesData.map((s) => s.title),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${anuphan.variable} ${ibmPlex.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
