import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurabrowsbysaska.rs"),
  title: {
    default: "AuraBrows by Saška - Online akademija obrva",
    template: "%s | AuraBrows by Saška",
  },
  description:
    "Naučite zanat puder obrva i oblikovanja od nule kroz premium video kurseve i edukacije uživo. Pristup samostalnim online kursevima traje 60 dana.",
  ...buildPageMetadata({
    title: "AuraBrows by Saška - Online akademija obrva",
    description:
      "Naučite zanat puder obrva i oblikovanja od nule kroz premium video kurseve i edukacije uživo.",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [getOrganizationSchema(), getWebsiteSchema()];

  return (
    <html lang="sr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnRouteChange />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
