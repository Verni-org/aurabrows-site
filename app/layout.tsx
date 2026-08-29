import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/metadata";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurabrowsbysaska.rs"),
  title: {
    default: "AuraBrows by Saška — Online akademija obrva",
    template: "%s | AuraBrows by Saška",
  },
  description:
    "Naučite zanat puder obrva i oblikovanja od nule kroz premium video kurseve i edukacije uživo. Doživotni pristup, sertifikat i mentorstvo uz svaki program.",
  ...buildPageMetadata({
    title: "AuraBrows by Saška — Online akademija obrva",
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
    <html lang="sr" className={`${cormorant.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
