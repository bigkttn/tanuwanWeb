import type { Metadata, Viewport } from "next";
import { Anuphan, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { siteData } from "../data/site";

const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  variable: "--font-anuphan",
});

const ibmPlex = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-sans-thai",
});

export const metadata: Metadata = {
  title: `${siteData.name} | ช่างไฟฟ้า กล้องวงจรปิด ติดตั้ง EV Charger`,
  description: siteData.tagline,
  openGraph: {
    images: ["/images/work/ev-aion-2.jpg"],
  },
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
        {children}
      </body>
    </html>
  );
}
