import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  openGraph: {
    title: "AuraBrows by Saška — Online akademija obrva",
    description:
      "Naučite zanat puder obrva i oblikovanja od nule kroz premium video kurseve i edukacije uživo.",
    locale: "sr_RS",
    type: "website",
    siteName: "AuraBrows by Saška",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
