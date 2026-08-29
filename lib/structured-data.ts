import { siteConfig } from "@/data/site";

const siteUrl = "https://aurabrowsbysaska.rs";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    sameAs: [siteConfig.instagramUrl],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    inLanguage: "sr-RS",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/o-meni#person`,
    name: "Aleksandra Stojilković",
    alternateName: "Saška",
    jobTitle: "Brow artist i edukator",
    worksFor: {
      "@id": `${siteUrl}/#organization`,
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    sameAs: [siteConfig.instagramUrl],
  };
}

export function getFaqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/kontakt#contact-page`,
    url: `${siteUrl}/kontakt`,
    name: "Kontakt | AuraBrows by Saška",
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    mainEntity: {
      "@type": ["BeautySalon", "EducationalOrganization"],
      "@id": `${siteUrl}/kontakt#business`,
      name: siteConfig.name,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beograd",
        addressCountry: "RS",
      },
      sameAs: [siteConfig.instagramUrl],
    },
  };
}
